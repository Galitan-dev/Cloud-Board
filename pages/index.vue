<template>
  <div>
    <WebViewer
      :path="`${publicPath}webviewer`"
      url="https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
})
</script>
