!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i="RFC1738",a="RFC3986";e.exports={default:a,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}},RFC1738:i,RFC3986:a}},function(e,t,r){"use strict";var n=r(0),o=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),l=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:l,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],l=Object.keys(a),s=0;s<l.length;++s){var c=l[s],u=a[c];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:a,prop:c}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,o,i){if(0===e.length)return e;var l=e;if("symbol"==typeof e?l=Symbol.prototype.toString.call(e):"string"!=typeof e&&(l=String(e)),"iso-8859-1"===r)return escape(l).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var s="",c=0;c<l.length;++c){var u=l.charCodeAt(c);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||i===n.RFC1738&&(40===u||41===u)?s+=l.charAt(c):u<128?s+=a[u]:u<2048?s+=a[192|u>>6]+a[128|63&u]:u<55296||u>=57344?s+=a[224|u>>12]+a[128|u>>6&63]+a[128|63&u]:(c+=1,u=65536+((1023&u)<<10|1023&l.charCodeAt(c)),s+=a[240|u>>18]+a[128|u>>12&63]+a[128|u>>6&63]+a[128|63&u])}return s},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(i(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return i(t)&&!i(r)&&(a=l(t,n)),i(t)&&i(r)?(r.forEach((function(r,i){if(o.call(t,i)){var a=t[i];a&&"object"==typeof a&&r&&"object"==typeof r?t[i]=e(a,r,n):t.push(r)}else t[i]=r})),t):Object.keys(r).reduce((function(t,i){var a=r[i];return o.call(t,i)?t[i]=e(t[i],a,n):t[i]=a,t}),a)}}},function(e,t,r){"use strict";var n=r(3),o=r(4),i=r(0);e.exports={formats:i,parse:o,stringify:n}},function(e,t,r){"use strict";var n=r(1),o=r(0),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,s=Array.prototype.push,c=function(e,t){s.apply(e,l(t)?t:[t])},u=Date.prototype.toISOString,f=o.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,o,i,a,s,u,f,p,m,y,h,b,v){var g,_=t;if("function"==typeof u?_=u(r,_):_ instanceof Date?_=m(_):"comma"===o&&l(_)&&(_=n.maybeMap(_,(function(e){return e instanceof Date?m(e):e}))),null===_){if(i)return s&&!b?s(r,d.encoder,v,"key",y):r;_=""}if("string"==typeof(g=_)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(_))return s?[h(b?r:s(r,d.encoder,v,"key",y))+"="+h(s(_,d.encoder,v,"value",y))]:[h(r)+"="+h(String(_))];var w,j=[];if(void 0===_)return j;if("comma"===o&&l(_))w=[{value:_.length>0?_.join(",")||null:void 0}];else if(l(u))w=u;else{var O=Object.keys(_);w=f?O.sort(f):O}for(var x=0;x<w.length;++x){var S=w[x],C="object"==typeof S&&void 0!==S.value?S.value:_[S];if(!a||null!==C){var N=l(_)?"function"==typeof o?o(r,S):r:r+(p?"."+S:"["+S+"]");c(j,e(C,N,o,i,a,s,u,f,p,m,y,h,b,v))}}return j};e.exports=function(e,t){var r,n=e,s=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=d.filter;return("function"==typeof e.filter||l(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:a,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"==typeof s.filter?n=(0,s.filter)("",n):l(s.filter)&&(r=s.filter);var u,f=[];if("object"!=typeof n||null===n)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=a[u];r||(r=Object.keys(n)),s.sort&&r.sort(s.sort);for(var y=0;y<r.length;++y){var h=r[y];s.skipNulls&&null===n[h]||c(f,p(n[h],h,m,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset))}var b=f.join(s.delimiter),v=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}},function(e,t,r){"use strict";var n=r(1),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,l=r.depth>0&&/(\[[^[\]]*])/.exec(i),c=l?i.slice(0,l.index):i,u=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var f=0;r.depth>0&&null!==(l=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),function(e,t,r,n){for(var o=n?t:s(t,r),i=e.length-1;i>=0;--i){var a,l=e[i];if("[]"===l&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&l!==c&&String(u)===c&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[])[u]=o:a[c]=o:a={0:o}}o=a}return o}(u,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,c={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,d=u.split(t.delimiter,f),p=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[r]?m="utf-8":"utf8=%26%2310003%3B"===d[r]&&(m="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var y,h,b=d[r],v=b.indexOf("]="),g=-1===v?b.indexOf("="):v+1;-1===g?(y=t.decoder(b,a.decoder,m,"key"),h=t.strictNullHandling?null:""):(y=t.decoder(b.slice(0,g),a.decoder,m,"key"),h=n.maybeMap(s(b.slice(g+1),t),(function(e){return t.decoder(e,a.decoder,m,"value")}))),h&&t.interpretNumericEntities&&"iso-8859-1"===m&&(h=l(h)),b.indexOf("[]=")>-1&&(h=i(h)?[h]:h),o.call(c,y)?c[y]=n.combine(c[y],h):c[y]=h}return c}(e,r):e,f=r.plainObjects?Object.create(null):{},d=Object.keys(u),p=0;p<d.length;++p){var m=d[p],y=c(m,u[m],r,"string"==typeof e);f=n.merge(f,y,r)}return n.compact(f)}},function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"demo-2-view-mode grid-demo-2"},[!e.isLoading&&e.items.length<=0?r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-gray4 has-text-centered"},[e._m(0),e._v(" "),r("p",[e._v(e._s(e.__("No item found","tainacan-extra-viewmode-component-demo")))])])]):e._e(),e._v(" "),e.isLoading?r("ul",{staticClass:"grid tainacan-masonry-container"},e._l(12,(function(t){return r("li",{key:t,staticClass:"skeleton tainacan-masonry-item",style:{"min-height":e.randomHeightForMasonryItem()+"px"}})})),0):e._e(),e._v(" "),!e.isLoading&&e.items.length>0?r("ul",{staticClass:"grid"},e._l(e.items,(function(t,n){return r("li",{key:n},[r("a",{attrs:{target:"_blank",href:e.getItemLink(t.url,n)}},[r("figure",[null!=t.thumbnail?r("img",{attrs:{alt:t.thumbnail_alt?t.thumbnail_alt:e.$i18n.get("label_thumbnail"),src:t.thumbnail["tainacan-medium-full"]?t.thumbnail["tainacan-medium-full"][0]:t.thumbnail.medium?t.thumbnail.medium[0]:e.thumbPlaceholderPath}}):e._e(),e._v(" "),r("figcaption",[r("h3",e._l(e.displayedMetadata,(function(n,o){return n.display&&null!=n.metadata_type_object&&"title"==n.metadata_type_object.related_mapped_prop?r("span",{key:o,domProps:{innerHTML:e._s(null!=t.metadata&&e.collectionId?e.renderMetadata(t.metadata,n):t.title?t.title:"<span class='has-text-gray3 is-italic'>"+e.$i18n.get("label_value_not_provided")+"</span>")}}):e._e()})),0),e._v(" "),e.isSlideshowViewModeEnabled?r("a",{on:{click:function(t){return t.preventDefault(),e.starSlideshowFromHere(n)}}},[e._m(1,!0)]):e._e()])])])])})),0):e._e()])};n._withStripped=!0;var o=r(2),i=r.n(o);var a=function(e,t,r,n,o,i,a,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=l?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}({name:"ViewModeDemo2",data:()=>({thumbPlaceholderPath:tainacan_plugin.base_url+"/assets/images/placeholder_square.png",isSlideshowViewModeEnabled:!1,showMetadataPanel:!1,masonryCols:{default:7,1600:6,1400:5,1200:4,960:3,560:2,344:1}}),props:{collectionId:Number,displayedMetadata:Array,items:{type:Array,default:()=>[],required:!0},isLoading:!1,totalItems:Number,isFiltersMenuCompressed:Boolean,enabledViewModes:Array},computed:{__:()=>wp.i18n?wp.i18n.__:(e,t)=>e,queries(){let e=JSON.parse(JSON.stringify(this.$route.query));return e&&(delete e.view_mode,delete e.fetch_only,delete e.fetch_only_meta),e}},mounted(){console.log(this.items),this.isSlideshowViewModeEnabled=this.enabledViewModes.findIndex(e=>"slideshow"==e)>=0},methods:{getItemLink(e,t){return this.queries?(this.queries.pos=(this.queries.paged-1)*this.queries.perpage+t,this.queries.source_list=this.$root.termId?"term":this.$root.collectionId&&"default"!=this.$root.collectionId?"collection":"repository",this.queries.ref=this.$route.path,e+"?"+i.a.stringify(this.queries)):e},renderMetadata(e,t){let r=!(!e||null==e[t.slug])&&e[t.slug];return r?r.value_as_html:""},randomHeightForMasonryItem:()=>Math.floor(261*Math.random()+120),starSlideshowFromHere(e){this.$router.replace({query:{...this.$route.query,"slideshow-from":e}}).catch(e=>this.$console.log(e))}}},n,[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("span",{staticClass:"icon is-large"},[t("i",{staticClass:"tainacan-icon tainacan-icon-36px tainacan-icon-items"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon slideshow-icon"},[t("i",{staticClass:"tainacan-icon tainacan-icon-1-125em tainacan-icon-viewgallery"})])}],!1,null,null,null);a.options.__file="demo-2-view-mode.vue";var l=a.exports;window.tainacan_extra_components=void 0!==window.tainacan_extra_components?window.tainacan_extra_components:{},window.tainacan_extra_components["view-mode-demo-2"]=l}]);