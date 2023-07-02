<style scoped></style>

<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
    <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
  </div>
</template>

<script>
import Vue3103Comp from '../components/vue3103/Vue3103Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    return {
      localmsg1: '부모에서 자식으로 넘겨진 메시지1',
      localmsg2: '부모에서 자식으로 넘겨진 메시지2',
    };
  },
  //template: ``,
  methods: {},
  components: {
    Vue3103Comp: Vue3103Comp,
  },
};
</script>
