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
            update: [],
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
            console.log(this.postDetail);
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
            if (confirm("Do you really want to delete?" + id)) {
                console.log(id);
                this.$axios.delete('/post/delete' + id)
                    .then(() => {
                        this.error = "";
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        download() {
            this.$axios.get('/download')
                .then(() => { console.log("download successful"); });

        },

    }

};
