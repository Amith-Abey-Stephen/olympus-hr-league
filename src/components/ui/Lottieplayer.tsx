'use client';

import { useEffect, useRef } from 'react';

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  invert?: boolean;
}

export default function LottiePlayer({
  src,
  autoplay = true,
  loop = true,
  speed = 1,
  width = 800,
  height = 800,
  className = '',
  invert = false,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import the web component only on client side
    import('@dotlottie/player-component').then(() => {
      // Web component is now registered, create the element
      if (containerRef.current && !containerRef.current.querySelector('dotlottie-player')) {
        const player = document.createElement('dotlottie-player');
        player.setAttribute('src', src);
        if (autoplay) player.setAttribute('autoplay', '');
        if (loop) player.setAttribute('loop', '');
        player.setAttribute('speed', String(speed));
        player.style.width = typeof width === 'number' ? `${width}px` : width;
        player.style.height = typeof height === 'number' ? `${height}px` : height;
        if (invert) player.style.filter = 'invert(1)';
        containerRef.current.appendChild(player);
      }
    });

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        const player = containerRef.current.querySelector('dotlottie-player');
        if (player) player.remove();
      }
    };
  }, [src, autoplay, loop, speed, width, height, invert]);

  return <div ref={containerRef} className={className} />;
}
