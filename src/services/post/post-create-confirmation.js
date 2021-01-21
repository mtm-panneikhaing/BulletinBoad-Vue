import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      valid: true,
      title: "",
      description: "",
      error: "",

      //  validation rules for post title.
      titleRules: [value => !!value || "The title field is required."],

      // validation rules for description.
      descriptionRules: [value => !!value || "The title field is required."]
    }
  },
  mounted() {
    console.log(this.$store.state.post);
    this.title = this.$store.state.post.title;
    this.description = this.$store.state.post.description;

  },
  computed: {
    ...mapGetters(["postTitle", "postDescription", "userId"]),
  },
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    createPostConfirm() {
      this.$store
        .dispatch("createPostConfirm", this.$store.state.post)
        .then(() => {
          this.error = "";
          this.$router.push({ name: "post-list" });
          console.log("router successul");
          //console.log(response.data);
          console.log(this.$store.state.userId);
        })
        .catch(err => {
          this.error = err;
          console.log(err);
        });
    }
  }
}
