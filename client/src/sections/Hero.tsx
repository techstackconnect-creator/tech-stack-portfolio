import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 30);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );

    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);

    mount.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const indigoLight = new THREE.PointLight(0x6366f1, 2.5, 40);
    indigoLight.position.set(4, 2, 4);
    scene.add(indigoLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 40);
    purpleLight.position.set(-4, -2, 2);
    scene.add(purpleLight);

    // Particles
    const particleCount = 900;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    const particleGeo = new THREE.BufferGeometry();

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);

    scene.add(particles);

    // Animation
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.00015;

      renderer.render(scene, camera);
    };

    animate();

    // Scroll Animation
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        camera.position.z = 8 - self.progress * 4;
        particles.rotation.z = self.progress * 0.2;
      },
    });

    // Resize
    const onResize = () => {
      if (!mount) return;

      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);

      st.kill();

      window.removeEventListener("resize", onResize);

      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-black border-b border-white/[0.08]"
    >
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-100px] sm:left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-indigo-600/20 blur-[120px] sm:blur-[160px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-100px] sm:right-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-purple-600/20 blur-[120px] sm:blur-[160px] rounded-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 min-h-[100svh] flex items-center justify-center">

        <div className="text-center w-full max-w-4xl">

          {/* Small Label */}
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-zinc-400 mb-5 sm:mb-6">
            Modern Web Development Studio
          </p>

          {/* Heading */}
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-bold tracking-tight">

            <span className="block text-white">
              We Build Fast &
            </span>

            <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Memorable Digital Experiences
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-lg text-zinc-400 leading-relaxed px-2 sm:px-0">
            Premium websites and scalable web applications crafted for
            modern brands — combining clean design, seamless user
            experience, and high-performance development.
          </p>

        </div>
      </div>
    </section>
  );
}