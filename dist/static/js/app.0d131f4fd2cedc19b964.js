webpackJsonp([1],{"/3IL":function(t,e){},"1MuW":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[t._m(0),t._v(" "),n("div",{staticClass:"btn write-btn"},[t._v("写文章")]),t._v(" "),n("div",{staticClass:"user",on:{mouseover:function(e){t.test()},mouseout:function(e){t.test2()}}},[t._m(1),t._v(" "),n("ul",{staticClass:"dropdown-menu none",class:{block:t.block}},[n("li",[t._v("我的主页")]),t._v(" "),n("li",[t._v("我的主页")]),t._v(" "),n("li",[t._v("我的主页")]),t._v(" "),n("li",[t._v("我的主页")]),t._v(" "),n("li",[t._v("我的主页")])])]),t._v(" "),n("div",{staticClass:"style-mode"}),t._v(" "),n("containers")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"",alt:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar"},[n("img",{attrs:{src:"//upload.jianshu.io/users/upload_avatars/4832967/b10718b32c8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",alt:"120"}})])}],i={render:o,staticRenderFns:a};e.a=i},"1wFA":function(t,e,n){"use strict";function o(t){n("rd4G")}var a=n("3QcW"),i=n("7zla"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},"21oK":function(t,e,n){"use strict";var o=n("MVMM"),a={props:["haha"],template:"<p>你好 我是儿子组件{{haha}}</p>"},i={template:'<p>你好，我是父亲组件<my-child haha="ding"></my-child></p>',components:{"my-child":a}},s={template:"<p>你好，我是爷爷组件<my-father></my-father><my-child></my-child></p>",components:{"my-father":i,"my-child":a}};o.default.component("my-all",{template:"<p>我是全局组件</p>"}),o.default.directive("drag",{inserted:function(t){t.onmousedown=function(e){var n=e.clientX-t.offsetLeft,o=e.clientY-t.offsetTop;document.onmousemove=function(e){t.style.left=e.clientX-n+"px",t.style.top=e.clientY-o+"px"},t.onmouseup=function(){document.onmousemove=null,t.onmouseup=null}}}}),e.a={template:"<my-components></my-components>",components:{"my-component":s},name:"footer1",data:function(){return{checkedNames:[],haha:"我是丁明"}},methods:{add:function(){console.log(111),this.$refs.input1.value="haha"}}}},"2RDy":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model"},[n("div",{staticClass:"model-content"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"},on:{click:t.close}},[t._v("×")]),t._v(" "),n("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("新建")])]),t._v(" "),n("div",{staticClass:"modal-body row"},[n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        内部标题\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pieceObj.name,expression:"pieceObj.name"}],attrs:{type:"text",placeholder:"可留空",name:""},domProps:{value:t.pieceObj.name},on:{input:function(e){e.target.composing||t.$set(t.pieceObj,"name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        快爽标题\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pieceObj.title,expression:"pieceObj.title"}],attrs:{type:"text",placeholder:"长度最多为20个汉字（含标点符号）",name:""},domProps:{value:t.pieceObj.title},on:{input:function(e){e.target.composing||t.$set(t.pieceObj,"title",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        主播名\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pieceObj.author,expression:"pieceObj.author"}],attrs:{type:"text",name:""},domProps:{value:t.pieceObj.author},on:{input:function(e){e.target.composing||t.$set(t.pieceObj,"author",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        主播留言\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pieceObj.desc,expression:"pieceObj.desc"}],attrs:{type:"text",placeholder:"结尾处的留言",name:""},domProps:{value:t.pieceObj.desc},on:{input:function(e){e.target.composing||t.$set(t.pieceObj,"desc",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        备注\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pieceObj.remark,expression:"pieceObj.remark"}],attrs:{type:"text",name:""},domProps:{value:t.pieceObj.remark},on:{input:function(e){e.target.composing||t.$set(t.pieceObj,"remark",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"col-xs-3"},[t._v("\n                        封面图\n                    ")]),t._v(" "),n("div",{staticClass:"col-xs-9"},[n("button",{staticClass:"btn btn-info btn-xs"},[t._v("添加封面图")]),t._v(" "),n("img",{staticStyle:{width:"150px",height:"200px"},attrs:{src:t.pieceObj.image}})])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.close}},[t._v("关闭")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.confirmRelease()}}},[t._v("提交")])])])])])},a=[],i={render:o,staticRenderFns:a};e.a=i},"3QcW":function(t,e,n){"use strict";var o=n("gyMJ"),a=n("tmjx"),i=n("wisV"),s=(n.n(i),n("cYRI"));n.n(s);e.a={name:"content1",data:function(){return{hookList:"",start:0,piece:{}}},inheritAttrs:!1,components:{model:a.a,HappyScroll:i.HappyScroll},props:{myNum:{type:Number,default:0},condition:{type:Object,default:{}},callback2:{type:Function,default:null}},methods:{submit:function(){this.callback2&&this.callback2()},cccc:function(){this.$emit("acc","nice")},shishi:function(){this.$parent.callback1()},getHookList:function(t,e,n){var a=this,i={};i.start=10*(t-1),i.count=10,i.key=e,e||(i.tag=n),o.b.list(i).then(function(t){a.hookList=t.data}),this.$emit("haha","$emit暴露的方法")},aa:function(t){return new Date(t).toLocaleDateString()},aaa:function(){console.log("很强大,父组件调用子集方法")},chuandi:function(){this.start++,this.$emit("chuandi",this.start)},update:function(t){$(".model").show(),this.piece=t,console.log(this.piece)},goback:function(){console.log(this.$router)}},watch:{condition:{handler:function(t){console.log(t),this.getHookList(t.num,t.searchContent,t.tagId)},deep:!0}},created:function(){this.getHookList(1)},mounted:function(){}}},"3Xzz":function(t,e,n){"use strict";function o(t){n("7AMd")}var a=n("CyBo"),i=n("1MuW"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},"4tXK":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return r});var o="http://cms.in.xintiaotime.com",a=o+"/hook/piece/list",i=o+"/hook/tag/list",s="/hook/piece/update",c="/read/topic/get",r="/read/piece/listnew"},"5K3j":function(t,e,n){"use strict";var o=n("4YfN"),a=n.n(o),i=n("3Xzz"),s=n("teIl"),c=n("TVmP"),r=n("fQLv"),l=n("k0aD"),u=n("oqi+"),v=n("9rMa");e.a={components:{Headers:s.default,Footers:c.a,navs:i.a,hooked:r.default,hookedTopic:l.a,vueWatch:u.a},name:"hello",data:function(){return{}},computed:a()({},n.i(v.b)({show:function(t){return t.show}})),methods:a()({},n.i(v.c)(["switch_dialog"]),n.i(v.d)(["switch_dialog"])),mounted:function(){}}},"5fev":function(t,e,n){"use strict";var o=n("MVMM"),a=n("jmfq");o.default.component("my-name",{props:["name","birthTime"],template:"<p>我叫：{{name}}我出生于：{{birthTime}}</p>",created:function(){}}),o.default.component("button-counter",{template:'<button v-on:click="increment">{{counter}}</button>',data:function(){return{counter:0}},methods:{increment:function(){this.counter+=1,this.$emit("increment-event")}}}),o.default.component("button-a",{template:'<button @click="add">{{num}}*2</button>',data:function(){return{num:0}},methods:{add:function(){this.num++,this.$emit("haha",2)}}}),o.default.component("son-component",{template:"<div><slot></slot></div>"}),e.a={components:{left:a.a},name:"header1",data:function(){return{totalCounter:0,bb:0,name:"ding",msg:"asd"}},methods:{total_increment:function(){this.totalCounter+=1},ahah:function(t){this.bb+=t},goback:function(){this.$router.go(-1)},goHome:function(){this.$router.push("/")},dingming:function(){var t=this.$router.resolve({name:"foo",query:{}}),e=t.href;console.log(e)}},mounted:function(){},beforeRouteEnter:function(t,e,n){console.log("准备进入路由模板"),n()},beforeRouteLeave:function(t,e,n){console.log("准备离开路由模板"),n()}}},"7AMd":function(t,e){},"7zla":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("happy-scroll",[n("button",{on:{click:function(e){t.chuandi()}}},[t._v("111")]),t._v(" "),n("button",{on:{click:function(e){t.shishi()}}},[t._v(" this.$parent.callback1")]),t._v(" "),n("button",{on:{click:function(e){t.cccc()}}},[t._v("试试")]),t._v(" "),n("button",{on:{click:function(e){t.submit()}}},[t._v("callback2")]),t._v(" "),n("table",{staticClass:"table  table-bordered table-hover table-list",attrs:{id:"tableList"}},[n("tbody",[n("tr",[n("th",{staticClass:"index remove-on-mobile"},[t._v("序号")]),t._v(" "),n("th",{staticClass:"remove-on-mobile"},[t._v("ID")]),t._v(" "),n("th",[t._v("故事名")]),t._v(" "),n("th",{staticClass:"remove-on-mobile"},[t._v("标题")]),t._v(" "),n("th",{staticClass:"remove-on-mobile"},[t._v("封面")]),t._v(" "),n("th",{staticClass:"remove-on-mobile",staticStyle:{width:"8%"}},[t._v("作者")]),t._v(" "),n("th",{staticClass:"up-time remove-on-mobile"},[t._v("发布时间")]),t._v(" "),n("th",{staticClass:"up-time remove-on-mobile"},[t._v("更新时间")]),t._v(" "),n("th",{staticClass:"remark remove-on-mobile"},[t._v("备注")]),t._v(" "),n("th",{staticClass:"remark remove-on-mobile"},[t._v("手机号")]),t._v(" "),n("th",{staticClass:"remove-on-mobile"},[t._v("点击数")]),t._v(" "),n("th",{staticClass:"remove-on-mobile"},[t._v("评论数")]),t._v(" "),n("th",[t._v("标签")]),t._v(" "),n("th",[t._v("操作")])]),t._v(" "),t._l(t.hookList,function(e,o){return n("tr",{key:e.id},[n("th",[t._v(t._s(o+1))]),t._v(" "),n("th",[t._v(t._s(e.id))]),t._v(" "),n("th",[t._v(t._s(e.name))]),t._v(" "),n("th",[t._v(t._s(e.title))]),t._v(" "),n("th",[n("img",{staticClass:"hookedImg",attrs:{src:e.image}})]),t._v(" "),n("th",[t._v(t._s(e.author))]),t._v(" "),n("th",[n("p",[t._v(t._s(t.aa(1e3*e.create_time)))])]),t._v(" "),n("th",[n("p",[t._v(t._s(t.aa(1e3*e.update_time)))])]),t._v(" "),n("th",[t._v(t._s(e.remark))]),t._v(" "),n("th",[t._v(t._s(e.outer_author))]),t._v(" "),n("th",[t._v(t._s(e.read_count?e.read_count:0))]),t._v(" "),n("th",[t._v(t._s(e.comment_count?e.comment_count:0))]),t._v(" "),n("th",t._l(e.tag_names_list,function(e){return n("span",{key:e.id,staticClass:"tags"},[t._v(t._s(e))])})),t._v(" "),n("th",[n("button",{staticClass:"btn btn-info btn-xs",on:{click:function(n){t.update(e)}}},[t._v("配置")])])])})],2)]),t._v(" "),n("model",{attrs:{pieceObj:t.piece}})],1),t._v(" "),n("div",{on:{click:t.goback}},[t._v("asdfasdfs")])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},Cd7T:function(t,e){},Cqeq:function(t,e,n){"use strict";function o(t){n("NBOH")}var a=n("aiz7"),i=n("Rgxp"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},CyBo:function(t,e,n){"use strict";var o=n("XK4E");e.a={components:{containers:o.a},name:"nav1",data:function(){return{block:!1}},methods:{test:function(){this.block=!0,console.log(this.block)},test2:function(){this.block=!1,console.log(this.block)}}}},D9WX:function(t,e){},DLay:function(t,e,n){"use strict";var o=n("MVMM"),a=n("6s2J"),i=n.n(a),s=n("DMPO"),c=n.n(s);console.log(c.a),o.default.use(i.a),console.log(i.a),e.a={data:function(){return{noData:"",moveList:[1]}},methods:{infinite:function(t){var e=this;if(console.log(this.noData),this.noData)return void setTimeout(function(){e.$refs.myscroller.finishInfinite(2)});var n=this,o=this.moveList.length;setTimeout(function(){for(var e=o+1;e<o+10;e++)n.moveList.push(e);o>30&&(n.noData="没有更多数据"),n.$refs.myscroller.resize(),t()},1500)},refresh:function(){console.log("refresh")}}}},DM4T:function(t,e,n){"use strict";e.a={data:function(){return{widthLong:!1}},methods:{longInput:function(){this.widthLong=!0}}}},EU4D:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",[n("p",[t._v("新闻ID："+t._s(t.$route.params.newsId))]),t._v(" "),n("p",[t._v("新闻标题："+t._s(t.$route.params.newsTitle))])]),t._v(" "),n("router-link",{attrs:{to:"./"}},[t._v("go to hello")]),t._v(" "),n("router-link",{attrs:{to:"./Header"}},[t._v("go to Header")]),t._v(" "),n("my-component"),t._v(" "),n("my-all"),t._v(" "),n("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"one"},[t._v("拖拽one")]),t._v(" "),n("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"two"},[t._v("拖拽two")]),t._v(" "),n("div",{attrs:{id:"example-3"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"jack",value:"Jack"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"Jack")>-1:t.checkedNames},on:{change:function(e){var n=t.checkedNames,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,"Jack");o.checked?i<0&&(t.checkedNames=n.concat(["Jack"])):i>-1&&(t.checkedNames=n.slice(0,i).concat(n.slice(i+1)))}else t.checkedNames=a}}}),t._v(" "),n("label",{attrs:{for:"jack"}},[t._v("Jack")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"john",value:"John"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"John")>-1:t.checkedNames},on:{change:function(e){var n=t.checkedNames,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,"John");o.checked?i<0&&(t.checkedNames=n.concat(["John"])):i>-1&&(t.checkedNames=n.slice(0,i).concat(n.slice(i+1)))}else t.checkedNames=a}}}),t._v(" "),n("label",{attrs:{for:"john"}},[t._v("John")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"mike",value:"Mike"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"Mike")>-1:t.checkedNames},on:{change:function(e){var n=t.checkedNames,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,"Mike");o.checked?i<0&&(t.checkedNames=n.concat(["Mike"])):i>-1&&(t.checkedNames=n.slice(0,i).concat(n.slice(i+1)))}else t.checkedNames=a}}}),t._v(" "),n("label",{attrs:{for:"mike"}},[t._v("Mike")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Checked names: "+t._s(t.checkedNames))])]),t._v(" "),n("input",{ref:"input1",attrs:{type:"text"}}),t._v(" "),n("button",{on:{click:t.add}},[t._v("添加")])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},GTtC:function(t,e){},IcnI:function(t,e,n){"use strict";var o=n("MVMM"),a=n("9rMa");o.default.use(a.a),e.a=new a.a.Store({state:{show:!1},mutations:{switch_dialog:function(t){t.show=!t.show,console.log(t.show)}},actions:{switch_dialog:function(t){t.commit("switch_dialog")}},getters:{not_show:function(t){return!t.show}}})},M93x:function(t,e,n){"use strict";function o(t){n("lmuD")}var a=n("WPeS"),i=n("UuUn"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},NBOH:function(t,e){},"NF+0":function(t,e,n){"use strict";var o=n("MVMM"),a=n("gyMJ"),i=n("Cqeq"),s=n("N6ki"),c=n.n(s);o.default.use(c.a),e.a={components:{topicContent:i.a},name:"topic",data:function(){return{topic_id:520,topicList:"",backgroundImage:{backgroundImage:""},hasNext:!0,num:0,scrollTop:0,length:0}},methods:{cc:function(t){this.length=t},loadMore:function(){var t=this;t.cc(),console.log(t.length),t.length%10!=0&&(t.num++,this.$refs.content.getListHot(t.num))},getTopic:function(){var t=this,e={};e.count=1,e.start=1,e.type=1,e.topic_id=t.topic_id,a.d.list(e).then(function(e){t.topicList=e.data[0],console.log(t.topicList),t.backgroundImage.backgroundImage="url("+t.topicList.image+")",document.title=t.topicList.name})},handleScroll:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},watch:{scrollTop:function(t){this.handleScroll(),console.log(t)}},created:function(){this.getTopic()},mounted:function(){window.addEventListener("scroll",this.handleScroll)}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("qvMO"),a=(n.n(o),n("qAgH")),i=n.n(a),s=n("MVMM"),c=n("M93x"),r=n("YaEn"),l=n("IcnI");s.default.use(i.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:r.a,store:l.a,template:"<App/>",components:{App:c.a}}),window.eventBus=new s.default},NLlW:function(t,e,n){"use strict";var o=n("gyMJ"),a=n("1wFA");e.a={name:"hooked",data:function(){return{condition:{num:1,searchContent:"",tagId:""},tagList:""}},components:{hookContent:a.a},methods:{bcc:function(t){console.log(t)},selectTagList:function(t){console.log(t)},jieshou:function(t){console.log(t),console.log("你好，我是丁铭")},callback1:function(){console.log("高娟")},callback2:function(){console.log("高娟真好")},clickNum:function(t){var e=this;1==t&&e.condition.num++,-1==t&&(e.condition.num<=1||e.condition.num--)},xixi:function(t){console.log(t)},hahaha:function(){this.$refs.hookedContent.aaa()},clearSearch:function(){this.condition.searchContent="",this.condition.num=1,this.condition.tagId="",this.$refs.hookedContent.getHookList(this.condition.num)},search:function(){},getTagList:function(){var t=this;o.a.list().then(function(e){t.tagList=e.data})}},created:function(){this.getTagList()}}},QwzG:function(t,e,n){"use strict";var o=n("MVMM"),a=new o.default;o.default.component("toggle-btn",{template:'        <button             class="btn btn-info"             v-on:click="emmitToggle">Toggle Box</button>    ',methods:{emmitToggle:function(){a.$emit("toggle-box")}}}),o.default.component("listener",{template:"<h5>sibling component</h5>",mounted:function(){a.$on("toggle-box",function(){alert("已经接收到toggle-box信号！")})}}),e.a={data:function(){return{msg:"hello"}},props:{myName:{type:String,default:"ming"}}}},RcQ2:function(t,e){},Rgxp:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"nav"},[t._v("\n        最热    ||    最新\n    ")]),t._v(" "),t._l(t.hotList,function(t){return n("div",{key:t.id,staticClass:"list"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.image}})])])})],2)},a=[],i={render:o,staticRenderFns:a};e.a=i},RifT:function(t,e){},SGdR:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("navs"),t._v("\n  hello\n\n  \n\n  "),n("router-link",{attrs:{to:"./Header"}},[t._v("go to header")]),t._v(" "),n("router-link",{attrs:{to:"./Footer"}},[t._v("go to footer")]),t._v(" "),n("router-link",{staticClass:"color",attrs:{to:"./hooked"}},[t._v("go to hooked")]),t._v(" "),n("router-link",{staticClass:"color",attrs:{to:"./hookedTopic"}},[t._v("go to hookedTopic")]),t._v(" "),n("router-link",{staticClass:"color",attrs:{to:"./vueAPI/watch"}},[t._v("go to vueWatch")]),t._v(" "),n("Headers"),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$store.commit("switch_dialog")}}},[t._v("mutations,使用commit触发")]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$store.dispatch("switch_dialog")}}},[t._v("actions,使用dispatch触发")]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:t.switch_dialog}},[t._v("通过mapMutations进行触发")]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:t.switch_dialog}},[t._v("通过mapMutations进行触发")]),t._v(" "),n("div",[t._v(t._s(t.$store.state.show))]),t._v(" "),n("div",[t._v(t._s(t.$store.getters.not_show))]),t._v(" "),n("div",[t._v(t._s(t.show))])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},TVmP:function(t,e,n){"use strict";function o(t){n("D9WX")}var a=n("21oK"),i=n("EU4D"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},UuUn:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},WPeS:function(t,e,n){"use strict";var o=n("GTtC"),a=(n.n(o),n("Y3Gt"));n.n(a);e.a={name:"app"}},XK4E:function(t,e,n){"use strict";function o(t){n("jUBL")}var a=n("DM4T"),i=n("hrq/"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},YaEn:function(t,e,n){"use strict";(function(t){var o=n("a3Yh"),a=n.n(o),i=n("MVMM"),s=n("cigS"),c=n("qSdX"),r=n("TVmP"),l=n("k0aD"),u=n("oqi+"),v=function(){return new Promise(function(t){t()}).then(n.bind(null,"teIl"))},d=function(t){return new Promise(function(t){t()}).then(function(){return t(n("fQLv"))}.bind(null,n)).catch(n.oe)};i.default.use(s.a);var m=new s.a(a()({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"Hello",component:c.a},{path:"/footer",name:"Footer",component:r.a,beforeEnter:function(t,e,n){console.log("我进入Footer了"),console.log(t),console.log(e),n()}},{path:"/header",name:"Header",component:v,children:[{path:"/header/:newsId/:newsTitle",component:r.a,name:"haha"}]},{path:"/hooked",name:"hooked",component:d},{path:"/hookedTopic",name:"hookedTopic",component:l.a},{path:"/vueAPI/watch",component:u.a}]},"scrollBehavior",function(t,e,n){}));m.beforeEach(function(e,n,o){console.log("navigation-guards"),console.log(e,n,o);var a=["home","good-list","good-detail","cart","profile"],i=t.isLogin;a.indexOf(e.name)>=0&&(i||(console.log("what fuck"),m.push({name:"login"}))),"login"===e.name&&i&&m.push({name:"home"}),o()}),e.a=m}).call(e,n("QYmj"))},aiz7:function(t,e,n){"use strict";var o=n("gyMJ");e.a={name:"content2",components:{},props:{topicId:{type:Number,default:0},hasNext:{type:Boolean,default:!0}},data:function(){return{start:0,hotList:[]}},methods:{getListHot:function(t){var e=this,n={};n.start=10*t,n.count=10,n.topic_id=e.topicId,n.sorttype=7,n.piecetype=0,n.recommend_flag=0,o.e.list(n).then(function(t){var n=t.data;n.forEach(function(t){e.hotList.push(t)});var o=e.hotList.length;e.$emit("hotListLength",o),n.length})}},created:function(){var t=this;t.getListHot(t.start)},mounted:function(){}}},cYRI:function(t,e){},eu6S:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    "+t._s(t.msg)+"\n    "+t._s(t.myName)+"\n    "),n("listener"),t._v(" "),n("toggle-btn")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},fMBE:function(t,e){},fQLv:function(t,e,n){"use strict";function o(t){n("Cd7T")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("NLlW"),i=n("vzXi"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.default=r.exports},gyMJ:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return v}),n.d(e,"e",function(){return d});var o=n("4tXK"),a=n("2sCs"),i=n.n(a),s=n("6iV/"),c=n.n(s),r={list:function(t){return i.a.get(o.a,{params:t}).then(function(t){return t.data})}},l={list:function(){return i.a.get(o.b).then(function(t){return t.data})}},u={list:function(t){return i.a.post(o.c,c.a.stringify(t)).then(function(t){return t.data})}},v={list:function(t){return i.a.post(o.d,c.a.stringify(t)).then(function(t){return t.data})}},d={list:function(t){return i.a.post(o.e,c.a.stringify(t)).then(function(t){return t.data})}}},"hrq/":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container fixclear"},[n("div",{staticClass:"collapse"},[n("ul",{staticClass:"nav fixclear"},[n("li",[t._v("发现")]),t._v(" "),n("li",[t._v("关注")]),t._v(" "),n("li",[t._v("消息")]),t._v(" "),n("li",{staticClass:"search",class:{long:t.widthLong}},[n("input",{class:{long:t.widthLong},attrs:{type:"text",placeholder:"搜索"},on:{click:function(e){t.longInput()}}}),t._v(" "),n("div",{staticClass:"btn"},[t._v("||")]),t._v(" "),n("div",{staticClass:"cover"})])])])])},a=[],i={render:o,staticRenderFns:a};e.a=i},jUBL:function(t,e){},jmfq:function(t,e,n){"use strict";function o(t){n("/3IL")}var a=n("QwzG"),i=n("eu6S"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},jooJ:function(t,e){},k0aD:function(t,e,n){"use strict";function o(t){n("fMBE")}var a=n("NF+0"),i=n("kAju"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},kAju:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic"},[n("vue-super-scroller",{attrs:{"load-disabled":!t.hasNext,"on-load":t.loadMore}},[n("div",{staticClass:"top"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:"//hbpic-10057247.file.myqcloud.com/cover/a81a9c2ba522bad276445058cdedab27.png"}})]),t._v(" "),n("div",{staticClass:"right"},[n("img",{attrs:{src:"//hbpic-10057247.file.myqcloud.com/cover/65c0d10ab77d0ff12f265c0640643edf.png"}})])]),t._v(" "),n("div",{staticClass:"header"},[n("div",{staticClass:"bg",style:t.backgroundImage}),t._v(" "),n("div",{staticClass:"name relative"},[t._v(t._s(t.topicList.name))]),t._v(" "),n("div",{staticClass:"participate relative"},[t._v(t._s(t.topicList.participate)+"人在玩")]),t._v(" "),n("div",{staticClass:"desc relative"},[t._v(t._s(t.topicList.desc))])]),t._v(" "),n("button",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.num))]),t._v(" "),n("button",{on:{click:function(e){t.num++}}},[t._v("++")]),t._v(" "),n("topicContent",{ref:"content",attrs:{topicId:t.topic_id,hasNext:t.hasNext},on:{hotListLength:t.cc}})],1)],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},kilm:function(t,e,n){"use strict";var o=n("2sCs"),a=n.n(o),i=n("6iV/"),s=(n.n(i),n("gyMJ"));e.a={name:"model",data:function(){return{}},props:{pieceObj:{type:Object,default:{}}},methods:{close:function(){$(".model").hide()},confirmRelease:function(){var t=this,e={};e.id=t.pieceObj.id,e.desc=t.pieceObj.desc,e.tail=t.pieceObj.tail,e.name=t.pieceObj.name,e.title=t.pieceObj.title,e.author=t.pieceObj.author,e.image=t.pieceObj.image,e.remark=t.pieceObj.remark,s.c.list(e).then(function(e){console.log(e),0==e.result?t.close():alert(e.msg)})},aa:function(){a.a.get("/hook/piece/list").then(function(t){console.log(t)})}},created:function(){this.aa()}}},lmuD:function(t,e){},oAaK:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"haha"},[n("scroller",{ref:"myscroller",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[n("div",{staticClass:"shop-box"},[n("ul",t._l(t.moveList,function(e){return n("li",[n("h4",[t._v(t._s(e))])])}))])])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},"oqi+":function(t,e,n){"use strict";function o(t){n("RifT")}var a=n("DLay"),i=n("oAaK"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},qSdX:function(t,e,n){"use strict";function o(t){n("RcQ2")}var a=n("5K3j"),i=n("SGdR"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},qvMO:function(t,e){},rd4G:function(t,e){},teIl:function(t,e,n){"use strict";function o(t){n("jooJ")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("5fev"),i=n("zqVA"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.default=r.exports},tmjx:function(t,e,n){"use strict";function o(t){n("xoFs")}var a=n("kilm"),i=n("2RDy"),s=n("vSla"),c=o,r=s(a.a,i.a,!1,c,null,null);e.a=r.exports},vzXi:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hooked"},[n("div",{staticClass:"top-btn"},[n("button",{on:{click:function(e){t.clickNum(-1)}}},[t._v("上一页")]),t._v("\n        "+t._s(t.condition.num)+"\n        "),n("button",{on:{click:function(e){t.clickNum(1)}}},[t._v("下一页")])]),t._v(" "),n("button",{on:{click:function(e){t.hahaha()}}},[t._v("hahaahahh")]),t._v(" "),n("div",{staticClass:"option"},[n("h5",[t._v("过滤分类列表")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.condition.tagId,expression:"condition.tagId"}],staticClass:"form-control",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.condition,"tagId",e.target.multiple?n:n[0])},function(e){t.selectTagList(t.condition.tagId)}]}},t._l(t.tagList,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))]),t._v(" "),n("div",{staticClass:"input-group search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.condition.searchContent,expression:"condition.searchContent"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入关键字"},domProps:{value:t.condition.searchContent},on:{input:function(e){e.target.composing||t.$set(t.condition,"searchContent",e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.clearSearch()}}},[t._v("\n                清除\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.search}},[t._v("\n                关键字搜索\n            ")])])]),t._v(" "),n("hookContent",{ref:"hookedContent",attrs:{condition:t.condition,callback2:t.callback2},on:{chuandi:t.jieshou,haha:t.xixi,acc:t.bcc}})],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},xoFs:function(t,e){},zqVA:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._v("\n    header\n    "),n("button",{on:{click:t.goback}},[t._v("后退")]),t._v(" "),n("button",{on:{click:t.goHome}},[t._v("回到首页")]),t._v(" "),n("router-link",{attrs:{to:{path:"/header/198/jspang website is very good",params:{username:"jspang"}}}},[t._v("引入 footer")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("go to Hello")]),t._v(" "),n("router-link",{attrs:{to:"/Footer"}},[t._v("go to footer")]),t._v(" "),n("left",{attrs:{myName:t.name}}),t._v(" "),n("my-name",{attrs:{name:"丁铭","birth-time":"1994 - 04 -14"}}),t._v(" "),n("div",[n("button",[t._v(t._s(t.totalCounter))]),t._v(" "),n("button-counter",{on:{"increment-event":t.total_increment}}),t._v(" "),n("button-counter",{on:{"increment-event":t.total_increment}}),t._v(" "),n("hr"),t._v(" "),n("button-a",{on:{haha:t.ahah}}),t._v("\n      +\n      "),n("button-a",{on:{haha:t.ahah}}),t._v("\n      =\n      "+t._s(t.bb)+"\n  ")],1),t._v(" "),n("p",[t._v("这是slot的内容")]),t._v(" "),n("son-component",[n("p",[t._v("asfshfk")]),t._v(" "),n("p",[t._v("asdfasgdfhsdh")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.msg,expression:"msg",modifiers:{trim:!0}}],domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("el-button",{nativeOn:{click:function(e){return t.startHacking(e)}}},[t._v("Let's do it")]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"element-ui"},[n("el-row",[n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("1")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple-light"},[t._v("2")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("3")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple-light"},[t._v("4")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[t._v("5")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple-light"},[t._v("6")])])],1),t._v(" "),n("span",{staticClass:"demonstration"},[t._v("显示默认颜色")]),t._v(" "),n("span",{staticClass:"wrapper"},[n("el-button",{attrs:{type:"success"},on:{click:t.dingming}},[t._v("成功按钮")]),t._v(" "),n("el-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),t._v(" "),n("el-button",{attrs:{type:"danger"}},[t._v("危险按钮")]),t._v(" "),n("el-button",{attrs:{type:"info"}},[n("router-link",{attrs:{tag:"a",to:{path:"/header"},target:"_blank"}},[t._v("hahah")])],1)],1)],1)])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.0d131f4fd2cedc19b964.js.map