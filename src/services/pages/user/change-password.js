export default {
  data: () => {

  },
  methods: {
    /**
     * This is to change password
     * @returns void
     */
    changePassword() {
      this.$store
        .dispatch("changePassword", {
          old_password: this.old_password,
          new_password: this.new_password,
          con_new_password: this.con_new_password,
        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "edit-profile" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors.message;
          console.log(err);
        });
    }
  }
};
