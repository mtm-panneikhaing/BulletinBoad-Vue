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
            postDetail: []
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
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.id.includes(this.id) ||
                    post.title.includes(this.title) ||
                    post.description.includes(this.description) ||
                    post.create_user_id.includes(this.create_user_id)
                );
            });
        },
        DeleteUser(id) {
            if (confirm("Do you really want to delete?" + id)) {
                console.log(id);
                this.$axios.delete('/post/delete' + id)
                    .then(() => {
                        this.error = "";
                        //this.$store.state.post.splice(1, id);
                        //this.$router.push({ name: "post-list" });
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        /********************** *//********************** */
        /********************** *//********************** */
        /********************** *//********************** */
        updatePost(id) {
            this.$store
                .dispatch("updatePost", {
                    title: this.title,
                    description: this.description,
                    updatePostID: id
                })
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "post-list" });
                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    console.log(err);
                });

            // console.log(id);
            // this.$axios.get('/post/update' + id)
            //     .then((response) => {
            //         this.error = ""
            //         this.$store.state.post.title = response.data.title;
            //         this.$store.state.post.description = response.data.description;
            //         this.$store.state.post.id = response.data.id;
            //         console.log(this.$store.state.post.title);
            //         this.$router.push({ name: "post-update" });
            //     })
            //     .catch(error => {
            //         console.log("Update post" + error);
            //     })
        },
        /********************** *//********************** */
        /********************** *//********************** */
        /********************** *//********************** */
        /********************** *//********************** */
        download() {
            this.$axios.get('/download')
                .then(() => { console.log("download successful"); });

        },
        //     console.log("you can called" + id + " " + title + description);
        //     this.$modal.show("dialog", {
        //         title: "Posts Detail",
        //         text: title,
        //         buttons: [
        //             {
        //                 title: "Cancel",
        //                 handler: () => {
        //                     this.$modal.hide("dialog");
        //                     console.log("to reach handlers");
        //                 }
        //             },
        //             {
        //                 title: "Like",
        //                 handler: () => {
        //                     alert("Like Action");
        //                 }
        //             },
        //             {
        //                 title: "ok",
        //                 handler: () => {
        //                     alert("success");
        //                 }
        //             }
        //         ]
        //     });

        // }, 
        show() {
            this.$modal.show("hello");
        },
        hide() {
            this.$modal.hide("hello");
        }


    }

};
