!function(e,l){for(var n in l)e[n]=l[n]}(exports,function(e){function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}var n={};return l.m=e,l.c=n,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="",l(l.s=0)}({0:function(e,l,n){e.exports=n("Zq8w")},"8wGh":function(e,l){e.exports=require("@angular/animations/browser")},A7Ap:function(e,l){e.exports=require("@angular/router")},ASwt:function(e,l){e.exports=require("@angular/platform-server")},"Hq/i":function(e,l){e.exports=require("@angular/platform-browser/animations")},Ir0Z:function(e,l){e.exports=require("@angular/common/http")},JwoV:function(e,l,n){"use strict";var t=n("OQ0P"),o=n("bNRb"),r=n("wQAS"),u=n("gou4"),p=n("yv0u"),d=n("wp5R"),i=n("ASwt"),a=n("8wGh"),m=n("Hq/i"),c=n("A7Ap"),s=n("f9NF"),A=n("Ir0Z"),M=n("l0JX"),g=n("aR8+");l.AppServerModuleNgFactory=t.\u0275cmf(o.AppServerModule,[r.AppComponent],function(e){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[u.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(5120,t.LOCALE_ID,t.\u0275m,[[3,t.LOCALE_ID]]),t.\u0275mpd(4608,p.NgLocalization,p.NgLocaleLocalization,[t.LOCALE_ID,[2,p.\u0275a]]),t.\u0275mpd(5120,t.IterableDiffers,t.\u0275k,[]),t.\u0275mpd(5120,t.KeyValueDiffers,t.\u0275l,[]),t.\u0275mpd(4608,d.DomSanitizer,d.\u0275e,[p.DOCUMENT]),t.\u0275mpd(6144,t.Sanitizer,null,[d.DomSanitizer]),t.\u0275mpd(4608,d.HAMMER_GESTURE_CONFIG,d.HammerGestureConfig,[]),t.\u0275mpd(5120,d.EVENT_MANAGER_PLUGINS,function(e,l,n,t,o){return[new d.\u0275DomEventsPlugin(e,l),new d.\u0275KeyEventsPlugin(n),new d.\u0275HammerGesturesPlugin(t,o)]},[p.DOCUMENT,t.NgZone,p.DOCUMENT,p.DOCUMENT,d.HAMMER_GESTURE_CONFIG]),t.\u0275mpd(4608,d.EventManager,d.EventManager,[d.EVENT_MANAGER_PLUGINS,t.NgZone]),t.\u0275mpd(135680,d.\u0275DomSharedStylesHost,d.\u0275DomSharedStylesHost,[p.DOCUMENT]),t.\u0275mpd(4608,d.\u0275DomRendererFactory2,d.\u0275DomRendererFactory2,[d.EventManager,d.\u0275DomSharedStylesHost]),t.\u0275mpd(4608,i.\u0275c,i.\u0275c,[d.DOCUMENT,[2,d.\u0275TRANSITION_ID]]),t.\u0275mpd(6144,d.\u0275SharedStylesHost,null,[i.\u0275c]),t.\u0275mpd(4608,i.\u0275ServerRendererFactory2,i.\u0275ServerRendererFactory2,[t.NgZone,d.DOCUMENT,d.\u0275SharedStylesHost]),t.\u0275mpd(4608,a.AnimationDriver,a.\u0275NoopAnimationDriver,[]),t.\u0275mpd(5120,a.\u0275AnimationStyleNormalizer,m.\u0275d,[]),t.\u0275mpd(4608,a.\u0275AnimationEngine,m.\u0275b,[a.AnimationDriver,a.\u0275AnimationStyleNormalizer]),t.\u0275mpd(5120,t.RendererFactory2,i.\u0275a,[i.\u0275ServerRendererFactory2,a.\u0275AnimationEngine,t.NgZone]),t.\u0275mpd(4352,t.Testability,null,[]),t.\u0275mpd(4608,d.Meta,d.Meta,[p.DOCUMENT]),t.\u0275mpd(4608,d.Title,d.Title,[p.DOCUMENT]),t.\u0275mpd(5120,c.ActivatedRoute,c.\u0275f,[c.Router]),t.\u0275mpd(4608,c.NoPreloading,c.NoPreloading,[]),t.\u0275mpd(6144,c.PreloadingStrategy,null,[c.NoPreloading]),t.\u0275mpd(135680,c.RouterPreloader,c.RouterPreloader,[c.Router,t.NgModuleFactoryLoader,t.Compiler,t.Injector,c.PreloadingStrategy]),t.\u0275mpd(4608,c.PreloadAllModules,c.PreloadAllModules,[]),t.\u0275mpd(5120,c.ROUTER_INITIALIZER,c.\u0275i,[c.\u0275g]),t.\u0275mpd(5120,t.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[c.ROUTER_INITIALIZER]),t.\u0275mpd(4608,s.BrowserXhr,i.\u0275d,[]),t.\u0275mpd(4608,s.ResponseOptions,s.BaseResponseOptions,[]),t.\u0275mpd(4608,s.XSRFStrategy,i.\u0275e,[]),t.\u0275mpd(4608,s.XHRBackend,s.XHRBackend,[s.BrowserXhr,s.ResponseOptions,s.XSRFStrategy]),t.\u0275mpd(4608,s.RequestOptions,s.BaseRequestOptions,[]),t.\u0275mpd(5120,s.Http,i.\u0275f,[s.XHRBackend,s.RequestOptions]),t.\u0275mpd(4608,A.HttpXsrfTokenExtractor,A.\u0275g,[p.DOCUMENT,t.PLATFORM_ID,A.\u0275e]),t.\u0275mpd(4608,A.\u0275h,A.\u0275h,[A.HttpXsrfTokenExtractor,A.\u0275f]),t.\u0275mpd(5120,A.HTTP_INTERCEPTORS,function(e){return[e]},[A.\u0275h]),t.\u0275mpd(4608,A.XhrFactory,i.\u0275d,[]),t.\u0275mpd(4608,A.HttpXhrBackend,A.HttpXhrBackend,[A.XhrFactory]),t.\u0275mpd(6144,A.HttpBackend,null,[A.HttpXhrBackend]),t.\u0275mpd(5120,A.HttpHandler,i.\u0275g,[A.HttpBackend,[2,A.HTTP_INTERCEPTORS]]),t.\u0275mpd(4608,A.HttpClient,A.HttpClient,[A.HttpHandler]),t.\u0275mpd(4608,A.\u0275d,A.\u0275d,[]),t.\u0275mpd(4608,M.AnimationBuilder,m.\u0275BrowserAnimationBuilder,[t.RendererFactory2,d.DOCUMENT]),t.\u0275mpd(1024,c.\u0275a,c.\u0275d,[[3,c.Router]]),t.\u0275mpd(1024,t.ErrorHandler,d.\u0275a,[]),t.\u0275mpd(1024,t.NgProbeToken,function(){return[c.\u0275b()]},[]),t.\u0275mpd(512,c.\u0275g,c.\u0275g,[t.Injector]),t.\u0275mpd(256,t.APP_ID,"serverApp",[]),t.\u0275mpd(2048,d.\u0275TRANSITION_ID,null,[t.APP_ID]),t.\u0275mpd(1024,t.APP_INITIALIZER,function(e,l,n,t,o){return[d.\u0275h(e),c.\u0275h(l),d.\u0275f(n,t,o)]},[[2,t.NgProbeToken],c.\u0275g,d.\u0275TRANSITION_ID,p.DOCUMENT,t.Injector]),t.\u0275mpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.\u0275mpd(131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t.\u0275Console,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.\u0275mpd(512,c.UrlSerializer,c.DefaultUrlSerializer,[]),t.\u0275mpd(512,c.ChildrenOutletContexts,c.ChildrenOutletContexts,[]),t.\u0275mpd(256,c.ROUTER_CONFIGURATION,{},[]),t.\u0275mpd(1024,p.LocationStrategy,c.\u0275c,[p.PlatformLocation,[2,p.APP_BASE_HREF],c.ROUTER_CONFIGURATION]),t.\u0275mpd(512,p.Location,p.Location,[p.LocationStrategy]),t.\u0275mpd(512,t.Compiler,t.Compiler,[]),t.\u0275mpd(512,t.NgModuleFactoryLoader,t.SystemJsNgModuleLoader,[t.Compiler,[2,t.SystemJsNgModuleLoaderConfig]]),t.\u0275mpd(1024,c.ROUTES,function(){return[[]]},[]),t.\u0275mpd(1024,c.Router,c.\u0275e,[t.ApplicationRef,c.UrlSerializer,c.ChildrenOutletContexts,p.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,c.ROUTES,c.ROUTER_CONFIGURATION,[2,c.UrlHandlingStrategy],[2,c.RouteReuseStrategy]]),t.\u0275mpd(512,c.RouterModule,c.RouterModule,[[2,c.\u0275a],[2,c.Router]]),t.\u0275mpd(512,p.CommonModule,p.CommonModule,[]),t.\u0275mpd(512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.\u0275mpd(512,d.BrowserModule,d.BrowserModule,[[3,d.BrowserModule]]),t.\u0275mpd(512,g.AppModule,g.AppModule,[]),t.\u0275mpd(512,s.HttpModule,s.HttpModule,[]),t.\u0275mpd(512,A.HttpClientXsrfModule,A.HttpClientXsrfModule,[]),t.\u0275mpd(512,A.HttpClientModule,A.HttpClientModule,[]),t.\u0275mpd(512,m.NoopAnimationsModule,m.NoopAnimationsModule,[]),t.\u0275mpd(512,i.ServerModule,i.ServerModule,[]),t.\u0275mpd(512,o.AppServerModule,o.AppServerModule,[]),t.\u0275mpd(256,A.\u0275e,"XSRF-TOKEN",[]),t.\u0275mpd(256,A.\u0275f,"X-XSRF-TOKEN",[])])})},OQ0P:function(e,l){e.exports=require("@angular/core")},QK5h:function(e,l,n){"use strict";l.styles=[""]},Zq8w:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=n("JwoV");l.AppServerModuleNgFactory=t.AppServerModuleNgFactory;var o=n("bNRb");l.AppServerModule=o.AppServerModule,l.LAZY_MODULE_MAP={}},"aR8+":function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.AppModule=function(){}},bNRb:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.AppServerModule=function(){}},f9NF:function(e,l){e.exports=require("@angular/http")},gou4:function(e,l,n){"use strict";function t(e){return u.\u0275vid(0,[(e()(),u.\u0275ted(-1,null,["\n"])),(e()(),u.\u0275eld(1,0,null,null,6,"div",[["style","text-align:center"]],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275eld(3,0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),u.\u0275ted(4,null,["\n    Welcome to ","!\n  "])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275eld(6,0,null,null,0,"img",[["alt","Angular Logo"],["src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="],["width","300"]],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n"])),(e()(),u.\u0275ted(-1,null,["\n"])),(e()(),u.\u0275eld(9,0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["Here are some links to help you start: "])),(e()(),u.\u0275ted(-1,null,["\n"])),(e()(),u.\u0275eld(12,0,null,null,22,"ul",[],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275eld(14,0,null,null,5,"li",[],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n    "])),(e()(),u.\u0275eld(16,0,null,null,2,"h2",[],null,null,null,null,null)),(e()(),u.\u0275eld(17,0,null,null,1,"a",[["href","https://angular.io/tutorial"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["Tour of Heroes"])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275eld(21,0,null,null,5,"li",[],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n    "])),(e()(),u.\u0275eld(23,0,null,null,2,"h2",[],null,null,null,null,null)),(e()(),u.\u0275eld(24,0,null,null,1,"a",[["href","https://github.com/angular/angular-cli/wiki"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["CLI Documentation"])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275eld(28,0,null,null,5,"li",[],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["\n    "])),(e()(),u.\u0275eld(30,0,null,null,2,"h2",[],null,null,null,null,null)),(e()(),u.\u0275eld(31,0,null,null,1,"a",[["href","https://blog.angular.io/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(e()(),u.\u0275ted(-1,null,["Angular blog"])),(e()(),u.\u0275ted(-1,null,["\n  "])),(e()(),u.\u0275ted(-1,null,["\n"])),(e()(),u.\u0275ted(-1,null,["\n\n"]))],null,function(e,l){e(l,4,0,l.component.title)})}function o(e){return u.\u0275vid(0,[(e()(),u.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,t,i)),u.\u0275did(1,49152,null,0,p.AppComponent,[d.Router],null,null)],null,null)}var r=n("QK5h"),u=n("OQ0P"),p=n("wQAS"),d=n("A7Ap"),i=u.\u0275crt({encapsulation:0,styles:[r.styles],data:{}});l.RenderType_AppComponent=i,l.View_AppComponent_0=t,l.View_AppComponent_Host_0=o,l.AppComponentNgFactory=u.\u0275ccf("app-root",p.AppComponent,o,{},{},[])},l0JX:function(e,l){e.exports=require("@angular/animations")},wQAS:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),n("A7Ap"),l.AppComponent=function(e){this.router=e,this.title="app"}},wp5R:function(e,l){e.exports=require("@angular/platform-browser")},yv0u:function(e,l){e.exports=require("@angular/common")}}));