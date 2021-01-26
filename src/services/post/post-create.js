export default {
    data: () => {
        return {
            title: "",
            description: " ",
            error: "",
        }
    },
    methods: {
        /**
         * This to submit create confirmation form.
         * @returns void
         */
        create() {
            this.$store
                .dispatch("createPost", {
                    title: this.title,
                    description: this.description
                })
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "post-create-confirm" });
                    console.log("router successul");

                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    console.log(err);
                });
        },
        clear() {
            this.error = " ";
        }
    }
};
