# Alys5 | Crafting Digital Experiences 🎨

UX/UI Design • Front-End Development • Digital Innovation

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Vue Version](https://img.shields.io/badge/vue-3.x-brightgreen)
![Vuetify](https://img.shields.io/badge/vuetify-3.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Deployment](https://img.shields.io/badge/deployment-Vercel-black)

Benvenuti nel mio portfolio professionale, progettato per mostrare un decennio di esperienza in UX/UI Design e sviluppo front-end. Costruito con Vue.js e Vuetify, questo sito rappresenta il mio approccio alla creazione di esperienze digitali intuitive e coinvolgenti.

## ✨ Features

- 🎯 Design responsivo ottimizzato per tutti i dispositivi
- 🌓 Supporto tema Chiaro/Scuro
- 📱 Approccio mobile-first
- ⚡ Prestazioni ottimizzate con Vercel Edge Network
- 🎮 Componenti UI interattivi
- 📊 Case studies dei progetti
- 🔍 SEO ottimizzato

## 🚀 Quick Start

### Prerequisiti

- Node.js (v16 o superiore)
- npm o yarn
- Vercel CLI (opzionale per sviluppo locale)

### Installazione

```bash
# Clona il repository
git clone https://github.com/Alys5/Alys5-Portfolio.git

# Accedi alla directory del progetto
cd Alys5-Portfolio

# Installa le dipendenze
npm install
# o
yarn install

# Installa Vercel CLI (opzionale)
npm i -g vercel

# Avvia il server di sviluppo
npm run dev
# o
yarn dev
```

### Compilare per la Produzione

```bash
# Compila per la produzione
npm run build
# o
yarn build

# Anteprima della build di produzione con Vercel CLI
vercel dev
```

## 🛠️ Tech Stack

- **Framework:** Vue.js 3
- **UI Library:** Vuetify 3
- **State Management:** Pinia
- **Router:** Vue Router
- **Styling:** SCSS/CSS
- **Animazione:** GSAP
- **Testing:** Vitest e Cypress
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics

## 📁 Project Structure

```
src/                              # Codice sorgente dell'applicazione
├── assets/                       # Risorse come immagini e stili
├── components/                   # Componenti riutilizzabili dell'interfaccia utente
├── router/                       # Definisce le rotte dell'applicazione
├── services/                     # Moduli per le chiamate API e la gestione dei dati
├── store/                        # Gestione dello stato globale (es. Vuex per Vue.js)
├── styles/                       # Stili globali e file CSS/Sass
├── utils/                        # Funzioni e helper riutilizzabili
├── views/                        # Viste principali (ogni file rappresenta una pagina dell'app)
├── App.vue                       # Componente root dell'applicazione Vue
└── main.js                       # File di ingresso dell'applicazione Vue
```

## 🔧 Configurazione

### Variabili di Ambiente

Crea un file `.env` nella directory principale:

```env
VITE_APP_TITLE=Alys5 | Crafting Digital Experiences
VITE_API_BASE_URL=your-api-url
```

### Configurazione di Build

- `vite.config.js` - Configurazione di build
- `vuetify.config.js` - Impostazioni tema e plugin Vuetify
- `vercel.json` - Configurazione per il deployment su Vercel

## 🌐 Deployment

Questo sito è automaticamente distribuito tramite Vercel al push sul ramo `main`.

### Configurazione per il Deployment

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Comandi per il Deployment

```bash
# Distribuisci su Vercel
vercel

# Distribuisci in produzione
vercel --prod
```

## 🧪 Testing

```bash
# Esegui test unitari
npm run test
# o
yarn test

# Esegui test e2e
npm run test:e2e
# o
yarn test:e2e
```

## 📚 Struttura dei Rami

### Ramo Principale

- **main**: Ramo stabile che riflette sempre la versione rilasciata del sito.

### Rami di Sviluppo

- **develop**: Punto di partenza per tutte le nuove funzionalità e correzioni di bug. Lo sviluppo attivo avviene in questo ramo.

### Rami di Funzionalità (feature/\*)

- **feature/ux-ui-redesign**: Per modifiche significative all'interfaccia utente.
- **feature/e-commerce**: Per l'implementazione di un negozio online.
- **feature/nuovo-modulo**: Per l'aggiunta di un nuovo modulo al sito.

### Rami di Correzione Bug (bugfix/\*)

- **bugfix/problema-login**: Per la correzione di un bug specifico legato al login.
- **bugfix/errore-visualizzazione**: Per risolvere problemi di visualizzazione.

### Come Utilizzare Questa Struttura

1. **Inizia sempre da `develop`**: Crea un nuovo ramo da `develop` per ogni nuova funzionalità o bugfix.
2. **Isola le modifiche**: Ogni ramo deve contenere solo le modifiche specifiche alla funzionalità o al bug.
3. **Crea pull request**: Una volta completato il lavoro in un ramo, crea una pull request verso `develop` per una revisione.
4. **Fusione in `develop`**: Dopo l'approvazione, fondi il tuo ramo in `develop`.
5. **Aggiorna `main`**: Periodicamente, crea un ramo di rilascio basato su `develop` e fondilo in `main` per rilasciare una nuova versione.

### Vantaggi

- **Organizzazione**: La struttura dei rami semplifica la gestione e comprensione del codice.
- **Flessibilità**: Permette di lavorare su più funzionalità contemporaneamente senza conflitti.
- **Tracciabilità**: Facilita la verifica dello stato di ogni funzionalità e della cronologia delle modifiche.
- **Collaborazione**: Simula un ambiente collaborativo anche per un progetto individuale.

## 📝 License

Distribuito sotto la licenza MIT. Per i dettagli, consulta il file [LICENSE](LICENSE).

## 👩‍💻 Su di Me

Sono Alice Mandelli, una UX/UI Designer e Front-end Developer con oltre 10 anni di esperienza nel creare esperienze digitali uniche. Vincitrice del Nielsen Norman Intranet Design Annual Award 2021, mi dedico a creare interfacce intuitive che combinano estetica e funzionalità.

### 🔗 Connettiti con Me

- Portfolio: [alys5.eu](https://alys5.eu)
- LinkedIn: [linkedin.com/in/alys5](https://linkedin.com/in/alys5)
- Fiverr: [fiverr.com/alys_5](https://fiverr.com/alys_5)

## 🙏 Acknowledgments

- Icone da [Lucide Icons](https://lucide.dev)
- Animazioni con [GSAP](https://greensock.com/gsap)
- Distribuito tramite [Vercel](https://vercel.com)
- Analytics da [Vercel Analytics](https://vercel.com/analytics)
