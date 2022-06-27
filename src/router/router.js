import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        name: 'product.list.manager',
        path: '/product/manager',
        component: () => import("../components/product_manager/ProductManagerList.vue"),
        meta: {keepAlive: false, deepth: 1}
    },
    {
        name: 'product.detail',
        path: '/product/detail/:id',
        params: true,
        component: () => import("../components/product_manager/ProductManagerDetail.vue"),
        meta: {keepAlive: false, deepth: 1}
    },
    {
        name: 'product.create',
        path: '/product/create',
        component: () => import("../components/product_manager/ProductManagerAdd.vue"),
        meta: {keepAlive: false, deepth: 1}
    },
    {
        name: 'product.edit',
        path: '/product/edit/:id',
        params: true,
        component: () => import("../components/product_manager/ProductManagerEdit.vue"),
        meta: {keepAlive: false, deepth: 1}
    },
    {
        name: 'product.list',
        path: '/product',
        component: () => import("../components/product/ProductList.vue")
    },
    {
        name: 'product.favorite',
        path: '/product/favorite',
        component: () => import("../components/favorite/FavoriteContainer.vue")
    },
    {
        name: 'cart',
        path: '/cart',
        component: () => import("../components/cart/CartContainer.vue")
    },
    {
        name: 'wordpress',
        path: '/wordpress',
        component: () => import("../components/wordpress/WordpressContainer.vue")
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router