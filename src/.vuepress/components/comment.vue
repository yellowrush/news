<script setup>
  const props = defineProps(['comment']);
</script>
<template>
  <div class="comment">
    <picture>
      <img :src="comment.avator" alt="" />
    </picture>
    <span>{{ comment.name }}</span>
    <div class="like">
      <span>{{ likeCount }}</span>
      <button @click="liked = true">
        <img v-if="liked" src="../../assets/images/liked.svg" />
        <img v-else src="../../assets/images/like.svg" />
      </button>
    </div>
  </div>
</template>
<style scoped></style>
