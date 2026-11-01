import FolderTabPortfolioTemplate from './components/ui/folder-tab-portfolio-template'
import athulPhoto from './assets/athul.jpg'

export default function App() {
  return (
    <FolderTabPortfolioTemplate
      name="Athul Sunil Kumar"
      localName=""
      handle="@athul-dev-sys"
      years="2024–2026"
      role="Full Stack Software Engineer"
      disciplines={[
        "Distributed Systems & Cloud",
        "Agentic AI & LLMs",
        "Full-Stack Platforms",
      ]}
      word="Portfolio"
      tag="#ATHUL"
      subtitle={["Distributed Systems", "& Agentic AI"]}
      notes={["3,450 req/s @ 4.2ms", "Zero Hallucination RAG", "SIH 2026 Finalist"]}
      blurb="Full Stack Software Engineer & Cloud Architect specializing in high-concurrency distributed platforms (AWS ECS, Kafka, Redis, PostgreSQL sharding), resilient microservices, and production Agentic AI/LLM systems. Founder of Tutora SaaS."
      greeting="Hello, I'm"
      defaultTheme="dark"
      timeZone="Asia/Kolkata"
      email="athulsunilkumar6@gmail.com"
      photo={athulPhoto}
      colors={{
        blue: "#3b82f6",
        green: "#10b981",
        orange: "#f97316",
        yellow: "#eab308",
      }}
      categories={[
        { id: "distributed", label: "Distributed Systems & Security", tone: "blue", kind: "brand", local: "DISTRIBUTED" },
        { id: "ai-ml", label: "Applied AI & Foundation Models", tone: "green", kind: "render", local: "AGENTIC AI" },
        { id: "saas", label: "Cloud Architecture & SaaS", tone: "orange", kind: "page", local: "CLOUD SAAS" },
        { id: "fullstack", label: "Full Stack & Cross-Platform", tone: "yellow", kind: "poster", local: "FULL STACK" },
      ]}
      projects={[
        {
          title: "Distributed URL Shortener",
          category: "distributed",
          year: "2025",
          summary: "High-throughput system sustaining 3,450 req/s @ 4.2ms p95 latency via Base62 hash-sharded PostgreSQL, Redis cache-aside (99.4% hit rate), and sliding-window rate limiting.",
          role: "System Architect & Backend Engineer",
          tools: ["NestJS", "Next.js", "PostgreSQL Sharding", "Redis Streams", "Nginx", "Docker"],
          body: [
            "Architected an enterprise distributed URL shortener designed to demonstrate system design under extreme concurrency. Implemented hash partitioning across PostgreSQL shards with round-robin Nginx balancing across 3 stateless NestJS replicas (verified with X-Served-By headers).",
            "Engineered a Redis cache-aside layer achieving a 99.4% hit rate, token-bucket sliding-window rate limiting, and an async click analytics worker consuming Redis Streams (stream:url-events). Built a circuit breaker with degraded mode (X-Degraded-Mode: true) guaranteeing 100% redirect uptime even during database failovers.",
          ],
          href: "https://github.com/athul-dev-sys/url-shortener",
          mark: "HASH62",
          local: "3,450 REQ/S @ 4.2MS",
        },
        {
          title: "DRONA-LOG — Tactical Military Resupply",
          category: "distributed",
          year: "2026",
          summary: "Smart India Hackathon (SIH 2026) · Predictive forward-area logistics for high-altitude military formations across Ladakh corridors.",
          role: "Lead Systems & Backend Engineer",
          client: "SIH 2026 · Problem SIH26251 (Team Subterra Mesh)",
          tools: ["Python 3.12", "FastAPI", "Google OR-Tools (SCIP)", "LightGBM", "React 19", "MapLibre GL", "IndexedDB"],
          body: [
            "Built for Smart India Hackathon (Problem Statement SIH26251) to solve mountain logistics in Ladakh. Combines LightGBM 7-day demand forecasting per supply class with elevation-penalised A* mountain routing and Google OR-Tools SCIP mixed-integer programming (MILP) fleet allocation.",
            "Engineered an offline-first tactical edge client with IndexedDB and a SHA-256 hash-chained tamper-evident ledger that reconciles safely once connectivity restores. Measured 30-day simulation results: −93.9% stockouts and −49.9% below-buffer unit-days with full availability exposed during strategic corridor closures (e.g. Zoji La).",
          ],
          href: "https://github.com/athul-dev-sys/DRONA-LOG",
          mark: "DRONA",
          local: "SIH 2026 FINALIST",
        },
        {
          title: "GhostRange — Cloud Security Control Validation",
          category: "distributed",
          year: "2026",
          summary: "Defensive cloud security-control validation platform simulating cloud identity compromises, verifying detection rules, and explaining blind spots with NVIDIA Nemotron.",
          role: "Security & Cloud Architect",
          tools: ["TypeScript", "React", "Node.js", "NVIDIA Nemotron", "Nebius AI", "CloudTrail Telemetry"],
          body: [
            "Engineered a defensive cybersecurity validation range that safely executes synthetic multi-stage cloud identity compromise attack chains across AWS IAM and CloudTrail environments.",
            "Evaluates detection rules deterministically against real-time synthetic telemetry, automatically isolates coverage blind spots, and generates tactical remediation playbooks using NVIDIA Nemotron via Nebius Token Factory.",
          ],
          href: "https://github.com/athul-dev-sys",
          mark: "GHOST",
          local: "CLOUD SEC VALIDATION",
        },
        {
          title: "Malayalam SLM — Small Language Model",
          category: "ai-ml",
          year: "2025",
          summary: "110M parameter base causal decoder-only transformer language model engineered specifically for Malayalam with native-fertility subword tokenization.",
          role: "ML Researcher & Systems Architect",
          tools: ["PyTorch", "Hugging Face", "Tokenizers", "SentencePiece", "AWS EC2 Spot g5.xlarge", "S3"],
          body: [
            "Architected an 8-stage foundation model pipeline for Malayalam. Trained a custom 50,000 Unigram subword tokenizer achieving a record-low fertility ratio of 1.77 tokens/word with 0 UNKs across agglutinative Dravidian morpho-syntax.",
            "Constructed a 590M+ token uint16 memmap training corpus with global cross-source deduplication. The model achieved 1.310 bits-per-character (BPC) vs MuRIL 1.482, featuring a 4-arm LoRA vs Full-FT dialect adaptation framework for colloquial and regional dialects (Kasaragod).",
          ],
          href: "https://github.com/athul-dev-sys/malayalam-slm",
          mark: "ML-SLM",
          local: "110M PARAM TRANSFORMER",
        },
        {
          title: "Churn Guard — Enterprise ML & Agentic Platform",
          category: "ai-ml",
          year: "2025",
          summary: "Customer churn prediction microservices on AWS ECS Fargate with a 4-tool TypeScript agentic loop achieving 100% citation grounding.",
          role: "AI & Cloud Engineer",
          tools: ["React", "Express", "FastAPI", "CatBoost", "AWS ECS Fargate", "Docker", "TypeScript Agents"],
          body: [
            "Discovered and eradicated critical target data leakage in production churn training data, elevating CatBoost model performance to 0.86 ROC-AUC and 84% accuracy. Architected as independent microservices containerized with Docker on AWS ECS Fargate with automated GitHub Actions CI/CD.",
            "Built a 4-tool TypeScript agentic AI root-cause diagnosis layer with a second-pass verification engine that checks every LLM claim against deterministic database ground truth, achieving 100% citation grounding with zero hallucinations.",
          ],
          href: "https://github.com/athul-dev-sys/churn-platform",
          mark: "CHURN",
          local: "0.86 ROC-AUC · AGENTIC",
        },
        {
          title: "DalalSight — AI Quantitative Portfolio Optimizer",
          category: "ai-ml",
          year: "2024",
          summary: "Level-2 stacked meta-learning forecasting pipeline (AutoARIMA, BiLSTM, Random Forest → XGBoost) with SciPy SLSQP Sharpe tangency optimization.",
          role: "Quantitative ML Engineer",
          tools: ["Python", "FastAPI", "React", "AutoARIMA", "BiLSTM", "XGBoost", "SciPy SLSQP"],
          body: [
            "Developed an end-to-end quantitative trading & asset allocation platform for NIFTY 50 equities. Combines statistical time-series (AutoARIMA), deep sequential networks (BiLSTM), and decision trees (Random Forest) ensembled under an XGBoost meta-learner.",
            "Boosted directional trend accuracy to 68.7% (vs 52.8% baseline) across 3-year historical backtests. Integrated SciPy SLSQP quadratic constrained optimization to calculate optimal Sharpe ratio tangency portfolios across strict risk tiers (Conservative 20%, Moderate 40%, Aggressive 80%).",
          ],
          href: "https://github.com/athul-dev-sys/dalalsight",
          mark: "DALAL",
          local: "68.7% DIRECTIONAL ACCURACY",
        },
        {
          title: "Markowitz Portfolio Optimizer",
          category: "ai-ml",
          year: "2024",
          summary: "Modern Portfolio Theory quantitative engine with Sharpe ratio maximization, Monte Carlo simulations, and quadratic boundary optimization.",
          role: "Quantitative Developer",
          tools: ["Python", "Flask", "SciPy Optimize", "NumPy", "Pandas", "Matplotlib"],
          body: [
            "Implemented the mathematical foundations of Markowitz Mean-Variance Optimization to compute the Efficient Frontier of risk-adjusted returns.",
            "Executes 10,000+ Monte Carlo portfolio simulations and quadratic constrained optimization using SciPy SLSQP to find the global minimum variance and maximum Sharpe capital allocation weights.",
          ],
          href: "https://github.com/athul-dev-sys/Markowitz-portfolio-optimizer",
          mark: "MPT-OPT",
          local: "EFFICIENT FRONTIER",
        },
        {
          title: "IntentHire — Semantic Talent Intelligence",
          category: "ai-ml",
          year: "2025",
          summary: "AI candidate screening platform using Google Gemini and Pinecone vector database embeddings for bias-free semantic qualification matching.",
          role: "Full Stack & AI Engineer",
          tools: ["Next.js", "FastAPI", "Google Gemini", "Pinecone Vector DB", "LangChain"],
          body: [
            "Automated end-to-end candidate resume parsing and semantic ranking against high-complexity engineering job descriptions.",
            "Employed Google Gemini and Pinecone high-dimensional vector embeddings to compute contextual semantic similarity scores, replacing brittle keyword search with deep semantic competence matching.",
          ],
          href: "https://github.com/athul-dev-sys/IntentHire",
          mark: "INTENT",
          local: "PINECONE VECTOR RAG",
        },
        {
          title: "Tutora — EdTech SaaS Platform",
          category: "saas",
          year: "2026",
          summary: "Production EdTech SaaS with role-based access, automated batch attendance, and an SSE streaming vector-embedding RAG AI tutor (<400ms TTFT).",
          role: "Founder & Sole Cloud Architect",
          client: "tutora.org.in",
          tools: ["Next.js", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "AWS ECS Fargate", "OpenAI API"],
          body: [
            "Founded and engineered tutora.org.in as sole technical architect, delivering student enrollment, batch scheduling, automated attendance, and granular role-based access control (RBAC). Containerized and deployed on AWS ECS Fargate behind an Application Load Balancer with automated CI/CD.",
            "Engineered an intelligent AI tutor leveraging a custom Server-Sent Events (SSE) streaming pipeline and vector-embedding RAG architecture, slashing time-to-first-token (TTFT) by 62% to under 400ms for instantaneous classroom assistance.",
          ],
          href: "https://tutora.org.in",
          mark: "TUTOR",
          local: "FOUNDER @ TUTORA.ORG.IN",
        },
        {
          title: "SoberCircle (HACK-A-ADDICT)",
          category: "fullstack",
          year: "2025",
          summary: "Cross-platform mobile addiction recovery companion built with React Native, Expo SDK 54, React 19, and Supabase real-time WebSocket channels.",
          role: "Lead Mobile & Full Stack Engineer",
          tools: ["React Native", "Expo SDK 54", "React 19", "Supabase", "PostgreSQL", "TypeScript"],
          body: [
            "Built a production-ready mobile and web sobriety companion using Expo Router 6 and React Native 0.81 with an organic Botanical Matte Sage & Terracotta aesthetic designed for mindfulness.",
            "Engineered Supabase real-time WebSocket subscriptions for peer community feeds, interactive glowing daily streak counters, milestone achievement unlocks, and a 1-tap 24/7 SOS crisis intervention helpline caller with GPS rehab locator.",
          ],
          href: "https://github.com/athul-dev-sys/HACK-A-ADDICT",
          mark: "SOBER",
          local: "REACT NATIVE & SUPABASE",
        },
        {
          title: "St. Mary's Cathedral Digital Archive",
          category: "fullstack",
          year: "2024",
          summary: "Digitized 113 years of historic parish paper archives into a structured MongoDB schema, cutting historical record lookup time by 95%.",
          role: "Full Stack Engineer (Contract)",
          client: "St. Mary's Cathedral",
          tools: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "REST APIs"],
          body: [
            "Collaborated directly with ecclesiastical stakeholders to architect a digital preservation system for over a century of delicate paper registry records.",
            "Modelled unstructured multi-decade archival entries into indexed MongoDB collections, developing intuitive fuzzy search and filtering that reduced document retrieval times from 45 minutes to sub-second queries.",
          ],
          href: "https://github.com/athul-dev-sys",
          mark: "ARCHIV",
          local: "113-YR DIGITAL RECORD",
        },
        {
          title: "Algorithmic DSA Mastery (200+ Solved)",
          category: "fullstack",
          year: "2025",
          summary: "Comprehensive repository of 200+ LeetCode & NeetCode solutions with rigorous time/space complexity analysis in C++ and Python.",
          role: "Competitive Programmer",
          tools: ["C++", "Python", "Data Structures", "Dynamic Programming", "Graph Theory"],
          body: [
            "Authored optimized implementations for 200+ algorithmic problems across Graph Theory (Dijkstra, Tarjan, Topo Sort), Dynamic Programming, Segment Trees, and Bit Manipulation.",
            "Benchmark solutions emphasizing asymptotic time and memory efficiency: leetcode.com/u/athulsunilkumar6.",
          ],
          href: "https://github.com/athul-dev-sys/leetcode-solutions",
          mark: "LEET200",
          local: "200+ LEETCODE PROBLEMS",
        },
      ]}
      highlights={[
        {
          label: "Distributed & Cloud Architecture",
          tone: "blue",
          lines: [
            "AWS ECS Fargate, ALB, CloudWatch & Route53",
            "PostgreSQL Hash-Sharding & Redis Cache-Aside",
            "Docker Microservices, Kafka & GitHub Actions CI/CD",
          ],
        },
        {
          label: "Agentic AI & Language Models",
          tone: "green",
          lines: [
            "SSE Streaming RAG (<400ms Time-to-First-Token)",
            "4-Tool Agentic Diagnosis (100% Citation Grounding)",
            "110M Malayalam SLM & CatBoost 0.86 ROC-AUC",
          ],
        },
        {
          label: "Full Stack & Cross-Platform",
          tone: "orange",
          lines: [
            "Next.js 15, React 19, TypeScript & Node.js",
            "React Native (Expo SDK 54) & Supabase Realtime",
            "B.Tech CSE @ MACE (CGPA 8.34/10)",
          ],
        },
      ]}
      timeline={[
        {
          from: "Feb 2026",
          to: "Present",
          title: "Founder & Full Stack Cloud Developer",
          place: "Tutora (EdTech SaaS) • tutora.org.in",
        },
        {
          from: "Jun 2025",
          to: "Jul 2025",
          title: "Software Engineering / AI Intern",
          place: "Novolo.ai • Sentiment/CNN Models & AI Agents",
        },
        {
          from: "Jun 2024",
          to: "Feb 2026",
          title: "Freelance Full Stack Developer",
          place: "Independent • St. Mary's Cathedral & Victory Tutors",
        },
        {
          from: "Oct 2024",
          to: "Oct 2024",
          title: "AI/ML Intern",
          place: "AccelerateX • Supervised Learning & Placement Test",
        },
        {
          from: "2023",
          to: "2027",
          title: "B.Tech Computer Science Engineering",
          place: "Mar Athanasius College of Engineering (CGPA: 8.34/10)",
        },
      ]}
      chapters={[
        {
          title: "Who I Am",
          local: "PROFILE",
          points: ["Background", "Core Strengths", "Education @ MACE"],
          target: "about",
        },
        {
          title: "Featured Engineering",
          local: "SYSTEMS",
          points: ["Distributed URL Shortener", "DRONA-LOG (SIH 2026)", "GhostRange", "Malayalam SLM", "Churn Guard", "Tutora SaaS"],
          target: "work",
        },
        {
          title: "Engineering Philosophy",
          local: "METHODOLOGY",
          points: ["High Throughput", "Fault Tolerance", "Zero Hallucination AI"],
          target: "process",
        },
        {
          title: "Honors & Credentials",
          local: "HONORS",
          points: ["NASA Space Apps", "SIH 2026 Finalist", "Amazon ML Challenge", "Wharton & IBM"],
          target: "words",
        },
        {
          title: "Connect & Resume",
          local: "CONNECT",
          points: ["Resume PDF", "GitHub Repos", "LinkedIn Profile", "Direct Email"],
          target: "contact",
        },
      ]}
      steps={[
        {
          title: "System Architecture & Sharding",
          local: "ARCH",
          duration: "Phase 1",
          body: "Designing distributed architectures, Base62 hash-sharding across PostgreSQL partitions, Redis cache-aside policies (99.4% hit rate), and sliding-window rate limiting to eliminate single points of failure under high concurrency.",
          outputs: ["RFC & Architecture Specs", "Partitioning & Sharding Strategy", "Cache Invalidation Policies"],
        },
        {
          title: "Microservices & Cloud Deployment",
          local: "DEPLOY",
          duration: "Phase 2",
          body: "Developing decoupled microservices with TypeScript and Python FastAPI. Containerizing with Docker and deploying to AWS ECS Fargate with Application Load Balancer routing, health probes, and automated GitHub Actions CI/CD pipelines.",
          outputs: ["Multi-stage Docker Builds", "ECS Task Definitions", "Automated GitHub Actions CI/CD"],
        },
        {
          title: "Agentic AI & Grounded Reasoning",
          local: "REASONING",
          duration: "Phase 3",
          body: "Engineering multi-tool agentic workflows with second-pass verifiers, high-dimensional vector embeddings (Pinecone/Gemini), and SSE streaming pipelines delivering sub-400ms time-to-first-token with 100% citation grounding.",
          outputs: ["SSE Streaming Pipelines", "Agent Tool Definitions", "Deterministic Citation Verifiers"],
        },
        {
          title: "Chaos Testing & Observability",
          local: "CHAOS",
          duration: "Phase 4",
          body: "Benchmarking p95 latencies under 3,450+ req/sec loads, simulating primary database outages to verify circuit breaker degraded mode (100% uptime), and testing zero hallucinations across edge cases.",
          outputs: ["Load Test Reports & p95 Latency", "Database Failover Drills", "Real-time Metrics Dashboards"],
        },
      ]}
      words={[
        {
          quote: "NASA Space Apps Challenge — People's Choice Award (2023). Recognized for exceptional technical innovation, rapid prototyping, and impactful systems delivery.",
          name: "NASA Space Apps Challenge",
          role: "People's Choice Awardee (2023)",
          tone: "blue",
        },
        {
          quote: "Smart India Hackathon (SIH 2026) — Finalist (Team Subterra Mesh, Problem Statement SIH26251). Engineered predictive high-altitude military resupply logistics.",
          name: "Smart India Hackathon (SIH 2026)",
          role: "National Finalist (Team Subterra Mesh)",
          tone: "green",
        },
        {
          quote: "Amazon ML Challenge (2026) — Submission Round. Successfully developed and delivered scalable high-accuracy machine learning pipelines.",
          name: "Amazon ML Challenge",
          role: "Submission Round (2026)",
          tone: "orange",
        },
        {
          quote: "200+ LeetCode problems solved. IBM Machine Learning, Generative AI & Data Science certified. Wharton Business & Financial Modeling Specialization.",
          name: "Competitive Coding & Certifications",
          role: "LeetCode 200+ | Wharton | IBM AI",
          tone: "yellow",
        },
      ]}
      contacts={[
        {
          label: "Resume (PDF)",
          value: "Athul's Resume",
          href: "./Athul_Sunil_Kumar_Resume.pdf",
        },
        {
          label: "GitHub",
          value: "athul-dev-sys",
          href: "https://github.com/athul-dev-sys",
        },
        {
          label: "LinkedIn",
          value: "athul-sunil-kumar",
          href: "https://linkedin.com/in/athul-sunil-kumar",
        },
        {
          label: "LeetCode",
          value: "athulsunilkumar6",
          href: "https://leetcode.com/u/athulsunilkumar6",
        },
        {
          label: "Email",
          value: "athulsunilkumar6@gmail.com",
          href: "mailto:athulsunilkumar6@gmail.com",
        },
        {
          label: "Phone",
          value: "+91 77019 54533",
          href: "tel:+917701954533",
        },
      ]}
    />
  )
}
