//import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userList: this.$store.state.userList,
      userProfile: this.$store.state.userProfile,
      profile: '',
    }
  },
  mounted() {
    if (this.userProfile) {
      this.profile = this.userProfile;
    } else {
      this.profile = 'http://localhost:8000/images/' + this.state.user.profile;
    }
    console.log(this.userList.profile);
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
