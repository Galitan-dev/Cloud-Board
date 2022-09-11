<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'WebViewer',
  props: {
    path: { type: String, default: '../webviewer' },
    url: {
      type: String,
      default:
        'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }
  },
  mounted: function () {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: this.path,
          initialDoc: this.url
        },
        this.$refs.viewer
      ).then((instance) => {
        // call apis here
      });
    });
  }
};
</script>

<style>
#webviewer {
  height: 100vh;
}
</style>
