(function(){"use strict";var e={986:function(e,t,n){var s=n(9242),r=n(3396);const i={id:"app"};function o(e,t,n,s,o,a){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(l)])}var a={name:"App"},l=n(89);const u=(0,l.Z)(a,[["render",o]]);var d=u,c=n(2483),p=n(7139);const h={class:"container"},m={class:"intro"},f=["innerHTML"],b=["innerHTML"],w=["innerHTML"],v={class:"name_input"},_=(0,r._)("span",null,"Your name: ",-1);function y(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("h1",null,(0,p.zw)(o.title),1),(0,r._)("div",m,[(0,r._)("p",{innerHTML:o.introduction1},null,8,f),(0,r._)("p",{innerHTML:o.introduction2},null,8,b),(0,r._)("p",{innerHTML:o.introduction3},null,8,w)]),(0,r._)("form",null,[(0,r._)("div",v,[_,(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.name=e),required:""},null,512),[[s.nr,o.name]])])]),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>a.startQuestionnaire&&a.startQuestionnaire(...e)),class:"start"},"Start")])])}n(7658);var x={data(){return{title:"User Study about Safety Report",introduction1:"Welcome to our user study! In this study, you will be required to complete <b>4</b> safety reports that compare the safety characteristics of similar products, such as Intel chips vs AMD chips. Each report should be completed within a <b>10-minute</b> time frame, and once the time is up, you will not be able to make any further changes and must move on to the next question.",introduction2:"For each report, you will need to search for clues and determine which product is superior for a specific aspect, providing a choice, reason, and references that will be considered as factors in the safety comparison result. We call this <b>&lt;choice, reason, references&gt;</b> a factor tuple. You may add as many factor tuples as you wish to each report, but ensure that your answers are real, accurate, and comprehensive.",introduction3:"To begin the study, please enter your name and click start. The first report will commence, and the timer will begin counting down.",name:""}},methods:{startQuestionnaire(){""!==this.name.trim()&&this.$router.push({name:"report",params:{name:this.name}})}}};const q=(0,l.Z)(x,[["render",y]]);var g=q;const T=e=>((0,r.dD)("data-v-a2845c40"),e=e(),(0,r.Cn)(),e),I={class:"container1"},O={class:"question-header"},k={class:"timer"},D={class:"container2"},$=["innerHTML"],E=T((()=>(0,r._)("hr",null,null,-1))),Q=["disabled"],A={class:"container3"};function H(e,t,n,s,i,o){const a=(0,r.up)("ReportTuple");return(0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",O,[(0,r._)("h2",null,(0,p.zw)(`Question ${i.questionIndex+1}:`),1),(0,r._)("div",k,(0,p.zw)(`Time: ${i.minutes}:${i.seconds}`),1)]),(0,r._)("div",D,[(0,r._)("p",{class:"question-title",innerHTML:o.question.title},null,8,$),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.tupleIndex,(e=>((0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(),(0,r.j4)(a,{question:o.question,"able-edit":i.ableEdit,key:e,name:e,ref_for:!0,ref:"reportTuples_"+e},null,8,["question","able-edit","name"])),E])))),256)),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>o.addQuestion&&o.addQuestion(...e)),disabled:!i.ableEdit},"+",8,Q)]),(0,r._)("div",A,[(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>o.nextQuestion&&o.nextQuestion(...e)),class:"next-button"},"Next")])])}const M=e=>((0,r.dD)("data-v-364a7151"),e=e(),(0,r.Cn)(),e),S={class:"question-details"},P=M((()=>(0,r._)("p",null,"Result:",-1))),L={class:"form-group selections"},U=["disabled","name"],j=["disabled","name"],z=["disabled","name"],C=["disabled","name"],R=M((()=>(0,r._)("p",null,"Reason:",-1))),N={class:"form-group"},V=["disabled"],J=M((()=>(0,r._)("p",null,"References:",-1))),Z={class:"form-group"},G=["disabled"];function W(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",S,[P,(0,r._)("div",L,[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedOption=e),value:0,disabled:!n.ableEdit,name:"answer-option"+n.name},null,8,U),[[s.G2,o.selectedOption]]),(0,r.Uk)(" "+(0,p.zw)(n.question.options[0]),1)]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.selectedOption=e),value:1,disabled:!n.ableEdit,name:"answer-option"+n.name},null,8,j),[[s.G2,o.selectedOption]]),(0,r.Uk)(" "+(0,p.zw)(n.question.options[1]),1)]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.selectedOption=e),value:2,disabled:!n.ableEdit,name:"answer-option"+n.name},null,8,z),[[s.G2,o.selectedOption]]),(0,r.Uk)(" "+(0,p.zw)(n.question.options[2]),1)]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=e=>o.selectedOption=e),value:3,disabled:!n.ableEdit,name:"answer-option"+n.name},null,8,C),[[s.G2,o.selectedOption]]),(0,r.Uk)(" "+(0,p.zw)(n.question.options[3]),1)])]),R,(0,r._)("div",N,[(0,r._)("label",null,[(0,r.wy)((0,r._)("textarea",{rows:"3","onUpdate:modelValue":t[4]||(t[4]=e=>o.reason=e),disabled:!n.ableEdit},null,8,V),[[s.nr,o.reason]])])]),J,(0,r._)("div",Z,[(0,r._)("label",null,[(0,r.wy)((0,r._)("textarea",{rows:"5","onUpdate:modelValue":t[5]||(t[5]=e=>o.references=e),disabled:!n.ableEdit},null,8,G),[[s.nr,o.references]])])])])}var Y={name:"ReportTuple",props:{question:{type:Object,required:!0},ableEdit:{type:Boolean,required:!0},name:{type:String,required:!0}},data(){return{selectedOption:null,reason:"",references:""}},methods:{resetParameters(){this.selectedOption=null,this.reason="",this.references=""}}};const B=(0,l.Z)(Y,[["render",W],["__scopeId","data-v-364a7151"]]);var F=B,K=n(6154),X={name:"Report",components:{ReportTuple:F},data(){return{questionIndex:0,minutes:10,seconds:0,tupleIndex:1,ableEdit:!0,answers:[],finalStoredData:{},questions:[{title:"Please compare the products: <b>google android</b> vs <b>apple iphone os</b>",options:["google android is better","apple iphone os is better","they are equal","hard to say"]},{title:"Please compare the products: <b>microsoft windows</b> vs <b>linux kernel</b>",options:["microsoft windows is better","linux kernel is better","they are equal","hard to say"]},{title:"Please compare the products: <b>google chrome</b> vs <b>mozilla firefox</b>",options:["google chrome is better","mozilla firefox is better","they are equal","hard to say"]},{title:"Please compare the products: <b>microsoft windows server</b> vs <b>apple mac os x server</b>",options:["microsoft windows server is better","apple mac os x server is better","they are equal","hard to say"]}]}},created(){this.createAnswer(this.tupleIndex)},computed:{question(){return this.questions[this.questionIndex]}},methods:{startTimer(){setInterval((()=>{this.seconds>0?this.seconds--:this.minutes>0?(this.minutes--,this.seconds=59):this.ableEdit=!1}),1e3)},addQuestion(){this.tupleIndex+=1,this.createAnswer(this.tupleIndex)},createAnswer(e){var t={tuple_id:e};this.answers.push(t)},resetParameters(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers=[],this.$refs["reportTuples_1"][0].resetParameters(),this.createAnswer(this.tupleIndex)},nextQuestion(){console.log(this.$refs);for(var e=0;e<this.tupleIndex;e++)this.answers[e]["selectedOption"]=this.$refs["reportTuples_"+(e+1)][0].selectedOption,this.answers[e]["reason"]=this.$refs["reportTuples_"+(e+1)][0].reason,this.answers[e]["references"]=this.$refs["reportTuples_"+(e+1)][0].references;console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={answers:this.answers,min:9-this.minutes,sec:60-this.seconds},this.questionIndex<3?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))},saveAsJSON(){const e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",n=new Blob([e],{type:"text/plain;charset=utf-8"});(0,K.saveAs)(n,t)}},mounted(){this.startTimer()}};const ee=(0,l.Z)(X,[["render",H],["__scopeId","data-v-a2845c40"]]);var te=ee;const ne={class:"thanks"},se=["innerHTML"],re=["innerHTML"];function ie(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)("div",ne,[(0,r._)("p",{innerHTML:i.thanks1},null,8,se),(0,r._)("p",{innerHTML:i.thanks2},null,8,re)])}var oe={name:"Thanks",data(){return{thanks1:"Thanks for participation. I don't have time to write a proper backend, so instead, the result is downloaded to your local side.",thanks2:"Please send it to me via Wechat, or to <a href='mailto:u5871153@anu.edu.au'>U5871153@anu.edu.au</a> :)"}}};const ae=(0,l.Z)(oe,[["render",ie],["__scopeId","data-v-55a07928"]]);var le=ae;const ue=e=>((0,r.dD)("data-v-44c43ff0"),e=e(),(0,r.Cn)(),e),de={class:"container1"},ce={class:"question-header"},pe={class:"timer"},he={class:"container2"},me=["innerHTML"],fe=ue((()=>(0,r._)("hr",null,null,-1))),be=["disabled"],we={class:"container3"};function ve(e,t,n,s,i,o){const a=(0,r.up)("ReportTuple");return(0,r.wg)(),(0,r.iD)("div",de,[(0,r._)("div",ce,[(0,r._)("h2",null,(0,p.zw)(`Question ${i.questionIndex+1}:`),1),(0,r._)("div",pe,(0,p.zw)(`Time: ${i.minutes}:${i.seconds}`),1)]),(0,r._)("div",he,[(0,r._)("p",{class:"question-title",innerHTML:o.question.title},null,8,me),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.tupleIndex,(e=>((0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(),(0,r.j4)(a,{question:o.question,"able-edit":i.ableEdit,key:e,name:e,ref_for:!0,ref:"reportTuples_"+e},null,8,["question","able-edit","name"])),fe])))),256)),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>o.addQuestion&&o.addQuestion(...e)),disabled:!i.ableEdit},"+",8,be)]),(0,r._)("div",we,[(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>o.nextQuestion&&o.nextQuestion(...e)),class:"next-button"},"Next")])])}var _e={name:"Demo",components:{ReportTuple:F},data(){return{questionIndex:0,minutes:10,seconds:0,tupleIndex:1,ableEdit:!0,answers:[],finalStoredData:{},questions:[{title:"Please compare the products: <b>amd processor</b> vs <b>intel processor</b>",options:["amd processor is better","intel processor is better","they are equal","hard to say"]}]}},created(){this.createAnswer(this.tupleIndex)},computed:{question(){return this.questions[this.questionIndex]}},methods:{startTimer(){setInterval((()=>{this.seconds>0?this.seconds--:this.minutes>0?(this.minutes--,this.seconds=59):this.ableEdit=!1}),1e3)},addQuestion(){this.tupleIndex+=1,this.createAnswer(this.tupleIndex)},createAnswer(e){var t={tuple_id:e};this.answers.push(t)},resetParameters(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers=[],this.$refs["reportTuples_1"][0].resetParameters(),this.createAnswer(this.tupleIndex)},nextQuestion(){console.log(this.$refs);for(var e=0;e<this.tupleIndex;e++)this.answers[e]["selectedOption"]=this.$refs["reportTuples_"+(e+1)][0].selectedOption,this.answers[e]["reason"]=this.$refs["reportTuples_"+(e+1)][0].reason,this.answers[e]["references"]=this.$refs["reportTuples_"+(e+1)][0].references;console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={answers:this.answers,min:9-this.minutes,sec:60-this.seconds},this.saveAsJSON(),this.$router.push("/thanks")},saveAsJSON(){const e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",n=new Blob([e],{type:"text/plain;charset=utf-8"});(0,K.saveAs)(n,t)}},mounted(){this.startTimer()}};const ye=(0,l.Z)(_e,[["render",ve],["__scopeId","data-v-44c43ff0"]]);var xe=ye;const qe=[{path:"/",name:"welcome",component:g},{path:"/report/:name",name:"report",component:te},{path:"/thanks",name:"thanks",component:le},{path:"/demo/:name",name:"demo",component:xe}],ge=(0,c.p7)({history:(0,c.PO)(),routes:qe});var Te=ge;ge.beforeEach(((e,t,n)=>{document.title=e.meta.title,n()})),(0,s.ri)(d).use(Te).mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,o=s[0],a=s[1],l=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(t&&t(s);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},s=self["webpackChunktosem_exp"]=self["webpackChunktosem_exp"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(986)}));s=n.O(s)})();
//# sourceMappingURL=app.30e08bef.js.map