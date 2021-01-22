import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        userName: "",
        userId: "",
        user: null,
        post: null,
        postList: [],
        userList: [],
        userProfile: "",
        userInfo: [],
        createUser: [],
    },
    mutations: {
        /**
         *
         * @param {*} state
         * @param {*} postData
         */
        setUserData(state, userData) {
            state.user = userData;
        },
        setPostData(state, postData) {
            state.post = postData;
        },
        setPostList(state, data) {
            state.postList = data;
        },
        setUserList(state, data) {
            state.userList = data;
        },
        setCreateUser(state, data) {
            state.createUser = data;
        },
        setDeletePostList(state, id) {
            const index = state.postList.findIndex(post => post.id == id);
            state.postList.splice(index, 1);
        },
        setDeleteUserList(state, id) {
            const index = state.userList.findIndex(user => user.id == id);
            state.userList.splice(index, 1);
        },
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
            //console.log(credentials);
            return axios.post("/user/create", credentials).then(({ data }) => {
                commit("setCreateUser", data);
            });
        },
        createUserConfirm({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/user/create/confirm", credentials).then(({ data }) => {
                commit("setCreateUser", data);
            });
        },
        createPost({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/post/create", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        createPostConfirm({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/post/createConfirm", credentials).then(({ data }) => {
                commit("setPostData", data);
            });
        },
        updatePostConfirm({ commit }, credentials) {
            return axios.post("/post/updateConfirm", credentials).then(({ data }) => {
                commit("setPostList", data);
            });
        },
        updatePost({ commit }, credentials) {
            return axios.post('/post/update', { userId: this.state.userId, ...credentials })
                .then(({ data }) => {
                    commit("setPostData", data);
                });
        },
        editProfileConfirm({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/user/updateConfirm", credentials)
                .then(({ data }) => {
                    commit("setUserList", data);
                });
        },
        updateUser({ commit }, credentials) {
            return axios.post('/user/update', credentials)
                .then(({ data }) => {
                    commit("setUserInfo", data);
                });
        },
        deletePost({ commit }, id) {
            return axios.delete("/post/delete/" + id)
                .then(() => {
                    commit("setDeletePostList", id);
                })
        },
        deleteUser({ commit }, id) {
            return axios.delete("/user/delete/" + id)
                .then(() => {
                    commit("setDeleteUserList", id);
                })
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.success.data.user_type) {
                return state.user.success.user_type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.userId) {
                return state.userId;
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
        userProfile: (state) => {
            if (state.userProfile) {
                return state.userProfile;
            }
        },
        userInfo: (state) => {
            if (state.userInfo) {
                return state.userInfo;
            }
        },
        // postUpdateTitle: (state) => {
        //     if (state.post && state.post.title) {
        //         return state.post.title;
        //     }
        // },
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
        postList: (state) => {
            if (state.postList) {
                return state.postList;
            }
        },
        userList: (state) => {
            if (state.userList) {
                return state.userList;
            }
        },
        createUser: (state) => {
            if (state.createUser) {
                return state.createUser;
            }
        },


    },
    plugins: [createPersistedState()],
});
