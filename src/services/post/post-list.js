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
                    value: "create_user_id",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
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
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
        this.show();
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPost() {
            this.showList = this.postList.filter((post) => {
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
                        //this.$store.state.post.splice(id, index);
                        //this.$router.push({ name: "post-list" });
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        updatePost(id) {
            this.$axios.get('/post/update' + id)
                .then((response) => {
                    this.error = ""
                    this.$store.state.post.title = response.data.title;
                    this.$store.state.post.description = response.data.description;
                    this.$store.state.post.id = response.data.id;
                    this.$router.push({ name: "post-update" });
                })
                .catch(error => {
                    console.log("Update post" + error);
                })
        },
        download() {
            this.$axios.get('/download')
                .then(() => { console.log("download successful"); });

        },
        show() {
            this.$modal.show("hello");
        },
        hide() {
            this.$modal.hide("hello");
        }


    }

};
