(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2095:function(r,t,e){"use strict";e.r(t);var n={data:function(){return{currentAlertCounter:10}}},o=e(0),l=Object(o.a)(n,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("CAlert",{attrs:{color:"primary"}},[r._v("\n    This is info alert.\n  ")]),r._v(" "),e("CAlert",{attrs:{color:"warning",closeButton:""}},[r._v("\n    This is warning dismissible alert.\n  ")]),r._v(" "),e("CAlert",{attrs:{color:"danger",show:r.currentAlertCounter,closeButton:""},on:{"update:show":function(t){r.currentAlertCounter=t}}},[r._v("\n    This alert will close after "+r._s(r.currentAlertCounter)+" seconds.\n    "),e("CProgress",{attrs:{max:10,value:r.currentAlertCounter,height:"3px",color:"danger",animate:""}})],1),r._v(" "),r.currentAlertCounter?r._e():e("CButton",{attrs:{color:"primary"},on:{click:function(t){r.currentAlertCounter=10}}},[r._v("\n    Show alert with timer\n  ")])],1)}),[],!1,null,null,null);t.default=l.exports}}]);