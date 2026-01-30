// Responsive TOC - Desktop sidebar + Mobile collapsible menu
// Place this in assets/js/ or include in your main JS file

document.addEventListener('DOMContentLoaded', function() {
  const tocNav = document.querySelector('.toc-sidebar-nav');
  const tocToggle = document.querySelector('.toc-toggle');
  const tocLinks = document.querySelectorAll('.toc-link');
  
  if (!tocNav) return;
  
  // ============================================================================
  // MOBILE: Toggle functionality
  // ============================================================================
  
  if (tocToggle) {
    tocToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle active class
      this.classList.toggle('active');
      tocNav.classList.toggle('active');
    });
  }
  
  // Close mobile menu when a link is clicked
  if (window.innerWidth < 1400) { // Match your breakpoint
    tocLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (tocToggle) {
          tocToggle.classList.remove('active');
          tocToggle.setAttribute('aria-expanded', 'false');
          tocNav.classList.remove('active');
        }
      });
    });
  }
  
  // ============================================================================
  // DESKTOP: Active link highlighting
  // ============================================================================
  
  if (tocLinks.length === 0) return;
  
  // Get all headers that have IDs
  const headers = Array.from(document.querySelectorAll('h2[id], h3[id], h4[id]'))
    .filter(header => !header.classList.contains('no_toc'));
  
  // Function to update active link
  function updateActiveLink() {
    // Only run on desktop
    if (window.innerWidth < 1400) return;
    
    let activeHeader = null;
    const scrollPosition = window.scrollY + 100; // Offset for fixed headers
    
    // Find which header is currently in view
    for (let i = headers.length - 1; i >= 0; i--) {
      const header = headers[i];
      if (header.offsetTop <= scrollPosition) {
        activeHeader = header;
        break;
      }
    }
    
    // Update active class on TOC links
    tocLinks.forEach(link => {
      link.classList.remove('active');
      
      if (activeHeader && link.getAttribute('href') === '#' + activeHeader.id) {
        link.classList.add('active');
      }
    });
  }
  
  // Update on scroll with throttling
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Update on page load
  updateActiveLink();
  
  // Update on window resize (in case switching between mobile/desktop)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateActiveLink();
    }, 250);
  });
  
  // ============================================================================
  // BOTH: Smooth scroll with offset when clicking TOC links
  // ============================================================================
  
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 100; // Adjust based on your fixed header height
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, '#' + targetId);
      }
    });
  });
});
