export default {
    data() {
        return {
            password: {
                old_password: "",
                new_password: "",
                con_new_password: "",
            },
            error: "",
            err_msg: "",
            def_err_msg: "The given data was invalid.",
        };
    },
    methods: {
        /**
         * This is to change password
         * @returns void
         */
        changePassword() {
            this.$axios.post("/changePassword", this.password)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "user-list" });
                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    if (err.response.data.message) {
                        this.err_msg = err.response.data.message;
                    }
                });
        },
        clear() {
            this.error = " ";
            this.err = " ";
        }
    }
};
