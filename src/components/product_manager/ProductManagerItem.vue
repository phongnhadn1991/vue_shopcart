<template>
  <tbody :class="`item ${className}`">
    <tr>
      <td>{{ product.invId }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>
        <router-link :to="{ name: 'product.detail', params: {id: product.invId} }">
          <button
          class="btn-floating waves-effect btn brown"
        >
          <i class="material-icons">center_focus_weak</i>
        </button>
        </router-link>
        <router-link :to="{ name: 'product.edit', params: {id: product.invId} }">
          <button
          class="btn-floating waves-effect waves-light btn blue"
        >
          <i class="material-icons">create</i>
        </button>
        </router-link>

        <button
          class="btn-floating waves-effect waves-light btn red"
          @click="deleteProduct(product.invId)"
        >
          <i class="material-icons">delete</i>
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductManagerItem",

  props: ["className", "product"],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    ...mapActions(["deleteProduct"]),
  },
};
</script>

<style lang="scss" scoped>
</style>