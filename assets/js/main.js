// Mobile navigation toggle
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (!toggle || !menu) {
    console.warn('Navigation elements not found');
    return;
  }
  
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('is-open');
  });
  
  // Close menu when a nav link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    });
  });
}

// Force repaint on page load (fixes mobile rendering issues)
function forceRepaint() {
  // No longer needed - margin fix resolved the issue
}

// Comparison Slider Component
class ComparisonSlider {
  constructor(element) {
    this.container = element;
    this.comparisonContainer = element.querySelector('.comparison-container');
    this.handle = element.querySelector('.comparison-handle');
    this.beforeImage = element.querySelector('.comparison-before');
    this.expandBtn = element.querySelector('.comparison-expand');
    this.isDragging = false;
    this.isFullscreen = false;
    this.init();
  }
  
  init() {
    // Mouse events
    this.handle.addEventListener('mousedown', this.startDrag.bind(this));
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('mouseup', this.endDrag.bind(this));
    
    // Touch events
    this.handle.addEventListener('touchstart', this.startDrag.bind(this), { passive: true });
    document.addEventListener('touchmove', this.drag.bind(this), { passive: false });
    document.addEventListener('touchend', this.endDrag.bind(this));
    
    // Keyboard events
    this.handle.addEventListener('keydown', this.handleKeyboard.bind(this));
    
    // Fullscreen toggle
    if (this.expandBtn) {
      this.expandBtn.addEventListener('click', this.toggleFullscreen.bind(this));
    }
    
    // Close fullscreen on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isFullscreen) {
        this.closeFullscreen();
      }
    });
    
    // Image error handling
    this.initImages();
    
    // Set initial position
    this.setPosition(50);
  }
  
  toggleFullscreen() {
    if (this.isFullscreen) {
      this.closeFullscreen();
    } else {
      this.openFullscreen();
    }
  }
  
  openFullscreen() {
    this.isFullscreen = true;
    this.container.classList.add('is-fullscreen');
    document.body.style.overflow = 'hidden';
    this.expandBtn.innerHTML = '✕';
    this.expandBtn.setAttribute('aria-label', 'Close fullscreen');
  }
  
  closeFullscreen() {
    this.isFullscreen = false;
    this.container.classList.remove('is-fullscreen');
    document.body.style.overflow = '';
    this.expandBtn.innerHTML = '⛶';
    this.expandBtn.setAttribute('aria-label', 'Expand to fullscreen');
  }
  
  initImages() {
    const images = this.container.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', () => {
        this.handleImageError(img);
      });
    });
  }
  
  handleImageError(img) {
    const fallback = document.createElement('div');
    fallback.className = 'comparison-fallback';
    fallback.textContent = 'Image failed to load';
    img.parentElement.replaceChild(fallback, img);
  }
  
  startDrag(e) {
    e.preventDefault();
    this.isDragging = true;
    this.container.classList.add('is-dragging');
  }
  
  drag(e) {
    if (!this.isDragging) return;
    
    e.preventDefault();
    
    const rect = this.comparisonContainer.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    this.setPosition(percent);
  }
  
  endDrag() {
    this.isDragging = false;
    this.container.classList.remove('is-dragging');
  }
  
  handleKeyboard(e) {
    const currentValue = parseFloat(this.handle.getAttribute('aria-valuenow'));
    let newValue = currentValue;
    
    switch (e.key) {
      case 'ArrowLeft':
        newValue = Math.max(0, currentValue - 5);
        e.preventDefault();
        break;
      case 'ArrowRight':
        newValue = Math.min(100, currentValue + 5);
        e.preventDefault();
        break;
      case 'Home':
        newValue = 0;
        e.preventDefault();
        break;
      case 'End':
        newValue = 100;
        e.preventDefault();
        break;
      default:
        return;
    }
    
    this.setPosition(newValue);
  }
  
  setPosition(percent) {
    this.beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    this.handle.style.left = `${percent}%`;
    this.handle.setAttribute('aria-valuenow', percent);
  }
}

// Initialize all comparison sliders
function initComparisonSliders() {
  document.querySelectorAll('.comparison-slider').forEach(slider => {
    new ComparisonSlider(slider);
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initComparisonSliders();
  forceRepaint();
});

// Also force repaint on page show (handles back/forward cache)
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    forceRepaint();
  }
});
