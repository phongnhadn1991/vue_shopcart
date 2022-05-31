<template>
  <div class="row">
    <div class="row title-page">
      <h3>List Product</h3>
    </div>
    <div class="row">
      <ProductItem
      v-for="product in products"
      :key="product.invId"
      :product="product"
      ></ProductItem>
    </div>
    <div class="row">
      <div class="row title-page">
      <h3>Cart</h3>
    </div>
      <CartList></CartList>
    </div>
  </div>
</template>

<script>
import ProductItem from "../product/ProductItem.vue"
import CartList from "../cart/CartList.vue"
import { mapActions , mapGetters } from 'vuex';
import M from 'materialize-css'

export default {
  name: "ProductList",
  components: {
    ProductItem,
    CartList,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['products']),
  },
  mounted() {
    M.AutoInit()
  },
  async created() {
    this.getAllProduct();
  },

  methods: {
     ...mapActions(["getAllProduct"]),
  },
};
</script>

<style lang="scss" scoped>
h6 {
  margin: 0 0 0.2rem;
  font-weight: bold;
}
.collection {
  .collection-item {
    min-height: 70px;
  }
}
</style>