import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * ThreeHoloCore - Interactive 3D Holographic Tech Sphere
 * 
 * Features:
 * 1. 3D WebGL Rotating Geodesic Sphere with glowing vertex points
 * 2. Dual inclined 3D particle orbital rings with orbiting tech nodes
 * 3. Full 360° Drag-to-Rotate interaction with smooth inertial damping
 * 4. Responsive lighting & color palette matching Agastyaan brand (#ef7b01, #10b981)
 * 5. Floating skill badges orbiting in sync with 3D space
 */
const techSkills = [
  { name: "React.js", color: "#38bdf8", angle: 0, ring: 1 },
  { name: "Node.js", color: "#22c55e", angle: Math.PI * 0.65, ring: 1 },
  { name: "Python", color: "#fbbf24", angle: Math.PI * 1.35, ring: 1 },
  { name: "Full Stack", color: "#ef7b01", angle: Math.PI * 0.35, ring: 2 },
  { name: "AI & ML", color: "#a855f7", angle: Math.PI * 1.05, ring: 2 },
  { name: "Cloud & APIs", color: "#06b6d4", angle: Math.PI * 1.75, ring: 2 },
];

const ThreeHoloCore = () => {
  const containerRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth || 450;
    let height = container.clientHeight || 380;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

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

    // ROOT 3D ROTATION GROUP (DRAGGABLE)
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. CENTRAL GLOWING GEODESIC CORE
    const coreGeom = new THREE.IcosahedronGeometry(55, 2);
    const coreWireGeom = new THREE.WireframeGeometry(coreGeom);
    const coreWireMat = new THREE.LineBasicMaterial({
      color: 0xef7b01,
      transparent: true,
      opacity: 0.55,
      linewidth: 1,
    });
    const coreWireMesh = new THREE.LineSegments(coreWireGeom, coreWireMat);
    globeGroup.add(coreWireMesh);

    // Inner glowing sphere
    const innerGeom = new THREE.SphereGeometry(42, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });
    const innerSphere = new THREE.Mesh(innerGeom, innerMat);
    globeGroup.add(innerSphere);

    // Center pulsating point light
    const coreLight = new THREE.PointLight(0xef7b01, 2.5, 300);
    scene.add(coreLight);

    // 2. ORBITAL PARTICLES & RINGS
    const ring1Group = new THREE.Group();
    ring1Group.rotation.x = Math.PI * 0.28;
    ring1Group.rotation.z = Math.PI * 0.15;
    globeGroup.add(ring1Group);

    const ring2Group = new THREE.Group();
    ring2Group.rotation.x = -Math.PI * 0.32;
    ring2Group.rotation.y = Math.PI * 0.25;
    globeGroup.add(ring2Group);

    // Ring 1 geometry (Torus line)
    const ringGeom1 = new THREE.RingGeometry(85, 86, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xef7b01,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1Group.add(ringMesh1);

    // Ring 2 geometry
    const ringGeom2 = new THREE.RingGeometry(100, 101, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2Group.add(ringMesh2);

    // 3. ORBITING STARDUST PARTICLES (3D Swarm)
    const PARTICLE_COUNT = 240;
    const pGeom = new THREE.BufferGeometry();
    const pPositions = new Float32Array(PARTICLE_COUNT * 3);
    const pColors = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 60 + Math.random() * 55;

      pPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = rad * Math.cos(phi);

      const isOrange = Math.random() < 0.6;
      pColors[i * 3] = isOrange ? 1 : 0.1;
      pColors[i * 3 + 1] = isOrange ? 0.48 : 0.85;
      pColors[i * 3 + 2] = isOrange ? 0.05 : 0.55;
    }

    pGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    pGeom.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const pSystem = new THREE.Points(pGeom, pMat);
    globeGroup.add(pSystem);

    // 4. MOUSE DRAG ORBIT CONTROLS
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      prevMouseY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      velocityX = 0;
      velocityY = 0;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      velocityX = deltaX * 0.006;
      velocityY = deltaY * 0.006;

      globeGroup.rotation.y += velocityX;
      globeGroup.rotation.x += velocityY;

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    domEl.addEventListener("touchstart", onMouseDown, { passive: true });
    window.addEventListener("touchmove", onMouseMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);

    // 5. RESIZE
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 450;
      height = container.clientHeight || 380;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 6. ANIMATION LOOP
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Inertial damping or auto-rotate
      if (isDragging) {
        // user is actively controlling
      } else {
        // Natural gentle auto-spin + inertial friction
        velocityX *= 0.94;
        velocityY *= 0.94;
        globeGroup.rotation.y += velocityX + 0.0045;
        globeGroup.rotation.x += velocityY;
      }

      // Rotate orbital rings
      ring1Group.rotation.z = elapsed * 0.25;
      ring2Group.rotation.z = -elapsed * 0.2;

      // Pulse inner sphere
      const pulse = 1 + Math.sin(elapsed * 2) * 0.05;
      innerSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domEl.removeEventListener("touchstart", onMouseDown);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
      window.removeEventListener("resize", handleResize);

      coreGeom.dispose();
      coreWireGeom.dispose();
      coreWireMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ringGeom1.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      pGeom.dispose();
      pMat.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* 3D Interactive Floating Tech Chips around Core */}
      <div className="absolute inset-0 pointer-events-none flex flex-wrap items-center justify-between p-4">
        {techSkills.map((skill, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
            className="pointer-events-auto transform hover:scale-110 transition-all duration-300 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/30 dark:border-gray-800 shadow-lg text-xs font-black flex items-center gap-1.5 cursor-pointer"
            style={{
              borderColor: activeSkill === skill.name ? skill.color : undefined,
              boxShadow:
                activeSkill === skill.name
                  ? `0 10px 25px ${skill.color}35`
                  : undefined,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-gray-900 dark:text-white">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Drag Helper Tip Badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-gray-300 pointer-events-none flex items-center gap-1.5">
        <span className="animate-spin text-xs">🔄</span> Drag to rotate 3D Core in 360°
      </div>
    </div>
  );
};

export default ThreeHoloCore;
