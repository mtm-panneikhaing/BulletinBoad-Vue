export default {
    data() {
        return {
            userInfo: this.$store.state.userList,
            userId: this.$store.state.userId,
            //oldProfile: this.$store.state.userInfo.profile,
            selectedType: null,
            previewProfile: "",
            types: [
                { value: '1', text: 'User' },
                { value: '0', text: 'Admin' }
            ],
            error: "",
        };
    },
    mounted() {
        if (this.userInfo.length >= 1) {
            const updatePost = this.userInfo.filter((user) => {
                return (
                    user.id == this.userId
                );
            });
            this.userInfo = updatePost[0];

            this.previewProfile = '';
            //this.$stoe.state.dispatch("setProfile", this.userInfo.profile);
            this.userInfo.profile = null;
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
        editProfileConfirm() {
            this.$store
                .dispatch("editProfileConfirm", this.userInfo)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "user-update-confirm" });
                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    console.log(err);
                });
        },
    }
};
