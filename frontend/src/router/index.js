import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import store from "@/store/index.js";

// Components
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import UniGuide from "@/views/UniGuide/UniGuide.vue";
import UniPack from "@/views/UniPack/UniPack.vue";

// Async Loading
const EditProfile = defineAsyncComponent(() =>
  import("@/views/profile/EditProfile.vue")
);
const UserProfile = defineAsyncComponent(() =>
  import("@/views/profile/UserProfile.vue")
);
const GuideArticle = defineAsyncComponent(() =>
  import("@/views/UniGuide/GuideArticle.vue")
);
const UniData = defineAsyncComponent(() =>
  import("@/views/UniPack/UniData.vue")
);
const Company = defineAsyncComponent(() => import("@/views/about/Company.vue"));
const Policies = defineAsyncComponent(() =>
  import("@/views/about/Policies.vue")
);
const UploadArticle = defineAsyncComponent(() =>
  import("@/views/admin/UploadArticle.vue")
);
const UniStats = defineAsyncComponent(() =>
  import("@/views/admin/UniStats.vue")
);
const UserAuth = defineAsyncComponent(() =>
  import("@/views/auth/UserAuth.vue")
);
const TheLogin = () => import("@/views/auth/TheLogin.vue");
const TheRegister = defineAsyncComponent(() =>
  import("@/views/auth/TheRegister.vue")
);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    alias: "/",
    meta: {
      title: "Home",
    },
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
    meta: {
      title: "Edit Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/uni-guide",
    name: "UniGuide",
    component: UniGuide,
    meta: {
      title: "UniGuide",
    },
  },
  {
    path: "/uni-guide/:articleId",
    name: "GuideArticle",
    component: GuideArticle,
    meta: {
      title: "Article",
    },
  },
  {
    path: "/uni-pack",
    name: "UniPack",
    component: UniPack,
    meta: {
      title: "UniPack",
    },
  },
  {
    path: "/uni-data/:uni",
    name: "UniData",
    component: UniData,
    meta: {
      title: "University",
    },
  },
  {
    path: "/user-auth",
    name: "UserAuth",
    component: UserAuth,
    meta: {
      title: "Auth",
    },
  },
  {
    path: "/login",
    name: "TheLogin",
    component: TheLogin,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "TheRegister",
    component: TheRegister,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/stats",
    name: "UniStats",
    component: UniStats,
    meta: {
      title: "Stats",
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/upload",
    name: "UploadArticle",
    component: UploadArticle,
    meta: {
      title: "Upload Article",
    },
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
    meta: {
      title: "Company",
    },
  },
  {
    path: "/policies",
    name: "Policies",
    component: Policies,
    meta: {
      title: "Policies",
    },
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "NotFound",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return { savedPosition };
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `UniGroup | ${to.meta.title}`;
  next();
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/user-auth");
  } else if (to.meta.isAdmin && !store.getters.userStatus === "admin") {
    next("/stats");
  } else {
    next();
  }
});

export default router;
