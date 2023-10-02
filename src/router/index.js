import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { LocalStorage } from "quasar";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to, from, next) => {
    const dataUser = LocalStorage.getItem("data");
    const noSession = dataUser == null || dataUser === "undefined";
    const auth = "auth";
    const superadmin = "superadmin";
    const admin = "admin";
    const guest = "guest";

    if (to.matched.some((record) => record.meta.superadmin)) {
      if (noSession) {
        next({
          name: auth,
        });
      } else {
        if (dataUser.user.ROLE === "0") {
          next();
        }
      }
    }

    if (to.matched.some((record) => record.meta.admin)) {
      if (noSession) {
        next({
          name: auth,
        });
      } else {
        if (dataUser.user.ROLE === "1") {
          next();
        }
      }
    }

    if (to.matched.some((record) => record.meta.guest)) {
      next();
    } else {
      if (noSession) {
        next();
      } else {
        const roleUser = dataUser.user.ROLE;

        if (roleUser === "0") {
          next({
            name: superadmin,
          });
        } else if (roleUser === "1") {
          next({
            name: admin,
          });
        } else if (roleUser === "2") {
          next({
            name: guest,
          });
        } else {
          next({
            name: auth,
          });
        }
      }
    }
  });

  return Router
})
