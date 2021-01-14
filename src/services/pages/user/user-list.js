import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
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
      postList: [],
      showList: [],
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  mounted() {
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
    /**
     * This is to filter posts of datatable.
     * @returns void
     */
    filterPosts() {
      this.showList = this.userList.filter((user) => {
        return (
          user.name.includes(this.name) ||
          user.email.includes(this.email) ||
          user.phone.includes(this.phone) ||
          user.address.includes(this.address) ||
          user.dob.includes(this.dob) ||
          user.create_user_id.includes(this.create_user_id)
        );
      });
    },
  },
};
