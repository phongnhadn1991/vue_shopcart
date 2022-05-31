<template>
  <div>
    <div class="row title-page">
      <h3>Favorite List</h3>
    </div>
    <KeepAlive>
    <FavoriteList></FavoriteList>
    </KeepAlive>
  </div>
</template>

<script>
import FavoriteList from "../favorite/FavoriteList.vue"
export default {
  name: "FavoriteContainer",
  components: {
    FavoriteList
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