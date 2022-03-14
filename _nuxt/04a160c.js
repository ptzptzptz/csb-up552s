(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{426:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",l="quarter",h="year",d="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},O="en",w={};w[O]=y;var p=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return O;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return!n&&r&&(O=r),r||!n&&O},M=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},x=g;x.l=D,x.i=p,x.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function y(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=y.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(v);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return x},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!x.u(e)||e,l=x.p(t),f=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},v=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case c:return r?f(1,y):f(0,y+1);case o:var O=this.$locale().weekStart||0,w=(m<O?m+7:m)-O;return f(r?$-w:$+(6-w),y);case a:case d:return v(g+"Hours",0);case u:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,o=x.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[a]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[u]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],v=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(d,1);m.$d[f](v),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[x.p(t)]()},$.add=function(r,l){var d,f=this;r=Number(r);var v=x.p(l),m=function(t){var e=M(f);return x.w(e.date(e.date()+Math.round(t*r)),f)};if(v===c)return this.set(c,this.$M+r);if(v===h)return this.set(h,this.$y+r);if(v===a)return m(1);if(v===o)return m(7);var y=(d={},d[s]=e,d[u]=n,d[i]=t,d)[v]||1,$=this.$d.getTime()+r*y;return x.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},h=function(t){return x.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:x.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:x.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:x.s(u,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||v[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,d,f){var v,m=x.p(d),y=M(r),$=(y.utcOffset()-this.utcOffset())*e,g=this-y,O=x.m(this,y);return O=(v={},v[h]=O/12,v[c]=O,v[l]=O/3,v[o]=(g-$)/6048e5,v[a]=(g-$)/864e5,v[u]=g/n,v[s]=g/e,v[i]=g/t,v)[m]||g,f?O:x.a(O)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return w[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return x.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},y}(),b=S.prototype;return M.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,S,M),t.$i=!0),M},M.locale=D,M.isDayjs=p,M.unix=function(t){return M(1e3*t)},M.en=w[O],M.Ls=w,M.p={},M}()},449:function(t,e,n){t.exports=function(){"use strict";var t="week",e="year";return function(i,n,r){var o=n.prototype;o.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var o=r(this).startOf(e).add(1,e).date(n),s=r(this).endOf(t);if(o.isBefore(s))return 1}var a=r(this).startOf(e).date(n).startOf(t).subtract(1,"millisecond"),c=this.diff(a,t,!0);return c<0?r(this).startOf("week").week():Math.ceil(c)},o.weeks=function(t){return void 0===t&&(t=null),this.week(t)}}}()},450:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("01907af4",content,!0,{sourceMap:!1})},451:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},454:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(4),n(11),n(86),n(12),n(9),n(13),n(15),n(16),n(426)),c=n.n(o),l=n(449),h=n.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}c.a.extend(h.a);var f={props:{data:{type:Array,default:function(){return"[]"}},theme:{type:String,default:"light"}},data:function(){return{rawData:this.data,chartOptions:{chart:{type:"area",height:250,background:"transparent",zoom:{enabled:!1,autoScaleYaxis:!0},toolbar:{show:!1}},theme:{mode:this.theme},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"},theme:"dark"},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},noData:{text:"Loading..."}},series:[],selectType:0,seriesNames:["Exercises","Time (min)","Reps"],selectRecurrence:"Monthly",recurrences:["Daily","Weekly","Monthly","Yearly"]}},created:function(){this.series=this.getChartData()},methods:{getChartData:function(){var t=this.rawData,e=this.recurrences.indexOf(this.selectRecurrence),n=this.selectType,r={};t.forEach((function(t){var o=new Date(t.date),l=Math.floor(t.time/60),h=t.reps,d=[e<=3?o.getFullYear():"",e<=2?o.getMonth():"",e<=1?c()(o).week():"",e<=0?o.getDay():""].join("-");r[d]||(r[d]=[o,0]),0===n&&r[d][1]++,1===n&&(r[d][1]+=l),2===n&&(r[d][1]+=h)}));var o=this.seriesNames[this.selectType],l=[];return Object.keys(r).forEach((function(t){return l.push(r[t])})),[{name:o,data:l}]},updateChart:function(){this.chartOptions=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.chartOptions),this.series=this.getChartData()}}},v=f,m=n(70),y=n(106),$=n.n(y),O=n(210),w=(n(450),n(155)),D=w.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return w.a.options.computed.classes.call(this)}},methods:{genData:w.a.options.methods.genData}}),M=n(38),x=n(14);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(x.a)(D,M.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return k(k({},D.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,k({},D.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),j=n(458),C=n(424),T=n(464),P=n(420),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("div",[t._v("\n      Training growth\n      "),n("div",{staticClass:"subtitle-2 font-weight-regular text--secondary"},[t._v("\n        Number of workouts per month\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn-toggle",{staticClass:"my-2 mr-2",attrs:{mandatory:""},on:{change:function(e){return t.updateChart()}},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}},[n("v-btn",{staticClass:"px-4",attrs:{value:0,plain:"",small:""}},[t._v("Exercises")]),t._v(" "),n("v-btn",{staticClass:"px-4",attrs:{value:1,plain:"",small:""}},[t._v("Time")]),t._v(" "),n("v-btn",{staticClass:"px-4",attrs:{value:2,plain:"",small:""}},[t._v("Reps")])],1),t._v(" "),n("v-select",{staticClass:"text-body-2",staticStyle:{"max-width":"140px"},attrs:{items:t.recurrences,flat:"",solo:"",dense:"","hide-details":"","prepend-inner-icon":"mdi-clock-outline"},on:{change:function(e){return t.updateChart()}},model:{value:t.selectRecurrence,callback:function(e){t.selectRecurrence=e},expression:"selectRecurrence"}})],1),t._v(" "),n("v-card-text",[n("apexchart",{attrs:{type:"area",height:"250",options:t.chartOptions,series:t.series}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;$()(component,{VBtn:O.a,VBtnToggle:_,VCard:j.a,VCardText:C.a,VCardTitle:C.b,VSelect:T.a,VSpacer:P.a})}}]);