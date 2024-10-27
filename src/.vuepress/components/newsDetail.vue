<template>
  <div class="article">
    <div class="sidebar-left">
      <div tabindex="0" role="button" class="button like">
        <button>
          <img v-if="liked" src="../../assets/images/liked.svg" />
          <img v-else src="../../assets/images/like.svg" />
        </button>
        <span>7</span>
      </div>
      <div tabindex="0" role="button" class="button">
        <button>
          <img src="../../assets/images/comment.svg" />
        </button>
        <span>评论</span>
      </div>
      <div tabindex="0" role="button" class="button">
        <button>
          <img src="../../assets/images/star.svg" />
        </button>
        <span>收藏</span>
      </div>
      <div tabindex="0" role="button" class="button">
        <button>
          <img src="../../assets/images/share.svg" />
        </button>
        <span>分享</span>
      </div>
    </div>
    <section>
      <h1>{{ title }}</h1>
      <div class="article-date">
        <span>{{ date }}</span>
        -
        <span>{{ newsFrom }}</span>
      </div>
      <article v-html="articleContent" />
    </section>
    <div class="sidebar-right"></div>
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
      likeCount: {
        type: Number,
        required: true,
      },
      liked: {
        type: Boolean,
        default: false,
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
      articleContent: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .article {
    padding: 16px;
    display: flex;
    position: relative;
  }
  .sidebar-left {
    position: fixed;
    top: 170px;
    left: calc(50% - 400px - 40px);
    margin: 1rem;
    z-index: 199;
  }
  button {
    display: flex;
    width: 48px;
    appearance: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    background: none;
    margin-top: 1rem;
  }
  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button:hover {
    opacity: 0.8;
  }
  .button span {
    font-size: 12px;
    cursor: pointer;
  }
  .like button {
    display: flex;
    width: 48px;
    height: 48px;
    appearance: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    background: #f8f8f8;
    margin-bottom: 5px;
  }
</style>
