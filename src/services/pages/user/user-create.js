export default {

    data: () => {
        return {
            error: "",
            selectedType: null,
            previewProfile: "",
            types: [
                { value: '1', text: 'User' },
                { value: '0', text: 'Admin' }
            ],
            userInfo: {
                name: "",
                email: "",
                password: "",
                password_confirm: "",
                phone: "",
                dob: "",
                address: "",
                profile: "",
            }

        }
    },
    methods: {
        setSelected(value) {
            this.userInfo.type = value;
        },
        imageChanged(e) {

            this.previewProfile = URL.createObjectURL(e.target.files[0]);
            this.$store.state.userProfile = URL.createObjectURL(e.target.files[0]);
            let fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = (e) => {
                this.userInfo.profile = e.target.result;
            }
        },
        /**
         * This to submig create confirmation form.
         * @returns void
         */
        createUser() {
            this.$store
                .dispatch("createUser", this.userInfo)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "user-create-confirm" });
                    console.log("create router successul ");
                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    console.log(this.error);
                });
        },
        clear() {
            this.error = " ";
        }
    }
};
