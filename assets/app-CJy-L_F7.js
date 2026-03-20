(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const x=([t,e,a])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),a?.length&&a.forEach(i=>{const o=x(i);n.appendChild(o)}),n},E=(t,e={})=>{const n={...y,...e};return x(["svg",n,t])};const C=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const M=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim();const $=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase());const V=t=>{const e=$(t);return e.charAt(0).toUpperCase()+e.slice(1)};const P=t=>Array.from(t.attributes).reduce((e,a)=>(e[a.name]=a.value,e),{}),v=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",m=(t,{nameAttr:e,icons:a,attrs:n})=>{const i=t.getAttribute(e);if(i==null)return;const o=V(i),r=a[o];if(!r)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const d=P(t),c=C(d)?{}:{"aria-hidden":"true"},l={...y,"data-lucide":i,...c,...n,...d},w=v(d),A=v(n),g=M("lucide",`lucide-${i}`,...w,...A);g&&Object.assign(l,{class:g});const k=E(r,l);return t.parentNode?.replaceChild(k,t)};const S=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];const z=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];const I=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];const F=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];const j=[["path",{d:"M20 6 9 17l-5-5"}]];const L=[["path",{d:"m6 9 6 6 6-6"}]];const N=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];const H=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];const R=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"}]];const O=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];const B=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];const D=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"}],["path",{d:"M8 6v8"}]];const T=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];const q=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];const U=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];const _=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];const G=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];const J=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];const K=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];const Z=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];const f=({icons:t={},nameAttr:e="data-lucide",attrs:a={},root:n=document,inTemplates:i}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(r=>m(r,{nameAttr:e,icons:t,attrs:a})),i&&Array.from(n.querySelectorAll("template")).forEach(d=>f({icons:t,nameAttr:e,attrs:a,root:d.content,inTemplates:i})),e==="data-lucide"){const r=n.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(d=>m(d,{nameAttr:"icon-name",icons:t,attrs:a})))}},b="saude_lembrete_visits";function W(){try{const t=localStorage.getItem(b);if(t)return JSON.parse(t)}catch(t){console.warn("Erro ao carregar visitas do localStorage:",t)}return null}function X(){try{localStorage.setItem(b,JSON.stringify(s.visits))}catch(t){console.warn("Erro ao salvar visitas no localStorage:",t)}}const Y=[{id:101,time:"08:30",patientId:1,type:"Pré-Natal",visited:!1},{id:102,time:"09:15",patientId:2,type:"Diabetes",visited:!1},{id:103,time:"10:44",patientId:3,type:"Hipertensão",visited:!1},{id:104,time:"13:30",name:"Campanha de Vacinação",isCampaign:!0,visited:!1}],s={currentView:"login",currentPatientId:null,user:null,patients:[{id:1,name:"Dona Maria",age:68,condition:"Pré-Natal / Hipertensão",lastVisit:"10/02/2026",address:"Rua das Flores, 123"},{id:2,name:"Seu João",age:65,condition:"Diabetes",lastVisit:"15/02/2026",address:"Av. Principal, 456"},{id:3,name:"Sr. Carlos",age:72,condition:"Hipertensão",lastVisit:"01/03/2026",address:"Rua da Paz, 78"}],visits:W()||Y};window.navigate=(t,e)=>{e!==void 0&&(s.currentPatientId=e),s.currentView=t,u(),window.scrollTo(0,0)};window.toggleVisit=t=>{const e=s.visits.find(a=>a.id===t);e&&(e.visited=!e.visited,X(),u())};window.handleLogin=()=>{const t=document.getElementById("login-email"),e=document.getElementById("login-password"),a=document.getElementById("login-error"),n=t?.value?.trim(),i=e?.value?.trim();if(!n||!i){a&&(a.textContent="Por favor, preencha e-mail e senha.",a.style.display="block");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){a&&(a.textContent="Digite um e-mail válido.",a.style.display="block");return}window.navigate("agenda")};const Q=()=>`
  <div class="logo-container">
    <div class="logo-icons">
      <div class="icon-box icon-blue"><i data-lucide="calendar"></i></div>
      <div class="icon-box icon-green"><i data-lucide="activity"></i></div>
      <div class="icon-box icon-orange"><i data-lucide="heart"></i></div>
    </div>
    <h1>SaúdeLembrete</h1>
    <p class="text-muted">Assistente para agentes de saúde</p>
  </div>
`,p=()=>`
  <nav class="bottom-nav">
    <a href="#" class="nav-item ${s.currentView==="agenda"?"active":""}" onclick="event.preventDefault(); window.navigate('agenda')">
      <i data-lucide="calendar"></i>
      <span>Agenda</span>
    </a>
    <a href="#" class="nav-item ${s.currentView==="reminders"?"active":""}" onclick="event.preventDefault(); window.navigate('reminders')">
      <i data-lucide="bell"></i>
      <span>Alertas</span>
    </a>
    <a href="#" class="nav-item ${s.currentView==="notifications"?"active":""}" onclick="event.preventDefault(); window.navigate('notifications')">
      <i data-lucide="message-square"></i>
      <span>Avisos</span>
    </a>
  </nav>
`,h=()=>`
  <div class="screen splash">
    ${Q()}
    <div style="width: 100%; margin-top: 40px;">
      <div class="input-group">
        <label>E-mail</label>
        <input id="login-email" type="email" placeholder="seu@email.com">
      </div>
      <div class="input-group">
        <label>Senha</label>
        <input id="login-password" type="password" placeholder="••••••••">
      </div>

      <!-- Bug #3 Fix: error message area -->
      <p id="login-error" style="display:none; color: var(--danger, #e53e3e); font-size: 13px; margin-top: -8px; margin-bottom: 12px; text-align: center;"></p>

      <button class="btn btn-primary" style="width: 100%;" onclick="window.handleLogin()">
        Entrar
      </button>
      <p style="margin-top: 20px; font-size: 12px;">Esqueceu a senha?</p>
      
      <div style="margin-top: 40px; border-top: 1px solid var(--border); padding-top: 20px;">
         <p class="text-muted">Conecte ao</p>
         <button class="btn btn-outline" style="width: 100%; margin-top: 10px;">Sistema SUS <i data-lucide="chevron-down"></i></button>
      </div>
    </div>
  </div>
`,ee=()=>`
  <div class="screen fade-in">
    <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
      <h1 style="color: var(--text)">Agenda de Hoje</h1>
      <div class="badge badge-blue">12 Mar</div>
    </header>

    <div class="card" style="border-left: 4px solid var(--primary);">
       ${s.visits.map(t=>{const e=s.patients.find(i=>i.id===t.patientId),a=e?e.name:t.name||"Ação Coletiva";return`
          <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; cursor: pointer;"
               onclick="${e?`window.navigate('patient', ${e.id})`:"window.navigate('campaign')"}">
            <div>
              <span style="font-weight: 700; color: var(--primary); margin-right: 12px;">${t.time}</span>
              <span style="font-weight: 500;">${a}</span>
            </div>
            <span class="text-muted" style="font-size: 12px;">${t.type||"Público"}</span>
          </div>
         `}).join("")}
    </div>

    <div class="card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
      <!-- Bug #4 Fix: correct placeholder image URL -->
      <img src="https://placehold.co/400x200?text=Mapa+de+Rotas" alt="Mapa" style="width:100%; height:100%; object-fit: cover; opacity: 0.7;">
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--primary);">
        <i data-lucide="map-pin" style="width: 32px; height: 32px;"></i>
      </div>
      <div style="position: absolute; bottom: 12px; left: 12px; right: 12px; display: flex; gap: 8px;">
        <button class="btn btn-primary" style="flex: 1; font-size: 12px; padding: 8px;" onclick="window.navigate('route')"><i data-lucide="navigation"></i> Rotas</button>
        <button class="btn btn-outline" style="flex: 1; font-size: 12px; padding: 8px; background: white;">Próximas</button>
      </div>
    </div>

    <div class="card" style="background: #FFF3E0; border: none;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="background: var(--accent); color: white; padding: 8px; border-radius: 8px;">
           <i data-lucide="alert-circle"></i>
        </div>
        <div>
          <h3 style="font-size: 14px; color: #E65100;">ALERTA</h3>
          <p style="font-size: 13px;">Revisar medicação da Dona Ana</p>
        </div>
      </div>
    </div>

    ${p()}
  </div>
`,te=()=>`
  <div class="screen fade-in">
    <header style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
      <button class="btn" style="padding: 8px; background: #eee" onclick="window.navigate('agenda')"><i data-lucide="arrow-left"></i></button>
      <h1>Ação Coletiva</h1>
    </header>
    <div class="card" style="display: flex; gap: 16px; align-items: center;">
      <div style="background: #FFF3E0; color: var(--accent); padding: 12px; border-radius: 12px;">
        <i data-lucide="megaphone" style="width: 32px; height: 32px;"></i>
      </div>
      <div>
        <h2 style="font-size: 16px; margin-bottom: 4px;">Campanha de Vacinação</h2>
        <p class="text-muted" style="font-size: 13px;">Ação coletiva agendada para a tarde. Equipe de apoio confirmada às 14h.</p>
      </div>
    </div>
    <div class="card" style="background: #E8F5E9; border: none;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <i data-lucide="info" style="color: #2E7D32;"></i>
        <p style="font-size: 13px; color: #1B5E20;">Esta atividade é coletiva e não está vinculada a um paciente específico. Marque como concluída na Rota Inteligente.</p>
      </div>
    </div>
    <button class="btn btn-primary" style="width: 100%; margin-top: 8px;" onclick="window.navigate('route')">
      <i data-lucide="navigation"></i> Ver Rota Inteligente
    </button>
  </div>
`,ie=t=>{if(!s.patients||s.patients.length===0)return`
      <div class="screen fade-in">
        <header style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
          <button class="btn" style="padding: 8px; background: #eee" onclick="window.navigate('agenda')"><i data-lucide="arrow-left"></i></button>
          <h1>Ficha do Paciente</h1>
        </header>
        <div class="card" style="text-align: center; color: var(--text-muted); padding: 40px 16px;">
          <i data-lucide="user-x" style="width: 48px; height: 48px; opacity: 0.4; margin-bottom: 12px;"></i>
          <p>Nenhum paciente encontrado.</p>
        </div>
      </div>
    `;const e=s.patients.find(a=>a.id===t)||s.patients[0];return`
    <div class="screen fade-in">
      <header style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
        <button class="btn" style="padding: 8px; background: #eee" onclick="window.navigate('agenda')"><i data-lucide="arrow-left"></i></button>
        <h1>Ficha do Paciente</h1>
      </header>

      <div class="card" style="display: flex; gap: 16px; align-items: center;">
        <div style="width: 60px; height: 60px; border-radius: 30px; background: #EBF2FF; display: flex; align-items: center; justify-content: center; color: var(--primary);">
          <i data-lucide="user" style="width: 32px; height: 32px;"></i>
        </div>
        <div>
          <h2 style="margin-bottom: 2px;">${e.name}</h2>
          <p class="text-muted">Paciente ID: #442${e.id}</p>
        </div>
      </div>

      <div class="card">
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Idade</p>
          <p style="font-weight: 500;">${e.age} anos</p>
        </div>
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Condição</p>
          <p style="font-weight: 500;">${e.condition}</p>
        </div>
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Última Visita</p>
          <p style="font-weight: 500;">${e.lastVisit}</p>
        </div>
        <div>
          <p class="text-muted">Observações</p>
          <p style="font-weight: 500;">Monitorar glicemia conforme prescrição.</p>
        </div>
      </div>

      <button class="btn btn-secondary" style="width: 100%; margin-bottom: 12px; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 8px;"><i data-lucide="file-text"></i> Histórico</div>
        <i data-lucide="chevron-down"></i>
      </button>

      <button class="btn" style="width: 100%; margin-bottom: 12px; justify-content: space-between; background: #FFB300; color: white;">
        <div style="display: flex; align-items: center; gap: 8px;"><i data-lucide="edit-3"></i> Anotações</div>
        <i data-lucide="chevron-down"></i>
      </button>

      <button class="btn btn-primary" style="width: 100%; margin-top: 20px;">
        Salvar Atualização
      </button>
    </div>
  `},ae=()=>`
  <div class="screen fade-in">
    <h1>Lembretes</h1>
    <p class="text-muted" style="margin-bottom: 20px;">Prioridades para hoje e amanhã</p>

    <div class="card" style="display: flex; gap: 16px; align-items: flex-start;">
       <div style="background: #FFEBEE; color: var(--danger); padding: 10px; border-radius: 12px;"><i data-lucide="pill"></i></div>
       <div>
         <h3 style="font-size: 15px;">Visitar Dona Ana</h3>
         <p class="text-muted">Revisar medicação pós-cirúrgica</p>
       </div>
    </div>

    <div class="card" style="display: flex; gap: 16px; align-items: flex-start;">
       <div style="background: #E3F2FD; color: var(--primary); padding: 10px; border-radius: 12px;"><i data-lucide="thermometer"></i></div>
       <div>
         <h3 style="font-size: 15px;">Consultar Sr. Pedro</h3>
         <p class="text-muted">Controlar Glicose em jejum</p>
       </div>
    </div>

    <div class="card" style="display: flex; gap: 16px; align-items: flex-start;">
       <div style="background: #FFF3E0; color: var(--accent); padding: 10px; border-radius: 12px;"><i data-lucide="syringe"></i></div>
       <div>
         <h3 style="font-size: 15px;">Vacinação das Crianças</h3>
         <p class="text-muted">Rua das Amendoeiras, n 5</p>
       </div>
    </div>

    ${p()}
  </div>
`,ne=()=>`
  <div class="screen fade-in">
    <h1>Notificações</h1>
    <div style="margin-top: 20px;">
      <div class="card" style="display: flex; gap: 16px;">
        <i data-lucide="info" style="color: var(--primary)"></i>
        <div>
          <p style="font-weight: 500;">Visita ao Sr. Carlos às 10:45</p>
          <p class="text-muted" style="font-size: 12px;">Confirmado via sistema</p>
        </div>
      </div>
      <div class="card" style="display: flex; gap: 16px;">
        <i data-lucide="megaphone" style="color: var(--accent)"></i>
        <div>
          <p style="font-weight: 500;">Campanha de Vacinação à tarde</p>
          <p class="text-muted" style="font-size: 12px;">Equipe de apoio chegará às 14h</p>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" style="margin-top: auto;" onclick="window.navigate('agenda')">OK</button>
    ${p()}
  </div>
`,se=()=>{const t=s.visits.filter(i=>i.visited).length,e=s.visits.length,a=t===e,n=e>0?t/e*100:0;return`
  <div class="screen fade-in">
    <header style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
      <button class="btn" style="padding: 8px; background: #eee" onclick="window.navigate('agenda')"><i data-lucide="arrow-left"></i></button>
      <h1 style="color: var(--primary)">Rota Inteligente</h1>
    </header>

    <div style="margin-bottom: 24px; padding: 0 10px;">
      <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
        <span>Progresso Diário</span>
        <span style="font-weight: 600; color: var(--primary);">${t}/${e}</span>
      </div>
      <div style="height: 8px; background: #E0E0E0; border-radius: 4px; overflow: hidden;">
        <div style="height: 100%; width: ${n}%; background: var(--secondary); transition: var(--transition);"></div>
      </div>
    </div>

    ${a?`
      <div class="card" style="background: var(--secondary); color: white; text-align: center; padding: 32px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 40px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <i data-lucide="check" style="width: 48px; height: 48px;"></i>
        </div>
        <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">As visitas foram concluídas!</h2>
        <p style="font-size: 16px; opacity: 0.9;">Parabéns!</p>
      </div>
    `:`
      <div style="display: flex; flex-direction: column; gap: 12px; position: relative;">
        <!-- Track line -->
        <div style="position: absolute; left: 24px; top: 20px; bottom: 20px; width: 4px; background: #E0E0E0; z-index: 1;"></div>
        
        ${s.visits.map((i,o)=>{const r=s.patients.find(l=>l.id===i.patientId),d=r?r.name:i.name||"Ação Coletiva",c=i.type||r?.address||"Ação Coletiva";return`
            <div class="card" style="display: flex; align-items: center; gap: 16px; z-index: 2; padding: 12px 16px; cursor: pointer; transition: all 0.2s ease-out; ${i.visited?"opacity: 0.6; border: 1px solid var(--secondary);":""}" onclick="window.toggleVisit(${i.id})">
              <div style="width: 48px; height: 48px; min-width: 48px; border-radius: 24px; background: ${i.visited?"var(--secondary)":"white"}; border: 4px solid ${i.visited?"white":"var(--primary)"}; display: flex; align-items: center; justify-content: center; color: ${i.visited?"white":"var(--primary)"}; opacity: 1; transition: all 0.2s ease-out; box-shadow: 0 0 0 2px ${i.visited?"var(--secondary)":"var(--primary)"}; font-weight: bold;">
                 ${i.visited?'<i data-lucide="check"></i>':o+1}
              </div>
              <div style="flex: 1;">
                 <h3 style="font-size: 15px; margin-bottom: 2px; text-decoration: ${i.visited?"line-through":"none"}; color: ${i.visited?"var(--text-muted)":"var(--text)"}">${d}</h3>
                 <p class="text-muted" style="font-size: 12px; text-align: left; text-decoration: ${i.visited?"line-through":"none"};">${c}</p>
              </div>
            </div>
          `}).join("")}
      </div>
    `}
  </div>
  `};function u(){const t=document.getElementById("app");let e="";switch(s.currentView){case"login":e=h();break;case"agenda":e=ee();break;case"patient":e=ie(s.currentPatientId);break;case"reminders":e=ae();break;case"notifications":e=ne();break;case"route":e=se();break;case"campaign":e=te();break;default:e=h()}t.innerHTML=e,f({icons:{Calendar:F,Activity:S,Heart:R,Bell:I,MessageSquare:T,MapPin:B,Navigation:q,AlertCircle:N,ArrowLeft:z,ChevronDown:L,User:Z,FileText:H,Edit3:U,Pill:_,Thermometer:J,Syringe:G,Info:O,Megaphone:D,Check:j,UserX:K}})}u();
