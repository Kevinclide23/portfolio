/**
 * Kevin Clide Bautista - Portfolio Interactions & Scripts
 * Pure vanilla JavaScript - Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve stored theme or default to 'light' (matching Jon Rodz signature light design)
  const currentTheme = localStorage.getItem('kb_theme') || 'light';
  htmlRoot.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('kb_theme', newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Hamburger Menu
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Navbar Scroll Shadow Effect
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // --------------------------------------------------------------------------
  // 4. ScrollSpy: Highlight active section in navigation
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const observeSection = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetNavLink?.classList.add('active');
      } else {
        targetNavLink?.classList.remove('active');
      }
    });
  };
  window.addEventListener('scroll', observeSection);

  // --------------------------------------------------------------------------
  // 5. Project Filtering
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. Project Details Data & Modal
  // --------------------------------------------------------------------------
  const projectDetails = {
    smartcane: {
      title: 'SmartCane: Assistive Navigation Device',
      badge: 'Capstone Project',
      badgeClass: 'capstone',
      image: 'images/project-smartcane.png',
      description:
        'A comprehensive assistive IoT and web platform designed to empower visually impaired individuals with safer, independent mobility. The system connects ultrasonic proximity telemetry with an accessible web dashboard, featuring emergency SOS alerts, GPS location logging, and audio/haptic feedback integration.',
      contribution:
        'Led end-to-end UI/UX prototyping in Figma, focusing on high-contrast accessibility standards. Built the responsive front-end dashboard using JavaScript and Tailwindcss, and applied Antigravity workflow rules for telemetry threshold monitoring and incident triggers.',
      tags: ['Figma', 'JavaScript', 'Antigravity', 'Tailwindcss', 'IoT Telemetry', 'Accessibility'],
      github: 'https://github.com/Kevinclide23',
      demo: '#projects'
    },
    safedrive: {
      title: 'SafeDrive: Records Management',
      badge: 'Activity Project',
      badgeClass: 'activity',
      image: 'images/project-safedrive.svg',
      description:
        'A centralized vehicle safety and traffic violation records portal. Designed to replace slow manual paper logging with a responsive client-side interface featuring plate search, driver license verification status, violation audits, and quick filtering.',
      contribution:
        'Created the UI wireframes in Figma, developed the clean data tables and dynamic search/filter logic using vanilla JavaScript, and implemented modern styling using Tailwindcss utility classes.',
      tags: ['JavaScript', 'Figma', 'Tailwindcss', 'Data Management', 'UI Design'],
      github: 'https://github.com/Kevinclide23',
      demo: '#projects'
    },
    cuepoint: {
      title: 'CuePoint: AI Presentation Companion',
      badge: 'Activity Project',
      badgeClass: 'activity',
      image: 'images/project-cuepoint.png',
      description:
        'An intelligent live presentation prompter and speech coach that analyzes speaker rhythm, cadence, and slide progression. Powered by OpenAI GPT-4o, CuePoint suggests contextual talking points and slide transition cues in real time to keep speakers confident and on schedule.',
      contribution:
        'Engineered the Node.js backend integration with OpenAI GPT-4o API, designed context-aware system prompts, and built the live browser prompter HUD with responsive audio waveform indicators.',
      tags: ['Node.js', 'OpenAI GPT-4o', 'JavaScript', 'REST APIs', 'Prompt Engineering'],
      github: 'https://github.com/Kevinclide23',
      demo: '#projects'
    },
    fashionpulse: {
      title: 'FashionPulse: Trend & Apparel Showcase',
      badge: 'Activity Project',
      badgeClass: 'activity',
      image: 'images/project-fashionpulse.png',
      description:
        'A dynamic web application and curated fashion lookbook platform designed to explore apparel trends, manage clothing inventory, and filter curated styles in real time. Powered by Python and Django on the backend with responsive client-side interactions in JavaScript.',
      contribution:
        'Developed Django backend models and view controllers for apparel data management, engineered interactive search and style categorization logic using JavaScript, and designed an intuitive, responsive catalog showcase interface.',
      tags: ['Python', 'Django', 'JavaScript', 'Web Development', 'UI/UX Design'],
      github: 'https://github.com/Kevinclide23',
      demo: '#projects'
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalContrib = document.getElementById('modal-contrib');
  const modalTags = document.getElementById('modal-tags');
  const modalGithubLink = document.getElementById('modal-github');

  const openModal = (projectId) => {
    const project = projectDetails[projectId];
    if (!project) return;

    if (modalImage) {
      // Prioritize the user's provided card image from the DOM if available, else use project.image
      const cardBtn = document.querySelector(`.btn-project-modal[data-project="${projectId}"]`);
      const card = cardBtn ? cardBtn.closest('.project-card') : null;
      const cardImg = card ? card.querySelector('.project-image-wrapper img') : null;
      const cardSrc = cardImg ? cardImg.getAttribute('src') : '';

      const targetSrc = cardSrc || project.image;
      modalImage.src = targetSrc;
      modalImage.alt = project.title;
      modalImage.style.display = 'block';

      modalImage.onerror = () => {
        // Fallback to project.image if cardSrc had an issue
        if (project.image && modalImage.src !== project.image) {
          modalImage.src = project.image;
        }
      };
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalBadge) {
      modalBadge.textContent = project.badge;
      modalBadge.className = `modal-badge project-badge-top ${project.badgeClass}`;
    }
    if (modalDesc) modalDesc.textContent = project.description;
    if (modalContrib) modalContrib.textContent = project.contribution;

    if (modalTags) {
      modalTags.innerHTML = project.tags
        .map((tag) => `<span class="p-tag">${tag}</span>`)
        .join('');
    }

    if (modalGithubLink) {
      modalGithubLink.href = project.github;
    }

    modalOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Attach click listeners to all "View Details" buttons
  document.querySelectorAll('.btn-project-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      if (projectId) openModal(projectId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);

  // Close modal when clicking on backdrop
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 7. Email Copy Button
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'kbautista063@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalTitle = copyEmailBtn.getAttribute('title') || 'Copy';
        copyEmailBtn.setAttribute('title', 'Copied!');
        copyEmailBtn.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          copyEmailBtn.setAttribute('title', originalTitle);
          copyEmailBtn.style.color = '';
        }, 2000);
      } catch (err) {
        // Fallback prompt
        window.prompt('Copy email address:', email);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Contact Form Mailto Handler
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Compose mailto link
      const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - ${name}`);
      const encodedBody = encodeURIComponent(
        `Hi Kevin,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your Portfolio Website`
      );

      const mailtoUrl = `mailto:kbautista063@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      // Open user's email client
      window.location.href = mailtoUrl;

      // Show friendly confirmation
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `<strong>Thank you, ${name}!</strong> Opening your default email client to send your message. If it didn't open automatically, you can email directly at <a href="mailto:kbautista063@gmail.com" style="text-decoration: underline;">kbautista063@gmail.com</a>.`;
        formFeedback.style.display = 'block';
      }

      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
