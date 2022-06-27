<template>
    <div class="test-api-wp">
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
          <table class="table is-bordered" v-if="isLoading">
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
</template>

<script>
import Pagination from '../pagination/Pagination.vue'
import axios from "axios";
export default {
  name: 'WordpressContainer',
  data() {
    return {
      isLoading: false,
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
    Pagination
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
        this.isLoading = false
      axios.get(this.postsUrl, {params: this.postsData})
          .then((response) => {
            this.isLoading = true
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
