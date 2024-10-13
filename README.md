# AnimeXchange 🎌✨

AnimeXchange is a state-of-the-art NFT marketplace focused on anime and manga digital collectibles. It offers a secure, scalable, and user-friendly platform where users can trade, showcase, and discover exclusive anime-inspired digital assets.

## 🎨 Key Features

- 🖼️ **Curated Anime NFTs**: Featuring exclusive collections from popular artists and studios
- 🔒 **Secure Trading**: Powered by blockchain technology, ensuring transparent and safe transactions
- 🌐 **Community-Driven**: Engage with a vibrant community of anime enthusiasts, artists, and collectors
- ⛓️ **Multi-Chain Support**: Seamless trading across various blockchain networks
- ⚡ **Auction House**: Participate in live auctions for rare anime collectibles
- 🛠️ **Creator Tools**: Artists can easily mint and sell their anime-inspired NFTs

## 🛠️ Tech Stack

<!-- Frontend Tech Stack -->
<div style="display: flex; align-items: center; margin-bottom: 10px;gap:5px;">
    <h5 style="margin-right: 10px;">Frontend:</h5>
    <div style="display: flex; gap: 15px;">
        <a href="https://nextjs.org" target="_blank">
            <img src="https://img.shields.io/badge/Next.js-0E1111?logo=next.js&logoColor=white" alt="Next.js" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
            <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript" />
        </a>
    </div>
</div>

<!-- Backend Tech Stack -->
<div style="display: flex; align-items: center; margin-bottom: 10px;gap:5px;">
    <h5 style="margin-right: 10px;">Backend:</h5>
    <div style="display: flex; gap: 15px;">
        <a href="https://expressjs.com" target="_blank">
            <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" alt="Express.js" />
        </a>
        <a href="https://www.postgresql.org" target="_blank">
            <img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white" alt="PostgreSQL" />
        </a>
        <a href="https://redis.io" target="_blank">
            <img src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white" alt="Redis" />
        </a>
        <a href="https://kafka.apache.org" target="_blank">
            <img src="https://img.shields.io/badge/Kafka-231F20?logo=apache-kafka&logoColor=white" alt="Kafka" />
        </a>
        <a href="https://www.nginx.com" target="_blank">
            <img src="https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white" alt="Nginx" />
        </a>
    </div>
</div>

<!-- DevOps Tech Stack -->
<div style="display: flex; align-items: center; margin-bottom: 10px;gap:5px;">
    <h5 style="margin-right: 10px;">DevOps:</h5>
    <div style="display: flex; gap: 15px;">
        <a href="https://www.docker.com" target="_blank">
            <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
        </a>
        <a href="https://github.com/features/actions" target="_blank">
            <img src="https://img.shields.io/badge/GitHub%20Actions-0d1117?logo=github&logoColor=white" alt="GitHub Actions" />
        </a>
    </div>
</div>

<!-- Build Tools Tech Stack -->
<div style="display: flex; align-items: center; margin-bottom: 10px;gap:5px;">
    <h5 style="margin-right: 10px;">Build Tools:</h5>
    <div style="display: flex; gap: 15px;">
        <a href="https://turborepo.org" target="_blank">
            <img src="https://img.shields.io/badge/Turborepo-000000?logo=turborepo&logoColor=white" alt="Turborepo" />
        </a>
        <a href="https://pnpm.io" target="_blank">
            <img src="https://img.shields.io/badge/pnpm-222222?logo=pnpm&logoColor=white" alt="pnpm" />
        </a>
    </div>
</div>

## 🏗️ Architecture Overview

AnimeXchange is built using a modern microservices architecture to ensure scalability and maintainability:

- **Frontend**: Next.js with server-side rendering for fast load times and improved SEO
- **Backend Services**: Microservices architecture with NestJS and Express.js for user, NFT, marketplace, and wallet management
- **Data Storage**: PostgreSQL for persistent storage, Redis for caching frequently accessed data
- **Inter-service Communication**: Apache Kafka for reliable, real-time messaging between services
- **DevOps**: Containerized deployment with Docker, using Nginx for load balancing and reverse proxy
- **Monorepo**: Managed with Turborepo for efficient code management and build processes

## 🚀 Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ad956/AnimeXchange.git
   cd animexchange
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```

4. **Start the development environment**:

   ```bash
   docker-compose up -d
   pnpm run dev
   ```

5. **Open the app**:

   Navigate to `http://localhost:3000` in your browser.

## 🤝 Contributing

We welcome contributions from developers and anime fans alike. Please check out our [Contributing Guide](CONTRIBUTING.md) for details on the code of conduct and how to submit your pull requests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

For support or inquiries, please reach us at support@animexchange.com

---

**AnimeXchange** – Bringing anime to the blockchain.
