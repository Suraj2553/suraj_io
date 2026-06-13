import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/* ── Bokeh texture (large radial glow orbs) ── */
function makeBokehTexture(size = 256) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const r = size / 2;
  const g = ctx.createRadialGradient(r, r, 0, r, r, r);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.65)");
  g.addColorStop(0.55, "rgba(255,255,255,0.14)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/* ── Point sprite texture (tiny drifting particles) ── */
function makePointTexture(size = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const r = size / 2;
  const g = ctx.createRadialGradient(r, r, 0, r, r, r);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.38, "rgba(255,255,255,0.7)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/* ── Blue-teal palette matching blueTheme ── */
const ORB_PALETTE = [
  0xa6e1fa, // highlight blue
  0x4ba8d6, // mid blue
  0xc9e8f7, // pale blue
  0x0e6ba8, // accent blue
  0xe0f3fc, // near-white blue
  0x7ac5e8, // sky blue
  0xffffff, // white
];

const POINT_COLORS = [
  new THREE.Color(0xa6e1fa),
  new THREE.Color(0xc9e8f7),
  new THREE.Color(0xe0f3fc),
  new THREE.Color(0xffffff),
  new THREE.Color(0x7ac5e8),
];

function randPointColor() {
  return POINT_COLORS[Math.floor(Math.random() * POINT_COLORS.length)];
}

export default function HeroThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let W = mount.clientWidth || window.innerWidth;
    let H = mount.clientHeight || window.innerHeight;

    /* ── Renderer ──────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 100);
    camera.position.z = 8;

    /* ── Layer 1 — 65 tiny drifting point particles ─────── */
    const N1 = 65;
    const pos1 = new Float32Array(N1 * 3);
    const col1 = new Float32Array(N1 * 3);
    const spd1 = new Float32Array(N1);
    const off1 = new Float32Array(N1);

    for (let i = 0; i < N1; i++) {
      pos1[i * 3] = (Math.random() - 0.5) * 18;
      pos1[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos1[i * 3 + 2] = (Math.random() - 0.5) * 5;
      const c = randPointColor();
      col1[i * 3] = c.r;
      col1[i * 3 + 1] = c.g;
      col1[i * 3 + 2] = c.b;
      spd1[i] = Math.random() * 0.4 + 0.1;
      off1[i] = Math.random() * Math.PI * 2;
    }

    const base1 = new Float32Array(pos1); // rest positions

    const geo1 = new THREE.BufferGeometry();
    geo1.setAttribute("position", new THREE.BufferAttribute(pos1, 3));
    geo1.setAttribute("color", new THREE.BufferAttribute(col1, 3));

    const pointTex = makePointTexture();
    const mat1 = new THREE.PointsMaterial({
      size: 0.065,
      map: pointTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const pts = new THREE.Points(geo1, mat1);
    scene.add(pts);

    /* ── Layer 2 — 20 large bokeh orbs ─────────────────── */
    const bokehTex = makeBokehTexture();
    const orbs = [];

    for (let i = 0; i < 20; i++) {
      const mat = new THREE.SpriteMaterial({
        map: bokehTex,
        color: new THREE.Color(ORB_PALETTE[i % ORB_PALETTE.length]),
        transparent: true,
        opacity: Math.random() * 0.09 + 0.03,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      const scale = Math.random() * 4.5 + 2.5;
      sprite.scale.set(scale, scale, 1);

      const ox = (Math.random() - 0.5) * 18;
      const oy = (Math.random() - 0.5) * 11;
      sprite.position.set(ox, oy, (Math.random() - 0.5) * 3);

      const wx = (2 * Math.PI) / (Math.random() * 18 + 12);
      const wy = (2 * Math.PI) / (Math.random() * 14 + 8);
      sprite.userData = {
        ox,
        oy,
        ax: Math.random() * 0.9 + 0.3,
        ay: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        wx,
        wy,
      };
      scene.add(sprite);
      orbs.push(sprite);
    }

    /* ── Mouse parallax ─────────────────────────────────── */
    const mouse = { x: 0, y: 0 };
    const camLag = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ── Resize ──────────────────────────────────────────── */
    const onResize = () => {
      W = mount.clientWidth;
      H = mount.clientHeight;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize, { passive: true });

    /* ── Render loop ─────────────────────────────────────── */
    let elapsed = 0;
    let lastTime = performance.now();
    let animId;

    const tick = (timestamp) => {
      animId = requestAnimationFrame(tick);
      const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;
      elapsed += dt;

      // drift tiny particles around their rest positions
      const pa = geo1.attributes.position.array;
      for (let i = 0; i < N1; i++) {
        pa[i * 3] =
          base1[i * 3] + Math.cos(elapsed * spd1[i] * 0.7 + off1[i]) * 0.28;
        pa[i * 3 + 1] =
          base1[i * 3 + 1] + Math.sin(elapsed * spd1[i] + off1[i]) * 0.38;
      }
      geo1.attributes.position.needsUpdate = true;

      // oscillate bokeh orbs
      for (const s of orbs) {
        const { ox, oy, ax, ay, phase, wx, wy } = s.userData;
        s.position.x = ox + Math.sin(elapsed * wx + phase) * ax;
        s.position.y = oy + Math.cos(elapsed * wy + phase * 0.7) * ay;
      }

      // camera parallax lag
      camLag.x += (mouse.x * 0.5 - camLag.x) * 0.025;
      camLag.y += (-mouse.y * 0.3 - camLag.y) * 0.025;
      camera.position.x = camLag.x;
      camera.position.y = camLag.y;

      renderer.render(scene, camera);
    };
    requestAnimationFrame(tick);

    /* ── Cleanup ─────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      bokehTex.dispose();
      pointTex.dispose();
      geo1.dispose();
      mat1.dispose();
      orbs.forEach((s) => s.material.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
