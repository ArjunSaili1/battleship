(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n@media only screen and (max-width: 1200px) {\n    .grid-container{\n        grid-template-columns: repeat(10, 2.5rem) !important; \n        grid-template-rows: repeat(10, 2.5rem)  !important;\n    }\n}\n\n@media only screen and (max-width: 1030px) {\n    .grid-container{\n        grid-template-columns: repeat(10, 2.25rem) !important; \n        grid-template-rows: repeat(10, 2.25rem)  !important;\n    }\n    .gameboard-flex{\n        gap: 4rem !important;\n    }\n}\n\n@media only screen and (max-width: 930px) {\n    .grid-container{\n        grid-template-columns: repeat(10, 2.25rem) !important; \n        grid-template-rows: repeat(10, 2.25rem)  !important;\n    }\n}\n\n@media only screen and (max-width: 370px) {\n    .grid-container{\n        grid-template-columns: repeat(10, 1.8rem) !important; \n        grid-template-rows: repeat(10, 1.8rem)  !important;\n    }\n}\n\n.grid-container{\n    width: auto;\n    display: grid;\n    border-style: solid;\n    border-color: black;\n    grid-template-columns: repeat(10, 3rem);\n    grid-template-rows: repeat(10, 3rem);\n}\n\n.coordinate{\n    border-style: solid;\n    border-color: black;\n    border-width: 1px;\n}\n\n.gameboard-flex{\n    display: flex;\n    justify-content: center;\n    gap: 12rem;\n    flex-wrap: wrap;\n}\n\n#computer-grid{\n\n}\n\n.display-wrap{\n    display: flex;\n    flex-direction: column;\n}\n\n.change-axis-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.change-axis-button{\n    padding: 10px;\n    margin: 20px;\n    font-size: 1.5rem;\n}\n\n.place-ship-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.ship-buttons > *{\n    margin: 20px;\n    padding: 5px;\n    font-size: 30px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(28),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=n=>{let e;return{gameboard:(()=>{const n=[],e=[];function t(n,e,t){return"horizontal"==t?n[0]+e<10:n[1]+e<10}function r(n,e,t){const r=[];for(let o=0;o<e;o++)"horizontal"==t?r.push([n[0]+o,n[1]]):r.push([n[0],n[1]+o]);return r}return{placeShip:function(e,o,a){const i=(n=>{let e=function(){let e=[];for(let t=0;t<n;t++)e[t]={position:t,isHit:!1};return e}();return{getShipArray:()=>e,isSunk:function(){let n=!0;for(let t=0;t<e.length;t++)0==e[t].isHit&&(n=!1);return n},hit:function(n){for(let t=0;t<=e.length;t++)t==n&&(e[t].isHit=!0)},getLength:()=>n}})(o);if(!t(e,o,a))return!1;{const t=r(e,o,a);n.push({ship:i,coords:t})}},receiveAttack:function(t){let r;n.forEach((n=>{for(let e=0;e<n.coords.length;e++)n.coords[e].every(((n,e)=>n===t[e]))&&(n.ship.hit(e),r=!0)})),r||e.push(t)},getShips:function(){return n},allSunk:function(){return n.forEach((n=>{if(!n.ship.isSunk())return!1})),!0},getMissedShots:function(){return e},isValidPlacement:t,getSunkShips:function(){const e=[];return n.forEach((n=>{n.ship.isSunk()&&e.push(n)})),e},getCoordinates:r}})(),getEnemyBoard:function(){return e},getName:function(){return n},attack:function(n){e.receiveAttack(n)},setEnemyBoard:function(n){e=n}}},g=(()=>{const n=document.querySelectorAll(".grid-container");function e(n,e){let t;for(let r=0;r<n.length;r++){console.log(n[r].coords.length),n[r].ship.isSunk()&&(t="black");for(let o=0;o<n[r].ship.getShipArray().length;o++){n[r].ship.getShipArray()[o].isHit&&!n[r].ship.isSunk()?t="red":n[r].ship.isSunk()||(t="blue");for(let a=0;a<e.children.length;a++)e.children[a].dataset.xCoordinate==n[r].coords[o][0]&&e.children[a].dataset.yCoordinate==n[r].coords[o][1]&&(e.children[a].style.backgroundColor=t)}}}return{render:function(t,r){!function(){for(let e=0;e<n.length;e++){let t=0,r=0;for(let o=0;o<100;o++){const o=document.createElement("div");o.classList.add("coordinate"),t%10==0&&0!==t&&(t=0,r++),o.dataset.xCoordinate=t,o.dataset.yCoordinate=r,t++,n[e].appendChild(o)}}}(),e(r.getShips(),n[1]),e(t.getShips(),n[0])}}})();!function(){const n=(()=>{const n=m("Computer"),e=[];function t(n){for(let t=0;t<e.length;t++)if(e[t][0]==n[0]&&e[t][1]==n[1])return!0}function r(e){const t=n.gameboard.getShips();for(let n=0;n<t.length;n++){const r=t[n].coords;for(let n=0;n<r.length;n++)if(r[n][0]===e[0]&&r[n][1]===e[1])return!0}return!1}function o(n,e,t){for(let o=0;o<e;o++){if("horizontal"==t&&r([n[0]+o,n[1]]))return!0;if("vertical"==t&&r([n[0],n[1]+o]))return!0}return!1}function a(e){let t,r,a=!1;for(;0==a;)t=i(),r=0==Math.round(Math.random())?"horizontal":"vertical",!0===n.gameboard.isValidPlacement(t,e,r)&&!1===o(t,e,r)&&(a=!0);n.gameboard.placeShip(t,e,r)}function i(){let n;return n=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],n}return Object.assign({},n,{attack:function(){let r;do{r=i()}while(t(r));e.push(r),n.attack(r)},placeAllShips:function(){a(5),a(4),a(3),a(3),a(2)},allShots:e})})();n.placeAllShips();const e=m("Test Name");e.gameboard.placeShip([0,0],5,"horizontal"),e.gameboard.placeShip([0,2],4,"horizontal"),e.gameboard.placeShip([0,4],3,"horizontal"),e.gameboard.placeShip([0,6],3,"horizontal"),e.gameboard.placeShip([0,8],2,"horizontal"),e.gameboard.receiveAttack([0,0]),g.render(e.gameboard,n.gameboard)}()})()})();