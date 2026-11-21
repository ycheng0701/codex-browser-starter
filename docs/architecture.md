# Architecture

The application uses a small Next.js app structure. UI components live in `src/components`, domain logic and integrations live in `src/lib`, and shared contracts live in `src/types`. Keep route files thin and move reusable behavior into named modules.
