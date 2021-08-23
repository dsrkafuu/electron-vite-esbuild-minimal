# Electron Vite ESBuild Minimal

Clean minimal template to build an Electron app with Vite and ESBuild.

## Major Dependencies

- Package Manager: NPM & PNPM
- Main: Electron & TypeScript & ESBuild
- Renderer: React & TypeScript & Vite
- Project Management: Prettier & ESLint
- Build: Electron Builder

## File Structure

```
.
├── app/                    # build output folder
├── build/                  # install package output folder
├── scripts/                # tool scripts
└── src/
    ├── main/
    │   ├── ipc/            # ipc modules
    │   ├── index.ts        # main entry
    │   └── preload.ts      # renderer preload script
    ├── renderer/
    │   ├── assets/         # some assets
    │   ├── components/     # common components
    │   ├── App.tsx         # root react app
    │   └── main.tsx        # renderer entry
    └── index.html          # vite html template
```

## License

This project is released under `MIT License`, for more information read the [LICENSE](https://github.com/dsrkafuu/electron-vite-esbuild-minimal/blob/main/LICENSE).

**Copyright © 2020-present DSRKafuU**
