import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["postList"]),
  },
  methods: {
    /**
     * This to submig update confirmation form.
     * @returns void
     */
    updatePost() {
      this.$store
        .dispatch("updatePost", {
          id: 1,
          ...this.$store.state.postList
        })
        .then(() => {
          this.error = "";
          this.$router.push({ name: "post-list" });
          console.log("router successul");
        })
        .catch(err => {
          this.error = err.response.data.errors;
          console.log(err);
        });
    }
  }
}
