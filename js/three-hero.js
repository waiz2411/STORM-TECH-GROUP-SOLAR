/**
 * Breathtaking Architectural 3D Solar Villa Hero
 * With Studio Lighting, Photorealistic Photovoltaic Arrays, Illuminated Glass Villa, and OrbitControls
 */

window.initHero3D = function(containerId = 'hero-3d-canvas') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear existing canvas if any
  container.innerHTML = '';

  // Scene setup with subtle rich atmospheric gradient
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    40,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(15, 12, 17);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  container.appendChild(renderer.domElement);

  // OrbitControls
  let controls = null;
  if (THREE.OrbitControls) {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.05; // Don't go below ground
    controls.minDistance = 8;
    controls.maxDistance = 28;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.target.set(0, 2.5, 0);
  }

  // --- Rich High-Contrast Lighting Rig ---
  const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.4); // Bright daylight ambient
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xfff7ed, 3.5); // Warm golden sun
  sunLight.position.set(22, 30, 18);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 1;
  sunLight.shadow.camera.far = 70;
  sunLight.shadow.camera.left = -14;
  sunLight.shadow.camera.right = 14;
  sunLight.shadow.camera.top = 14;
  sunLight.shadow.camera.bottom = -14;
  sunLight.shadow.bias = -0.0004;
  scene.add(sunLight);

  // Sky fill light
  const skyFill = new THREE.DirectionalLight(0x38bdf8, 1.8);
  skyFill.position.set(-18, 16, -15);
  scene.add(skyFill);

  // Golden hour rim light
  const goldRim = new THREE.DirectionalLight(0xf59e0b, 2.2);
  goldRim.position.set(15, 8, -20);
  scene.add(goldRim);

  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // --- 1. Ground Landscape & Illuminated Luxury Base ---
  const groundGeo = new THREE.CylinderGeometry(12, 12.5, 0.6, 64);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x111827,
    roughness: 0.6,
    metalness: 0.2
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.position.y = -0.3;
  ground.receiveShadow = true;
  worldGroup.add(ground);

  // Manicured Grass Lawn Layer
  const lawnGeo = new THREE.CylinderGeometry(11.6, 11.6, 0.08, 64);
  const lawnMat = new THREE.MeshStandardMaterial({
    color: 0x1b3b27,
    roughness: 0.9,
    metalness: 0.05
  });
  const lawn = new THREE.Mesh(lawnGeo, lawnMat);
  lawn.position.y = 0.04;
  lawn.receiveShadow = true;
  worldGroup.add(lawn);

  // Glowing Pool / Water Reflection Deck
  const poolGeo = new THREE.BoxGeometry(4.5, 0.1, 2.5);
  const poolMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7,
    emissive: 0x0369a1,
    emissiveIntensity: 0.4,
    transmission: 0.6,
    roughness: 0.1,
    metalness: 0.1
  });
  const pool = new THREE.Mesh(poolGeo, poolMat);
  pool.position.set(3.5, 0.05, 4.2);
  worldGroup.add(pool);

  // Pool Deck Surround (Warm Sandstone)
  const deckGeo = new THREE.BoxGeometry(5.2, 0.06, 3.2);
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
  const deck = new THREE.Mesh(deckGeo, deckMat);
  deck.position.set(3.5, 0.03, 4.2);
  worldGroup.add(deck);

  // Perimeter Gold Accent Ring
  const ringGeo = new THREE.RingGeometry(11.8, 12.0, 64);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xc5a880, side: THREE.DoubleSide });
  const goldRing = new THREE.Mesh(ringGeo, ringMat);
  goldRing.rotation.x = -Math.PI / 2;
  goldRing.position.y = 0.02;
  worldGroup.add(goldRing);

  // --- 2. Luxury Modern Architectural Villa ---
  const houseGroup = new THREE.Group();
  worldGroup.add(houseGroup);

  // Ground Floor Body (Warm Crisp Architectural Stucco)
  const groundFloor = new THREE.Mesh(
    new THREE.BoxGeometry(7.2, 3.2, 6.0),
    new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.35, metalness: 0.1 })
  );
  groundFloor.position.set(0, 1.6, 0);
  groundFloor.castShadow = true;
  groundFloor.receiveShadow = true;
  houseGroup.add(groundFloor);

  // Upper Floor (Charcoal Titanium Cantilever)
  const upperFloor = new THREE.Mesh(
    new THREE.BoxGeometry(6.2, 2.6, 5.2),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.3 })
  );
  upperFloor.position.set(-0.9, 4.3, 0.4);
  upperFloor.castShadow = true;
  upperFloor.receiveShadow = true;
  houseGroup.add(upperFloor);

  // Architectural Natural Oak Wood Louvers / Feature Wall
  const timberGeo = new THREE.BoxGeometry(2.2, 3.0, 0.15);
  const timberMat = new THREE.MeshStandardMaterial({ color: 0xa16207, roughness: 0.6, metalness: 0.05 });
  const timberWall = new THREE.Mesh(timberGeo, timberMat);
  timberWall.position.set(2.4, 1.6, 3.05);
  houseGroup.add(timberWall);

  // Floor-to-Ceiling Panoramic Glass Facades (Warm Illuminated Luxury Interior)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x7dd3fc,
    transmission: 0.8,
    opacity: 0.95,
    transparent: true,
    roughness: 0.05,
    metalness: 0.1,
    reflectivity: 0.9,
    clearcoat: 1.0,
    emissive: 0x0284c7,
    emissiveIntensity: 0.15
  });

  const mainGlass = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.4), glassMat);
  mainGlass.position.set(-1.0, 1.6, 3.02);
  houseGroup.add(mainGlass);

  const upperGlass = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.8), glassMat);
  upperGlass.position.set(-0.9, 4.3, 3.02);
  houseGroup.add(upperGlass);

  // Warm Interior Lights (Golden Villa Glow)
  const interiorLight1 = new THREE.PointLight(0xffedd5, 3.0, 10);
  interiorLight1.position.set(-0.5, 2.0, 1.5);
  houseGroup.add(interiorLight1);

  const interiorLight2 = new THREE.PointLight(0xfde68a, 2.5, 8);
  interiorLight2.position.set(-0.8, 4.5, 1.5);
  houseGroup.add(interiorLight2);

  // --- 3. Angled Rooftop Solar PV Matrix (Detailed High-Yield Mono-PERC Modules) ---
  const roofGroup = new THREE.Group();
  roofGroup.position.set(-0.9, 5.65, 0.4);
  houseGroup.add(roofGroup);

  // Angled Roof Slab
  const roofSlab = new THREE.Mesh(
    new THREE.BoxGeometry(6.6, 0.25, 5.6),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6, metalness: 0.4 })
  );
  roofSlab.rotation.x = 0.24; // Optimal 14-degree angle
  roofSlab.castShadow = true;
  roofGroup.add(roofSlab);

  // Photovoltaic Silicon Canvas Texture (Crisp High-Res Blue-Black Solar Cells)
  const pvCanvas = document.createElement('canvas');
  pvCanvas.width = 512;
  pvCanvas.height = 512;
  const pctx = pvCanvas.getContext('2d');
  
  // Anti-reflective dark navy silicon base
  pctx.fillStyle = '#0f2744';
  pctx.fillRect(0, 0, 512, 512);

  // Wafer cell grid
  pctx.strokeStyle = '#1e40af';
  pctx.lineWidth = 2;
  for (let x = 0; x <= 512; x += 64) {
    pctx.beginPath(); pctx.moveTo(x, 0); pctx.lineTo(x, 512); pctx.stroke();
  }
  for (let y = 0; y <= 512; y += 64) {
    pctx.beginPath(); pctx.moveTo(0, y); pctx.lineTo(512, y); pctx.stroke();
  }
  // Silver conduction multi-busbars
  pctx.strokeStyle = '#cbd5e1';
  pctx.lineWidth = 1.5;
  [128, 256, 384].forEach(bx => {
    pctx.beginPath(); pctx.moveTo(bx, 0); pctx.lineTo(bx, 512); pctx.stroke();
  });

  const pvTexture = new THREE.CanvasTexture(pvCanvas);
  pvTexture.wrapS = THREE.RepeatWrapping;
  pvTexture.wrapT = THREE.RepeatWrapping;

  const solarPanelMat = new THREE.MeshPhysicalMaterial({
    color: 0x1e3a8a,
    map: pvTexture,
    metalness: 0.95,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 1.0
  });

  const silverFrameMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.9,
    roughness: 0.2
  });

  // 12x 550W Tier-1 Panels
  const panelPositions = [
    [-2.2, 0.16, -1.8], [-0.75, 0.16, -1.8], [0.75, 0.16, -1.8], [2.2, 0.16, -1.8],
    [-2.2, 0.16, 0.0],  [-0.75, 0.16, 0.0],  [0.75, 0.16, 0.0],  [2.2, 0.16, 0.0],
    [-2.2, 0.16, 1.8],  [-0.75, 0.16, 1.8],  [0.75, 0.16, 1.8],  [2.2, 0.16, 1.8],
  ];

  panelPositions.forEach(pos => {
    // Photovoltaic Glass
    const panel = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.04, 1.55), solarPanelMat);
    panel.position.set(pos[0], pos[1], pos[2]);
    panel.rotation.x = 0.24;
    panel.castShadow = true;
    roofGroup.add(panel);

    // Anodized Silver Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.03, 1.58), silverFrameMat);
    frame.position.set(pos[0], pos[1] - 0.015, pos[2]);
    frame.rotation.x = 0.24;
    roofGroup.add(frame);
  });

  // --- 4. Sleek White & Graphite Inverter + Tesla/Sunsynk Battery Wall ---
  const stationGroup = new THREE.Group();
  stationGroup.position.set(4.5, 0, 1.2);
  worldGroup.add(stationGroup);

  // Lithium Storage Tower (Gloss White & Brushed Metallic)
  const battCabinet = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 2.4, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.3 })
  );
  battCabinet.position.set(0, 1.2, 0);
  battCabinet.castShadow = true;
  stationGroup.add(battCabinet);

  // Illuminated Battery Status Bar (Warm Gold / Green)
  const battLedMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
  for (let i = 0; i < 4; i++) {
    const ledBar = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.06, 0.25), battLedMat);
    ledBar.position.set(0, 0.8 + (i * 0.35), 0.5);
    stationGroup.add(ledBar);
  }

  // Sunsynk / Deye Inverter Enclosure (Graphite & Gold Trim)
  const inverter = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1.5, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.8 })
  );
  inverter.position.set(0, 1.2, -1.4);
  inverter.castShadow = true;
  stationGroup.add(inverter);

  // Glowing OLED Screen
  const oled = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.45),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  oled.position.set(0.26, 1.35, -1.4);
  oled.rotation.y = Math.PI / 2;
  stationGroup.add(oled);

  // EV Charging Station Pillar
  const evPillar = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 1.4, 0.3),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 })
  );
  evPillar.position.set(4.5, 0.7, 3.2);
  evPillar.castShadow = true;
  worldGroup.add(evPillar);

  // EV Glowing Halo
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(0.08, 0.12, 16),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide })
  );
  halo.position.set(4.34, 1.1, 3.2);
  halo.rotation.y = -Math.PI / 2;
  worldGroup.add(halo);

  // --- 5. Architectural Modern Trees & Landscaping ---
  for (let i = 0; i < 5; i++) {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.12, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x451a03 })
    );
    const foliage = new THREE.Mesh(
      new THREE.ConeGeometry(0.7, 1.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
    );
    foliage.position.y = 1.2;
    foliage.castShadow = true;
    tree.add(trunk);
    tree.add(foliage);

    const angle = (i / 5) * Math.PI * 1.5 - 1.2;
    tree.position.set(Math.cos(angle) * 8.5, 0.5, Math.sin(angle) * 8.5);
    worldGroup.add(tree);
  }

  // Daylight / Night simulation
  window.setDayNightMode = function(isDay) {
    if (isDay) {
      gsap.to(sunLight, { intensity: 3.5, duration: 1.2 });
      gsap.to(sunLight.position, { x: 22, y: 30, z: 18, duration: 1.2 });
      gsap.to(ambientLight, { intensity: 1.4, duration: 1.2 });
      gsap.to(interiorLight1, { intensity: 3.0, duration: 1.2 });
    } else {
      gsap.to(sunLight, { intensity: 0.2, duration: 1.2 });
      gsap.to(sunLight.position, { x: -12, y: 10, z: -15, duration: 1.2 });
      gsap.to(ambientLight, { intensity: 0.4, duration: 1.2 });
      gsap.to(interiorLight1, { intensity: 6.0, duration: 1.2 });
    }
  };

  // Window Resize
  const onResize = () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener('resize', onResize);

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (controls) {
      controls.update();
    } else {
      worldGroup.rotation.y += 0.003;
    }
    renderer.render(scene, camera);
  };

  animate();
};
