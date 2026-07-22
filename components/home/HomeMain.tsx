'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import Hero from './Hero';
import StrategicImportance from './StrategicImportance';
import IndustriesSection from './IndustriesSection';
import VisionSection from './VisionSection';
import HomeCTA from './HomeCTA';

export default function HomeMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor states
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [targetMouse, setTargetMouse] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'button' | 'card' | 'none'>('none');
  const [scrollYProgress, setScrollYProgress] = useState(0);

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor position lerp
  useEffect(() => {
    let animId: number;
    const updateCursor = () => {
      setMouse((prev) => {
        const dx = targetMouse.x - prev.x;
        const dy = targetMouse.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      animId = requestAnimationFrame(updateCursor);
    };
    animId = requestAnimationFrame(updateCursor);

    const handleMouseMove = (e: MouseEvent) => {
      setTargetMouse({ x: e.clientX, y: e.clientY });
      
      // Determine if hovering over active elements
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .btn-primary, .btn-outline')) {
        setIsHovered(true);
        setHoverType('button');
      } else if (target.closest('.premium-card')) {
        setIsHovered(true);
        setHoverType('card');
      } else {
        setIsHovered(false);
        setHoverType('none');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetMouse]);

  // --- THREE.JS CONTINUOUS WebGL SCENE ---
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera with slight micro-orbit offset
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- 1. MAGNET GROUP (Cupertino Style) ---
    const magnetGroup = new THREE.Group();
    scene.add(magnetGroup);

    // North Magnet Block
    const northGeom = new THREE.BoxGeometry(0.9, 1.3, 0.9);
    const northMat = new THREE.MeshStandardMaterial({
      color: 0xD6A84A, // Gold Theme
      roughness: 0.1,
      metalness: 0.9,
    });
    const northMagnet = new THREE.Mesh(northGeom, northMat);
    northMagnet.position.y = 0.65;
    magnetGroup.add(northMagnet);

    // South Magnet Block
    const southGeom = new THREE.BoxGeometry(0.9, 1.3, 0.9);
    const southMat = new THREE.MeshStandardMaterial({
      color: 0x4DA9FF, // Electric Blue Theme
      roughness: 0.1,
      metalness: 0.9,
    });
    const southMagnet = new THREE.Mesh(southGeom, southMat);
    southMagnet.position.y = -0.65;
    magnetGroup.add(southMagnet);

    // --- 2. RARE EARTH ATOM CRYSTAL LATTICE ---
    // Represents disassembling magnet structure during scroll transitions
    const latticeGroup = new THREE.Group();
    scene.add(latticeGroup);
    latticeGroup.scale.set(0, 0, 0); // Hide initially in Hero section

    // Atom nodes (spheres)
    const atomGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const atomGoldMat = new THREE.MeshStandardMaterial({ color: 0xD6A84A, metalness: 0.8, roughness: 0.2 });
    const atomBlueMat = new THREE.MeshStandardMaterial({ color: 0x4DA9FF, metalness: 0.8, roughness: 0.2 });

    const nodes: THREE.Mesh[] = [];
    const size = 3; // 3x3x3 grid
    const spacing = 1.2;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const node = new THREE.Mesh(atomGeom, (x + y + z) % 2 === 0 ? atomGoldMat : atomBlueMat);
          node.position.set(
            (x - (size - 1) / 2) * spacing,
            (y - (size - 1) / 2) * spacing,
            (z - (size - 1) / 2) * spacing
          );
          latticeGroup.add(node);
          nodes.push(node);
        }
      }
    }

    // Connect nodes with thin wireframe rods (cylinders)
    const lineMat = new THREE.LineBasicMaterial({ color: 0xBFC6CF, transparent: true, opacity: 0.25 });
    const linesGeom = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    // Simple connection lines representing crystal bonding lattice
    nodes.forEach((n1, idx1) => {
      nodes.forEach((n2, idx2) => {
        if (idx1 >= idx2) return;
        const dist = n1.position.distanceTo(n2.position);
        // Connect immediate neighbors only
        if (dist > 1.1 && dist < 1.3) {
          linePositions.push(n1.position.x, n1.position.y, n1.position.z);
          linePositions.push(n2.position.x, n2.position.y, n2.position.z);
        }
      });
    });

    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const latticeLines = new THREE.LineSegments(linesGeom, lineMat);
    latticeGroup.add(latticeLines);

    // --- 3. 20,000+ HIGH PERFORMANCE PARTICLE SYSTEM ---
    const particleCount = 20000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalCoords = new Float32Array(particleCount * 3);
    const flowSpeeds = new Float32Array(particleCount);

    const cGold = new THREE.Color(0xD6A84A);
    const cBlue = new THREE.Color(0x4DA9FF);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in space: spherical cloud with density peak near center
      const r = 2.0 + Math.pow(Math.random(), 2.0) * 12.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const px = Math.sin(phi) * Math.cos(theta) * r;
      const py = Math.cos(phi) * r;
      const pz = Math.sin(phi) * Math.sin(theta) * r;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      originalCoords[i * 3] = px;
      originalCoords[i * 3 + 1] = py;
      originalCoords[i * 3 + 2] = pz;

      flowSpeeds[i] = 0.01 + Math.random() * 0.04;

      // Color mix based on height
      const mixRatio = (py + 6) / 12;
      const colorVal = new THREE.Color().lerpColors(cBlue, cGold, Math.max(0, Math.min(1, mixRatio)));
      colors[i * 3] = colorVal.r;
      colors[i * 3 + 1] = colorVal.g;
      colors[i * 3 + 2] = colorVal.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Points material
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, pointsMaterial);
    scene.add(particles);

    // --- 4. LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xD6A84A, 2.0);
    goldLight.position.set(5, 5, 5);
    scene.add(goldLight);

    const blueLight = new THREE.DirectionalLight(0x4DA9FF, 2.0);
    blueLight.position.set(-5, -5, 5);
    scene.add(blueLight);

    // --- SCROLL ANIMATION & MOUSE LERP VALUES ---
    let smoothScroll = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Normalized screen cursor coordinates
    const normCursor = new THREE.Vector2(-100, -100);

    const handleNormalizedMouseMove = (e: MouseEvent) => {
      normCursor.x = (e.clientX / window.innerWidth) * 2 - 1;
      normCursor.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleNormalizedMouseMove);

    // --- ANIMATION FRAME ---
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const time = clock.getElapsedTime();

      // Smooth scroll lerping
      smoothScroll += (scrollYProgress - smoothScroll) * 0.06;

      // Mouse position lerping
      targetX = normCursor.x;
      targetY = normCursor.y;
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // --- WEBGL STATE TRANSITIONS BASED ON SCROLL PROGRESS ---
      // HERO SECTION (Scroll: 0% to 20%)
      if (smoothScroll < 0.25) {
        // Magnet on right, crystal hidden
        const localT = smoothScroll / 0.25;
        magnetGroup.position.set(2.4, 0, 0);
        magnetGroup.scale.set(1 - localT, 1 - localT, 1 - localT);
        
        latticeGroup.position.set(2.4, 0, 0);
        latticeGroup.scale.set(localT * 0.8, localT * 0.8, localT * 0.8);
        latticeGroup.rotation.y = time * 0.2;
        
        camera.position.set(currentX * 0.6, currentY * 0.6, 11);
      } 
      // STRATEGIC/INDUSTRIES SECTION (Scroll: 25% to 65%)
      else if (smoothScroll < 0.65) {
        // Lattice crystal centers in view, camera orbits slowly
        const localT = (smoothScroll - 0.25) / 0.4;
        magnetGroup.scale.set(0, 0, 0);
        latticeGroup.position.set(
          2.4 - localT * 2.4, // Shift to center
          0,
          0
        );
        latticeGroup.scale.set(0.8 + localT * 0.3, 0.8 + localT * 0.3, 0.8 + localT * 0.3);
        latticeGroup.rotation.y = time * 0.15 + currentX * 0.5;
        latticeGroup.rotation.x = currentY * 0.5;

        camera.position.set(0, 0, 11 - localT * 2.5); // Move closer
      } 
      // VISION/CTA SECTION (Scroll: 65% to 100%)
      else {
        // Lattice expands, particles flow faster
        const localT = (smoothScroll - 0.65) / 0.35;
        latticeGroup.position.set(0, 0, 0);
        latticeGroup.scale.set(1.1 + localT * 0.8, 1.1 + localT * 0.8, 1.1 + localT * 0.8);
        latticeGroup.rotation.y = time * 0.1;
        latticeLines.material.opacity = 0.25 * (1 - localT); // Fade lines

        camera.position.set(currentX * 0.4, currentY * 0.4, 8.5 + localT * 3);
      }

      // --- MAGNETIC VECTOR FIELD PARTICLE ANIMATION ---
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      const speedMultiplier = 1.0 + smoothScroll * 1.5;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        let px = posArr[idx];
        let py = posArr[idx + 1];
        let pz = posArr[idx + 2];

        // Math simulation of a Dipole Field Vector
        // B(p) = (3 * y * p - m) / r^3
        const mx = 0;
        const my = 1.0; // Magnetic field points along Y
        const mz = 0;

        const dist = Math.sqrt(px * px + py * py + pz * pz);
        const r = Math.max(0.6, dist);

        // Compute B-Field vectors
        const bx = (3 * py * px) / Math.pow(r, 4.5);
        const by = (3 * py * py - r * r) / Math.pow(r, 4.5);
        const bz = (3 * py * pz) / Math.pow(r, 4.5);

        // Drift speed along B-Field vectors
        const speed = flowSpeeds[i] * speedMultiplier;
        px += bx * speed;
        py += by * speed;
        pz += bz * speed;

        // Custom Cursor Magnetic Repulsion/Attraction
        // We project normalized screen mouse to approximate 3D sphere
        const mouse3D = new THREE.Vector3(currentX * 5.0, currentY * 3.5, 0);
        const dToMouse = mouse3D.distanceTo(new THREE.Vector3(px, py, pz));
        if (dToMouse < 2.2) {
          const pushForce = (2.2 - dToMouse) * 0.08;
          px += (px - mouse3D.x) * pushForce;
          py += (py - mouse3D.y) * pushForce;
          pz += (pz - mouse3D.z) * pushForce;
        }

        // Loop back logic if particles escape boundary
        if (dist > 15.0 || isNaN(px)) {
          px = originalCoords[idx];
          py = originalCoords[idx + 1];
          pz = originalCoords[idx + 2];
        }

        posArr[idx] = px;
        posArr[idx + 1] = py;
        posArr[idx + 2] = pz;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Render frame
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Resizing window handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleNormalizedMouseMove);
      renderer.dispose();
      northGeom.dispose();
      northMat.dispose();
      southGeom.dispose();
      southMat.dispose();
      atomGeom.dispose();
      atomGoldMat.dispose();
      atomBlueMat.dispose();
      pointsMaterial.dispose();
      particleGeometry.dispose();
      linesGeom.dispose();
      lineMat.dispose();
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#02050B] overflow-hidden select-none">
      
      {/* 1. MASTER WEBGL CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-screen h-screen z-0 pointer-events-none select-none"
        style={{ pointerEvents: 'none' }}
      />

      {/* 2. CUSTOM MAGNETIC CURSOR */}
      <div className="hidden lg:block pointer-events-none">
        {/* Core Dot */}
        <motion.div
          className="fixed z-50 w-2.5 h-2.5 bg-[#D6A84A] rounded-full pointer-events-none"
          style={{
            x: mouse.x - 5,
            y: mouse.y - 5,
          }}
        />
        {/* Orbiting Halo Ring */}
        <motion.div
          className="fixed z-50 rounded-full border pointer-events-none flex items-center justify-center"
          animate={{
            width: isHovered ? (hoverType === 'button' ? 76 : 56) : 36,
            height: isHovered ? (hoverType === 'button' ? 76 : 56) : 36,
            borderColor: isHovered ? '#D6A84A' : '#4DA9FF',
            backgroundColor: isHovered ? 'rgba(214,168,74,0.06)' : 'rgba(77,169,255,0.01)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          style={{
            x: mouse.x - (isHovered ? (hoverType === 'button' ? 38 : 28) : 18),
            y: mouse.y - (isHovered ? (hoverType === 'button' ? 38 : 28) : 18),
            boxShadow: isHovered ? '0 0 16px rgba(214,168,74,0.2)' : '0 0 8px rgba(77,169,255,0.08)',
          }}
        />
      </div>

      {/* 3. CAD blueprints overlay SVGs behind the content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04] z-0">
        <svg className="absolute w-full h-full text-white" viewBox="0 0 1440 3600" fill="none">
          {/* Section 1 HUD */}
          <line x1="80" y1="120" x2="600" y2="120" stroke="currentColor" strokeWidth="1" />
          <line x1="80" y1="120" x2="80" y2="700" stroke="currentColor" strokeWidth="1" />
          <text x="96" y="140" fontSize="10" fill="currentColor">MAXWELL EQUATIONS</text>
          <text x="96" y="160" fontSize="10" fill="currentColor">∇·D = ρf</text>
          <text x="96" y="180" fontSize="10" fill="currentColor">∇×E = -∂B/∂t</text>
          <text x="96" y="200" fontSize="10" fill="currentColor">∇·B = 0</text>
          <text x="96" y="220" fontSize="10" fill="currentColor">∇×H = Jf + ∂D/∂t</text>

          {/* Section 2 HUD */}
          <circle cx="1200" cy="1100" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
          <path d="M 1000,1100 H 1400 M 1200,900 V 1300" stroke="currentColor" strokeWidth="0.8" />
          <text x="1220" y="1120" fontSize="10" fill="currentColor">HYSTERESIS BH MODEL</text>
          <text x="1220" y="1140" fontSize="10" fill="currentColor">Br = 1.45 Tesla</text>
          <text x="1220" y="1160" fontSize="10" fill="currentColor">Hcj = 955 kA/m</text>

          {/* Section 3 HUD */}
          <rect x="100" y="2000" width="300" height="200" stroke="currentColor" strokeWidth="1" />
          <line x1="100" y1="2100" x2="400" y2="2100" stroke="currentColor" strokeWidth="1" />
          <text x="120" y="2030" fontSize="10" fill="currentColor">REPM PRODUCTION CELL</text>
          <text x="120" y="2050" fontSize="10" fill="currentColor">TEMPERATURE: &lt; 340°C</text>
          <text x="120" y="2070" fontSize="10" fill="currentColor">ATMOSPHERE: HIGH PURITY Ar</text>
        </svg>
      </div>

      {/* 4. TRANSPARENT HOMEPAGE CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <StrategicImportance />
        <IndustriesSection />
        <VisionSection />
        <HomeCTA />
      </div>

    </div>
  );
}
