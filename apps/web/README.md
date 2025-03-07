# 🎨 AnimeXchange Frontend

## 📝 Overview

The frontend for AnimeXchange is a modern, responsive web application built to showcase and trade anime-inspired NFT collectibles. Leveraging cutting-edge web technologies, we provide a seamless and engaging user experience for anime and digital collectible enthusiasts.

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks, Context API
- **Blockchain Integration**: Web3.js / Ethers.js

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- pnpm package manager

### Installation

1. Clone the monorepo:

   ```bash
   git clone https://github.com/ad956/AnimeXchange.git
   cd animexchange
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

4. Start development server:

   ```bash
   pnpm run dev:frontend
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
frontend/
├── components/       # Reusable React components
├── pages/            # Next.js page components
├── styles/           # Global and component-specific styles
├── hooks/            # Custom React hooks
├── contexts/         # React context providers
├── utils/            # Utility functions
└── types/            # TypeScript type definitions
```

## 🧪 Testing

Run frontend tests:

```bash
pnpm run test:frontend
```

## 🤝 Contributing

Please read our [Contributing Guide](../CONTRIBUTING.md) before submitting pull requests.

## 📜 License

This frontend is part of the AnimeXchange project and is licensed under the MIT License.