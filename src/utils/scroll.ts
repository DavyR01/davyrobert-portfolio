export function smoothScrollTo(targetY: number, duration: number = 1200) {
    // Si durée = 0, scroll instantané
    if (duration === 0) {
      window.scrollTo(0, targetY);
      return;
    }
    
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | undefined;
    function step(timestamp: number) {
      if (start === undefined) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      window.scrollTo(0, startY + diff * percent);
      if (percent < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  export function scrollToSection(sectionId: string, duration: number = 0) {
    const element = document.getElementById(sectionId);
    if (element) {
      // const headerHeight = window.innerWidth < 640 ? 10 : 0;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset/*  - headerHeight */;
      smoothScrollTo(targetY, duration);
    }
  }

  // Script to prevent scroll restoration flash on page reload
  export const SCROLL_RESTORATION_SCRIPT = `
    (() => {
      try {
        // Enable browser's native scroll restoration
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'auto';
        }
        
        // Mark as ready after a minimal delay to let scroll restoration happen
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.documentElement.classList.add('scroll-ready');
          });
        });
      } catch (e) {
        // Fallback: mark as ready immediately
        document.documentElement.classList.add('scroll-ready');
      }
    })();
  `;