<template>
  <div class="article">
    <div class="article-content">
      <RouterLink :to="`articles/${id}`">{{ title }}</RouterLink>
      <div class="images" v-if="images && images.length > 0">
        <picture v-for="(img, index) in images" :key="index">
          <img :src="img" alt="多张图片" />
        </picture>
      </div>
      <dl>
        <dt>{{ newsFrom }}</dt>
        <dd>{{ commentsCount }}评论</dd>
        <dd>{{ date }}</dd>
      </dl>
    </div>
    <picture v-if="!!image">
      <img :src="image" alt="单张图片" />
    </picture>
  </div>
</template>
<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      newsFrom: {
        type: String,
        required: true,
      },
      commentsCount: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default: '',
      },
      images: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style scoped>
  .article {
    padding: 16px;
    display: flex;
    min-height: 104px;
  }
  .article-content {
    flex-grow: 1;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      margin: 0;
      font-size: 1.2rem;
      &:hover {
        color: #ff403a;
      }
    }
    dl {
      margin: 0;
      display: flex;
    }
    .images {
      display: flex;
      width: 100%;
      margin: 10px 0;
      gap: 14px;
      picture {
        flex-shrink: 1;
        width: 25%;
      }
    }
  }
  picture {
    flex-shrink: 0;
    width: 11rem;
    overflow: hidden;
    border-radius: 6px;
    height: 104px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.5s ease 0.1s;
      &:hover {
        transform: scale(1.04);
      }
    }
  }
</style>
