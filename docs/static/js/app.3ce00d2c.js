(()=>{"use strict";var e={3850:(e,t,s)=>{s(6992),s(8674),s(9601),s(7727);var n=s(144),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[];const i={name:"app"},a=i;var l=s(1001),u=(0,l.Z)(a,r,o,!1,null,null,null);const c=u.exports;var d=s(8345),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",[e._v(e._s(e.title))]),s("div",{staticClass:"intro"},[s("p",{domProps:{innerHTML:e._s(e.introduction1)}}),s("p",{domProps:{innerHTML:e._s(e.introduction2)}}),s("p",{domProps:{innerHTML:e._s(e.introduction3)}})]),s("form",[s("div",{staticClass:"name_input"},[s("span",[e._v("Your name: ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),s("div",[s("button",{staticClass:"start",on:{click:e.pracQuestionnaire}},[e._v("Practice")])]),s("button",{staticClass:"start",on:{click:e.startQuestionnaire}},[e._v("Start")])])])},h=[];s(3210),s(8309),s(7658);const m={data:function(){return{title:"User Study about Safety Report",introduction1:"Welcome to our user study! In this study, you will be required to complete <b>4</b> safety reports that compare the safety characteristics of similar products, such as Intel chips vs AMD chips. Each report should be completed within a <b>10-minute</b> time frame, and once the time is up, you will not be able to make any further changes and must move on to the next question.",introduction2:"For each report, you will need to search for clues and determine which product is superior for a specific aspect, providing a choice, reason, and references that will be considered as factors in the safety comparison result. We call this <b>&lt;choice, reason, references&gt;</b> a factor tuple. You may add as many factor tuples as you wish to each report, but ensure that your answers are real, accurate, and comprehensive.",introduction3:"To begin the study, please enter your name and click start. The first report will commence, and the timer will begin counting down.",name:""}},methods:{startQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"report",params:{name:this.name}})},pracQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"demo",params:{name:this.name}})}}},f=m;var v=(0,l.Z)(f,p,h,!1,null,null,null);const b=v.exports;var w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title",domProps:{innerHTML:e._s(e.question.title)}}),e._l(e.tupleIndex,(function(t){return s("div",[s("ReportTuple",{key:t,ref:"reportTuples_"+t,refInFor:!0,attrs:{question:e.question,"able-edit":e.ableEdit,name:t}}),s("hr")],1)})),s("button",{attrs:{disabled:!e.ableEdit},on:{click:e.addQuestion}},[e._v("+")])],2),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},_=[],x=(s(2564),s(8862),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-details"},[s("p",[e._v("Result:")]),s("div",{staticClass:"form-group selections"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],attrs:{type:"radio",disabled:!e.ableEdit,name:"answer-option"+e.name},domProps:{value:0,checked:e._q(e.selectedOption,0)},on:{change:function(t){e.selectedOption=0}}}),e._v(" "+e._s(e.question.options[0])+" ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],attrs:{type:"radio",disabled:!e.ableEdit,name:"answer-option"+e.name},domProps:{value:1,checked:e._q(e.selectedOption,1)},on:{change:function(t){e.selectedOption=1}}}),e._v(" "+e._s(e.question.options[1])+" ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],attrs:{type:"radio",disabled:!e.ableEdit,name:"answer-option"+e.name},domProps:{value:2,checked:e._q(e.selectedOption,2)},on:{change:function(t){e.selectedOption=2}}}),e._v(" "+e._s(e.question.options[2])+" ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],attrs:{type:"radio",disabled:!e.ableEdit,name:"answer-option"+e.name},domProps:{value:3,checked:e._q(e.selectedOption,3)},on:{change:function(t){e.selectedOption=3}}}),e._v(" "+e._s(e.question.options[3])+" ")])]),s("p",[e._v("Reason:")]),s("div",{staticClass:"form-group"},[s("label",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reason,expression:"reason"}],attrs:{rows:"3",disabled:!e.ableEdit},domProps:{value:e.reason},on:{input:function(t){t.target.composing||(e.reason=t.target.value)}}})])]),s("p",[e._v("References:")]),s("div",{staticClass:"form-group"},[s("label",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.references,expression:"references"}],attrs:{rows:"5",disabled:!e.ableEdit},domProps:{value:e.references},on:{input:function(t){t.target.composing||(e.references=t.target.value)}}})])])])}),y=[];const q={name:"ReportTuple",props:{question:{type:Object,required:!0},ableEdit:{type:Boolean,required:!0},name:{type:String,required:!0}},data:function(){return{selectedOption:null,reason:"",references:""}},methods:{resetParameters:function(){this.selectedOption=null,this.reason="",this.references=""}}},g=q;var O=(0,l.Z)(g,x,y,!1,null,"364a7151",null);const T=O.exports;var k=s(3162);const I={name:"Report",components:{ReportTuple:T},data:function(){return{questionIndex:0,minutes:10,seconds:0,tupleIndex:1,ableEdit:!0,answers:[],finalStoredData:{},questions:[{title:"Please compare the products: <b>google android</b> vs <b>apple iphone os</b>",options:["google android is better","apple iphone os is better","they are equal","hard to say"]},{title:"Please compare the products: <b>microsoft windows 10</b> vs <b>linux kernel</b>",options:["microsoft windows 10 is better","linux kernel is better","they are equal","hard to say"]},{title:"Please compare the products: <b>google chrome</b> vs <b>mozilla firefox</b>",options:["google chrome is better","mozilla firefox is better","they are equal","hard to say"]},{title:"Please compare the products: <b>microsoft windows server 2016</b> vs <b>apple mac os x server</b>",options:["microsoft windows server 2016 is better","apple mac os x server is better","they are equal","hard to say"]}]}},created:function(){this.createAnswer(this.tupleIndex)},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},addQuestion:function(){this.tupleIndex+=1,this.createAnswer(this.tupleIndex)},createAnswer:function(e){var t={tuple_id:e};this.answers.push(t)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers=[],this.$refs["reportTuples_1"][0].resetParameters(),this.createAnswer(this.tupleIndex)},nextQuestion:function(){console.log(this.$refs);for(var e=0;e<this.tupleIndex;e++)this.answers[e]["selectedOption"]=this.$refs["reportTuples_"+(e+1)][0].selectedOption,this.answers[e]["reason"]=this.$refs["reportTuples_"+(e+1)][0].reason,this.answers[e]["references"]=this.$refs["reportTuples_"+(e+1)][0].references;console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={answers:this.answers,min:9-this.minutes,sec:60-this.seconds},this.questionIndex<3?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,k.saveAs)(s,t)}},mounted:function(){this.startTimer()}},P=I;var C=(0,l.Z)(P,w,_,!1,null,"13ef0064",null);const E=C.exports;var $=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thanks"},[s("p",{domProps:{innerHTML:e._s(e.thanks1)}}),s("p",{domProps:{innerHTML:e._s(e.thanks2)}})])},S=[];const A={name:"Thanks",data:function(){return{thanks1:"Thanks for participation. I don't have time to write a proper backend, so instead, the result is downloaded to your local side.",thanks2:"Please send it to me via Wechat, or to <a href='mailto:u5871153@anu.edu.au'>U5871153@anu.edu.au</a> :)"}}},N=A;var Q=(0,l.Z)(N,$,S,!1,null,"55a07928",null);const R=Q.exports;var Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title",domProps:{innerHTML:e._s(e.question.title)}}),e._l(e.tupleIndex,(function(t){return s("div",[s("ReportTuple",{key:t,ref:"reportTuples_"+t,refInFor:!0,attrs:{question:e.question,"able-edit":e.ableEdit,name:t}}),s("hr")],1)})),s("button",{attrs:{disabled:!e.ableEdit},on:{click:e.addQuestion}},[e._v("+")])],2),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},j=[];const D={name:"Demo",components:{ReportTuple:T},data:function(){return{questionIndex:0,minutes:10,seconds:0,tupleIndex:1,ableEdit:!0,answers:[],finalStoredData:{},questions:[{title:"Please compare the products: <b>amd processor</b> vs <b>intel processor</b>",options:["amd processor is better","intel processor is better","they are equal","hard to say"]}]}},created:function(){this.createAnswer(this.tupleIndex)},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},addQuestion:function(){this.tupleIndex+=1,this.createAnswer(this.tupleIndex)},createAnswer:function(e){var t={tuple_id:e};this.answers.push(t)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers=[],this.$refs["reportTuples_1"][0].resetParameters(),this.createAnswer(this.tupleIndex)},nextQuestion:function(){console.log(this.$refs);for(var e=0;e<this.tupleIndex;e++)this.answers[e]["selectedOption"]=this.$refs["reportTuples_"+(e+1)][0].selectedOption,this.answers[e]["reason"]=this.$refs["reportTuples_"+(e+1)][0].reason,this.answers[e]["references"]=this.$refs["reportTuples_"+(e+1)][0].references;console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={answers:this.answers,min:9-this.minutes,sec:60-this.seconds},this.saveAsJSON(),this.$router.push("/thanks")},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,k.saveAs)(s,t)}},mounted:function(){this.startTimer()}},M=D;var H=(0,l.Z)(M,Z,j,!1,null,"44c43ff0",null);const L=H.exports;n.Z.use(d.Z);var J=[{path:"/",name:"welcome",component:b},{path:"/report/:name",name:"report",component:E},{path:"/thanks",name:"thanks",component:R},{path:"/demo/:name",name:"demo",component:L}],F=new d.Z({routes:J});const B=F;new n.Z({router:B,render:function(e){return e(c)}}).$mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,(()=>{var e=[];s.O=(t,n,r,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,r,o]=e[c],a=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}})(),(()=>{s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,a,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(l)var c=l(s)}for(t&&t(n);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},n=self["webpackChunktosem_exp"]=self["webpackChunktosem_exp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=s.O(void 0,[998],(()=>s(3850)));n=s.O(n)})();
//# sourceMappingURL=app.3ce00d2c.js.map