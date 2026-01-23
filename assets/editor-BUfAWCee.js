import"./modulepreload-polyfill-B5Qt9EMX.js";function X(e){return Math.round(e)+"px"}function K(e){const t=["el",e.type];return e.type==="shape"&&e.shapeType&&t.push(e.shapeType),t.join(" ")}function V(e){const t={left:X(e.x),top:X(e.y),width:X(e.w),height:X(e.h),position:"absolute"};if(e.type==="text"||e.type==="button")if(e.color&&(t.color=e.color),e.fontSize&&(t.fontSize=X(e.fontSize)),e.fontWeight&&(t.fontWeight=e.fontWeight),e.fontFamily&&(t.fontFamily=e.fontFamily),e.textAlign&&(t.textAlign=e.textAlign),e.fontStyle&&(t.fontStyle=e.fontStyle),e.type==="button"){t.display="flex",t.alignItems="center";const n={left:"flex-start",right:"flex-end",center:"center"};t.justifyContent=n[e.textAlign]||"center",t.textAlign=e.textAlign}else e.textAlign&&(t.textAlign=e.textAlign);return e.type==="table"&&(t.overflow="visible"),t}function Me(e){let t={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",boxSizing:"border-box"};return e.fillColor&&(t.background=e.fillColor),e.opacity!==void 0&&(t.opacity=e.opacity),e.borderColor&&(t.borderColor=e.borderColor,t.borderWidth="2px",t.borderStyle="solid"),t}function Pe(e){return Object.entries(e).map(([t,n])=>`${t.replace(/[A-Z]/g,i=>"-"+i.toLowerCase())}:${n}`).join(";")}function ue(e){const t=V(e);return Object.entries(t).map(([n,o])=>`${n.replace(/[A-Z]/g,r=>"-"+r.toLowerCase())}:${o}`).join(";")}function Q(e){return e.backgroundColor?e.backgroundColor:"#ffffff"}let je=1;function T(){return crypto?.randomUUID?.()||"id_"+Math.random().toString(16).slice(2)}function Y(){return"slide-"+je+++".html"}function x(e,t,n){return Math.max(t,Math.min(n,e))}const g={activeSlide:0,slides:[{id:T(),backgroundColor:"#ffffff",backgroundGradient:"",elements:[{id:T(),type:"text",x:90,y:80,w:520,h:70,html:"Titre de la slide",color:"#111827",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"},{id:T(),type:"shape",x:90,y:190,w:420,h:160,shapeType:"rectangle",fillColor:"#7c5cff",borderColor:"#37d6ff",opacity:1},{id:T(),type:"button",x:90,y:380,w:220,h:50,html:"Clique ici",color:"#ffffff",fontSize:16,fontWeight:700,fontFamily:"Arial",textAlign:"center"}]}]};function ze(){try{localStorage.setItem("slides_state",JSON.stringify(g)),console.log("✓ État sauvegardé")}catch(e){console.error("Erreur lors de la sauvegarde:",e)}}function De(){try{const e=localStorage.getItem("slides_state");if(e){const t=JSON.parse(e);return g.activeSlide=t.activeSlide,g.slides=t.slides,console.log("✓ État restauré"),!0}}catch(e){console.error("Erreur lors du chargement:",e)}return!1}function N(){return g.slides[g.activeSlide]}let Ee=null;function A(e){Ee=e}function le(){return Ee}const L=document.getElementById("slide"),z=document.getElementById("thumbs");document.getElementById("toolSearch");const Z=document.getElementById("zoomChip");function W(){const e=L?.style?.transform?.match(/scale\(([\d.]+)\)/);return e?parseFloat(e[1]):1}function U(e){L&&(e=x(e,.35,2),L.style.transformOrigin="middle top",L.style.transform=`scale(${e})`,Z&&(Z.textContent=`Zoom: ${Math.round(e*100)}%`))}let te=null;function Re({render:e}){te=e}function k(){typeof te=="function"&&te()}function O(e,t=null){window.getSelection().toString()&&(t?document.execCommand(e,!1,t):document.execCommand(e,!1,null))}function D(e){["pointerdown","mousedown","click"].forEach(t=>{e.addEventListener(t,n=>{n.stopPropagation()})})}function He(e){["pointerdown","pointermove","pointerup","mousedown","mousemove","mouseup","click"].forEach(n=>{e.addEventListener(n,o=>{o.stopPropagation()},!0)})}function xe(e,t,n){const o=document.createElement("div");o.className="custom-dropdown";const i=document.createElement("button");i.className="custom-dropdown-button",i.textContent=e.find(a=>a.value===t)?.label||t;const r=document.createElement("div");return r.className="custom-dropdown-menu",r.style.display="none",D(r),D(i),e.forEach(a=>{const c=document.createElement("div");c.className="custom-dropdown-item",a.value===t&&c.classList.add("selected"),c.textContent=a.label,c.addEventListener("click",()=>{i.textContent=a.label,r.style.display="none",r.querySelectorAll(".custom-dropdown-item").forEach(l=>l.classList.remove("selected")),c.classList.add("selected"),n(a.value)}),r.appendChild(c)}),i.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"flex":"none"}),document.addEventListener("click",a=>{o.contains(a.target)||(r.style.display="none")}),o.appendChild(i),o.appendChild(r),o}function pe(e){const t=document.createElement("div");t.className="text-toolbar",t.addEventListener("mousedown",s=>s.stopPropagation()),t.addEventListener("click",s=>s.stopPropagation());const n=document.createElement("input");n.type="color",n.value=e.color||"#111827",n.title="Couleur du texte",D(n),n.addEventListener("input",s=>{e.color=s.target.value;const d=n.closest(".el");d&&(d.style.color=e.color)}),n.addEventListener("change",()=>{k()});const o=xe([{value:"Arial",label:"Arial"},{value:"Georgia",label:"Georgia"},{value:"Times New Roman",label:"Times New Roman"},{value:"Courier New",label:"Courier New"},{value:"Verdana",label:"Verdana"}],e.fontFamily||"Arial",s=>{window.getSelection().toString()?O("fontName",s):(e.fontFamily=s,k())}),i=document.createElement("input");i.type="number",i.value=e.fontSize||28,i.min=8,i.max=120,i.style.width="60px",i.addEventListener("change",s=>{const d=window.getSelection();if(d.toString())try{const m=d.getRangeAt(0),b=document.createElement("span");b.style.fontSize=s.target.value+"px",m.surroundContents(b)}catch{O("fontSize",7)}else e.fontSize=parseInt(s.target.value),k()});const r=document.createElement("button");r.innerHTML="B",r.title="Gras",r.className=e.fontWeight==="bold"||e.fontWeight>=700?"active":"",r.addEventListener("click",()=>{window.getSelection().toString()?O("bold"):(e.fontWeight=e.fontWeight==="bold"||e.fontWeight>=700?400:700,k())});const a=document.createElement("button");a.innerHTML="I",a.title="Italique",a.style.fontStyle="italic",a.addEventListener("click",()=>{window.getSelection().toString()?O("italic"):(e.fontStyle=e.fontStyle==="italic"?"normal":"italic",k())});const c=document.createElement("button");c.innerHTML="⫷",c.title="Aligner à gauche",c.className=e.textAlign==="left"?"active":"",c.addEventListener("click",()=>{window.getSelection().toString()?O("justifyLeft"):(e.textAlign="left",k())});const l=document.createElement("button");l.innerHTML="≡",l.title="Centrer",l.className=e.textAlign==="center"?"active":"",l.addEventListener("click",()=>{window.getSelection().toString()?O("justifyCenter"):(e.textAlign="center",k())});const u=document.createElement("button");return u.innerHTML="⫸",u.title="Aligner à droite",u.className=e.textAlign==="right"?"active":"",u.addEventListener("click",()=>{window.getSelection().toString()?O("justifyRight"):(e.textAlign="right",k())}),t.appendChild(n),t.appendChild(o),D(o),t.appendChild(i),t.appendChild(document.createElement("div")).className="divider",t.appendChild(r),t.appendChild(a),t.appendChild(document.createElement("div")).className="divider",t.appendChild(c),t.appendChild(l),t.appendChild(u),t}function Oe(e){const t=document.createElement("div");t.className="table-controls",t.addEventListener("mousedown",s=>s.stopPropagation()),t.addEventListener("click",s=>s.stopPropagation());const n=document.createElement("button");n.innerHTML="+ Ligne",n.addEventListener("click",()=>{e.rows=(e.rows||3)+1,e.data||(e.data=[]),e.data.push(Array(e.cols||3).fill("")),k()}),t.appendChild(n);const o=document.createElement("button");o.innerHTML="- Ligne",o.addEventListener("click",()=>{(e.rows||3)>1&&(e.rows=(e.rows||3)-1,e.data&&e.data.pop(),k())}),t.appendChild(o);const i=document.createElement("div");i.className="divider",t.appendChild(i);const r=document.createElement("button");r.innerHTML="+ Colonne",r.addEventListener("click",()=>{e.cols=(e.cols||3)+1,e.data?e.data.forEach(s=>s.push("")):e.data=Array(e.rows||3).fill(null).map(()=>Array(e.cols).fill("")),k()}),t.appendChild(r);const a=document.createElement("button");a.innerHTML="- Colonne",a.addEventListener("click",()=>{(e.cols||3)>1&&(e.cols=(e.cols||3)-1,e.data&&e.data.forEach(s=>s.pop()),k())}),t.appendChild(a);const c=document.createElement("div");c.className="divider",t.appendChild(c);const l=document.createElement("input");l.type="color",l.value=e.borderColor||"#cccccc",l.addEventListener("input",s=>{e.borderColor=s.target.value,k()}),l.addEventListener("pointerdown",()=>{lockColorPickerOverlaySoon()}),t.appendChild(l);const u=document.createElement("input");return u.type="color",u.value=e.headerColor||"#f3f4f6",u.addEventListener("input",s=>{e.headerColor=s.target.value,k()}),t.appendChild(u),t}function We(e){const t=document.createElement("div");t.className="shape-controls",t.addEventListener("mousedown",f=>f.stopPropagation()),t.addEventListener("click",f=>f.stopPropagation());function n(){setTimeout(()=>{const f=document.querySelector(".pcr-app")||document.querySelector(".color-picker")||document.querySelector(".colorPicker")||document.querySelector(".picker")||document.querySelector(".vc-sketch")||document.querySelector(".react-colorful");f&&He(f)},0)}const o=document.createElement("div");o.className="control-group";const i=document.createElement("label");i.textContent="Forme:";const r=xe([{value:"rectangle",label:"Rectangle"},{value:"circle",label:"Cercle"},{value:"triangle",label:"Triangle"},{value:"star",label:"Étoile"},{value:"diamond",label:"Losange"}],e.shapeType||"rectangle",f=>{e.shapeType=f,k()});o.appendChild(i),o.appendChild(r);const a=document.createElement("div");a.className="control-group";const c=document.createElement("label");c.textContent="Remplissage:";const l=document.createElement("input");l.type="color",l.value=e.fillColor||"#7c5cff",D(l),l.addEventListener("pointerdown",()=>{n()}),l.addEventListener("input",f=>{e.fillColor=f.target.value;const y=l.closest(".el")?.querySelector(".shape-content-wrapper");y&&(y.style.background=e.fillColor)}),l.addEventListener("change",()=>{k()}),a.appendChild(c),a.appendChild(l);const u=document.createElement("div");u.className="control-group";const s=document.createElement("label");s.textContent="Bordure:";const d=document.createElement("input");d.type="color",d.value=e.borderColor||"#37d6ff",D(d),d.addEventListener("pointerdown",()=>{n()}),d.addEventListener("input",f=>{e.borderColor=f.target.value;const y=d.closest(".el")?.querySelector(".shape-content-wrapper");y&&(y.style.borderColor=e.borderColor)}),d.addEventListener("change",()=>{k()}),u.appendChild(s),u.appendChild(d);const m=document.createElement("div");m.className="control-group";const b=document.createElement("label");b.textContent="Opacité:";const v=document.createElement("span");v.className="opacity-value",v.textContent=Math.round((e.opacity!==void 0?e.opacity:1)*100)+"%";const p=document.createElement("input");return p.type="range",p.min=0,p.max=1,p.step=.01,p.value=e.opacity!==void 0?e.opacity:1,D(p),D(m),p.addEventListener("input",f=>{e.opacity=parseFloat(f.target.value),v.textContent=Math.round(e.opacity*100)+"%";const y=p.closest(".el")?.querySelector(".shape-content-wrapper");y&&(y.style.opacity=e.opacity)}),p.addEventListener("change",()=>{k()}),m.appendChild(b),m.appendChild(p),m.appendChild(v),t.appendChild(o),t.appendChild(a),t.appendChild(u),t.appendChild(m),t}let ne=null;function Fe({render:e}){ne=e}function ae(){typeof ne=="function"&&ne()}let P=null,E=null;function ke(e){le()!==e&&(A(e),ae())}function qe(e,t){const n=e.target.closest(".el");if(!n||e.target.closest(".text-toolbar")||e.target.closest(".shape-controls")||e.target.closest(".table-controls")||e.target.classList.contains("handle"))return;const o=n.classList.contains("text")||n.classList.contains("button"),i=e.target.tagName==="TD"||e.target.tagName==="TH";if(o&&document.activeElement===n&&window.getSelection()?.type==="Range"||i&&document.activeElement===e.target)return;ke(t);const r=W(),c=N().elements.find(l=>l.id===t);c&&(P={id:t,startX:e.clientX,startY:e.clientY,origX:c.x,origY:c.y,zoom:r},window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",Ue,{once:!0}))}function Ce(e){if(!P)return;const n=N().elements.find(r=>r.id===P.id);if(!n)return;const o=(e.clientX-P.startX)/P.zoom,i=(e.clientY-P.startY)/P.zoom;n.x=x(P.origX+o,0,950),n.y=x(P.origY+i,0,530),ae()}function Ue(){window.removeEventListener("mousemove",Ce),P=null}function Ye(e,t,n){e.stopPropagation(),e.preventDefault(),ke(t);const o=W(),r=N().elements.find(a=>a.id===t);r&&(E={id:t,handle:n,startX:e.clientX,startY:e.clientY,origX:r.x,origY:r.y,origW:r.w||240,origH:r.h||54,zoom:o},window.addEventListener("mousemove",Le),window.addEventListener("mouseup",Xe,{once:!0}))}function Le(e){if(!E)return;const n=N().elements.find(u=>u.id===E.id);if(!n)return;const o=(e.clientX-E.startX)/E.zoom,i=(e.clientY-E.startY)/E.zoom;let r=E.origX,a=E.origY,c=E.origW,l=E.origH;E.handle.includes("r")&&(c=x(E.origW+o,40,960)),E.handle.includes("l")&&(c=x(E.origW-o,40,960),r=E.origX+o),E.handle.includes("b")&&(l=x(E.origH+i,30,540)),E.handle.includes("t")&&(l=x(E.origH-i,30,540),a=E.origY+i),r=x(r,0,940),a=x(a,0,520),n.x=r,n.y=a,n.w=c,n.h=l,ae()}function Xe(){window.removeEventListener("mousemove",Le),E=null}let oe=null;function Je({render:e}){oe=e}function Ke(){typeof oe=="function"&&oe()}function Ge(){z.innerHTML="",g.slides.forEach((e,t)=>{const n=document.createElement("div");n.className="thumb"+(t===g.activeSlide?" active":"");const o=document.createElement("div");o.className="mini";const i=document.createElement("div");i.style.position="absolute",i.style.width="960px",i.style.height="540px",i.style.top="0",i.style.left="0",i.style.transformOrigin="top left";const r=104/960;i.style.transform=`scale(${r})`,i.style.background=Q(e),e.elements.forEach(c=>{const l=document.createElement("div");if(l.className=K(c),Object.assign(l.style,V(c)),(c.type==="text"||c.type==="button")&&(l.innerHTML=c.html||(c.type==="text"?"Texte":"Bouton")),c.type==="table"){const u=document.createElement("div");Object.assign(u.style,{width:"100%",height:"100%",overflow:"hidden",position:"relative"});const s=document.createElement("table");s.className="data-table",Object.assign(s.style,{width:"100%",height:"100%",tableLayout:"fixed",borderCollapse:"collapse"}),c.borderColor&&s.style.setProperty("--table-border-color",c.borderColor);const d=c.rows||3,m=c.cols||3,b=c.data||Array(d).fill(null).map(()=>Array(m).fill(""));for(let v=0;v<d;v++){const p=document.createElement("tr");for(let f=0;f<m;f++){const h=v===0?document.createElement("th"):document.createElement("td");h.innerHTML=b[v]?.[f]||"",v===0&&c.headerColor&&(h.style.background=c.headerColor),c.borderColor&&(h.style.borderColor=c.borderColor),p.appendChild(h)}s.appendChild(p)}u.appendChild(s),l.appendChild(u)}if(c.type==="image"){const u=document.createElement("div");u.className="el-img-wrapper",u.innerHTML=c.imageData?`<img src="${c.imageData}" style="width:100%;height:100%;object-fit:contain;">`:'<div style="width:100%;height:100%;background:#eee;"></div>',l.appendChild(u)}l.style.pointerEvents="none",i.appendChild(l)}),o.appendChild(i),n.appendChild(o);const a=document.createElement("div");a.className="label",a.innerHTML=`
      <span>Slide ${t+1}</span>
      <span style="color:rgba(255,255,255,.55)">${e.elements.length} obj.</span>
    `,n.appendChild(a),n.addEventListener("click",()=>{g.activeSlide=t,A(null),Ke()}),z.appendChild(n)})}function w(){const e=N();L.style.background=Q(e),L.querySelectorAll(".el").forEach(n=>n.remove()),e.elements.forEach(n=>{const o=document.createElement("div");if(o.className=K(n)+(n.id===le()?" selected":""),o.dataset.id=n.id,Object.assign(o.style,V(n)),(n.type==="text"||n.type==="button")&&(o.contentEditable="true",o.spellcheck=!1,o.innerHTML=n.html||(n.type==="text"?"Texte":"Bouton"),o.appendChild(pe(n))),n.type==="table"){const i=document.createElement("div");Object.assign(i.style,{width:"100%",height:"100%",overflow:"hidden",position:"relative"});const r=document.createElement("table");r.className="data-table",Object.assign(r.style,{width:"100%",height:"100%",tableLayout:"fixed",borderCollapse:"collapse"}),n.borderColor&&r.style.setProperty("--table-border-color",n.borderColor);const a=n.rows||3,c=n.cols||3;if(!n.data){n.data=[];for(let l=0;l<a;l++){n.data[l]=[];for(let u=0;u<c;u++)n.data[l][u]=l===0?`Col ${u+1}`:""}}for(let l=0;l<a;l++){const u=document.createElement("tr");for(let s=0;s<c;s++){const d=l===0?document.createElement("th"):document.createElement("td");d.contentEditable="true",d.spellcheck=!1,d.innerHTML=n.data[l]?.[s]||(l===0?`Col ${s+1}`:""),d.dataset.row=l,d.dataset.col=s,l===0&&n.headerColor&&(d.style.background=n.headerColor),n.borderColor&&(d.style.borderColor=n.borderColor),d.addEventListener("blur",()=>{n.data||(n.data=Array(a).fill(null).map(()=>Array(c).fill(""))),n.data[l]||(n.data[l]=Array(c).fill("")),n.data[l][s]=d.innerHTML||d.textContent}),u.appendChild(d)}r.appendChild(u)}i.appendChild(r),o.appendChild(i),o.appendChild(pe(n)),o.appendChild(Oe(n))}if(n.type==="shape"){const i=document.createElement("div");i.className="shape-content-wrapper",n.fillColor&&(i.style.background=n.fillColor),n.borderColor&&(i.style.borderColor=n.borderColor,i.style.borderWidth="2px",i.style.borderStyle="solid"),n.opacity!==void 0&&(i.style.opacity=n.opacity),o.appendChild(i),o.appendChild(We(n))}if(n.type==="image"){const i=document.createElement("div");i.className="el-img-wrapper",i.innerHTML=n.imageData?`<img src="${n.imageData}" style="width:100%;height:100%;object-fit:contain;">`:`<div style="padding:12px;text-align:center;line-height:1.2;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
             <span style="font-size:24px;margin-bottom:8px;">📸</span>
             <span style="font-size:13px;font-weight:600;color:#007bff">Double-clique</span>
           </div>`,o.appendChild(i),o.style.cursor="pointer",o.addEventListener("dblclick",r=>{r.stopPropagation();const a=document.createElement("input");a.type="file",a.accept="image/*",a.onchange=c=>{const l=c.target.files[0];if(!l)return;const u=new FileReader;u.onload=s=>{n.imageData=s.target.result,w()},u.readAsDataURL(l)},a.click()}),o.addEventListener("dragover",r=>{r.preventDefault(),r.stopPropagation()}),o.addEventListener("drop",r=>{r.preventDefault(),r.stopPropagation();const a=r.dataTransfer.files;if(a.length>0&&a[0].type.startsWith("image/")){const c=new FileReader;c.onload=l=>{n.imageData=l.target.result,w()},c.readAsDataURL(a[0])}})}["tl","tr","bl","br"].forEach(i=>{const r=document.createElement("div");r.className="handle h-"+i,r.dataset.handle=i,r.addEventListener("mousedown",a=>Ye(a,n.id,i)),o.appendChild(r)}),o.addEventListener("mousedown",i=>{i.target.classList.contains("handle")}),o.addEventListener("mousedown",i=>qe(i,n.id)),L.appendChild(o)}),Ge();const t=W();Z&&(Z.textContent=`Zoom: ${Math.round(t*100)}%`),ze()}let ie=null;function _e({render:e}){ie=e}function Ze(){typeof ie=="function"&&ie()}function Ve(){document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("dragstart",t=>{t.dataTransfer.setData("text/plain",e.dataset.tool),t.dataTransfer.effectAllowed="copy"})}),L.addEventListener("dragover",e=>{e.preventDefault(),L.classList.add("dragover"),e.dataTransfer.dropEffect="copy"}),L.addEventListener("dragleave",()=>{L.classList.remove("dragover")}),L.addEventListener("drop",e=>{e.preventDefault(),L.classList.remove("dragover");const t=e.dataTransfer.getData("text/plain");if(!t)return;const n=L.getBoundingClientRect(),o=W(),i=(e.clientX-n.left)/o,r=(e.clientY-n.top)/o;Qe(t,i,r),Ze()})}function Qe(e,t,n){const o=N(),i={id:T(),x:x(t-80,0,920),y:x(n-20,0,500),w:260,h:60};let r=null;if(e==="text")r={...i,type:"text",w:520,h:70,html:"Nouveau texte",color:"#ffff",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"};else if(e==="shape")r={...i,type:"shape",w:320,h:180,shapeType:"rectangle",fillColor:"#7c5cff",borderColor:"#37d6ff",opacity:1};else if(e==="button")r={...i,type:"button",w:220,h:54,html:"Bouton",color:"#ffffff",fontSize:16,fontWeight:700,fontFamily:"Arial",textAlign:"center"};else if(e==="image")r={...i,type:"image",w:360,h:240};else if(e==="table")r={...i,type:"table",w:400,h:200,rows:3,cols:3,borderColor:"#cccccc",headerColor:"#f3f4f6"};else if(e==="twoCols"){o.elements.push({id:T(),type:"text",x:x(t-360,0,820),y:x(n-140,0,460),w:420,h:60,html:"Titre (2 colonnes)",color:"#111827",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"}),o.elements.push({id:T(),type:"text",x:x(t-360,0,820),y:x(n-70,0,470),w:420,h:120,html:"Texte descriptif…",color:"#111827",fontSize:18,fontWeight:400,fontFamily:"Arial",textAlign:"left"}),o.elements.push({id:T(),type:"image",x:x(t+80,0,600),y:x(n-140,0,300),w:320,h:240});return}else if(e==="titleSubtitle"){o.elements.push({id:T(),type:"text",x:x(t-320,0,600),y:x(n-120,0,460),w:700,h:70,html:"Titre",color:"#111827",fontSize:36,fontWeight:800,fontFamily:"Arial",textAlign:"left"}),o.elements.push({id:T(),type:"text",x:x(t-320,0,600),y:x(n-40,0,490),w:700,h:60,html:"Sous-titre",color:"#111827",fontSize:24,fontWeight:400,fontFamily:"Arial",textAlign:"left"});return}r&&(o.elements.push(r),A(r.id))}_e({render:w});function et(){A(null),w()}function fe(){const e=le();if(!e)return;const t=N();t.elements=t.elements.filter(n=>n.id!==e),A(null),w()}function tt(){window.addEventListener("unhandledrejection",p=>{console.warn("Unhandled promise rejection:",p.reason)}),L.addEventListener("mousedown",p=>{p.target.closest(".pcr-app, .color-picker, .colorPicker, .picker, .vc-sketch, .react-colorful")||(p.target===L||p.target.classList.contains("drop-hint"))&&et()});const e=document.getElementById("importProjectBtn"),t=document.getElementById("importProjectInput");e&&t&&(e.addEventListener("click",()=>{t.value="",t.click()}),t.addEventListener("change",()=>{const p=t.files[0];if(!p)return;const f=new FileReader;f.onload=h=>{try{const y=JSON.parse(h.target.result);if(!y||!Array.isArray(y.slides)){alert("Fichier invalide : structure incorrecte");return}localStorage.setItem("slides_state",JSON.stringify(y)),window.location.reload()}catch(y){console.error(y),alert("Erreur lors de l'import du projet")}},f.readAsText(p)}));const n=document.getElementById("deleteBtn");n&&n.addEventListener("click",fe),window.addEventListener("keydown",p=>{if(p.key==="Delete"||p.key==="Backspace"){const f=document.activeElement;if(f&&(f.classList?.contains("text")||f.classList?.contains("button")))return;fe()}(p.ctrlKey||p.metaKey)&&(p.key==="+"||p.key==="=")&&(p.preventDefault(),U(W()+.1)),(p.ctrlKey||p.metaKey)&&p.key==="-"&&(p.preventDefault(),U(W()-.1)),(p.ctrlKey||p.metaKey)&&p.key==="0"&&(p.preventDefault(),U(1))});const o=document.getElementById("bgColorPicker");o&&o.addEventListener("input",p=>{const f=N();f.backgroundColor=p.target.value,f.backgroundGradient="",w()});const i=document.getElementById("resizerY");i&&i.addEventListener("mousedown",r);function r(p){p.preventDefault(),window.addEventListener("mousemove",a),window.addEventListener("mouseup",c),i.classList.add("resizing"),document.body.style.cursor="ns-resize"}function a(p){const f=window.innerHeight;let h=f-p.clientY-14;const y=50,B=f*.6;h<y&&(h=y),h>B&&(h=B),document.documentElement.style.setProperty("--bottom-h",Math.round(h)+"px")}function c(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c),i.classList.remove("resizing"),document.body.style.cursor=""}const l=document.getElementById("resizerX");let u=0,s=0;l&&l.addEventListener("mousedown",d);function d(p){p.preventDefault(),u=p.clientX,s=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sidebar-w")),window.addEventListener("mousemove",m),window.addEventListener("mouseup",b),l.classList.add("resizing"),document.body.style.cursor="ew-resize"}function m(p){const f=p.clientX-u;let h=s+f;const y=155,B=window.innerWidth*.5;h<y&&(h=y),h>B&&(h=B),document.documentElement.style.setProperty("--sidebar-w",Math.round(h)+"px")}function b(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",b),l.classList.remove("resizing"),document.body.style.cursor=""}const v=document.getElementById("btnArbre");v&&v.addEventListener("click",()=>{const p="src/html/arbre.html";window.location.href=`/Projet-Informatique-S6-GR4/${p}`}),Ve()}function nt(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e){if(!e)return null;const t=String(e).trim();if(!t)return null;if(/^https?:\/\//i.test(t))return t;let n=t.match(/^slide-(\d+)\.html$/i);return n||(n=t.match(/^#slide:(\d+)$/i),n)||(n=t.match(/^#slide-(\d+)$/i),n),t}document.getElementById("addSlideBtn").addEventListener("click",()=>{g.slides.push({id:Y(),elements:[],arbre:{title:null,pos:{x:0,y:0}},backgroundColor:"#ffffff",backgroundGradient:""}),g.activeSlide=g.slides.length-1,A(null),w(),z.scrollLeft=z.scrollWidth});document.getElementById("dupSlideBtn").addEventListener("click",()=>{const e=N(),t=JSON.parse(JSON.stringify(e));t.id=Y(),t.elements.forEach(n=>n.id=Y()),g.slides.splice(g.activeSlide+1,0,t),g.activeSlide++,A(null),w(),z.scrollLeft=z.scrollWidth});function it(){return`
<style>
  :root{
    --slideW: 960;
    --slideH: 540;
    --scale: 1;
  }

  *{ box-sizing:border-box; }
  html, body{ height:100%; margin:0; }

  /* bandes noires */
  body{
    background:#000;
    overflow:hidden;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  }

  /* scène plein écran */
  .stage{
    position:fixed;
    inset:0;
  }

  /* slide en taille "réelle" 960x540, puis scale */
  .slide{
    width: calc(var(--slideW) * 1px);
    height: calc(var(--slideH) * 1px);
    position:absolute;
    left:50%;
    top:50%;

    transform-origin:center;
    transform: translate(-50%, -50%) scale(var(--scale));

    background:#fff;
    overflow:hidden;
    border-radius:0;
    box-shadow:none;
  }

  /* pas de grille en export */
  .slide::before{ content:none !important; }

  /* --- styles des éléments (inchangés) --- */
  .el{
    position:absolute;
    padding:12px 14px;
    border-radius:14px;

    /* IMPORTANT : plus de fond ni carte */
    background: transparent;
    border:none;
    box-shadow:none;

    user-select:none;
  }

  .el.text{
    background: transparent;
    border:none;
    box-shadow:none;

    color:#111827;
    font-size:28px;
    font-weight:800;
  }

  .el.shape{
    padding:0;
    background: transparent;
    border:none;
    box-shadow:none;
    overflow: visible;
  }

  /* wrapper visuel (fill/border/opacity) */
  .el.shape .shape-content-wrapper{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    pointer-events:none;
    box-sizing:border-box;
  }

  /* formes appliquées AU WRAPPER (comme l’éditeur) */
  .el.shape.rectangle .shape-content-wrapper{
    border-radius:18px;
  }
  .el.shape.circle .shape-content-wrapper{
    border-radius:50%;
  }
  .el.shape.triangle .shape-content-wrapper{
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-radius:0;
  }
  .el.shape.star .shape-content-wrapper{
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    border-radius:0;
  }

  .el.shape.diamond .shape-content-wrapper{
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    border-radius:0;
  }


  .el.button{
    border-radius:999px;
    background:#111827;
    color:white;
    font-weight:700;
    font-size:16px;
    padding:12px 18px;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 14px 30px rgba(0,0,0,.12);
  }

  .el.image{
    background: transparent;
    border:none;
    box-shadow:none;

    padding: 0;           /* IMPORTANT */
    overflow: hidden;     /* si tu veux couper l’image aux bords */

    display:flex;
    align-items:stretch;
    justify-content:stretch;
  }

  .el.image img{
    width:100%;
    height:100%;
    display:block;
    object-fit: cover;    /* cover = prend toute la place */
    /* si tu préfères garder tout visible : object-fit: contain; */
  }


  /* Table styles */
  .data-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    font-size: 14px;
    font-family: Arial, sans-serif;
    border-radius: 12px;
    overflow: hidden;
  }

  .data-table th,
  .data-table td {
    border: 1px solid #cccccc;
    padding: 8px 12px;
    text-align: left;
    min-width: 60px;
  }

  .data-table th {
    background: #f3f4f6;
    font-weight: 600;
    color: #111827;
  }

  .data-table td {
    background: #ffffff;
    color: #374151;
  }
</style>
`.trim()}function Se(e){const t=g.slides[e],n=Q(t),o=n?` style="background: ${n};"`:"",i={title:t?.arbre&&typeof t.arbre.title=="string"&&t.arbre.title.trim()?t.arbre.title.trim():`Slide ${e+1}`,pos:t?.arbre&&t.arbre.pos&&typeof t.arbre.pos.x=="number"&&typeof t.arbre.pos.y=="number"?{x:t.arbre.pos.x,y:t.arbre.pos.y}:{x:0,y:0}};let r=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${i.title}</title>
${it()}
</head>
<body>
  <div class="stage">
    <div class="slide" role="img" aria-label="${i.title}"${o}> 
    
    
`;function a(l){if(!l)return null;let u=l.match(/^#slide:(\d+)$/i);return u?{kind:"index",index:parseInt(u[1],10)-1}:(u=l.match(/^#slide-(\d+)$/i),u?{kind:"index",index:parseInt(u[1],10)-1}:(u=l.match(/slide-(\d+)\.html$/i),u?{kind:"file",file:l,index:parseInt(u[1],10)-1}:{kind:"href",href:l}))}for(const l of t.elements){const s=`style="${ue(l)}"`,d=K(l);if(l.type==="text"){const m=l.link?` data-link="${l.link}"`:"";r+=`      <div class="${d}" data-id="${l.id}"${m} ${s}>${l.html||"Texte"}</div>
`}else if(l.type==="button"){let m=null;try{const f=document.createElement("div");f.innerHTML=l.html||"";const h=f.querySelector("a[href]");h&&(m=h.getAttribute("href"))}catch{}const b=ot(l.link)||m||null;a(b);const v=l.html&&l.html.trim()?l.html:"Bouton",p=l.link?` data-link="${l.link}"`:"";r+=`      <div class="${d}" data-btn-id="${l.id}" data-id="${l.id}"${p} ${s}>${v}</div>
`}else if(l.type==="shape"){l.link&&`${l.link}`;const m=Me(l),b=Pe(m);r+=`
        <div class="${K(l)}" style="${ue(l)}">
          <div class="shape-content-wrapper" style="${b}"></div>
        </div>
      `}else if(l.type==="image"){const m=l.link?` data-link="${l.link}"`:"";l.imageData?r+=`      <div class="${d}" data-id="${l.id}"${m} ${s}><img src="${l.imageData}" style="width:100%;height:100%;object-fit:contain;display:block;"></div>
`:r+=`      <div class="${d}" data-id="${l.id}"${m} ${s}></div>
`}else if(l.type==="table"){let m=`<table class="data-table" style="${l.borderColor?`--table-border-color:${l.borderColor}`:""}">`;const b=l.rows||3,v=l.cols||3,p=l.data||Array(b).fill(null).map(()=>Array(v).fill(""));for(let h=0;h<b;h++){m+="<tr>";for(let y=0;y<v;y++){const B=h===0?"th":"td",j=h===0&&l.headerColor?`background:${l.headerColor};`:"",C=l.borderColor?`border-color:${l.borderColor};`:"",S=p[h]?.[y]||"";m+=`<${B} style="${j}${C}">${S}</${B}>`}m+="</tr>"}m+="</table>";const f=l.link?` data-link="${l.link}"`:"";r+=`      <div class="${d}" data-id="${l.id}"${f} ${s}>${m}</div>
`}}const c=i?JSON.stringify(i).replace(/<\/script/gi,"<\\/script"):null;return r+=`    </div>
  </div>

  ${c?`<script id="slide-meta" type="application/json">${c}<\/script>`:""}

  <script>
    (function(){
      const W = 960, H = 540;
      function updateScale(){
        const s = Math.min(window.innerWidth / W, window.innerHeight / H);
        document.documentElement.style.setProperty('--scale', String(s));
      }
      window.addEventListener('resize', updateScale, { passive:true });
      updateScale();
      
      // Rendre les boutons et textes avec liens cliquables
      document.querySelectorAll('.el[data-link]').forEach(el => {
        const link = el.getAttribute('data-link');
        if (!link) return;
        
        el.style.cursor = 'pointer';
        el.onclick = () => {
          // Vérifier si c'est un lien vers une slide ou une URL
          if (!isNaN(link)) {
            // C'est un numéro de slide (1-based)
            const slideIndex = parseInt(link);
            // En file://, on utilise le nom du fichier
            window.location.href = 'slide-' + slideIndex + '.html';
          } else if (link.match(/^slide-d+.html$/i)) {
            // C'est déjà un nom de fichier
            window.location.href = link;
          } else {
            // C'est une URL externe
            window.open(link, '_blank');
          }
        };
      });
      
      // Aussi gérer les liens dans les <a> directs
      document.querySelectorAll('.el a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        
        const parent = link.closest('.el');
        if (parent) {
          parent.style.cursor = 'pointer';
          parent.onclick = () => {
            window.location.href = href;
          };
        }
      });
    })();
  <\/script>
</body>
</html>`,r}document.getElementById("fitBtn").addEventListener("click",()=>{const t=document.getElementById("workspace").clientWidth-120,n=nt(t/960,.35,1.2);U(n)});document.getElementById("toolSearch").addEventListener("input",e=>{const t=e.target.value.trim().toLowerCase();document.querySelectorAll(".tool").forEach(n=>{const o=n.innerText.toLowerCase();n.style.display=o.includes(t)?"":"none"})});function rt(e){const t=e.cloneNode(!0);t.querySelectorAll(".text-toolbar, .handle").forEach(r=>r.remove());const n=t.innerHTML||"",o=n.indexOf('<div class="text-toolbar"');return(o===-1?n:n.slice(0,o)).trim()}document.getElementById("slide").addEventListener("input",e=>{const t=e.target.closest(".el");if(!t)return;const n=t.dataset.id,i=N().elements.find(r=>r.id===n);i&&(i.type==="text"||i.type==="button")&&(i.html=rt(t)||(i.type==="text"?"Texte":"Bouton"))});document.getElementById("workspace").addEventListener("wheel",e=>{if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();const t=-Math.sign(e.deltaY)*.06;U(W()+t)},{passive:!1});function J(e,t,n=null){const o=new RegExp(`${t}\\s*:\\s*(-?\\d+(?:\\.\\d+)?)px`,"i"),i=e.match(o);return i?parseFloat(i[1]):n}function lt(e){try{return JSON.parse(e)}catch{return null}}function at(e){if(!e)return e;const t=e.indexOf('<div class="text-toolbar"');return t===-1?e:e.slice(0,t)}function me(e){const t=e.cloneNode(!0);return t.querySelectorAll(".text-toolbar, .handle").forEach(n=>n.remove()),at(t.innerHTML)}function st(e){if(!e)return null;let t=e.match(/^#slide:(\d+)$/i);return t?{kind:"index",index:parseInt(t[1],10)-1}:(t=e.match(/^#slide-(\d+)$/i),t?{kind:"index",index:parseInt(t[1],10)-1}:(t=e.match(/slide-(\d+)\.html$/i),t?{kind:"file",file:e,index:parseInt(t[1],10)-1}:{kind:"href",href:e}))}function ct(e){if(!e)return null;const t=String(e).trim();if(!t)return null;if(/^\d+$/.test(t)||/^https?:\/\//i.test(t))return t;let n=t.match(/^slide-(\d+)\.html$/i);return n||(n=t.match(/^#slide:(\d+)$/i),n)||(n=t.match(/^#slide-(\d+)$/i),n)?n[1]:t}function dt(e){const t=e.querySelector('#slide-meta[type="application/json"]');if(!t)return null;const n=lt(t.textContent||"");if(!n||typeof n!="object")return null;const o=typeof n.title=="string"&&n.title.trim()?n.title.trim():null,i=n.pos&&typeof n.pos=="object"&&typeof n.pos.x=="number"&&typeof n.pos.y=="number"?{x:n.pos.x,y:n.pos.y}:{x:0,y:0};return Array.isArray(n.buttons)&&n.buttons,{title:o,pos:i}}function ut(e){const t=e.querySelector(".stage .slide");if(!t)return null;const n=t.getAttribute("style")||"";let o=n.match(/background-color\s*:\s*([^;]+)/i);return o||(o=n.match(/background\s*:\s*([^;]+)/i),o&&!o[1].includes("gradient"))?o[1].trim():null}function M(e,t,n=null){const o=new RegExp(`${t}\\s*:\\s*([^;]+)`,"i"),i=e.match(o);return i?i[1].trim():n}function ge(e,t=1){const n=M(e,"opacity",null),o=n!=null?parseFloat(n):NaN;return Number.isFinite(o)?o:t}function pt(e){const t=["rectangle","circle","triangle","star","diamond"];for(const n of t)if(e.contains(n))return n;return"rectangle"}function he(e){return new Promise((t,n)=>{setTimeout(()=>{try{const o=JSON.parse(e);if(!o||!Array.isArray(o.slides)){n("Structure JSON invalide");return}g.slides=o.slides,g.activeSlide=o.activeSlide??0,A(null),t()}catch(o){n(o)}},0)})}function ft(e){const n=new DOMParser().parseFromString(e,"text/html"),o=dt(n),i=ut(n),r=[],a=n.querySelectorAll(".slide .el"),c=n.querySelectorAll(".slide-container .slide-element");(a.length?a:c).forEach(s=>{const d=s.getAttribute("style")||"",m=J(d,"left",0),b=J(d,"top",0),v=J(d,"width",240),p=J(d,"height",54);let f="text",h="",y=null,B=s.getAttribute("data-id")||s.getAttribute("data-btn-id")||Y(),j=s.getAttribute("data-link")||null;if(!j){const S=s.querySelector?.("a[href]");S&&(j=S.getAttribute("href"))}if(!j){const S=s.closest?.("a[href]");S&&(j=S.getAttribute("href"))}if(j=ct(j),s.classList.contains("el")&&(s.classList.contains("text")?(f="text",h=me(s)||"Texte"):s.classList.contains("button")?(f="button",h=s.innerHTML||"Bouton"):s.classList.contains("shape")?f="shape":s.classList.contains("image")&&(f="image",s.querySelector("img"),f==="image"&&y&&(y.startsWith("data:image/")?C.imageName=C.imageName||"image_importee.png":C.imageSrc=y))),s.classList.contains("slide-element")){if(s.classList.contains("text-element"))f="text",s.querySelector("p"),h=me(s)||"Texte";else if(s.classList.contains("button-element"))f="button",h=s.innerHTML.trim()||"Bouton";else if(s.classList.contains("shape-element"))f="shape";else if(s.classList.contains("image-element")){f="image";const S=s.querySelector("img");S?.getAttribute("src")&&(y=S.getAttribute("src"))}}const C={id:B,type:f,x:Math.round(m),y:Math.round(b),w:Math.round(v),h:Math.round(p),link:j,html:h};if(f==="image"&&y&&(C.imageData=y),f==="shape"){C.shapeType=pt(s.classList);const S=s.querySelector(".shape-content-wrapper"),H=S?S.getAttribute("style")||"":d;let F=M(H,"background-color",null);F||(F=M(H,"background",null)),C.fillColor=F||"#7c5cff",C.borderColor=M(H,"border-color",M(d,"border-color","#37d6ff")),C.opacity=ge(H,ge(d,1))}if(f==="text"||f==="button"){const S=M(d,"color",null);S&&(C.color=S);const H=J(d,"font-size",null);H!==null&&(C.fontSize=Math.round(H));const F=M(d,"font-weight",null);F&&(C.fontWeight=F);const se=M(d,"font-family",null);se&&(C.fontFamily=se.replace(/['\"]/g,"").trim());const ce=M(d,"text-align",null);ce&&(C.textAlign=ce);const de=M(d,"font-style",null);de&&(C.fontStyle=de)}r.push(C)});let u=o?.buttonsMeta??null;if(!u){const s=a.length?n.querySelectorAll(".slide .el.button"):n.querySelectorAll(".slide-container .slide-element.button-element");u=Array.from(s).map(d=>{const m=d.getAttribute("data-btn-id")||d.getAttribute("data-id")||Y(),b=d.querySelector("a[href]"),v=b?b.getAttribute("href"):null;return{buttonId:m,href:v,target:st(v)}})}return{meta:{title:o?.title??null,pos:o?.pos??{x:0,y:0},buttonsMeta:u},elements:r,backgroundColor:i}}function mt(e){const t=Array.from(e).filter(o=>o.name.endsWith(".html"));if(t.length===0){alert("No HTML files selected");return}t.sort((o,i)=>o.name.localeCompare(i.name));let n=0;t.forEach((o,i)=>{const r=new FileReader;r.onload=a=>{try{const c=a.target.result,l=ft(c),u=l.elements,s=l.meta,d={id:Y(),elements:u,arbre:{title:s.title??o.name.replace(/\.html$/i,""),pos:s.pos??{x:0,y:0}},backgroundColor:l.backgroundColor||"#ffffff"};i===0?g.slides[g.activeSlide]=d:g.slides.push(d),n++,n===t.length&&(g.activeSlide=0,A(null),w(),z.scrollLeft=0,alert(`✓ Loaded ${t.length} slide(s)`))}catch(c){console.error("Error parsing file:",o.name,c)}},r.readAsText(o)})}const Ae=document.getElementById("fileInput");document.getElementById("openFolderBtn").addEventListener("click",()=>{Ae.click()});Ae.addEventListener("change",e=>{e.target.files&&e.target.files.length>0&&(mt(e.target.files),e.target.value="")});document.getElementById("exportBtn").addEventListener("click",()=>{g.slides.forEach((e,t)=>{const n=Se(t),o=new Blob([n],{type:"text/html"}),i=URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=g.slides.length===1?"slide.html":`slide-${t+1}.html`,setTimeout(()=>{r.click(),URL.revokeObjectURL(i)},t*200)})});const ye=document.getElementById("importProjectBtn"),q=document.getElementById("importProjectInput");ye&&q&&(ye.addEventListener("click",()=>{q.value="",q.click()}),q.addEventListener("change",()=>{const e=q.files[0];if(!e)return;const t=new FileReader;t.onload=r=>{he(r.target.result).then(()=>{w(),z.scrollLeft=0,alert("✓ Projet importé avec succès")}).catch(a=>{console.error(a),alert("Erreur lors de l'import du projet")})};const n=document.getElementById("importImagesInput");function o(r){const a=new Map(Array.from(r).map(c=>[c.name,c]));g.slides.forEach(c=>{(c.elements||[]).forEach(l=>{if(l.type==="image"&&l.imageName){const u=a.get(l.imageName);u&&(l.imageSrc=URL.createObjectURL(u))}})})}let i=!1;q.addEventListener("change",()=>{t.onload=r=>{he(r.target.result).then(()=>{i=!0,n.value="",n.click()}).catch(()=>alert("Erreur import projet"))}}),n.addEventListener("change",r=>{i&&(i=!1,o(r.target.files),w(),z.scrollLeft=0,r.target.value="")}),t.readAsText(e)}));const be=document.getElementById("downloadProjectBtn");be&&be.addEventListener("click",()=>{const e={activeSlide:g.activeSlide,slides:g.slides},t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o;const r=new Date,a=l=>String(l).padStart(2,"0"),c=`slides_state_${r.getFullYear()}-${a(r.getMonth()+1)}-${a(r.getDate())}_${a(r.getHours())}-${a(r.getMinutes())}.json`;i.download=c,i.click(),URL.revokeObjectURL(o)});const ve=document.getElementById("exportPdfProjectBtn");ve&&ve.addEventListener("click",async()=>{const{jsPDF:e}=window.jspdf,t=g.slides.length;if(!t){alert("Aucune slide à exporter");return}const n=g.activeSlide,o=new e({orientation:"landscape",unit:"mm",format:"a4"}),i=o.internal.pageSize.getWidth(),r=o.internal.pageSize.getHeight(),a=()=>new Promise(l=>requestAnimationFrame(()=>l())),c=async()=>{await a(),await a()};for(let l=0;l<t;l++){g.activeSlide=l,w(),await c();const u=document.getElementById("slide");if(!u){console.warn("Élément #slide introuvable");break}const s=await html2canvas(u,{scale:2,backgroundColor:null,useCORS:!0}),d=s.toDataURL("image/png"),m=s.width/s.height,b=i/r;let v,p;m>b?(v=i,p=i/m):(p=r,v=r*m);const f=(i-v)/2,h=(r-p)/2;l>0?(o.addPage(),o.setPage(o.getNumberOfPages())):o.setPage(1),o.addImage(d,"PNG",f,h,v,p)}g.activeSlide=n,w(),o.save("SlideLab_projet.pdf")});let R=0;const we=document.getElementById("presentBtn");we&&we.addEventListener("click",gt);function gt(){const e=document.createElement("div");e.id="presentation-overlay",Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"black",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center"});const t=document.createElement("div");t.id="presentation-slide",Object.assign(t.style,{position:"relative",width:"960px",height:"540px",backgroundColor:"white",overflow:"hidden",boxShadow:"0 0 50px rgba(0,0,0,0.5)"}),e.appendChild(t),document.body.appendChild(e),document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(n=>{console.warn("Fullscreen request denied:",n)}),R=g.activeSlide,ee(R,t),Be(t),window.addEventListener("resize",$e),document.addEventListener("keydown",Ne),document.addEventListener("fullscreenchange",Ie)}function $e(){const e=document.getElementById("presentation-slide");e&&Be(e)}function Ie(){document.fullscreenElement||Te()}function Te(){const e=document.getElementById("presentation-overlay");e&&e.remove(),document.removeEventListener("keydown",Ne),window.removeEventListener("resize",$e),document.removeEventListener("fullscreenchange",Ie)}function Ne(e){e.key==="ArrowRight"||e.key===" "||e.key==="Enter"?re():e.key==="ArrowLeft"?ht():e.key==="Escape"&&(document.fullscreenElement&&document.exitFullscreen(),Te())}function re(){if(R<g.slides.length-1){R++;const e=document.getElementById("presentation-slide");ee(R,e)}}function ht(){if(R>0){R--;const e=document.getElementById("presentation-slide");ee(R,e)}}function Be(e){if(!e)return;const t=20,n=(window.innerWidth-t)/960,o=(window.innerHeight-t)/540,i=Math.min(n,o);e.style.transform=`scale(${i})`}function ee(e,t){t.innerHTML="";const n=g.slides[e];n&&(t.style.background=Q(n),n.elements.forEach(o=>{const i=document.createElement("div");i.className=K(o);const r=V(o);if(Object.assign(i.style,r),o.type==="text"||o.type==="button")i.innerHTML=o.html||"",o.type==="button"?(i.style.cursor="pointer",i.onclick=()=>re()):i.style.display="block";else if(o.type==="image"){const a=document.createElement("div");a.className="el-img-wrapper",o.imageData?a.innerHTML=`<img src="${o.imageData}" style="width:100%;height:100%;object-fit:contain;display:block;">`:a.innerHTML='<div style="width:100%;height:100%;background:#eee;"></div>',i.appendChild(a)}else if(o.type==="table"){const a=document.createElement("table");a.className="data-table",o.borderColor&&a.style.setProperty("--table-border-color",o.borderColor);const c=o.rows||3,l=o.cols||3,u=o.data||Array(c).fill(null).map(()=>Array(l).fill(""));for(let s=0;s<c;s++){const d=document.createElement("tr");for(let m=0;m<l;m++){const b=s===0?document.createElement("th"):document.createElement("td");b.textContent=u[s]?.[m]||"",s===0&&o.headerColor&&(b.style.background=o.headerColor),o.borderColor&&(b.style.borderColor=o.borderColor),d.appendChild(b)}a.appendChild(d)}i.appendChild(a)}else if(o.type==="shape"){const a=document.createElement("div");a.className="shape-content-wrapper",o.fillColor&&(a.style.background=o.fillColor),o.borderColor&&(a.style.borderColor=o.borderColor,a.style.borderWidth="2px",a.style.borderStyle="solid"),o.opacity!==void 0&&(a.style.opacity=o.opacity),i.appendChild(a)}o.link?(i.style.cursor="pointer",i.title=`Lien vers: ${o.link}`,i.onclick=a=>{if(a.stopPropagation(),isNaN(o.link))window.open(o.link,"_blank");else{const c=parseInt(o.link)-1;c>=0&&c<g.slides.length&&ee(c,t)}}):o.type==="button"&&!i.onclick&&(i.onclick=a=>{a.stopPropagation(),re()}),t.appendChild(i)}))}const I=document.getElementById("contextMenu");let G=null,$=null;function yt(e){if(!e){console.error("Context Menu: slideElement is missing!");return}e.addEventListener("contextmenu",bt),document.addEventListener("click",t=>{I.classList.contains("visible")&&I.classList.remove("visible")}),document.addEventListener("keydown",t=>{t.key==="Escape"&&I.classList.remove("visible")})}function bt(e){e.preventDefault();const t=e.target.closest(".el");$=t?t.dataset.id:null,$?(A($),w()):(A(null),w());const n=$?wt():vt();I.innerHTML=n.map(a=>a.type==="divider"?'<div class="context-divider"></div>':`
      <div class="context-item ${a.danger?"danger":""}" data-action="${a.action}">
        <span class="context-icon">${a.icon||""}</span>
        <span>${a.label}</span>
      </div>
    `).join(""),I.querySelectorAll(".context-item").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.action;Et(c),I.classList.remove("visible")})});const{clientX:o,clientY:i}=e;I.style.top=`${i}px`,I.style.left=`${o}px`,I.classList.add("visible");const r=I.getBoundingClientRect();r.right>window.innerWidth&&(I.style.left=`${window.innerWidth-r.width-10}px`),r.bottom>window.innerHeight&&(I.style.top=`${window.innerHeight-r.height-10}px`)}function vt(){return[{label:"Coller",action:"paste",icon:"📋"},{type:"divider"},{label:"Dupliquer la page",action:"dupPage",icon:"📄"},{label:"Nouvelle page",action:"addPage",icon:"➕"},{type:"divider"},{label:"Télécharger la page",action:"downloadPage",icon:"⬇️"},{label:"Supprimer la page",action:"deletePage",icon:"🗑️",danger:!0}]}function wt(){return[{label:"Copier",action:"copy",icon:"📄"},{label:"Coller",action:"paste",icon:"📋"},{type:"divider"},{label:"Mettre au premier plan",action:"front",icon:"⇈"},{label:"Avancer",action:"forward",icon:"↑"},{label:"Reculer",action:"backward",icon:"↓"},{label:"Mettre à l'arrière plan",action:"back",icon:"⇊"},{type:"divider"},{label:"Ajouter un lien",action:"link",icon:"🔗"},{type:"divider"},{label:"Supprimer",action:"delete",icon:"🗑️",danger:!0}]}function Et(e){const t=N();switch(e){case"copy":if($){const a=t.elements.find(c=>c.id===$);a&&(G={type:"element",data:JSON.parse(JSON.stringify(a))})}break;case"paste":if(!G)return;if(G.type==="element"){const a=JSON.parse(JSON.stringify(G.data));a.id=T(),a.x+=20,a.y+=20,t.elements.push(a),A(a.id),w()}break;case"dupPage":document.getElementById("dupSlideBtn").click();break;case"addPage":document.getElementById("addSlideBtn").click();break;case"deletePage":g.slides.length>1?(g.slides.splice(g.activeSlide,1),g.activeSlide>=g.slides.length&&(g.activeSlide=g.slides.length-1),A(null),w()):alert("Impossible de supprimer la dernière page.");break;case"downloadPage":const n=Se(g.activeSlide),o=new Blob([n],{type:"text/html"}),i=URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=`slide-${g.activeSlide+1}.html`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i);break;case"delete":$&&(t.elements=t.elements.filter(a=>a.id!==$),A(null),w());break;case"front":_(t,$,"front");break;case"back":_(t,$,"back");break;case"forward":_(t,$,"forward");break;case"backward":_(t,$,"backward");break;case"link":xt(t,$);break}}function _(e,t,n){const o=e.elements.findIndex(r=>r.id===t);if(o===-1)return;const i=e.elements[o];if(e.elements.splice(o,1),n==="front")e.elements.push(i);else if(n==="back")e.elements.unshift(i);else if(n==="forward"){const r=Math.min(o+1,e.elements.length);e.elements.splice(r,0,i)}else if(n==="backward"){const r=Math.max(o-1,0);e.elements.splice(r,0,i)}w()}function xt(e,t){const n=e.elements.find(i=>i.id===t);if(!n)return;const o=prompt(`Ajouter un lien :
- Entre 'http://...' pour un site web
- Entre un numéro (ex: 2) pour aller à une slide`,n.link||"");o!==null&&(n.link=o.trim(),w())}Re({render:w});Fe({render:w});Je({render:w});De();tt();w();U(1);yt(L);
