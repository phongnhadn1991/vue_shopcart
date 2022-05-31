<template>
  <tbody>
    <tr>
      <td>{{ name }}</td>
      <td>{{ price }}</td>
      <td>
          <button @click="reduceQtyItemCart(invId)" class="qty"
          ><i class="material-icons">arrow_downward</i></button
        >
          <span class="txt_qty">{{ qty }}</span> <button @click="addQtyItemCart(invId)" class="qty"
          ><i class="material-icons">arrow_upward</i></button
        ></td>
      <td>{{ price * qty }}</td>
      <td><button @click="deleteItemCart(invId)">Remove</button></td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "CartItem",
    props: ["name","price","invId", "qty"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
      ...mapActions(['deleteItemCart', 'reduceQtyItemCart', 'addQtyItemCart'])
  },
};
</script>

<style lang="scss" scoped>
button, a {
    cursor: pointer;
}
.qty {
    padding: 0;
    margin: 0 10px;
    i {
        font-size: 18px;
    }
}
.txt_qty {
    display: inline-block;
    min-width: 17px;
    text-align: center;
}
</style>