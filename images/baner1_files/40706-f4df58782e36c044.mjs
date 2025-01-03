"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40706],{294103:e=>{var a,l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupLink_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"advertiserId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"attributionSourceId",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"campaignId",storageKey:null},{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinPromotionId",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"PromotedLeadForm",kind:"LinkedField",name:"promotedLeadForm",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"leadFormId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldOpenInStream",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};l.hash="c388a699c12312a570e854dd5c654a90",e.exports=l},269715:e=>{var a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin",selections:[{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinTagChipImagesPerSpec",kind:"LinkedField",name:"pinTagsChips",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CollageChips_pin2"}],type:"Pin",abstractKey:null};a.hash="f335e27af6b8e65cbc6d635cdc39dce4",e.exports=a},693445:e=>{var a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin2",selections:[{args:null,kind:"FragmentSpread",name:"CloseupLink_pin"}],type:"Pin",abstractKey:null};a.hash="df1a502b4660ea1f2f0f126f142daec4",e.exports=a},48714:(e,a,l)=>{l.d(a,{Se:()=>h,iw:()=>b,gV:()=>g,G3:()=>I,Gj:()=>k,Jd:()=>_,$3:()=>y});var n=l(56641),i=l(231486),t=l(226198),r=l(186656),s=l(250059);let o=e=>"string"!=typeof e&&e?e.state:null;var d=l(643913),u=l(547239),c=l(508847),p=l(579164),m=l(333155);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},g=({isOffsiteUrl:e,event:a})=>!e&&(a.metaKey||a.ctrlKey),y=({location:e,pinId:a,surface:l})=>!!l&&!m.ZF.includes(l)||e.pathname.includes(a),h=(e,a)=>{let l=Math.round(1e3*Math.random())+"",n=Math.round(1e3*Math.random())+"";i.t8((0,t.GS)(l),n);let r={token:`${l}-${n}`,url:e,...a&&!a.params?a.queryParams:a?.params&&{pin:a.params.pinId??void 0,isThirdPartyAd:a.params.isThirdPartyAd??void 0,csr:a.params.csrId&&!a.params.pinId?a.params.csrId:void 0,client_tracking_params:a.params.clientTrackingParams,aux_data:a.params.auxData?JSON.stringify(a.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(r)}`},k=(e,a)=>{(0,n.Z)(h(e,a),!0,a?.features)},b=async({clientTrackingParams:e,href:a,isMounted:l,pinId:n,spamCheckCallback:i})=>{let t=await (0,r.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:n,url:a}});if(!t.resource_response.error&&l){let e=t.resource_response.data||{},{message:a,redirect_status:l,url:n}=e,r=["blocked","suspicious","porn"].includes(l);i({blocked:r,message:a,redirectStatus:l,sanitized_url:n})}},I=({event:e,onHistoryChange:a,href:l,history:i,target:t})=>{let r=(0,s.Z)(l),d=o(l),m=(0,u.Z)(r);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===t?(0,n.Z)(r,"blank"===t):i&&m===p.Z.SAME_ORIGIN&&(i.push((0,c.Z)({url:r}),d??{}),a&&a({event:e}))}},287072:(e,a,l)=>{l.d(a,{Z:()=>p});var n=l(667294),i=l(616550),t=l(768559),r=l(48714),s=l(188335),o=l(250059),d=l(149230),u=l(108234),c=l(67347);function p(e){let{externalData:a,href:l,onHistoryChange:p,target:m}=e,[_,g]=(0,n.useState)(null),[y,h]=(0,n.useState)(!1),k=(0,i.k6)(),b=(0,i.TH)(),I=(0,o.Z)(l),f=(0,d.Z)({url:I}),{showWarning:P}=(0,u.s)()??{},{pin:v,surface:w}=a||{},S=v?(0,t.Z)({boardUrl:v.board?.url,location:b,pinId:v.entityId,pinnerUserName:v.pinner?.username,storyPinDataId:v.storyPinDataId,trackingParams:v.trackingParams,trackingParamsMap:v.trackingParamsMap}):null,x=(0,s.Z)();return(0,n.useEffect)(()=>(h(!0),()=>{h(!1)}),[]),(0,n.useEffect)(()=>{f&&v&&null===_&&y&&(!v.promoter||v.isDownstreamPromotion)&&(0,r.$3)({location:b,pinId:v.entityId,surface:w})&&(0,r.iw)({clientTrackingParams:S,isMounted:y,pinId:v.entityId,spamCheckCallback:e=>g(e),href:I})},[S,v,w,I,f,y,b,_]),({event:e})=>{if(!(0,r.gV)({isOffsiteUrl:f,event:e})){if(e.preventDefault(),!l||"string"==typeof l&&l.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:b.pathname,href:l}});return}f||a?.dangerouslyForceOffsiteUrl?x({auxData:a?.auxData,clientTrackingParams:S,pin:a?.pin&&{attributionSourceId:a.pin.attributionSourceId,campaignId:a.pin.campaignId,isPromoted:a.pin.isPromoted,pinPromotionId:a.pin.pinPromotionId,isThirdPartyAd:a.pin.isThirdPartyAd,advertiserId:a.pin.advertiserId},pinId:a?.pin?.entityId,queryParams:a?.queryParams,showWarning:P,spamCheck:_,url:I}):(0,r.G3)({event:e,href:l,history:k,onHistoryChange:p,target:"blank"===m?"blank":null})}}}},188335:(e,a,l)=>{l.d(a,{Z:()=>m});var n=l(983722),i=l(619937),t=l(337815),r=l(366284),s=l(407043),o=l(48714),d=l(43760);let u=(e,a,l)=>{let n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(i.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(i.$N.ATTRIBUTE_DESTINATION,l),n.setAttribute(i.$N.ATTRIBUTE_ON,l),n.click()},c=(e,a,l,n,r)=>{let s=(0,t.m_)(e,l,!0,n,r),o=document.createElement("a");o.setAttribute("href",a),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(i.NR.SOURCE,s),o.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:a,auxData:l,campaignId:i,clientTrackingParams:t,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_,advertiserId:g})=>{if(!d)return!1;let y=(0,n.Z)(),h=(0,o.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:t,auxData:l,isThirdPartyAd:_}}),k=y?.userAgent.browserName??"";if((0,r.G6)(k)){let{group:l}=y?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},n=y?.userAgent.browserVersion?y.userAgent.browserVersion:"0.0",r=parseFloat(n.split(".")[0]+"."+n.split(".")[1]);if(a&&r>=14.1&&["enabled_safari"].includes(l))return u(a,h,s),e({event_type:101,clientTrackingParams:t,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:i||"",is_pcm:!0,attribution_source_id:a,page_url:s}}),!0}else if((0,r.i7)(k)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return c(a,h,s,i,g),e({event_type:101,clientTrackingParams:t,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:i||"",is_arapi:!0,attribution_source_id:a,page_url:s}}),!0;return!1}},m=e=>{let a=p();return({auxData:l,clientTrackingParams:n,pin:i,pinId:t,queryParams:r,showWarning:s,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:n,pinId:t,hasPin:!!i,auxData:l,isThirdPartyAd:i?.isThirdPartyAd});return}if(!i&&!e?.isFromClickthroughLink){(0,o.Gj)(c,r?{queryParams:r}:{params:{pinId:t}});return}if(u?.blocked){s?.(u);return}i&&a({attributionSourceId:i.attributionSourceId,auxData:l,campaignId:i.campaignId?String(i.campaignId):null,clientTrackingParams:n,href:c,isPromoted:i.isPromoted,pinId:t,pinPromotionId:i.pinPromotionId?String(i.pinPromotionId):null,isThirdPartyAd:i.isThirdPartyAd,advertiserId:i.advertiserId?i.advertiserId:null})||(0,o.Gj)(c,{params:{clientTrackingParams:n,auxData:l,pinId:t,isThirdPartyAd:i?.isThirdPartyAd}})}}},250059:(e,a,l)=>{l.d(a,{Z:()=>n});let n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,a,l)=>{l.d(a,{Z:()=>t});let n=(e,a)=>0===e.lastIndexOf(a,0);var i=l(567831);let t=({url:e})=>{let a=(0,i.Z)("/");return n(e,a)?e.substr(a.length-1):e}},43760:(e,a,l)=>{l.d(a,{Z:()=>t});var n=l(186656),i=l(48714);function t(e,a){let{auxData:l,clientTrackingParams:t,hasPin:r,pinId:s,isThirdPartyAd:o}=a||{},d={pin_id:s,check_only:!0,client_tracking_params:r?t:void 0,url:e,aux_data:JSON.stringify(l)};o&&(d.third_party_ad=s,delete d.pin_id),(0,n.Z)({url:"/v3/offsite/",data:d}).then(a=>{if(a&&a.resource_response&&!a.resource_response.error){let{resource_response:e}=a,{redirect_status:l,url:n}=e.data,i=["blocked","suspicious","porn"].includes(l);if(!i){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,i.Gj)(e,{params:r?{pinId:s,clientTrackingParams:t,auxData:l,isThirdPartyAd:o}:{pinId:s}})})}},40706:(e,a,l)=>{l.d(a,{Z:()=>p}),l(167912);var n,i,t=l(883119),r=l(916117),s=l(357998),o=l(62700),d=l(785893);let u={chip:{marginRight:1,flex:"1 1 0"},chipInner:{paddingBottom:"100%"},chipContainer:{marginRight:-1}},c=void 0!==n?n:n=l(269715);function p({pinKey:e,enableCloseupLink:a,trackingParamsMap:n}){let p=(0,r.Z)(c,e),{childDataKey__DEPRECATED:m}=(0,s.Q)(void 0!==i?i:i=l(693445),p,{useLegacyAdapter:e=>({})}),{aggregatedPinData:_}=p,{pinTagsChips:g}=_||{},y=g&&g.length>=3?g.slice(0,3):[];return(0,d.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipContainer},display:"flex",children:y.map(e=>{let l=e.image||{},i=(0,d.jsx)(t.Ee,{alt:"",fit:"cover",naturalHeight:l.height??1,naturalWidth:l.width??1,role:"presentation",src:l.url??""});return(0,d.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chip},"data-test-id":"collageChip",children:(0,d.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipInner},position:"relative",children:(0,d.jsx)(t.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,d.jsx)(t.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,d.jsx)(o.Z,{collageChipId:e.entityId??"",pinKey:m,sizing:"fullSize",trackingParamsMap:n,children:i}):i})})})},e.entityId)})})}},576440:(e,a,l)=>{l.d(a,{B:()=>i,E:()=>t});var n=l(425288);let{Provider:i,useHook:t}=(0,n.Z)("trackingParametersContext")},62700:(e,a,l)=>{l.d(a,{Z:()=>k}),l(167912);var n,i=l(883119),t=l(260633),r=l(407043),s=l(916117),o=l(898781),d=l(287072),u=l(773285),c=l(780280),p=l(66699),m=l(999018),_=l(19121),g=l(576440),y=l(785893);let h=void 0!==n?n:n=l(294103);function k({sizing:e="default",children:a,collageChipId:l,componentType:n,contextLogData:k,elementType:b,disableA11yLabel:I,pinKey:f,trackingParamsMap:P,viewParameter:v,viewType:w}){let S=(0,o.ZP)(),{isRTL:x}=(0,c.B)(),F=(0,s.Z)(h,f),{logContextEvent:A}=(0,r.v)(),T=(0,g.E)(),{checkExperiment:K}=(0,u.F)(),{isAuth:Z}=(0,_.Z)(),D=!!F.storyPinDataId&&!1===F.shouldOpenInStream,L=!!F.storyPinDataId&&!D,j=!x&&!F.promotedIsLeadAd&&!F.isEligibleForPdp&&!L&&K(Z?"closeup_auth_related_pins_above_fold_2024_dweb":"closeup_unauth_related_pins_above_fold_2024_dweb").group||"",C=["enabled_stacked_closeup","enabled_side_by_side_closeup"].includes(j),E=Z&&K("closeup_dweb_remove_magnifying_glass").anyEnabled,{carouselData:z,entityId:O}=F,U=!!F.promotedIsLeadAd,M={},N=`/pin/${l||O}/`,R=(0,t.Xx)();if(R?.variantUrl&&(N=`/pin/${R.variantUrl}/`),z){let{carouselSlots:e,entityId:a}=z,l=z.index??0;N=`/pin/${O}/`,M={carousel_slot_id:e?.[l]&&e[l].entityId,carousel_data_id:a,carousel_slot_index:l}}let W=(0,m.Z)(F);M={...M,...W({default:k?.commerce_data})};let B=()=>{if(U)A({event_type:8948,view_type:w||T.viewType,view_parameter:v||T.viewParameter,component:null,object_id_str:F.entityId,aux_data:{closeup_navigation_type:"click",lead_form_id:F.promotedLeadForm?.leadFormId,is_lead_ad:1}}),A({event_type:12,view_type:w||T.viewType,view_parameter:v||T.viewParameter,component:null,object_id_str:F.entityId,aux_data:{lead_form_id:F.promotedLeadForm?.leadFormId,is_lead_ad:1,...W()}});else{let e={...k,...W({default:k?.commerce_data})};A({event_type:101,component:n||T.componentType,element:b,object_id_str:O,view_type:w||T.viewType,view_parameter:v||T.viewParameter,aux_data:e}),A({event_type:8948,view_type:w||T.viewType,view_parameter:v||T.viewParameter,component:n||T.componentType,element:b,object_id_str:O,aux_data:{closeup_navigation_type:"click",...e}})}},G=(0,d.Z)({href:N,externalData:{auxData:M,pin:F&&{advertiserId:F.advertiserId,attributionSourceId:F.attributionSourceId,board:F.board&&{url:F.board.url},campaignId:F.campaignId,entityId:F.entityId,isDownstreamPromotion:F.isDownstreamPromotion,isPromoted:F.isPromoted,pinner:F.pinner&&{username:F.pinner.username},pinPromotionId:F.pinPromotionId,promoter:F.promoter&&{entityId:F.promoter.entityId},storyPinDataId:F.storyPinDataId,trackingParams:F.trackingParams,trackingParamsMap:P}}});return(0,y.jsx)(i.Tg,{accessibilityLabel:I?void 0:(0,p.Z)(S._('{{ pinTitle }} pin page', 'pinRep.closeupLink.tapArea.accessibilityLabel', 'Accessibility label with pin title on individual links'),{pinTitle:F.gridTitle||F.title||F.description||""}),fullHeight:"fullSize"===e,fullWidth:"fullSize"===e,href:N,mouseCursor:C||E?void 0:"zoomIn",onTap:({event:e,dangerouslyDisableOnNavigation:a})=>{a(),B(),G({event:e})},rounding:2,children:a})}},108234:(e,a,l)=>{l.d(a,{Z:()=>y,s:()=>g});var n=l(667294),i=l(425288),t=l(608575),r=l(883119),s=l(121151),o=l(898781),d=l(349700),u=l(785893);let c=()=>{let e=(0,o.ZP)(),{dismissWarning:a}=g()??{};return(0,u.jsx)(r.xu,{paddingX:3,children:(0,u.jsx)(r.zx,{color:"red",fullWidth:!0,onClick:a,text:e._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{let e=(0,o.ZP)();return(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(r.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},m=({message:e,sanitized_url:a})=>{let l=(0,o.ZP)(),{dismissWarning:n}=g()??{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:l._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),footer:(0,u.jsx)(c,{}),heading:l._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),onDismiss:n,children:(0,u.jsxs)(r.xu,{padding:6,children:[(0,u.jsx)(r.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(r.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(r.xu,{marginEnd:3,children:(0,u.jsx)(r.JO,{accessibilityLabel:l._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(r.xv,{inline:!0,lineClamp:1,weight:"bold",children:t.parse(a).hostname})]})]})})},{Provider:_,useMaybeHook:g}=(0,i.Z)("SpammyClickthrough");function y({children:e}){let[a,l]=(0,n.useState)(null),i=(0,n.useCallback)(()=>{l(null)},[l]),t=(0,n.useCallback)(e=>{l(e)},[l]),r=(0,n.useMemo)(()=>({dismissWarning:i,showWarning:t}),[i,t]);return(0,u.jsxs)(_,{value:r,children:[a&&(0,u.jsx)(m,{...a}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40706-f4df58782e36c044.mjs.map