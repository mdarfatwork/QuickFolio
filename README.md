# 🚀 Quickfolio

Quickfolio is a modern portfolio generator built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.  
It helps developers and professionals quickly create and showcase their portfolios with an elegant and responsive UI.

---

## 📦 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Components & Utilities:**
  - [shadcn/ui](https://ui.shadcn.com/) (Radix + Tailwind-based components)
  - [lucide-react](https://lucide.dev/) (icons)
- **Forms & Validation:**
  - [react-hook-form](https://react-hook-form.com/)
  - [zod](https://zod.dev/)
  - [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- **AI Integration:** [@google/genai](https://www.npmjs.com/package/@google/genai)
- **File Uploads:** [react-dropzone](https://react-dropzone.js.org/)
- **UX Enhancements:**
  - [sonner](https://sonner.emilkowal.ski/) (toast notifications)
  - [next-safe-action](https://next-safe-action.dev/) (typesafe server actions)

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/mdarfatwork/QuickFolio.git
cd quickfolio
```

### 2. Install dependencies
Using pnpm (recommended):
```bash
pnpm install
```

Or with npm/yarn:
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
pnpm dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser 🚀

---

## 🛠️ Available Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Run production build
- `pnpm lint` – Run ESLint
- `pnpm typecheck` – Check TypeScript types
- `pnpm prepare` – Setup Husky for git hooks

---

## 📂 Project Structure

```
quickfolio/src
├── app/                # App Router pages & layouts
├── components/         # Reusable UI components
├── lib/                # Utilities, helpers
├── public/             # Static assets
├── package.json
└── tsconfig.json
```

---

## ✅ Features (Planned/Implemented)

- 🎨 Modern UI with Tailwind + shadcn
- 📄 Drag-and-drop file uploads with react-dropzone
- ⚡ Server actions with next-safe-action
- 🔍 Type-safe forms with react-hook-form + zod
- 🤖 AI-powered features with Google GenAI
- 🔔 Beautiful toast notifications with Sonner

---

## 🧑‍💻 Development Workflow

This project uses:
- ESLint + TypeScript for code quality
- Husky for git hooks
- Zod for runtime validation

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a PR or an issue on GitHub.
