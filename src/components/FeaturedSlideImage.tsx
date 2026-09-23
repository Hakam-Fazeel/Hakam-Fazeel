import React, { useState } from 'react';
import { FeaturedProject } from '../featured-projects/types';
import { ProjectDiagram } from './ProjectDiagram';
import { resolveThumbnailUrl } from '../utils/resolveImage';
import { Image as ImageIcon } from 'lucide-react';

interface FeaturedSlideImageProps {
  project: FeaturedProject;
  className?: string;
}

export const FeaturedSlideImage: React.FC<FeaturedSlideImageProps> = ({
  project,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const resolvedUrl = resolveThumbnailUrl(project.image, 'featured');

  // Fallback to technical diagram if image isn't found or has an error
  if (!resolvedUrl || imageError) {
    return (
      <div className={`relative w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-full ${className}`}>
        <ProjectDiagram
          type={project.diagramType || 'autoform'}
          title={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-full bg-slate-900 overflow-hidden select-none ${className}`}>
      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-slate-600" />
        </div>
      )}

      {/* Big prominent image taking half of the slide */}
      <img
        src={resolvedUrl}
        alt={project.imageAlt || project.title}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle gradient vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none md:bg-gradient-to-r md:from-slate-950/40 md:via-transparent md:to-transparent" />

      {/* Research Tag badge on top right of the image */}
      {project.period && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium tracking-tight bg-slate-900/80 text-white backdrop-blur-md border border-white/15 shadow-sm">
            {project.period}
          </span>
        </div>
      )}
    </div>
  );
};

export default FeaturedSlideImage;
