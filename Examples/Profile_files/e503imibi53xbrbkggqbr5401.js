define("@glimmer/component/-private/base-component-manager",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/component"],(function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e,n,i){return class{static create(e){return new this(n(e))}constructor(n){(0,t.default)(this,"capabilities",i)
e(this,n)}createComponent(e,t){0
return new e(n(this),t.named)}getContext(e){return e}}}}))
define("@glimmer/component/-private/component",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/owner","@glimmer/component/-private/destroyables"],(function(e,t,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=e.ARGS_SET=void 0
e.ARGS_SET=void 0
0
e.default=class{constructor(e,i){(0,t.default)(this,"args",void 0)
0
this.args=i;(0,n.setOwner)(this,e)}get isDestroying(){return(0,i.isDestroying)(this)}get isDestroyed(){return(0,i.isDestroyed)(this)}willDestroy(){}}}))
define("@glimmer/component/-private/destroyables",["exports","ember"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.isDestroying=e.isDestroyed=void 0
e.isDestroying=t.default._isDestroying,e.isDestroyed=t.default._isDestroyed}))
define("@glimmer/component/-private/ember-component-manager",["exports","ember","@ember/object","@ember/application","@ember/component","@ember/runloop","@glimmer/component/-private/base-component-manager","@glimmer/component/-private/destroyables"],(function(e,t,n,i,r,o,a,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const{setDestroyed:s,setDestroying:c}=l,d=(0,r.capabilities)("3.13",{destructor:!0,asyncLifecycleCallbacks:!1,updateHook:!1}),u=t.default.destroy,p=t.default._registerDestructor
class m extends((0,a.default)(i.setOwner,i.getOwner,d)){createComponent(e,t){const n=super.createComponent(e,t)
p(n,(()=>{n.willDestroy()}))
return n}destroyComponent(e){u(e)}}0
e.default=m}))
define("@glimmer/component/-private/owner",["exports","@ember/application"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"setOwner",{enumerable:!0,get:function(){return t.setOwner}})}))
define("@glimmer/component/index",["exports","@ember/component","@glimmer/component/-private/ember-component-manager","@glimmer/component/-private/component"],(function(e,t,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let r=i.default
0;(0,t.setComponentManager)((e=>new n.default(e)),r)
e.default=r}))
define("mini-update/components/actor",["exports","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@ember/template-factory","@ember/helper","@ember/component","@ember/object","@glimmer/component","mini-update/components/helper-component/optional-navigation-context-wrapper","ember-cli-pemberly-tracking/modifiers/track-interaction","artdeco-entity-lockup/components/artdeco-entity-lockup","image-view-model/components/image-view-model","text-view-model/components/text-view-model-v2"],(function(e,t,n,i,r,o,a,l,s,c,d,u){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var p
e.default=(0,r.setComponentTemplate)((0,n.createTemplateFactory)({id:"A6EXEfnp",block:'[[[1,"\\n    "],[8,[32,0],[[4,[32,1],["actor"],[["controlTrackingId"],[[30,2]]]]],[["@navigationContext","@onClick"],[[30,1,["navigationContext"]],[30,0,["handleActorClick"]]]],[["default"],[[[[1,"\\n      "],[8,[32,2],[[24,0,"pt3 pb2 ph4"]],[["@size"],[3]],[["default"],[[[[1,"\\n"],[41,[30,1,["image"]],[[[1,"          "],[8,[30,3,["image"]],[[24,0,"mr1"]],null,[["default"],[[[[1,"\\n            "],[8,[32,3],null,[["@entitySize","@images","@isPresenceEnabled"],[3,[30,1,["image"]],true]],null],[1,"\\n          "]],[]]]]],[1,"\\n"]],[]],null],[1,"        "],[8,[30,3,["content"]],[[24,0,"full-width overflow-hidden"]],null,[["default"],[[[[1,"\\n          "],[10,0],[14,0,"display-flex"],[12],[1,"\\n            "],[8,[30,3,["title"]],[[24,0,"feed-mini-update-actor__name"]],null,[["default"],[[[[1,"\\n              "],[8,[32,4],null,[["@tvm"],[[30,1,["name"]]]],null],[1,"\\n            "]],[]]]]],[1,"\\n"],[41,[30,1,["supplementaryActorInfo"]],[[[1,"              "],[10,0],[14,0,"artdeco-entity-lockup__badge ml1"],[12],[1,"\\n                "],[10,1],[14,0,"artdeco-entity-lockup__degree feed-mini-update-actor__supplementary-actor-info"],[12],[1,"\\n                  "],[8,[32,4],null,[["@tvm"],[[30,1,["supplementaryActorInfo"]]]],null],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n"],[41,[30,1,["description"]],[[[1,"            "],[8,[30,3,["subtitle"]],[[24,0,"feed-mini-update-actor__description"]],null,[["default"],[[[[1,"\\n              "],[8,[32,4],null,[["@tvm"],[[30,1,["description"]]]],null],[1,"\\n            "]],[]]]]],[1,"\\n"]],[]],null],[1,"        "]],[]]]]],[1,"\\n      "]],[3]]]]],[1,"\\n    "]],[]]]]],[1,"\\n  "]],["@actor","@trackingId","elements"],false,["if"]]',moduleName:"mini-update/components/actor.gjs",scope:()=>[l.default,s.default,c.default,d.default,u.default],isStrictMode:!0}),(p=class extends a.default{handleActorClick(){const e=(0,o.get)(this.args.actor,"navigationContext.trackingActionType")
e&&this.args.actionTrackingHandler({actionType:e,actionCategory:"VIEW",controlName:"actor"})}},(0,t.default)(p.prototype,"handleActorClick",[o.action],Object.getOwnPropertyDescriptor(p.prototype,"handleActorClick"),p.prototype),p))}))
define("mini-update/components/commentary",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","@ember/utils","@ember/service","@ember/object","@glimmer/component","mini-update/components/helper-component/optional-navigation-context-wrapper","ember-cli-pemberly-i18n/helpers/t","@ember/helper","ember-cli-pemberly-tracking/modifiers/track-interaction","hue-web-icons/components/icon","image-view-model/components/image-view-model","text-view-model/components/text-view-model-v2","inline-show-more-text/components/inline-show-more-text","global-helpers/helpers/or"],(function(e,t,n,i,r,o,a,l,s,c,d,u,p,m,g,f,h,b,y,v){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var k,x,C
e.default=(0,a.setComponentTemplate)((0,o.createTemplateFactory)({id:"qhvH4nLH",block:'[[[1,"\\n"],[1,"    "],[10,0],[14,0,"display-flex flex-row"],[12],[1,"\\n"],[41,[30,1,["image"]],[[[1,"        "],[8,[32,0],[[24,0,"pl4 pv2 pr1"],[4,[32,3],[[52,[30,1,["video"]],"update_video_image","update_image"]],[["controlTrackingId"],[[30,4]]]]],[["@ariaLabelAddition","@navigationContext","@onClick","@disableFocusableNestedLink","@overrideInteractiveControls"],[[28,[32,1],["image","mini-update/components/commentary"],null],[30,1,["navigationContext"]],[28,[32,2],[[30,0,["handleClick"]],[52,[30,1,["video"]],"update_video_image","update_image"]],null],[30,2],[30,3]]],[["default"],[[[[1,"\\n          "],[10,0],[14,0,"relative"],[12],[1,"\\n"],[41,[30,1,["video"]],[[[1,"              "],[10,1],[14,0,"feed-mini-update-commentary__video-icon"],[12],[1,"\\n                "],[8,[32,4],[[24,0,"feed-mini-update-commentary__video-icon-svg"]],[["@type","@size","@name"],["system","small","play"]],null],[1,"\\n              "],[13],[1,"\\n"]],[]],null],[1,"            "],[8,[32,5],null,[["@images","@imgClasses","@imgWidth"],[[30,1,["image"]],"feed-mini-update-commentary__image",64]],null],[1,"\\n          "],[13],[1,"\\n        "]],[]]]]],[1,"\\n"]],[]],null],[41,[28,[32,6],[[30,1,["commentaryTextContext","text"]],[30,1,["commentaryText","text"]]],null],[[[1,"        "],[8,[32,0],[[16,0,[29,["pr4 pb2 flex-1\\n            ",[52,[30,1,["image"]],"pl2","pl4"],"\\n            ",[52,[30,0,["needsTopPadding"]],"pt2"]]]],[4,[32,3],["commentary_text"],[["controlTrackingId"],[[30,4]]]]],[["@ariaLabelAddition","@navigationContext","@onClick","@disableFocusableNestedLink","@overrideInteractiveControls"],[[30,0,["ariaLabelAddition"]],[30,1,["navigationContext"]],[28,[32,2],[[30,0,["handleClick"]],"commentary_text"],null],[30,2],[30,3]]],[["default"],[[[[1,"\\n"],[41,[30,1,["commentaryTextContext"]],[[[1,"            "],[10,1],[14,0,"t-12 t-bold t-black--light block"],[12],[1,"\\n              "],[8,[32,7],null,[["@tvm"],[[30,1,["commentaryTextContext"]]]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"          "],[8,[32,8],[[24,0,"m0 break-words t-14 t-black"]],[["@tvm","@lines","@seeMoreText","@seeMoreA11yText","@seeMoreBtnRole","@lightButtonText","@showManualEllipsis","@isDummyButton","@onExpand","@isUserGenerated"],[[30,1,["commentaryText"]],[30,0,["numLines"]],[28,[32,1],["show_more","mini-update/components/commentary"],null],[28,[32,1],["i18n_see_more_a11y_text","mini-update/components/commentary"],null],"link",true,false,true,[30,0,["handleShowMoreTextClick"]],true]],null],[1,"\\n        "]],[]]]]],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["@model","@disableFocusableNestedLink","@overrideInteractiveControls","@trackingId"],false,["if"]]',moduleName:"mini-update/components/commentary.gjs",scope:()=>[u.default,p.default,m.fn,g.default,f.default,h.default,v.default,b.default,y.default],isStrictMode:!0}),(k=(0,s.inject)("tracking"),x=class extends d.default{constructor(){super(...arguments);(0,t.default)(this,"tracking",C,this)}get ariaLabelAddition(){return(0,c.get)(this.args.model,"commentaryText.text")||(0,c.get)(this.args.model,"commentaryTextContext.text")}get needsTopPadding(){const e=(0,l.isPresent)((0,c.get)(this.args.model,"image")),t=(0,l.isPresent)((0,c.get)(this.args.model,"commentaryText.text"))
return e||t}get numLines(){return this.args.nextToContent||(0,l.isPresent)((0,c.get)(this.args.model,"commentaryTextContext"))?2:3}handleClick(e){const t=(0,c.get)(this.args.model,"navigationContext.trackingActionType")
t&&this.args.actionTrackingHandler({actionType:t,actionCategory:"VIEW",controlName:e})}handleShowMoreTextClick(){this.tracking.fireInteractionEvent("feed_expand","SHORT_PRESS",this.args.trackingId)}},C=(0,i.default)(x.prototype,"tracking",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(x.prototype,"handleClick",[c.action],Object.getOwnPropertyDescriptor(x.prototype,"handleClick"),x.prototype),(0,i.default)(x.prototype,"handleShowMoreTextClick",[c.action],Object.getOwnPropertyDescriptor(x.prototype,"handleShowMoreTextClick"),x.prototype),x))}))
define("mini-update/components/content",["exports","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@ember/template-factory","@ember/component","@ember/object","@glimmer/component","mini-update/components/helper-component/optional-navigation-context-wrapper","ember-cli-pemberly-i18n/helpers/t","@ember/helper","ember-cli-pemberly-tracking/modifiers/track-interaction","hue-web-icons/components/icon","image-view-model/components/image-view-model","text-view-model/components/text-view-model-v2"],(function(e,t,n,i,r,o,a,l,s,c,d,u,p){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var m
e.default=(0,i.setComponentTemplate)((0,n.createTemplateFactory)({id:"MQVR86xH",block:'[[[1,"\\n"],[1,"    "],[10,0],[15,0,[29,["feed-mini-update-content__card-wrapper\\n        ",[52,[30,1,["shouldIndent"]],"feed-mini-update-content--indented"]]]],[12],[1,"\\n"],[41,[30,1,["image"]],[[[1,"        "],[8,[32,0],[[24,0,"pr3"],[4,[32,3],["update_content_image"],[["controlTrackingId"],[[30,4]]]]],[["@ariaLabelAddition","@navigationContext","@onClick","@disableFocusableNestedLink","@overrideInteractiveControls"],[[28,[32,1],["image","mini-update/components/content"],null],[30,1,["navigationContext"]],[28,[32,2],[[30,0,["handleClick"]],"update_content_image"],null],[30,2],[30,3]]],[["default"],[[[[1,"\\n          "],[10,0],[14,0,"relative"],[12],[1,"\\n"],[41,[30,1,["video"]],[[[1,"              "],[10,1],[14,0,"feed-mini-update-content__video-icon"],[12],[1,"\\n                "],[8,[32,4],[[24,0,"feed-mini-update-content__video-icon-svg"]],[["@type","@size","@name"],["system","small","play"]],null],[1,"\\n              "],[13],[1,"\\n"]],[]],null],[1,"            "],[8,[32,5],null,[["@imgWidth","@images","@imgClasses","@isPresenceEnabled"],[64,[30,1,["image"]],"feed-mini-update-content__image",true]],null],[1,"\\n          "],[13],[1,"\\n        "]],[]]]]],[1,"\\n"]],[]],null],[41,[30,0,["shouldRenderAdditionalWrapper"]],[[[1,"        "],[8,[32,0],[[24,0,"display-flex flex-1 flex-column overflow-hidden"],[4,[32,3],["update_content_text"],[["controlTrackingId"],[[30,4]]]]],[["@ariaLabelAddition","@navigationContext","@onClick","@disableFocusableNestedLink","@overrideInteractiveControls"],[[30,0,["ariaLabelAddition"]],[30,1,["navigationContext"]],[28,[32,2],[[30,0,["handleClick"]],"update_content_text"],null],[30,2],[30,3]]],[["default"],[[[[1,"\\n"],[41,[30,1,["context"]],[[[1,"            "],[10,0],[14,0,"display-flex pb1 t-12 t-bold t-black--light"],[12],[1,"\\n              "],[10,1],[14,0,"feed-mini-update-content__single-line-text"],[12],[1,"\\n                "],[8,[32,6],null,[["@tvm"],[[30,1,["context"]]]],null],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[30,1,["title"]],[[[1,"            "],[10,0],[15,0,[29,["display-flex t-14 t-black t-bold\\n                ",[52,[51,[30,1,["context"]]],"pb1"]]]],[12],[1,"\\n              "],[10,1],[14,0,"feed-mini-update-content__single-line-text"],[12],[1,"\\n                "],[8,[32,6],null,[["@tvm"],[[30,1,["title"]]]],null],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[30,1,["subtitle"]],[[[1,"            "],[10,0],[14,0,"display-flex t-12 t-black--light"],[12],[1,"\\n              "],[10,1],[14,0,"feed-mini-update-content__single-line-text"],[12],[1,"\\n                "],[8,[32,6],null,[["@tvm"],[[30,1,["subtitle"]]]],null],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[30,1,["description"]],[[[1,"            "],[10,0],[14,0,"display-flex t-12 t-black--light"],[12],[1,"\\n              "],[10,1],[14,0,"feed-mini-update-content__single-line-text"],[12],[1,"\\n                "],[8,[32,6],null,[["@tvm"],[[30,1,["description"]]]],null],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"        "]],[]]]]],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["@model","@disableFocusableNestedLink","@overrideInteractiveControls","@trackingId"],false,["if","unless"]]',moduleName:"mini-update/components/content.gjs",scope:()=>[a.default,l.default,s.fn,c.default,d.default,u.default,p.default],isStrictMode:!0}),(m=class extends o.default{get ariaLabelAddition(){return(0,r.get)(this.args.model,"title.text")}get shouldRenderAdditionalWrapper(){var e,t,n,i,r,o,a,l
return(null===(e=this.args.model)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.text)??(null===(n=this.args.model)||void 0===n||null===(i=n.context)||void 0===i?void 0:i.text)??(null===(r=this.args.model)||void 0===r||null===(o=r.subtitle)||void 0===o?void 0:o.text)??(null===(a=this.args.model)||void 0===a||null===(l=a.description)||void 0===l?void 0:l.text)}handleClick(e){const t=(0,r.get)(this.args.model,"navigationContext.trackingActionType")
t&&this.args.actionTrackingHandler({actionType:t,actionCategory:"VIEW",controlName:e})}},(0,t.default)(m.prototype,"handleClick",[r.action],Object.getOwnPropertyDescriptor(m.prototype,"handleClick"),m.prototype),m))}))
define("mini-update/components/contextual-description",["exports","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@ember/template-factory","@ember/helper","@ember/component","@ember/object","@glimmer/component","mini-update/components/helper-component/optional-navigation-context-wrapper","ember-cli-pemberly-tracking/modifiers/track-interaction","text-view-model/components/text-view-model-v2"],(function(e,t,n,i,r,o,a,l,s,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var d
e.default=(0,r.setComponentTemplate)((0,n.createTemplateFactory)({id:"QF/H9yFJ",block:'[[[1,"\\n    "],[8,[32,0],[[17,1],[4,[32,1],["commentary_text"],[["controlTrackingId"],[[30,4]]]]],[["@ariaLabelAddition","@navigationContext","@onClick","@disableFocusableNestedLink"],[[30,0,["ariaLabelAddition"]],[30,2,["navigationContext"]],[30,0,["handleContextualDescriptionClick"]],[30,3]]],[["default"],[[[[1,"\\n      "],[10,0],[14,0,"pt1 ph4 t-12 t-black--light"],[12],[1,"\\n        "],[10,1],[14,0,"feed-mini-update-contextual-description__text"],[12],[1,"\\n          "],[8,[32,2],null,[["@tvm"],[[30,2,["text"]]]],null],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "]],[]]]]],[1,"\\n  "]],["&attrs","@contextualDescription","@disableFocusableNestedLink","@trackingId"],false,[]]',moduleName:"mini-update/components/contextual-description.gjs",scope:()=>[l.default,s.default,c.default],isStrictMode:!0}),(d=class extends a.default{get ariaLabelAddition(){return(0,o.get)(this.args.contextualDescription,"text.text")}handleContextualDescriptionClick(){const e=(0,o.get)(this.args.contextualDescription,"navigationContext.trackingActionType")
e&&this.args.actionTrackingHandler({actionType:e,actionCategory:"VIEW",controlName:"commentary_text"})}},(0,t.default)(d.prototype,"handleContextualDescriptionClick",[o.action],Object.getOwnPropertyDescriptor(d.prototype,"handleContextualDescriptionClick"),d.prototype),d))}))
define("mini-update/components/helper-component/optional-navigation-context-wrapper",["exports","@ember/template-factory","@ember/helper","@ember/component","@ember/object","@glimmer/component","app-aware-link/components/navigation-context-link","@ember/modifier"],(function(e,t,n,i,r,o,a,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
class s extends o.default{get ariaLabel(){let e=(0,r.get)(this.args.navigationContext,"accessibilityText")
this.args.disableFocusableNestedLink?e=this.args.ariaLabelAddition:this.args.ariaLabelAddition&&(e=`${e}. ${this.args.ariaLabelAddition}`)
return e}}e.default=s;(0,i.setComponentTemplate)((0,t.createTemplateFactory)({id:"4N7Ul7OW",block:'[[[1,"\\n"],[41,[30,1],[[[1,"      "],[8,[32,0],[[17,2],[16,"aria-label",[30,0,["ariaLabel"]]],[24,0,"feed-mini-update-optional-navigation-context-wrapper"],[16,"tabindex",[52,[30,3],"-1","0"]]],[["@href","@invokeAction"],[[30,1,["target"]],[30,4]]],[["default"],[[[[1,"\\n        "],[18,6,null],[1,"\\n      "]],[]]]]],[1,"\\n"]],[]],[[[41,[30,5],[[[1,"      "],[11,0],[24,0,"feed-mini-update-optional-navigation-context-wrapper"],[17,2],[12],[1,"\\n        "],[18,6,null],[1,"\\n      "],[13],[1,"\\n"]],[]],[[[1,"      "],[11,3],[24,0,"feed-mini-update-optional-navigation-context-wrapper"],[24,6,"#"],[16,"tabindex",[52,[30,3],"-1","0"]],[17,2],[4,[32,1],["click",[30,4]],null],[12],[1,"\\n        "],[18,6,null],[1,"\\n      "],[13],[1,"\\n    "]],[]]]],[]]],[1,"  "]],["@navigationContext","&attrs","@disableFocusableNestedLink","@onClick","@overrideInteractiveControls","&default"],false,["if","yield"]]',moduleName:"mini-update/components/helper-component/optional-navigation-context-wrapper.gjs",scope:()=>[a.default,l.on],isStrictMode:!0}),s)}))
define("mini-update/components/interstitial-container",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/helper","@ember/component","@ember/service","@ember/object","@glimmer/component","ember-cli-pemberly-tracking/modifiers/track-impression","interstitial-view-model/components/click-through-interstitial","interstitial-view-model/components/non-click-through-interstitial"],(function(e,t,n,i,r,o,a,l,s,c,d,u,p,m){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var g,f,h
e.default=(0,l.setComponentTemplate)((0,o.createTemplateFactory)({id:"VG9dqS98",block:'[[[1,"\\n    "],[11,0],[24,0,"feed-mini-update-interstitial-container"],[17,1],[4,[32,0],null,[["registerOnImpression","routeName","currentRoute"],[[30,0,["handleImpressionTracking"]],[28,[32,1],[[53,"outletState"],"render.name"],null],[28,[32,1],[[53,"outletState"],"render"],null]]]],[12],[1,"\\n"],[41,[30,0,["isClickThroughInterstitial"]],[[[1,"        "],[8,[32,2],[[16,0,[29,[[52,[30,0,["isSmallInterstitial"]],"feed-mini-update-click-through-interstitial-container--small","feed-mini-update-click-through-interstitial-container"]]]]],[["@clickThroughAction","@explanatoryLinkControlName","@model","@showClickThroughOverlay","@isSmallInterstitial","@hideClickThroughButton","@showInlineExplanatoryLink","@styleConfig","@useDash"],[[30,0,["clickThroughAction"]],"trust_sign_post_learn_more",[30,0,["model"]],[30,0,["shouldShowInterstitial"]],true,[30,0,["hideInterstitialClickThroughButton"]],[30,0,["isSmallInterstitial"]],[30,0,["styleConfig"]],true]],[["default"],[[[[1,"\\n          "],[18,2,null],[1,"\\n        "]],[]]]]],[1,"\\n"]],[]],[[[1,"        "],[8,[32,3],null,[["@model","@useDash","@styleConfig","@hideExplanatoryLink"],[[30,0,["model"]],true,[30,0,["styleConfig"]],true]],null],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n  "]],["&attrs","&default"],false,["-get-dynamic-var","if","yield"]]',moduleName:"mini-update/components/interstitial-container.gjs",scope:()=>[u.default,a.get,p.default,m.default],isStrictMode:!0}),(g=(0,s.inject)("tracking"),f=class extends d.default{constructor(){super(...arguments);(0,t.default)(this,"tracking",h,this)}get isClickThroughInterstitial(){return(0,c.get)(this.model,"shouldBlurContent")}get isSmallInterstitial(){return"SMALL"===this.args.templateType}get hideInterstitialClickThroughButton(){return!(0,c.get)(this.model,"clickThroughActionText")}get model(){return this.args.interstitialViewModel}get shouldShowInterstitial(){return(0,c.get)(this.model,"shouldShowInterstitial")}get styleConfig(){return this.isClickThroughInterstitial&&this.isSmallInterstitial?{icon:"feed-mini-update-click-through-interstitial-container--small-icon",innerContent:"feed-mini-update-click-through-interstitial-container--small-content",explanatoryText:"feed-mini-update-click-through-interstitial-container--small-explanatory-text",ctaSize:"1"}:this.isClickThroughInterstitial?{icon:"feed-mini-update-click-through-interstitial-container--icon",innerContent:"feed-mini-update-click-through-interstitial-container--content"}:this.isClickThroughInterstitial?{}:{explanatoryText:"text-body-small text-align-left ml3",innerContent:"feed-mini-update-non-click-through-interstitial-container--inner-content"}}get trackingId(){return(0,c.get)(this.model,"trackingId")}get trackingControlUrn(){const e=this.isClickThroughInterstitial?"click_through_interstitial":"non_click_through_interstitial"
return this.tracking.generateControlUrn(e)}get shouldFireImpressionEvent(){return this.shouldShowInterstitial}clickThroughAction(){(0,c.set)(this.model,"shouldShowInterstitial",!1)
this.args.actionTrackingHandler({actionType:"interstitialLearnMore",actionCategory:"VIEW",controlName:"trust_sign_post_learn_more",accessoryTrackingId:this.trackingId})}handleImpressionTracking(){var e
const t=null===(e=this.args.updateTrackingObj)||void 0===e?void 0:e.generateFeedAccessoryImpressionEventBody([{accessoryEntityUrn:this.args.backendUrn,accessoryTrackingId:this.trackingId,controlUrn:this.trackingControlUrn}],this.trackingId)
return()=>t&&this.shouldFireImpressionEvent?{name:"FeedAccessoryImpressionEvent",body:t}:[]}},h=(0,i.default)(f.prototype,"tracking",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(f.prototype,"clickThroughAction",[c.action],Object.getOwnPropertyDescriptor(f.prototype,"clickThroughAction"),f.prototype),(0,i.default)(f.prototype,"handleImpressionTracking",[c.action],Object.getOwnPropertyDescriptor(f.prototype,"handleImpressionTracking"),f.prototype),f))}))
define("mini-update/components/mini-update-base",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/helper","@ember/component","@ember/utils","global-utils/utils/tracking-id","feed-tracking/utils/update-tracking-obj","@ember/service","@ember/object","@glimmer/component","mini-update/components/interstitial-container","ember-element-helper/helpers/element","ember-cli-pemberly-tracking/modifiers/track-impression","mini-update/components/actor","mini-update/components/contextual-description","mini-update/components/commentary","mini-update/components/content","feed-tracking/utils/tracking"],(function(e,t,n,i,r,o,a,l,s,c,d,u,p,m,g,f,h,b,y,v,k,x){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var C,T,I,_,w,E,A,S,P,N,D
e.default=(0,l.setComponentTemplate)((0,o.createTemplateFactory)({id:"5vNzx951",block:'[[[1,"\\n"],[44,[[52,[30,0,["hasInterstitial"]],[50,[32,0],0,null,[["interstitialViewModel","templateType","backendUrn","actionTrackingHandler","updateTrackingObj"],[[30,1,["interstitial","interstitial"]],[30,1,["interstitial","templateType"]],[30,1,["metadata","backendUrn"]],[30,0,["actionTrackingHandler"]],[30,0,["updateTrackingObj"]]]]],[28,[32,1],[""],null]]],[[[1,"      "],[11,0],[17,3],[16,0,[29,["display-flex flex-column\\n          ",[52,[30,0,["isContentComponentLast"]],"pb4"],[52,[30,0,["isCommentaryComponentLast"]],"pb2"]]]],[4,[32,2],null,[["registerOnImpression","thresholdMillisecondsInViewport","thresholdPercentageInViewport","routeName","currentRoute"],[[30,0,["onTrackImpression"]],0,50,[28,[32,3],[[53,"outletState"],"render.name"],null],[28,[32,3],[[53,"outletState"],"render"],null]]]],[12],[1,"\\n"],[41,[30,0,["showActor"]],[[[1,"          "],[8,[32,4],null,[["@actor","@actionTrackingHandler","@trackingId"],[[30,1,["actor"]],[30,0,["actionTrackingHandler"]],[30,0,["trackingId"]]]],null],[1,"\\n"]],[]],null],[41,[30,0,["showContextualDescription"]],[[[1,"          "],[8,[32,5],null,[["@contextualDescription","@actionTrackingHandler","@trackingId"],[[30,1,["contextualDescription"]],[30,0,["actionTrackingHandler"]],[30,0,["trackingId"]]]],null],[1,"\\n"]],[]],null],[1,"        "],[8,[30,2],null,null,[["default"],[[[[1,"\\n"],[41,[30,0,["showCommentary"]],[[[1,"            "],[8,[32,6],null,[["@model","@nextToContent","@actionTrackingHandler","@trackingId","@overrideInteractiveControls"],[[30,1,["commentary"]],[30,0,["hasContentComponent"]],[30,0,["actionTrackingHandler"]],[30,0,["trackingId"]],[30,4]]],null],[1,"\\n"]],[]],null],[41,[30,0,["showContent"]],[[[1,"            "],[8,[32,7],null,[["@model","@actionTrackingHandler","@trackingId","@overrideInteractiveControls"],[[30,1,["content"]],[30,0,["actionTrackingHandler"]],[30,0,["trackingId"]],[30,4]]],null],[1,"\\n"]],[]],null],[1,"        "]],[]]]]],[1,"\\n      "],[13],[1,"\\n"]],[2]]],[1,"  "]],["@miniUpdate","MaybeInterstitialWrapper","&attrs","@overrideInteractiveControls"],false,["let","if","component","-get-dynamic-var"]]',moduleName:"mini-update/components/mini-update-base.gjs",scope:()=>[g.default,f.default,h.default,a.get,b.default,y.default,v.default,k.default],isStrictMode:!0}),(C=(0,u.inject)("feed-tracking@feed-action-event"),T=(0,u.inject)("feed-tracking@sponsored-action-tracking"),I=(0,u.inject)("tracking"),_=(0,u.inject)("@linkedin/ember-restli-graphql@graphql"),w=(0,u.inject)("lix"),E=class extends m.default{constructor(){super(...arguments);(0,t.default)(this,"feedActionEvent",A,this);(0,t.default)(this,"sponsoredActionTracking",S,this);(0,t.default)(this,"tracking",P,this);(0,t.default)(this,"graphql",N,this);(0,t.default)(this,"lix",D,this)}get trackingId(){return(0,c.getByteStringAsBase64)((0,p.get)(this.args.miniUpdate,"metadata.trackingId"))}get hasInterstitial(){return(0,s.isPresent)((0,p.get)(this.args.miniUpdate,"interstitial"))}get showActor(){return!this.args.hideActor&&(0,p.get)(this.args.miniUpdate,"actor")}get showContextualDescription(){return!this.args.hideContextualDescription&&(0,p.get)(this.args.miniUpdate,"contextualDescription")}get showCommentary(){return!this.args.hideCommentary&&(0,p.get)(this.args.miniUpdate,"commentary")}get showContent(){return!this.args.hideContent&&(0,p.get)(this.args.miniUpdate,"content")}get showSocialActivityCounts(){const e=(0,p.get)(this.args.miniUpdate,"socialActivityCounts")
if(this.args.hideSocialActivityCounts||!(0,s.isPresent)(e))return!1
const t=(0,p.get)(e,"numComments")>0,n=(0,p.get)(e,"numShares")>0,i=(0,p.get)(e,"reactionTypeCounts.length")>0
return t||n||i}get hasContentComponent(){return!!(0,p.get)(this.args.miniUpdate,"content")}get isCommentaryComponentLast(){return!this.showSocialActivityCounts&&!this.showContent}get isContentComponentLast(){return!this.showSocialActivityCounts&&this.showContent}get updateTrackingObj(){return new d.default({urn:(0,p.get)(this.args.miniUpdate,"metadata.backendUrn"),trackingData:{trackingId:this.trackingId}},this.feedActionEvent,this.sponsoredActionTracking,this.tracking)}get areSocialCountsClickable(){return this.args.areSocialCountsClickable??!0}actionTrackingHandler(e){const t={}
this.args.customModuleKey&&(t.moduleKey=this.args.customModuleKey)
this.updateTrackingObj.fireFeedActionEvent(e,t)}onTrackImpression(){const{miniUpdate:e,listPositionIndex:t}=this.args,{metadata:n}=e
if(!t)return()=>[]
const i=(0,x.constructImpressionEvent)({update:e,updateMetadata:n,updatePosition:t})
return e=>(0,x.onTrackImpressionCallback)({body:i,event:e,graphql:this.graphql,lix:this.lix})}},A=(0,i.default)(E.prototype,"feedActionEvent",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,i.default)(E.prototype,"sponsoredActionTracking",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=(0,i.default)(E.prototype,"tracking",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,i.default)(E.prototype,"graphql",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,i.default)(E.prototype,"lix",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(E.prototype,"actionTrackingHandler",[p.action],Object.getOwnPropertyDescriptor(E.prototype,"actionTrackingHandler"),E.prototype),(0,i.default)(E.prototype,"onTrackImpression",[p.action],Object.getOwnPropertyDescriptor(E.prototype,"onTrackImpression"),E.prototype),E))}))
define("mini-update/template-registry",[],(function(){}))
!function(e){t=this,n=function(e){"use strict"
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0
try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){n.push(a.value)
if(t&&n.length===t)break}}catch(e){r=!0
o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n]
return i}var o=new RegExp("urn:[^:]+:([a-z]\\w*)(?::(.+))?"),a=/^fs_/
function l(e){if("string"!=typeof e)throw new TypeError("URNs must be of type string, but the parameter passed to extractEntityInfoFromUrn was of type "+typeof e+".")
var t,n,i=o.exec(e)
if(i){t=i[1].replace(a,"")
n=i[2]}return{id:n,type:t}}var s,c,d=/(?![^(]*\)),/,u={checkForEntityId:function(e){var t=o.exec(e)
return t?t[2]:e},extractEntityInfoFromUrn:l,urnToObject:function e(t){var n=l(t),i=n.id,r=n.type,o={}
if("("===i.charAt(0)){for(var a,s=i.substring(1,i.length-1).split(d),c=0;a=s[c];++c)0===a.indexOf("urn")&&(s[c]=e(a))
i=s}o[r]=i
return o}},p=function(e,t){var n=t.match(new RegExp("(?:^|; *)".concat(e,"=([^;]*)")))
return n&&n.length>1?n[1]:null}
function m(e){return"undefined"==typeof atob&&"undefined"!=typeof Buffer?Buffer.from(e,"base64").toString("binary"):atob(e)}var g,f,h,b,y,v,k={ADVERTISING:"ADVERTISING",ANALYTICS_AND_RESEARCH:"ANALYTICS_AND_RESEARCH",FUNCTIONAL:"FUNCTIONAL"},x={GUEST:"GUEST",MEMBER:"MEMBER",ENTERPRISE_UNBOUND:"ENTERPRISE_UNBOUND"},C=0,T=1,I=2,_=(n(s={},x.GUEST,"li_gc"),n(s,x.MEMBER,"li_mc"),n(s,x.ENTERPRISE_UNBOUND,"li_ec"),s),w=(n(c={},x.GUEST,"mypreferences/g/guest-cookies"),n(c,x.MEMBER,"settings/member-cookies"),n(c,x.ENTERPRISE_UNBOUND,"mypreferences/e/enterprise-cookies"),c),E=Object.freeze(["dark","light"]),A=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
t(this,e)
n=n||{}
this.consentAvailable=!1
this.issuedAt=i
this.userMode=r
this.optedInConsentMap={}
for(var a in k){n[a]=n[a]||C
n[a]!==C&&(this.consentAvailable=!0)
this.optedInConsentMap[a]=n[a]===T||n[a]===C&&o===T}},S=(g=[k.ADVERTISING,k.ANALYTICS_AND_RESEARCH,k.FUNCTIONAL],f=[C,T,I,C],h=function(e){for(var t={},n=0;n<g.length;n++)t[g[n]]=f[e>>2*n&3]
return t},b=function(e){var t=C
e>=0&&e<=3&&(t=f[e])
return t},{parseConsentBody:function(e,t){var n=new RegExp(["^(\\d+)","(\\d+)","(\\d+)","((?:.|\\s)+)"].join(";")),i=e.match(n)
if(!i)return{error:"Invalid consent body encoding",consent:new A}
var r=h(parseInt(i[1],10)),o=new Date(1e3*parseInt(i[2],10)),a=b(parseInt(i[3],10))
return{error:null,consent:new A(r,o,t,a)}},parseConsentBodyEnterpriseUnbound:function(e,t,n){var r=function(e){try{var t=u.urnToObject(e)
if(t&&t.enterpriseProfile&&t.enterpriseProfile.length>=2&&t.enterpriseProfile[0].enterpriseAccount)return{enterpriseAccountId:parseInt(t.enterpriseProfile[0].enterpriseAccount,10),enterpriseProfileId:parseInt(t.enterpriseProfile[1],10)}}catch(e){return null}return null}(t)
if(!r)return{error:"Invalid enterprise profile urn provided",consent:new A}
var o=r.enterpriseAccountId,a=r.enterpriseProfileId,l=new RegExp(["^((?:\\d+,\\d+,\\d+,\\d+,\\d+)(?:\\|(?:\\d+,\\d+,\\d+,\\d+,\\d+))*)","(\\d+)","(\\d+)","(?:(?:.|\\s)+)$"].join(";")),s=e.match(l)
if(!s)return{error:"Invalid consent body encoding",consent:new A}
var c=s[1].split("|").map((function(e){return e.split(",").map((function(e){return parseInt(e,10)}))})).filter((function(e){var t=i(e,4),r=t[1],l=t[2],s=t[3]
return r===o&&l===a&&s===n}))[0]
if(!c)return{error:null,consent:new A}
var d=h(c[0]),p=new Date(1e3*parseInt(s[2],10)),m=b(parseInt(s[3],10))
return{error:null,consent:new A(d,p,x.ENTERPRISE_UNBOUND,m)}}}),P=new RegExp(["^(\\d+)","((?:.|\\s)+)"].join(";")),N=function(e){var t={}
for(var n in k)t[n]=e
return{error:null,consent:new A(t,null,null,e)}},D=function(){var e=document.domain.match(/^(?:|.*\.)([^\.]+\.[^\.]+)$/)
return e?e[1]:"linkedin-ei.com"},R=function(e,t,n){var i=w[e],r=t.enterpriseProfileHash,o=t.enterpriseAppInstanceId,a=new URLSearchParams
if(e===x.ENTERPRISE_UNBOUND){r&&a.append("p",r)
o&&a.append("iid",o)}if("string"==typeof n){n=n.toLowerCase()
E.includes(n)&&a.append("li_theme",n)}var l=Array.from(a).length?"?"+a.toString():""
return"https://www.".concat(D(),"/").concat(i).concat(l)},O=function(e,t,n,i){e&&e.length>1&&'"'==e.charAt(0)&&'"'==e.charAt(e.length-1)&&(e=e.substring(1,e.length-1))
var r=null
try{r=m(e).match(P)}catch(e){}if(!r)return{error:"Invalid consent encoding",consent:new A}
var o=parseInt(r[1],10),a=r[2]
return 1===o?t===x.ENTERPRISE_UNBOUND?S.parseConsentBodyEnterpriseUnbound(a,n,i):S.parseConsentBody(a,t):{error:"Invalid encoded consent version ".concat(o),consent:new A}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.enterpriseProfileUrn,r=n.enterpriseAppInstanceId
if("string"!=typeof t){if("undefined"==typeof document)return{error:"cookie string must be provided in SSR mode",consent:new A}
t=document.cookie}if(i&&!r||!i&&r)return{error:"enterpriseProfileUrn and enterpriseAppInstanceId must both be provided if at least one is provided",consent:new A}
if(!(e!==x.ENTERPRISE_UNBOUND||i&&r))return{error:"enterpriseProfileUrn and enterpriseAppInstanceId are required for unbound userMode",consent:new A}
if(!e){var o=p(_[x.ENTERPRISE_UNBOUND],t)
if(o&&i&&r){var a=O(o,x.ENTERPRISE_UNBOUND,i,r)
if(a.consent.userMode===x.ENTERPRISE_UNBOUND||a.error)return a}e=p("liap",t)?p(_[x.MEMBER],t)?x.MEMBER:x.GUEST:p(_[x.GUEST],t)?x.GUEST:x.MEMBER}return function(e,t,n,i){var r=p(_[e],t)
return r?O(r,e,n,i):p(_[x.GUEST],t)||p(_[x.MEMBER],t)||p(_[x.ENTERPRISE_UNBOUND],t)?N(I):N(T)}(e,t,i,r)},M={SHARE_DATA_WITH_TRUSTED_PARTNERS:"SHARE_DATA_WITH_TRUSTED_PARTNERS"},j=0,L=1,H=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.guestPreferencesData,r=void 0===i?null:i,o=n.issuedAt,a=void 0===o?null:o,l=n.defaultConsent,s=void 0===l?j:l
t(this,e)
r=r||{}
this.issuedAt=a
this.guestPreferencesMap={}
for(var c in M){"number"!=typeof r[c]&&(r[c]=s)
this.guestPreferencesMap[c]=r[c]===L}},B=(y=[M.SHARE_DATA_WITH_TRUSTED_PARTNERS],v=[j,L],{parseGuestPreferencesBody:function(e){var t=new RegExp(["^(\\d+)","(\\d+)"].join(";")),n=e.match(t)
if(!n)return{error:"Invalid guest preferences body encoding",guestPreferences:new H}
var i=n[1],r=function(e){for(var t={},n=0;n<y.length;n++){var i=y[n],r=e[n]
if(void 0===v[r])return
t[i]=v[r]}return t}(n[2])
if(!r)return{error:"Invalid guest preferences consent provided",guestPreferences:new H}
var o=new Date(1e3*i)
return{error:null,guestPreferences:new H({guestPreferencesData:r,issuedAt:o})}}}),F=new RegExp(["^(\\d+)","((?:.|\\d)+)"].join(";"))
e.GUEST_PREFERENCES=M
e.NON_ESSENTIAL_CATEGORIES=k
e.SETTINGS_COLOR_SCHEME=E
e.USER_MODE=x
e.getBannerData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=U(e,document.cookie,t),r=i.consent,o=e||r.userMode||x.GUEST
return{showBanner:!i.error&&!r.consentAvailable,userMode:o,managePreferenceUrl:R(o,t,n)}}
e.getCookieConsent=U
e.getPreferenceStatuses=function(e){"string"!=typeof e&&(e=document.cookie)
var t=p("li_gp",e)
return t?function(e){e&&e.length>1&&'"'==e.charAt(0)&&'"'==e.charAt(e.length-1)&&(e=e.substring(1,e.length-1))
var t=null
try{t=m(e).match(F)}catch(e){}if(!t)return{error:"Invalid guest preferences encoding",guestPreferences:new H}
var n=parseInt(t[1],10),i=t[2]
return 1===n?B.parseGuestPreferencesBody(i):{error:"Invalid encoded guest preferences version ".concat(n),guestPreferences:new H}}(t):{error:null,guestPreferences:new H({defaultConsent:L})}}
e.parseEncodedConsent=O
e.updateCookieConsent=function(e,t){var n=e.optedInConsentMap,i=e.updateSettings,r=e.userMode,o=e.xLiTrackPayload,a=e.enterpriseContext||{},l=a.enterpriseProfileHash,s=a.enterpriseAppInstanceId
t=t||function(e,t){}
var c=p(_[x.ENTERPRISE_UNBOUND],document.cookie)
n||t("optedInConsentMap is a required option",null)
var d=new XMLHttpRequest,u=new URLSearchParams
c&&s&&u.append("appInstanceId",s)
var m=Array.from(u).length?"?"+u.toString():""
d.open("POST","https://www.".concat(D(),"/cookie-consent/").concat(m))
d.setRequestHeader("Content-Type","application/json")
o&&d.setRequestHeader("X-LI-Track",o)
c&&l&&d.setRequestHeader("x-li-identity",l)
d.withCredentials=!0
d.onload=function(){200!==d.status?t("Request failed with status ".concat(d.status),null):t(null,d)}
d.onerror=function(){t("Request failed with an error",d)}
var g={UPDATE_SETTINGS:i,USER_MODE:r,CATEGORIES:{}}
for(var f in k){var h=void 0
!0===n[f]?h=T:!1===n[f]&&(h=I)
g.CATEGORIES[f]=h}d.send(JSON.stringify(g))}
Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof e&&e.amd?e(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).ConsentCookieParser={})
var t,n}(function(){function e(){var e=Array.prototype.slice.call(arguments)
e.unshift("@linkedin/consent-cookie-parser")
return define.apply(null,e)}e.amd=!0
return e}())

//# sourceMappingURL=engine-vendor.map