import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Phone No",
          value: "phone",
        },
        {
          text: "Address",
          value: "address",
        },
        {
          text: "Date Of Birth",
          value: "dob",
        },
        {
          text: "Posted User",
          value: "create_user_id",
        },
        {
          text: "Operation",
          value: "operation",
        },
      ],
      userList: [],
      showList: [],
      search: '',
    };
  },

  computed: {
    ...mapGetters(["isLoggedIn", "userId"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  mounted() {
    console.log(this.$store.state.user);
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data;
        this.showList = this.userList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    filterUser() {
      this.showList = this.userList.filter((user) => {
        return (
          user.name.includes(this.search) ||
          user.email.includes(this.search)
        );
      });
    },
    deleteUser(id) {
      if (confirm("Do you really want to delete? " + id)) {
        console.log(id);
        this.$axios.delete('/user/delete' + id)
          .then(() => {
            this.error = " ",
              console.log("delete successful");
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  },
};
