// Static-asset module declarations for CI type checks.
// next-env.d.ts provides these locally but is gitignored, so `tsc --noEmit`
// in CI (no prior `next build`/`next dev`) cannot resolve image imports
// without this committed reference.
/// <reference types="next/image-types/global" />
