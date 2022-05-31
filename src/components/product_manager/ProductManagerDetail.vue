<template>
  <div>
    <div class="row title-page">
      <h3>Detail Product</h3>
    </div>
    <div class="row">
      <router-link :to="{ name: 'product.list.manager' }"
        ><a class="waves-effect waves-light btn-small red">Back</a></router-link
      >
    </div>
    <div class="row">
      <form class="col s12" method="post" @submit.prevent="editProduct(product)">
        <div class="row">
            <div class="input-field col s12">
            <input
              id="product_name"
              disabled 
              type="text"
              v-model="product.invId"
            />
            <label class="active" for="product_name">Product Id</label>
          </div>
          <div class="input-field col s12">
            <input
              id="product_name"
              disabled 
              type="text"
              v-model="product.name"
            />
            <label class="active" for="product_name">Product Name</label>
          </div>
          <div class="input-field col s12">
            <input
              id="product_price"
              disabled 
              type="text"
              v-model="product.price"
            />
            <label class="active" for="product_price">Price</label>
          </div>
        
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "ProductManagerDetail",
  
  computed: {
    ...mapGetters(["products"]),
    product(){
        return this.products.find(item => item.invId === this.$route.params.id)
    },
  },
};
</script>
