export function smoothScrollTo(targetY: number, duration: number = 1200) {
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