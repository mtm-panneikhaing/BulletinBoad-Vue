export default {
  data: () => {
    return {
      title: "",
      description: " ",
      error: "",
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
          this.$router.push({ name: "post-create-confirm" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors;
          console.log(err);
        });
    },
    clear() {
      this.error = " ";
    }
  }
};
