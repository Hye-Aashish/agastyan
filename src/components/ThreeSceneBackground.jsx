import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeSceneBackground - Pure 3D Coding Language Symbols (React, Python, JS, HTML5, Node, DB, Git, < / >, { })
 * 
 * User Instruction:
 * - Remove: Processor chips and laptop/tablet screens.
 * - Add: Real 3D coding language symbols moving, rotating, and floating in 3D perspective.
 * - Behavior: Responsive to page scroll & mouse movement, strictly in the background (z-0, pointer-events-none).
 */
const ThreeSceneBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.0007);

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 3500);
    camera.position.z = 1100;
    camera.position.y = 0;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Track Dark Mode
    let isDark = document.documentElement.classList.contains("dark");
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
      updateTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 2. LIGHTING (Attached to camera so lighting travels with scroll across the entire page)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const lightOrange = new THREE.PointLight(0xef7b01, 3.8, 2400);
    lightOrange.position.set(450, 350, 400);
    camera.add(lightOrange);

    const lightCyan = new THREE.PointLight(0x00d8ff, 3.5, 2400);
    lightCyan.position.set(-450, 200, 350);
    camera.add(lightCyan);

    const lightEmerald = new THREE.PointLight(0x10b981, 3.0, 2200);
    lightEmerald.position.set(200, -350, 300);
    camera.add(lightEmerald);

    const lightYellow = new THREE.PointLight(0xfacc15, 3.0, 2200);
    lightYellow.position.set(-350, -250, 300);
    camera.add(lightYellow);

    scene.add(camera);

    // ROOT WORLD GROUP FOR ALL 3D CODING SYMBOLS
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Disposables tracker
    const disposables = [];

    // Array to track moving symbols
    const movingSymbols = [];

    // Screen boundary metrics in 3D world units (Camera FOV 55, Z = 1100)
    const halfH = Math.tan((55 * Math.PI) / 360) * 1100; // ~572.6
    let boundY = halfH * 0.88; // ~504
    let boundX = Math.max(650, halfH * (width / height) * 0.92);

    // Helper to spawn independently moving and wandering symbols
    const spawnRandomSymbol = (createFn, index, total) => {
      const group = createFn();
      worldGroup.add(group);

      // 1. DISTRIBUTE ACROSS A 4x4 GRID SO ZERO CLUMPING OCCURS INITIALLY
      const cols = 4;
      const col = index % cols;
      const row = Math.floor(index / cols);
      const totalRows = Math.ceil(total / cols);

      const cellW = (boundX * 1.8) / cols;
      const cellH = (boundY * 1.7) / totalRows;

      // Evenly spaced across the entire screen from top-left to bottom-right
      const initX = -boundX * 0.88 + (col + 0.5) * cellW + (Math.random() - 0.5) * (cellW * 0.35);
      const initY = -boundY * 0.82 + (row + 0.5) * cellH + (Math.random() - 0.5) * (cellH * 0.35);
      const initZ = -280 + (index % 5) * 85 + (Math.random() - 0.5) * 35; // depth: -280 to +60

      // 2. CLEAR, VISIBLE CONTINUOUS DRIFT VELOCITY (1.4 to 2.8 px/frame)
      // Every model gets a completely different angle and speed
      const moveAngle = (index * (Math.PI / 2.5)) + (Math.random() - 0.5) * 0.8;
      const speed = 1.4 + Math.random() * 1.4; // 1.4 - 2.8 pixels per frame (~85-170 px/sec)
      const vx = Math.cos(moveAngle) * speed;
      const vy = Math.sin(moveAngle) * speed * 0.85;
      const vz = ((index % 2 === 0 ? 1 : -1) * (0.35 + Math.random() * 0.45));

      // 3. CONTINUOUS MULTI-AXIS 3D ROTATION
      const rotX = (index % 2 === 0 ? 1 : -1) * (0.009 + Math.random() * 0.012);
      const rotY = (index % 3 === 0 ? 1 : -1) * (0.012 + Math.random() * 0.014);
      const rotZ = (index % 4 === 0 ? 1 : -1) * (0.007 + Math.random() * 0.010);

      // 4. SUBTLE ORGANIC FLOAT BREATHING (Does NOT halt forward drift)
      const wobbleSpeed = 0.9 + Math.random() * 0.8;
      const wobblePhase = Math.random() * Math.PI * 2;
      const wobbleAmp = 8 + Math.random() * 8;

      movingSymbols.push({
        group,
        x: initX,
        y: initY,
        z: initZ,
        vx,
        vy,
        vz,
        rotX,
        rotY,
        rotZ,
        wobbleSpeed,
        wobblePhase,
        wobbleAmp,
      });
      return group;
    };

    // ========================================================
    // 1. 3D REACT SYMBOL (Atom with nucleus and 3 orbital rings)
    // ========================================================
    const createReactSymbol = () => {
      const group = new THREE.Group();

      // Nucleus
      const nucleusGeom = new THREE.SphereGeometry(18, 24, 24);
      disposables.push(nucleusGeom);
      const nucleusMat = new THREE.MeshStandardMaterial({
        color: 0x61dafb,
        emissive: 0x0088cc,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
      });
      disposables.push(nucleusMat);
      const nucleus = new THREE.Mesh(nucleusGeom, nucleusMat);
      group.add(nucleus);

      // 3 Orbital Rings
      const ringGeom = new THREE.TorusGeometry(80, 3.2, 16, 72);
      disposables.push(ringGeom);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x61dafb,
        emissive: 0x005588,
        emissiveIntensity: 0.5,
        roughness: 0.25,
        metalness: 0.85,
      });
      disposables.push(ringMat);

      // Orbit 1: 0 deg
      const ring1 = new THREE.Mesh(ringGeom, ringMat);
      ring1.scale.set(1.4, 0.48, 1);
      group.add(ring1);

      // Orbit 2: 60 deg
      const ring2 = new THREE.Mesh(ringGeom, ringMat);
      ring2.scale.set(1.4, 0.48, 1);
      ring2.rotation.z = Math.PI / 3;
      group.add(ring2);

      // Orbit 3: -60 deg
      const ring3 = new THREE.Mesh(ringGeom, ringMat);
      ring3.scale.set(1.4, 0.48, 1);
      ring3.rotation.z = -Math.PI / 3;
      group.add(ring3);

      // Small electron spheres orbiting
      const electronGeom = new THREE.SphereGeometry(5, 12, 12);
      disposables.push(electronGeom);
      const electronMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      disposables.push(electronMat);

      const electron1 = new THREE.Mesh(electronGeom, electronMat);
      electron1.position.set(80 * 1.4, 0, 0);
      ring1.add(electron1);

      const electron2 = new THREE.Mesh(electronGeom, electronMat);
      electron2.position.set(-80 * 1.4, 0, 0);
      ring2.add(electron2);

      return group;
    };

    // ========================================================
    // 2. 3D PYTHON SYMBOL (Intertwined Blue & Yellow Snake Shapes)
    // ========================================================
    const createPythonSymbol = () => {
      const group = new THREE.Group();

      const createSnakeHalf = (colorHex, eyeColorHex, isTop) => {
        const half = new THREE.Group();

        // Main body segment
        const bodyGeom = new THREE.BoxGeometry(45, 24, 20);
        disposables.push(bodyGeom);
        const bodyMat = new THREE.MeshStandardMaterial({
          color: colorHex,
          emissive: colorHex,
          emissiveIntensity: 0.3,
          roughness: 0.25,
          metalness: 0.8,
        });
        disposables.push(bodyMat);
        const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
        half.add(bodyMesh);

        // Turn arm
        const armGeom = new THREE.BoxGeometry(22, 45, 20);
        disposables.push(armGeom);
        const armMesh = new THREE.Mesh(armGeom, bodyMat);
        armMesh.position.set(isTop ? 22 : -22, isTop ? -16 : 16, 0);
        half.add(armMesh);

        // Head tip
        const headGeom = new THREE.BoxGeometry(28, 22, 20);
        disposables.push(headGeom);
        const headMesh = new THREE.Mesh(headGeom, bodyMat);
        headMesh.position.set(isTop ? -18 : 18, isTop ? 18 : -18, 0);
        half.add(headMesh);

        // Snake Eye
        const eyeGeom = new THREE.SphereGeometry(3.5, 12, 12);
        disposables.push(eyeGeom);
        const eyeMat = new THREE.MeshBasicMaterial({ color: eyeColorHex });
        disposables.push(eyeMat);
        const eye = new THREE.Mesh(eyeGeom, eyeMat);
        eye.position.set(isTop ? -18 : 18, isTop ? 18 : -18, 11);
        half.add(eye);

        // Bevel glow wireframe
        const wireGeom = new THREE.WireframeGeometry(bodyGeom);
        disposables.push(wireGeom);
        const wireMat = new THREE.LineBasicMaterial({
          color: colorHex,
          transparent: true,
          opacity: 0.5,
        });
        disposables.push(wireMat);
        half.add(new THREE.LineSegments(wireGeom, wireMat));

        return half;
      };

      // Top blue half
      const blueSnake = createSnakeHalf(0x38bdf8, 0xfacc15, true);
      blueSnake.position.set(0, 16, 0);
      group.add(blueSnake);

      // Bottom yellow half
      const yellowSnake = createSnakeHalf(0xf59e0b, 0x38bdf8, false);
      yellowSnake.position.set(0, -16, 0);
      group.add(yellowSnake);

      group.scale.set(1.2, 1.2, 1.2);
      return group;
    };

    // ========================================================
    // 3. 3D JAVASCRIPT (JS) CUBE
    // ========================================================
    const createJavaScriptCube = () => {
      const group = new THREE.Group();

      const cubeGeom = new THREE.BoxGeometry(95, 95, 95);
      disposables.push(cubeGeom);

      // Canvas Texture with official bold 'JS' Branding
      const makeJsTexture = () => {
        const c = document.createElement("canvas");
        c.width = 256;
        c.height = 256;
        const ctx = c.getContext("2d");

        // JS Gold background
        ctx.fillStyle = "#f7df1e";
        ctx.fillRect(0, 0, 256, 256);

        // Inner border
        ctx.strokeStyle = "#eab308";
        ctx.lineWidth = 10;
        ctx.strokeRect(8, 8, 240, 240);

        // Iconic 'JS' in bottom right
        ctx.fillStyle = "#1e1e1e";
        ctx.font = "900 120px sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillText("JS", 236, 242);

        const tex = new THREE.CanvasTexture(c);
        disposables.push(tex);
        return tex;
      };

      const jsTex = makeJsTexture();
      const cubeMats = [
        new THREE.MeshStandardMaterial({ map: jsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: jsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0xf7df1e, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0xf7df1e, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: jsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: jsTex, roughness: 0.2, metalness: 0.5 }),
      ];
      cubeMats.forEach((m) => disposables.push(m));

      const cube = new THREE.Mesh(cubeGeom, cubeMats);
      group.add(cube);

      // Glowing edges
      const wireframe = new THREE.WireframeGeometry(cubeGeom);
      disposables.push(wireframe);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xfacc15,
        transparent: true,
        opacity: isDark ? 0.7 : 0.4,
      });
      disposables.push(lineMat);
      group.add(new THREE.LineSegments(wireframe, lineMat));

      return group;
    };

    // ========================================================
    // 4. 3D HTML5 / CSS3 CODING SHIELDS
    // ========================================================
    const createHtmlCssShield = (text, colorHex, accentColor) => {
      const group = new THREE.Group();

      const shieldShape = new THREE.Shape();
      shieldShape.moveTo(-45, 55);
      shieldShape.lineTo(45, 55);
      shieldShape.lineTo(36, -35);
      shieldShape.lineTo(0, -55);
      shieldShape.lineTo(-36, -35);
      shieldShape.closePath();

      const extrudeSettings = {
        depth: 16,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 3,
        bevelThickness: 3,
      };

      const geom = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
      disposables.push(geom);

      const mat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.35,
        metalness: 0.7,
        roughness: 0.3,
      });
      disposables.push(mat);

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.z = -8;
      group.add(mesh);

      // Front Face Emblem Texture Badge
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, 128, 128);
      ctx.fillStyle = "#ffffff";
      ctx.font = "900 52px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 64, 64);

      const badgeTex = new THREE.CanvasTexture(canvas);
      disposables.push(badgeTex);

      const badgeGeom = new THREE.PlaneGeometry(50, 50);
      disposables.push(badgeGeom);
      const badgeMat = new THREE.MeshBasicMaterial({
        map: badgeTex,
        transparent: true,
      });
      disposables.push(badgeMat);
      const badgeMesh = new THREE.Mesh(badgeGeom, badgeMat);
      badgeMesh.position.set(0, 0, 12);
      group.add(badgeMesh);

      // Glowing outline
      const wire = new THREE.WireframeGeometry(geom);
      disposables.push(wire);
      const wireMat = new THREE.LineBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.6,
      });
      disposables.push(wireMat);
      group.add(new THREE.LineSegments(wire, wireMat));

      return group;
    };

    // ========================================================
    // 5. 3D NODE.JS HEXAGON
    // ========================================================
    const createNodeHexagon = () => {
      const group = new THREE.Group();

      const hexGeom = new THREE.CylinderGeometry(55, 55, 24, 6);
      disposables.push(hexGeom);

      // Node Canvas texture
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#0c1712";
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 14;
      ctx.strokeRect(10, 10, 236, 236);

      ctx.fillStyle = "#22c55e";
      ctx.font = "900 66px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("NODE", 128, 128);

      const tex = new THREE.CanvasTexture(canvas);
      disposables.push(tex);

      const hexMats = [
        new THREE.MeshStandardMaterial({ color: 0x16a34a, metalness: 0.8, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: tex, metalness: 0.5, roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ color: 0x14532d, metalness: 0.8, roughness: 0.2 }),
      ];
      hexMats.forEach((m) => disposables.push(m));

      const hexMesh = new THREE.Mesh(hexGeom, hexMats);
      hexMesh.rotation.x = Math.PI / 2;
      group.add(hexMesh);

      // Glowing green wireframe
      const wire = new THREE.WireframeGeometry(hexGeom);
      disposables.push(wire);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0x4ade80,
        transparent: true,
        opacity: 0.6,
      });
      disposables.push(wireMat);
      const wireMesh = new THREE.LineSegments(wire, wireMat);
      wireMesh.rotation.x = Math.PI / 2;
      group.add(wireMesh);

      return group;
    };

    // ========================================================
    // 5B. 3D TYPESCRIPT (TS) CUBE
    // ========================================================
    const createTypeScriptCube = () => {
      const group = new THREE.Group();

      const cubeGeom = new THREE.BoxGeometry(85, 85, 85);
      disposables.push(cubeGeom);

      const makeTsTexture = () => {
        const c = document.createElement("canvas");
        c.width = 256;
        c.height = 256;
        const ctx = c.getContext("2d");

        ctx.fillStyle = "#3178c6";
        ctx.fillRect(0, 0, 256, 256);

        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 12;
        ctx.strokeRect(8, 8, 240, 240);

        ctx.fillStyle = "#ffffff";
        ctx.font = "900 115px sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillText("TS", 236, 240);

        const tex = new THREE.CanvasTexture(c);
        disposables.push(tex);
        return tex;
      };

      const tsTex = makeTsTexture();
      const cubeMats = [
        new THREE.MeshStandardMaterial({ map: tsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: tsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0x3178c6, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0x3178c6, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: tsTex, roughness: 0.2, metalness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: tsTex, roughness: 0.2, metalness: 0.5 }),
      ];
      cubeMats.forEach((m) => disposables.push(m));

      const cube = new THREE.Mesh(cubeGeom, cubeMats);
      group.add(cube);

      const wireframe = new THREE.WireframeGeometry(cubeGeom);
      disposables.push(wireframe);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: isDark ? 0.7 : 0.4,
      });
      disposables.push(lineMat);
      group.add(new THREE.LineSegments(wireframe, lineMat));

      return group;
    };

    // ========================================================
    // 6. 3D DATABASE (SQL) CYLINDER STACK
    // ========================================================
    const createDatabaseStack = () => {
      const group = new THREE.Group();

      const diskGeom = new THREE.CylinderGeometry(46, 46, 18, 32);
      disposables.push(diskGeom);

      const diskMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.25,
      });
      disposables.push(diskMat);

      const ledGeom = new THREE.SphereGeometry(3.5, 8, 8);
      disposables.push(ledGeom);
      const ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      disposables.push(ledMat);

      [-26, 0, 26].forEach((yPos) => {
        const disk = new THREE.Mesh(diskGeom, diskMat);
        disk.position.y = yPos;
        group.add(disk);

        // LED dot indicator on disk rim
        const led = new THREE.Mesh(ledGeom, ledMat);
        led.position.set(0, yPos, 47);
        group.add(led);

        // Glowing rim line
        const wire = new THREE.WireframeGeometry(diskGeom);
        disposables.push(wire);
        const wireMat = new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.4,
        });
        disposables.push(wireMat);
        const wireMesh = new THREE.LineSegments(wire, wireMat);
        wireMesh.position.y = yPos;
        group.add(wireMesh);
      });

      return group;
    };

    // ========================================================
    // 7. 3D CODE BRACKETS: < / > and { }
    // ========================================================
    const createCodeBrackets = () => {
      const group = new THREE.Group();

      const makeRod = (len, colorHex, rotZ, posX, posY) => {
        const geom = new THREE.CylinderGeometry(4.5, 4.5, len, 12);
        disposables.push(geom);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          emissive: colorHex,
          emissiveIntensity: 0.6,
          roughness: 0.2,
          metalness: 0.9,
        });
        disposables.push(mat);
        const mesh = new THREE.Mesh(geom, mat);
        mesh.rotation.z = rotZ;
        mesh.position.set(posX, posY, 0);
        return mesh;
      };

      // Left Angle "<"
      const arm1 = makeRod(65, 0xef7b01, Math.PI / 4, -40, 22);
      const arm2 = makeRod(65, 0xef7b01, -Math.PI / 4, -40, -22);
      group.add(arm1);
      group.add(arm2);

      // Slash "/"
      const slash = makeRod(85, 0x10b981, -Math.PI / 6, 0, 0);
      group.add(slash);

      // Right Angle ">"
      const arm3 = makeRod(65, 0xef7b01, -Math.PI / 4, 40, 22);
      const arm4 = makeRod(65, 0xef7b01, Math.PI / 4, 40, -22);
      group.add(arm3);
      group.add(arm4);

      return group;
    };

    const createCurlyBrackets = () => {
      const group = new THREE.Group();

      const makeRod = (len, colorHex, rotZ, posX, posY) => {
        const geom = new THREE.CylinderGeometry(4.2, 4.2, len, 12);
        disposables.push(geom);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          emissive: colorHex,
          emissiveIntensity: 0.6,
          roughness: 0.2,
          metalness: 0.9,
        });
        disposables.push(mat);
        const mesh = new THREE.Mesh(geom, mat);
        mesh.rotation.z = rotZ;
        mesh.position.set(posX, posY, 0);
        return mesh;
      };

      // Left curly {
      group.add(makeRod(30, 0xa855f7, 0, -45, 25));
      group.add(makeRod(20, 0xa855f7, Math.PI / 2, -35, 40));
      group.add(makeRod(20, 0xa855f7, Math.PI / 2, -55, 10));
      group.add(makeRod(20, 0xa855f7, Math.PI / 2, -55, -10));
      group.add(makeRod(30, 0xa855f7, 0, -45, -25));
      group.add(makeRod(20, 0xa855f7, Math.PI / 2, -35, -40));

      // Right curly }
      group.add(makeRod(30, 0x38bdf8, 0, 45, 25));
      group.add(makeRod(20, 0x38bdf8, Math.PI / 2, 35, 40));
      group.add(makeRod(20, 0x38bdf8, Math.PI / 2, 55, 10));
      group.add(makeRod(20, 0x38bdf8, Math.PI / 2, 55, -10));
      group.add(makeRod(30, 0x38bdf8, 0, 45, -25));
      group.add(makeRod(20, 0x38bdf8, Math.PI / 2, 35, -40));

      return group;
    };

    // ========================================================
    // 8. 3D GIT BRANCH TREE
    // ========================================================
    const createGitBranch = () => {
      const group = new THREE.Group();

      const nodeGeom = new THREE.SphereGeometry(11, 16, 16);
      disposables.push(nodeGeom);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xf05032,
        emissive: 0xf05032,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      disposables.push(nodeMat);

      // Node 1: Main root commit
      const node1 = new THREE.Mesh(nodeGeom, nodeMat);
      node1.position.set(-25, -40, 0);
      group.add(node1);

      // Node 2: Main branch commit
      const node2 = new THREE.Mesh(nodeGeom, nodeMat);
      node2.position.set(-25, 40, 0);
      group.add(node2);

      // Node 3: Feature branch commit
      const node3 = new THREE.Mesh(nodeGeom, nodeMat);
      node3.position.set(35, 10, 0);
      group.add(node3);

      // Connecting branch lines
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0xf05032,
        roughness: 0.3,
        metalness: 0.6,
      });
      disposables.push(tubeMat);

      // Straight main trunk
      const trunkGeom = new THREE.CylinderGeometry(3.5, 3.5, 80, 10);
      disposables.push(trunkGeom);
      const trunk = new THREE.Mesh(trunkGeom, tubeMat);
      trunk.position.set(-25, 0, 0);
      group.add(trunk);

      // Branch curve to feature node
      const curve1Geom = new THREE.CylinderGeometry(3.5, 3.5, 55, 10);
      disposables.push(curve1Geom);
      const curve1 = new THREE.Mesh(curve1Geom, tubeMat);
      curve1.rotation.z = -Math.PI / 4;
      curve1.position.set(5, -15, 0);
      group.add(curve1);

      return group;
    };

    // ========================================================
    // 9. INSTANTIATE DIVERSE 3D CODING SYMBOLS (FREELY ROAMING)
    // ========================================================
    const symbolCreators = [
      createReactSymbol,
      createPythonSymbol,
      createJavaScriptCube,
      createTypeScriptCube,
      () => createHtmlCssShield("HTML", 0xe34f26, 0xf97316),
      () => createHtmlCssShield("CSS", 0x2563eb, 0x38bdf8),
      createNodeHexagon,
      createDatabaseStack,
      createGitBranch,
      createCodeBrackets,
      createCurlyBrackets,
      createReactSymbol,
      createPythonSymbol,
      createJavaScriptCube,
      createTypeScriptCube,
      createNodeHexagon,
      createDatabaseStack,
      createCodeBrackets,
    ];

    symbolCreators.forEach((createFn, idx) => {
      spawnRandomSymbol(createFn, idx, symbolCreators.length);
    });

    // ========================================================
    // 10. BACKGROUND CODE GLYPH MATRIX PARTICLES (0, 1, {}, <>, ;)
    // ========================================================
    const PARTICLE_COUNT = Math.min(500, Math.max(250, Math.floor((width * height) / 3200)));
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const particleBaseY = new Float32Array(PARTICLE_COUNT);

    const createGlyphTexture = () => {
      const c = document.createElement("canvas");
      c.width = 128;
      c.height = 128;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 76px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 12;
      ctx.fillText("<>", 64, 64);

      const tex = new THREE.CanvasTexture(c);
      disposables.push(tex);
      return tex;
    };

    const colorList = [
      new THREE.Color("#ef7b01"), // Orange
      new THREE.Color("#61dafb"), // React Blue
      new THREE.Color("#facc15"), // JS Yellow
      new THREE.Color("#10b981"), // Emerald
      new THREE.Color("#a855f7"), // Purple
      new THREE.Color("#f05032"), // Git Red
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const px = (Math.random() - 0.5) * 2200;
      const py = (Math.random() - 0.5) * 4400 - 1500;
      const pz = (Math.random() - 0.5) * 1400;

      particlePositions[i * 3] = px;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = pz;
      particleBaseY[i] = py;

      const col = colorList[Math.floor(Math.random() * colorList.length)];
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    disposables.push(particleGeom);

    const particleMat = new THREE.PointsMaterial({
      size: 9.0,
      map: createGlyphTexture(),
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    disposables.push(particleMat);

    const particleSystem = new THREE.Points(particleGeom, particleMat);
    worldGroup.add(particleSystem);

    // ========================================================
    // 11. THEME CHANGE LISTENER
    // ========================================================
    function updateTheme() {
      particleMat.opacity = isDark ? 0.65 : 0.35;
      scene.fog.color.setHex(isDark ? 0x070b14 : 0xf8fafc);
    }

    // ========================================================
    // 12. SCROLL & MOUSE INTERACTION (FLUID LERP)
    // ========================================================
    const state = {
      mouseTargetX: 0,
      mouseTargetY: 0,
      mouseCurrentX: 0,
      mouseCurrentY: 0,
      scrollTargetY: window.scrollY || 0,
      scrollCurrentY: window.scrollY || 0,
    };

    const handlePointerMove = (e) => {
      state.mouseTargetX = (e.clientX / window.innerWidth) * 2 - 1;
      state.mouseTargetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const handleScroll = () => {
      state.scrollTargetY = window.scrollY || 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 13. RESIZE HANDLER
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      boundY = halfH * 0.88;
      boundX = Math.max(650, halfH * (width / height) * 0.92);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // ========================================================
    // 14. 60FPS 3D ANIMATION ENGINE (FAST INDEPENDENT WANDER)
    // ========================================================
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp for mouse & scroll inputs
      state.mouseCurrentX += (state.mouseTargetX - state.mouseCurrentX) * 0.05;
      state.mouseCurrentY += (state.mouseTargetY - state.mouseCurrentY) * 0.05;
      state.scrollCurrentY += (state.scrollTargetY - state.scrollCurrentY) * 0.06;

      // CAMERA POSITION (Subtle parallax + scroll tracking)
      const camY = -state.scrollCurrentY * 0.45;
      camera.position.x = state.mouseCurrentX * 70;
      camera.position.y = camY + state.mouseCurrentY * 30;
      camera.lookAt(0, camY, 0);

      const topY = camY + boundY;
      const botY = camY - boundY;

      // EACH 3D MODEL MOVES COMPLETELY INDEPENDENTLY ACROSS THE SCREEN
      movingSymbols.forEach((s) => {
        // 1. Advance linear translation across screen (Real continuous travel)
        s.x += s.vx * (delta * 60);
        s.y += s.vy * (delta * 60);
        s.z += s.vz * (delta * 60);

        // 2. Horizontal boundary bounce (screen left & right)
        if (s.x > boundX) {
          s.x = boundX;
          s.vx = -Math.abs(s.vx);
        } else if (s.x < -boundX) {
          s.x = -boundX;
          s.vx = Math.abs(s.vx);
        }

        // 3. Vertical boundary bounce (relative to current viewport)
        if (s.y > topY) {
          s.y = topY;
          s.vy = -Math.abs(s.vy);
        } else if (s.y < botY) {
          s.y = botY;
          s.vy = Math.abs(s.vy);
        }

        // 4. Depth boundary bounce (-320 to +120)
        if (s.z > 120) {
          s.z = 120;
          s.vz = -Math.abs(s.vz);
        } else if (s.z < -320) {
          s.z = -320;
          s.vz = Math.abs(s.vz);
        }

        // 5. Apply real continuous 3D coordinates + subtle wobble + mouse parallax
        const wobble = Math.sin(elapsedTime * s.wobbleSpeed + s.wobblePhase) * s.wobbleAmp;
        s.group.position.set(
          s.x + state.mouseCurrentX * 30,
          s.y + state.mouseCurrentY * 20 + wobble,
          s.z
        );

        // 6. Continuous independent 3D multi-axis tumbling rotation
        s.group.rotation.x += s.rotX * (delta * 60);
        s.group.rotation.y += s.rotY * (delta * 60);
        s.group.rotation.z += s.rotZ * (delta * 60);
      });

      // PARTICLE DRIFT (Subtle background ambient code dust)
      const posAttr = particleGeom.attributes.position;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const px = particlePositions[i * 3];
        posAttr.setY(
          i,
          particleBaseY[i] + Math.sin(px * 0.002 + elapsedTime * 0.8) * 16
        );
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // VISIBILITY CHANGE HANDLER (Save CPU/GPU on tab blur)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        clock.getDelta();
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animationFrameId = requestAnimationFrame(animate);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();

      disposables.forEach((item) => {
        if (item && typeof item.dispose === "function") {
          item.dispose();
        }
      });

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ThreeSceneBackground;
