(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{212:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(10),s=n.n(c),r=(n(212),n(55),n(32)),o=n(18),l=n(12),d=n(131),u=n.n(d),j=n(65),b=n(180),m=n(29),f=n.n(m),h=function(){return f.a.get("https://ilca-inspection-server.herokuapp.com/signups/options").then((function(e){return e.data}))},O=function(){var e=Object(b.a)(u.a.mark((function e(t,n,i,a,c){var s,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=a[n].entriesLeft,o=0;o<a[n].entriesLeft.length;o++)s[o][0]===i&&(r=o);s[r][1]-=1,0===s[r][1]&&a[n].unavailableSlots.push(s[r][0]),a[n].entriesLeft=s,h().then((function(e){return e.filter((function(e){return e.uuid===t}))[0].inspectionReqs})).then((function(e){f.a.put("https://ilca-inspection-server.herokuapp.com/signups/update/".concat(t),{slotsAvailableByDay:a,inspectionReqs:[].concat(Object(j.a)(e),[c])})}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,i,a,c){return e.apply(this,arguments)}}(),g=function(e){return f.a.get("https://ilca-inspection-server.herokuapp.com/events/details/".concat(e)).then((function(e){return e.data}))},v=function(e){return f.a.get("https://ilca-inspection-server.herokuapp.com/events/sailors/".concat(e)).then((function(e){return e.data}))},p=n(351),x=n(3),y=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){h().then((function(e){return a(e)}))}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexAlign:"center",textAlign:"center"},children:[Object(x.jsxs)("div",{className:"admin-header",children:[Object(x.jsx)("img",{src:"http://www.laserinternational.org/wp-content/uploads/2020/03/ILCA-logo-and-full-name-blue-and-grey.jpg",alt:"ILCA Logo",style:{width:200,margin:30,marginBottom:0}}),Object(x.jsx)("h1",{children:"Equipment Inspection Sign-Up Administration"})]}),Object(x.jsx)(p.a,{variant:"contained",color:"primary",href:"/ilca-signup/admin/create",style:{width:300,margin:"auto"},children:"Create Inspection Signup"}),Object(x.jsx)("h3",{children:"Created Events"}),Object(x.jsx)("div",{className:"event-list-container",children:n.map((function(e,t){return Object(x.jsxs)("div",{className:"admin-event-card",children:[Object(x.jsx)("div",{style:{marginTop:10},children:Object(x.jsx)("strong",{children:e.eventTitle})}),Object(x.jsxs)("div",{style:{marginTop:10},children:[e.hostCity,", ",e.hostCountry]}),Object(x.jsx)("img",{style:{maxWidth:200,maxHeight:100,margin:15},src:e.logoURL,alt:"event logo"}),Object(x.jsx)(p.a,{variant:"contained",color:"primary",href:"/ilca-signup/admin/event/".concat(e.ilcaNum),style:{width:200,marginLeft:"auto",marginRight:"auto",marginBottom:20,backgroundColor:"rgb(2, 114, 186)"},children:"Access Event Details"})]},t)}))})]})})},S=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"404 Not Found"}),Object(x.jsx)(r.b,{to:"/ilca-signup",children:"Return to Home"})]})},D=n(185),N=n(186),C=n(187),w=n.n(C),k=n(363),I=n(360),L=n(357),B=n(364),A=n(362),T=n(17),M=n.n(T),E=n(137),Y=n(104),R=n.n(Y),q=function(e){var t=e.setSlotsAvailableByDay,n=e.slotsAvailableByDay,i=e.element,a=function(e,a){var c=Object.assign({},n);"increase"===a?(-1===c[i].unavailableSlots.indexOf(c[i].entriesLeft[e][0])&&(c[i].entriesLeft=c[i].entriesLeft.map((function(t,n){return n===e?[t[0],t[1]+1]:t}))),console.log(c)):"decrease"===a&&c[i].entriesLeft[e][1]>0&&-1===c[i].unavailableSlots.indexOf(c[i].entriesLeft[e][0])&&(c[i].entriesLeft=c[i].entriesLeft.map((function(t,n){return n===e?[t[0],t[1]-1]:t}))),t(c)};return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"timeslots-available",style:{marginBottom:28},children:n[i].entriesLeft.map((function(e,t){return Object(x.jsxs)("div",{className:"slot-num",children:[Object(x.jsx)("div",{className:"increase",onClick:function(){a(t,"increase")},children:"\u25b3 "}),Object(x.jsx)("div",{children:e[1]}),Object(x.jsx)("div",{className:"decrease",onClick:function(){a(t,"decrease")},children:"\u25bd "})]},t)}))})})},H=n(192),_=(n(307),n(308),n(309),function(){var e=Object(i.useState)(30),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(new Date),s=Object(l.a)(c,2),o=s[0],d=s[1],u=Object(i.useState)([]),b=Object(l.a)(u,2),m=b[0],h=b[1],O=Object(i.useState)(0),v=Object(l.a)(O,2),y=v[0],S=v[1],C=Object(i.useState)(""),T=Object(l.a)(C,2),Y=T[0],_=T[1],z=Object(i.useState)({}),P=Object(l.a)(z,2),F=P[0],U=P[1],V=Object(i.useState)(510),J=Object(l.a)(V,2),W=J[0],$=J[1],G=Object(i.useState)(M()("2021-01-01 09:00")),K=Object(l.a)(G,2),Q=K[0],X=K[1],Z=Object(i.useState)(870),ee=Object(l.a)(Z,2),te=ee[0],ne=ee[1],ie=Object(i.useState)(M()("2021-01-01 18:00")),ae=Object(l.a)(ie,2),ce=ae[0],se=ae[1],re=Object(i.useState)([{startDate:new Date,endDate:new Date,key:"selection"}]),oe=Object(l.a)(re,2),le=oe[0],de=oe[1];Object(i.useEffect)((function(){console.log(o),console.log(M()(o).format("YYYY-MM-DD"))}),[o]),Object(i.useEffect)((function(){var e=be(le[0].startDate,le[0].endDate).map((function(e){return M()(e).format("YYYY-MM-DD")}));h(e),me(e)}),[le]),Object(i.useEffect)((function(){var e=Object.assign({},F),t=function(t){e[t].entriesLeft=e[t].entriesLeft.map((function(n,i){return-1===e[t].unavailableSlots.indexOf(e[t].entriesLeft[i][0])?[n[0],y]:[n[0],0]}))};for(var n in e)t(n);U(e)}),[y]),Object(i.useEffect)((function(){var e=M()(Q._d.toString()).format("HH:mm").split(":").map((function(e){return parseInt(e)})),t=60*e[0]+e[1];$(t)}),[Q]),Object(i.useEffect)((function(){var e=M()(ce._d.toString()).format("HH:mm").split(":").map((function(e){return parseInt(e)})),t=60*e[0]+e[1];ne(t)}),[ce]);var ue=function(){if(""!==Y&&0!==y&&m.length){var e=Object(H.v4)(),t=[];g(Y).then((function(i){i.title?(!function(e,t,n,i,a,c,s,r,o,l,d,u,j,b,m,h){f.a.post("https://ilca-inspection-server.herokuapp.com/signups/created/",{slotsAvailableByDay:e,inspectionReqs:t,interval:n,entryLimit:i,selectedDates:a,shutoffDate:c,eventTitle:s,hostCity:r,hostCountry:o,logoURL:l,startDate:d,endDate:u,ilcaNum:j,timeFrom:b,timeTo:m,uuid:h}).then(alert("Timeslot Posted. The link to the timeslot can be found in the admin page for the Event: ".concat(s)))}(F,t,n,y,m,o,i.title,i.city,i.country,i.logo,i.startDate.date,i.endDate.date,Y,W,te,e),setTimeout(je,600)):alert("The Event ID entered does not match any existing events")}))}else alert("Please fill out all fields")},je=function(){window.location.reload()};Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var be=function(e,t){for(var n=[],i=e;i<=t;)n.push(i),i=i.addDays(1);return n},me=function(e){for(var t={},i=[],a=W;a<=te-n;a+=n)i.push([a,y]);var c,s=Object(D.a)(e);try{for(s.s();!(c=s.n()).done;){var r=c.value;t[r]={},t[r].entriesLeft=i,t[r].unavailableSlots=[]}}catch(o){s.e(o)}finally{s.f()}U(t)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{className:"post-header",children:[Object(x.jsx)("img",{className:"ilca-logo",src:"http://www.laserinternational.org/wp-content/uploads/2020/03/ILCA-logo-and-full-name-blue-and-grey.jpg",alt:"ILCA Logo"}),Object(x.jsxs)("div",{className:"post-title",children:[Object(x.jsx)("i",{children:"ILCA"})," Inspection Signup Creator"]})]}),Object(x.jsxs)("div",{className:"timeslot-post",children:[Object(x.jsx)(r.b,{style:{fontSize:20,marginBottom:20},className:"link",to:"/ilca-signup",children:"Back to admin"}),Object(x.jsxs)("div",{className:"timeslot-options-container",children:[Object(x.jsx)(N.DateRange,{className:"calendar",editableDateInputs:!0,onChange:function(e){return de([e.selection])},moveRangeOnFirstSelection:!1,ranges:le,value:le}),Object(x.jsx)("div",{className:"timeslot-details-group",children:Object(x.jsxs)("div",{className:"timeslot-option-flex",children:[Object(x.jsx)(A.a,{className:"event-detail-form",id:"filled",variant:"filled",label:"ILCA Event #",type:"text",value:Y,onChange:function(e){return _(e.target.value)}}),Object(x.jsxs)(L.a,{className:"event-detail-form",variant:"filled",children:[Object(x.jsx)(k.a,{id:"demo-simple-select-filled-label",children:"Timeslot Interval"}),Object(x.jsxs)(I.a,{id:"demo-simple-select-filled",value:n,onChange:function(e){a(e.target.value)},children:[Object(x.jsx)(B.a,{value:15,children:"15"}),Object(x.jsx)(B.a,{value:30,children:"30"}),Object(x.jsx)(B.a,{value:45,children:"45"}),Object(x.jsx)(B.a,{value:60,children:"60"})]})]}),Object(x.jsx)(A.a,{className:"event-detail-form",id:"filled-number",variant:"filled",label:"Timeslot Entry Limit",type:"number",value:y,onChange:function(e){return function(e){var t=e.target.value;(/^[0-9\b]+$/.test(t)||""===t)&&S(parseInt(t))}(e)}})]})}),Object(x.jsx)("div",{className:"start-end-times",children:Object(x.jsxs)("div",{className:"start-end-group-container",children:[Object(x.jsxs)("div",{className:"start-end-group",children:[Object(x.jsx)("div",{className:"label",children:Object(x.jsx)("strong",{children:"Start Time"})}),Object(x.jsx)(E.a,{showSecond:!1,allowEmpty:!1,minuteStep:15,value:Q,onChange:function(e){return X(M()(e._d))}})]}),Object(x.jsxs)("div",{className:"start-end-group",children:[Object(x.jsx)("div",{className:"label",children:Object(x.jsx)("strong",{children:"End Time"})}),Object(x.jsx)(E.a,{showSecond:!1,allowEmpty:!1,minuteStep:15,value:ce,onChange:function(e){return se(M()(e._d))}})]}),Object(x.jsxs)("div",{className:"start-end-group",children:[Object(x.jsx)("div",{className:"label",children:Object(x.jsx)("strong",{children:"Signup End Date"})}),Object(x.jsx)(R.a,{value:o,onChange:function(e){return(t=e).setHours(23),t.setMinutes(59),void d(t);var t}}),Object(x.jsx)("div",{children:Object(x.jsx)("i",{children:"@"})}),Object(x.jsxs)("strong",{children:[M()(o).format("HH:mm")," CST"]})]})]})})]}),Object(x.jsxs)("div",{className:"timeslot",children:[Object(x.jsx)("h3",{children:"Click individual slots below to make them unavailable"}),Object.keys(F).map((function(e,t){return Object(x.jsxs)("div",{className:"admin-slot-container",children:[Object(x.jsx)("div",{style:{textAlign:"center",marginBottom:10},children:Object(x.jsx)("strong",{children:M()(e).format("D MMMM YYYY")})}),Object(x.jsx)(p.a,{variant:"contained",style:{backgroundColor:"rgb(46, 134, 175)",marginBottom:20,color:"white"},onClick:function(){!function(e){var t=Object.assign({},F);t[e].unavailableSlots=[],U(t)}(e)},children:"Reset Unavailable Slots"}),Object(x.jsx)("div",{style:{marginBottom:8},children:Object(x.jsx)(q,{setSlotsAvailableByDay:U,slotsAvailableByDay:F,element:e})}),Object(x.jsx)("div",{style:{marginBottom:15},children:Object(x.jsx)(w.a,{interval:n,unavailableSlots:F[e].unavailableSlots,selected_date:new Date,from:W,to:te,onSelectTime:function(t){!function(e,t){var n=Object.assign({},F);n[e].unavailableSlots=[].concat(Object(j.a)(n[e].unavailableSlots),[t]),n[e].entriesLeft=n[e].entriesLeft.map((function(t,i){return n[e].unavailableSlots.indexOf(t[0])>-1?[t[0],0]:t})),U(n)}(e,t)}})})]},t)}))]}),Object(x.jsx)(p.a,{variant:"contained",color:"primary",style:{marginBottom:20,marginTop:40},onClick:function(){return ue()},children:"Submit Timeslot Sheet"}),Object(x.jsx)("hr",{style:{border:"1px solid black",width:"100%",marginBottom:40}})]})]})}),z=n(136),P=function(e){return f.a.get("https://ilca-inspection-server.herokuapp.com/signups/options").then((function(t){return t.data.filter((function(t){return t.ilcaNum===e}))}))},F=(n(313),function(e){var t=e.date,n=e.slotsByDay,i=e.getRegistered,a=e.moveToggle,c=e.toggledTime,s=e.toggledDate,r=e.unToggle,o=e.sailorToMove,l=e.moveSailorInDB,d=function(e){var t=e/60,n=e%60,i=Math.floor(t),a="".concat(i," : ").concat(0===n?"00":n);return Object(x.jsx)("div",{className:"admin-time",children:Object(x.jsx)("i",{children:a})})};return Object(x.jsxs)("div",{className:"admin-day",children:[Object(x.jsx)("h2",{style:{textAlign:"center",margin:10,borderBottom:"2px solid black",paddingBottom:10},children:M()(t).format("MMM. DD, yyyy")}),Object(x.jsx)("div",{className:"admin-day-slot-container",children:n?n[t].entriesLeft.map((function(e,n){return Object(x.jsx)("div",{className:"admin-slot",children:Object(x.jsxs)("div",{className:"admin-reg-sailors-container",children:[M()(t).format("dddd, MMMM DD, yyyy"),d(e[0])," ",Object(x.jsx)("div",{className:"reg-sailor-flex",children:i(e[0],t)}),!0===a&&e[0]===c&&t===s?Object(x.jsx)(p.a,{variant:"contained",style:{backgroundColor:"darkorange",marginBottom:10},onClick:function(){return r()},children:"Cancel Edit"}):"",!0===a&&(e[0]!==c||t!==s)&&e[1]>0?Object(x.jsx)(p.a,{variant:"contained",style:{backgroundColor:"rgb(2, 114, 186)",color:"white",marginBottom:10},onClick:function(){l(o,e[0],t,n)},children:"Place Here"}):e[0]!==c?Object(x.jsx)(p.a,{variant:"contained",disabled:!0,style:{marginBottom:10},children:"Place Here"}):"",Object(x.jsxs)("div",{children:["Slots Available: ",Object(x.jsx)("strong",{children:e[1]})]})]})},n)})):""})]})}),U=function(){var e=Object(o.f)().ilcaNum,t=Object(i.useState)({}),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)([]),d=Object(l.a)(s,2),u=d[0],b=d[1],m=Object(i.useState)({}),h=Object(l.a)(m,2),O=h[0],y=h[1],S=Object(i.useState)({}),D=Object(l.a)(S,2),N=D[0],C=D[1],w=Object(i.useState)([]),k=Object(l.a)(w,2),I=k[0],L=k[1],B=Object(i.useState)(!1),A=Object(l.a)(B,2),T=A[0],E=A[1],Y=Object(i.useState)(0),q=Object(l.a)(Y,2),H=q[0],_=q[1],U=Object(i.useState)(""),V=Object(l.a)(U,2),J=V[0],W=V[1],$=Object(i.useState)(""),G=Object(l.a)($,2),K=G[0],Q=G[1],X=Object(i.useState)({}),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ne=Object(i.useState)([]),ie=Object(l.a)(ne,2),ae=ie[0],ce=ie[1],se=Object(i.useState)([]),re=Object(l.a)(se,2),oe=re[0],le=re[1],de=Object(i.useState)([{label:"Sailor ID",key:"isaf"},{label:"First Name",key:"firstName"},{label:"Family Name",key:"familyName"}]),ue=Object(l.a)(de,2),je=ue[0];ue[1];Object(i.useEffect)((function(){P(e).then((function(e){c(e[0])})),g(e).then((function(e){te(e)}))}),[]),Object(i.useEffect)((function(){a.slotsAvailableByDay&&(b(Object.keys(a.slotsAvailableByDay)),C(a.slotsAvailableByDay),L(a.inspectionReqs),y(new Date(M()(a.shutoffDate).format("M/D/YYYY"))))}),[a]),Object(i.useEffect)((function(){v(e).then((function(e){var t=I.map((function(e){return e.sailorID})),n=e.filter((function(e){return t.indexOf(e.isaf)<0}));ce(n)}))}),[I]),Object(i.useEffect)((function(){var e=[],t=[],n=[];for(var i in a.slotsAvailableByDay)for(var c in a.slotsAvailableByDay[i].entriesLeft){var s=a.slotsAvailableByDay[i].entriesLeft[c][0],r=Math.floor(s/60),o=s%60,l="".concat(r,":").concat(0===o?"00":o);t.push("".concat(i,", ").concat(l)),n.push([i,s])}for(var d=0;d<a.entryLimit;d++)e.push([]);console.log(e);for(var u=function(t){for(var i=n[t],a=I.filter((function(e){return e.day===i[0]&&e.time===i[1]})),c=0;c<e.length;c++)if(a.length>0){var s=a.shift(),r="".concat(s.name.firstName," ").concat(s.name.familyName);e[c][t]=r}else e[c][t]=""},j=0;j<n.length;j++)u(j);e.unshift(t),le(e)}),[I]);var be=function(){E(!1),Q(""),_(0)},me=function(t,n,i,a){!function(e,t,n,i,a,c,s,r){var o=a.filter((function(t){return t.sailorID!==e})),l=a.filter((function(t){return t.sailorID===e}))[0],d=Object.assign(l,{time:n,day:i}),u=[].concat(Object(j.a)(o),[d]),b=s[i].entriesLeft.map((function(e,n){return n===r?[e[0],e[1]-1]:e[0]===t?[e[0],e[1]+1]:e})),m=Object.assign(s,{});m[i].entriesLeft=b,f.a.put("https://ilca-inspection-server.herokuapp.com/signups/updateinspecs/".concat(c),{inspectionReqs:u,slotsAvailableByDay:m})}(t,H,n,i,I,e,N,a),E(!1),Q(""),_(0)},fe=function(){!function(e,t){P(e).then((function(n){var i=n[0].inspectionReqs.filter((function(e){return e.sailorID!==t}));f.a.put("https://ilca-inspection-server.herokuapp.com/signups/removesailor/".concat(t,"/").concat(e),{inspectionReqs:i})}))}(e,K),setTimeout(he,500)},he=function(){window.location.reload()},Oe=function(e,t){return I.filter((function(n){return n.time===e&&n.day===t})).map((function(e,t){return Object(x.jsxs)("div",{className:"reg-sailor",children:[e.sailorID===K?Object(x.jsxs)("strong",{style:{color:"orange"},children:[Object(x.jsx)("div",{children:Object(x.jsx)("i",{children:e.sailorID})}),Object(x.jsx)("div",{children:Object(x.jsxs)("i",{children:[e.name.firstName[0],". ",e.name.familyName]})})]}):Object(x.jsxs)("strong",{children:[Object(x.jsx)("div",{children:e.sailorID}),Object(x.jsxs)("div",{children:[e.name.firstName[0],". ",e.name.familyName]})]}),!1===T?Object(x.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return function(e,t,n){E(!0),Q(e),_(t),W(n)}(e.sailorID,e.time,e.day)},children:"Edit"}):e.sailorID===K?Object(x.jsx)(p.a,{variant:"contained",style:{backgroundColor:"rgb(194, 60, 75)",color:"white"},onClick:function(){return fe()},children:"Delete Sailor"}):Object(x.jsx)(p.a,{variant:"contained",disabled:!0,children:"Edit"})]},t)}))},ge=function(t){!function(e){f.a.delete("https://ilca-inspection-server.herokuapp.com/signups/delete/".concat(e))}(e),setTimeout(ve,500),t.preventDefault()},ve=function(){window.location.href="/ilca-signup"},pe=function(t){t.setHours(23),t.setMinutes(59),function(e,t){console.log(e),f.a.put("https://ilca-inspection-server.herokuapp.com/signups/updateshutoff/".concat(t),{shutoffDate:e})}(t,e),setTimeout(he,500)};return Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:ee.logo?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%"},className:"event-header",children:[Object(x.jsx)("img",{src:"http://www.laserinternational.org/wp-content/uploads/2020/03/ILCA-logo-and-full-name-blue-and-grey.jpg",alt:"ILCA Logo",style:{width:200}}),Object(x.jsx)("i",{children:Object(x.jsx)("h3",{style:{fontSize:30,textAlign:"center"},children:ee.title})}),Object(x.jsx)("img",{src:ee.logo,alt:"Event Logo",style:{width:200}})]}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(x.jsx)(r.b,{style:{margin:"auto",fontSize:20,textAlign:"center",marginTop:20,marginBottom:30},to:"/ilca-signup",children:"Back to Admin"}),Object(x.jsx)(r.b,{to:"/ilca-signup/signup/".concat(a.uuid),style:{marginBottom:20},children:"Link To Sailor Signup"}),Object(x.jsx)(z.CSVLink,{className:"link",data:ae,headers:je,filename:"remaining_sailors_for_event_".concat(e,".csv"),children:"Download CSV of Sailors Not Registered For Inspection"}),Object(x.jsx)(z.CSVLink,{className:"link",data:oe,filename:"sailor_inspection_list_for_event_".concat(e,".csv"),children:"Download CSV of Sailors Registered For Inspection"}),Object(x.jsxs)("div",{className:"admin-date-picker",children:[Object(x.jsx)("strong",{style:{marginBottom:6},children:"Change Signup Cutoff Date"}),Object(x.jsx)(R.a,{value:O,onChange:function(e){return t=e,void y(new Date(M()(t).format("M/D/YYYY")));var t}}),Object(x.jsx)("div",{style:{textAlign:"center",marginTop:5},children:Object(x.jsx)("strong",{children:"At 23:59 CST"})}),Object(x.jsx)(p.a,{variant:"contained",style:{backgroundColor:"rgb(2, 114, 186)",color:"white",marginTop:10},onClick:function(){return pe(O)},children:"Commit Time Change"})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{children:u.length>0?u.map((function(e,t){return Object(x.jsx)(F,{date:e,slotsByDay:N,getRegistered:Oe,moveToggle:T,toggledTime:H,toggledDate:J,unToggle:be,sailorToMove:K,moveSailorInDB:me},t)})):""}),Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(x.jsx)(p.a,{style:{backgroundColor:"rgb(194, 60, 75, 1)",color:"ivory",maxWidth:300,margin:"auto !important",marginBottom:30},onClick:function(e){return ge(e)},children:"Delete This Signup Sheet"})})]}):Object(x.jsx)("div",{style:{margin:"auto",marginTop:"25%",fontSize:40},children:"Loading..."})})},V=n(138),J=n(361),W=function(e){var t=e.date,n=e.slotsByDay,i=e.getRegistered,a=e.currentSailor,c=e.setSelected,s=e.selectedTime,r=e.isSelected,o=e.deselect,l=e.submitInspectionReq,d=e.selectedDate,u=function(e){var t=e/60,n=e%60,i=Math.floor(t),a="".concat(i," : ").concat(0===n?"00":n);return Object(x.jsx)("div",{className:"admin-time",children:Object(x.jsx)("i",{children:a})})};return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"admin-day",children:[Object(x.jsx)("h2",{style:{textAlign:"center",margin:10,borderBottom:"2px solid black",paddingBottom:10},children:M()(t).format("MMMM DD, yyyy")}),Object(x.jsx)("div",{className:"admin-day-slot-container",children:n?n[t].entriesLeft.map((function(e,n){return Object(x.jsx)("div",{className:"admin-slot",children:Object(x.jsxs)("div",{className:"admin-reg-sailors-container",children:[M()(t).format("dddd, MMMM DD, yyyy")," ",u(e[0])," ",Object(x.jsx)("div",{className:"reg-sailor-flex",children:i(e[0],t)}),Object(x.jsxs)("div",{style:{marginBottom:10},children:["Slots Available: ",Object(x.jsx)("i",{children:e[1]})]}),Object(x.jsx)("div",{children:e[1]>0?a.firstName?!0===r?e[0]===s&&t===d?Object(x.jsxs)("div",{className:"submission-cancellation-button-container",children:[Object(x.jsx)(p.a,{className:"submission-cancellation-button",variant:"contained",style:{backgroundColor:"rgb(194, 60, 75)",color:"white",marginRight:10,width:180},onClick:function(){return o(t,e)},children:"Cancel Placement"}),Object(x.jsx)(p.a,{className:"submission-cancellation-button",variant:"contained",style:{backgroundColor:"lightgreen",marginLeft:10,width:180},onClick:function(e){return l(e)},children:"Submit Request"})]}):Object(x.jsxs)(p.a,{className:"submission-cancellation-button",variant:"contained",disabled:!0,children:["Place ",a.firstName," ",a.familyName," Here"]}):Object(x.jsxs)(p.a,{className:"submission-cancellation-button",variant:"contained",color:"primary",onClick:function(){return c(t,e)},children:["Place ",a.firstName," ",a.familyName," Here"]}):Object(x.jsx)(p.a,{variant:"contained",color:"primary",disabled:!0,style:{marginBottom:5,marginTop:5},children:"Place Sailor Here"}):""})]})},n)})):""})]})})},$=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(l.a)(c,2),r=s[0],d=s[1],u=Object(i.useState)([]),j=Object(l.a)(u,2),b=j[0],m=j[1],f=Object(i.useState)({}),p=Object(l.a)(f,2),y=p[0],S=p[1],D=Object(i.useState)([]),N=Object(l.a)(D,2),C=N[0],w=N[1],k=Object(i.useState)([]),I=Object(l.a)(k,2),L=I[0],B=I[1],T=Object(i.useState)([]),E=Object(l.a)(T,2),Y=E[0],R=E[1],q=Object(i.useState)(""),H=Object(l.a)(q,2),_=H[0],z=H[1],P=Object(i.useState)({}),F=Object(l.a)(P,2),U=F[0],$=F[1],G=Object(i.useState)(0),K=Object(l.a)(G,2),Q=K[0],X=K[1],Z=Object(i.useState)(!1),ee=Object(l.a)(Z,2),te=ee[0],ne=ee[1],ie=Object(i.useState)(""),ae=Object(l.a)(ie,2),ce=ae[0],se=ae[1],re=Object(i.useState)({}),oe=Object(l.a)(re,2),le=oe[0],de=oe[1],ue=Object(i.useState)(new Date),je=Object(l.a)(ue,2),be=je[0],me=(je[1],Object(o.f)().id);Object(i.useEffect)((function(){h().then((function(e){return fe(e)}))}),[]);var fe=function(e){var t=e.filter((function(e){return e.uuid===me}));!t.length>0?alert("This id doesn't match a registered Inspection Signup"):(a(t[0]),d(!0))};Object(i.useEffect)((function(){n.slotsAvailableByDay&&(m(Object.keys(n.slotsAvailableByDay)),S(n.slotsAvailableByDay),w(n.inspectionReqs),R(n.inspectionReqs.map((function(e,t){return e.sailorID})))),n.ilcaNum&&(g(n.ilcaNum).then((function(e){return de(e)})),v(n.ilcaNum).then((function(e){var t=e.sort((function(e,t){return e.isaf>t.isaf?1:-1}));B(t)})))}),[n]),Object(i.useEffect)((function(){var e=L.filter((function(e){return e.isaf===_}));e.length>0?$(e[0]):$({})}),[_]);var he=function(e,t){return C.filter((function(n){return n.time===e&&n.day===t})).map((function(e,t){return Object(x.jsx)("div",{className:"reg-sailor",children:Object(x.jsxs)("strong",{children:[e.name.firstName," ",e.name.familyName]})},t)}))},Oe=function(e,t){X(t[0]),ne(!0),se(e)},ge=function(e,t){X(0),ne(!1),se("")},ve=function(e){var t;(console.log(_,Q,ce),""!==_&&0!==Q&&""!==ce)?0!==L.filter((function(e){return e.isaf===_})).length?((t=me,h().then((function(e){return e.filter((function(e){return e.uuid===t}))[0].inspectionReqs}))).then((function(e){if(e.filter((function(e){return e.sailorID===_})).length>0)alert('Sailor with ID: "'.concat(_,'" already entered for inspection.'));else{var t=L.filter((function(e){return e.isaf===_})),i=t[0].firstName,a=t[0].familyName;console.log(i,a);var c={eventTitle:n.eventTitle,day:ce,time:Q,name:{firstName:i,familyName:a},sailorID:_};O(me,ce,Q,y,c),setTimeout(pe,500)}})),e.preventDefault()):alert('Sailor with ID: "'.concat(_,'" not found in current race entries. Sailor must be entered to request inspection')):alert("please enter Sailor ID and select a day and timeslot")},pe=function(){window.location.reload()};return Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:!1!==r&&le.logo?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%"},className:"event-header",children:[Object(x.jsx)("img",{src:"http://www.laserinternational.org/wp-content/uploads/2020/03/ILCA-logo-and-full-name-blue-and-grey.jpg",alt:"ILCA Logo",style:{width:200}}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},children:[Object(x.jsx)("i",{children:Object(x.jsx)("h3",{style:{fontSize:30,textAlign:"center",marginBottom:10},children:le.title})}),Object(x.jsx)("h3",{style:{fontSize:24},children:"Equipment Inspection Signup"})]}),Object(x.jsx)("img",{src:le.logo,alt:"Event Logo",style:{width:200}})]}),Object(x.jsx)("hr",{style:{height:2,border:0,backgroundColor:"grey",marginTop:20}}),Object(x.jsx)("div",{style:{margin:"auto",textAlign:"center",fontSize:20,marginBottom:30},children:Object(x.jsx)("h3",{children:"".concat(le.country,", ").concat(le.city)})}),Object(x.jsx)("div",{style:{margin:"auto",textAlign:"center",fontSize:20,marginBottom:30},children:Object(x.jsxs)("strong",{children:[M()(le.startDate.date).format("dddd, MMMM Do, YYYY")," ","\u2014"," ",M()(le.endDate.date).format("dddd, MMMM Do, YYYY")]})}),Object(x.jsxs)("div",{style:{margin:"auto",textAlign:"center",fontSize:20},children:["1. Begin typing a sailor's name or sailor ID in the form below ",Object(x.jsx)("br",{}),"2. Select the timeslot you'd like to have for equipment inspection ",Object(x.jsx)("br",{}),"3. Click the submit button",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"If you submitted a time but would like to change it, please contact the ILCA office"})]}),be<new Date(n.shutoffDate)?Object(x.jsxs)("form",{className:"signup-form",children:[Object(x.jsx)(J.a,{id:"combo-box-demo",options:L.filter((function(e){return Y.indexOf(e.isaf)<0})),getOptionLabel:function(e){return"".concat(e.isaf," \u2013 ").concat(e.firstName," ").concat(e.familyName)},getOptionSelected:function(e){return e.isaf},onChange:function(e,t){z(t?t.isaf:""),ne(!1)},style:{width:300},renderInput:function(e){return Object(x.jsx)(A.a,Object(V.a)(Object(V.a)({},e),{},{label:"Sailor",variant:"outlined",value:_}))}}),Object(x.jsx)("div",{children:U.isaf?Object(x.jsxs)("h3",{children:[U.isaf," - ",U.firstName," ",U.familyName]}):Object(x.jsx)("h3",{children:"Please Select Sailor"})})]}):Object(x.jsx)("h3",{style:{textAlign:"center",color:"red"},children:Object(x.jsx)("i",{children:"Inspection Signup Has Expired"})}),b.length>0?b.map((function(e,t){return Object(x.jsx)(W,{date:e,slotsByDay:y,getRegistered:he,currentSailor:U,setSelected:Oe,selectedTime:Q,selectedDate:ce,isSelected:te,deselect:ge,submitInspectionReq:ve},t)})):""]}):Object(x.jsx)("div",{className:"timeslot-search-container",children:Object(x.jsx)("h1",{children:"Loading Inspection Signup..."})})})};var G=function(){return Object(x.jsx)(r.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/ilca-signup",component:y}),Object(x.jsx)(o.a,{exact:!0,path:"/ilca-signup/admin/create",component:_}),Object(x.jsx)(o.a,{path:"/ilca-signup/signup/:id",component:$}),Object(x.jsx)(o.a,{path:"/ilca-signup/admin/event/:ilcaNum",component:U}),Object(x.jsx)(o.a,{path:"/",component:S})]})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root"))},55:function(e,t,n){}},[[315,1,2]]]);
//# sourceMappingURL=main.0c04d23d.chunk.js.map