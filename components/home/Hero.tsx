'use client';

import { useEffect, useRef, useState } from 'react';
import LinkNext from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Compass, ShieldCheck, Zap, Activity } from 'lucide-react';
import * as THREE from 'three';

// --- SUB-COMPONENT: ANIMATED COUNTER ---
interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1800, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// --- MAIN HERO COMPONENT ---
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // States for mouse coordinate tracking
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [btnDrift, setBtnDrift] = useState({ x: 0, y: 0 });
  
  // Parallax scrolling hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  // Track global mouse movement for the WebGL scene
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Proximity tracking for primary button drift (magnetic attraction)
  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Magnetic pull effect: limit the translation to max 12px
    setBtnDrift({ x: x * 0.15, y: y * 0.15 });
  };

  const handleBtnMouseLeave = () => {
    setBtnDrift({ x: 0, y: 0 });
  };

  // --- THREE.JS WEBGL SIMULATION ---
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- GEOMETRY CREATION ---
    
    // Center Neodymium Magnet (3D Rounded Block)
    const magnetGroup = new THREE.Group();
    scene.add(magnetGroup);

    // North Pole (Red/Silver metallic gradient representation)
    const nGeom = new THREE.BoxGeometry(0.8, 1.4, 0.8);
    const nMat = new THREE.MeshStandardMaterial({
      color: 0xD6A84A, // Gold Theme
      roughness: 0.15,
      metalness: 0.9,
    });
    const northMesh = new THREE.Mesh(nGeom, nMat);
    northMesh.position.y = 0.7;
    magnetGroup.add(northMesh);

    // South Pole (Dark Navy metallic gradient representation)
    const sGeom = new THREE.BoxGeometry(0.8, 1.4, 0.8);
    const sMat = new THREE.MeshStandardMaterial({
      color: 0x4DA9FF, // Electric Blue Theme
      roughness: 0.15,
      metalness: 0.9,
    });
    const southMesh = new THREE.Mesh(sGeom, sMat);
    southMesh.position.y = -0.7;
    magnetGroup.add(southMesh);

    // Dynamic field flux curves (lines)
    const curves: THREE.Line[] = [];
    const curveCount = 14;
    const pointsPerCurve = 30;

    for (let i = 0; i < curveCount; i++) {
      const angle = (i / curveCount) * Math.PI * 2;
      const start = new THREE.Vector3(0, 0.8, 0);
      const end = new THREE.Vector3(0, -0.8, 0);
      
      const distance = 2.5 + Math.random() * 1.5;
      const mid = new THREE.Vector3(
        Math.cos(angle) * distance,
        0,
        Math.sin(angle) * distance
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const geom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(pointsPerCurve));
      
      const mat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xD6A84A : 0x4DA9FF,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending
      });

      const line = new THREE.Line(geom, mat);
      scene.add(line);
      curves.push(line);
    }

    // Orbiting particles (glowing magnetic field dust)
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const radiusList = new Float32Array(particleCount);
    const angles = new Float32Array(particleCount);
    const heights = new Float32Array(particleCount);

    const colorGold = new THREE.Color(0xD6A84A);
    const colorBlue = new THREE.Color(0x4DA9FF);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 3.5;
      const height = (Math.random() - 0.5) * 6;

      angles[i] = angle;
      radiusList[i] = radius;
      heights[i] = height;
      speeds[i] = 0.005 + Math.random() * 0.012;

      // Positions
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Color mapping (Gold near top, Blue near bottom)
      const mixRatio = (height + 3) / 6;
      const c = new THREE.Color().lerpColors(colorBlue, colorGold, mixRatio);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom shader-like point texture
    const pMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, pMat);
    scene.add(particles);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x4DA9FF, 1.8);
    dirLight1.position.set(-5, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xD6A84A, 1.8);
    dirLight2.position.set(5, -4, 3);
    scene.add(dirLight2);

    // --- ANIMATION LOOP variables ---
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const animate = () => {
      // Smoothly interpolate mouse positions
      mouseTargetX = mouse.x;
      mouseTargetY = mouse.y;
      currentMouseX += (mouseTargetX - currentMouseX) * 0.06;
      currentMouseY += (mouseTargetY - currentMouseY) * 0.06;

      // Rotate magnet block slowly + influence via mouse
      magnetGroup.rotation.y += 0.005;
      magnetGroup.rotation.x = currentMouseY * 0.4;
      magnetGroup.rotation.z = currentMouseX * 0.4;

      // Magnet float animation
      const elapsed = Date.now() * 0.001;
      magnetGroup.position.y = Math.sin(elapsed * 1.5) * 0.15;

      // Update particle positions (orbital physics influenced by magnetic mouse force)
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        angles[i] += speeds[i];
        
        // Add cursor magnetic repulsion/attraction to orbital radius
        const baseRadius = radiusList[i];
        const mouseEffect = Math.sin(angles[i] - currentMouseX * Math.PI) * currentMouseY * 0.6;
        const radius = baseRadius + mouseEffect;

        posArr[i * 3] = Math.cos(angles[i]) * radius;
        posArr[i * 3 + 1] = heights[i] + Math.sin(elapsed + baseRadius) * 0.15;
        posArr[i * 3 + 2] = Math.sin(angles[i]) * radius;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Gently deform lines based on cursor interaction
      curves.forEach((line, lineIdx) => {
        const points = line.geometry.attributes.position.array as Float32Array;
        const angle = (lineIdx / curveCount) * Math.PI * 2;
        const start = new THREE.Vector3(0, 0.8 + Math.sin(elapsed) * 0.05, 0);
        const end = new THREE.Vector3(0, -0.8 - Math.sin(elapsed) * 0.05, 0);
        
        // Bend mid-point via mouse drift
        const distance = 2.5 + Math.sin(elapsed * 0.5 + lineIdx) * 0.2;
        const mid = new THREE.Vector3(
          Math.cos(angle) * distance + currentMouseX * 0.8,
          currentMouseY * 0.6,
          Math.sin(angle) * distance + Math.sin(currentMouseX) * 0.5
        );

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const curvePoints = curve.getPoints(pointsPerCurve);
        
        for (let pIdx = 0; pIdx <= pointsPerCurve; pIdx++) {
          points[pIdx * 3] = curvePoints[pIdx].x;
          points[pIdx * 3 + 1] = curvePoints[pIdx].y;
          points[pIdx * 3 + 2] = curvePoints[pIdx].z;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const animFrameId = requestAnimationFrame(animate);

    // Handle resizing cleanly
    const handleResize = () => {
      if (!canvasRef.current) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      nGeom.dispose();
      nMat.dispose();
      sGeom.dispose();
      sMat.dispose();
      pMat.dispose();
      particleGeometry.dispose();
      curves.forEach(l => {
        l.geometry.dispose();
        if (Array.isArray(l.material)) l.material.forEach(m => m.dispose());
        else l.material.dispose();
      });
    };
  }, [mouse]);

  return (
    <motion.section
      ref={containerRef}
      id="hero-section"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#02050B] pt-24 pb-16"
      style={{ opacity: heroOpacity, scale: heroScale }}
      aria-labelledby="hero-heading"
    >
      {/* Visual Depth Layers */}
      {/* Layer 1: Base Grid Overlay */}
      <div className="absolute inset-0 hero-grid opacity-25 z-0" aria-hidden="true" />
      
      {/* Layer 2: Noise Texture */}
      <div className="absolute inset-0 noise opacity-10 z-0" aria-hidden="true" />

      {/* Layer 3: Faint Engineering Schematics / CAD Blueprints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06] z-0" aria-hidden="true">
        <svg className="absolute w-full h-full text-white" viewBox="0 0 1440 900" fill="none">
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M 0,200 L 400,200 M 200,0 L 200,400" stroke="currentColor" strokeWidth="1" />
          <text x="220" y="240" fontSize="10" fill="currentColor">B = μ₀(H + M)</text>
          <text x="220" y="260" fontSize="10" fill="currentColor">∇·B = 0</text>
          
          <circle cx="1200" cy="700" r="180" stroke="currentColor" strokeWidth="1" />
          <circle cx="1200" cy="700" r="80" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 1000,700 L 1400,700 M 1200,500 L 1200,900" stroke="currentColor" strokeWidth="0.8" />
          <text x="1220" y="730" fontSize="10" fill="currentColor">T_c = 310°C - 340°C</text>
        </svg>
      </div>

      {/* Layer 4: Ambient Radial Backglows */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle 800px at 70% 30%, rgba(77,169,255,0.06) 0%, transparent 80%), radial-gradient(circle 600px at 20% 70%, rgba(214,168,74,0.04) 0%, transparent 80%)',
        }}
      />

      {/* Splitscreen Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: BRAND & VALUE COPY */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          {/* Eyebrow Flag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-3.5 mb-6 text-[#D6A84A]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#D6A84A] animate-pulse" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] font-sans">
              Advanced Deep Tech Manufacturing
            </span>
          </motion.div>

          {/* Headline - SpaceX/BMW i Inspired scale */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.5rem] xl:text-[5rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Building India's Future of{' '}
            <br />
            <span className="gold-text italic block py-1.5">Advanced Permanent</span>
            Magnet Manufacturing
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-base md:text-lg leading-relaxed max-w-xl text-[#BFC6CF] mb-10"
          >
            Magnova is setting up India's pioneer integrated commercial scale production facility 
            for sintered rare-earth permanent magnets, securing strategic industrial supply chains.
          </motion.p>

          {/* Interactive CTAs with Button Drift (Magnetic Force) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-12"
          >
            {/* Magnetic primary button wrapper */}
            <div
              className="w-full sm:w-auto relative"
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
            >
              <motion.div
                animate={{ x: btnDrift.x, y: btnDrift.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              >
                <LinkNext
                  href="/contact"
                  id="hero-primary-cta"
                  className="btn-primary inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-sm group relative"
                  style={{
                    boxShadow: '0 0 20px rgba(214,168,74,0.18)',
                  }}
                >
                  <Zap size={14} className="text-[#02050B] group-hover:scale-110 transition-transform duration-300" />
                  Partner With Us
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </LinkNext>
              </motion.div>
            </div>

            <LinkNext
              href="/technology"
              id="hero-secondary-cta"
              className="btn-outline inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-sm group"
              style={{
                border: '1px solid rgba(77,169,255,0.22)',
                color: '#4DA9FF',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(77,169,255,0.12)';
                e.currentTarget.style.borderColor = '#4DA9FF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(77,169,255,0.22)';
              }}
            >
              <Cpu size={14} />
              Explore Technology
            </LinkNext>
          </motion.div>

          {/* Trust Bar Badges (Illuminated) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="flex flex-wrap gap-2.5 mb-10 text-[0.62rem] font-bold text-white tracking-widest uppercase"
          >
            {[
              { icon: Compass, text: 'Government Approved' },
              { icon: Activity, text: 'REPM Initiative' },
              { icon: ShieldCheck, text: 'Strategic Supply Chain' },
              { icon: Zap, text: 'Industrial Scale' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                  style={{
                    background: 'rgba(8, 17, 29, 0.45)',
                    border: '1px solid rgba(214, 168, 74, 0.15)',
                    boxShadow: '0 0 10px rgba(214,168,74,0.02)',
                  }}
                >
                  <Icon size={10} style={{ color: '#D6A84A' }} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Live Metrics counters */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <AnimatedCounter end={1200} suffix=" TPA" />
              <p className="text-[0.68rem] text-[#5E6875] font-bold tracking-wider uppercase mt-1">Planned Capacity</p>
            </div>
            <div>
              <AnimatedCounter end={25} suffix=" Acre" />
              <p className="text-[0.68rem] text-[#5E6875] font-bold tracking-wider uppercase mt-1">Campus footprint</p>
            </div>
            <div>
              <AnimatedCounter end={2032} prefix="Vision " />
              <p className="text-[0.68rem] text-[#5E6875] font-bold tracking-wider uppercase mt-1">IPO Roadmap</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE WEBGL 3D MAGNETIC WORLD */}
        <div className="lg:col-span-6 w-full h-[380px] sm:h-[480px] lg:h-[640px] flex items-center justify-center relative">
          
          {/* Subtle Outer Glowing Ring behind the canvas */}
          <div 
            className="absolute rounded-full pointer-events-none opacity-20 filter blur-3xl z-0"
            style={{
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(77,169,255,0.3) 0%, rgba(214,168,74,0.15) 50%, transparent 70%)',
            }}
          />

          {/* WebGL Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full relative z-10 select-none cursor-grab active:cursor-grabbing"
            style={{ outline: 'none' }}
          />

          {/* Science Data HUD Box */}
          <div 
            className="absolute bottom-4 right-4 z-20 rounded-sm p-4 text-[0.65rem] font-mono select-none pointer-events-none text-left"
            style={{
              border: '1px solid rgba(77,169,255,0.15)',
              background: 'rgba(2, 5, 11, 0.85)',
              boxShadow: '0 0 15px rgba(77,169,255,0.05)',
            }}
          >
            <p className="text-[#4DA9FF] font-bold mb-1">// FIELD SIMULATOR v4.1</p>
            <p className="text-white/60">POLES: N [D6A84A] / S [4DA9FF]</p>
            <p className="text-white/60">COERCIVITY (Hcj) : &gt; 955 kA/m</p>
            <p className="text-white/40">MOUSE FORCE: {mouse.x.toFixed(3)}, {mouse.y.toFixed(3)}</p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
