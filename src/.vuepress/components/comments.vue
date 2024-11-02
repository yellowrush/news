<script setup>
  import comment from './comment.vue';
  const props = defineProps({
    commentsCount: Number,
    comments: Array,
  });
</script>
<template>
  <div class="comments">
    <div class="comments-top">
      <h2>评论 {{ commentsCount }}</h2>
      <button @click="$emit('close')" class="close-button" />
    </div>
    <div class="login-mask">
      <p>请先 <button>登录</button> 后发表评论～</p>
    </div>
    <ul>
      <!-- <li v-for="(comment, index) in JSON.parse(comments)" :key="index">
        <comment :comment="comment" />
      </li> -->
    </ul>
  </div>
</template>
<style scoped>
  .comments {
    position: fixed;
    top: 57px;
    bottom: 0;
    right: 0;
    width: 400px;
    z-index: 199;
    background: #fff;
    overflow-y: auto;
    border-left: 1px solid #ddd;
  }
  .comments-top h2 {
    margin: 0;
    padding: 1rem 1.5rem;
  }
  .login-mask {
    text-align: center;
    padding: 1rem;
    background: #f8f8f8;
    cursor: pointer;
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    padding: 27px;
    cursor: pointer;
    appearance: none;
    border: none;
    background: none;
  }
  .close-button:before,
  .close-button:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  .close-button:before {
    transform: rotate(45deg);
  }
  .close-button:after {
    transform: rotate(-45deg);
  }
</style>
