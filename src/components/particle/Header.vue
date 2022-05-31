<template>
    <nav>
        <div class="nav-wrapper">
            <router-link class="brand-logo left" :to="{name: 'product.list.manager'}">MCN</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li v-if="isAuthencation == true"><router-link :to="{name: 'product.list.manager'}">Product Manager</router-link></li>
                <li><router-link :to="{name: 'product.list'}">Product List</router-link></li>
                <li><router-link :to="{name: 'product.favorite'}">Favorite ({{ itemsInLiked }})</router-link></li>
                <li><router-link :to="{name: 'cart'}">Cart ({{ inCart.length }})</router-link></li>
                <li v-if="isAuthencation == false"><a @click="getAuthen" class="btn waves-effect waves-teal">Login</a></li>
                <li v-else><a @click="getAuthen" class="btn waves-effect waves-teal">Admin(Logout)</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Header',

    data() {
        return {
            
        };
    },

    computed: {
        ...mapGetters(['inCart', 'itemsInLiked', 'isAuthencation'])
    },

    methods: {
        ...mapActions(['getAuthen'])
    },
};
</script>

<style lang="scss" scoped>
nav {
    margin-bottom: 4rem;
    .brand-logo {
        left: 1rem
    }
}
</style>