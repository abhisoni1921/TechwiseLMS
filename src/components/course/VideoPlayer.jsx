import React, { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipBack,
  SkipForward,
} from "lucide-react";

export const VideoPlayer = ({ src, title, isYouTube = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // If YouTube video
  if (isYouTube) {
    return (
      <div className="w-full bg-black rounded-lg overflow-hidden aspect-video">
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Custom video player UI
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden relative group">
      <video
        src={src}
        className="w-full aspect-video"
        onClick={() => setIsPlaying(!isPlaying)}
      />

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer">
          <div
            className="h-full bg-blue-600 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-blue-400 transition-colors">
              <SkipBack size={20} />
            </button>
            <button
              className="text-white hover:text-blue-400 transition-colors p-1 bg-white/10 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="text-white hover:text-blue-400 transition-colors">
              <SkipForward size={20} />
            </button>
            <button
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="text-white text-sm">0:30 / 10:00</div>
          </div>

          <div>
            <button className="text-white hover:text-blue-400 transition-colors">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
