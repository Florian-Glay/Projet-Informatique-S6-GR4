import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */function he(e,n,t){return Math.max(n,Math.min(t,e))}document.getElementById("addSlideBtn").addEventListener("click",()=>{h.slides.push({id:D(),elements:[]}),h.activeSlide=h.slides.length-1,N(null),u(),B.scrollLeft=B.scrollWidth});document.getElementById("dupSlideBtn").addEventListener("click",()=>{const e=C(),n=JSON.parse(JSON.stringify(e));n.id=D(),n.elements.forEach(t=>t.id=D()),h.slides.splice(h.activeSlide+1,0,n),h.activeSlide++,N(null),u(),B.scrollLeft=B.scrollWidth});function ge(){return`
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
    object-fit:contain;  /* --- newly added to fit the image --- */
    display:block;
  }
</style>
`.trim()}function ye(e){const n=h.slides[e];function t(r){if(!r)return null;const a=String(r).trim();return a?/^https?:\/\//i.test(a)||/^slide-\d+\.html$/i.test(a)||/\.html$/i.test(a)?a:`slide-${a}.html`:null}function i(r,a){const d=t(a);return d?`<a href="${d}" style="text-decoration:none;color:inherit;display:contents;">${r}</a>`:r}const o={version:1,title:n.title??`Slide ${e+1}`,pos:{x:0,y:0},buttons:[]};let l=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${o.title}</title>
${ge()}
</head>
<body>
  <div class="stage">
    <div class="slide" role="img" aria-label="${o.title}">
`;function s(r){if(!r)return null;let a=r.match(/^#slide:(\d+)$/i);return a?{kind:"index",index:parseInt(a[1],10)-1}:(a=r.match(/^#slide-(\d+)$/i),a?{kind:"index",index:parseInt(a[1],10)-1}:(a=r.match(/slide-(\d+)\.html$/i),a?{kind:"file",file:r,index:parseInt(a[1],10)-1}:{kind:"href",href:r}))}for(const r of n.elements){const a=Math.round(r.x??0),d=Math.round(r.y??0),f=Math.round(r.w??240),m=Math.round(r.h??54),x=`style="left:${a}px;top:${d}px;width:${f}px;height:${m}px;"`;if(r.type==="text"){const g=`      <div class="el text" ${x}>${r.html||"Texte"}</div>
`;l+=i(g,r.link)}else if(r.type==="button"){let g=null;try{const $=document.createElement("div");$.innerHTML=r.html||"";const F=$.querySelector("a[href]");F&&(g=F.getAttribute("href"))}catch{}const p=t(r.link)||g||null,S=s(p);o.buttons.push({buttonId:r.id,href:p,target:S||null});const H=r.html&&r.html.trim()?r.html:"Bouton",R=`      <div class="el button" data-btn-id="${r.id}" ${x}>${H}</div>
`;p?l+=`<a href="${p}" style="text-decoration:none;color:inherit;display:contents;">${R}</a>`:l+=R}else if(r.type==="shape"){const g=`      <div class="el shape" ${x}></div>
`;l+=i(g,r.link)}else if(r.type==="image"){const g=r.imageData?`      <div class="el image" ${x}><img src="${r.imageData}" alt=""></div>
`:`      <div class="el image" ${x}></div>
`;l+=i(g,r.link)}}const c=JSON.stringify(o).replace(/<\/script/gi,"<\\/script");return l+=`    </div>
  </div>

  <script id="slide-meta" type="application/json">${c}<\/script>

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
</html>`,l}document.getElementById("fitBtn").addEventListener("click",()=>{const n=document.getElementById("workspace").clientWidth-120,t=he(n/960,.35,1.2);W(t)});document.getElementById("toolSearch").addEventListener("input",e=>{const n=e.target.value.trim().toLowerCase();document.querySelectorAll(".tool").forEach(t=>{const i=t.innerText.toLowerCase();t.style.display=i.includes(n)?"":"none"})});function be(e){const n=e.cloneNode(!0);n.querySelectorAll(".text-toolbar, .handle").forEach(l=>l.remove());const t=n.innerHTML||"",i=t.indexOf('<div class="text-toolbar"');return(i===-1?t:t.slice(0,i)).trim()}document.getElementById("slide").addEventListener("input",e=>{const n=e.target.closest(".el");if(!n)return;const t=n.dataset.id,o=C().elements.find(l=>l.id===t);o&&(o.type==="text"||o.type==="button")&&(o.html=be(n)||(o.type==="text"?"Texte":"Bouton"))});document.getElementById("workspace").addEventListener("wheel",e=>{if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();const n=-Math.sign(e.deltaY)*.06;W(z()+n)},{passive:!1});function q(e,n,t=null){const i=new RegExp(`${n}\\s*:\\s*(-?\\d+(?:\\.\\d+)?)px`,"i"),o=e.match(i);return o?parseFloat(o[1]):t}function ve(e){try{return JSON.parse(e)}catch{return null}}function xe(e){if(!e)return e;const n=e.indexOf('<div class="text-toolbar"');return n===-1?e:e.slice(0,n)}function K(e){const n=e.cloneNode(!0);return n.querySelectorAll(".text-toolbar, .handle").forEach(t=>t.remove()),xe(n.innerHTML)}function we(e){if(!e)return null;let n=e.match(/^#slide:(\d+)$/i);return n?{kind:"index",index:parseInt(n[1],10)-1}:(n=e.match(/^#slide-(\d+)$/i),n?{kind:"index",index:parseInt(n[1],10)-1}:(n=e.match(/slide-(\d+)\.html$/i),n?{kind:"file",file:e,index:parseInt(n[1],10)-1}:{kind:"href",href:e}))}function Ee(e){const n=e.querySelector('#slide-meta[type="application/json"]');if(!n)return null;const t=ve(n.textContent||"");if(!t||typeof t!="object")return null;const i=typeof t.title=="string"&&t.title.trim()?t.title.trim():null,o=t.pos&&typeof t.pos=="object"&&typeof t.pos.x=="number"&&typeof t.pos.y=="number"?{x:t.pos.x,y:t.pos.y}:{x:0,y:0},l=Array.isArray(t.buttons)?t.buttons:[];return{version:t.version??1,title:i,pos:o,buttonsMeta:l}}function Le(e){const t=new DOMParser().parseFromString(e,"text/html"),i=Ee(t),o=[],l=t.querySelectorAll(".slide .el"),s=t.querySelectorAll(".slide-container .slide-element");(l.length?l:s).forEach(a=>{const d=a.getAttribute("style")||"",f=q(d,"left",0),m=q(d,"top",0),x=q(d,"width",240),g=q(d,"height",54);let p="text",S="",H=null,R=a.getAttribute("data-id")||a.getAttribute("data-btn-id")||D(),$=null;const F=a.querySelector?.("a[href]");if(F&&($=F.getAttribute("href")),!$){const I=a.closest?.("a[href]");I&&($=I.getAttribute("href"))}if(a.classList.contains("el")){if(a.classList.contains("text"))p="text",S=K(a)||"Texte";else if(a.classList.contains("button"))p="button",S=a.innerHTML||"Bouton";else if(a.classList.contains("shape"))p="shape";else if(a.classList.contains("image")){p="image";const I=a.querySelector("img");I?.getAttribute("src")&&(H=I.getAttribute("src"))}}if(a.classList.contains("slide-element")){if(a.classList.contains("text-element"))p="text",a.querySelector("p"),S=K(a)||"Texte";else if(a.classList.contains("button-element"))p="button",S=a.innerHTML.trim()||"Bouton";else if(a.classList.contains("shape-element"))p="shape";else if(a.classList.contains("image-element")){p="image";const I=a.querySelector("img");I?.getAttribute("src")&&(H=I.getAttribute("src"))}}const J={id:R,type:p,x:Math.round(f),y:Math.round(m),w:Math.round(x),h:Math.round(g),link:$,html:S};p==="image"&&H&&(J.imageData=H),o.push(J)});let r=i?.buttonsMeta??null;if(!r){const a=l.length?t.querySelectorAll(".slide .el.button"):t.querySelectorAll(".slide-container .slide-element.button-element");r=Array.from(a).map(d=>{const f=d.getAttribute("data-btn-id")||d.getAttribute("data-id")||D(),m=d.querySelector("a[href]"),x=m?m.getAttribute("href"):null;return{buttonId:f,href:x,target:we(x)}})}return{meta:{title:i?.title??null,pos:i?.pos??{x:0,y:0},buttonsMeta:r},elements:o}}function ke(e){const n=Array.from(e).filter(i=>i.name.endsWith(".html"));if(n.length===0){alert("No HTML files selected");return}n.sort((i,o)=>i.name.localeCompare(o.name));let t=0;n.forEach((i,o)=>{const l=new FileReader;l.onload=s=>{try{const c=s.target.result,r=Le(c),a=r.elements,d=r.meta,f={id:D(),elements:a,title:d.title??i.name.replace(/\.html$/i,""),pos:d.pos??{x:0,y:0},buttonsMeta:d.buttonsMeta??[]};o===0?h.slides[h.activeSlide]=f:h.slides.push(f),t++,t===n.length&&(h.activeSlide=0,N(null),u(),B.scrollLeft=0,alert(`✓ Loaded ${n.length} slide(s)`))}catch(c){console.error("Error parsing file:",i.name,c)}},l.readAsText(i)})}const Z=document.getElementById("fileInput");document.getElementById("openFolderBtn").addEventListener("click",()=>{Z.click()});Z.addEventListener("change",e=>{e.target.files&&e.target.files.length>0&&(ke(e.target.files),e.target.value="")});document.getElementById("exportBtn").addEventListener("click",()=>{h.slides.forEach((e,n)=>{const t=ye(n),i=new Blob([t],{type:"text/html"}),o=URL.createObjectURL(i),l=document.createElement("a");l.href=o,l.download=h.slides.length===1?"slide.html":`slide-${n+1}.html`,setTimeout(()=>{l.click(),URL.revokeObjectURL(o)},n*200)})});let M=0;function j(e){return Math.round(e)+"px"}const V=document.getElementById("presentBtn");V&&V.addEventListener("click",Ce);function Ce(){const e=document.createElement("div");e.id="presentation-overlay",Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"black",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center"});const n=document.createElement("div");n.id="presentation-slide",Object.assign(n.style,{position:"relative",width:"960px",height:"540px",backgroundColor:"white",overflow:"hidden",boxShadow:"0 0 50px rgba(0,0,0,0.5)"}),e.appendChild(n),document.body.appendChild(e),document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(t=>{console.warn("Fullscreen request denied:",t)}),M=h.activeSlide,P(M,n),oe(n),window.addEventListener("resize",Q),document.addEventListener("keydown",ne),document.addEventListener("fullscreenchange",ee)}function Q(){const e=document.getElementById("presentation-slide");e&&oe(e)}function ee(){document.fullscreenElement||te()}function te(){const e=document.getElementById("presentation-overlay");e&&e.remove(),document.removeEventListener("keydown",ne),window.removeEventListener("resize",Q),document.removeEventListener("fullscreenchange",ee)}function ne(e){e.key==="ArrowRight"||e.key===" "||e.key==="Enter"?ie():e.key==="ArrowLeft"?Se():e.key==="Escape"&&(document.fullscreenElement&&document.exitFullscreen(),te())}function ie(){if(M<h.slides.length-1){M++;const e=document.getElementById("presentation-slide");P(M,e)}}function Se(){if(M>0){M--;const e=document.getElementById("presentation-slide");P(M,e)}}function oe(e){if(!e)return;const n=20,t=(window.innerWidth-n)/960,i=(window.innerHeight-n)/540,o=Math.min(t,i);e.style.transform=`scale(${o})`}function P(e,n){n.innerHTML="";const t=h.slides[e];t&&t.elements.forEach(i=>{const o=document.createElement("div");o.className="el "+i.type,o.style.position="absolute",o.style.left=j(i.x),o.style.top=j(i.y),o.style.width=j(i.w),o.style.height=j(i.h),i.type==="text"||i.type==="button"?(o.innerHTML=i.html||"",o.style.display="flex",o.style.alignItems="center",i.type==="button"&&(o.style.justifyContent="center"),i.type==="button"&&(o.style.cursor="pointer",o.onclick=()=>{ie()})):i.type==="image"&&(i.imageData?o.innerHTML=`<img src="${i.imageData}" style="width:100%;height:100%;object-fit:cover;">`:o.innerHTML='<div style="width:100%;height:100%;background:#eee;display:flex;align-items:center;justify-content:center;color:#aaa;">IMAGE</div>'),i.link?(o.style.cursor="pointer",o.title=`Lien vers: ${i.link}`,o.onclick=l=>{if(l.stopPropagation(),isNaN(i.link))window.open(i.link,"_blank");else{const s=parseInt(i.link)-1;s>=0&&s<h.slides.length&&P(s,n)}}):i.type==="button"&&!o.onclick&&(o.onclick=l=>{if(l.stopPropagation(),isNaN(i.link)){let s=i.link;s.startsWith("http")||(s="https://"+s),window.open(s,"_blank")}else{const s=parseInt(i.link)-1;s>=0&&s<h.slides.length&&(M=s,P(M,n))}}),n.appendChild(o)})}const L=document.getElementById("contextMenu");let O=null,E=null;function Ae(e){if(!e){console.error("Context Menu: slideElement is missing!");return}e.addEventListener("contextmenu",Me),document.addEventListener("click",n=>{L.classList.contains("visible")&&L.classList.remove("visible")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&L.classList.remove("visible")})}function Me(e){e.preventDefault();const n=e.target.closest(".el");E=n?n.dataset.id:null,E?(N(E),u()):(N(null),u());const t=E?Ie():Te();L.innerHTML=t.map(s=>s.type==="divider"?'<div class="context-divider"></div>':`
      <div class="context-item ${s.danger?"danger":""}" data-action="${s.action}">
        <span class="context-icon">${s.icon||""}</span>
        <span>${s.label}</span>
      </div>
    `).join(""),L.querySelectorAll(".context-item").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.action;$e(c),L.classList.remove("visible")})});const{clientX:i,clientY:o}=e;L.style.top=`${o}px`,L.style.left=`${i}px`,L.classList.add("visible");const l=L.getBoundingClientRect();l.right>window.innerWidth&&(L.style.left=`${window.innerWidth-l.width-10}px`),l.bottom>window.innerHeight&&(L.style.top=`${window.innerHeight-l.height-10}px`)}function Te(){return[{label:"Coller",action:"paste",icon:"📋"},{type:"divider"},{label:"Dupliquer la page",action:"dupPage",icon:"📄"},{label:"Nouvelle page",action:"addPage",icon:"➕"}]}function Ie(){return[{label:"Copier",action:"copy",icon:"📄"},{label:"Coller",action:"paste",icon:"📋"},{type:"divider"},{label:"Mettre au premier plan",action:"front",icon:"⇈"},{label:"Avancer",action:"forward",icon:"↑"},{label:"Reculer",action:"backward",icon:"↓"},{label:"Mettre à l'arrière plan",action:"back",icon:"⇊"},{type:"divider"},{label:"Ajouter un lien",action:"link",icon:"🔗"},{type:"divider"},{label:"Supprimer",action:"delete",icon:"🗑️",danger:!0}]}function $e(e){const n=C();switch(e){case"copy":if(E){const t=n.elements.find(i=>i.id===E);t&&(O={type:"element",data:JSON.parse(JSON.stringify(t))})}break;case"paste":if(!O)return;if(O.type==="element"){const t=JSON.parse(JSON.stringify(O.data));t.id=k(),t.x+=20,t.y+=20,n.elements.push(t),N(t.id),u()}break;case"dupPage":document.getElementById("dupSlideBtn").click();break;case"addPage":document.getElementById("addSlideBtn").click();break;case"delete":E&&(n.elements=n.elements.filter(t=>t.id!==E),N(null),u());break;case"front":X(n,E,"front");break;case"back":X(n,E,"back");break;case"forward":X(n,E,"forward");break;case"backward":X(n,E,"backward");break;case"link":Be(n,E);break}}function X(e,n,t){const i=e.elements.findIndex(l=>l.id===n);if(i===-1)return;const o=e.elements[i];if(e.elements.splice(i,1),t==="front")e.elements.push(o);else if(t==="back")e.elements.unshift(o);else if(t==="forward"){const l=Math.min(i+1,e.elements.length);e.elements.splice(l,0,o)}else if(t==="backward"){const l=Math.max(i-1,0);e.elements.splice(l,0,o)}u()}function Be(e,n){const t=e.elements.find(o=>o.id===n);if(!t)return;const i=prompt(`Ajouter un lien :
- Entre 'http://...' pour un site web
- Entre un numéro (ex: 2) pour aller à une slide`,t.link||"");i!==null&&(t.link=i.trim(),u())}var Ne=1;const h={activeSlide:0,slides:[{id:k(),backgroundColor:"#ffffff",backgroundGradient:"",elements:[{id:k(),type:"text",x:90,y:80,w:520,h:70,html:"Titre de la slide",color:"#111827",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"},{id:k(),type:"shape",x:90,y:190,w:420,h:160,shapeType:"rectangle",fillColor:"#7c5cff",borderColor:"#37d6ff",opacity:1},{id:k(),type:"button",x:90,y:380,w:220,h:50,html:"Clique ici",color:"#ffffff",fontSize:16,fontWeight:700,fontFamily:"Arial",textAlign:"center"}]}]};function ze(){try{localStorage.setItem("slides_state",JSON.stringify(h)),console.log("✓ État sauvegardé")}catch(e){console.error("Erreur lors de la sauvegarde:",e)}}function He(){try{const e=localStorage.getItem("slides_state");if(e){const n=JSON.parse(e);return h.activeSlide=n.activeSlide,h.slides=n.slides,console.log("✓ État restauré"),!0}}catch(e){console.error("Erreur lors du chargement:",e)}return!1}const v=document.getElementById("slide"),B=document.getElementById("thumbs");document.getElementById("toolSearch");const le=document.getElementById("zoomChip");let T=null;function N(e){T=e}function D(){return"slide-"+Ne+++".html"}function k(){return crypto?.randomUUID?.()||"id_"+Math.random().toString(16).slice(2)}function b(e,n,t){return Math.max(n,Math.min(t,e))}function C(){return h.slides[h.activeSlide]}function w(e){return Math.round(e)+"px"}function We(){T=null,u()}function U(e){T!==e&&(T=e,u())}function z(){const e=v.style.transform.match(/scale\(([\d.]+)\)/);return e?parseFloat(e[1]):1}function W(e){e=b(e,.35,2),v.style.transformOrigin="middle top",v.style.transform=`scale(${e})`,le.textContent=`Zoom: ${Math.round(e*100)}%`}He();function u(){const e=C();e.backgroundGradient?v.style.background=e.backgroundGradient:v.style.background=e.backgroundColor||"#ffffff",v.querySelectorAll(".el").forEach(t=>t.remove()),e.elements.forEach(t=>{const i=document.createElement("div");if(i.className="el "+t.type+(t.id===T?" selected":""),t.shapeType&&i.classList.add(t.shapeType),i.dataset.id=t.id,i.style.left=w(t.x),i.style.top=w(t.y),t.type==="shape"||t.type==="image"?(i.style.width=w(t.w),i.style.height=w(t.h)):(i.style.width=w(t.w||240),i.style.height=w(t.h||54)),t.type==="text"||t.type==="button"){i.contentEditable="true",i.spellcheck=!1,i.innerHTML=t.html||(t.type==="text"?"Texte":"Bouton"),t.color&&(i.style.color=t.color),t.fontSize&&(i.style.fontSize=w(t.fontSize)),t.fontWeight&&(i.style.fontWeight=t.fontWeight),t.fontFamily&&(i.style.fontFamily=t.fontFamily),t.textAlign&&(i.style.textAlign=t.textAlign);const o=De(t);i.appendChild(o)}if(t.type==="table"){const o=document.createElement("table");o.className="data-table",t.borderColor&&o.style.setProperty("--table-border-color",t.borderColor);const l=t.rows||3,s=t.cols||3,c=t.data||Array(l).fill(null).map(()=>Array(s).fill(""));for(let a=0;a<l;a++){const d=document.createElement("tr");for(let f=0;f<s;f++){const m=a===0?document.createElement("th"):document.createElement("td");m.contentEditable="true",m.textContent=c[a][f]||(a===0?`Col ${f+1}`:""),m.dataset.row=a,m.dataset.col=f,a===0&&t.headerColor&&(m.style.background=t.headerColor),t.borderColor&&(m.style.borderColor=t.borderColor),m.addEventListener("blur",()=>{t.data||(t.data=Array(l).fill(null).map(()=>Array(s).fill(""))),t.data[a][f]=m.textContent}),d.appendChild(m)}o.appendChild(d)}i.appendChild(o);const r=Fe(t);i.appendChild(r)}if(t.type==="shape"){const o=document.createElement("div");o.className="shape-content-wrapper",t.fillColor&&(o.style.background=t.fillColor),t.opacity!==void 0&&(o.style.opacity=t.opacity),t.borderColor&&(o.style.border=`3px solid ${t.borderColor}`),i.appendChild(o);const l=Pe(t);i.appendChild(l)}if(t.type==="image"){const o=document.createElement("div");o.className="el-img-wrapper";let l="";t.imageData?l=`<img src="${t.imageData}" style="width:100%;height:100%;object-fit:contain;">`:l=`<div style="padding:12px;text-align:center;line-height:1.2;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          <span style="font-size:24px;margin-bottom:8px;">📸</span>
          <span style="font-size:13px;font-weight:600;color:#007bff">Dépose une image</span>
          <span style="font-size:11px;color:#999;margin-top:4px">ou double-clique pour parcourir</span>
        </div>`,o.innerHTML=l,i.appendChild(o),i.style.cursor="pointer",i.addEventListener("dblclick",()=>{const s=document.createElement("input");s.type="file",s.accept="image/*",s.onchange=c=>{const r=c.target.files[0];if(r){const a=new FileReader;a.onload=d=>{t.imageData=d.target.result,u()},a.readAsDataURL(r)}},s.click()}),i.addEventListener("dragover",s=>{s.preventDefault(),s.stopPropagation(),i.style.opacity="0.7",i.style.background="rgba(0,123,255,0.1)"}),i.addEventListener("dragleave",s=>{s.preventDefault(),s.stopPropagation(),i.style.opacity="1",i.style.background=""}),i.addEventListener("drop",s=>{s.preventDefault(),s.stopPropagation(),i.style.opacity="1",i.style.background="";const c=s.dataTransfer.files;if(c.length>0){const r=c[0];if(r.type.startsWith("image/")){const a=new FileReader;a.onload=d=>{t.imageData=d.target.result;const f=new Image;f.onload=()=>{let g=f.naturalWidth,p=f.naturalHeight;if(g>400||p>300){const S=Math.min(400/g,300/p);g=Math.round(g*S),p=Math.round(p*S)}t.w=g,t.h=p,u()},f.src=t.imageData},a.readAsDataURL(r)}}}),i.addEventListener("dblclick",s=>{s.stopPropagation();const c=document.createElement("input");c.type="file",c.accept="image/*",c.onchange=r=>{const a=r.target.files[0];if(a&&a.type.startsWith("image/")){const d=new FileReader;d.onload=f=>{t.imageData=f.target.result,u()},d.readAsDataURL(a)}},c.click()})}["tl","tr","bl","br"].forEach(o=>{const l=document.createElement("div");l.className="handle h-"+o,l.dataset.handle=o,i.appendChild(l)}),i.addEventListener("mousedown",o=>{o.target.classList.contains("handle")||U(t.id)}),i.addEventListener("mousedown",o=>qe(o,t.id)),v.appendChild(i)}),B.innerHTML="",h.slides.forEach((t,i)=>{const o=document.createElement("div");o.className="thumb"+(i===h.activeSlide?" active":""),o.innerHTML=`
      <div class="mini"></div>
      <div class="label">
        <span>Slide ${i+1}</span>
        <span style="color:rgba(255,255,255,.55)">${t.elements.length} obj.</span>
      </div>
    `,o.addEventListener("click",()=>{h.activeSlide=i,T=null,u()}),B.appendChild(o);const l=o.querySelector(".mini"),s=.12;t.elements.forEach(c=>{const r=document.createElement("div");r.className="el "+c.type,r.style.left=w(c.x*s),r.style.top=w(c.y*s),r.style.pointerEvents="none",r.style.opacity="0.8",c.type==="shape"||c.type==="image"?(r.style.width=w(c.w*s),r.style.height=w(c.h*s)):(r.style.width=w((c.w||240)*s),r.style.height=w((c.h||54)*s)),c.type==="text"?(r.innerHTML=c.html||"Texte",r.style.fontSize="8px",r.style.overflow="hidden"):c.type==="button"?(r.innerHTML=c.html||"Bouton",r.style.fontSize="8px",r.style.overflow="hidden"):c.type==="image"&&(c.imageData?r.innerHTML=`<img src="${c.imageData}" style="width:100%;height:100%;object-fit:contain;">`:r.innerHTML='<div style="font-size:6px;padding:2px;">📸</div>'),l.appendChild(r)})}),v.querySelectorAll(".el.selected .handle").forEach(t=>{t.addEventListener("mousedown",i=>Oe(i,t.closest(".el")?.dataset?.id,t.dataset.handle))});const n=z();le.textContent=`Zoom: ${Math.round(n*100)}%`,ze()}function De(e){const n=document.createElement("div");n.className="text-toolbar",n.addEventListener("mousedown",d=>d.stopPropagation()),n.addEventListener("click",d=>d.stopPropagation());const t=document.createElement("input");t.type="color",t.value=e.color||"#111827",t.title="Couleur du texte",t.addEventListener("input",d=>{e.color=d.target.value,u()});const i=document.createElement("select");i.innerHTML=`
    <option value="Arial" ${e.fontFamily==="Arial"?"selected":""}>Arial</option>
    <option value="Georgia" ${e.fontFamily==="Georgia"?"selected":""}>Georgia</option>
    <option value="Times New Roman" ${e.fontFamily==="Times New Roman"?"selected":""}>Times New Roman</option>
    <option value="Courier New" ${e.fontFamily==="Courier New"?"selected":""}>Courier New</option>
    <option value="Verdana" ${e.fontFamily==="Verdana"?"selected":""}>Verdana</option>
  `,i.addEventListener("change",d=>{e.fontFamily=d.target.value,u()});const o=document.createElement("input");o.type="number",o.value=e.fontSize||28,o.min=8,o.max=120,o.style.width="60px",o.addEventListener("change",d=>{e.fontSize=parseInt(d.target.value),u()});const l=document.createElement("button");l.innerHTML="B",l.title="Gras",l.className=e.fontWeight==="bold"||e.fontWeight>=700?"active":"",l.addEventListener("click",()=>{e.fontWeight=e.fontWeight==="bold"||e.fontWeight>=700?400:700,u()});const s=document.createElement("button");s.innerHTML="I",s.title="Italique",s.style.fontStyle="italic",s.addEventListener("click",()=>{e.fontStyle=e.fontStyle==="italic"?"normal":"italic",u()});const c=document.createElement("button");c.innerHTML="⫷",c.title="Aligner à gauche",c.className=e.textAlign==="left"?"active":"",c.addEventListener("click",()=>{e.textAlign="left",u()});const r=document.createElement("button");r.innerHTML="≡",r.title="Centrer",r.className=e.textAlign==="center"?"active":"",r.addEventListener("click",()=>{e.textAlign="center",u()});const a=document.createElement("button");return a.innerHTML="⫸",a.title="Aligner à droite",a.className=e.textAlign==="right"?"active":"",a.addEventListener("click",()=>{e.textAlign="right",u()}),n.appendChild(t),n.appendChild(i),n.appendChild(o),n.appendChild(document.createElement("div")).className="divider",n.appendChild(l),n.appendChild(s),n.appendChild(document.createElement("div")).className="divider",n.appendChild(c),n.appendChild(r),n.appendChild(a),n}window.addEventListener("unhandledrejection",e=>{console.warn("Unhandled promise rejection:",e.reason)});function Fe(e){const n=document.createElement("div");n.className="table-controls",n.addEventListener("mousedown",m=>m.stopPropagation()),n.addEventListener("click",m=>m.stopPropagation());const t=document.createElement("button");t.innerHTML="+ Ligne",t.title="Ajouter une ligne",t.addEventListener("click",()=>{e.rows=(e.rows||3)+1,e.data||(e.data=[]),e.data.push(Array(e.cols||3).fill("")),u()});const i=document.createElement("button");i.innerHTML="- Ligne",i.title="Supprimer une ligne",i.addEventListener("click",()=>{(e.rows||3)>2&&(e.rows=(e.rows||3)-1,e.data&&e.data.pop(),u())});const o=document.createElement("button");o.innerHTML="+ Colonne",o.title="Ajouter une colonne",o.addEventListener("click",()=>{e.cols=(e.cols||3)+1,e.data?e.data.forEach(m=>m.push("")):e.data=Array(e.rows||3).fill(null).map(()=>Array(e.cols).fill("")),u()});const l=document.createElement("button");l.innerHTML="- Colonne",l.title="Supprimer une colonne",l.addEventListener("click",()=>{(e.cols||3)>2&&(e.cols=(e.cols||3)-1,e.data&&e.data.forEach(m=>m.pop()),u())});const s=document.createElement("div");s.className="control-group";const c=document.createElement("label");c.textContent="Bordure:";const r=document.createElement("input");r.type="color",r.value=e.borderColor||"#cccccc",r.addEventListener("input",m=>{e.borderColor=m.target.value,u()}),s.appendChild(c),s.appendChild(r);const a=document.createElement("div");a.className="control-group";const d=document.createElement("label");d.textContent="En-tête:";const f=document.createElement("input");return f.type="color",f.value=e.headerColor||"#f3f4f6",f.addEventListener("input",m=>{e.headerColor=m.target.value,u()}),a.appendChild(d),a.appendChild(f),n.appendChild(t),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(s),n.appendChild(a),n}function Pe(e){const n=document.createElement("div");n.className="shape-controls",n.addEventListener("mousedown",p=>p.stopPropagation()),n.addEventListener("click",p=>p.stopPropagation());const t=document.createElement("div");t.className="control-group";const i=document.createElement("label");i.textContent="Forme:";const o=document.createElement("select");o.innerHTML=`
    <option value="rectangle" ${e.shapeType==="rectangle"?"selected":""}>Rectangle</option>
    <option value="circle" ${e.shapeType==="circle"?"selected":""}>Cercle</option>
    <option value="triangle" ${e.shapeType==="triangle"?"selected":""}>Triangle</option>
    <option value="star" ${e.shapeType==="star"?"selected":""}>Étoile</option>
    <option value="diamond" ${e.shapeType==="diamond"?"selected":""}>Losange</option>
  `,o.addEventListener("change",p=>{e.shapeType=p.target.value,u()}),t.appendChild(i),t.appendChild(o);const l=document.createElement("div");l.className="control-group";const s=document.createElement("label");s.textContent="Remplissage:";const c=document.createElement("input");c.type="color",c.value=e.fillColor||"#7c5cff",c.addEventListener("input",p=>{e.fillColor=p.target.value,u()}),l.appendChild(s),l.appendChild(c);const r=document.createElement("div");r.className="control-group";const a=document.createElement("label");a.textContent="Bordure:";const d=document.createElement("input");d.type="color",d.value=e.borderColor||"#37d6ff",d.addEventListener("input",p=>{e.borderColor=p.target.value,u()}),r.appendChild(a),r.appendChild(d);const f=document.createElement("div");f.className="control-group";const m=document.createElement("label");m.textContent="Opacité:";const x=document.createElement("span");x.className="opacity-value",x.textContent=Math.round((e.opacity!==void 0?e.opacity:1)*100)+"%";const g=document.createElement("input");return g.type="range",g.min=0,g.max=1,g.step=.01,g.value=e.opacity!==void 0?e.opacity:1,g.addEventListener("input",p=>{e.opacity=parseFloat(p.target.value),x.textContent=Math.round(p.target.value*100)+"%",u()}),f.appendChild(m),f.appendChild(g),f.appendChild(x),n.appendChild(t),n.appendChild(l),n.appendChild(r),n.appendChild(f),n}document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("dragstart",n=>{n.dataTransfer.setData("text/plain",e.dataset.tool),n.dataTransfer.effectAllowed="copy"})});v.addEventListener("dragover",e=>{e.preventDefault(),v.classList.add("dragover"),e.dataTransfer.dropEffect="copy"});v.addEventListener("dragleave",()=>{v.classList.remove("dragover")});v.addEventListener("drop",e=>{e.preventDefault(),v.classList.remove("dragover");const n=e.dataTransfer.getData("text/plain");if(!n)return;const t=v.getBoundingClientRect(),i=z(),o=(e.clientX-t.left)/i,l=(e.clientY-t.top)/i;Re(n,o,l),u()});function Re(e,n,t){const i=C(),o={id:k(),x:b(n-80,0,920),y:b(t-20,0,500),w:260,h:60};let l=null;if(e==="text")l={...o,type:"text",w:520,h:70,html:"Nouveau texte",color:"#111827",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"};else if(e==="shape")l={...o,type:"shape",w:320,h:180,shapeType:"rectangle",fillColor:"#7c5cff",borderColor:"#37d6ff",opacity:1};else if(e==="button")l={...o,type:"button",w:220,h:54,html:"Bouton",color:"#ffffff",fontSize:16,fontWeight:700,fontFamily:"Arial",textAlign:"center"};else if(e==="image")l={...o,type:"image",w:360,h:240};else if(e==="table")l={...o,type:"table",w:400,h:200,rows:3,cols:3,borderColor:"#cccccc",headerColor:"#f3f4f6"};else if(e==="twoCols"){i.elements.push({id:k(),type:"text",x:b(n-360,0,820),y:b(t-140,0,460),w:420,h:60,html:"Titre (2 colonnes)",color:"#111827",fontSize:28,fontWeight:800,fontFamily:"Arial",textAlign:"left"}),i.elements.push({id:k(),type:"text",x:b(n-360,0,820),y:b(t-70,0,470),w:420,h:120,html:"Texte descriptif…",color:"#111827",fontSize:18,fontWeight:400,fontFamily:"Arial",textAlign:"left"}),i.elements.push({id:k(),type:"image",x:b(n+80,0,600),y:b(t-140,0,300),w:320,h:240});return}else if(e==="titleSubtitle"){i.elements.push({id:k(),type:"text",x:b(n-320,0,600),y:b(t-120,0,460),w:700,h:70,html:"Titre",color:"#111827",fontSize:36,fontWeight:800,fontFamily:"Arial",textAlign:"left"}),i.elements.push({id:k(),type:"text",x:b(n-320,0,600),y:b(t-40,0,490),w:700,h:60,html:"Sous-titre",color:"#111827",fontSize:24,fontWeight:400,fontFamily:"Arial",textAlign:"left"});return}l&&(i.elements.push(l),T=l.id)}let A=null;function qe(e,n){const t=e.target.closest(".el");if(!t||e.target.closest(".text-toolbar")||e.target.closest(".shape-controls")||e.target.closest(".table-controls")||e.target.classList.contains("handle"))return;const i=t.classList.contains("text")||t.classList.contains("button"),o=e.target.tagName==="TD"||e.target.tagName==="TH";if(i&&document.activeElement===t&&window.getSelection()?.type==="Range"||o&&document.activeElement===e.target)return;U(n);const l=z(),c=C().elements.find(d=>d.id===n);if(!c)return;const r=e.clientX,a=e.clientY;A={id:n,startX:r,startY:a,origX:c.x,origY:c.y,zoom:l},window.addEventListener("mousemove",re),window.addEventListener("mouseup",je,{once:!0})}function re(e){if(!A)return;const t=C().elements.find(l=>l.id===A.id);if(!t)return;const i=(e.clientX-A.startX)/A.zoom,o=(e.clientY-A.startY)/A.zoom;t.x=b(A.origX+i,0,950),t.y=b(A.origY+o,0,530),u()}function je(){window.removeEventListener("mousemove",re),A=null}let y=null;function Oe(e,n,t){e.stopPropagation(),e.preventDefault(),U(n);const i=z(),l=C().elements.find(s=>s.id===n);l&&(y={id:n,handle:t,startX:e.clientX,startY:e.clientY,origX:l.x,origY:l.y,origW:l.w||240,origH:l.h||54,zoom:i},window.addEventListener("mousemove",ae),window.addEventListener("mouseup",Xe,{once:!0}))}function ae(e){if(!y)return;const t=C().elements.find(a=>a.id===y.id);if(!t)return;const i=(e.clientX-y.startX)/y.zoom,o=(e.clientY-y.startY)/y.zoom;let l=y.origX,s=y.origY,c=y.origW,r=y.origH;y.handle.includes("r")&&(c=b(y.origW+i,40,960)),y.handle.includes("l")&&(c=b(y.origW-i,40,960),l=y.origX+i),y.handle.includes("b")&&(r=b(y.origH+o,30,540)),y.handle.includes("t")&&(r=b(y.origH-o,30,540),s=y.origY+o),l=b(l,0,940),s=b(s,0,520),t.x=l,t.y=s,t.w=c,t.h=r,u()}function Xe(){window.removeEventListener("mousemove",ae),y=null}v.addEventListener("mousedown",e=>{(e.target===v||e.target.classList.contains("drop-hint"))&&We()});document.getElementById("deleteBtn").addEventListener("click",se);window.addEventListener("keydown",e=>{if(e.key==="Delete"||e.key==="Backspace"){const n=document.activeElement;if(n&&(n.classList?.contains("text")||n.classList?.contains("button")))return;se()}(e.ctrlKey||e.metaKey)&&(e.key==="+"||e.key==="=")&&(e.preventDefault(),W(z()+.1)),(e.ctrlKey||e.metaKey)&&e.key==="-"&&(e.preventDefault(),W(z()-.1)),(e.ctrlKey||e.metaKey)&&e.key==="0"&&(e.preventDefault(),W(1))});function se(){if(!T)return;const e=C();e.elements=e.elements.filter(n=>n.id!==T),T=null,u()}document.getElementById("bgColorPicker").addEventListener("input",e=>{const n=C();n.backgroundColor=e.target.value,n.backgroundGradient="",u()});const Y=document.getElementById("resizerY");Y&&Y.addEventListener("mousedown",Ye);function Ye(e){e.preventDefault(),window.addEventListener("mousemove",ce),window.addEventListener("mouseup",de),Y.classList.add("resizing"),document.body.style.cursor="ns-resize"}function ce(e){const n=window.innerHeight;let t=n-e.clientY-14;const i=50,o=n*.6;t<i&&(t=i),t>o&&(t=o),document.documentElement.style.setProperty("--bottom-h",Math.round(t)+"px")}function de(){window.removeEventListener("mousemove",ce),window.removeEventListener("mouseup",de),Y.classList.remove("resizing"),document.body.style.cursor=""}const G=document.getElementById("resizerX");G&&G.addEventListener("mousedown",Ge);let ue=0,pe=0;function Ge(e){e.preventDefault(),ue=e.clientX,pe=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sidebar-w")),window.addEventListener("mousemove",fe),window.addEventListener("mouseup",me),G.classList.add("resizing"),document.body.style.cursor="ew-resize"}function fe(e){const n=e.clientX-ue;let t=pe+n;const i=155,o=window.innerWidth*.5;t<i&&(t=i),t>o&&(t=o),document.documentElement.style.setProperty("--sidebar-w",Math.round(t)+"px")}function me(){window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",me),G.classList.remove("resizing"),document.body.style.cursor=""}const _=document.getElementById("btnArbre");_&&_.addEventListener("click",()=>{const e="src/html/arbre.html";window.location.href=`/Projet-Informatique-S6-GR4/${e}`});u();W(1);Ae(v);
