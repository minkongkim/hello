<style scoped>
.main {
  border: 1px solid black;
  background-color: aqua;
}
</style>

<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      msg: 'child2',
    };
  },
};
</script>
