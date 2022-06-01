<template>
  <div class="row">
    <div class="row title-page">
      <h3>List Product</h3>
    </div>
    <div class="c-search__product">
      <div class="row">
        <div class="col s4">
          <input type="text" placeholder="Search..." v-model="searchQuery" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="preloader-wrapper small active" v-if="!isLoading">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>

      <div v-if="isLoading">
        <ProductItem
          v-for="product in filteredList"
          :key="product.invId"
          :product="product"
        ></ProductItem>
      </div>
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
import ProductItem from "../product/ProductItem.vue";
import CartList from "../cart/CartList.vue";
import { mapActions, mapGetters } from "vuex";
import M from "materialize-css";

export default {
  name: "ProductList",
  components: {
    ProductItem,
    CartList,
  },
  data() {
    return {
      searchQuery: "",
    };
  },

  computed: {
    ...mapGetters(["products", "isLoading"]),
    filteredList() {
      return this.products.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  mounted() {
    M.AutoInit();
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