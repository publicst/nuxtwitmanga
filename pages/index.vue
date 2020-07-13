<template>
  <div class="container">
    <div>
      <h1>まとめページ</h1>
      <hr />
      <ul v-for="tw in tweets" :key="tw">
        <Tweet :id="tw" />
      </ul>
    </div>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed';

export default {
  components: {
    Tweet
  },
  data() {
    return {
      tweets: [
        '1073763832869179392',
        '1073909919839997952',
        '1074076529838120960'
      ]
    };
  },
  mounted() {}
};
</script>

<style></style>
