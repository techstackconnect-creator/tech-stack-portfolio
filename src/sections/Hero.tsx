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
    scene.fog = new THREE.Fog(0x000000, 5, 25);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const indigo1 = new THREE.PointLight(0x6366f1, 2, 30);
    indigo1.position.set(4, 2, 2);
    scene.add(indigo1);
    const indigo2 = new THREE.PointLight(0x6366f1, 1.2, 30);
    indigo2.position.set(-5, -3, -4);
    scene.add(indigo2);

    // Floating frames tunnel
    const frames: THREE.Mesh[] = [];
    const frameGeo = new THREE.PlaneGeometry(2.4, 1.35);
    for (let i = 0; i < 14; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x0a0a0a),
        transparent: true,
        opacity: 0.55,
        metalness: 0.4,
        roughness: 0.6,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(frameGeo, mat);
      mesh.position.x = (Math.random() - 0.5) * 6;
      mesh.position.y = (Math.random() - 0.5) * 4;
      mesh.position.z = -i * 3;
      mesh.rotation.x = (Math.random() - 0.5) * 0.4;
      mesh.rotation.y = (Math.random() - 0.5) * 0.4;
      scene.add(mesh);
      frames.push(mesh);

      // border outline
      const edges = new THREE.EdgesGeometry(frameGeo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.4 })
      );
      mesh.add(line);
    }

    // Particles
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = -Math.random() * 40;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      frames.forEach((f, i) => {
        f.rotation.y += 0.0008 + i * 0.00005;
        f.rotation.x += 0.0004;
      });
      particles.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    // GSAP scroll: move camera through tunnel
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self: ScrollTrigger) => {
        camera.position.z = 8 - self.progress * 30;
        camera.rotation.z = self.progress * 0.15;
      },
    });

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
      renderer.dispose();
      frameGeo.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-6">
          Freelance Web Design
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-5xl leading-[1.05]">
          We design experiences <br className="hidden sm:block" /> people remember
        </h1>
        <p className="mt-6 text-zinc-400 max-w-xl text-base sm:text-lg">
          Premium digital interfaces for modern brands.
        </p>
        <a
          href="#work"
          className="group mt-10 inline-flex items-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 font-medium text-sm"
        >
          View our work
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
