<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <div class="main_content">
<!--        <keep-alive>-->
        <!-- <keep-alive include="ProductList,ProductManagerList"> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
<!--        </keep-alive>-->
        <div class="test-api-wp">
          <table class="table is-bordered">
            <thead>
            <tr>
              <th>Title</th>
              <th>Posted at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{post.title.rendered}}</td>
              <td>{{post.date_gmt}}</td>
            </tr>
            </tbody>
          </table>
          <pagination :pagination="pagination"
                      @prev="--postsData.page; getPosts();"
                      @next="postsData.page++; getPosts();">
          </pagination>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/particle/Header'
import Pagination from './components/pagination/Pagination'
import axios from "axios";
export default {
  name: 'App',
  data() {
    return {
      postsUrl: 'https://dhweb.vn/wp-json/wp/v2/posts',
      posts: [],
      postsData: {
        per_page: 5,
        page: 1
      },
      pagination: {
        prevPage: '',
        nextPage: '',
        totalPages: '',
        from: '',
        to: '',
        total: '',
      },
    }
  },
  components: {
    Header,
    Pagination
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios.get(this.postsUrl, {params: this.postsData})
          .then((response) => {
            this.posts = response.data;
            this.configPagination(response.headers);
            console.log(this.posts)
          })
          .catch( (error) => {
            console.log(error);
          });
    },
    configPagination(headers) {
      this.pagination.total = headers['x-wp-total'];
      this.pagination.totalPages = headers['x-wp-totalpages'];
      this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
      this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
      this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
      this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';

      console.log('Total: ' + this.pagination.total + 'Total Pages' + this.pagination.totalPages)
    }
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
