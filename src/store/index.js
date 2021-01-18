import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
        post: null,
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },
        /**
         * 
         * @param {*} state 
         * @param {*} postData 
         */
        setPostData(state, postData) {
            state.post = postData;
        }
    },
    actions: {
        login({ commit }, credentials) {
            return axios.post("/auth/login", credentials).then(({ data }) => {
                commit("setUserData", data);
            });
        },
        logout({ commit }, credentials) {
            return axios.post("/auth/logout", credentials).then(() => {
                commit("setUserData", null);
            });
        },
        createUser({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/user/create", credentials).then(({ data }) => {
                commit("setUserData", data);
            });
        },
        createUserConfirm({ commit }, credentials) {
            return axios.post("/user/create/confirm", credentials).then(({ data }) => {
                commit("setUserData", data);
            });
        },
        create({ commit }, credentials) {
            return axios.post("/post/create", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        createPost({ commit }, credentials) {
            return axios.post("/post/create/confirm", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        update({ commit }, credentials) {
            return axios.post("/post/update/confirm", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        changePassword({ commit }, credentials) {
            return axios.post("/changePassword", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        updatePost({ commit }, context) {
            return axios.post('/post/update', context)
                .then(({ data }) => {
                    commit("setPostData", data);
                })
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.success.user_type) {
                return state.user.success.user_type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.user && state.user.success.user_id) {
                return state.user.success.user_id;
            }
        },
        userName: (state) => {
            if (state.user && state.user.success.name) {
                return state.user.success.name;
            }
        },
        postTitle: (state) => {
            if (state.post && state.post.title) {
                return state.post.title;
            }
        },
        postDescription: (state) => {
            if (state.post && state.post.description) {
                return state.post.description;
            }
        },
        postUpdateTitle: (state) => {
            if (state.post && state.post.title) {
                return state.post.title;
            }
        },
        registerName: (state) => {
            if (state.user && state.user.name) {
                return state.user.name;
            }
        },
        registerEmail: (state) => {
            if (state.user && state.user.email) {
                return state.user.email;
            }
        },
        registerPassword: (state) => {
            if (state.user && state.user.password) {
                return state.user.password;
            }
        },
        registerPhone: (state) => {
            if (state.user && state.user.phone) {
                return state.user.phone;
            }
        },
        registerDob: (state) => {
            if (state.user && state.user.dob) {
                return state.user.dob;
            }
        },
        registerAddress: (state) => {
            if (state.user && state.user.address) {
                return state.user.address;
            }
        },
        registerType: (state) => {
            if (state.user && state.user.type) {
                return state.user.type;
            }
        },
        registerProfile: (state) => {
            if (state.user && state.user.profile) {
                return state.user.profile;
            }
        },

    },
    plugins: [createPersistedState()],
});
