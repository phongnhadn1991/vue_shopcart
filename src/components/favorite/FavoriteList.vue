<template>
  <div>
    <div>
      <div class="row" v-if="getItemInLiked.length">
        <ProductItem
          v-for="product in getItemInLiked"
          :key="product.invId"
          :product="product"
        ></ProductItem>
      </div>
      <div class="row" v-else>
        <div class="message">Not item in favorite.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "../product/ProductItem.vue";
export default {
  name: "FavoriteList",
  components: {
    ProductItem,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getItemInLiked"]),
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 15px;
  border: 1px solid #dcdcdc;
  margin-top: 15px;
  font-style: italic;
}
</style>