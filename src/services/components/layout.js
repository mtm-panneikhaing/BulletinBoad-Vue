import { mapGetters } from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
            userId: this.$store.state.userId,
            userName: this.$store.state.userName,
            userType: this.$store.state.userType,
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to route profile page.
         * @returns void
         */
        showProfile() {
            this.$router.push({ name: 'user-profile' });
        },
    },
};
