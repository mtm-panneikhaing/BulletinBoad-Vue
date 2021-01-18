export default {

  data: () => {
    return {
      valid: true,
      error: "",
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      phone: "",
      dob: "",
      address: "",
      profile: "",
      type: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: '0', text: 'Admin' },
        { value: '1', text: 'User' }
      ]

    }
  },
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    createUser() {
      this.$store
        .dispatch("createUser", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
          phone: this.phone,
          dob: this.dob,
          type: this.type,
          address: this.address,
          profile: this.profile,

        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "user-create-confirm" });
          console.log("create router successul ");
        })
        .catch(err => {
          this.error = err.response.data.errors;
          console.log(err);
        });
    }
  }
};
