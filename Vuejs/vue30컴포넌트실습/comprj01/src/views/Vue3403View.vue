<style scoped></style>
<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <Vue3403Comp v-on:showLog="printText"></Vue3403Comp>
  </div>
</template>
<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      mesg: null,
    };
  },
  //template: ``,
  methods: {
    printText(param1, param2) {
      debugger;
      console.log(param1, param2);
      this.$data.mesg = `param1=${param1},param2=${param2}`;
    },
  },
  components: {
    Vue3403Comp: Vue3403Comp,
  },
  computed: {},
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
