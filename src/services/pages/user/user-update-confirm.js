import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userList", "userProfile"]),
  },
  methods: {
    /**
     * This to submig update confirmation form.
     * @returns void
     */
    updateUser() {
      this.$store
        .dispatch("updateUser", this.$store.state.userList)
        .then(() => {
          this.error = "";
          this.$router.push({ name: "user-list" });
          console.log("router successul");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
