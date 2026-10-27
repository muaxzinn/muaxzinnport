/**
 * ====================================================================
 * Firman Awea Portfolio - Interactive AI Agent Terminal Engine
 * Virtual CLI Shell | Agent Workflow Simulation | Monospace Logs
 * ====================================================================
 */

class AIAgentTerminal {
  constructor() {
    this.body = document.getElementById('terminal-body');
    this.input = document.getElementById('terminal-input');
    this.clearBtn = document.getElementById('terminal-clear-btn');
    this.quickTags = document.querySelectorAll('.terminal-tag');

    this.commandHistory = [];
    this.historyIdx = -1;

    this.init();
  }

  init() {
    this.printWelcome();
    this.bindEvents();
  }

  printWelcome() {
    this.log('Firman Awea - Autonomous AI Agent Console [v2.4.0-release]', 'info');
    this.log('Type "help" for a list of available system commands.', 'muted');
    this.log('System ready. Neural link established (Client-Side).', 'success');
  }

  log(text, type = 'normal') {
    if (!this.body) return;
    const line = document.createElement('div');
    line.className = `terminal-log-line terminal-log-${type}`;
    line.innerHTML = text;
    this.body.appendChild(line);
    this.body.scrollTop = this.body.scrollHeight;
  }

  clear() {
    if (!this.body) return;
    this.body.innerHTML = '';
    this.printWelcome();
  }

  execute(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    this.commandHistory.push(cmd);
    this.historyIdx = this.commandHistory.length;

    this.log(`<span class="terminal-prompt">firman@agent:~$</span> <span class="terminal-log-cmd">${cmd}</span>`);

    const parts = cmd.split(' ');
    const main = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    switch (main) {
      case 'help':
        this.log('Available Commands:', 'info');
        this.log('  <span class="text-white">help</span>        - Show this manual');
        this.log('  <span class="text-white">status</span>      - Display system diagnostics & age');
        this.log('  <span class="text-white">projects</span>    - List flagship & local engineering projects');
        this.log('  <span class="text-white">agent run</span>   - Simulate autonomous AI Agent execution');
        this.log('  <span class="text-white">roadmap</span>     - View minipos & hongsamud version evolution');
        this.log('  <span class="text-white">skills</span>      - Output full technical competence matrix');
        this.log('  <span class="text-white">hardware</span>    - Inspect ESP32 & IoT sensor telemetry');
        this.log('  <span class="text-white">contact</span>     - Show contact coordinates & GitHub');
        this.log('  <span class="text-white">clear</span>       - Clear terminal buffer');
        break;

      case 'status':
        const age = window.CONFIG ? window.CONFIG.getAge() : 18;
        this.log('[DIAGNOSTICS REPORT]', 'info');
        this.log(`  Architect:   Firman Awea (@muaxzinn)`);
        this.log(`  Dynamic Age: ${age} Years Old`);
        this.log(`  Core Stack:  TensorFlow.js, Three.js, C++ ESP32, Supabase, Vanilla Web`);
        this.log(`  Location:    Narathiwat, Thailand`);
        this.log(`  Security:    Zero External CDN Dependencies on POS, 100% Client Privacy`);
        this.log(`  System Health: OPTIMAL (60 FPS)`, 'success');
        break;

      case 'projects':
        this.log('[ENGINEERING HIGHLIGHTS]', 'info');
        this.log('  1. SBLT-CAS (Medical AI 7-System Router Platform) &rarr; 93% accuracy');
        this.log('  2. minipos v2 (Smart POS & Touchscreen BOT EMVCo PromptPay Terminal)');
        this.log('  3. XQuant (Colorimetric Beer-Lambert Law Spectrophotometer)');
        this.log('  4. hongsamud v2 (RFID Library System + Supabase Realtime)');
        this.log('  5. Smart Cap & Glasses for the Blind (Assistive IoT)');
        this.log('  Type "roadmap" to view version histories.', 'muted');
        break;

      case 'roadmap':
        this.log('[MICRO-ROADMAP EVOLUTION]', 'info');
        this.log('  &bull; minipos:  v1.0 (CYD Terminal) &rarr; v1.2 (Next-Gen Architecture) &rarr; <span class="text-emerald-400 font-bold">v2.0 (Smart POS Ecosystem) [Current]</span>');
        this.log('  &bull; hongsamud: v1.0 (RFID Hardware Prototype) &rarr; <span class="text-emerald-400 font-bold">v2.0 (Supabase Realtime Cloud) [Current]</span>');
        break;

      case 'agent':
        if (arg.startsWith('run')) {
          this.log(`[AGENT INITIATED] Task: "${arg.replace('run', '').trim() || 'Analyze Medical Dataset'}"`, 'info');
          this.log('  &gt; Step 1/3: Analyzing schema & system constraints... OK', 'muted');
          setTimeout(() => this.log('  &gt; Step 2/3: Synthesizing neural network logic & weights... OK', 'muted'), 350);
          setTimeout(() => {
            this.log('  &gt; Step 3/3: Executing inference validation... DONE', 'success');
            this.log('[AGENT SUCCESS] Task completed in 0.42s with zero hallucinations.', 'success');
          }, 700);
        } else {
          this.log('Usage: agent run [task description]', 'warn');
        }
        break;

      case 'skills':
        this.log('[CORE COMPETENCIES]', 'info');
        this.log('  1. AI & ML:        TensorFlow.js, Computer Vision, Prompt Engineering, Python');
        this.log('  2. Web Logic:      Vanilla JS ES6+, HTML5 Canvas, Tailwind, Three.js');
        this.log('  3. Embedded & IoT: ESP32, Arduino, C/C++, RFID, Ultrasonic, GPS, PlatformIO');
        this.log('  4. System Design:  Router Architecture, Beer-Lambert Law, Supabase Realtime');
        break;

      case 'hardware':
        this.log('[EMBEDDED HARDWARE TELEMETRY]', 'info');
        this.log('  Device 1: ESP32-2432S028R (CYD 2.8" Resistive Touchscreen Display)');
        this.log('  Device 2: RC522 RFID High-Frequency 13.56MHz Reader');
        this.log('  Device 3: SSD1306 0.96" I2C Monochrome OLED');
        this.log('  Device 4: Ultrasonic HC-SR04 & ToF Laser Distance Sensor');
        this.log('  Device 5: NEO-6M GPS Satellite Telemetry Module');
        break;

      case 'contact':
        this.log('[CONTACT COORDINATES]', 'info');
        this.log('  Phone:    091-725-7551');
        this.log('  Email:    muaxzinn00374345@gmail.com');
        this.log('  GitHub:   https://github.com/muaxzinn');
        this.log('  Facebook: https://www.facebook.com/share/1Y438VRbRE/');
        break;

      case 'clear':
        this.clear();
        break;

      default:
        this.log(`Command not recognized: "${cmd}". Type "help" for options.`, 'warn');
        break;
    }
  }

  bindEvents() {
    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (window.soundSynth) window.soundSynth.playTerminalKey();

        if (e.key === 'Enter') {
          const val = this.input.value;
          this.input.value = '';
          this.execute(val);
        } else if (e.key === 'ArrowUp') {
          if (this.historyIdx > 0) {
            this.historyIdx--;
            this.input.value = this.commandHistory[this.historyIdx];
          }
        } else if (e.key === 'ArrowDown') {
          if (this.historyIdx < this.commandHistory.length - 1) {
            this.historyIdx++;
            this.input.value = this.commandHistory[this.historyIdx];
          } else {
            this.historyIdx = this.commandHistory.length;
            this.input.value = '';
          }
        }
      });
    }

    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clear());
    }

    // Quick tag pills click
    this.quickTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const cmd = tag.getAttribute('data-cmd');
        if (cmd) {
          if (this.input) this.input.value = cmd;
          this.execute(cmd);
          if (this.input) this.input.focus();
        }
      });
    });
  }
}

window.AIAgentTerminal = AIAgentTerminal;
