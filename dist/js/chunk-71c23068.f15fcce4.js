(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c23068"],{"0e0d":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.loading?i("div",{staticClass:"page"},[i("Loader")],1):i("div",{staticClass:"page"},[i("div",{staticClass:"mainer"},[i("h1",{staticClass:"page__caption"},[t._v("Избранные товары")]),i("div",{staticClass:"row"},[t._l(t.favProducts,(function(s){return i("div",{key:s.id,staticClass:"col"},[i("router-link",{staticClass:"img-container",attrs:{tag:"div",to:"/product/"+s.id}},[s.discount>0?i("div",{staticClass:"tag tag--discount"},[t._v(" -"+t._s(s.discount)+"% ")]):t._e(),s.new?i("div",{staticClass:"tag tag--new"},[t._v("Новинка")]):t._e(),i("div",{staticClass:"btn-tag-conteiner"},[i("svg",{staticClass:"svg-btn-tag favourite",attrs:{title:"Нравится"},on:{click:function(a){return t.removeFromFavourites(s.id)}}},[i("use",{attrs:{"xlink:href":a("4c1f")+"#heart"}})])]),i("img",{staticClass:"img",attrs:{src:s.urlPoster,alt:s.name}})]),i("h3",{staticClass:"name"},[i("span",[t._v(t._s(s.name))])]),i("div",{staticClass:"size"},[t._v("Размер: "+t._s(s.size))]),i("div",{staticClass:"price"},[t._v(" "+t._s(s.price-s.price*s.discount/100)+" $ "),s.discount>0?i("s",{staticClass:"old-price"},[t._v(t._s(s.price)+" $")]):t._e()]),i("div",{staticClass:"btn-container"},[i("button",{ref:"addToCartBtn",refInFor:!0,staticClass:"btn btn--width",attrs:{type:"button"},on:{click:function(a){return t.addToCart(s.id)}}},[t._v(" Добавить в корзину ")]),i("button",{staticClass:"btn btn--favourite",attrs:{type:"button"},on:{click:function(a){return t.removeFromFavourites(s.id)}}},[t.ie?i("img",{staticClass:"svg-btn favourite",attrs:{src:a("988e"),alt:"isFav"}}):i("svg",{staticClass:"svg-btn favourite"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#heart"}})])])])],1)})),i("div",{staticClass:"col empty"}),i("div",{staticClass:"col empty"})],2)]),i("Aside"),i("svg",{staticClass:"svg svg--balloon"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#balloon"}})]),i("svg",{staticClass:"svg svg--faces"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#faces"}})])],1)},e=[],n=(a("7db0"),a("c740"),a("4160"),a("a434"),a("b0c0"),a("159b"),a("a596")),r=a("a609"),o={components:{Aside:n["a"],Loader:r["a"]},metaInfo:{title:"Избранное"},computed:{favProducts:function(){return this.$store.getters.getFavProducts},favouriteList:function(){return this.$store.getters.getFavList},loading:function(){return this.$store.getters.getLoading},ie:function(){return!!window.MSInputMethodContext&&!!document.documentMode}},methods:{removeFromFavourites:function(t){var s=this.favouriteList.findIndex((function(s){return s===t}));this.favouriteList.splice(s,1),this.$store.dispatch("toggleMyFavourite",this.favouriteList)},addToCart:function(t){var s=this.favProducts.find((function(s){return s.id===t})),a=s.price-s.price*s.discount/100,i={id:s.id,name:s.name,urlPoster:s.urlPoster,price:a,count:1};this.$store.dispatch("addToCart",i),this.$refs["addToCartBtn"].forEach((function(t){return t.blur()}))}}},c=o,l=(a("1e75"),a("2877")),d=Object(l["a"])(c,i,e,!1,null,"3cae8c82",null);s["default"]=d.exports},"1e75":function(t,s,a){"use strict";var i=a("ebb0"),e=a.n(i);e.a},"988e":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgBrZOxTsMwEIb/s5eMmVDGsCEEKI/Qbqw8Bk/R9g1gYoUnoDwBGdmoWtgzAgvHFob4OKcBVIiH1P0kS7bv9Mn2nQkdKY5GIJqAULRLQanjkrGaB+MGN9ysrn2c2iRzMgFkil6o2w/H2S1nlOKwgLGPiMHJ2CaUXem5DhAF5ZSa43f4O8fBZgcST+pFFWIRVCqSO8RCKLVqRQ7T+Kptf0Vn922NF04k+1TrKbZCZizLufXTGq8PCe1pc9IIg1CJe5r6mf3equWtHCb7lWyIhsk2Jf9EPzLJPnrfTMBamHN2zxd/Q4QA7R8ke6sZeSepIPaMsVj05QdFa5m2BjX3a5Edq6QK5X4B61BilhLBnOgAAAAASUVORK5CYII="},a422:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAYAAABvqT8MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACiSURBVHgB7Y+9EcIwDIWfbApKlQxhMwMlY8AEjIDpGAMmSdghA1BC55ImCOWnCI5TUHKXd+c7+fR90gnIhM36oO+Y69kMrKCctdwsaYWXPG+TQg+H9iOIIGxTyY5hOUGoMR4qXLUIo00NzMYLG9dOZ/IFkyu6ngtdr7+Jrd8N4VT4kpRdoLYlUO8jqgsmEt9VYPi7XlBmgXTDMAY/Zhb+VPgAkp021liAVP4AAAAASUVORK5CYII="},a596:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"aside-btn"},[i("button",{ref:"asideBtn",staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollTop}},[t.ie?i("img",{staticClass:"svg-btn",attrs:{src:a("a422"),alt:"arrowTop"}}):i("svg",{staticClass:"svg-btn"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#arrowTop"}})])]),i("router-link",{staticClass:"btn btn--toContacts",attrs:{to:"/contacts",tag:"a"}},[t._v("Напишите нам, мы онлайн!")])],1)},e=[],n={computed:{ie:function(){return!!window.MSInputMethodContext&&!!document.documentMode}},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.$refs["asideBtn"].blur()}}},r=n,o=(a("ed16"),a("2877")),c=Object(o["a"])(r,i,e,!1,null,"150b9de2",null);s["a"]=c.exports},a609:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"loading-block"},[a("div",{staticClass:"cssload-loader"},[a("div",{staticClass:"cssload-inner cssload-one"}),a("div",{staticClass:"cssload-inner cssload-two"}),a("div",{staticClass:"cssload-inner cssload-three"})])])}],n={},r=n,o=(a("f83f"),a("2877")),c=Object(o["a"])(r,i,e,!1,null,"0eb0497c",null);s["a"]=c.exports},bb69:function(t,s,a){},c9d9:function(t,s,a){},ebb0:function(t,s,a){},ed16:function(t,s,a){"use strict";var i=a("c9d9"),e=a.n(i);e.a},f83f:function(t,s,a){"use strict";var i=a("bb69"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-71c23068.f15fcce4.js.map