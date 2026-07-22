'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch device check & custom cursor position lerp
  useEffect(() => {
    // Check if device supports hover/coarse pointer
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return; // Skip mouse events on mobile

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

  // --- THREE.JS WEBGL SIMULATION ---
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
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

    // --- 1. PHOTOREALISTIC NEODYMIUM DIPOLE MAGNET ---
    const magnetGroup = new THREE.Group();
    scene.add(magnetGroup);

    // Rounded cylinder geometry or box representation representing a highly-polished bar magnet
    // We will build a polished chrome block with a gold-plated North Pole and silver-plated South Pole
    const segmentCount = 32;
    const radius = 0.75;
    const halfHeight = 1.2;

    // Gold Top Half (North Pole)
    const nGeom = new THREE.CylinderGeometry(radius, radius, halfHeight, segmentCount);
    const nMat = new THREE.MeshStandardMaterial({
      color: 0xD6A84A, // Premium Gold
      metalness: 0.95,
      roughness: 0.08,
      bumpScale: 0.05
    });
    const northMesh = new THREE.Mesh(nGeom, nMat);
    northMesh.position.y = halfHeight / 2;
    magnetGroup.add(northMesh);

    // Chrome Bottom Half (South Pole)
    const sGeom = new THREE.CylinderGeometry(radius, radius, halfHeight, segmentCount);
    const sMat = new THREE.MeshStandardMaterial({
      color: 0xBFC6CF, // Polished Silver/Chrome
      metalness: 0.95,
      roughness: 0.08,
    });
    const southMesh = new THREE.Mesh(sGeom, sMat);
    southMesh.position.y = -halfHeight / 2;
    magnetGroup.add(southMesh);

    // Center divider groove
    const dividerGeom = new THREE.CylinderGeometry(radius + 0.01, radius + 0.01, 0.04, segmentCount);
    const dividerMat = new THREE.MeshStandardMaterial({
      color: 0x02050B,
      metalness: 0.9,
      roughness: 0.5,
    });
    const dividerMesh = new THREE.Mesh(dividerGeom, dividerMat);
    magnetGroup.add(dividerMesh);

    // --- 2. RARE EARTH ATOM CRYSTAL LATTICE ---
    const latticeGroup = new THREE.Group();
    scene.add(latticeGroup);
    latticeGroup.scale.set(0, 0, 0); // Hide initially in Hero

    // Atom nodes (spheres)
    const atomGeom = new THREE.SphereGeometry(0.09, 16, 16);
    const atomGoldMat = new THREE.MeshStandardMaterial({ color: 0xD6A84A, metalness: 0.9, roughness: 0.1 });
    const atomSilverMat = new THREE.MeshStandardMaterial({ color: 0xBFC6CF, metalness: 0.9, roughness: 0.1 });

    const nodes: THREE.Mesh[] = [];
    const size = 3; 
    const spacing = 1.0;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const node = new THREE.Mesh(atomGeom, (x + y + z) % 2 === 0 ? atomGoldMat : atomSilverMat);
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

    // Lattice bonds (connecting wireframe lines)
    const lineMat = new THREE.LineBasicMaterial({ color: 0xBFC6CF, transparent: true, opacity: 0.15 });
    const linesGeom = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    nodes.forEach((n1, idx1) => {
      nodes.forEach((n2, idx2) => {
        if (idx1 >= idx2) return;
        const dist = n1.position.distanceTo(n2.position);
        if (dist > 0.9 && dist < 1.1) {
          linePositions.push(n1.position.x, n1.position.y, n1.position.z);
          linePositions.push(n2.position.x, n2.position.y, n2.position.z);
        }
      });
    });

    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const latticeLines = new THREE.LineSegments(linesGeom, lineMat);
    latticeGroup.add(latticeLines);

    // --- 3. ELEGANT MAGNETIC FIELD SPLINES (Restrained 14 curves) ---
    const curves: THREE.CatmullRomCurve3[] = [];
    const lineMeshes: THREE.Line[] = [];
    const curveCount = 14;
    const pointsPerCurve = 50;

    for (let i = 0; i < curveCount; i++) {
      const angle = (i / curveCount) * Math.PI * 2;
      const start = new THREE.Vector3(0, halfHeight, 0);
      const end = new THREE.Vector3(0, -halfHeight, 0);

      const distance = 3.2 + (i % 3) * 0.5;
      const mid = new THREE.Vector3(
        Math.cos(angle) * distance,
        0,
        Math.sin(angle) * distance
      );

      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      curves.push(curve);

      const geom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(pointsPerCurve));
      const mat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xD6A84A : 0x4DA9FF,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending
      });

      const line = new THREE.Line(geom, mat);
      scene.add(line);
      lineMeshes.push(line);
    }

    // --- 4. GLIDING PARTICLES (60 points sliding cleanly along field splines) ---
    const particleCount = 60;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    // Arrays tracking sliding progress t [0, 1] on curves
    const particleT = new Float32Array(particleCount);
    const particleCurveIndices = new Int32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);

    const cGold = new THREE.Color(0xD6A84A);
    const cBlue = new THREE.Color(0x4DA9FF);

    for (let i = 0; i < particleCount; i++) {
      particleT[i] = Math.random();
      particleCurveIndices[i] = i % curveCount;
      particleSpeeds[i] = 0.002 + Math.random() * 0.005;

      const curve = curves[particleCurveIndices[i]];
      const pos = curve.getPointAt(particleT[i]);

      particlePositions[i * 3] = pos.x;
      particlePositions[i * 3 + 1] = pos.y;
      particlePositions[i * 3 + 2] = pos.z;

      const c = particleCurveIndices[i] % 2 === 0 ? cGold : cBlue;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, pMat);
    scene.add(particles);

    // --- 5. LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Rim lights for photorealistic metal shine
    const goldRim = new THREE.DirectionalLight(0xD6A84A, 2.5);
    goldRim.position.set(4, 3, 2);
    scene.add(goldRim);

    const blueRim = new THREE.DirectionalLight(0x4DA9FF, 2.0);
    blueRim.position.set(-4, -3, 2);
    scene.add(blueRim);

    // Subtle front highlight
    const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontLight.position.set(0, 0, 5);
    scene.add(frontLight);

    // --- SCROLL ANIMATION & INTERACTION loop values ---
    let smoothScroll = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const normCursor = new THREE.Vector2(-100, -100);

    const handleNormalizedMouseMove = (e: MouseEvent) => {
      normCursor.x = (e.clientX / window.innerWidth) * 2 - 1;
      normCursor.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleNormalizedMouseMove);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const time = clock.getElapsedTime();

      // Smooth scroll lerp
      smoothScroll += (scrollYProgress - smoothScroll) * 0.05;

      // Cursor lerp
      targetX = normCursor.x;
      targetY = normCursor.y;
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // --- SCROLL TRANSITIONS ---
      if (smoothScroll < 0.25) {
        // Hero: Magnet on right side, rotation
        const localT = smoothScroll / 0.25;
        magnetGroup.position.set(2.4, 0, 0);
        magnetGroup.scale.set(1.0 - localT, 1.0 - localT, 1.0 - localT);
        
        latticeGroup.position.set(2.4, 0, 0);
        latticeGroup.scale.set(localT * 0.8, localT * 0.8, localT * 0.8);
        latticeGroup.rotation.y = time * 0.15;

        camera.position.set(currentX * 0.4, currentY * 0.4, 11);
      } else if (smoothScroll < 0.65) {
        // Strategic: Atoms align center, camera zoom
        const localT = (smoothScroll - 0.25) / 0.4;
        magnetGroup.scale.set(0, 0, 0);
        latticeGroup.position.set(2.4 - localT * 2.4, 0, 0);
        latticeGroup.scale.set(0.8 + localT * 0.2, 0.8 + localT * 0.2, 0.8 + localT * 0.2);
        latticeGroup.rotation.y = time * 0.12 + currentX * 0.4;
        latticeGroup.rotation.x = currentY * 0.4;

        camera.position.set(0, 0, 11 - localT * 2);
      } else {
        // Vision: Lattices expand, curves fade out
        const localT = (smoothScroll - 0.65) / 0.35;
        latticeGroup.position.set(0, 0, 0);
        latticeGroup.scale.set(1.0 + localT * 0.6, 1.0 + localT * 0.6, 1.0 + localT * 0.6);
        latticeGroup.rotation.y = time * 0.08;
        latticeLines.material.opacity = 0.15 * (1 - localT);

        camera.position.set(currentX * 0.3, currentY * 0.3, 9.0 + localT * 2);
      }

      // Rotate magnet group slowly + float
      magnetGroup.rotation.y += 0.003;
      magnetGroup.rotation.x = currentY * 0.3;
      magnetGroup.rotation.z = currentX * 0.3;
      magnetGroup.position.y = Math.sin(time * 1.2) * 0.08;

      // --- GLIDING PARTICLES ON SPLINES ---
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        particleT[i] += particleSpeeds[i];
        if (particleT[i] > 1) {
          particleT[i] = 0;
        }

        const curve = curves[particleCurveIndices[i]];
        const pos = curve.getPointAt(particleT[i]);

        posArr[i * 3] = pos.x;
        posArr[i * 3 + 1] = pos.y;
        posArr[i * 3 + 2] = pos.z;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // --- SPLINES BEND GENTLY NEAR MOUSE ---
      lineMeshes.forEach((line, lineIdx) => {
        const points = line.geometry.attributes.position.array as Float32Array;
        const angle = (lineIdx / curveCount) * Math.PI * 2;
        const start = new THREE.Vector3(0, halfHeight, 0);
        const end = new THREE.Vector3(0, -halfHeight, 0);

        const distance = 3.2 + (lineIdx % 3) * 0.5;
        const mid = new THREE.Vector3(
          Math.cos(angle) * distance + currentX * 0.6,
          currentY * 0.4,
          Math.sin(angle) * distance
        );

        const splineCurve = new THREE.CatmullRomCurve3([start, mid, end]);
        const curvePoints = splineCurve.getPoints(pointsPerCurve);

        for (let pIdx = 0; pIdx <= pointsPerCurve; pIdx++) {
          points[pIdx * 3] = curvePoints[pIdx].x;
          points[pIdx * 3 + 1] = curvePoints[pIdx].y;
          points[pIdx * 3 + 2] = curvePoints[pIdx].z;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

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
      nGeom.dispose();
      nMat.dispose();
      sGeom.dispose();
      sMat.dispose();
      dividerGeom.dispose();
      dividerMat.dispose();
      atomGeom.dispose();
      atomGoldMat.dispose();
      atomSilverMat.dispose();
      pMat.dispose();
      particleGeometry.dispose();
      linesGeom.dispose();
      lineMat.dispose();
      lineMeshes.forEach(l => {
        l.geometry.dispose();
        if (Array.isArray(l.material)) l.material.forEach(m => m.dispose());
        else l.material.dispose();
      });
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

      {/* 2. CUSTOM MAGNETIC CURSOR (Disabled on mobile touch screens) */}
      {!isTouchDevice && (
        <div className="hidden lg:block pointer-events-none">
          {/* Core Dot */}
          <motion.div
            className="fixed z-50 w-2 h-2 bg-[#D6A84A] rounded-full pointer-events-none"
            style={{
              x: mouse.x - 4,
              y: mouse.y - 4,
            }}
          />
          {/* Concentric Halo Ring */}
          <motion.div
            className="fixed z-50 rounded-full border pointer-events-none flex items-center justify-center"
            animate={{
              width: isHovered ? (hoverType === 'button' ? 68 : 50) : 32,
              height: isHovered ? (hoverType === 'button' ? 68 : 50) : 32,
              borderColor: isHovered ? '#D6A84A' : '#4DA9FF',
              backgroundColor: isHovered ? 'rgba(214,168,74,0.04)' : 'rgba(77,169,255,0.01)',
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            style={{
              x: mouse.x - (isHovered ? (hoverType === 'button' ? 34 : 25) : 16),
              y: mouse.y - (isHovered ? (hoverType === 'button' ? 34 : 25) : 16),
              boxShadow: isHovered ? '0 0 12px rgba(214,168,74,0.15)' : '0 0 6px rgba(77,169,255,0.05)',
            }}
          />
        </div>
      )}

      {/* 3. CAD blueprints overlay SVGs behind the content (Opacities at 3-5%) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035] z-0">
        <svg className="absolute w-full h-full text-white" viewBox="0 0 1440 3600" fill="none">
          {/* Section 1 HUD */}
          <line x1="80" y1="120" x2="600" y2="120" stroke="currentColor" strokeWidth="0.8" />
          <line x1="80" y1="120" x2="80" y2="700" stroke="currentColor" strokeWidth="0.8" />
          <text x="96" y="140" fontSize="10" fill="currentColor">MAXWELL EQUATIONS</text>
          <text x="96" y="160" fontSize="10" fill="currentColor">∇·D = ρf</text>
          <text x="96" y="180" fontSize="10" fill="currentColor">∇×E = -∂B/∂t</text>
          <text x="96" y="200" fontSize="10" fill="currentColor">∇·B = 0</text>
          <text x="96" y="220" fontSize="10" fill="currentColor">∇×H = Jf + ∂D/∂t</text>

          {/* Section 2 HUD */}
          <circle cx="1200" cy="1100" r="140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,4" />
          <path d="M 1000,1100 H 1400 M 1200,900 V 1300" stroke="currentColor" strokeWidth="0.6" />
          <text x="1220" y="1120" fontSize="10" fill="currentColor">HYSTERESIS BH MODEL</text>
          <text x="1220" y="1140" fontSize="10" fill="currentColor">Br = 1.45 Tesla</text>
          <text x="1220" y="1160" fontSize="10" fill="currentColor">Hcj = 955 kA/m</text>

          {/* Section 3 HUD */}
          <rect x="100" y="2000" width="300" height="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="100" y1="2100" x2="400" y2="2100" stroke="currentColor" strokeWidth="0.8" />
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
