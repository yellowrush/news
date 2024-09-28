<template>
  <RouterLink :to="`article/${id}`">
    <h1>{{ title }}</h1>
    <dl>
      <dt>{{ newsFrom }}</dt>
      <dd>{{ commentsCount }}</dd>
      <dd>{{ date }}</dd>
    </dl>
    <picture v-if="image">
      <img :src="image" alt="单张图片" />
    </picture>
    <picture
      v-if="images.length > 0"
      v-for="(img, index) in images"
      :key="index"
    >
      <img :src="img" alt="多张图片" />
    </picture>
  </RouterLink>
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
