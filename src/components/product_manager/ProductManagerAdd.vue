<template>
  <div>
    <div class="row title-page">
      <h3>Add Product</h3>
    </div>
    <div class="row">
      <router-link :to="{ name: 'product.list.manager' }"
        ><a class="waves-effect waves-light btn-small red">Back</a></router-link
      >
    </div>
    <div class="row">
      <form class="col s12" method="post" @submit.prevent="save">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="product_name"
              type="text"
              v-model="product.name"
            />
            <label for="product_name">Product Name</label>
          </div>
          <div class="input-field col s12">
            <input
              id="product_price"
              type="text"
              v-model="product.price"
            />
            <label for="product_price">Price</label>
          </div>
          <div class="row">
            <div class="col s12">
              <button type="submit" class="waves-effect waves-light btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ProductManagerAdd",
  data() {
    return {
      product: {
        name: '',
        price: '',
      }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    save() {
      let dataAdd = {
        name: this.product.name,
        price: this.product.price,
      };
      this.addProduct(dataAdd)
    }
  }
};
</script>
