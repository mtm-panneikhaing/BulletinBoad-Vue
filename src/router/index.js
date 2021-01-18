import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostCreateConfirm from "../pages/post/PostCreateConfirm";
import PostUpdate from "../pages/post/PostUpdate";
import PostUpdateConfirm from "../pages/post/PostUpdateConfirm";
import Upload from "../pages/post/Upload";
import UserList from "../pages/user/UserList";
import UserCreate from "../pages/user/UserCreate";
import UserCreateConfirm from "../pages/user/UserCreateConfirm";
import UserProfile from "../pages/user/UserProfile";
import EditProfile from "../pages/user/EditProfile";
import ChangePassword from "../pages/user/ChangePassword";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/create/confirm",
        name: "post-create-confirm",
        component: PostCreateConfirm
    },
    {
        path: "/post/update",
        name: "post-update",
        component: PostUpdate
    },
    {
        path: "/post/delete",
        name: "post-delete",
    },
    {
        path: "/upload",
        name: "upload",
        component: Upload
    },
    {
        path: "/download",
        name: "download",
    },
    {
        path: "/post/update/confirm",
        name: "post-update-confirm",
        component: PostUpdateConfirm
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/create/confirm",
        name: "user-create-confirm",
        component: UserCreateConfirm
    },
    {
        path: "/user/profile",
        name: "user-profile",
        component: UserProfile,
    },
    {
        path: "/edit/profile",
        name: "edit-profile",
        component: EditProfile,
    },
    {
        path: "/change/password",
        name: "change-password",
        component: ChangePassword,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    if (!loggedIn && to.name != "login") {
        return next("/login");
    }
    next();
});

export default router;
