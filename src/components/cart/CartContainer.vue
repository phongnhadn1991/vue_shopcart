<template>
  <div>
    <div class="row">
      <div class="row title-page">
        <h3>Cart</h3>
      </div>
      <CartList></CartList>
    </div>
  </div>
</template>

<script>
import CartList from "../cart/CartList.vue";
export default {
  name: "CartContainer",
  components: {
    CartList,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>