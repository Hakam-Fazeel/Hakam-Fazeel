# Featured Project Images

Drop your large featured project images into this folder: `/public/featured/`

### Recommended aspect ratio:
- `16:9` or `4:3` (high resolution PNG, JPG, WebP)
- In the featured slide, this image fills the right 50% of the slide on desktop (and full width on mobile), just like in academic research spotlights!

### How to link:
In your featured project file inside `src/featured-projects/` (for example `src/featured-projects/aa6082-stamping.ts`):

```typescript
export const aa6082StampingFeatured: FeaturedProject = {
  // ...
  image: "my-poster.png", // or "/featured/my-poster.png" or external URL
  // ...
};
```

If left blank or if an image is not found, the app will automatically display the interactive CAD/FEA simulation diagram instead so it never looks broken!
