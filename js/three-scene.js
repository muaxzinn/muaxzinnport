/**
 * ====================================================================
 * Firman Awea Portfolio - Three.js Advanced 3D Holographic Core Engine
 * 4 Interactive Modes:
 *   1. AI Agent Core (Crystalline Dodecahedron + Orbiting Telemetry Satellites)
 *   2. Medical DNA Double Helix (Dynamic Rotating Strands & Genetic Base Pairs)
 *   3. IoT Sensor Sphere (Geodesic Wireframe Globe + Orbital Data Transmitters)
 *   4. Neural Synapse Network (Pulsing Synaptic Nodes & Dynamic Axon Connections)
 * Real-time Cursor Light Tracking, Depth Starfield & Dual-Ring Shockwaves
 * ====================================================================
 */

class HolographicCore3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container || typeof THREE === 'undefined') return;

    this.currentMode = 'ai-agent';
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.coreGroup = null;
    this.starfield = null;
    this.mouseLight = null;
    this.shockwaveParticles = [];
    this.isWireframe = false;

    // Interaction states
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0;
    this.targetRotationY = 0;
    this.isDragging = false;
    this.prevMouseX = 0;
    this.prevMouseY = 0;

    this.init();
  }

  init() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 24;

    // 3. Renderer with high performance & antialiasing
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('three-canvas'),
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(12, 12, 16);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x14b8a6, 2.0);
    dirLight2.position.set(-12, -12, -12);
    this.scene.add(dirLight2);

    // Interactive Point Light that follows mouse cursor in 3D
    this.mouseLight = new THREE.PointLight(0x38bdf8, 4.0, 40);
    this.mouseLight.position.set(0, 0, 15);
    this.scene.add(this.mouseLight);

    // 5. 3D Cosmic Stardust / Depth Starfield
    this.buildStarfield();

    // 6. Core Group for Modes
    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    // Build Initial Mode
    this.buildMode(this.currentMode);

    // 7. Event Listeners
    this.bindEvents();

    // 8. Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // 3D Stardust Depth Particles
  buildStarfield() {
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.35,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);
  }

  clearGroup() {
    while (this.coreGroup.children.length > 0) {
      const obj = this.coreGroup.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
      this.coreGroup.remove(obj);
    }
  }

  buildMode(mode) {
    this.clearGroup();
    this.currentMode = mode;

    switch (mode) {
      case 'ai-agent':
        this.buildAIAgentMode();
        break;
      case 'dna-helix':
        this.buildDNAHelixMode();
        break;
      case 'iot-sphere':
        this.buildIoTSphereMode();
        break;
      case 'synapse-mesh':
        this.buildSynapseMeshMode();
        break;
      default:
        this.buildAIAgentMode();
        break;
    }
  }

  // MODE 1: AI Agent Hologram (Crystalline Core + Orbiting Autonomous Agent Nodes)
  buildAIAgentMode() {
    // Central Dodecahedron Crystal
    const coreGeo = new THREE.DodecahedronGeometry(4.2, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
      shininess: 90
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.coreGroup.add(coreMesh);

    // Inner Glowing Icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: false,
      transparent: true,
      opacity: 0.45
    });
    this.innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.innerMesh);

    // Orbiting Agent Nodes
    this.agentNodes = [];
    const agentCount = 6;
    for (let i = 0; i < agentCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.55, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: (i % 2 === 0) ? 0x14b8a6 : 0x8b5cf6,
        transparent: true,
        opacity: 0.95
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.userData = { angle: (i / agentCount) * Math.PI * 2, radius: 7.4, speed: 0.015 + (i * 0.003) };
      this.coreGroup.add(nodeMesh);
      this.agentNodes.push(nodeMesh);
    }

    // Outer Gyroscope Rings
    const ringGeo1 = new THREE.RingGeometry(8.6, 8.78, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    this.ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    this.ringMesh1.rotation.x = Math.PI / 3;
    this.coreGroup.add(this.ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(9.2, 9.35, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    this.ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.ringMesh2.rotation.y = Math.PI / 4;
    this.coreGroup.add(this.ringMesh2);
  }

  // MODE 2: Medical AI (3D Revolving DNA Double Helix with Genetic Base Pairs)
  buildDNAHelixMode() {
    const pairs = 34;
    const radius = 3.8;
    const height = 15;

    for (let i = 0; i < pairs; i++) {
      const progress = (i / pairs);
      const angle = progress * Math.PI * 4;
      const y = (progress - 0.5) * height;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Strand 1 node
      const n1Geo = new THREE.SphereGeometry(0.42, 14, 14);
      const n1Mat = new THREE.MeshBasicMaterial({ color: 0x14b8a6 });
      const n1 = new THREE.Mesh(n1Geo, n1Mat);
      n1.position.set(x1, y, z1);
      this.coreGroup.add(n1);

      // Strand 2 node
      const n2Geo = new THREE.SphereGeometry(0.42, 14, 14);
      const n2Mat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
      const n2 = new THREE.Mesh(n2Geo, n2Mat);
      n2.position.set(x2, y, z2);
      this.coreGroup.add(n2);

      // Base pair bridge rung
      const rungMat = new THREE.LineBasicMaterial({
        color: (i % 3 === 0) ? 0x8b5cf6 : 0x38bdf8,
        transparent: true,
        opacity: 0.65
      });
      const points = [new THREE.Vector3(x1, y, z1), new THREE.Vector3(x2, y, z2)];
      const rungGeo = new THREE.BufferGeometry().setFromPoints(points);
      const rung = new THREE.Line(rungGeo, rungMat);
      this.coreGroup.add(rung);
    }
  }

  // MODE 3: IoT Sensor Sphere (Geodesic Wireframe Globe + Orbiting Satellites)
  buildIoTSphereMode() {
    const sphereGeo = new THREE.IcosahedronGeometry(5.4, 2);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      emissive: 0x064e3b,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const globe = new THREE.Mesh(sphereGeo, sphereMat);
    this.coreGroup.add(globe);

    // Orbiting Satellite Trackers
    this.satellites = [];
    for (let i = 0; i < 5; i++) {
      const satGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const satMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.userData = { angle: (i / 5) * Math.PI * 2, radius: 8.2, inclination: (i * 0.45) };
      this.coreGroup.add(sat);
      this.satellites.push(sat);
    }
  }

  // MODE 4: Neural Synapse Network (3D Interconnected Synaptic Nodes)
  buildSynapseMeshMode() {
    this.synapseNodes = [];
    const nodeCount = 28;
    const bounds = 6.0;

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * bounds * 2;
      const y = (Math.random() - 0.5) * bounds * 2;
      const z = (Math.random() - 0.5) * bounds * 2;

      const nGeo = new THREE.SphereGeometry(0.4, 12, 12);
      const nMat = new THREE.MeshBasicMaterial({
        color: (i % 3 === 0) ? 0x8b5cf6 : (i % 2 === 0 ? 0x38bdf8 : 0x14b8a6)
      });
      const node = new THREE.Mesh(nGeo, nMat);
      node.position.set(x, y, z);
      this.coreGroup.add(node);
      this.synapseNodes.push(node);
    }

    // Connect close neighbors with axon lines
    for (let i = 0; i < this.synapseNodes.length; i++) {
      for (let j = i + 1; j < this.synapseNodes.length; j++) {
        const dist = this.synapseNodes[i].position.distanceTo(this.synapseNodes[j].position);
        if (dist < 4.8) {
          const lMat = new THREE.LineBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: Math.max(0.1, 0.45 * (1 - dist / 4.8))
          });
          const points = [this.synapseNodes[i].position, this.synapseNodes[j].position];
          const lGeo = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lGeo, lMat);
          this.coreGroup.add(line);
        }
      }
    }
  }

  // Particle Shockwave Explosion Effect with Dual Rings
  triggerShockwave(hitX = 0, hitY = 0) {
    if (window.soundSynth) window.soundSynth.playShockwave();

    const particleCount = 85;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = hitX;
      positions[i * 3 + 1] = hitY;
      positions[i * 3 + 2] = 0;

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.45 + 0.18;
      const vz = (Math.random() - 0.5) * 0.4;
      velocities.push({
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: vz,
        life: 1.0,
        decay: Math.random() * 0.025 + 0.018
      });
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.6,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });

    const pSystem = new THREE.Points(pGeo, pMat);
    pSystem.userData = { velocities: velocities };
    this.scene.add(pSystem);
    this.shockwaveParticles.push(pSystem);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Mouse drag interaction
    this.container.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Update 3D Point Light to track cursor in scene
      if (this.mouseLight) {
        this.mouseLight.position.x = this.mouseX * 14;
        this.mouseLight.position.y = this.mouseY * 14;
      }

      if (this.isDragging) {
        const deltaX = e.clientX - this.prevMouseX;
        const deltaY = e.clientY - this.prevMouseY;
        this.targetRotationY += deltaX * 0.006;
        this.targetRotationX += deltaY * 0.006;
        this.prevMouseX = e.clientX;
        this.prevMouseY = e.clientY;
      }
    });

    // Click to explode shockwave
    this.container.addEventListener('click', (e) => {
      const rect = this.container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.triggerShockwave(x * 6, y * 6);
      if (window.soundSynth && window.soundSynth.playShockwave) {
        window.soundSynth.playShockwave();
      }
    });

    // Smooth Interactive Mouse Wheel Zoom
    this.container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.015;
      this.camera.position.z = Math.min(34, Math.max(14, this.camera.position.z + zoomDelta));
    }, { passive: false });
  }

  // Toggle 3D Holographic Wireframe
  toggleWireframe() {
    this.isWireframe = !this.isWireframe;
    this.coreGroup.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => { m.wireframe = this.isWireframe; });
        } else {
          child.material.wireframe = this.isWireframe;
        }
      }
    });
    return this.isWireframe;
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Smooth rotation interpolation
    this.coreGroup.rotation.y += 0.007;
    this.coreGroup.rotation.y += (this.targetRotationY - this.coreGroup.rotation.y) * 0.08;
    this.coreGroup.rotation.x += (this.targetRotationX - this.coreGroup.rotation.x) * 0.08;

    // Interactive 3D Camera Parallax
    this.camera.position.x += ((this.mouseX * 2.8) - this.camera.position.x) * 0.04;
    this.camera.position.y += ((this.mouseY * 2.8) - this.camera.position.y) * 0.04;
    this.camera.lookAt(0, 0, 0);

    // Slowly rotate starfield background
    if (this.starfield) {
      this.starfield.rotation.y += 0.001;
      this.starfield.rotation.x += 0.0005;
    }

    // Mode-specific animations
    if (this.currentMode === 'ai-agent') {
      if (this.innerMesh) this.innerMesh.rotation.x -= 0.012;
      if (this.ringMesh1) this.ringMesh1.rotation.z += 0.008;
      if (this.ringMesh2) this.ringMesh2.rotation.x -= 0.006;

      if (this.agentNodes) {
        this.agentNodes.forEach(node => {
          node.userData.angle += node.userData.speed;
          node.position.x = Math.cos(node.userData.angle) * node.userData.radius;
          node.position.z = Math.sin(node.userData.angle) * node.userData.radius;
          node.position.y = Math.sin(node.userData.angle * 2) * 2.2;
        });
      }
    } else if (this.currentMode === 'iot-sphere') {
      if (this.satellites) {
        this.satellites.forEach(sat => {
          sat.userData.angle += 0.02;
          sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
          sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
          sat.position.y = Math.sin(sat.userData.angle + sat.userData.inclination) * 3;
          sat.rotation.x += 0.03;
          sat.rotation.y += 0.03;
        });
      }
    } else if (this.currentMode === 'synapse-mesh') {
      if (this.synapseNodes) {
        const time = Date.now() * 0.002;
        this.synapseNodes.forEach((node, idx) => {
          node.position.y += Math.sin(time + idx) * 0.012;
        });
      }
    }

    // Shockwave particles update
    for (let i = this.shockwaveParticles.length - 1; i >= 0; i--) {
      const pSystem = this.shockwaveParticles[i];
      const positions = pSystem.geometry.attributes.position.array;
      const vels = pSystem.userData.velocities;
      let allDead = true;

      for (let j = 0; j < vels.length; j++) {
        if (vels[j].life > 0) {
          positions[j * 3] += vels[j].vx;
          positions[j * 3 + 1] += vels[j].vy;
          positions[j * 3 + 2] += vels[j].vz;
          vels[j].life -= vels[j].decay;
          allDead = false;
        }
      }
      pSystem.geometry.attributes.position.needsUpdate = true;
      pSystem.material.opacity = Math.max(0, pSystem.material.opacity - 0.02);

      if (allDead || pSystem.material.opacity <= 0) {
        this.scene.remove(pSystem);
        pSystem.geometry.dispose();
        pSystem.material.dispose();
        this.shockwaveParticles.splice(i, 1);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.HolographicCore3D = HolographicCore3D;
