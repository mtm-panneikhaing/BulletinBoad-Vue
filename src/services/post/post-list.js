import { mapGetters } from "vuex";
import XLSX from "xlsx";
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
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
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
            showList: [],
            postDetail: [],
            search: '',
            title: '',
            description: '',

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
        this.$axios
            .get("/post/list")
            .then((response) => {
                this.$store.commit('setPostList', response.data);
                this.showList = this.$store.state.postList;
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
        showPostDetail(id) {
            const postDetail = this.showList.filter((post) => {
                return (post.id == id);
            });
            this.postDetail = postDetail[0];
        },
        filterPost() {
            this.showList = this.$store.state.postList.filter((post) => {
                return (
                    post.title.includes(this.search) ||
                    post.description.includes(this.search)
                );
            });
        },
        deletePost(id) {
            if (confirm("Do you really want to delete?")) {
                this.$store.dispatch("deletePost", id)
                    .then(() => {
                        this.error = "";
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        download() {
            const data = XLSX.utils.json_to_sheet(this.showList)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, data, 'Post List')
            XLSX.writeFile(wb, 'demo.xlsx')
        },
    }

};
