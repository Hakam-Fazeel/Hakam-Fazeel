# Project Thumbnails

Drop your project images into this folder: `/public/projects/`

### Supported formats:
- `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.gif`

### How to use in your project file:
Open any project file in `src/projects/` (for example, `src/projects/formula-student-chassis.ts`) and set the `thumbnail` property:

```typescript
export const formulaStudentChassisProject: Project = {
  id: "formula-student-chassis-fea",
  title: "Formula Student Tubular Spaceframe FEA",
  // ...
  thumbnail: "chassis-render.png", // or "/projects/chassis-render.png" or an external URL
  // ...
};
```

If `thumbnail` is left blank or undefined, the project will automatically show the interactive technical CAD/FEA engineering diagram!
