export default {
  data() {
    return {
      routeID: this.$route.params.id,
      postInfo: this.$store.state.postList,
      error: "",
    };
  },
  mounted() {
    if (this.postInfo.length > 1) {
      const updatePost = this.postInfo.filter((post) => {
        return (
          post.id == this.routeID
        );
      });
      this.postInfo = updatePost[0];
    }
  },
  methods: {
    updatePostConfirm() {
      this.$store
        .dispatch("updatePostConfirm", this.postInfo)
        .then(() => {
          this.error = "";
          this.$router.push({ name: "post-update-confirm" });
        })
        .catch(err => {
          this.error = err.response.data.errors;
          console.log(err);
        });
    },
    changeStatus() {
      if (this.postInfo.status) {
        this.postInfo.status = 1;
      } else {
        this.postInfo.status = 0;
      }
    },
    clear() {
      this.error = " ";
    }
  }
};
