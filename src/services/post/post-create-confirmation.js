import { mapGetters } from "vuex";
export default {
    data: () => {
        return {
            valid: true,
            title: "",
            description: "",
            error: "",
        }
    },
    mounted() {
        this.title = this.$store.state.post.title;
        this.description = this.$store.state.post.description;

    },
    computed: {
        ...mapGetters(["postTitle", "postDescription"]),
    },
    methods: {
        /**
         * This to submig create confirmation form.
         * @returns void
         */
        createPostConfirm() {
            this.$store
                .dispatch("createPostConfirm", this.$store.state.post)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "post-list" });
                })
                .catch(err => {
                    this.error = err;
                    console.log(err);
                });
        }
    }
}
