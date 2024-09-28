<template>
  <div>
    <newsItem
      v-for="(newItem, index) in news"
      :key="index"
      :id="newItem.id"
      :title="newItem.title"
      :news-from="newItem.newsFrom"
      :comments-count="newItem.commentsCount"
      :date="newItem.date"
      :image="newItem.image"
    />
  </div>
</template>
<script>
  import newsItem from './newsItem.vue';
  import data from '../../db/index.js';
  export default {
    components: {
      newsItem,
    },
    data() {
      return {
        news: data,
      };
    },
  };
</script>
