import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      valid: true,
      name: "",
      email: "",
      password: "",
      phone: "",
      type: "",
      dob: "",
      profile: "",
      address: "",
      error: "",

    }
  },
  mounted() {
    console.log(this.$store.state.user);
    this.name = this.$store.state.user.name;
    this.email = this.$store.state.user.email;
    this.password = this.$store.state.user.password;
    this.phone = this.$store.state.user.phone;
    this.dob = this.$store.state.user.dob;
    this.type = this.$store.state.user.type;
    this.profile = this.$store.state.user.profile;
    this.address = this.$store.state.user.address;

  },
  computed: {
    ...mapGetters(["registerName", "registerEmail", "registerPassword", "registerPhone", "registerDob", "registerType", "registerProfile", "registerAddress", "userId"]),
  },
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    createUserConfirm() {
      // console.log(this.name, this.email);
      this.$store
        .dispatch("createUserConfirm", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          dob: this.dob,
          type: this.type,
          address: this.address,
          profile: this.profile,
        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "user-list" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors.message;
          console.log(err);
        });
    }
  }
}
