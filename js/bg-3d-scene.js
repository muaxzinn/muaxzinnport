/**
 * ====================================================================
 * Firman Awea Portfolio - Cybernetic 3D Background Scene Engine
 * High-Performance Ambient 3D Perspective Wireframes & Constellation
 * Parallax Mouse & Scroll-Driven Depth Dynamics | Zero Overhead (60 FPS)
 * ====================================================================
 */

class Background3DScene {
  constructor(canvasId = 'bg-3d-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.fov = 450;
    this.depthRange = 800;

    // Camera & Interaction
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scroll = { y: 0, targetY: 0, speed: 0 };
    this.lastScrollY = window.scrollY;

    // 3D Particles Matrix
    this.particles = [];
    this.particleCount = window.innerWidth < 768 ? 42 : 75;
    this.maxConnectDist = 135;

    // 3D Floating Geometric Polyhedra
    this.shapes = [];

    this.isRunning = true;
    this.rafId = null;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.createShapes();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.cx = this.width / 2;
    this.cy = this.height / 2;
  }

  createParticles() {
    this.particles = [];
    const spreadX = this.width * 1.3;
    const spreadY = this.height * 1.3;

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: (Math.random() - 0.5) * spreadX,
        y: (Math.random() - 0.5) * spreadY,
        z: Math.random() * this.depthRange - this.depthRange / 2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.6,
        baseSize: Math.random() * 2 + 1.2,
        colorType: Math.random() > 0.4 ? 'cyan' : (Math.random() > 0.5 ? 'emerald' : 'indigo'),
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  createShapes() {
    this.shapes = [];

    // Polyhedron 1: Left Ambient 3D Octahedron
    this.shapes.push({
      x: -this.width * 0.32,
      y: -this.height * 0.15,
      z: 120,
      radius: 65,
      rotX: 0.003,
      rotY: 0.005,
      rotZ: 0.002,
      rx: 0.2,
      ry: 0.4,
      rz: 0,
      vertices: this.getOctahedronVertices(65),
      edges: this.getOctahedronEdges(),
      color: 'rgba(56, 189, 248, 0.4)'
    });

    // Polyhedron 2: Right Ambient 3D Icosahedron
    this.shapes.push({
      x: this.width * 0.35,
      y: this.height * 0.2,
      z: 180,
      radius: 75,
      rotX: -0.004,
      rotY: 0.004,
      rotZ: 0.003,
      rx: 0.5,
      ry: 0.8,
      rz: 0.2,
      vertices: this.getIcosahedronVertices(75),
      edges: this.getIcosahedronEdges(),
      color: 'rgba(52, 211, 153, 0.35)'
    });

    // Polyhedron 3: Deep Distant Cyber Cube (Center-Far)
    this.shapes.push({
      x: this.width * 0.05,
      y: -this.height * 0.3,
      z: 320,
      radius: 50,
      rotX: 0.002,
      rotY: -0.003,
      rotZ: 0.004,
      rx: 0.1,
      ry: 0.3,
      rz: 0.5,
      vertices: this.getCubeVertices(50),
      edges: this.getCubeEdges(),
      color: 'rgba(167, 139, 250, 0.3)'
    });
  }

  getOctahedronVertices(r) {
    return [
      { x: r, y: 0, z: 0 },
      { x: -r, y: 0, z: 0 },
      { x: 0, y: r, z: 0 },
      { x: 0, y: -r, z: 0 },
      { x: 0, y: 0, z: r },
      { x: 0, y: 0, z: -r }
    ];
  }

  getOctahedronEdges() {
    return [
      [0, 2], [2, 1], [1, 3], [3, 0],
      [0, 4], [2, 4], [1, 4], [3, 4],
      [0, 5], [2, 5], [1, 5], [3, 5]
    ];
  }

  getCubeVertices(s) {
    const d = s / 2;
    return [
      { x: -d, y: -d, z: -d },
      { x: d, y: -d, z: -d },
      { x: d, y: d, z: -d },
      { x: -d, y: d, z: -d },
      { x: -d, y: -d, z: d },
      { x: d, y: -d, z: d },
      { x: d, y: d, z: d },
      { x: -d, y: d, z: d }
    ];
  }

  getCubeEdges() {
    return [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];
  }

  getIcosahedronVertices(r) {
    const t = (1 + Math.sqrt(5)) / 2;
    const factor = r / Math.sqrt(1 + t * t);
    const a = factor;
    const b = factor * t;

    return [
      { x: -a, y: b, z: 0 },
      { x: a, y: b, z: 0 },
      { x: -a, y: -b, z: 0 },
      { x: a, y: -b, z: 0 },
      { x: 0, y: -a, z: b },
      { x: 0, y: a, z: b },
      { x: 0, y: -a, z: -b },
      { x: 0, y: a, z: -b },
      { x: b, y: 0, z: -a },
      { x: b, y: 0, z: a },
      { x: -b, y: 0, z: -a },
      { x: -b, y: 0, z: a }
    ];
  }

  getIcosahedronEdges() {
    return [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [9, 8], [8, 6], [6, 2], [2, 4],
      [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4]
    ];
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX - this.cx) * 0.08;
      this.mouse.targetY = (e.clientY - this.cy) * 0.08;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      const delta = currentY - this.lastScrollY;
      this.lastScrollY = currentY;
      this.scroll.speed = delta * 0.15;
    }, { passive: true });

    // Pause when tab not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isRunning = false;
      } else {
        this.isRunning = true;
        this.animate();
      }
    });
  }

  rotatePoint3D(p, rx, ry, rz) {
    // Rotate X
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y1 = p.y * cosX - p.z * sinX;
    const z1 = p.y * sinX + p.z * cosX;

    // Rotate Y
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x2 = p.x * cosY + z1 * sinY;
    const z2 = -p.x * sinY + z1 * cosY;

    // Rotate Z
    const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
    const x3 = x2 * cosZ - y1 * sinZ;
    const y3 = x2 * sinZ + y1 * cosZ;

    return { x: x3, y: y3, z: z2 };
  }

  project(x, y, z) {
    const depth = z + this.fov;
    if (depth <= 10) return null;
    const scale = this.fov / depth;
    return {
      x: this.cx + x * scale,
      y: this.cy + y * scale,
      scale: scale
    };
  }

  animate() {
    if (!this.isRunning) return;

    // Smooth Mouse dampening
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Scroll speed dampening
    this.scroll.speed *= 0.92;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Render 3D Floating Geometric Polyhedra
    this.shapes.forEach(shape => {
      shape.rx += shape.rotX;
      shape.ry += shape.rotY;
      shape.rz += shape.rotZ;

      // Project vertices to 2D
      const projected = shape.vertices.map(v => {
        const rotated = this.rotatePoint3D(v, shape.rx, shape.ry, shape.rz);
        const worldX = rotated.x + shape.x + this.mouse.x * 0.4;
        const worldY = rotated.y + shape.y + this.mouse.y * 0.4;
        const worldZ = rotated.z + shape.z;
        return this.project(worldX, worldY, worldZ);
      });

      // Render wireframe edges
      this.ctx.beginPath();
      shape.edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (p1 && p2) {
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
        }
      });
      this.ctx.strokeStyle = shape.color;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      // Render glowing vertices
      projected.forEach(p => {
        if (!p) return;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, Math.max(1.2, 2 * p.scale), 0, Math.PI * 2);
        this.ctx.fillStyle = shape.color;
        this.ctx.fill();
      });
    });

    // 2. Update & Project 3D Particles
    const projectedParticles = [];
    const spreadX = this.width * 1.3;
    const spreadY = this.height * 1.3;

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz - this.scroll.speed;
      p.pulse += 0.03;

      // Wrap around bounds
      if (p.x < -spreadX / 2) p.x = spreadX / 2;
      if (p.x > spreadX / 2) p.x = -spreadX / 2;
      if (p.y < -spreadY / 2) p.y = spreadY / 2;
      if (p.y > spreadY / 2) p.y = -spreadY / 2;
      if (p.z < -this.depthRange / 2) p.z = this.depthRange / 2;
      if (p.z > this.depthRange / 2) p.z = -this.depthRange / 2;

      const worldX = p.x + this.mouse.x;
      const worldY = p.y + this.mouse.y;
      const proj = this.project(worldX, worldY, p.z);

      if (proj && proj.x >= -50 && proj.x <= this.width + 50 && proj.y >= -50 && proj.y <= this.height + 50) {
        projectedParticles.push({
          x: proj.x,
          y: proj.y,
          z: p.z,
          scale: proj.scale,
          size: p.baseSize * proj.scale,
          colorType: p.colorType,
          pulse: Math.sin(p.pulse) * 0.2 + 0.8
        });
      }
    });

    // 3. Connect close 3D particles with glowing synaptic lines
    const len = projectedParticles.length;
    for (let i = 0; i < len; i++) {
      const p1 = projectedParticles[i];
      for (let j = i + 1; j < len; j++) {
        const p2 = projectedParticles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxConnectDist) {
          const alpha = (1 - dist / this.maxConnectDist) * 0.18 * p1.scale;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = p1.colorType === 'cyan'
            ? `rgba(56, 189, 248, ${alpha})`
            : (p1.colorType === 'emerald' ? `rgba(52, 211, 153, ${alpha})` : `rgba(129, 140, 248, ${alpha})`);
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // 4. Draw 3D Particle nodes with glowing halo
    projectedParticles.forEach(p => {
      const alpha = Math.min(0.85, 0.45 * p.scale * p.pulse);
      let fillCol = `rgba(56, 189, 248, ${alpha})`;
      if (p.colorType === 'emerald') fillCol = `rgba(52, 211, 153, ${alpha})`;
      if (p.colorType === 'indigo') fillCol = `rgba(129, 140, 248, ${alpha})`;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);
      this.ctx.fillStyle = fillCol;
      this.ctx.fill();
    });

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}

// Global binding & Auto-instantiate
window.Background3DScene = Background3DScene;
