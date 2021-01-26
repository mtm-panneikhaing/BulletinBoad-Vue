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
                    value: "user.name",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userDetail: [],
            showList: [],
            search: '',
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
                this.$store.commit('setUserList', response.data);
                this.showList = this.$store.state.userList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        showUserDetail(id) {
            const userDetail = this.showList.filter((user) => {
                return (user.id == id);
            });
            this.userDetail = userDetail[0];
            console.log(this.userDetail);
        },
        filterUser() {
            this.showList = this.$store.state.userList.filter((user) => {
                return (
                    user.name.includes(this.search) ||
                    user.email.includes(this.search)
                );
            });
        },
        deleteUser(id) {
            if (confirm("Do you really want to delete? " + id)) {
                //this.$axios.delete('/user/delete' + id)
                this.$store.dispatch("deleteUser", id)
                    .then(() => {
                        this.error = " ",
                            console.log("delete successful");
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
    },
};
