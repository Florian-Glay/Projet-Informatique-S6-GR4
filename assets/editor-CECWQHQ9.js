import"./modulepreload-polyfill-B5Qt9EMX.js";function T(e,i,n=null){const t=new RegExp(`${i}\\s*:\\s*(-?\\d+(?:\\.\\d+)?)px`,"i"),s=e.match(t);return s?parseFloat(s[1]):n}function V(e){const n=new DOMParser().parseFromString(e,"text/html"),t=[],s=n.querySelectorAll(".slide .el"),l=n.querySelectorAll(".slide-container .slide-element");return(s.length?s:l).forEach(o=>{const r=o.getAttribute("style")||"",k=T(r,"left",0),_=T(r,"top",0),G=T(r,"width",240),Q=T(r,"height",54);let g="text",M="",B=null;if(o.classList.contains("el")){if(o.classList.contains("text"))g="text",M=o.innerHTML||"Texte";else if(o.classList.contains("button"))g="button",M=o.innerHTML||"Bouton";else if(o.classList.contains("shape"))g="shape";else if(o.classList.contains("image")){g="image";const v=o.querySelector("img");v?.getAttribute("src")&&(B=v.getAttribute("src"))}}if(o.classList.contains("slide-element")){if(o.classList.contains("text-element")){g="text";const v=o.querySelector("p");M=v?v.innerHTML:o.innerHTML||"Texte"}else if(o.classList.contains("button-element"))g="button",M=o.innerHTML.trim()||"Bouton";else if(o.classList.contains("shape-element"))g="shape";else if(o.classList.contains("image-element")){g="image";const v=o.querySelector("img");v?.getAttribute("src")&&(B=v.getAttribute("src"))}}const C={id:m(),type:g,x:Math.round(k),y:Math.round(_),w:Math.round(G),h:Math.round(Q),html:M};g==="image"&&B&&(C.imageData=B),t.push(C)}),t}function ee(e){const i=Array.from(e).filter(t=>t.name.endsWith(".html"));if(i.length===0){alert("No HTML files selected");return}i.sort((t,s)=>t.name.localeCompare(s.name));let n=0;i.forEach((t,s)=>{const l=new FileReader;l.onload=a=>{try{const o=a.target.result,r=V(o);s===0?d.slides[d.activeSlide]={id:m(),elements:r}:d.slides.push({id:m(),elements:r}),n++,n===i.length&&(d.activeSlide=0,z(null),h(),E.scrollLeft=0,alert(`✓ Loaded ${i.length} slide(s)`))}catch(o){console.error("Error parsing file:",t.name,o)}},l.readAsText(t)})}const Y=document.getElementById("fileInput");document.getElementById("openFolderBtn").addEventListener("click",()=>{Y.click()});Y.addEventListener("change",e=>{e.target.files.length>0&&(ee(e.target.files),e.target.value="")});let b=0;function H(e){return Math.round(e)+"px"}const A=document.getElementById("presentBtn");A&&A.addEventListener("click",te);function te(){const e=document.createElement("div");e.id="presentation-overlay",Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"black",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center"});const i=document.createElement("div");i.id="presentation-slide",Object.assign(i.style,{position:"relative",width:"960px",height:"540px",backgroundColor:"white",overflow:"hidden",boxShadow:"0 0 50px rgba(0,0,0,0.5)"}),e.appendChild(i),document.body.appendChild(e),document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(n=>{console.warn("Fullscreen request denied:",n)}),b=d.activeSlide,I(b,i),N(i),window.addEventListener("resize",j),document.addEventListener("keydown",W),document.addEventListener("fullscreenchange",q)}function j(){const e=document.getElementById("presentation-slide");e&&N(e)}function q(){document.fullscreenElement||F()}function F(){const e=document.getElementById("presentation-overlay");e&&e.remove(),document.removeEventListener("keydown",W),window.removeEventListener("resize",j),document.removeEventListener("fullscreenchange",q)}function W(e){e.key==="ArrowRight"||e.key===" "||e.key==="Enter"?X():e.key==="ArrowLeft"?ne():e.key==="Escape"&&(document.fullscreenElement&&document.exitFullscreen(),F())}function X(){if(b<d.slides.length-1){b++;const e=document.getElementById("presentation-slide");I(b,e)}}function ne(){if(b>0){b--;const e=document.getElementById("presentation-slide");I(b,e)}}function N(e){if(!e)return;const i=20,n=(window.innerWidth-i)/960,t=(window.innerHeight-i)/540,s=Math.min(n,t);e.style.transform=`scale(${s})`}function I(e,i){i.innerHTML="";const n=d.slides[e];n&&n.elements.forEach(t=>{const s=document.createElement("div");s.className="el "+t.type,s.style.position="absolute",s.style.left=H(t.x),s.style.top=H(t.y),s.style.width=H(t.w),s.style.height=H(t.h),t.type==="text"||t.type==="button"?(s.innerHTML=t.html||"",s.style.display="flex",s.style.alignItems="center",t.type==="button"&&(s.style.justifyContent="center"),t.type==="button"&&(s.style.cursor="pointer",s.onclick=()=>{X()})):t.type==="image"&&(t.imageData?s.innerHTML=`<img src="${t.imageData}" style="width:100%;height:100%;object-fit:cover;">`:s.innerHTML='<div style="width:100%;height:100%;background:#eee;display:flex;align-items:center;justify-content:center;color:#aaa;">IMAGE</div>'),i.appendChild(s)})}function ie(e,i,n){return Math.max(i,Math.min(n,e))}document.getElementById("addSlideBtn").addEventListener("click",()=>{d.slides.push({id:m(),elements:[]}),d.activeSlide=d.slides.length-1,z(null),h(),E.scrollLeft=E.scrollWidth});document.getElementById("dupSlideBtn").addEventListener("click",()=>{const e=x(),i=JSON.parse(JSON.stringify(e));i.id=m(),i.elements.forEach(n=>n.id=m()),d.slides.splice(d.activeSlide+1,0,i),d.activeSlide++,z(null),h(),E.scrollLeft=E.scrollWidth});function se(){return`
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
    min-width: 120px;
    min-height: 44px;
    padding:12px 14px;
    border-radius:14px;
    border:1px solid rgba(0,0,0,.10);
    background: rgba(255,255,255,.96);
    box-shadow: 0 10px 25px rgba(0,0,0,.12);
    user-select:none;
  }

  .el.text{
    font-size:28px;
    font-weight:800;
    letter-spacing:-.02em;
    color:#111827;
    background: rgba(255,255,255,.92);
    border-radius: 18px;
    box-shadow: 0 14px 30px rgba(0,0,0,.10);
  }

  .el.shape{
    padding:0;
    border-radius:18px;
    background: linear-gradient(135deg, #7c5cff, #37d6ff);
    border:none;
    box-shadow: 0 14px 30px rgba(0,0,0,.10);
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
    padding:0;
    border-radius:18px;
    overflow:hidden;
    border:1px solid rgba(0,0,0,.12);
    background:#f3f4f6;
    box-shadow: 0 14px 30px rgba(0,0,0,.10);
  }
  .el.image img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }
</style>
`.trim()}function R(e){const i=d.slides[e];let n=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Slide ${e+1}</title>
${se()}
</head>
<body>
  <div class="stage">
    <div class="slide" role="img" aria-label="Slide ${e+1}">
`;for(const t of i.elements){const s=Math.round(t.x??0),l=Math.round(t.y??0),a=Math.round(t.w??240),o=Math.round(t.h??54),r=`style="left:${s}px;top:${l}px;width:${a}px;height:${o}px;"`;t.type==="text"?n+=`      <div class="el text" ${r}>${t.html||"Texte"}</div>
`:t.type==="button"?n+=`      <div class="el button" ${r}>${t.html||"Bouton"}</div>
`:t.type==="shape"?n+=`      <div class="el shape" ${r}></div>
`:t.type==="image"&&(t.imageData?n+=`      <div class="el image" ${r}><img src="${t.imageData}" alt=""></div>
`:n+=`      <div class="el image" ${r}></div>
`)}return n+=`    </div>
  </div>

  <script>
    (function(){
      const W = 960, H = 540; // taille "réelle" de ta slide

      function updateScale(){
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const s = Math.min(vw / W, vh / H); // FIT => bandes noires conservées
        document.documentElement.style.setProperty('--scale', String(s));
      }

      window.addEventListener('resize', updateScale, { passive: true });
      updateScale();
    })();
  <\/script>
</body>
</html>`,n}document.getElementById("exportBtn").addEventListener("click",()=>{if(d.slides.length===1){const e=R(0),i=new Blob([e],{type:"text/html"}),n=URL.createObjectURL(i),t=document.createElement("a");t.href=n,t.download="slide.html",t.click(),URL.revokeObjectURL(n)}else d.slides.forEach((e,i)=>{const n=R(i),t=new Blob([n],{type:"text/html"}),s=URL.createObjectURL(t),l=document.createElement("a");l.href=s,l.download=`slide-${i+1}.html`,setTimeout(()=>{l.click(),URL.revokeObjectURL(s)},i*200)})});document.getElementById("fitBtn").addEventListener("click",()=>{const i=document.getElementById("workspace").clientWidth-120,n=ie(i/960,.35,1.2);S(n)});document.getElementById("toolSearch").addEventListener("input",e=>{const i=e.target.value.trim().toLowerCase();document.querySelectorAll(".tool").forEach(n=>{const t=n.innerText.toLowerCase();n.style.display=t.includes(i)?"":"none"})});document.getElementById("slide").addEventListener("input",e=>{const i=e.target.closest(".el");if(!i)return;const n=i.dataset.id,s=x().elements.find(l=>l.id===n);s&&(s.type==="text"||s.type==="button")&&(s.html=i.innerHTML)});document.getElementById("workspace").addEventListener("wheel",e=>{if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();const i=-Math.sign(e.deltaY)*.06;S(L()+i)},{passive:!1});const d={activeSlide:0,slides:[{id:m(),elements:[{id:m(),type:"text",x:90,y:80,w:520,h:70,html:"Titre de la slide"},{id:m(),type:"shape",x:90,y:190,w:420,h:160},{id:m(),type:"button",x:90,y:380,w:220,h:50,html:"Clique ici"}]}]};function oe(){try{localStorage.setItem("slides_state",JSON.stringify(d)),console.log("✓ État sauvegardé")}catch(e){console.error("Erreur lors de la sauvegarde:",e)}}function le(){try{const e=localStorage.getItem("slides_state");if(e){const i=JSON.parse(e);return d.activeSlide=i.activeSlide,d.slides=i.slides,console.log("✓ État restauré"),!0}}catch(e){console.error("Erreur lors du chargement:",e)}return!1}const p=document.getElementById("slide"),E=document.getElementById("thumbs");document.getElementById("toolSearch");const O=document.getElementById("zoomChip");let w=null;function z(e){w=e}function m(){return crypto?.randomUUID?.()||"id_"+Math.random().toString(16).slice(2)}function u(e,i,n){return Math.max(i,Math.min(n,e))}function x(){return d.slides[d.activeSlide]}function f(e){return Math.round(e)+"px"}function re(){w=null,h()}function $(e){w=e,h()}function L(){const e=p.style.transform.match(/scale\(([\d.]+)\)/);return e?parseFloat(e[1]):1}function S(e){e=u(e,.35,2),p.style.transformOrigin="middle top",p.style.transform=`scale(${e})`,O.textContent=`Zoom: ${Math.round(e*100)}%`}le();function h(){p.querySelectorAll(".el").forEach(n=>n.remove()),x().elements.forEach(n=>{const t=document.createElement("div");t.className="el "+n.type+(n.id===w?" selected":""),t.dataset.id=n.id,t.style.left=f(n.x),t.style.top=f(n.y),n.type==="shape"||n.type==="image"?(t.style.width=f(n.w),t.style.height=f(n.h)):(t.style.width=f(n.w||240),t.style.height=f(n.h||54)),n.type==="text"&&(t.contentEditable="true",t.spellcheck=!1,t.innerHTML=n.html||"Texte"),n.type==="button"&&(t.contentEditable="true",t.spellcheck=!1,t.innerHTML=n.html||"Bouton"),n.type==="image"&&(n.imageData?t.innerHTML=`<img src="${n.imageData}" style="width:100%;height:100%;object-fit:cover;">`:t.innerHTML=`<div style="padding:12px;text-align:center;line-height:1.2;cursor:pointer;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          <span style="font-size:24px;margin-bottom:8px;">📸</span>
          <span style="font-size:13px;font-weight:600;color:#007bff">Dépose une image</span>
          <span style="font-size:11px;color:#999;margin-top:4px">ou clique pour parcourir</span>
        </div>`,t.style.cursor="pointer",t.addEventListener("dragover",s=>{s.preventDefault(),s.stopPropagation(),t.style.opacity="0.7",t.style.background="rgba(0,123,255,0.1)"}),t.addEventListener("dragleave",s=>{s.preventDefault(),s.stopPropagation(),t.style.opacity="1",t.style.background=""}),t.addEventListener("drop",s=>{s.preventDefault(),s.stopPropagation(),t.style.opacity="1",t.style.background="";const l=s.dataTransfer.files;if(l.length>0){const a=l[0];if(a.type.startsWith("image/")){const o=new FileReader;o.onload=r=>{n.imageData=r.target.result,h()},o.readAsDataURL(a)}}})),["tl","tr","bl","br"].forEach(s=>{const l=document.createElement("div");l.className="handle h-"+s,l.dataset.handle=s,t.appendChild(l)}),t.addEventListener("mousedown",s=>{s.target.classList.contains("handle")||$(n.id)}),t.addEventListener("mousedown",s=>de(s,n.id)),p.appendChild(t)}),E.innerHTML="",d.slides.forEach((n,t)=>{const s=document.createElement("div");s.className="thumb"+(t===d.activeSlide?" active":""),s.innerHTML=`
      <div class="mini"></div>
      <div class="label">
        <span>Slide ${t+1}</span>
        <span style="color:rgba(255,255,255,.55)">${n.elements.length} obj.</span>
      </div>
    `,s.addEventListener("click",()=>{d.activeSlide=t,w=null,h()}),E.appendChild(s);const l=s.querySelector(".mini"),a=.12;n.elements.forEach(o=>{const r=document.createElement("div");r.className="el "+o.type,r.style.left=f(o.x*a),r.style.top=f(o.y*a),r.style.pointerEvents="none",r.style.opacity="0.8",o.type==="shape"||o.type==="image"?(r.style.width=f(o.w*a),r.style.height=f(o.h*a)):(r.style.width=f((o.w||240)*a),r.style.height=f((o.h||54)*a)),o.type==="text"?(r.innerHTML=o.html||"Texte",r.style.fontSize="8px",r.style.overflow="hidden"):o.type==="button"?(r.innerHTML=o.html||"Bouton",r.style.fontSize="8px",r.style.overflow="hidden"):o.type==="image"&&(o.imageData?r.innerHTML=`<img src="${o.imageData}" style="width:100%;height:100%;object-fit:cover;">`:r.innerHTML='<div style="font-size:6px;padding:2px;">📸</div>'),l.appendChild(r)})}),p.querySelectorAll(".el.selected .handle").forEach(n=>{n.addEventListener("mousedown",t=>ue(t,n.closest(".el")?.dataset?.id,n.dataset.handle))});const i=L();O.textContent=`Zoom: ${Math.round(i*100)}%`,oe()}document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("dragstart",i=>{i.dataTransfer.setData("text/plain",e.dataset.tool),i.dataTransfer.effectAllowed="copy"})});p.addEventListener("dragover",e=>{e.preventDefault(),p.classList.add("dragover"),e.dataTransfer.dropEffect="copy"});p.addEventListener("dragleave",()=>{p.classList.remove("dragover")});p.addEventListener("drop",e=>{e.preventDefault(),p.classList.remove("dragover");const i=e.dataTransfer.getData("text/plain");if(!i)return;const n=p.getBoundingClientRect(),t=L(),s=(e.clientX-n.left)/t,l=(e.clientY-n.top)/t;ae(i,s,l),h()});function ae(e,i,n){const t=x(),s={id:m(),x:u(i-80,0,920),y:u(n-20,0,500),w:260,h:60};let l=null;if(e==="text")l={...s,type:"text",w:520,h:70,html:"Nouveau texte"};else if(e==="shape")l={...s,type:"shape",w:320,h:180};else if(e==="button")l={...s,type:"button",w:220,h:54,html:"Bouton"};else if(e==="image")l={...s,type:"image",w:360,h:240};else if(e==="twoCols"){t.elements.push({id:m(),type:"text",x:u(i-360,0,820),y:u(n-140,0,460),w:420,h:60,html:"Titre (2 colonnes)"}),t.elements.push({id:m(),type:"text",x:u(i-360,0,820),y:u(n-70,0,470),w:420,h:120,html:"Texte descriptif…"}),t.elements.push({id:m(),type:"image",x:u(i+80,0,600),y:u(n-140,0,300),w:320,h:240});return}else if(e==="titleSubtitle"){t.elements.push({id:m(),type:"text",x:u(i-320,0,600),y:u(n-120,0,460),w:700,h:70,html:"Titre"}),t.elements.push({id:m(),type:"text",x:u(i-320,0,600),y:u(n-40,0,490),w:700,h:60,html:"Sous-titre"});return}l&&(t.elements.push(l),w=l.id)}let y=null;function de(e,i){const n=e.target.closest(".el");if(!n||e.target.classList.contains("handle")||(n.classList.contains("text")||n.classList.contains("button"))&&document.activeElement===n&&window.getSelection()?.type==="Range")return;$(i);const s=L(),a=x().elements.find(k=>k.id===i);if(!a)return;const o=e.clientX,r=e.clientY;y={id:i,startX:o,startY:r,origX:a.x,origY:a.y,zoom:s},window.addEventListener("mousemove",P),window.addEventListener("mouseup",ce,{once:!0})}function P(e){if(!y)return;const n=x().elements.find(l=>l.id===y.id);if(!n)return;const t=(e.clientX-y.startX)/y.zoom,s=(e.clientY-y.startY)/y.zoom;n.x=u(y.origX+t,0,950),n.y=u(y.origY+s,0,530),h()}function ce(){window.removeEventListener("mousemove",P),y=null}let c=null;function ue(e,i,n){e.stopPropagation(),e.preventDefault(),$(i);const t=L(),l=x().elements.find(a=>a.id===i);l&&(c={id:i,handle:n,startX:e.clientX,startY:e.clientY,origX:l.x,origY:l.y,origW:l.w||240,origH:l.h||54,zoom:t},window.addEventListener("mousemove",U),window.addEventListener("mouseup",me,{once:!0}))}function U(e){if(!c)return;const n=x().elements.find(k=>k.id===c.id);if(!n)return;const t=(e.clientX-c.startX)/c.zoom,s=(e.clientY-c.startY)/c.zoom;let l=c.origX,a=c.origY,o=c.origW,r=c.origH;c.handle.includes("r")&&(o=u(c.origW+t,40,960)),c.handle.includes("l")&&(o=u(c.origW-t,40,960),l=c.origX+t),c.handle.includes("b")&&(r=u(c.origH+s,30,540)),c.handle.includes("t")&&(r=u(c.origH-s,30,540),a=c.origY+s),l=u(l,0,940),a=u(a,0,520),n.x=l,n.y=a,n.w=o,n.h=r,h()}function me(){window.removeEventListener("mousemove",U),c=null}p.addEventListener("mousedown",e=>{(e.target===p||e.target.classList.contains("drop-hint"))&&re()});document.getElementById("deleteBtn").addEventListener("click",K);window.addEventListener("keydown",e=>{if(e.key==="Delete"||e.key==="Backspace"){const i=document.activeElement;if(i&&(i.classList?.contains("text")||i.classList?.contains("button")))return;K()}(e.ctrlKey||e.metaKey)&&(e.key==="+"||e.key==="=")&&(e.preventDefault(),S(L()+.1)),(e.ctrlKey||e.metaKey)&&e.key==="-"&&(e.preventDefault(),S(L()-.1)),(e.ctrlKey||e.metaKey)&&e.key==="0"&&(e.preventDefault(),S(1))});function K(){if(!w)return;const e=x();e.elements=e.elements.filter(i=>i.id!==w),w=null,h()}const D=document.getElementById("resizerY");D&&D.addEventListener("mousedown",pe);function pe(e){e.preventDefault(),window.addEventListener("mousemove",J),window.addEventListener("mouseup",Z),D.classList.add("resizing"),document.body.style.cursor="ns-resize"}function J(e){const i=window.innerHeight;let n=i-e.clientY-14;const t=100,s=i*.6;n<t&&(n=t),n>s&&(n=s),document.documentElement.style.setProperty("--bottom-h",Math.round(n)+"px")}function Z(){window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",Z),D.classList.remove("resizing"),document.body.style.cursor=""}h();S(1);
