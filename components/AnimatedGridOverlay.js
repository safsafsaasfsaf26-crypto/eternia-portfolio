import React, { useEffect, useRef } from 'react';

export default function AnimatedGridOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let offset = 0;
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.strokeStyle = '#00d0ff';
      ctx.lineWidth = 1;
      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x + offset % 48, 0);
        ctx.lineTo(x + offset % 48, canvas.height);
        ctx.stroke();
      }
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset % 48);
        ctx.lineTo(canvas.width, y + offset % 48);
        ctx.stroke();
      }
      ctx.restore();
      offset += 0.18; // slow movement
      animationFrameId = requestAnimationFrame(drawGrid);
    }
    drawGrid();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
}
