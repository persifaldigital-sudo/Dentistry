// ====== Dentastry · Shared scripts ======

// HEADER STUCK
const __header = document.getElementById('siteHeader');
if (__header) {
  window.addEventListener('scroll', () => {
    __header.classList.toggle('is-stuck', window.scrollY > 12);
  });
}

// SMOOTH SCROLL for in-page anchors only
document.querySelectorAll('[data-scroll-to]').forEach(el => {
  el.addEventListener('click', e => {
    const sel = el.getAttribute('data-scroll-to');
    const t = document.querySelector(sel);
    if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' }); }
  });
});

// MOBILE MENU
const __menuBtn = document.querySelector('.menu-toggle');
if (__menuBtn) {
  __menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.site-header .nav');
    if (!nav) return;
    const open = nav.style.display === 'flex' && nav.classList.contains('is-open');
    if (open) {
      nav.style.display = '';
      nav.classList.remove('is-open');
    } else {
      nav.style.display = 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '80px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.flexDirection = 'column';
      nav.style.padding = '16px';
      nav.style.background = 'rgba(242,241,237,0.98)';
      nav.style.borderBottom = '1px solid var(--line)';
      nav.classList.add('is-open');
    }
  });
}

// Booking form (only on pages that have it)
const __form = document.getElementById('bookingForm');
if (__form) {
  const __success = document.getElementById('formSuccess');
  __form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = ['bf-name', 'bf-phone', 'bf-service', 'bf-date', 'bf-time'];
    let valid = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) {
        valid = false;
        el.style.borderColor = '#c44';
        setTimeout(() => el.style.borderColor = '', 1800);
      }
    });
    if (!valid) return;
    if (__success) { __success.classList.add('show'); setTimeout(() => __success.classList.remove('show'), 5000); }
    __form.reset();
  });

  const __dateInput = document.getElementById('bf-date');
  if (__dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    __dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}
