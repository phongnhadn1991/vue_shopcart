<template>
  <div class="row" v-if="isAuthencation">
    <div class="row title-page">
      <h3>List Product</h3>
    </div>
    <div class="row">
      <router-link :to="{ name: 'product.create' }"><a class="waves-effect waves-light btn-small">Add new</a></router-link>
    </div>
    <table>
      <thead>
        <tr>
            <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <ProductManagerItem
        v-for="item in products"
        :key="item.invId"
        :class-name="``"
        :product="item"
      >
      </ProductManagerItem>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProductManagerItem from "./ProductManagerItem.vue";
export default {
  name: "ProductManagerList",

  components: {
    ProductManagerItem,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["products","isAuthencation"]),
  },

  created() {
    this.getAllProduct();
  },

  mounted() {
  },

  methods: {
    ...mapActions(["getAllProduct", "getAuthen"]),
  },
  watch: {
    isAuthencation(){
      if(!this.isAuthencation) {
        this.$router.push({name: 'product.list'})
      }
    }
  }
};
</script>

<style scoped>
</style>