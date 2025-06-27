# Discover Rwanda Visitor App

A modern, responsive web application designed to showcase Rwanda's tourism destinations, culture, and experiences for visitors. Built with Next.js 15, React 19, and modern web technologies.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript support for better development experience
- **State Management**: TanStack Query for efficient server state management
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Next.js 15 with App Router for optimal performance
- **SEO Ready**: Built-in SEO optimization with Next.js metadata API

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.3.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable icons
- **class-variance-authority** - Type-safe component variants
- **tailwind-merge** - Efficient Tailwind class merging

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization for React
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **Husky** - Git hooks for code quality
- **PostCSS** - CSS processing

## 📁 Project Structure

```
discover-rwanda-visitor-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── providers.tsx      # Client-side providers (QueryClient)
│   │   ├── globals.css        # Global styles
│   │   └── _not-found/        # 404 page
│   ├── components/            # Reusable UI components
│   ├── lib/                   # Utility functions and configurations
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Additional styling files
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── next.config.ts            # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd discover-rwanda-visitor-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests (placeholder for future test setup)

## 🏗️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Component Development
- Use shadcn/ui components as the foundation
- Create reusable components in `src/components/`
- Follow the established naming conventions
- Add proper TypeScript types for all props

### State Management
- Use TanStack Query for server state
- Use React Hook Form for form state
- Use React's built-in state for local component state
- Avoid prop drilling - use context when needed

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use CSS variables for theming
- Maintain consistent spacing and typography

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the coding guidelines
   - Add tests if applicable
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### Commit Message Convention
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🧪 Testing

Testing setup is planned for future implementation. When adding tests:
- Use Jest and React Testing Library
- Write unit tests for components
- Write integration tests for critical user flows
- Maintain good test coverage

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with the following variables:
```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other configurations as needed
```

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration. See `tailwind.config.js` for theme customization.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ for Rwanda Tourism**
