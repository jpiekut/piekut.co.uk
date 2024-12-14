import React, { useEffect, useRef } from 'react';

export const CyberpunkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 30;
    const gridSpacing = 50;
    let offset = 0;

    // Particles
    const particles: { x: number; y: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        size: 1 + Math.random() * 2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(128, 0, 255, 0.2)';
      ctx.lineWidth = 1;
      offset = (offset + 0.5) % gridSpacing;

      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSpacing) {
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSpacing) {
          const xPos = x + offset;
          const yPos = y + offset;

          ctx.beginPath();
          ctx.moveTo(xPos - gridSize, yPos - gridSize);
          ctx.lineTo(xPos + gridSize, yPos + gridSize);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(xPos + gridSize, yPos - gridSize);
          ctx.lineTo(xPos - gridSize, yPos + gridSize);
          ctx.stroke();
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, 'rgba(64, 224, 208, 0.8)');
        gradient.addColorStop(1, 'rgba(64, 224, 208, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};