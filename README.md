# useagents

![Project Logo](./image.png)



## 🚀 Features

- 🔒 **Authentication** - Secure user authentication powered by Clerk
- 🛠️ **Tools Section** - Collection of useful tools and utilities
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎨 **Modern UI** - Clean and intuitive user interface with Tailwind CSS
- 🔄 **State Management** - Powered by tRPC and React Query

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Neon Serverless Postgres](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/)
- **State Management**: [tRPC](https://trpc.io/) + [React Query](https://tanstack.com/query)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + Custom Components
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- [Docker](https://www.docker.com/) (for local database)
- [Clerk](https://clerk.com/) account (for authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/useagentsai/useagents.git
   cd useagents
   ```

2. Install dependencies:
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required environment variables

4. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
apps/web/
├── src/
│   ├── app/                # App router pages and layouts
│   │   ├── (auth)/         # Authentication related pages
│   │   ├── (tools)/        # Tools section
│   │   └── (legal)/        # Legal pages
│   ├── components/         # Reusable UI components
│   ├── config/            # App configuration
│   ├── db/                # Database models and migrations
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and libraries
│   └── styles/            # Global styles and themes
```

## 🧪 Testing

To run tests:

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## 🚀 Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fuseagentsai%2Fuseagents)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request