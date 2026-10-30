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
        "Distributed Systems",
        "Cloud & Microservices",
        "Agentic AI & ML",
      ]}
      word="Portfolio"
      tag="#ATHUL"
      subtitle={["Systems ", "& Intelligence"]}
      notes={["High Throughput", "Low Latency", "Fault Tolerant"]}
      blurb="Full Stack Software Engineer specializing in high-concurrency cloud architectures (AWS ECS, Kafka, Redis, PostgreSQL), scalable microservices, and production Agentic AI/ML systems. Founder of Tutora EdTech SaaS."
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
        { id: "distributed", label: "Distributed Systems", tone: "blue", kind: "brand" },
        { id: "ai-ml", label: "Agentic AI & ML", tone: "green", kind: "render" },
        { id: "saas", label: "Cloud & SaaS", tone: "orange", kind: "page" },
        { id: "fullstack", label: "Full Stack Platforms", tone: "yellow", kind: "poster" },
      ]}
      projects={[
        {
          title: "Distributed URL Shortener",
          category: "distributed",
          year: "2025",
          summary: "Horizontally scalable, fault-tolerant system with Base62 hash-sharded PostgreSQL, Redis cache-aside, and sliding-window rate limiting.",
          role: "System Architect & Backend Engineer",
          tools: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker", "Nginx"],
          body: [
            "Designed a horizontally scalable, fault-tolerant URL shortener with Base62 hash-sharded PostgreSQL, Redis cache-aside, and sliding-window rate limiting to eliminate single points of failure under concurrency.",
            "Achieved 3,450 req/sec throughput at 4.2ms p95 latency with a 99.4% cache hit rate, sustaining 100% uptime in degraded mode during simulated database outages.",
          ],
          href: "https://url-shortener-1-1y3o.onrender.com/",
          mark: "HASH62",
        },
        {
          title: "Churn Guard — Customer Churn Platform",
          category: "ai-ml",
          year: "2025",
          summary: "Customer churn prediction platform with AWS ECS microservices and a 4-tool TypeScript agentic AI root-cause diagnosis layer.",
          role: "AI / Full Stack Engineer",
          tools: ["React", "Express", "FastAPI", "CatBoost", "Docker", "AWS ECS", "Agentic AI"],
          body: [
            "Identified and resolved target data leakage in a CatBoost model, reaching 0.86 ROC-AUC and 84% accuracy; architected as independent microservices deployed on AWS ECS Fargate with GitHub Actions CI/CD.",
            "Built a 4-tool TypeScript agentic layer with a second-pass verifier for root-cause diagnosis, achieving 100% citation grounding with zero observed hallucinations.",
          ],
          href: "http://churn-platform-alb-913716606.ap-south-2.elb.amazonaws.com/",
          mark: "CHURN",
        },
        {
          title: "DalalSight — Stock Trend Forecasting",
          category: "ai-ml",
          year: "2024",
          summary: "Level-2 stacked meta-learning forecasting pipeline (AutoARIMA, BiLSTM, Random Forest → XGBoost) with SciPy-optimized asset allocation.",
          role: "ML Engineer",
          tools: ["Python", "Flask", "AutoARIMA", "BiLSTM", "XGBoost", "SciPy"],
          body: [
            "Built a Level-2 stacked meta-learning pipeline (AutoARIMA, BiLSTM, Random Forest → XGBoost meta-learner) with SciPy-optimized allocation.",
            "Raised directional accuracy to 68.7% vs. 52.8% baseline across 3-year NIFTY 50 backtests, automating quantitative trend analysis.",
          ],
          href: "https://dalalsight.vercel.app/",
          mark: "DALAL",
        },
        {
          title: "Tutora — EdTech SaaS Platform",
          category: "saas",
          year: "2026",
          summary: "Scalable EdTech SaaS with role-based access, attendance scheduling, and an SSE streaming vector-embedding RAG AI tutor.",
          role: "Founder & Lead Cloud Developer",
          client: "tutora.org.in",
          tools: ["Next.js", "React 19", "TypeScript", "PostgreSQL", "Prisma", "OpenAI API", "AWS ECS"],
          body: [
            "Designed and built a scalable EdTech platform (enrollment, batch scheduling, attendance, role-based access) as sole technical lead; deployed on AWS ECS Fargate with JWT auth and GitHub Actions CI/CD.",
            "Built a context-aware AI tutor using an SSE streaming pipeline and vector-embedding RAG backend, cutting AI response time-to-first-token by 62% to under 400ms.",
          ],
          href: "https://tutora.org.in",
          mark: "TUTOR",
        },
        {
          title: "St. Mary's Cathedral Records Archive",
          category: "fullstack",
          year: "2024",
          summary: "Digitized 113 years of historical paper records into a structured MongoDB model, cutting record lookup time by 95%.",
          role: "Full Stack Engineer (Freelance)",
          tools: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "REST APIs"],
          body: [
            "Partnered directly with parish stakeholders to gather and translate evolving requirements into a full-stack records platform for St. Mary's Cathedral, iterating across multiple release cycles.",
            "Digitized 113 years of paper-based records into a structured MongoDB model, cutting record lookup time by 95%.",
          ],
          mark: "ARCHIV",
        },
        {
          title: "Victory Home Tutors Management",
          category: "fullstack",
          year: "2024",
          summary: "Centralized MERN platform unifying student, tutor, and academic management workflows, delivered end-to-end as sole developer.",
          role: "Full Stack Developer (Freelance)",
          tools: ["React", "Node.js", "Express.js", "MongoDB"],
          body: [
            "Built a centralized MERN platform unifying student, tutor, and academic management workflows, delivered end-to-end as sole developer.",
          ],
          mark: "VICTOR",
        },
      ]}
      highlights={[
        {
          label: "Distributed & Cloud",
          tone: "blue",
          lines: [
            "AWS ECS Fargate, ALB & CloudWatch",
            "PostgreSQL Base62 Sharding & Redis Caching",
            "Docker, Microservices & GitHub Actions",
          ],
        },
        {
          label: "Agentic AI & ML",
          tone: "green",
          lines: [
            "SSE Streaming RAG (<400ms TTFT)",
            "4-Tool Agentic Root-Cause Diagnosis",
            "CatBoost 0.86 ROC-AUC & Stacking Ensembles",
          ],
        },
        {
          label: "Full Stack Engineering",
          tone: "orange",
          lines: [
            "Next.js, React 19, TypeScript & Node.js",
            "Prisma ORM, PostgreSQL & MongoDB",
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
          points: ["Background", "Core Strengths", "Education @ MACE"],
          target: "about",
        },
        {
          title: "Featured Engineering",
          points: ["Distributed URL Shortener", "Churn Guard AI", "Tutora SaaS", "DalalSight"],
          target: "work",
        },
        {
          title: "Engineering Philosophy",
          points: ["High Throughput", "Fault Tolerance", "Zero Hallucination AI"],
          target: "process",
        },
        {
          title: "Honors & Credentials",
          points: ["NASA Space Apps", "Amazon ML Challenge", "Wharton & IBM"],
          target: "words",
        },
        {
          title: "Connect & Resume",
          points: ["Resume PDF", "GitHub Repos", "LinkedIn Profile", "Direct Email"],
          target: "contact",
        },
      ]}
      steps={[
        {
          title: "System Architecture & Sharding",
          body: "Designing distributed architectures, Base62 hash-sharding, Redis cache-aside policies, and sliding-window rate limiting to eliminate single points of failure under concurrency.",
          outputs: ["RFC & Schemas", "Sharding Strategy", "Cache Policies"],
        },
        {
          title: "Microservices & Cloud Deployment",
          body: "Developing decoupled microservices with TypeScript and Python. Containerizing with Docker and deploying to AWS ECS Fargate with ALB routing and GitHub Actions CI/CD.",
          outputs: ["Docker Images", "ECS Task Defs", "CI/CD Workflows"],
        },
        {
          title: "Agentic AI & Grounded Reasoning",
          body: "Building multi-tool agentic workflows with second-pass verifiers, vector-embedding RAG pipelines, and SSE streaming for sub-400ms time-to-first-token.",
          outputs: ["RAG Pipelines", "Agent Tools", "Citation Verifiers"],
        },
        {
          title: "Stress Testing & Reliability",
          body: "Benchmarking p95 latencies under 3,450+ req/sec loads, simulating database outages to ensure 100% uptime in degraded mode, and verifying zero hallucinations.",
          outputs: ["Load Test Reports", "Failover Drills", "Monitoring Alerts"],
        },
      ]}
      words={[
        {
          quote: "NASA Space Apps Challenge — People's Choice Award (2023). Selected for exceptional teamwork, innovation, and technical delivery.",
          name: "NASA Space Apps Challenge",
          role: "People's Choice Awardee (2023)",
          tone: "blue",
        },
        {
          quote: "Amazon ML Challenge (2026) — Successfully reached the submission round with high-performing machine learning pipelines.",
          name: "Amazon ML Challenge",
          role: "Submission Round (2026)",
          tone: "green",
        },
        {
          quote: "200+ LeetCode problems solved. IBM Machine Learning, Generative AI & Data Science certified. Wharton Business & Financial Modeling Specialization.",
          name: "Competitive Coding & Certifications",
          role: "LeetCode 200+ | Wharton | IBM AI",
          tone: "orange",
        },
      ]}
      contacts={[
        {
          label: "Resume (PDF)",
          value: "Download Athul's Resume",
          href: "./Athul_Sunil_Kumar_Resume.pdf",
        },
        {
          label: "GitHub",
          value: "github.com/athul-dev-sys",
          href: "https://github.com/athul-dev-sys",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/athul-sunil-kumar",
          href: "https://linkedin.com/in/athul-sunil-kumar",
        },
        {
          label: "LeetCode",
          value: "leetcode.com/u/athulsunilkumar6",
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
