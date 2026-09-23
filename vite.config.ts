import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

/**
 * Ensures images in /public/projects/ and /public/featured/ are served instantly
 * without server restart, supporting case-insensitive and normalized name lookups.
 */
function publicImageResolverPlugin(): Plugin {
  return {
    name: 'public-image-resolver',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();

        const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
        // Match /Portfolio/projects/..., /projects/..., /Portfolio/featured/..., /featured/...
        const match = cleanUrl.match(/(?:^\/Portfolio)?\/(projects|featured)\/(.+)$/);
        if (!match) return next();

        const folder = match[1];
        const requestedFilename = match[2];
        const targetDir = path.resolve(__dirname, 'public', folder);

        if (!fs.existsSync(targetDir)) return next();

        const files = fs.readdirSync(targetDir);
        const normalizedTarget = requestedFilename.toLowerCase().replace(/[\s-_]+/g, '');

        // Match exact or case-insensitive/normalized
        const found = files.find(f => {
          if (f === requestedFilename) return true;
          return f.toLowerCase().replace(/[\s-_]+/g, '') === normalizedTarget;
        });

        if (found) {
          const filePath = path.join(targetDir, found);
          const stat = fs.statSync(filePath);
          if (stat.isFile()) {
            const ext = path.extname(found).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.webp': 'image/webp',
              '.svg': 'image/svg+xml',
              '.gif': 'image/gif',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Content-Length', stat.size);
            res.setHeader('Cache-Control', 'no-cache');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
    // During build, normalize filenames by duplicating with lowercase / hyphenated variants so GitHub Pages works smoothly
    buildStart() {
      ['projects', 'featured'].forEach(folder => {
        const dir = path.resolve(__dirname, 'public', folder);
        if (!fs.existsSync(dir)) return;
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          if (file.startsWith('.') || file.endsWith('.md')) return;
          const lower = file.toLowerCase();
          const hyphenated = file.replace(/\s+/g, '-');
          const lowerHyphenated = lower.replace(/\s+/g, '-');

          [lower, hyphenated, lowerHyphenated].forEach(variant => {
            const dest = path.join(dir, variant);
            const src = path.join(dir, file);
            if (dest !== src && !fs.existsSync(dest)) {
              try {
                fs.copyFileSync(src, dest);
              } catch {
                // ignore
              }
            }
          });
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/Hakam-Fazeel/',
    plugins: [react(), tailwindcss(), publicImageResolverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
