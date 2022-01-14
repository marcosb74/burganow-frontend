import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/views/SignIn";
import Cart from "@/views/Cart";
import Products from "@/views/Products";
import SignUp from "@/views/SignUp";
import Home from "@/views/Home";
import Admin from "@/views/Admin";
//import Form from "@/components/Form";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products",
    name: "Product",
    component: Products,
    props: true,
  },
  {
    path: "/cart/",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/",
    name: "Landing",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
