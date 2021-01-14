import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      valid: true,
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

  },
  computed: {
    ...mapGetters(["postTitle", "postDescription"]),
  },
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    createPost() {
      console.log(this.title, this.description);
      this.$store
        .dispatch("createPost", {
          title: this.title,
          description: this.description,
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
