/**
 * Main Application Script (Executive Edition) - Storm Tech Group.®
 * Live Mahikeng 24/7 Status (SAST: UTC+2), Executive Toast Alerts & WhatsApp Quote Routing
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live South African Standard Time (UTC+2) Business Status (Open 24 Hours)
  const updateBusinessStatus = () => {
    // Storm Tech Group.® is open 24 Hours (including 24/7 emergency dispatch)
    const statusText = 'Open 24 Hours · Active Dispatch';

    const headerBadge = document.getElementById('header-status-badge');
    const heroStatus = document.getElementById('hero-business-status');
    const contactStatus = document.getElementById('contact-status-pill');

    const innerHtml = `
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-emerald-300 font-semibold">${statusText}</span>
    `;

    if (headerBadge) {
      headerBadge.innerHTML = innerHtml;
    }
    if (heroStatus) {
      heroStatus.innerHTML = innerHtml;
    }
    if (contactStatus) {
      contactStatus.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-emerald-300 font-semibold">Open 24 Hours · 24/7 Emergency Dispatch Available</span>
      `;
    }
  };

  updateBusinessStatus();
  setInterval(updateBusinessStatus, 60000);

  // 2. Executive Toast Notification Helper
  window.showToast = function(title, message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto p-4 rounded-2xl bg-[#0e131f] border border-[#c5a880]/40 text-slate-200 shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 flex items-start gap-3.5';
    
    toast.innerHTML = `
      <div class="p-2 rounded-xl bg-white/[0.04] text-[#dfc9a8] border border-white/[0.08]">
        <i data-lucide="check-circle" class="w-4 h-4 text-[#c5a880]"></i>
      </div>
      <div>
        <h4 class="font-bold text-white text-xs">${title}</h4>
        <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${message}</p>
      </div>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 50);

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };

  // 3. Contact & Quote Form Handling
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quote-name')?.value || 'Client';
      const phone = document.getElementById('quote-phone')?.value || '';
      const service = document.getElementById('quote-service')?.value || 'Solar Power Systems (Power Backup)';
      const address = document.getElementById('quote-address')?.value || 'Mahikeng';
      const notes = document.getElementById('quote-notes')?.value || '';

      const text = encodeURIComponent(
        `Storm Tech Group.® Consultation Request:\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n` +
        `Area: ${address}\n` +
        `Details: ${notes}`
      );

      window.showToast(
        'Request Received',
        `Thank you ${name}. Connecting you with Storm Tech Group on WhatsApp...`
      );

      setTimeout(() => {
        window.open(`https://wa.me/27637277824?text=${text}`, '_blank');
      }, 1000);

      quoteForm.reset();
    });
  }

  const emergencyBtn = document.getElementById('emergency-call-btn');
  if (emergencyBtn) {
    emergencyBtn.addEventListener('click', () => {
      window.showToast('Emergency Dispatch', 'Connecting to Storm Tech Group 24/7 standby emergency hotline (+27 63 727 7824)...');
    });
  }
});
