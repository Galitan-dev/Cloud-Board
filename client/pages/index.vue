<template>
  <div>{{ hello }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';

@Component({
  name: 'IndexPage'
})
export default class Index extends Vue {
  hello!: string;

  async asyncData({ $axios }: Context) {
    let hello;
    try {
      hello = await $axios.$get('/');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    return {
      hello
    };
  }
}
</script>
