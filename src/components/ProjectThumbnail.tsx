import React, { useState } from 'react';
import { Project } from '../projects/types';
import { ProjectDiagram } from './ProjectDiagram';
import { resolveThumbnailUrl } from '../utils/resolveImage';
import { Image as ImageIcon } from 'lucide-react';

interface ProjectThumbnailProps {
  project: Project;
  className?: string;
  priority?: boolean;
  imageOverride?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  project,
  className = '',
  priority = false,
  imageOverride
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const targetImage = imageOverride || project.modalImage || project.thumbnail;
  const resolvedUrl = resolveThumbnailUrl(targetImage);

  // If no thumbnail URL or if the image failed to load, render the SVG engineering diagram
  if (!resolvedUrl || imageError) {
    return <ProjectDiagram type={project.diagramType} title={project.title} className={className} />;
  }

  return (
    <div className={`relative w-full aspect-16/10 bg-slate-900 overflow-hidden border-b border-slate-200 select-none ${className}`}>
      {/* Background skeleton loader while image is loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-slate-300" />
        </div>
      )}

      {/* Main Thumbnail Image */}
      <img
        src={resolvedUrl}
        alt={project.imagePlaceholderAlt || project.title}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle bottom vignette to ensure contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

      {/* Engineering category badge on image */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-tight bg-slate-900/80 text-white backdrop-blur-xs border border-white/10 shadow-xs">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
