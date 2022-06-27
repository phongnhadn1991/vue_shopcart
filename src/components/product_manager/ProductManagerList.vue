<template>
  <div class="row" v-if="isAuthencation">
    <div class="row title-page">
      <h3>List Product</h3>
      {{'Total Item: ' + pagination.totalItem + ' Current Page: ' + pagination.curPage}}
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
      <ProductManagerItem
        v-for="item in products"
        :key="item.invId"
        :class-name="``"
        :product="item"
      >
      </ProductManagerItem>
    </table>
<!--    USE @input="onchange"-->
<!--    <v-pagination v-model="pagination.curPage" :page-count="pagination.totalPage" @input="onPageChange"></v-pagination>-->
<!--    USE WATCH curPage-->
    <v-pagination v-model="pagination.curPage" :page-count="pagination.totalPage"></v-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import vPagination from 'vue-plain-pagination'
import ProductManagerItem from "./ProductManagerItem.vue";
export default {
  name: "ProductManagerList",

  components: {
    ProductManagerItem,
    vPagination
  },

  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {
        totalItem: 0,
        curPage: 1,
        perPage: 5,
        totalPage: 1
      }
    };
  },

  computed: {
    ...mapGetters(["isAuthencation"]),
  },

  created() {
    this.fetchAll();
    this.fetch();
  },

  mounted() {

  },

  methods: {
    ...mapActions(["getAuthen"]),
    async fetchAll(){
      try {
        const resAll = await axios.get(`https://6177a06f9c328300175f5a35.mockapi.io/products`)
        this.pagination.totalItem = resAll.data.length
        this.pagination.totalPage = Math.ceil(this.pagination.totalItem / this.pagination.perPage)
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = true
      }

    },
    async fetch(){
      this.isLoading = false
      try {
        this.products = []
        const resPage = await axios.get(`https://6177a06f9c328300175f5a35.mockapi.io/products?page=${this.pagination.curPage}&limit=${this.pagination.perPage}`)
        this.products = resPage.data
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = true
      }
    },
    // onPageChange(){
    //   this.fetch();
    // },
  },
  watch: {
    isAuthencation(){
      if(!this.isAuthencation) {
        this.$router.push({name: 'product.list'})
      }
    },
    'pagination.curPage'(){
      this.fetch();
    }
  }
};
</script>

<style scoped>
</style>
