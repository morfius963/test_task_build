(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{14:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),s=a(6),i=(a(25),function(e){var t=e.title,a=e.children;return o.a.createElement("section",{className:"goods-list"},o.a.createElement("div",{className:"goods-list__title"},t),a)}),l=a(12),m=(a(26),1),u=999,d=function(e){var t=e.id,a=e.avatar,c=e.name,r=e.count,s=e.price,i=e.changeCount,d=e.removeGood,g=Object(n.useState)(r),f=Object(l.a)(g,2),E=f[0],p=f[1];return Object(n.useEffect)((function(){i(t,E)}),[E,i,t]),o.a.createElement("article",{key:Math.pow(t,2),className:"goods-item"},o.a.createElement("div",{className:"goods-item__image"},o.a.createElement("img",{src:a,width:"80",alt:"Good item"})),o.a.createElement("div",{className:"goods-item__info"},o.a.createElement("h3",null,c),o.a.createElement("p",null,"$0.5/kg")),o.a.createElement("div",{className:"goods-item__number-input"},o.a.createElement("button",{onClick:function(){return p(E-1)},type:"button",className:"goods-item__number-btn",disabled:E===m},"\u2212"),o.a.createElement("input",{type:"number",min:"1",max:"999",value:E,onChange:function(e){return p(e.target.value)},readOnly:!0}),o.a.createElement("button",{onClick:function(){return p(E+1)},type:"button",className:"goods-item__number-btn",disabled:E===u},"+")),o.a.createElement("p",{className:"goods-item__price"},"$",s*E),o.a.createElement("button",{onClick:function(){return d(t)},type:"button",className:"goods-item__remove-btn"},o.a.createElement("img",{src:"images/cancel.svg",width:"16",alt:"Remove good from the list"})))},g=(a(27),function(e){var t=e.refreshData;return o.a.createElement("section",{className:"cart-empty"},o.a.createElement("h3",{className:"cart-empty__title"},"Your cart is empty. Click the button below to get new data"),o.a.createElement("button",{onClick:t,type:"button",className:"cart-empty__refresh-btn"},"Refresh"))}),f=function(e,t){return{type:"goods/CHANGE_COUNT",payload:{id:e,count:t}}},E=function(e,t){return{type:"goods/REMOVE_GOOD",payload:{id:e}}},p=function(){return{type:"goods/REFRESH_DATA"}},_=a(13),b=a(2),h=function(e,t){return Math.floor(e+Math.random()*(t+1-e))},v=function(){return new Array(h(5,15)).fill("").map((function(e,t){return{id:Math.pow(t,2),type:["Fruit","Candy","Vegetable"][Math.floor(3*Math.random())],avatar:"https://i.picsum.photos/id/".concat(h(1,100),"/200/200.jpg"),name:"Product name",count:h(1,4),price:h(100,999)}}))},y=function(e,t,a){var n=Object(_.a)({},e.find((function(e){return e.id===t})));return n.count=a,function(e,t){var a=e.findIndex((function(e){return e.id===t.id}));return[].concat(Object(b.a)(e.slice(0,a)),[t],Object(b.a)(e.slice(a+1)))}(e,n)},N=function(e,t){var a=e.findIndex((function(e){return e.id===t}));return-1===a?[]:[].concat(Object(b.a)(e.slice(0,a)),Object(b.a)(e.slice(a+1)))},O=function(e){var t={changeCount:f,removeGood:E,refreshData:p};return Object(s.b)((function(e){var t,a=e.goodsReducer;return{allGoods:a.goods,fullPrice:(t=a.goods,t.reduce((function(e,t){return e+t.price*t.count}),0))}}),t)((function(t){return o.a.createElement(e,t)}))},C=(a(28),O((function(e){var t,a=e.allGoods,n=e.fullPrice,c=e.changeCount,r=e.removeGood,s=e.refreshData;return o.a.createElement("article",{className:"goods-cart"},o.a.createElement("button",{type:"button",className:"goods-cart__close-btn"},o.a.createElement("img",{src:"images/close.svg",width:"16",alt:"Close cart"})),o.a.createElement("h2",{className:"goods-cart__title"},"My cart"),o.a.createElement("p",{className:"goods-cart__desc"},"Your cart items with pickup time & store info"),o.a.createElement("ul",{className:"goods-cart__info"},o.a.createElement("li",{className:"goods-cart__info-item"},o.a.createElement("div",{className:"goods-cart__info-item-image"},o.a.createElement("img",{src:"images/package.svg",width:"53",alt:"Delivery time"})),o.a.createElement("div",{className:"goods-cart__info-item-desc"},o.a.createElement("h3",null,"11:30 AM - 12:00 PM"),o.a.createElement("p",null,"Friday, 24 April, 2020"))),o.a.createElement("li",{className:"goods-cart__info-item"},o.a.createElement("div",{className:"goods-cart__info-item-image"},o.a.createElement("img",{src:"images/location.svg",width:"47",alt:"Company address"})),o.a.createElement("div",{className:"goods-cart__info-item-desc"},o.a.createElement("h3",null,"City Store"),o.a.createElement("p",null,"336A, North Town, CA")))),0===a.length?o.a.createElement(g,{refreshData:s}):(t=a,Object(b.a)(new Set(t.map((function(e){return e.type})))).sort()).map((function(e,t){var n=a.filter((function(t){return t.type===e}));return o.a.createElement(i,{key:"".concat(e,"-").concat(t),title:e},n.map((function(e){return o.a.createElement(d,Object.assign({key:e.id,changeCount:c,removeGood:r},e))})))})),a.length>0&&o.a.createElement("div",{className:"goods-cart__total"},o.a.createElement("button",{className:"goods-cart__submit-btn"},"Checkout"),o.a.createElement("p",{className:"goods-cart__total-price"},"Subtotal: $",n)))})));var k=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(C,null))},w=a(1),j={goods:v()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case"goods/CHANGE_COUNT":var n=t.payload,o=n.id,c=n.count;return{goods:y(e.goods,o,c)};case"goods/REMOVE_GOOD":var r=t.payload.id;return{goods:N(e.goods,r)};case"goods/REFRESH_DATA":return{goods:v()};default:return e}},G=Object(w.b)({goodsReducer:A}),M=Object(w.c)(G);a(29);r.a.render(o.a.createElement(s.a,{store:M},o.a.createElement(k,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.58e828c7.chunk.js.map