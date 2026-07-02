/* ============================================================
   GIRAVERSE · Landing — interacciones
   Vanilla JS, sin dependencias.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Año dinámico ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: sombra al hacer scroll ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var burger = document.getElementById('burger');
  var navMobile = document.getElementById('navMobile');
  if (burger && navMobile) {
    burger.addEventListener('click', function () {
      var open = navMobile.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Cerrar al pulsar un enlace
    navMobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // pequeño escalonado por orden de aparición
          var el = entry.target;
          var siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [el];
          var idx = Array.prototype.indexOf.call(siblings, el);
          el.style.transitionDelay = Math.min(idx, 6) * 60 + 'ms';
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });

    // Red de seguridad: si el observer no dispara (pestaña en segundo plano,
    // render fuera de pantalla, etc.), revelamos todo para no dejar nada oculto.
    setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
    }, 1200);
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Waitlist (validación + feedback) ---------- */
  var form = document.getElementById('waitlistForm');
  var msg = document.getElementById('waitlistMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('#email');
      var role = form.querySelector('input[name="role"]:checked');
      var valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

      if (!valid) {
        if (msg) { msg.textContent = 'Introduce un correo válido para continuar.'; msg.style.color = '#FFE0C5'; }
        if (email) email.focus();
        return;
      }

      // TODO: conectar a backend / Formspree / Brevo.
      // De momento guardamos localmente como demo.
      try {
        var list = JSON.parse(localStorage.getItem('giraverse_waitlist') || '[]');
        list.push({ email: email.value.trim(), role: role ? role.value : 'na', ts: Date.now() });
        localStorage.setItem('giraverse_waitlist', JSON.stringify(list));
      } catch (err) {}

      if (msg) { msg.textContent = '¡Listo! Te avisaremos en cuanto abramos el acceso. 🎶'; msg.style.color = '#fff'; }
      form.reset();
    });
  }
})();
