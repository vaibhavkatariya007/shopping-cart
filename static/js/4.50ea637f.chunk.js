(window.webpackJsonpstarshopping=window.webpackJsonpstarshopping||[]).push([[4],{225:function(t,e,n){"use strict";var a=function(t){return t.products},r=function(t){return t.cart},c=n(37),o=function(t){return{type:c.f,payload:t}},u=function(t){return{type:c.a,payload:t}},i=function(t,e){return{type:c.b,payload:{productId:t,deleteQty:e}}};n.d(e,"d",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i}),n.d(e,"e",function(){return o})},233:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(97),o=n(42),u=n(222),i=n(30),l=n(98),d=n(225),s=u.a.Content,p=u.a.Sider;e.default=Object(o.g)(Object(c.b)(function(t){return{cart:Object(d.c)(t)}},{addProductToCart:d.a,deleteProductFromCart:d.b})(function(t){var e=t.history,n=t.cart,a=n.productOnCart,c=n.count,o=t.addProductToCart,d=t.deleteProductFromCart,f=function(t){o(t)},m=function(t){var e=0,n=0;return t&&Object.keys(t).forEach(function(a){t[a]&&(e+=t[a].qty*t[a].price.display,n+=t[a].qty*t[a].price.actual)}),{totalPrice:e,totalDiscount:n,totalPayable:e-n}}(a);return r.a.createElement(u.a,{className:"cart-page"},r.a.createElement(l.d,{history:e,searchProduct:function(){}}),r.a.createElement(u.a,null,r.a.createElement(s,null,a&&Object.keys(a).length>0&&Object.keys(a).map(function(t){return r.a.createElement(l.a,{key:t,onAddProduct:f,onDeleteProduct:d,data:a[t]})})||r.a.createElement("div",{className:"no-product-found"},r.a.createElement("span",{className:"label"}," No Product in Cart"),r.a.createElement(i.a,{onClick:function(){return e.push("/")}},"Continue Shopping")),a&&Object.keys(a).length>0&&r.a.createElement("div",{className:"mobile-view"},r.a.createElement(l.f,{priceData:m,count:c}))),a&&Object.keys(a).length>0&&r.a.createElement(p,{width:350},r.a.createElement(l.f,{priceData:m,count:c}))),r.a.createElement(l.c,null))}))}}]);
//# sourceMappingURL=4.50ea637f.chunk.js.map