webpackJsonp([7],{"4lum":function(t,e){},R6sS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("ZYmg"),i={data:function(){return{title:"",description:"",content:"",blogId:"",atIndex:!1}},created:function(){var t=this;this.blogId=this.$route.params.blogId,a.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content,t.atIndex=e.data.atIndex})},methods:{onEdit:function(){var t=this;a.a.updataBlog({blogId:this.blogId},{title:this.title,description:this.description,content:this.content,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+t.blogId})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create"},[n("h2",[t._v("编辑文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{clearable:"",maxlength:"30",type:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("span",[t._v("限30个字")]),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:3,maxlength:"200",resize:"none"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("span",[t._v("限200个字")]),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:10,maxlength:"10000",resize:"none"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("span",[t._v("限10000个字")]),t._v(" "),n("div",{staticClass:"isIndex"},[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onEdit}},[t._v("保存")])],1)},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(t){n("4lum")},"data-v-4fbd2dcc",null);e.default=s.exports}});
//# sourceMappingURL=7.033cefad8aeb123c1b08.js.map