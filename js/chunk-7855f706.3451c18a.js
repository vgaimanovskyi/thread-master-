(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7855f706"],{"043c":function(t,e,s){},"0fa5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"page"},[i("Loader")],1):i("div",{staticClass:"page"},[i("div",{staticClass:"mainer"},[i("div",{staticClass:"filter-block"},[i("div",{staticClass:"filter"},[i("div",{staticClass:"filter__name",on:{click:function(e){t.filterListOpen=!t.filterListOpen}}},[t._v(" "+t._s(t.filterName)+" "),i("svg",{staticClass:"filter__svg",class:{"filter__svg--rotate":t.filterListOpen}},[i("use",{attrs:{"xlink:href":s("4c1f")+"#arrowSelect"}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.filterListOpen,expression:"filterListOpen"}],staticClass:"filter__list"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"radio",value:"cheap",id:"cheap"},domProps:{checked:t._q(t.filterValue,"cheap")},on:{change:[function(e){t.filterValue="cheap"},t.useFilter]}}),i("label",{attrs:{for:"cheap"}},[t._v("От дешевых к дорогим")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"radio",value:"expensive",id:"expensive"},domProps:{checked:t._q(t.filterValue,"expensive")},on:{change:[function(e){t.filterValue="expensive"},t.useFilter]}}),i("label",{attrs:{for:"expensive"}},[t._v("От дорогих к дешевым")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"radio",value:"new",id:"new"},domProps:{checked:t._q(t.filterValue,"new")},on:{change:[function(e){t.filterValue="new"},t.useFilter]}}),i("label",{attrs:{for:"new"}},[t._v("Новинки")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"radio",value:"promo",id:"promo"},domProps:{checked:t._q(t.filterValue,"promo")},on:{change:[function(e){t.filterValue="promo"},t.useFilter]}}),i("label",{attrs:{for:"promo"}},[t._v("Акционные")])])])]),i("div",{staticClass:"row"},[t._l(t.products,(function(e){return i("div",{key:e.id,staticClass:"col"},[i("router-link",{staticClass:"img-container",attrs:{tag:"div",to:"/product/"+e.id}},[e.discount>0?i("div",{staticClass:"tag tag--discount"},[t._v(" -"+t._s(e.discount)+"% ")]):t._e(),e.new?i("div",{staticClass:"tag tag--new"},[t._v("Новинка")]):t._e(),i("img",{staticClass:"img",attrs:{src:e.urlPoster,alt:e.name}})]),i("h3",{staticClass:"name"},[i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"size"},[t._v("Размер: "+t._s(e.size))]),i("div",{staticClass:"price"},[t._v(" "+t._s(e.price-e.price*e.discount/100)+" $ "),e.discount>0?i("s",{staticClass:"old-price"},[t._v(t._s(e.price)+" $")]):t._e()])],1)})),i("div",{staticClass:"col empty"}),i("div",{staticClass:"col empty"})],2),i("button",{staticClass:"btn btn--width",attrs:{type:"button",disabled:t.btnDisabled},on:{click:function(e){return t.moreProducts()}}},[t._v(" Смотреть еще ")])]),i("Aside"),i("svg",{staticClass:"svg svg--turtle"},[i("use",{attrs:{"xlink:href":s("4c1f")+"#turtle"}})]),i("svg",{staticClass:"svg svg--whale"},[i("use",{attrs:{"xlink:href":s("4c1f")+"#whale"}})]),i("svg",{staticClass:"svg svg--faces"},[i("use",{attrs:{"xlink:href":s("4c1f")+"#faces"}})])],1)},a=[],r=(s("99af"),s("fb6a"),s("a596")),l=s("a609"),n={components:{Aside:r["a"],Loader:l["a"]},metaInfo:{title:"Магазин"},data:function(){return{products:[],filterName:"Фильтр",filterValue:"",filterListOpen:!1,btnDisabled:!1}},computed:{loading:function(){return this.$store.getters.getLoading},allProducts:function(){return this.$store.getters.getAllProducts}},methods:{useFilter:function(){switch(this.filterValue){case"cheap":this.filterName="От дешевых к дорогим",this.allProducts.sort((function(t,e){var s=t.price-t.price*t.discount/100,i=e.price-e.price*e.discount/100;return s-i}));break;case"expensive":this.filterName="От дорогих к дешевым",this.allProducts.sort((function(t,e){var s=t.price-t.price*t.discount/100,i=e.price-e.price*e.discount/100;return i-s}));break;case"new":this.filterName="Новинки",this.allProducts.sort((function(t,e){return e.new-t.new}));break;case"promo":this.filterName="Акционные",this.allProducts.sort((function(t,e){return e.discount-t.discount}));break;default:this.filterName="Фильтр",this.allProducts.sort((function(t,e){return t.id-e.id}))}this.filterListOpen=!1,this.btnDisabled=!1},moreProducts:function(){var t=this.products,e=this.allProducts.slice(t.length,t.length+9);this.products=t.concat(e),this.btnDisabled=this.products.length===this.allProducts.length}},created:function(){this.products=this.allProducts.slice(0,9)},watch:{allProducts:function(){this.products=this.allProducts.slice(0,9)}}},c=n,o=(s("160b"),s("2877")),u=Object(o["a"])(c,i,a,!1,null,"5f4d12d7",null);e["default"]=u.exports},"160b":function(t,e,s){"use strict";var i=s("947d"),a=s.n(i);a.a},"327b":function(t,e,s){"use strict";var i=s("043c"),a=s.n(i);a.a},"947d":function(t,e,s){},a579:function(t,e,s){"use strict";var i=s("b201"),a=s.n(i);a.a},a596:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aside-btn"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollTop}},[i("svg",{staticClass:"svg-btn"},[i("use",{attrs:{"xlink:href":s("4c1f")+"#arrowTop"}})])]),i("router-link",{staticClass:"btn btn--toContacts",attrs:{to:"/contacts",tag:"a"}},[t._v("Напишите нам, мы онлайн!")])],1)},a=[],r={methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=r,n=(s("a579"),s("2877")),c=Object(n["a"])(l,i,a,!1,null,"b75a288a",null);e["a"]=c.exports},a609:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-block"},[i("img",{staticClass:"loader",attrs:{src:s("f34b"),alt:"data loading"}})])}],r={},l=r,n=(s("327b"),s("2877")),c=Object(n["a"])(l,i,a,!1,null,"13a6940e",null);e["a"]=c.exports},b201:function(t,e,s){},f34b:function(t,e,s){t.exports=s.p+"img/loader.2f7caff6.gif"}}]);
//# sourceMappingURL=chunk-7855f706.3451c18a.js.map