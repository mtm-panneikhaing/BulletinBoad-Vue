import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      valid: true,
      id: "",
      title: "",
      description: " ",
      error: "",

      //  validation rules for post title.
      titleRules: [value => !!value || "The title field is required."],

      // validation rules for description.
      descriptionRules: [value => !!value || "The title field is required."]
    }
  },
  mounted() {
    this.title = this.$store.state.post.title;
    this.description = this.$store.state.post.description;
    this.id = this.$store.state.post.id;

  },
  computed: {
    ...mapGetters(["postTitle", "postDescription", "userId"]),
  },
  methods: {
    /**
     * This to submig update confirmation form.
     * @returns void
     */
    updatePost() {
      console.log(this.title, this.description, this.id);
      this.$store
        .dispatch("updatePost", {
          title: this.title,
          description: this.description,
          id: this.id,
        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "post-list" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors.message;
          console.log(err);
        });
    }
  }
}
