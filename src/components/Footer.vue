<template>
  <div class="footer">
    <div>
      {{$route.params.username}}
      <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>       

    <router-link to="./">go to hello</router-link>
    <router-link to="./Header">go to Header</router-link>
    <my-component></my-component>
    <!-- <my-child></my-child> -->
    <my-all></my-all>
  <div class="one" v-drag>拖拽one</div>  
    <div class="two" v-drag>拖拽two</div>  
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <input type="text" ref="input1">
    <button @click="add">添加</button>
  </div>
</template>
 
<script>
const child = {
  props:['haha'],
  template:"<p>你好 我是儿子组件{{haha}}</p>"
}
const father = {
  template:'<p>你好，我是父亲组件<my-child haha="ding"></my-child></p>',
  components:{
    "my-child": child
  }
}
const grandFather = {
  template :"<p>你好，我是爷爷组件<my-father></my-father><my-child></my-child></p>",
  components:{
    "my-father":father,
    "my-child":child
  }
}

import Vue from 'vue'
Vue.component('my-all',{
  template:'<p>我是全局组件</p>'
})

// vue directive
Vue.directive('drag', {   
    inserted:function(el){  
        el.onmousedown=function(e){  
            let l=e.clientX-el.offsetLeft;  
            let t=e.clientY-el.offsetTop;  
            document.onmousemove=function(e){  
                el.style.left=e.clientX-l+'px';  
                el.style.top=e.clientY-t+'px';  
              console.log(el.style.top)
            };  
            el.onmouseup=function(){  
                document.onmousemove=null;  
                el.onmouseup=null;  
            }  
        }  
    }  
})  


function changeColor(dom){
  console.log(111)
    // dom.style.backgroundColor = "red";
}
export default{
  template:"<my-components></my-components>",
  components:{
    "my-component":grandFather
  },
  name:'footer1',
  data(){
    return{
      checkedNames: [],
      haha: '我是丁明'
    }
  },
  methods:{
    add(){
      console.log(111)
      this.$refs.input1.value="haha"
    }
  },
  mounted(){
    console.log(this.$route.params)
  }



}
</script>
 
<style>
.one,.two{  
        height:100px;  
        width:100px;  
        border:1px solid #000;  
        position: absolute;  
        -webkit-user-select: none;  
        -ms-user-select: none;  
        -moz-user-select: -moz-none;  
        cursor: pointer;  
    }  
    .two{  
        left:200px;  
    } 
</style>