<style></style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>

    <!-- TodoInput -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>

    <!-- TodoList -->
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:doneToggle="doneToggle"
      v-on:removeTodo="removeTodo"
    ></TodoList>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      todoItems: [
        { id: 1, todo: '영화보기', done: false },
        { id: 2, todo: '주말 산책', done: true },
        { id: 3, todo: 'ES6 학습', done: false },
        { id: 4, todo: '잠실 야구장', done: false },
      ],
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
    clearAll(e) {
      //debugger;
      console.log(e.target);
      this.$data.todoItems = [];
    },
    addTodo(e, newTodoItem) {
      const ids = this.$data.todoItems.map((value) => {
        return value.id;
      });
      const maxid = ids.reduce((pvalue, cvalue) => {
        if (pvalue > cvalue) return pvalue;
        else return cvalue;
      }, 0);
      //추가될 객체
      const newobj = {
        id: maxid + 1,
        todo: newTodoItem,
        done: false,
      };
      this.$data.todoItems = [...this.$data.todoItems, newobj];
    },
    doneToggle(e, id) {
      const arrMap = this.$data.todoItems.map((value) => {
        if (id === value.id) value.done = !value.done;

        return value;
      });
      this.$data.todoItems = arrMap;
    },
    removeTodo(id) {
      const arrRemove = this.$data.todoItems.filter((value) => {
        if (id === value.id) {
          return false;
        }
        return true;
      });
      this.$data.todoItems = arrRemove;
    },
  },
  components: {
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
    TodoList: TodoList,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
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
