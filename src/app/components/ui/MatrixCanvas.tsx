import React, { useRef, useEffect } from 'react';

interface MatrixCanvasProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const MatrixCanvas: React.FC<MatrixCanvasProps> = ({ sectionRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = section.offsetWidth;
    let h = section.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    const fontSize = 18;
    let columns = Math.floor(w / fontSize);
    let drops: number[] = Array.from({length: columns}, () => Math.floor(Math.random() * (h / fontSize)));
    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = fontSize + 'px monospace';
      ctx.fillStyle = 'rgba(0,255,65,0.35)';
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    let animationId: number;
    function animate() {
      draw();
      animationId = window.setTimeout(() => requestAnimationFrame(animate), 60);
    }
    animate();

    // ResizeObserver pour adapter le canvas à la section
    const resizeObserver = new window.ResizeObserver(() => {
      w = section.offsetWidth;
      h = section.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      columns = Math.floor(w / fontSize);
      drops = Array.from({length: columns}, () => Math.floor(Math.random() * (h / fontSize)));
    });
    resizeObserver.observe(section);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
      style={{ background: 'black', filter: 'blur(1px)' }}
    />
  );
};

export default MatrixCanvas; 