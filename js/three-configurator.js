/**
 * Executive 3D Solar Hardware System Configurator
 * Studio Lighting Rig, High-Detail Monocrystalline Solar Panel, Sunsynk Inverter, and LiFePO4 Rack
 */

window.initConfigurator3D = function(containerId = 'configurator-3d-canvas') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 1.8, 8.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  container.appendChild(renderer.domElement);

  // OrbitControls for silky smooth 360 inspection
  let controls = null;
  if (THREE.OrbitControls) {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3.5;
    controls.maxDistance = 15;
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.target.set(0, 0.2, 0);
  }

  // --- High-End Studio Lighting Rig ---
  const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(6, 9, 8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.bias = -0.0003;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
  fillLight.position.set(-8, 5, 4);
  scene.add(fillLight);

  const goldRim = new THREE.DirectionalLight(0xf59e0b, 2.2);
  goldRim.position.set(0, 6, -8);
  scene.add(goldRim);

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // --- Studio Display Platform ---
  const podium = new THREE.Mesh(
    new THREE.CylinderGeometry(6.5, 7.0, 0.4, 64),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7, metalness: 0.3 })
  );
  podium.position.y = -1.2;
  podium.receiveShadow = true;
  mainGroup.add(podium);

  // Glowing Podium Ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(6.4, 6.6, 64),
    new THREE.MeshBasicMaterial({ color: 0xc5a880, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -0.99;
  mainGroup.add(ring);

  // ==========================================
  // 1. Solar PV Array (Left)
  // ==========================================
  const panelGroup = new THREE.Group();
  panelGroup.position.set(-3.2, 0, 0);
  mainGroup.add(panelGroup);

  // PV Texture
  const pvCanvas = document.createElement('canvas');
  pvCanvas.width = 256;
  pvCanvas.height = 256;
  const pctx = pvCanvas.getContext('2d');
  pctx.fillStyle = '#0c274c';
  pctx.fillRect(0, 0, 256, 256);
  pctx.strokeStyle = '#1d4ed8';
  pctx.lineWidth = 1.5;
  for (let x = 0; x <= 256; x += 32) {
    pctx.beginPath(); pctx.moveTo(x, 0); pctx.lineTo(x, 256); pctx.stroke();
    pctx.beginPath(); pctx.moveTo(0, x); pctx.lineTo(256, x); pctx.stroke();
  }
  pctx.strokeStyle = '#e2e8f0';
  pctx.lineWidth = 1;
  [64, 128, 192].forEach(bx => {
    pctx.beginPath(); pctx.moveTo(bx, 0); pctx.lineTo(bx, 256); pctx.stroke();
  });
  const pvTexture = new THREE.CanvasTexture(pvCanvas);

  const panelMat = new THREE.MeshPhysicalMaterial({
    color: 0x1e3a8a,
    map: pvTexture,
    metalness: 0.9,
    roughness: 0.1,
    reflectivity: 1.0,
    clearcoat: 1.0
  });

  const frameMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    metalness: 0.9,
    roughness: 0.2
  });

  // 2x2 Solar Module Array on Mounting Rails
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 2; c++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 1.5), panelMat);
      p.position.set((c - 0.5) * 1.3, (r - 0.5) * 1.6 + 0.2, 0);
      p.rotation.x = 0.35;
      p.castShadow = true;
      panelGroup.add(p);

      const f = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.03, 1.54), frameMat);
      f.position.set((c - 0.5) * 1.3, (r - 0.5) * 1.6 + 0.2 - 0.015, 0);
      f.rotation.x = 0.35;
      panelGroup.add(f);
    }
  }

  // Aluminum Mounting Struts
  const strutMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
  const strut1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.8), strutMat);
  strut1.rotation.x = 0.35;
  strut1.position.set(-0.65, 0.2, -0.1);
  panelGroup.add(strut1);

  const strut2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.8), strutMat);
  strut2.rotation.x = 0.35;
  strut2.position.set(0.65, 0.2, -0.1);
  panelGroup.add(strut2);

  // ==========================================
  // 2. Sunsynk / Deye Hybrid Inverter (Center)
  // ==========================================
  const inverterGroup = new THREE.Group();
  inverterGroup.position.set(0, 0, 0);
  mainGroup.add(inverterGroup);

  // Clean White / Platinum Inverter Chassis
  const inverterBody = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 2.1, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.4, roughness: 0.2 })
  );
  inverterBody.position.y = 0.2;
  inverterBody.castShadow = true;
  inverterGroup.add(inverterBody);

  // Brushed Gold Branding Trim
  const goldTrim = new THREE.Mesh(
    new THREE.BoxGeometry(1.42, 0.05, 0.52),
    new THREE.MeshStandardMaterial({ color: 0xc5a880, metalness: 0.9, roughness: 0.2 })
  );
  goldTrim.position.y = 1.0;
  inverterGroup.add(goldTrim);

  // High-Tech Digital OLED Display Screen
  const oledScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.6),
    new THREE.MeshBasicMaterial({ color: 0x0284c7 })
  );
  oledScreen.position.set(0, 0.35, 0.26);
  inverterGroup.add(oledScreen);

  // Inverter Lower Terminals & Cable Conduit Glands
  for (let i = -2; i <= 2; i++) {
    const gland = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 })
    );
    gland.position.set(i * 0.22, -0.9, 0);
    inverterGroup.add(gland);
  }

  // ==========================================
  // 3. LiFePO4 Lithium Battery Rack (Right)
  // ==========================================
  const batteryGroup = new THREE.Group();
  batteryGroup.position.set(3.2, 0, 0);
  mainGroup.add(batteryGroup);

  // Server-Grade Modular Steel Enclosure
  const batteryCabinet = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 2.5, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.3 })
  );
  batteryCabinet.position.y = 0.2;
  batteryCabinet.castShadow = true;
  batteryGroup.add(batteryCabinet);

  // 4x LiFePO4 Lithium Module Drawers
  const ledActiveMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
  for (let i = 0; i < 4; i++) {
    const mod = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 0.45, 0.78),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6, roughness: 0.3 })
    );
    mod.position.y = -0.65 + (i * 0.55);
    batteryGroup.add(mod);

    // Aluminum Pull Handles
    const handle = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.04, 0.06),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 })
    );
    handle.position.set(0, -0.65 + (i * 0.55), 0.42);
    batteryGroup.add(handle);

    // Green/Gold LED Battery Level Meter
    for (let l = 0; l < 3; l++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.02), ledActiveMat);
      led.position.set(-0.5 + (l * 0.1), -0.65 + (i * 0.55), 0.41);
      batteryGroup.add(led);
    }
  }

  // Interconnecting Brushed Titanium Heavy Conduits
  const conduitMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
  
  const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.0), conduitMat);
  c1.rotation.z = Math.PI / 2;
  c1.position.set(-1.6, -0.8, 0);
  mainGroup.add(c1);

  const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.0), conduitMat);
  c2.rotation.z = Math.PI / 2;
  c2.position.set(1.6, -0.8, 0);
  mainGroup.add(c2);

  // Smooth Component Zooming Controller
  window.focusConfigComponent = function(name) {
    if (!controls) return;
    if (name === 'solar') {
      gsap.to(camera.position, { x: -3.2, y: 0.5, z: 4.8, duration: 1.2, ease: 'power2.out' });
      gsap.to(controls.target, { x: -3.2, y: 0.2, z: 0, duration: 1.2 });
    } else if (name === 'inverter') {
      gsap.to(camera.position, { x: 0, y: 0.5, z: 4.2, duration: 1.2, ease: 'power2.out' });
      gsap.to(controls.target, { x: 0, y: 0.2, z: 0, duration: 1.2 });
    } else if (name === 'battery') {
      gsap.to(camera.position, { x: 3.2, y: 0.5, z: 4.8, duration: 1.2, ease: 'power2.out' });
      gsap.to(controls.target, { x: 3.2, y: 0.2, z: 0, duration: 1.2 });
    } else {
      gsap.to(camera.position, { x: 0, y: 1.8, z: 8.5, duration: 1.2, ease: 'power2.out' });
      gsap.to(controls.target, { x: 0, y: 0.2, z: 0, duration: 1.2 });
    }
  };

  const onResize = () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener('resize', onResize);

  const animate = () => {
    requestAnimationFrame(animate);
    if (controls) {
      controls.update();
    }
    renderer.render(scene, camera);
  };

  animate();
};
