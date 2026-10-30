# Hi, I'm Pham Nhat Quang (Joseph Pham) 👋

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nhat-quang-pham-0491a6223)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:quangnhatpham.dev@gmail.com)
[![Location](https://img.shields.io/badge/Location-Ho%20Chi%20Minh%20City%2C%20Vietnam-0052CC?style=for-the-badge&logo=googlemaps&logoColor=white)](https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam)

### Software Engineer | .NET 8/9, Distributed Systems & Polyglot Developer

I am a Software Engineer based in Ho Chi Minh City, dedicated to engineering high-availability backend services, resilient event-driven cloud systems, and high-performance desktop and multimedia tools. My engineering philosophy combines the structural discipline of **Clean Architecture** and **Domain-Driven Design** with the speed of **Rust**, the scalability of **.NET & AWS**, and the practical leverage of **AI/Computer Vision**.

- 🔭 **Currently shipping:** [OmniSchedule](https://omnischedule.space) — multi-tenant calendar synchronization bridging Google Workspace & Microsoft 365 with three-way differential merge and AWS SNS/SQS event fan-out.
- 🦀 **Desktop & Systems:** Refining [Mindful Block](https://github.com/JosephPham324/network-blocker), a smart focus assistant built with **Rust (Tauri)** that manages system DNS and enforces cognitive friction challenges.
- 🎨 **Creative Tech & CV:** Building algorithmic image processing engines including [Image Stroke Art](https://github.com/JosephPham324/image-stroke-art) (vectorized photomosaic synthesis) and [Face Clipper](https://github.com/JosephPham324/face-clipper) (AI segmentation & manga styling).
- ⚡ **Core Focus:** Event-driven architecture, CQRS, transactional integrity under concurrency, and automated test coverage.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Languages** | ![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white) |
| **Backend & Distributed** | .NET 8/9, ASP.NET Core, MediatR (CQRS), gRPC, RabbitMQ, AWS SNS/SQS, SignalR, Hangfire, FastAPI, Laravel |
| **Frontend & Desktop** | React 18, Vite, Tailwind CSS, Tauri (Rust), .NET MAUI, Blazor |
| **Databases & Storage** | PostgreSQL, Microsoft SQL Server, MongoDB, Firebase Firestore |
| **DevOps & Architecture** | Clean Architecture, Docker, AWS (SNS, SQS, Lightsail), Linux, Nginx, GitLab CI, GitHub Actions |

---

## 🚀 Featured Projects

### 🌐 Distributed & Enterprise Systems

#### 📅 [OmniSchedule](https://omnischedule.space) — Enterprise Multi-Platform Calendar Sync Engine
_High-concurrency calendar sync bridging Google Workspace and Microsoft 365._
- **Tech Stack:** .NET 8, ASP.NET Core, PostgreSQL, AWS SNS → SQS, Hangfire, SignalR, xUnit.
- **Three-Way Merge:** Implemented an 8-step differential merge engine with visual conflict resolution to eliminate silent data loss during concurrent calendar updates.
- **Loopback Suppression:** Eliminated circular webhook loops using origin-tagged headers and SHA-256 payload hashing.
- **Resilient Messaging:** Routed calendar deltas through AWS SNS/SQS with dead-letter queue monitoring to isolate poison-pill messages without stalling queues.

#### 🏋️ [FitLog](https://github.com/JosephPham324/FitLog) — Weight Training Analytics & Tracker
_Performance-driven web platform designed for athletes and strength training coaches._
- **Tech Stack:** .NET 8, ASP.NET Core, Entity Framework Core, SQL Server, MediatR.
- **Architecture:** Strict **Clean Architecture** implementation separating domain entities from persistence and presentation layers.
- **High-Read Reporting:** Implemented CQRS handlers to deliver fast aggregate metrics, RPE calculations, and workout template tracking.

#### ⚡ [High-Throughput-Log-Ingestor](https://github.com/JosephPham324/High-Throughput-Log-Ingestor) — Batch Ingestion Engine
_A resilient Web API engineered to ingest, deduplicate, sort, and persist high-volume batched log records with minimal latency._

---

### 🛡️ Desktop & Systems Utilities

#### 🛡️ [Mindful Block](https://github.com/JosephPham324/network-blocker) — Smart Focus Assistant
_A cross-platform desktop application designed to conquer digital distraction._
- **Tech Stack:** Rust (Tauri), React, Firebase.
- **OS Integration:** Directly manipulates system `hosts` files and flushes DNS caches in native Rust for bulletproof URL blocking.
- **Friction Mode:** Intercepts browser navigation and presents cognitive challenges (math problems and typing exercises) before unlocking requested domains.

#### ⏳ [Timeline Note-Taker](https://github.com/JosephPham324/Timeline-Note-Taker) — Chronological Information Manager
_A productivity application designed for fluid, chronological note capture and markdown documentation._
- **Tech Stack:** .NET MAUI, Blazor, SQLite.
- **Features:** Auto-detected code blocks, clipboard image integration, and fast timeline search.

---

### 🎨 Computer Vision, AI & Creative Tools

#### 🖌️ [Image Stroke Art](https://github.com/JosephPham324/image-stroke-art) — Photomosaic & Painterly Stroke Synthesizer
_Algorithmic non-photorealistic rendering engine transforming photos into multi-scale brushstroke mosaics._
- **Tech Stack:** Python 3.12, NumPy, OpenCV, Pillow, Typer, Pytest.
- **Algorithmic Core:** Precomputed 38-dimensional CIELAB color/texture descriptors, vectorized Euclidean distance matching, Reinhard color adaptation, and gradient-tangent stroke alignment.

#### ✂️ [Face Clipper & Manga Stylizer](https://github.com/JosephPham324/face-clipper) — AI Cutout & Art Pipeline
_Computer vision tool isolating portraits and full-body subjects with automatic Japanese manga cel-shading and screentone styling._
- **Tech Stack:** Python, OpenCV, ONNX Runtime (`u2netp` via `rembg`), Pillow.
- **Stylization Modes:** Produces transparent RGBA PNG cutouts styled in cel-shading, vintage tankōbon halftone screentone dots, sketch, and noir.

#### 🧠 [AI Quiz App](https://github.com/JosephPham324/ai_quiz_app) — Document-to-Quiz Generator
_Vite + React web application leveraging LLM APIs to convert raw study materials, lecture slides, and notes into interactive quizzes for exam preparation._

#### 🎬 [YouTube Transcript Extractor](https://github.com/JosephPham324/youtube-transcript-extractor) — Subtitle & Transcript CLI
_TypeScript utility leveraging InnerTube to retrieve and format timestamped transcripts for rapid summarization and research._

---

## 📊 GitHub Contribution Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=JosephPham324&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="Joseph's GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JosephPham324&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=JosephPham324&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</div>

---

## 📫 Connect with Me

- **LinkedIn:** [linkedin.com/in/nhat-quang-pham-0491a6223](https://linkedin.com/in/nhat-quang-pham-0491a6223)
- **Email:** [quangnhatpham.dev@gmail.com](mailto:quangnhatpham.dev@gmail.com)
- **GitHub:** [@JosephPham324](https://github.com/JosephPham324)
