/**
 * Executive South African Solar Sizing Engine - Storm Tech Group.®
 * Calibrated for Mahikeng & North West Solar Irradiance (~5.8 Peak Sun Hours/Day)
 * Tariffs based on Eskom / Mahikeng Local Municipality residential & commercial tiers
 */

window.initSolarCalculator = function() {
  const billSlider = document.getElementById('monthly-bill-slider');
  const billDisplay = document.getElementById('bill-value-display');
  const stageSelect = document.getElementById('load-shedding-stage');
  const phaseSelect = document.getElementById('electrical-phase');
  const roofVisualizer = document.getElementById('calc-roof-visualizer');

  const appliances = [
    { id: 'app-lights', name: 'LED Lighting & Wi-Fi', watts: 150 },
    { id: 'app-fridge', name: 'Refrigeration & Freezers', watts: 300 },
    { id: 'app-tv', name: 'Entertainment & Workstations', watts: 250 },
    { id: 'app-security', name: 'Perimeter Security & CCTV', watts: 120 },
    { id: 'app-pool', name: 'Borehole / Swimming Pool Pump', watts: 1100 },
    { id: 'app-ac', name: 'Inverter Climate Control / AC', watts: 1800 },
    { id: 'app-geyser', name: 'Water Heating / Heat Pump', watts: 2500 },
    { id: 'app-kitchen', name: 'Kitchen Essentials', watts: 1500 }
  ];

  const calculate = () => {
    const monthlyBill = parseFloat(billSlider?.value || 3500);
    const stage = parseInt(stageSelect?.value || 4);
    const isThreePhase = phaseSelect?.value === 'three-phase';

    if (billDisplay) {
      billDisplay.textContent = `R ${monthlyBill.toLocaleString('en-ZA')}`;
    }

    const tariffPerKWh = 3.45;
    const monthlyKWh = monthlyBill / tariffPerKWh;
    const dailyKWh = monthlyKWh / 30;
    const peakSunHours = 5.8; // North West high solar yield

    let recommendedKWp = (dailyKWh * 0.9) / peakSunHours;
    recommendedKWp = Math.max(3.2, Math.round(recommendedKWp * 10) / 10);

    const panelWattage = 550;
    const panelCount = Math.ceil((recommendedKWp * 1000) / panelWattage);

    let inverterKW = 5.0;
    if (isThreePhase || recommendedKWp > 10 || monthlyBill > 6000) {
      inverterKW = 12.0;
    } else if (recommendedKWp > 6 || monthlyBill > 3800) {
      inverterKW = 8.0;
    } else if (recommendedKWp > 4) {
      inverterKW = 6.0;
    }

    const loadSheddingHoursPerStage = { 0: 0, 1: 2, 2: 4, 3: 6, 4: 7.5, 5: 9, 6: 11 };
    const backupHours = loadSheddingHoursPerStage[stage] || 6;

    let essentialWatts = 0;
    appliances.forEach(app => {
      const checkbox = document.getElementById(app.id);
      if (checkbox && checkbox.checked) {
        essentialWatts += app.watts;
      }
    });

    if (essentialWatts === 0) essentialWatts = 800;

    const batteryNeededKWh = ((essentialWatts * backupHours) / 1000) / 0.85;
    const batteryModules = Math.max(1, Math.ceil(batteryNeededKWh / 5.12));
    const totalBatteryKWh = batteryModules * 5.12;

    const estimatedMonthlySavings = Math.round(monthlyBill * 0.84);
    const estimatedYearlySavings = estimatedMonthlySavings * 12;
    const approximateSystemCost = Math.round((recommendedKWp * 8800) + (inverterKW * 4500) + (totalBatteryKWh * 5500) + 15000);
    const paybackYears = (approximateSystemCost / estimatedYearlySavings).toFixed(1);
    const co2SavedTonnes = (dailyKWh * 365 * 0.95 / 1000).toFixed(1);

    updateElementText('calc-kwp', `${recommendedKWp} kWp`);
    updateElementText('calc-panels', `${panelCount} Modules (550W Tier-1)`);
    updateElementText('calc-inverter', `${inverterKW} kW Sunsynk / Deye Pure Sine`);
    updateElementText('calc-battery', `${totalBatteryKWh.toFixed(1)} kWh LiFePO4 (${batteryModules}x 5.12kWh Rack)`);
    updateElementText('calc-backup-time', `${backupHours} hrs continuous autonomy`);
    updateElementText('calc-monthly-savings', `R ${estimatedMonthlySavings.toLocaleString('en-ZA')} / mo`);
    updateElementText('calc-yearly-savings', `R ${estimatedYearlySavings.toLocaleString('en-ZA')}`);
    updateElementText('calc-payback', `${paybackYears} Years`);
    updateElementText('calc-co2', `${co2SavedTonnes} Tonnes/yr`);

    if (roofVisualizer) {
      renderRoofVisualizer(panelCount, roofVisualizer);
    }

    const waButton = document.getElementById('calc-wa-quote-btn');
    if (waButton) {
      const message = encodeURIComponent(
        `Hello Storm Tech Group.® I generated a solar blueprint on your 3D Sizing tool for a monthly spend of R${monthlyBill}.\n` +
        `Recommended System: ${recommendedKWp} kWp PV (${panelCount} panels), ${inverterKW}kW Inverter, ${totalBatteryKWh.toFixed(1)}kWh Battery.\n` +
        `Please provide a formal engineering quote.`
      );
      waButton.href = `https://wa.me/27637277824?text=${message}`;
    }
  };

  const updateElementText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const renderRoofVisualizer = (count, container) => {
    let gridHtml = '<div class="grid grid-cols-4 sm:grid-cols-6 gap-2.5 p-3.5 bg-[#0a0e17] rounded-xl border border-white/[0.08]">';
    for (let i = 0; i < count; i++) {
      gridHtml += `
        <div class="relative aspect-[3/4] bg-gradient-to-b from-[#141d2e] via-[#0d131f] to-[#080b11] border border-white/[0.12] rounded flex flex-col justify-between p-1.5 shadow-md">
          <div class="w-full h-full flex flex-col justify-between opacity-60">
            <div class="h-[1px] bg-slate-400/40 w-full"></div>
            <div class="h-[1px] bg-slate-400/40 w-full"></div>
            <div class="h-[1px] bg-slate-400/40 w-full"></div>
          </div>
          <span class="text-[9px] font-mono text-[#dfc9a8] text-center font-medium">#${i + 1}</span>
        </div>
      `;
    }
    gridHtml += '</div>';
    container.innerHTML = gridHtml;
  };

  if (billSlider) billSlider.addEventListener('input', calculate);
  if (stageSelect) stageSelect.addEventListener('change', calculate);
  if (phaseSelect) phaseSelect.addEventListener('change', calculate);

  appliances.forEach(app => {
    const checkbox = document.getElementById(app.id);
    if (checkbox) checkbox.addEventListener('change', calculate);
  });

  calculate();
};
