import { useEffect, useRef } from 'react';

const SpotlightCursor = () => {
  const animationRef = useRef<number>();
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      targetPos.current = { x, y };
    };

    const animate = () => {
      // Smooth interpolation with lag effect
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      // Adjust this value for speed: lower = slower/more lag, higher = faster
      const lerpFactor = 0.15;

      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, lerpFactor);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, lerpFactor);

      // Set CSS variables with the smoothed position
      document.documentElement.style.setProperty('--x', `${currentPos.current.x}%`);
      document.documentElement.style.setProperty('--y', `${currentPos.current.y}%`);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Return null since we don't need to render anything
  return null;
};

export default SpotlightCursor;