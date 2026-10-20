// Executive Luxury Footer Component - Storm Tech Group.®
document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('footer-mount');
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
    <!-- Pre-Footer Executive Banner -->
    <div class="relative overflow-hidden border-t border-b border-white/[0.08] bg-gradient-to-b from-[#0c111c] via-[#080b11] to-[#080b11] py-16 px-4">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] text-[#dfc9a8] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider mb-4">
            <i data-lucide="shield-check" class="w-4 h-4 text-[#c5a880]"></i>
            Engineering, Power & Water Security
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
            Permanent Energy Resilience & Water Autonomy for Your Property.
          </h2>
          <p class="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Headquartered at 10517 Signal Hill, Mahikeng. Providing certified solar power backup, electrical installations, borehole connections, and construction contracting across the North West.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="contact.html#quote" class="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2.5 shadow-xl">
            <span>Request Consultation</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
          <a href="calculator.html" class="btn-outline-gold px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2">
            <i data-lucide="calculator" class="w-4 h-4"></i>
            Run 3D Sizing Tool
          </a>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <footer class="bg-[#06080d] text-slate-400 pt-16 pb-12 border-t border-white/[0.04]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          
          <!-- Company Info Column -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#141b2a] to-[#0e131f] border border-[#c5a880]/30 flex items-center justify-center shadow-md">
                <i data-lucide="zap" class="w-5 h-5 text-[#dfc9a8]"></i>
              </div>
              <div>
                <div class="text-base font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span>STORM TECH GROUP</span>
                  <span class="text-xs text-[#c5a880] font-bold">®</span>
                </div>
                <span class="text-xs text-[#c5a880] block -mt-0.5 font-medium">Solar Power Systems · Electrical · Boreholes</span>
              </div>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed pr-4">
              Mahikeng's certified engineering contractor. Specializing in high-performance solar power systems (power backup), complete domestic & commercial electrical installations, solar borehole pumping connections, construction works, and legal SANS 10142-1 Certificates of Compliance.
            </p>

            <div class="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div class="flex items-start gap-2.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5"></i>
                <span>10517 Signal Hill, 2745, Mafikeng Town, South Africa</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-[#c5a880] shrink-0"></i>
                <a href="tel:+27637277824" class="hover:text-white font-medium transition-colors">+27 63 727 7824</a>
              </div>
              <div class="flex items-center gap-2.5">
                <i data-lucide="clock" class="w-4 h-4 text-emerald-400 shrink-0"></i>
                <span class="text-emerald-300 font-medium">Open 24 Hours / 7 Days a Week (24/7 Emergency Dispatch)</span>
              </div>
            </div>
          </div>

          <!-- Services Column 1: Solar & Backup -->
          <div>
            <h3 class="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-heading">Solar Power Systems</h3>
            <ul class="space-y-2.5 text-xs">
              <li><a href="services.html#residential" class="hover:text-[#dfc9a8] transition-colors">Residential Hybrid Solar</a></li>
              <li><a href="services.html#commercial" class="hover:text-[#dfc9a8] transition-colors">Commercial 3-Phase PV</a></li>
              <li><a href="services.html#backup" class="hover:text-[#dfc9a8] transition-colors">Load-Shedding Power Backup</a></li>
              <li><a href="services.html#borehole" class="hover:text-[#dfc9a8] transition-colors">Solar Borehole Pumping</a></li>
              <li><a href="calculator.html" class="text-[#dfc9a8] hover:text-white font-medium transition-colors">3D System Sizing Tool &rarr;</a></li>
            </ul>
          </div>

          <!-- Services Column 2: Electrical & Boreholes -->
          <div>
            <h3 class="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-heading">Electrical & Construction</h3>
            <ul class="space-y-2.5 text-xs">
              <li><a href="services.html#electrical" class="hover:text-[#dfc9a8] transition-colors">Electrical Installations</a></li>
              <li><a href="services.html#borehole" class="hover:text-[#dfc9a8] transition-colors">Borehole Connections</a></li>
              <li><a href="services.html#construction" class="hover:text-[#dfc9a8] transition-colors">Construction Electrical Works</a></li>
              <li><a href="services.html#coc" class="hover:text-[#dfc9a8] transition-colors">Certificates of Compliance (COC)</a></li>
              <li><a href="contact.html#emergency" class="text-slate-300 hover:text-white font-medium transition-colors">24/7 Emergency Dispatch &rarr;</a></li>
            </ul>
          </div>

          <!-- Accreditation Badges -->
          <div>
            <h3 class="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-heading">Accreditations</h3>
            <div class="space-y-2.5">
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-300">
                <i data-lucide="badge-check" class="w-4 h-4 text-[#c5a880]"></i>
                <span>SAPVIA PV GreenCard</span>
              </div>
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-300">
                <i data-lucide="file-check-2" class="w-4 h-4 text-[#c5a880]"></i>
                <span>Dept of Labour Wireman's License</span>
              </div>
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-300">
                <i data-lucide="shield" class="w-4 h-4 text-[#c5a880]"></i>
                <span>SANS 10142-1 Compliant</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; ${currentYear} Storm Tech Group.® 10517 Signal Hill, Mafikeng Town, Mahikeng, South Africa.</p>
          <div class="flex items-center gap-6">
            <a href="about.html" class="hover:text-slate-300 transition-colors">About</a>
            <a href="services.html" class="hover:text-slate-300 transition-colors">Services</a>
            <a href="projects.html" class="hover:text-slate-300 transition-colors">Projects</a>
            <a href="contact.html" class="hover:text-slate-300 transition-colors">Contact</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Storm%20Tech%20Group.%C2%AE&query_place_id=ChIJTy3q-cDLoh4Rcm2Nt30JZjU" target="_blank" rel="noopener noreferrer" class="hover:text-[#dfc9a8] transition-colors flex items-center gap-1">
              <i data-lucide="map" class="w-3.5 h-3.5"></i>
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Prominent Floating WhatsApp Action Button (Bottom Right) -->
    <aside class="fixed bottom-6 right-6 z-50 flex items-center" aria-label="Floating WhatsApp Contact">
      <a 
        href="https://wa.me/27637277824?text=Hello%20Storm%20Tech%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20solar,%20electrical,%20and%20borehole%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        class="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold px-4 py-3.5 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]"
        title="Chat with Storm Tech Group on WhatsApp"
      >
        <!-- Official WhatsApp SVG Icon -->
        <svg class="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.971.53 1.944.823 2.796.823 3.185 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-5.767-5.77zm3.435 8.169c-.147.414-.738.764-1.025.793-.284.029-.636.035-1.025-.088-.344-.108-.773-.264-1.349-.513-2.42-1.049-3.999-3.522-4.119-3.684-.12-.162-.979-1.303-.979-2.485 0-1.182.62-1.764.84-2.004.22-.24.48-.3.64-.3.16 0 .32.002.46.008.148.006.347-.056.54.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.253.313-.36.42-.12.12-.245.25-.105.49.14.24.622 1.025 1.334 1.66 1.014.904 1.868 1.185 2.108 1.305.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.087.994z"/>
        </svg>
        <span class="text-xs sm:text-sm text-white font-bold tracking-wide pr-1">Chat on WhatsApp</span>
      </a>
    </aside>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
