"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90123],{17314:(e,t,i)=>{i.d(t,{Z:()=>u});var r,s,n=i(813653),a=i(861470),o=0,d=0;let u=function(e,t,i){var u=t&&i||0,c=t||Array(16),p=(e=e||{}).node||r,l=void 0!==e.clockseq?e.clockseq:s;if(null==p||null==l){var h=e.random||(e.rng||n.Z)();null==p&&(p=r=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==l&&(l=s=(h[6]<<8|h[7])&16383)}var m=void 0!==e.msecs?e.msecs:Date.now(),_=void 0!==e.nsecs?e.nsecs:d+1,g=m-o+(_-d)/1e4;if(g<0&&void 0===e.clockseq&&(l=l+1&16383),(g<0||m>o)&&void 0===e.nsecs&&(_=0),_>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");o=m,d=_,s=l;var f=((268435455&(m+=122192928e5))*1e4+_)%4294967296;c[u++]=f>>>24&255,c[u++]=f>>>16&255,c[u++]=f>>>8&255,c[u++]=255&f;var v=m/4294967296*1e4&268435455;c[u++]=v>>>8&255,c[u++]=255&v,c[u++]=v>>>24&15|16,c[u++]=v>>>16&255,c[u++]=l>>>8|128,c[u++]=255&l;for(var P=0;P<6;++P)c[u+P]=p[P];return t||(0,a.Z)(c)}},768559:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(826067);let s=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,n=(e,t)=>t?e.substring(t.length).split("/")[0]:e,a=({boardUrl:e,path:t,pinId:i,pinnerUserName:a,search:o,storyPinDataId:d})=>{if(!t)return"";let u="";switch(t){case"/":case"/homefeed/":return"UserHomefeedResource";case a&&`/${a}/pins/`:return"UserPinsResource";case a&&`/${a}/`:case/\/_activity\//.test(t)&&t:return"UserActivityPinsResource";case/\/_created\//.test(t)&&t:return d?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(t)&&t:return"UserDiscoveredPinsResource";case/\/_saved\//.test(t)&&t:return"BoardlessPinsResource";case a&&`/${a}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(t)&&t:return"VisualLiveSearchResource";case/\/pin\//.test(t)&&t:u="/pin/";let c=n(t,u);if(i!==c)return`RelatedPinFeedResource_${c}`;break;case/\/search\//.test(t)&&t:if(o){let e=(0,r.mB)(o,{shouldDecode:!1}).q||"";return`SearchResource_${e.toLowerCase()}`}break;case/\/categories\//.test(t)&&t:u="/categories/";let p=n(t,u);return`CategoryFeedResource_${p}`;case/\/discover\/topics\//.test(t)&&t:return"CategoryFeedResource";case/\/news_hub\//.test(t)&&t:u="/news_hub/";let l=n(t,u);return`NewsHubDetailsResource_${l}`;case/\/_tools\/more-ideas\//.test(t)&&t:return"BoardContentRecommendationResource";case/\/topics\//.test(t)&&t:u="/topics/";let h=n(t,u);return`TopicFeedResource_${h}`;case/\/source\//.test(t)&&t:u="/source/";let m=n(t,u);return`DomainFeedResource_${m}`;case/\/explore\//.test(t)&&t:u="/explore/";let _=n(t,u);return`SearchResource_${_}`;case e:case!!e&&/\/more_ideas\//.test(t)&&t:return"BoardFeedResource";case e&&t.indexOf(e)>-1&&t:return"BoardSectionPinsResource";case/\/brand_catalog\//.test(t)&&t:return"BrandCatalogFeedResource";case s.test(t)&&t:let g=t.match(s)?.[2]||"unknown";return`TodayArticleFeedResource_${g}`;case/\/today\//.test(t):return"TodayTabResource";case/\story_feed\//.test(t)&&t:if(o){let{feed_type:e,request_params:t}=(0,r.mB)(o);return`StoryFeedResource_${e}_${t}`}}return""},o=e=>{let t=e?.pathname;return t?(t.match(/\/search\//)&&e?.search&&(t+=e.search),t.toLowerCase()):""},d=({boardUrl:e,location:t,pinId:i,pinnerUserName:r,previousHistory:s,storyPinDataId:n,trackingParams:d,trackingParamsMap:u={}})=>{let c,p;if(!i||!d||!t)return;if(!u)return`${d??""}~0`;let{pathname:l,search:h}=t,m=a({boardUrl:e,path:l,pinId:i,pinnerUserName:r,search:h,storyPinDataId:n,trackingParams:d,trackingParamsMap:u}),_=Object.keys(u),g=(l||"").startsWith("/pin/");if(g){let e=_.find(e=>"PinResource"!==e);c=e?u[e]:u.PinResource}else c=u[m];if(!c&&s&&s.length){let t=o(s[s.length-1].location);p=a({boardUrl:e,path:t,pinId:i,pinnerUserName:r,search:h,storyPinDataId:n,trackingParams:d,trackingParamsMap:u}),c=u[p]}return c||(c=`${d||""}~0`),c}},433780:(e,t,i)=>{i.d(t,{w:()=>h});var r=i(768559),s=i(245474),n=i(704115),a=i(67347);function o(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let d=null,u={ACTIVE:"ACTIVE",PAUSED:"PAUSED"},c=()=>window&&window.performance&&window.performance.now?`(Time: ${(window.performance.now()/1e3).toFixed(3)}s)`:"",p=e=>{let t=!1;return(...i)=>{t||(t=!0,e(...i))}},l={};function h({contextLogger:e,shouldExtractTrackingParams:t}){if(d)return d;let i=(i,s,n)=>{if(t&&n&&i){let e;let{pair_id:t,event_type:a}=i;if(4703===a&&t&&l[t])i.clientTrackingParams=l[t];else{let o=i.object_id_str,d=o?n[o]:null,u=s?.current?.location,c=s?.previous;d&&u&&(e=(0,r.Z)({boardUrl:d.board?.url,location:u,pinId:d.id,pinnerUserName:d.pinner?.username,previousHistory:c,storyPinDataId:d.story_pin_data_id,trackingParams:d.tracking_params,trackingParamsMap:d.tracking_params_map})||`${d.tracking_params||""}~0`,i.clientTrackingParams=e,4702===a&&t&&(l[t]=e))}}e.logContextEvent(i)},h=new Map,m=(0,n.Z)()&&(0,n.Z)().debug_timespent,_=m?console:{error:(...e)=>{},log:(...e)=>{},group:(...e)=>{},groupEnd:(...e)=>{}};return console.group||(_.group=(...e)=>console.log(...e),_.groupEnd=(...e)=>{}),d=new class{constructor(){o(this,"appTimedPair",null),o(this,"clickthroughProperties",null),o(this,"historyStackContext",null),o(this,"offsiteTimedPair",null),o(this,"offsiteTimedPairForegroundId",null),o(this,"pins",Object.freeze({})),o(this,"addEventListeners",()=>{let e,t;"undefined"!==document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),t&&document.addEventListener(t,t=>{document[e]?this.unregisterApp(!1,void 0,t):document.hasFocus()&&this.registerApp()},!1),window.addEventListener("focus",this.registerApp),window.addEventListener("blur",e=>this.unregisterApp(!1,void 0,e));let i=p(e=>this.unregisterApp(!0,void 0,e));window.addEventListener("beforeunload",i),window.addEventListener("pagehide",i);let r=navigator&&navigator.userAgent.toLowerCase();r&&r.includes("macintosh")&&r.includes("chrome")&&window.addEventListener("popstate",()=>{document.hasFocus()||document[e]||(0,a.nP)("chrome_mac_back_forward_button",{sampleRate:1})})}),o(this,"storeClickthroughProperties",e=>{this.clickthroughProperties&&(0,a.nP)("webapp.metrics.clickthroughs.overwritten",{sampleRate:1,tags:{previousView:this.clickthroughProperties.view_type,previousViewParameter:this.clickthroughProperties.view_parameter,nextView:e.view_type,nextViewParameter:e.view_parameter}}),this.clickthroughProperties=e}),o(this,"clearClickthroughProperties",()=>{this.clickthroughProperties=null,this.offsiteTimedPair=null,this.offsiteTimedPairForegroundId=null}),o(this,"registerApp",()=>{_.group("App Foreground",c()),null==this.appTimedPair?(this.appTimedPair=new s.Z,this.appTimedPair.start(),this._unpauseAllComponents(),this._endOffsiteTimedPair(),null!==this.appTimedPair&&void 0!==this.appTimedPair&&i({event_type:4700,pair_id:this.appTimedPair.uuid},this.historyStackContext,this.pins)):_.error("TimedPair already exists for app."),_.groupEnd()}),o(this,"unregisterApp",(t=!1,r=!1,s)=>{_.group("App Background",c());let{appTimedPair:n}=this;if(null!=n){this._pauseAllComponents();let e=n.end();this._startOffsiteTimedPair(),i({event_type:4701,duration_ns:e,pair_id:n.uuid},this.historyStackContext,this.pins),this.appTimedPair=null}else _.error("No TimedPair found for app.");let a=["beforeunload","pagehide"],o=a.includes(s?.type),d=a.includes(s?.pauseReason);(o||d)&&this._endOffsiteTimedPair(),r||e.flushContextEvents(t??!1),_.groupEnd()}),o(this,"_activateComponent",e=>{_.group("Activating component",c()),m&&_.log(e.getContext());let t=e.getTimedPair();if(t){t.start();let{view:r,viewParameter:s,component:n,element:a,objectId:o,clientTrackingParams:d}=e.getLoggerContext();i({event_type:4702,view_type:r,view_parameter:s,component:n,element:a,object_id_str:o,view_data:e.props.viewData,pair_id:t.uuid,clientTrackingParams:d,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}_.groupEnd()}),o(this,"_deactivateComponent",e=>{_.group("Deactivating component",c()),m&&_.log(e.getContext());let t=e.getTimedPair();if(t){let{view:r,viewParameter:s,component:n,element:a,objectId:o,clientTrackingParams:d}=t,u=t.end();i({event_type:4703,view_type:r,view_parameter:s,component:n,element:a,object_id_str:o,view_data:e.props.viewData,duration_ns:u,pair_id:t.uuid,clientTrackingParams:d,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}_.groupEnd()}),o(this,"_startOffsiteTimedPair",()=>{let{clickthroughProperties:e}=this;e&&(this.offsiteTimedPair=new s.Z({...e,view:186,viewParameter:e.view_parameter,objectId:e.object_id_str}),this.offsiteTimedPair.start(),this.offsiteTimedPairForegroundId=this.appTimedPair?this.appTimedPair.uuid:null,i({...e,event_type:4702,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...e.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId}},this.historyStackContext,this.pins))}),o(this,"_endOffsiteTimedPair",()=>{let{offsiteTimedPair:e,clickthroughProperties:t}=this;if(e&&t){let r=e.end();i({...t,event_type:4703,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...t.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId},duration_ns:r},this.historyStackContext,this.pins),this.clearClickthroughProperties()}}),o(this,"_pauseAllComponents",()=>{_.group("Pause all components"),h.forEach((e,t,i)=>{e===u.ACTIVE&&this._deactivateComponent(t),i.set(t,u.PAUSED)}),_.groupEnd()}),o(this,"_unpauseAllComponents",()=>{_.group("Unpause all components"),h.forEach((e,t)=>{let i=new s.Z(t.getLoggerContext());t.setTimedPair(i,()=>{h.set(t,u.ACTIVE),this._activateComponent(t)})}),_.groupEnd()})}setHistoryStackContext(e){this.historyStackContext=e}setPins(e){this.pins=e}registerComponent(e){null===this.appTimedPair?h.set(e,u.PAUSED):(h.set(e,u.ACTIVE),this._activateComponent(e))}unregisterComponent(e){let t=h.get(e);t===u.ACTIVE&&(this._deactivateComponent(e),e.setTimedPair(new s.Z(e.getLoggerContext()))),h.delete(e)}size(){return h.size}}}},790123:(e,t,i)=>{i.d(t,{j:()=>l,w:()=>p});var r=i(407043),s=i(425288),n=i(780280),a=i(433780),o=i(50286),d=i(829407),u=i(785893);let{Provider:c,useMaybeHook:p}=(0,s.Z)("TimeSpentManagerContext");function l({children:e}){let t=(0,r.v)(),i=(0,o.HG)(),{isAuthenticated:s}=(0,n.B)(),p=(0,a.w)({contextLogger:t,shouldExtractTrackingParams:i&&s});return(0,d.Z)(()=>{document.hasFocus()&&p.registerApp(),p.addEventListeners()}),(0,u.jsx)(c,{value:p,children:e})}},245474:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(172045),s=i(17314);function n(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let a="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),o=class{constructor(e){n(this,"start",()=>(this.startTime=a(),this.startTime)),n(this,"end",()=>(this.endTime=a(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,s.Z)()}e&&Object.assign(this,e)}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90123-dee9b0e6f571bd34.mjs.map