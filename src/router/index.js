import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "../view/DashboardPage.vue";
import Category from "../view/CategoryPage.vue";
import Product from "../view/ProductPage.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/category", component: Category },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
