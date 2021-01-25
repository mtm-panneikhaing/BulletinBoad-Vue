export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo,
      userList: this.$store.state.userList,
      userId: this.$store.state.userId,
    };
  },
  mounted() {
    const user = this.userList.filter((user) => {
      return (user.id == this.userId);
    });
    this.userInfo = user[0];
  },
};
