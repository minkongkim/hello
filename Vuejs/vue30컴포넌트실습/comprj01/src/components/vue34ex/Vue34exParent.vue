<style scoped>
.componentParent {
  width: 50%;
  background-color: lightblue;
  padding: 5%;
}
.componentChild {
  width: 80%;
  background-color: lightgray;
  padding: 5% 5% 10% 0;
}
</style>
<template>
  <div id="app" class="componentParent">
    Parent counter : {{ counter }} <br />
    <button name="parent" v-on:click="addCounter(+10)">+</button>
    <button name="parent" v-on:click="subCounter(-10)">-</button>
    <p></p>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <componentChild
      v-bind:num="counter"
      v-on:addCounter="addCounter"
      v-on:subCounter="subCounter"
    >
    </componentChild>
  </div>
</template>

<script>
import Vue34exChild from './Vue34exChild.vue';
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
export default {
  /* pdtmc^2w */
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      counter: 0,
    };
  },
  //template: ``,
  methods: {
    addCounter(param) {
      //debugger;
      console.log(param);
      this.$data.counter = this.$data.counter += param;
    },
    subCounter(param) {
      console.log(param);
      this.$data.counter = this.$data.counter += param;
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    componentChild: Vue34exChild,
  },
};
</script>
