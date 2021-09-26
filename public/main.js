(()=>{"use strict";const e=[{cardId:"1",img:"./src/data/images/tones/card01.png",text:"C1",sound:"./src/data/sounds/piano/card01.mp3"},{cardId:"2",img:"./src/data/images/tones/card02.png",text:"D1",sound:"./src/data/sounds/piano/card02.mp3"},{cardId:"3",img:"./src/data/images/tones/card03.png",text:"E1",sound:"./src/data/sounds/piano/card03.mp3"},{cardId:"4",img:"./src/data/images/tones/card04.png",text:"F1",sound:"./src/data/sounds/piano/card04.mp3"},{cardId:"5",img:"./src/data/images/tones/card05.png",text:"G1",sound:"./src/data/sounds/piano/card05.mp3"},{cardId:"6",img:"./src/data/images/tones/card06.png",text:"A1",sound:"./src/data/sounds/piano/card06.mp3"},{cardId:"7",img:"./src/data/images/tones/card07.png",text:"B1",sound:"./src/data/sounds/piano/card07.mp3"},{cardId:"8",img:"./src/data/images/tones/card08.png",text:"C2",sound:"./src/data/sounds/piano/card08.mp3"},{cardId:"9",img:"./src/data/images/tones/card09.png",text:"C#1",sound:"./src/data/sounds/piano/card09.mp3"},{cardId:"10",img:"./src/data/images/tones/card10.png",text:"Eb1",sound:"./src/data/sounds/piano/card10.mp3"},{cardId:"11",img:"./src/data/images/tones/card11.png",text:"F#1",sound:"./src/data/sounds/piano/card11.mp3"},{cardId:"12",img:"./src/data/images/tones/card12.png",text:"Ab1",sound:"./src/data/sounds/piano/card12.mp3"},{cardId:"13",img:"./src/data/images/tones/card13.png",text:"Bb1",sound:"./src/data/sounds/piano/card13.mp3"},{cardId:"14",img:"./src/data/images/tones/card14.png",text:"D2",sound:"./src/data/sounds/piano/card14.mp3"},{cardId:"15",img:"./src/data/images/tones/card15.png",text:"E2",sound:"./src/data/sounds/piano/card15.mp3"},{cardId:"16",img:"./src/data/images/tones/card16.png",text:"F2",sound:"./src/data/sounds/piano/card16.mp3"},{cardId:"17",img:"./src/data/images/tones/card17.png",text:"G2",sound:"./src/data/sounds/piano/card17.mp3"},{cardId:"18",img:"./src/data/images/tones/card18.png",text:"A2",sound:"./src/data/sounds/piano/card18.mp3"},{cardId:"19",img:"./src/data/images/tones/card19.png",text:"B2",sound:"./src/data/sounds/piano/card19.mp3"},{cardId:"20",img:"./src/data/images/tones/card20.png",text:"C3",sound:"./src/data/sounds/piano/card20.mp3"},{cardId:"21",img:"./src/data/images/tones/card21.png",text:"C#2",sound:"./src/data/sounds/piano/card21.mp3"},{cardId:"22",img:"./src/data/images/tones/card22.png",text:"Eb2",sound:"./src/data/sounds/piano/card22.mp3"},{cardId:"23",img:"./src/data/images/tones/card23.png",text:"F#2",sound:"./src/data/sounds/piano/card23.mp3"},{cardId:"24",img:"./src/data/images/tones/card24.png",text:"Ab2",sound:"./src/data/sounds/piano/card24.mp3"},{cardId:"25",img:"./src/data/images/tones/card25.png",text:"Bb2",sound:"./src/data/sounds/piano/card25.mp3"},{cardId:"26",img:"./src/data/images/tones/card26.png",text:"C0",sound:"./src/data/sounds/piano/card26.mp3"},{cardId:"27",img:"./src/data/images/tones/card27.png",text:"D0",sound:"./src/data/sounds/piano/card27.mp3"},{cardId:"28",img:"./src/data/images/tones/card28.png",text:"E0",sound:"./src/data/sounds/piano/card28.mp3"},{cardId:"29",img:"./src/data/images/tones/card29.png",text:"F0",sound:"./src/data/sounds/piano/card29.mp3"},{cardId:"30",img:"./src/data/images/tones/card30.png",text:"G0",sound:"./src/data/sounds/piano/card30.mp3"},{cardId:"31",img:"./src/data/images/tones/card31.png",text:"A0",sound:"./src/data/sounds/piano/card31.mp3"},{cardId:"32",img:"./src/data/images/tones/card32.png",text:"B0",sound:"./src/data/sounds/piano/card32.mp3"},{cardId:"33",img:"./src/data/images/tones/card33.png",text:"C#0",sound:"./src/data/sounds/piano/card33.mp3"},{cardId:"34",img:"./src/data/images/tones/card34.png",text:"Eb0",sound:"./src/data/sounds/piano/card34.mp3"},{cardId:"35",img:"./src/data/images/tones/card35.png",text:"F#0",sound:"./src/data/sounds/piano/card35.mp3"},{cardId:"36",img:"./src/data/images/tones/card36.png",text:"Ab0",sound:"./src/data/sounds/piano/card36.mp3"},{cardId:"37",img:"./src/data/images/tones/card37.png",text:"Bb0",sound:"./src/data/sounds/piano/card37.mp3"}],t=(e,t,a,c)=>{e.forEach((e=>{t(),a(),e.addEventListener("click",c),e.style.pointerEvents="auto"}))};function a(e){return e[Math.floor(Math.random()*e.length)]}const c=(e,t,a)=>{e.classList.add(t),Object.keys(a).forEach((t=>{e.setAttribute(t,a[t])}))},r=document.querySelector("#visualButton"),o=document.querySelector("#soundButton"),s=document.querySelector("#timeButton");function d(e,t,a){return[e.disabled=!0,t.disabled=!0,a.disabled=!0,r.style.opacity=.3,o.style.opacity=.3,s.style.opacity=.3]}const n=e=>gsap.to(e,{duration:.25,autoAlpha:0}),i=()=>{const e=document.querySelectorAll(".back"),t=document.querySelector("#container"),a=document.querySelector("#border"),c=document.querySelector("#startGameButton"),r=document.querySelectorAll(".roundedLevelTimer"),o=document.querySelectorAll(".gameButtons"),s=document.querySelector("#levelAfterWin"),d=document.querySelectorAll(".switch"),n=document.querySelector("#switchTheme"),i=document.querySelector("#rulesWrapper"),u=document.querySelectorAll(".rulesImages"),l=document.querySelectorAll(".indicatorWrapper"),p=document.querySelector("#messageWrapper"),g=document.querySelector("#continueAfterWin"),m="2px 2px 2px #0D0D10, inset 3px 3px 3px #313132, inset -3px -3px 3px rgba(29, 29, 30, 100)",y="2px 2px 2px #D7D7D9, inset 3px 3px 3px rgb(255, 255, 255), inset -3px -3px 3px rgba(174, 174, 192, 0.25)",b="inset -3px -3px 6px rgba(57, 57, 57, 0.5), inset 3px 3px 6px rgba(14, 14, 15, 100)",h="inset -3px -3px 6px rgb(255, 255, 255), inset 3px 3px 6px rgb(210, 210, 211, 100)",x="0.5px solid #1A1A1B",k="0.5px solid #FFFFFF",v="#262627",E="#F0F0F3";n.checked?(setTimeout((()=>{e.forEach((e=>{e.src="./src/data/images/backW.svg"}))}),25),u.forEach((e=>{let t=e.src.split("");t.splice(t.length-5,1,"W"),e.src=t.join("")})),Object.assign(p.style,{backgroundColor:"rgba(240, 240, 243, 0.8)",color:v}),Object.assign(t.style,{backgroundColor:E,color:v}),Object.assign(a.style,{backgroundColor:E,boxShadow:y}),Object.assign(c.style,{backgroundColor:E,boxShadow:y}),Object.assign(g.style,{backgroundColor:E,color:v,boxShadow:y}),Object.assign(s.style,{backgroundColor:v,color:E}),r.forEach((e=>{Object.assign(e.style,{backgroundColor:E,boxShadow:h,border:k})})),l.forEach((e=>{Object.assign(e.style,{backgroundColor:E,boxShadow:"inset -3px -3px 6px rgba(255, 255, 255, 0.5), inset 3px 3px 3px rgba(210, 210, 211, 0.5)",border:k})})),o.forEach((e=>{Object.assign(e.style,{backgroundColor:E,color:v,boxShadow:y,border:k})})),d.forEach((e=>{Object.assign(e.style,{backgroundColor:E,boxShadow:y,border:k})})),Object.assign(i.style,{backgroundColor:E,color:v,boxShadow:h})):(setTimeout((()=>{e.forEach((e=>{e.src="./src/data/images/backB.svg"}))}),25),u.forEach((e=>{let t=e.src.split("");t.splice(t.length-5,1,"B"),e.src=t.join("")})),Object.assign(p.style,{backgroundColor:"rgba(38, 38, 39, 0.95)",color:E}),Object.assign(t.style,{backgroundColor:v,color:E}),Object.assign(a.style,{backgroundColor:v,boxShadow:m}),Object.assign(c.style,{backgroundColor:v,boxShadow:m}),Object.assign(g.style,{backgroundColor:v,color:E,boxShadow:m}),Object.assign(s.style,{backgroundColor:E,color:v}),r.forEach((e=>{Object.assign(e.style,{backgroundColor:v,boxShadow:b,border:x})})),l.forEach((e=>{Object.assign(e.style,{backgroundColor:v,boxShadow:"inset -3px -3px 6px rgba(57, 57, 57, 0.5), inset 3px 3px 3px rgb(28, 28, 29, 0.5)",border:x})})),o.forEach((e=>{Object.assign(e.style,{backgroundColor:v,color:E,boxShadow:m,border:x})})),d.forEach((e=>{Object.assign(e.style,{backgroundColor:v,boxShadow:m,border:x})})),Object.assign(i.style,{backgroundColor:v,color:E,boxShadow:b}))},u=document.querySelector("#gameBoard"),l=document.querySelector("#cardSignal"),p=document.querySelector("#resetGame"),g=document.querySelector("#startGameInput"),m=document.querySelector("#nextLevel"),y=document.querySelector("#continueAfterWin"),b=document.querySelector("#levelAfterWin"),h=document.querySelector("#currentLevel"),x=document.querySelector("#timer"),k=document.querySelector("#messageWrapper"),v=document.querySelector("#message"),E=document.querySelector("#openRulesButton"),f=document.querySelector("#closeRulesButton"),L=document.querySelector("#rulesWrapper"),S=document.querySelector("#switchVisual"),I=document.querySelector("#switchSound"),q=document.querySelector("#switchTime"),O=document.querySelector("#switchTheme"),w=document.querySelector("#startGameImage"),C=document.querySelector("#firstCardIndicator"),j=document.querySelector("#secondCardIndicator"),A="#06A7A7",T="#FF7070",B="#B7E10F";let F,W,M,D,G,H,N,P=!0,R=!0,V=!0,z=!0,J=0,K=0,Q=1;function U(){var e;V?(e=L,gsap.to(e,{duration:.25,autoAlpha:1}),V=!1,de(),w.style.opacity=.2,u.removeEventListener("click",X),g.removeEventListener("change",ne)):(n(L),V=!0,w.style.opacity=1,u.addEventListener("click",X),g.addEventListener("change",ne))}function X(){!g.checked&&P&&se(),P=!1}function Y(){Q<4?(Q++,h.innerHTML=Q,M=0,ue(),l.style.opacity=0):(J=0,ie())}function Z(){return[C.style.background="",j.style.background=""]}function $(){var e;K<2&&K++,1===K&&(D=this,D.style.pointerEvents="none",C.style.background=N<=10?T:B),2===K&&(G=this,((e,t,a,c)=>{e.forEach((e=>{e.removeEventListener("click",t),e.removeEventListener("click",a),e.removeEventListener("click",c)}))})(W,ee,te,$),j.style.background=N<=10?T:B,D.cardId===G.cardId?(q.checked||(N+=3===Q||4===Q?11:6,e=x,gsap.fromTo(e,{scale:1.25,color:"#B7E10F"},{delay:.25,duration:.25,ease:Power3.easeInOut,scale:1})),setTimeout((()=>{D.style.visibility="hidden",G.style.visibility="hidden",Z(),t(W,ae,ce,$)}),500),K=0,M-=2):setTimeout((()=>{D.classList.remove("rotate"),G.classList.remove("rotate"),K=0,t(W,ae,ce,$),Z()}),500)),0===M&&Q<=4&&setTimeout((()=>{_(),v.innerHTML="Great job!",x.style.color=A,J=N}),1e3),0===M&&Q>4&&ie()}function _(){var e,t,a,c;de(),m.removeEventListener("click",Y),p.removeEventListener("click",ie),E.removeEventListener("click",U),u.removeEventListener("click",X),p.style.opacity=.35,m.style.opacity=.35,E.style.opacity=.35,g.disabled=!0,w.classList.add("addOpacity"),e=k,t=v,a=y,c=b,gsap.to(e,{duration:.5,autoAlpha:1}),gsap.fromTo(t,{opacity:0},{delay:.25,duration:1,ease:Power3.easeInOut,opacity:1}),gsap.fromTo(a,{opacity:0,autoAlpha:0},{delay:.75,duration:.5,ease:Power3.easeInOut,opacity:1,autoAlpha:1}),gsap.fromTo(c,{opacity:0,autoAlpha:0},{delay:.75,duration:.5,ease:Power3.easeInOut,opacity:1,autoAlpha:1})}function ee(){K<2?this.classList.add("rotate"):W.forEach((e=>{e.removeEventListener("click",ee)}))}function te(){let e=this.childNodes[2];e.currentTime=0,K<2?(e.volume=1,e&&e.play()):W.forEach((e=>{e.removeEventListener("click",te)}))}function ae(){W.forEach((e=>{S.checked?e.removeEventListener("click",ee):e.addEventListener("click",ee)}))}function ce(){W.forEach((e=>{I.checked?e.removeEventListener("click",te):e.addEventListener("click",te)}))}function re(){R&&N--,x.innerHTML=N,x.style.color=N<=10?T:A,0===N&&(oe(),z=!0,_(),v.innerHTML="More luck next time!",function(){const e=[1,.85,.75,.65,.55,.33,1,1,1,.95];W.forEach(((t,c)=>{setTimeout((()=>{"hidden"!==t.style.visibility&&t.classList.add("rotate"),!I.checked&&z&&(t.childNodes[2].play(),t.childNodes[2].volume=a(e))}),175*c)}))}())}function oe(){return clearInterval(H)}function se(){w.src="./src/data/images/pause.png",g.checked=!0,P=!1,H=setInterval(re,1e3),function(e,t,a){e.disabled=!1,t.disabled=!1,a.disabled=!1,r.style.opacity=1,o.style.opacity=1,s.style.opacity=1}(S,I,q),R=!q.checked,W.forEach((e=>{S.checked?e.removeEventListener("click",ee):e.addEventListener("click",ee),I.checked?e.removeEventListener("click",te):e.addEventListener("click",te),e.addEventListener("click",$)}))}function de(){return[g.checked=!1,w.src="./src/data/images/start.png",oe(),R=!1,P=!0,d(S,I,q),W.forEach((e=>{e.removeEventListener("click",ee),e.removeEventListener("click",te),e.removeEventListener("click",$)}))]}function ne(){g.checked?se():de()}function ie(){M=0,Q=1,l.style.opacity=0,ue(),de()}function ue(){u.innerHTML=null,K=0,Z(),n(k),function(){let t=e.filter(((e,t)=>t<8)),a=e.filter(((e,t)=>t<13)),c=e.filter(((e,t)=>t<25)),r=e.filter(((e,t)=>t<37));switch(Q){case 1:M=16,F=t.concat(t),N=20,Object.assign(u.style,{width:"340px",height:"auto"});break;case 2:M=26,F=a.concat(a),N=30+J,Object.assign(u.style,{width:"510px",height:"auto"});break;case 3:M=50,F=c.concat(c),N=40+J,Object.assign(u.style,{width:"680px",height:"auto"});break;case 4:M=74,F=r.concat(r),N=50+J,Object.assign(u.style,{width:"840px",height:"auto"});break;default:M=0,F=[],N=0}}(),((e,t,a)=>{e.forEach((()=>{const e=document.createElement("div");e.classList.add("cardWrapper"),t.appendChild(e);const r=document.createElement("img"),o=document.createElement("img"),s=document.createElement("audio");c(o,"back",{src:a.checked?"./src/data/images/backW.svg":"./src/data/images/backB.svg",alt:"backImage"}),c(r,"front",{src:"",alt:"frontImage"}),c(s,"audio",{src:"",preload:"auto"}),e.append(r,o,s)}))})(F,u,O),W=document.querySelectorAll(".cardWrapper"),W.forEach((e=>{let t=a(F);e.cardId=t.cardId,e.childNodes[0].src=t.img,e.childNodes[2].src=t.sound;let c=F.indexOf(t);F.splice(c,1)})),gsap.to(".cardWrapper",.25,{opacity:1,repeat:0,ease:"power1.inOut",delay:1,stagger:{amount:1,from:"top"}}),gsap.to("#cardSignal",.25,{opacity:1,delay:1}),R=!0,x.style.color=A,g.disabled=!1,w.classList.remove("addOpacity"),d(S,I,q),de(),m.addEventListener("click",Y),p.addEventListener("click",ie),E.addEventListener("click",U),u.addEventListener("click",X),m.style.opacity=1,p.style.opacity=1,E.style.opacity=1,x.innerHTML=N,h.innerHTML=Q}g.addEventListener("change",ne),S.addEventListener("change",ae),I.addEventListener("change",ce),q.addEventListener("change",(function(){R=!q.checked})),p.addEventListener("click",ie),y.addEventListener("click",(function(){z=!1,Y()})),b.addEventListener("click",(function(){z=!1,J=0,ue()})),f.addEventListener("click",U),O.addEventListener("change",i),ue(),gsap.to("#infoWrapper",{duration:2,delay:1,opacity:1}),gsap.to("#divider",{duration:2,delay:1,opacity:1}),gsap.to("#timer",{duration:2,delay:2,opacity:1}),gsap.to("#currentLevel",{duration:2,delay:2,opacity:1}),i()})();