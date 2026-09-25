import { animate, inView } from 'motion';
import { PATIENT_REVIEWS } from './data/dentalData';

// State
let currentReviewPage = 0;
let toastTimeout: number | undefined;

// DOM Elements
const navbar = document.getElementById('navbar') as HTMLElement;
const navBrand = document.getElementById('nav-brand') as HTMLElement;
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const heroExploreBtn = document.getElementById('hero-explore-btn') as HTMLButtonElement;
const btnSeeAllPackages = document.getElementById('btn-see-all-packages') as HTMLButtonElement;
const btnOpenAllPackagesMobile = document.getElementById('btn-open-all-packages-mobile') as HTMLButtonElement;
const journeyBannerCard = document.getElementById('journey-banner-card') as HTMLElement;

// Beliefs Accordion
const beliefItems = document.querySelectorAll('.belief-item');

// Reviews Carousel
const testimonialsGrid = document.getElementById('testimonials-grid') as HTMLElement;
const testimonialDots = document.querySelectorAll('.test-dot');

// Form & Toast
const subscribeForm = document.getElementById('subscribe-form') as HTMLFormElement;
const formTreatmentSelect = document.getElementById('form-treatment') as HTMLSelectElement;
const formNameInput = document.getElementById('form-name') as HTMLInputElement;
const formPhoneInput = document.getElementById('form-phone') as HTMLInputElement;
const formDateInput = document.getElementById('form-date') as HTMLInputElement;
const toast = document.getElementById('toast') as HTMLElement;
const toastMsg = document.getElementById('toast-msg') as HTMLElement;
const toastDismiss = document.getElementById('toast-dismiss') as HTMLButtonElement;

// --- GLOBAL SCROLL TO BOOKING HELPER ---
function scrollToBooking(treatmentName?: string) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Pre-select treatment in form if provided
  if (treatmentName && formTreatmentSelect) {
    const cleanTarget = treatmentName.toLowerCase();
    for (let i = 0; i < formTreatmentSelect.options.length; i++) {
      const optVal = formTreatmentSelect.options[i].value.toLowerCase();
      if (optVal.includes(cleanTarget) || cleanTarget.includes(optVal.split(' ')[0])) {
        formTreatmentSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Focus name field after smooth scroll
  setTimeout(() => {
    formNameInput?.focus();
  }, 600);
}

// --- 1. NAVBAR SCROLL & MOBILE MENU ---
function setupNavbar() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.remove('pt-8', 'sm:pt-10', 'pb-5', 'text-white', 'bg-transparent');
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-xs', 'py-4', 'text-neutral-900', 'border-b', 'border-neutral-100');
      navBrand.classList.remove('text-white');
      navBrand.classList.add('text-neutral-900');
      navLinks.forEach((link) => {
        link.classList.remove('text-white/85', 'hover:text-white');
        link.classList.add('text-neutral-600', 'hover:text-neutral-900');
      });
      mobileMenuBtn.classList.remove('text-white');
      mobileMenuBtn.classList.add('text-neutral-900');
    } else {
      navbar.classList.add('pt-8', 'sm:pt-10', 'pb-5', 'text-white', 'bg-transparent');
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-xs', 'py-4', 'text-neutral-900', 'border-b', 'border-neutral-100');
      navBrand.classList.add('text-white');
      navBrand.classList.remove('text-neutral-900');
      navLinks.forEach((link) => {
        link.classList.add('text-white/85', 'hover:text-white');
        link.classList.remove('text-neutral-600', 'hover:text-neutral-900');
      });
      mobileMenuBtn.classList.add('text-white');
      mobileMenuBtn.classList.remove('text-neutral-900');
    }
  }, { passive: true });

  mobileMenuBtn?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Hero CTA button leads directly to booking
  heroExploreBtn?.addEventListener('click', () => {
    scrollToBooking();
  });
}

// --- 2. INTERACTIVE BELIEFS ACCORDION ---
function setupBeliefsAccordion() {
  beliefItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Deactivate all
      beliefItems.forEach((other) => {
        other.classList.remove('active', 'bg-black', 'text-white', 'border-black', 'shadow-lg');
        other.classList.add('bg-white', 'text-neutral-900', 'border-neutral-200/80', 'shadow-xs');

        const badge = other.querySelector('.icon-badge') as HTMLElement;
        const icon = other.querySelector('.icon-badge svg') as HTMLElement;
        const chevron = other.querySelector('.chevron-icon') as HTMLElement;
        const desc = other.querySelector('.belief-desc') as HTMLElement;

        badge?.classList.remove('bg-neutral-800', 'border-neutral-700');
        badge?.classList.add('bg-neutral-100', 'border-neutral-200');

        icon?.classList.remove('text-white');
        icon?.classList.add('text-neutral-800');

        chevron?.classList.remove('rotate-90', 'text-white');
        chevron?.classList.add('text-neutral-400');

        desc?.classList.add('hidden');
      });

      // Activate clicked item
      item.classList.add('active', 'bg-black', 'text-white', 'border-black', 'shadow-lg');
      item.classList.remove('bg-white', 'text-neutral-900', 'border-neutral-200/80', 'shadow-xs');

      const badge = item.querySelector('.icon-badge') as HTMLElement;
      const icon = item.querySelector('.icon-badge svg') as HTMLElement;
      const chevron = item.querySelector('.chevron-icon') as HTMLElement;
      const desc = item.querySelector('.belief-desc') as HTMLElement;

      badge?.classList.add('bg-neutral-800', 'border-neutral-700');
      badge?.classList.remove('bg-neutral-100', 'border-neutral-200');

      icon?.classList.add('text-white');
      icon?.classList.remove('text-neutral-800');

      chevron?.classList.add('rotate-90', 'text-white');
      chevron?.classList.remove('text-neutral-400');

      desc?.classList.remove('hidden');

      animate(desc, { opacity: [0, 1], y: [-6, 0] }, { duration: 0.3 });
    });
  });
}

// --- 3. PATIENT REVIEWS CAROUSEL SLIDER ---
function renderReviews(page: number) {
  if (!testimonialsGrid) return;
  testimonialsGrid.innerHTML = '';

  const total = PATIENT_REVIEWS.length;
  for (let i = 0; i < 3; i++) {
    const item = PATIENT_REVIEWS[(page + i) % total];
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between';
    card.innerHTML = `
      <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal mb-6">
        ${item.quote}
      </p>
      <div class="flex items-center gap-3.5 pt-2 border-t border-neutral-100">
        <img
          src="${item.avatar}"
          alt="${item.name}"
          class="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-neutral-200"
          loading="lazy"
          referrerpolicy="no-referrer"
        />
        <div>
          <h3 class="text-sm font-semibold text-neutral-900 leading-snug">${item.name}</h3>
          <p class="text-neutral-400 text-xs mt-0.5">${item.location}</p>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(card);
  }

  animate(testimonialsGrid, { opacity: [0.3, 1], x: [18, 0] }, { duration: 0.35 });

  testimonialDots.forEach((dot, idx) => {
    if (idx === page) {
      dot.classList.remove('w-2', 'bg-neutral-300', 'hover:bg-neutral-400');
      dot.classList.add('w-6', 'bg-neutral-900');
    } else {
      dot.classList.remove('w-6', 'bg-neutral-900');
      dot.classList.add('w-2', 'bg-neutral-300', 'hover:bg-neutral-400');
    }
  });
}

function setupReviews() {
  if (testimonialDots.length === 0) return;

  const rotateReviews = () => {
    currentReviewPage = (currentReviewPage + 1) % testimonialDots.length;
    renderReviews(currentReviewPage);
  };

  let rotationTimer = window.setInterval(rotateReviews, 6000);

  testimonialDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const pageAttr = dot.getAttribute('data-dot');
      if (pageAttr !== null) {
        window.clearInterval(rotationTimer);
        currentReviewPage = parseInt(pageAttr, 10);
        renderReviews(currentReviewPage);
        rotationTimer = window.setInterval(rotateReviews, 6000);
      }
    });
  });

  renderReviews(0);
}

// --- 4. DIRECT BOOKING BUTTONS (NO POPUPS) ---
function setupBookingTriggers() {
  // Treatment package cards scroll to booking & pre-select treatment
  document.querySelectorAll('.package-card').forEach((card) => {
    card.addEventListener('click', () => {
      const treatmentName = card.getAttribute('data-package-name') || undefined;
      scrollToBooking(treatmentName);
    });
  });

  // "See All Packages" / "Book a Treatment" button
  btnSeeAllPackages?.addEventListener('click', () => {
    scrollToBooking();
  });

  // Mobile menu book button
  btnOpenAllPackagesMobile?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    scrollToBooking();
  });

  // Journey banner card
  journeyBannerCard?.addEventListener('click', () => {
    scrollToBooking();
  });

  // Footer treatment links
  document.querySelectorAll('.footer-pkg-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-package-title') || undefined;
      scrollToBooking(title);
    });
  });
}

// --- 5. TOAST NOTIFICATION & APPOINTMENT FORM SUBMISSION ---
function showToast(message: string) {
  if (toastTimeout) window.clearTimeout(toastTimeout);
  toastMsg.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('flex');
  animate(toast, { opacity: [0, 1], y: [20, 0] }, { duration: 0.25 });

  toastTimeout = window.setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 5000);
}

function setupContactForm() {
  toastDismiss?.addEventListener('click', () => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  });

  subscribeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = formNameInput?.value.trim() || 'Patient';
    const phone = formPhoneInput?.value.trim() || '(305) 846-9082';
    const treatment = formTreatmentSelect?.value || 'Dental Consultation';
    const date = formDateInput?.value || 'your preferred date';

    showToast(`Thank you, ${name}! Your appointment request for "${treatment}" on ${date} has been received. Dr. Diley Perez's office will call you at ${phone} to confirm.`);
    subscribeForm.reset();
  });
}

// --- 6. MOTION ENTRANCE ANIMATIONS ---
function setupAnimations() {
  animate('.motion-hero-pill', { opacity: [0, 1], y: [-14, 0] }, { duration: 0.7 });
  animate('.motion-hero-title', { opacity: [0, 1], y: [24, 0] }, { duration: 0.9, delay: 0.15 });
  animate('.motion-hero-footer', { opacity: [0, 1], y: [20, 0] }, { duration: 0.9, delay: 0.3 });

  inView('#services', (element) => {
    animate(element.querySelectorAll('.package-card'), { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: 0.1 });
  });

  inView('#about', (element) => {
    animate(element, { opacity: [0, 1], y: [24, 0] }, { duration: 0.6 });
  });

  inView('#gallery', (element) => {
    animate(element, { opacity: [0, 1], scale: [0.98, 1] }, { duration: 0.7 });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupBeliefsAccordion();
  setupReviews();
  setupBookingTriggers();
  setupContactForm();
  setupAnimations();
});
