import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userProfile", "createUser"]),
  },
  methods: {
    /**
     * This to submig create confirmation form.
     * @returns void
     */
    createUserConfirm() {
      this.$store
        .dispatch("createUserConfirm", this.$store.state.createUser)
        .then(() => {
          this.error = "";
          this.$router.push({ name: "user-list" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors;
          console.log(this.error);
        });
    }
  }
}
