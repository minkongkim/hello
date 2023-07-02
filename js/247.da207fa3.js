"use strict";(self["webpackChunkcomprj01"]=self["webpackChunkcomprj01"]||[]).push([[247],{247:function(o,e,d){d.r(e),d.d(e,{default:function(){return E}});var t=d(3396);const a={id:"app"};function n(o,e,d,n,l,s){const c=(0,t.up)("TodoHeader"),r=(0,t.up)("TodoInput"),i=(0,t.up)("TodoList"),u=(0,t.up)("TodoFooter");return(0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(c),(0,t.Wm)(r,{onAddTodo:s.addTodo},null,8,["onAddTodo"]),(0,t.Wm)(i,{todoItems:l.todoItems,onDoneToggle:s.doneToggle,onRemoveTodo:s.removeTodo},null,8,["todoItems","onDoneToggle","onRemoveTodo"]),(0,t.Wm)(u,{onClearAll:s.clearAll},null,8,["onClearAll"])])}const l=(0,t._)("h1",null,"TODO it! Component",-1),s=[l];function c(o,e,d,a,n,l){return(0,t.wg)(),(0,t.iD)("header",null,s)}var r={props:[],data(){return{}},methods:{},components:{},computed:{},watch:{},created(){console.log("created")},mounted(){console.log("mounted")},updated(){console.log("updated")}},i=d(89);const u=(0,i.Z)(r,[["render",c]]);var m=u;const p={class:"clearAllContainer"};function h(o,e,d,a,n,l){return(0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("span",{class:"clearAllBtn",onClick:e[0]||(e[0]=(...o)=>l.clearAllBtn&&l.clearAllBtn(...o))},"Clear All")])}var g={methods:{clearAllBtn(o){console.log(o.target),this.$emit("clearAll",o)}}};const T=(0,i.Z)(g,[["render",h],["__scopeId","data-v-4e7be5fa"]]);var w=T,v=d(9242);const I=o=>((0,t.dD)("data-v-edc3720e"),o=o(),(0,t.Cn)(),o),f={class:"inputBox shadow"},_=I((()=>(0,t._)("i",{"aria-hidden":"true",class:"addBtn fas fa-plus"},null,-1))),k=[_],$={class:"modal-wrapper"},C={class:"modal-container"},D=I((()=>(0,t._)("div",{class:"modal-header"},[(0,t._)("h3",null,"경고")],-1))),A={class:"modal-footer"},B=I((()=>(0,t._)("i",{class:"closeModalBtn fas fa-times","aria-hidden":"true"},null,-1)));function y(o,e,d,a,n,l){return(0,t.wg)(),(0,t.iD)("div",f,[(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Type what you have to do","onUpdate:modelValue":e[0]||(e[0]=o=>n.newTodoItem=o),ref:"refNewTodoItem"},null,512),[[v.nr,n.newTodoItem]]),(0,t._)("span",{class:"addContainer",onClick:e[1]||(e[1]=(...o)=>l.addTodo&&l.addTodo(...o))},k),n.showModal?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"modal-mask",onKeyup:e[3]||(e[3]=(0,v.D2)((e=>o.$emit("close")),["esc"])),onClose:e[4]||(e[4]=o=>n.showModal=!1)},[(0,t._)("div",$,[(0,t._)("div",C,[D,(0,t._)("div",A,[(0,t._)("span",{onClick:e[2]||(e[2]=o=>n.showModal=!1)},[(0,t.Uk)(" 할 일을 입력하세요. "),B])])])])],32)):(0,t.kq)("",!0)])}var M={props:[],data(){return{newTodoItem:null,showModal:!1}},methods:{addTodo(o){if(console.log(o.target),!this.$data.newTodoItem||this.$data.newTodoItem.trim().length<=0)return this.$data.showModal=!this.$data.showModal,void this.$refs.refNewTodoItem.focus();this.$emit("addTodo",o,this.$data.newTodoItem),this.$data.newTodoItem=null}},components:{},computed:{},watch:{},created(){console.log("created")},mounted(){console.log("mounted")},updated(){console.log("updated")}};const b=(0,i.Z)(M,[["render",y],["__scopeId","data-v-edc3720e"]]);var Z=b,W=d(7139);const H=o=>((0,t.dD)("data-v-765ecbc6"),o=o(),(0,t.Cn)(),o),U=["data-id","onClick"],j=H((()=>(0,t._)("i",{"aria-hidden":"true",class:"checkBtn fas fa-check"},null,-1))),x=["onClick","data-id"],F=H((()=>(0,t._)("i",{"aria-hidden":"true",class:"far fa-trash-alt"},null,-1))),K=[F];function L(o,e,d,a,n,l){return(0,t.wg)(),(0,t.iD)("section",null,[(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(d.todoItems,(o=>((0,t.wg)(),(0,t.iD)("li",{class:(0,W.C_)(o.done?"checked":null),key:o.id,"data-id":o.id,onClick:e=>l.doneToggle(e,o.id)},[j,(0,t.Uk)(" "+(0,W.zw)(o.todo)+" ",1),(0,t._)("span",{type:"button",class:"removeBtn",onClick:(0,v.iM)((e=>l.removeTodo(o.id)),["stop"]),"data-id":o.id},K,8,x)],10,U)))),128))])])}var N={props:["todoItems"],data(){return{}},methods:{doneToggle(o,e){this.$emit("doneToggle",o,e)},removeTodo(o){this.$emit("removeTodo",o)}},components:{},computed:{},watch:{},created(){console.log("created")},mounted(){console.log("mounted")},updated(){console.log("updated")}};const O=(0,i.Z)(N,[["render",L],["__scopeId","data-v-765ecbc6"]]);var R=O,q={props:[],data(){return{todoItems:[{id:1,todo:"영화보기",done:!1},{id:2,todo:"주말 산책",done:!0},{id:3,todo:"ES6 학습",done:!1},{id:4,todo:"잠실 야구장",done:!1}]}},methods:{clearAll(o){console.log(o.target),this.$data.todoItems=[]},addTodo(o,e){const d=this.$data.todoItems.map((o=>o.id)),t=d.reduce(((o,e)=>o>e?o:e),0),a={id:t+1,todo:e,done:!1};this.$data.todoItems=[...this.$data.todoItems,a]},doneToggle(o,e){const d=this.$data.todoItems.map((o=>(e===o.id&&(o.done=!o.done),o)));this.$data.todoItems=d},removeTodo(o){const e=this.$data.todoItems.filter((e=>o!==e.id));this.$data.todoItems=e}},components:{TodoHeader:m,TodoFooter:w,TodoInput:Z,TodoList:R},computed:{},watch:{},created(){console.log("created")},mounted(){console.log("mounted")},updated(){console.log("updated")}};const z=(0,i.Z)(q,[["render",n]]);var E=z}}]);
//# sourceMappingURL=247.da207fa3.js.map