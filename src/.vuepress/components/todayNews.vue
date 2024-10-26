<script setup>
  import data from '../../db/todayNews.js';
</script>
<template>
  <section class="today-news">
    <h3>
      🔥今日要闻
      <span>{{
        new Date().toLocaleDateString('zh-CN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}</span>
    </h3>
    <ul class="news-list">
      <li v-for="(newItem, index) in data" :key="index">
        <RouterLink :to="`article/${newItem.id}`">
          {{ newItem.title }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
<style scoped>
  .today-news {
    border-radius: 6px;
    padding: 20px 32px;
    background: linear-gradient(
        186deg,
        snow -1.9%,
        rgba(255, 227, 227, 0.23) 30.62%,
        rgba(255, 190, 190, 0) 98.17%
      ),
      #fff;
    h3 {
      margin: 0;
      font-size: 1.2rem;
    }
    .news-list {
      li::marker {
        color: #999;
      }
      li {
        a:hover {
          color: #ff403a;
        }
      }
    }
    span {
      font-size: 1rem;
      font-weight: normal;
      color: #999;
    }
  }
</style>
