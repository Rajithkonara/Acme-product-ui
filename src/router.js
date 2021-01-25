import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/products",
            name: "products",
            component: () => import("./components/MainComponent")
        },
        {
            path: "/list",
            alias: "/list",
            name: "list",
            component: () => import("./components/PriceListComponent")
        }
    ]
});