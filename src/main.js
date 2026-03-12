import './style.css'
import { createIcons, Calendar, Activity, Heart, Bell, MessageSquare, MapPin, Navigation, AlertCircle, ArrowLeft, ChevronDown, User, FileText, Edit3, Pill, Thermometer, Syringe, Info, Megaphone, Check, UserX } from 'lucide'

// ─── State Management ─────────────────────────────────────────────────────────
const STORAGE_KEY = 'saude_lembrete_visits';

function loadVisitsFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed;
    }
  } catch (e) {
    console.warn('Erro ao carregar visitas do localStorage:', e);
  }
  return null;
}

function saveVisitsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.visits));
  } catch (e) {
    console.warn('Erro ao salvar visitas no localStorage:', e);
  }
}

const defaultVisits = [
  { id: 101, time: '08:30', patientId: 1, type: 'Pré-Natal', visited: false },
  { id: 102, time: '09:15', patientId: 2, type: 'Diabetes', visited: false },
  { id: 103, time: '10:44', patientId: 3, type: 'Hipertensão', visited: false },
  { id: 104, time: '13:30', name: 'Campanha de Vacinação', isCampaign: true, visited: false },
];

const state = {
  currentView: 'login',
  currentPatientId: null,
  user: null,
  patients: [
    { id: 1, name: 'Dona Maria', age: 68, condition: 'Pré-Natal / Hipertensão', lastVisit: '10/02/2026', address: 'Rua das Flores, 123' },
    { id: 2, name: 'Seu João', age: 65, condition: 'Diabetes', lastVisit: '15/02/2026', address: 'Av. Principal, 456' },
    { id: 3, name: 'Sr. Carlos', age: 72, condition: 'Hipertensão', lastVisit: '01/03/2026', address: 'Rua da Paz, 78' },
  ],
  visits: loadVisitsFromStorage() || defaultVisits,
};

// ─── Bug #2 Fix: Unified navigate function ────────────────────────────────────
window.navigate = (view, id) => {
  if (id !== undefined) state.currentPatientId = id;
  state.currentView = view;
  render();
  window.scrollTo(0, 0);
};

// ─── Actions ──────────────────────────────────────────────────────────────────
window.toggleVisit = (id) => {
  const visit = state.visits.find(v => v.id === id);
  if (visit) {
    visit.visited = !visit.visited;
    saveVisitsToStorage(); // Bug #5 Fix: persist to localStorage
    render();
  }
};

// Bug #3 Fix: Login validation
window.handleLogin = () => {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const errorMsg = document.getElementById('login-error');

  const email = emailInput?.value?.trim();
  const password = passwordInput?.value?.trim();

  if (!email || !password) {
    if (errorMsg) {
      errorMsg.textContent = 'Por favor, preencha e-mail e senha.';
      errorMsg.style.display = 'block';
    }
    return;
  }

  // Simple email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errorMsg) {
      errorMsg.textContent = 'Digite um e-mail válido.';
      errorMsg.style.display = 'block';
    }
    return;
  }

  window.navigate('agenda');
};

// ─── Components ───────────────────────────────────────────────────────────────
const Logo = () => `
  <div class="logo-container">
    <div class="logo-icons">
      <div class="icon-box icon-blue"><i data-lucide="calendar"></i></div>
      <div class="icon-box icon-green"><i data-lucide="activity"></i></div>
      <div class="icon-box icon-orange"><i data-lucide="heart"></i></div>
    </div>
    <h1>SaúdeLembrete</h1>
    <p class="text-muted">Assistente para agentes de saúde</p>
  </div>
`;

const BottomNav = () => `
  <nav class="bottom-nav">
    <a href="#" class="nav-item ${state.currentView === 'agenda' ? 'active' : ''}" onclick="event.preventDefault(); window.navigate('agenda')">
      <i data-lucide="calendar"></i>
      <span>Agenda</span>
    </a>
    <a href="#" class="nav-item ${state.currentView === 'reminders' ? 'active' : ''}" onclick="event.preventDefault(); window.navigate('reminders')">
      <i data-lucide="bell"></i>
      <span>Alertas</span>
    </a>
    <a href="#" class="nav-item ${state.currentView === 'notifications' ? 'active' : ''}" onclick="event.preventDefault(); window.navigate('notifications')">
      <i data-lucide="message-square"></i>
      <span>Avisos</span>
    </a>
  </nav>
`;

// ─── Views ────────────────────────────────────────────────────────────────────
const LoginView = () => `
  <div class="screen splash">
    ${Logo()}
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
`;

const AgendaView = () => `
  <div class="screen fade-in">
    <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
      <h1 style="color: var(--text)">Agenda de Hoje</h1>
      <div class="badge badge-blue">12 Mar</div>
    </header>

    <div class="card" style="border-left: 4px solid var(--primary);">
       ${state.visits.map(v => {
  const patient = state.patients.find(p => p.id === v.patientId);
  const name = patient ? patient.name : (v.name || 'Ação Coletiva');

  // Bug #1 Fix: only navigate to patient if patient exists; campaigns show a notice
  const clickAction = patient
    ? `window.navigate('patient', ${patient.id})`
    : `window.navigate('campaign')`;

  return `
          <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; cursor: pointer;"
               onclick="${clickAction}">
            <div>
              <span style="font-weight: 700; color: var(--primary); margin-right: 12px;">${v.time}</span>
              <span style="font-weight: 500;">${name}</span>
            </div>
            <span class="text-muted" style="font-size: 12px;">${v.type || 'Público'}</span>
          </div>
         `;
}).join('')}
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

    ${BottomNav()}
  </div>
`;

// Bug #1 Fix: Campaign view for collective actions
const CampaignView = () => `
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
`;

const PatientView = (id) => {
  // Bug #7 Fix: guard for empty patients list
  if (!state.patients || state.patients.length === 0) {
    return `
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
    `;
  }

  const patient = state.patients.find(p => p.id === id) || state.patients[0];

  return `
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
          <h2 style="margin-bottom: 2px;">${patient.name}</h2>
          <p class="text-muted">Paciente ID: #442${patient.id}</p>
        </div>
      </div>

      <div class="card">
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Idade</p>
          <p style="font-weight: 500;">${patient.age} anos</p>
        </div>
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Condição</p>
          <p style="font-weight: 500;">${patient.condition}</p>
        </div>
        <div style="margin-bottom: 12px;">
          <p class="text-muted">Última Visita</p>
          <p style="font-weight: 500;">${patient.lastVisit}</p>
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
  `;
};

const RemindersView = () => `
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

    ${BottomNav()}
  </div>
`;

const NotificationsView = () => `
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
    ${BottomNav()}
  </div>
`;

const RouteView = () => {
  const completedVisits = state.visits.filter(v => v.visited).length;
  const totalVisits = state.visits.length;
  const allComplete = completedVisits === totalVisits;

  // Bug #6 Fix: guard against division by zero
  const progressPercent = totalVisits > 0 ? (completedVisits / totalVisits) * 100 : 0;

  return `
  <div class="screen fade-in">
    <header style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
      <button class="btn" style="padding: 8px; background: #eee" onclick="window.navigate('agenda')"><i data-lucide="arrow-left"></i></button>
      <h1 style="color: var(--primary)">Rota Inteligente</h1>
    </header>

    <div style="margin-bottom: 24px; padding: 0 10px;">
      <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
        <span>Progresso Diário</span>
        <span style="font-weight: 600; color: var(--primary);">${completedVisits}/${totalVisits}</span>
      </div>
      <div style="height: 8px; background: #E0E0E0; border-radius: 4px; overflow: hidden;">
        <div style="height: 100%; width: ${progressPercent}%; background: var(--secondary); transition: var(--transition);"></div>
      </div>
    </div>

    ${allComplete ? `
      <div class="card" style="background: var(--secondary); color: white; text-align: center; padding: 32px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 40px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <i data-lucide="check" style="width: 48px; height: 48px;"></i>
        </div>
        <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">As visitas foram concluídas!</h2>
        <p style="font-size: 16px; opacity: 0.9;">Parabéns!</p>
      </div>
    ` : `
      <div style="display: flex; flex-direction: column; gap: 12px; position: relative;">
        <!-- Track line -->
        <div style="position: absolute; left: 24px; top: 20px; bottom: 20px; width: 4px; background: #E0E0E0; z-index: 1;"></div>
        
        ${state.visits.map((v, index) => {
    const patient = state.patients.find(p => p.id === v.patientId);
    const name = patient ? patient.name : (v.name || 'Ação Coletiva');
    const subtitle = v.type || patient?.address || 'Ação Coletiva';
    return `
            <div class="card" style="display: flex; align-items: center; gap: 16px; z-index: 2; padding: 12px 16px; cursor: pointer; transition: all 0.2s ease-out; ${v.visited ? 'opacity: 0.6; border: 1px solid var(--secondary);' : ''}" onclick="window.toggleVisit(${v.id})">
              <div style="width: 48px; height: 48px; min-width: 48px; border-radius: 24px; background: ${v.visited ? 'var(--secondary)' : 'white'}; border: 4px solid ${v.visited ? 'white' : 'var(--primary)'}; display: flex; align-items: center; justify-content: center; color: ${v.visited ? 'white' : 'var(--primary)'}; opacity: 1; transition: all 0.2s ease-out; box-shadow: 0 0 0 2px ${v.visited ? 'var(--secondary)' : 'var(--primary)'}; font-weight: bold;">
                 ${v.visited ? '<i data-lucide="check"></i>' : index + 1}
              </div>
              <div style="flex: 1;">
                 <h3 style="font-size: 15px; margin-bottom: 2px; text-decoration: ${v.visited ? 'line-through' : 'none'}; color: ${v.visited ? 'var(--text-muted)' : 'var(--text)'}">${name}</h3>
                 <p class="text-muted" style="font-size: 12px; text-align: left; text-decoration: ${v.visited ? 'line-through' : 'none'};">${subtitle}</p>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    `}
  </div>
  `;
};

// ─── Render Engine ────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  let content = '';

  switch (state.currentView) {
    case 'login': content = LoginView(); break;
    case 'agenda': content = AgendaView(); break;
    case 'patient': content = PatientView(state.currentPatientId); break;
    case 'reminders': content = RemindersView(); break;
    case 'notifications': content = NotificationsView(); break;
    case 'route': content = RouteView(); break;
    case 'campaign': content = CampaignView(); break;  // Bug #1 Fix
    default: content = LoginView();
  }

  app.innerHTML = content;
  createIcons({
    icons: {
      Calendar, Activity, Heart, Bell, MessageSquare, MapPin, Navigation,
      AlertCircle, ArrowLeft, ChevronDown, User, FileText, Edit3, Pill,
      Thermometer, Syringe, Info, Megaphone, Check, UserX
    }
  });
}

// ─── Start ────────────────────────────────────────────────────────────────────
render();
