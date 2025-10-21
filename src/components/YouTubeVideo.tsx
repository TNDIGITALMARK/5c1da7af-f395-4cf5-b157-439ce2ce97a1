'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeVideo({
  videoId,
  title = "Video",
  className = ""
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID from URL if full URL is provided
  const extractVideoId = (id: string): string => {
    if (id.includes('youtube.com') || id.includes('youtu.be')) {
      const urlParams = new URLSearchParams(new URL(id).search);
      return urlParams.get('v') || id.split('/').pop()?.split('?')[0] || id;
    }
    return id;
  };

  const cleanVideoId = extractVideoId(videoId);
  const thumbnailUrl = `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden card-border group ${className}`}>
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={handlePlay}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-24 h-24 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-all neon-glow group-hover:bg-primary"
                aria-label="Play video"
              >
                <Play className="w-12 h-12 text-white fill-white ml-2" />
              </button>
            </div>

            {/* Title overlay */}
            {title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="font-black text-xl md:text-2xl uppercase tracking-wide">
                  {title}
                </h3>
              </div>
            )}
          </div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
