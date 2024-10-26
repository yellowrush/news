<script setup>
  import newsItem from './newsItem.vue';
  import data from '../../db/index.js';
</script>
<template>
  <div>
    <newsItem
      v-for="(newItem, index) in data"
      :key="index"
      :id="newItem.id"
      :title="newItem.title"
      :news-from="newItem.newsFrom"
      :comments-count="newItem.commentsCount"
      :date="newItem.date"
      :image="newItem.image"
      :images="newItem.images"
      class="new-item"
    />
  </div>
</template>
<style scoped>
  .new-item {
    margin-top: 1.2rem;
  }
</style>
