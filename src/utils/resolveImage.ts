// Auto-detect and bundle any images placed directly in /src/ (e.g. /src/projects/, /src/featured-projects/, etc.)
const srcImageModules = import.meta.glob<string>(
  '/src/**/*.{png,jpg,jpeg,webp,svg,gif,PNG,JPG,JPEG}',
  { eager: true, import: 'default' }
);

/**
 * Normalizes a filename or path for fuzzy matching (case insensitive, treats spaces, dashes, underscores equally)
 */
function normalizeName(str: string): string {
  return str
    .toLowerCase()
    .replace(/[_\s-]+/g, '')
    .trim();
}

/**
 * Safely resolves an image path for both local development and GitHub Pages subfolder hosting.
 * Supports:
 * - Direct images dropped in /src/projects/ or /src/featured-projects/ (e.g. "EHL-Solver.png" or "EHL Solver.png")
 * - Direct filenames in /public/projects/ or /public/featured/
 * - Relative and absolute public paths
 * - External URLs (e.g. "https://...")
 */
export function resolveThumbnailUrl(thumbnail?: string, defaultFolder: string = 'projects'): string | null {
  if (!thumbnail || !thumbnail.trim()) {
    return null;
  }

  const trimmed = thumbnail.trim();

  // If it's an external URL or data URI, return directly
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:')
  ) {
    return trimmed;
  }

  // 1. Check if the image exists inside /src/ (e.g. /src/projects/EHL-Solver.png)
  const targetFilename = trimmed.split('/').pop() || trimmed;
  const targetNormalized = normalizeName(targetFilename);

  for (const [path, assetUrl] of Object.entries(srcImageModules)) {
    const filename = path.split('/').pop() || '';
    if (normalizeName(filename) === targetNormalized) {
      return assetUrl;
    }
  }

  // 2. Fallback to public folder resolution
  // Strip leading slash if present
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;

  // If user only provided a filename like "poster.png", place it in defaultFolder
  const relativePath = cleanPath.includes('/') ? cleanPath : `${defaultFolder}/${cleanPath}`;

  // Get base URL configured in vite.config.ts (e.g. './' or '/Portfolio/')
  const rawBase = import.meta.env.BASE_URL || './';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  return `${base}${relativePath}`;
}

