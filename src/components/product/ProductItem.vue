<template>
  <div class="col s4">
    <div class="collection">
      <div class="collection-item avatar">
        <img src="../../assets/images/yuna.jpg" alt="" class="circle" />
        <h6>{{ product.name }}</h6>
        <p>{{ product.price }}</p>
        <a v-if="product.liked === 'no'" @click="addToLiked(product.invId)" class="secondary-content icon_favorite"
          ><i class="material-icons">grade</i></a
        >
        <a v-if="product.liked === 'yes'" @click="removeToLiked(product.invId)" class="secondary-content icon_favorite"
          ><i class="material-icons" :class="{active : product.liked === 'yes'}">grade</i></a
        >
         <a @click="addToCart(product)" class="secondary-content icon_cart"
          ><i class="material-icons">shopping_cart</i></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "ProductItem",
  props: ["product"],
  methods: {
      ...mapActions(['addToCart', 'addToLiked', 'removeToLiked']),
  },
};
</script>

<style lang="scss" scoped>
.icon_favorite {
    color: #ec407a ;
}
.icon_cart {
    top: 45px !important;
}
a {
    cursor: pointer;
}
.material-icons.active {
    color: blue !important;
}
a,button {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}
</style>