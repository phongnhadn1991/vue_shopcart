<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Item Quality</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <CartItem
        v-for="item in inCart"
        :key="item.invId"
        :name="item.name"
        :price="item.price"
        :invId="item.invId"
        :qty="item.qty"
      ></CartItem>
      <tbody v-if="total > 0">
        <td></td>
        <td></td>
        <td></td>
        <td>
          <p class="resulte_total">
            <strong>Total</strong>: <span>{{ total }}</span>
          </p>
        </td>
        <td>
          <button v-if="inCart.length" @click="deleteAllCart">
            Delete Cart
          </button>
        </td>
      </tbody>
    </table>
    <div class="message" v-if="!inCart.length">Not item in cart.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["inCart", "total"]),
  },

  mounted() {},

  methods: {
    deleteAllCart() {
      return (this.$store.state.inCart = []);
    },
  },
};
</script>

<style lang="scss" scoped>
.resulte_total {
  strong {
    font-weight: bold;
  }
  span {
    color: red;
    font-weight: bold;
  }
}
.message {
    text-align: center;
    padding: 15px;
    border: 1px solid #dcdcdc;
    margin-top: 15px;
    font-style: italic;
}
</style>