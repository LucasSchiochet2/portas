'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay bloqueado, tocará após clique do usuário
          console.log('Autoplay bloqueado. Esperando interação do usuário.');
        });
    };

    tryPlay();

    // Também tenta tocar após clique, se bloqueado no carregamento
    const handleUserInteraction = () => {
      tryPlay();
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2">
      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <button
        onClick={toggleMusic}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <span className="text-sm text-gray-600">
        {isPlaying ? 'Tocando' : 'Pausado'}
      </span>
    </div>
  );
}
