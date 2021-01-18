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
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    create() {
      this.$store
        .dispatch("create", {
          title: this.title,
          description: this.description
        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "post-create-confirm", params: { title: this.title } });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors.message;
          console.log(err);
        });
    }
  }
};
