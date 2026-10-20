// Executive Luxury Navigation Component - Storm Tech Group.®
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navContainer = document.getElementById('navbar-mount');
  if (!navContainer) return;

  const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Projects', href: 'projects.html' },
    { name: '3D Solar Sizing', href: 'calculator.html' },
    { name: 'About', href: 'about.html' },
    { name: 'Contact', href: 'contact.html' }
  ];

  const linksHtml = navLinks.map(link => {
    const isActive = currentPath === link.href || (currentPath === '' && link.href === 'index.html');
    return `
      <a href="${link.href}" class="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
        isActive 
          ? 'text-[#dfc9a8] bg-white/[0.04] border border-[#c5a880]/30 font-semibold' 
          : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
      }">
        ${link.name}
        ${isActive ? '<span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#c5a880] rounded-full"></span>' : ''}
      </a>
    `;
  }).join('');

  const mobileLinksHtml = navLinks.map(link => {
    const isActive = currentPath === link.href || (currentPath === '' && link.href === 'index.html');
    return `
      <a href="${link.href}" class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
        isActive 
          ? 'text-[#dfc9a8] bg-white/[0.06] border border-[#c5a880]/30 font-semibold' 
          : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
      }">
        <span>${link.name}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
      </a>
    `;
  }).join('');

  navContainer.innerHTML = `
    <!-- Top Executive Header Bar -->
    <div class="bg-[#06080d] border-b border-white/[0.06] text-xs py-2.5 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 text-slate-400">
        <div class="flex items-center gap-5 flex-wrap">
          <span class="flex items-center gap-2 text-[#dfc9a8] font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
            Solar Energy Systems · Electrical Installations · Boreholes · Construction
          </span>
          <span class="hidden md:inline-block text-slate-700">•</span>
          <span class="hidden md:flex items-center gap-1.5 text-slate-400">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#c5a880]"></i>
            10517 Signal Hill, Mahikeng, 2745
          </span>
          <span class="hidden lg:flex items-center gap-1.5 text-slate-300 font-mono text-[11px] bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08]">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#c5a880]"></i>
            SANS 10142-1 & SAPVIA Accredited
          </span>
        </div>
        <div class="flex items-center gap-4 ml-auto">
          <span id="header-status-badge" class="flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open 24 Hours · Active Dispatch
          </span>
          <a href="tel:+27637277824" class="flex items-center gap-1.5 text-[#dfc9a8] hover:text-white font-semibold transition-colors">
            <i data-lucide="phone" class="w-3.5 h-3.5"></i>
            +27 63 727 7824
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-50 bg-[#080b11]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Storm Tech Group.® Luxury Logo -->
          <a href="index.html" class="flex items-center gap-3.5 group">
            <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#141b2a] to-[#0e131f] border border-[#c5a880]/40 group-hover:border-[#c5a880] transition-colors shadow-lg">
              <i data-lucide="zap" class="w-5 h-5 text-[#dfc9a8]"></i>
            </div>
            <div>
              <div class="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>STORM TECH GROUP</span>
                <span class="text-xs text-[#c5a880] font-bold font-sans">®</span>
              </div>
              <p class="text-[11px] text-slate-400 font-medium -mt-0.5 tracking-wide">Solar · Electrical · Boreholes · Mahikeng</p>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden lg:flex items-center space-x-2">
            ${linksHtml}
          </nav>

          <!-- Action Button -->
          <div class="hidden sm:flex items-center">
            <a href="contact.html#quote" class="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2">
              <span>Request Consultation</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-btn" type="button" class="lg:hidden p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-700/60 focus:outline-none" aria-label="Toggle menu">
            <i data-lucide="menu" id="menu-icon-open" class="w-6 h-6"></i>
            <i data-lucide="x" id="menu-icon-close" class="w-6 h-6 hidden"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden lg:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
        ${mobileLinksHtml}
        <div class="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
          <a href="tel:+27637277824" class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] font-semibold text-xs text-[#dfc9a8]">
            <i data-lucide="phone" class="w-4 h-4"></i>
            <span>Call +27 63 727 7824</span>
          </a>
          <a href="contact.html#quote" class="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-gold font-bold text-sm">
            <span>Request Consultation</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </header>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
      }
    });
  }
});
