export default {
  data() {
    return {
      userInfo: this.$store.state.userList,
      userId: this.$store.state.userId,
      error: "",
    };
  },
  mounted() {
    if (this.userInfo.length > 1) {
      const updatePost = this.userInfo.filter((user) => {
        return (
          user.id == this.userId
        );
      });
      this.userInfo = updatePost[0];
      //this.userInfo.profile = null;
    }
  }
};
