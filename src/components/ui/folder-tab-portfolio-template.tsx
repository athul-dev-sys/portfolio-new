"use client"

// Folder Tab Portfolio Template — a whole designer portfolio built from file
// folders. A blue masthead tab, a sticky page counter, and seven "sheets" that
// read like the pages of a printed portfolio deck: a cover with a drawn-on
// wordmark and a fan of frosted category folders, a catalogue of chapters that
// open like filing tabs, an about page with an illustrated photo card and a
// timeline, a filterable work cabinet with a details sheet, a tabbed process
// folder, kind words on glass, and a contact stack.
//
// Nothing loads at runtime. The display type is a monoline stroke alphabet
// drawn in this file (with a pill-shaped "OO" ligature), the signature is
// generated from your name, and the photo, project covers and palm watermark
// are all SVG. Pass your own content through props; empty sections hide.
import * as React from "react"

export type FolderTone = "blue" | "green" | "orange" | "yellow"
export type CoverKind = "poster" | "render" | "page" | "sale" | "brand"

export type FolderCategory = {
  id: string
  label: string
  /** A second-language label, shown large inside the folder. */
  local?: string
  tone: FolderTone
  /** Which generated cover style its projects get. */
  kind?: CoverKind
}

export type FolderProject = {
  title: string
  local?: string
  /** A category id. */
  category: string
  year: string
  summary: string
  client?: string
  role?: string
  tools?: string[]
  /** Paragraphs for the details sheet. */
  body?: string[]
  href?: string
  /** An image URL used instead of the generated cover. */
  image?: string
  /** A short word printed on the generated cover. */
  mark?: string
}

export type FolderHighlight = { label: string; tone?: FolderTone; lines: string[] }
export type FolderTimelineItem = { from: string; to: string; title: string; place?: string }
export type FolderChapter = { title: string; local?: string; points?: string[]; target?: FolderSectionId }
export type FolderStep = { title: string; local?: string; body: string; outputs?: string[]; duration?: string }
export type FolderWord = { quote: string; name: string; role?: string; tone?: FolderTone }
export type FolderLink = { label: string; value: string; href?: string }
export type FolderSectionId = "cover" | "contents" | "about" | "work" | "process" | "words" | "contact"

export interface FolderTabPortfolioTemplateProps {
  /** Used in the greeting, the signature and alt text. */
  name?: string
  /** Your name in a second script, shown after the greeting. */
  localName?: string
  handle?: string
  /** Text the generated signature is drawn from. Defaults to `name`'s first word. */
  signature?: string
  years?: string
  role?: string
  /** Three short labels for every sheet's meta row. */
  disciplines?: string[]
  /** The masthead and cover wordmark. Letters, digits and basic punctuation. */
  word?: string
  /** The outlined tag behind the wordmark, e.g. "#2026". */
  tag?: string
  /** Big second-language title under the wordmark; odd parts are tinted. */
  subtitle?: string[]
  /** The three notes on the right of the masthead. */
  notes?: string[]
  blurb?: string
  greeting?: string
  /** An image URL, your own node, or nothing for the illustrated photo. */
  photo?: string | React.ReactNode
  highlights?: FolderHighlight[]
  timeline?: FolderTimelineItem[]
  categories?: FolderCategory[]
  projects?: FolderProject[]
  chapters?: FolderChapter[]
  steps?: FolderStep[]
  words?: FolderWord[]
  email?: string
  contacts?: FolderLink[]
  /** IANA zone for the footer clock. */
  timeZone?: string
  /** Override any folder colour. */
  colors?: Partial<Record<FolderTone, string>>
  /** Join "OO" into one pill, as in PORTF◯◯LIO. */
  ligatures?: boolean
  defaultTheme?: "system" | "light" | "dark"
  onThemeChange?: (theme: "light" | "dark") => void
  /** Minimum height of the page. A definite length, so it survives any host layout. */
  height?: string
  className?: string
}

// #region content
const DEFAULT_CATEGORIES: FolderCategory[] = [
  { id: "distributed", label: "Distributed Systems & Security", local: "DISTRIBUTED", tone: "blue", kind: "brand" },
  { id: "ai-ml", label: "AI, ML & Language Models", local: "AGENTIC AI", tone: "green", kind: "render" },
  { id: "saas", label: "Cloud & SaaS Products", local: "CLOUD SAAS", tone: "orange", kind: "page" },
  { id: "fullstack", label: "Full Stack & Mobile", local: "FULL STACK", tone: "yellow", kind: "poster" },
]

const DEFAULT_PROJECTS: FolderProject[] = [
  {
    title: "Distributed URL Shortener",
    local: "SYSTEM DESIGN",
    category: "distributed",
    year: "2025",
    role: "System Architect",
    tools: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Nginx"],
    mark: "HASH62",
    summary: "Base62 hash-sharded PostgreSQL architecture sustaining 3,450 req/s @ 4.2ms p95 latency.",
    body: [
      "Designed a horizontally scalable, fault-tolerant system with Base62 hash-sharded PostgreSQL and Redis cache-aside (99.4% hit rate).",
    ],
  },
]

const DEFAULT_HIGHLIGHTS: FolderHighlight[] = [
  { label: "Distributed & Cloud", tone: "blue", lines: ["AWS ECS Fargate, ALB & CloudWatch", "PostgreSQL Sharding & Redis Caching", "Docker, Microservices & CI/CD"] },
  { label: "Agentic AI & ML", tone: "green", lines: ["SSE Streaming RAG (<400ms TTFT)", "4-Tool Agentic Root-Cause Diagnosis", "CatBoost 0.86 ROC-AUC & SLMs"] },
  { label: "Full Stack Engineering", tone: "orange", lines: ["Next.js, React 19, TypeScript & Node.js", "Prisma ORM, PostgreSQL & MongoDB", "B.Tech CSE @ MACE (CGPA 8.34/10)"] },
]

const DEFAULT_TIMELINE: FolderTimelineItem[] = [
  { from: "Feb 2026", to: "Present", title: "Founder & Full Stack Cloud Developer", place: "Tutora (EdTech SaaS) • tutora.org.in" },
  { from: "Jun 2025", to: "Jul 2025", title: "Software Engineering / AI Intern", place: "Novolo.ai • Sentiment/CNN Models & AI Agents" },
  { from: "Jun 2024", to: "Feb 2026", title: "Freelance Full Stack Developer", place: "Independent • St. Mary's Cathedral & Victory Tutors" },
]

const DEFAULT_CHAPTERS: FolderChapter[] = [
  { title: "Who I Am", local: "PROFILE", points: ["Background", "Core Strengths", "Education @ MACE"], target: "about" },
  { title: "Featured Engineering", local: "SYSTEMS", points: ["Distributed URL Shortener", "DRONA-LOG (SIH 2026)", "GhostRange", "Churn Guard", "Malayalam SLM", "Tutora SaaS"], target: "work" },
  { title: "Engineering Philosophy", local: "METHODOLOGY", points: ["High Throughput", "Fault Tolerance", "Zero Hallucination AI"], target: "process" },
  { title: "Honors & Credentials", local: "HONORS", points: ["NASA Space Apps", "Amazon ML Challenge", "Wharton & IBM"], target: "words" },
  { title: "Connect & Resume", local: "CONNECT", points: ["Resume PDF", "GitHub Repos", "LinkedIn Profile", "Direct Email"], target: "contact" },
]

const DEFAULT_STEPS: FolderStep[] = [
  { title: "System Architecture & Sharding", local: "ARCH", duration: "Phase 1", body: "Designing distributed architectures, Base62 hash-sharding, Redis cache-aside policies, and sliding-window rate limiting to eliminate single points of failure under concurrency.", outputs: ["RFC & Schemas", "Sharding Strategy", "Cache Policies"] },
  { title: "Microservices & Cloud Deployment", local: "DEPLOY", duration: "Phase 2", body: "Developing decoupled microservices with TypeScript and Python. Containerizing with Docker and deploying to AWS ECS Fargate with ALB routing and GitHub Actions CI/CD.", outputs: ["Docker Images", "ECS Task Defs", "CI/CD Workflows"] },
  { title: "Agentic AI & Grounded Reasoning", local: "REASONING", duration: "Phase 3", body: "Building multi-tool agentic workflows with second-pass verifiers, vector-embedding RAG pipelines, and SSE streaming for sub-400ms time-to-first-token.", outputs: ["RAG Pipelines", "Agent Tools", "Citation Verifiers"] },
  { title: "Stress Testing & Reliability", local: "CHAOS", duration: "Phase 4", body: "Benchmarking p95 latencies under 3,450+ req/sec loads, simulating database outages to ensure 100% uptime in degraded mode, and verifying zero hallucinations.", outputs: ["Load Test Reports", "Failover Drills", "Monitoring Alerts"] },
]

const DEFAULT_WORDS: FolderWord[] = [
  { quote: "Aoi turns a messy brief into one clear page faster than anyone I've worked with. And the files are always tidy.", name: "Mei Chen", role: "Creative lead, Northwind", tone: "blue" },
  { quote: "She asks the question nobody else asked, then designs the answer. Our sale page finally stopped shouting.", name: "Daniel Ko", role: "Campaign manager", tone: "green" },
  { quote: "Calm in the week before launch, which is the rarest skill in this industry.", name: "Yuki Mori", role: "Producer, Palm Studio", tone: "orange" },
]

const DEFAULT_CONTACTS: FolderLink[] = [
  { label: "Instagram", value: "@aoilin.studio", href: "https://instagram.com" },
  { label: "Behance", value: "behance.net/aoilin", href: "https://www.behance.net" },
  { label: "RED", value: "Aoi's design notes", href: "https://www.xiaohongshu.com" },
  { label: "Dribbble", value: "dribbble.com/aoilin", href: "https://dribbble.com" },
]
// #endregion content

// #region type
// A monoline geometric alphabet, wide and round. Cap height is 100 units; each
// glyph is an SVG path drawn with a round-capped stroke, so the weight is a
// prop rather than a font file. Lower case is set in capitals.
type Glyph = { w: number; d: string }

const GLYPHS: Record<string, Glyph> = {
  A: { w: 120, d: "M0 100 L60 0 L120 100 M22 64 H98" },
  B: { w: 99, d: "M0 0 V100 M0 0 H68 A25 25 0 0 1 68 50 H0 M0 50 H74 A25 25 0 0 1 74 100 H0" },
  C: { w: 118, d: "M109.5 17.9 A62 50 0 1 0 109.5 82.1" },
  D: { w: 104, d: "M0 0 V100 M0 0 H52 A52 50 0 0 1 52 100 H0" },
  E: { w: 100, d: "M100 0 H0 V100 H100 M0 50 H86" },
  F: { w: 100, d: "M100 0 H0 V100 M0 50 H86" },
  G: { w: 124, d: "M109.5 17.9 A62 50 0 1 0 124 50 H72" },
  H: { w: 110, d: "M0 0 V100 M110 0 V100 M0 50 H110" },
  I: { w: 0, d: "M0 0 V100" },
  J: { w: 90, d: "M90 0 V58 A42 42 0 0 1 6 58" },
  K: { w: 108, d: "M0 0 V100 M104 0 L0 60 M34 40 L108 100" },
  L: { w: 92, d: "M0 0 V100 H92" },
  M: { w: 132, d: "M0 100 V0 L66 70 L132 0 V100" },
  N: { w: 110, d: "M0 100 V0 L110 100 V0" },
  O: { w: 124, d: "M62 0 A62 50 0 1 1 62 100 A62 50 0 1 1 62 0" },
  P: { w: 97, d: "M0 100 V0 H70 A27 27 0 0 1 70 54 H0" },
  Q: { w: 124, d: "M62 0 A62 50 0 1 1 62 100 A62 50 0 1 1 62 0 M84 74 L124 104" },
  R: { w: 104, d: "M0 100 V0 H70 A27 27 0 0 1 70 54 H0 M60 54 L104 100" },
  S: { w: 116, d: "M112 18 C100 4 80 0 60 0 H52 C24 0 4 10 4 27 C4 44 22 50 56 50 H64 C98 50 116 58 116 74 C116 90 96 100 64 100 H54 C32 100 12 94 0 80" },
  T: { w: 116, d: "M0 0 H116 M58 0 V100" },
  U: { w: 110, d: "M0 0 V50 A55 50 0 0 0 110 50 V0" },
  V: { w: 120, d: "M0 0 L60 100 L120 0" },
  W: { w: 160, d: "M0 0 L40 100 L80 20 L120 100 L160 0" },
  X: { w: 112, d: "M0 0 L112 100 M112 0 L0 100" },
  Y: { w: 116, d: "M0 0 L58 52 L116 0 M58 52 V100" },
  Z: { w: 114, d: "M4 0 H112 L0 100 H114" },
  "0": { w: 92, d: "M46 0 A46 50 0 1 1 46 100 A46 50 0 1 1 46 0" },
  "1": { w: 44, d: "M6 22 L44 0 V100" },
  "2": { w: 100, d: "M2 26 C6 8 26 0 50 0 C78 0 98 10 98 28 C98 50 70 56 40 70 C16 81 2 90 0 100 H100" },
  "3": { w: 100, d: "M4 10 C16 3 32 0 50 0 C78 0 96 10 96 26 C96 42 78 48 48 48 M48 48 C82 48 100 58 100 74 C100 92 80 100 50 100 C30 100 12 96 0 88" },
  "4": { w: 108, d: "M78 100 V0 L0 70 H108" },
  "5": { w: 100, d: "M96 0 H12 L6 46 C20 40 34 38 52 38 C82 38 100 50 100 69 C100 88 80 100 52 100 C30 100 12 96 0 88" },
  "6": { w: 102, d: "M88 6 C76 2 64 0 52 0 C20 0 0 22 0 52 C0 80 22 100 52 100 C82 100 102 86 102 66 C102 46 82 34 54 34 C30 34 8 44 0 58" },
  "7": { w: 104, d: "M0 0 H104 L40 100" },
  "8": { w: 100, d: "M50 0 A44 23 0 1 1 50 46 A44 23 0 1 1 50 0 M50 46 A50 27 0 1 1 50 100 A50 27 0 1 1 50 46" },
  "9": { w: 102, d: "M14 94 C26 98 38 100 50 100 C82 100 102 78 102 48 C102 20 80 0 50 0 C20 0 0 14 0 34 C0 54 20 66 48 66 C72 66 94 56 102 42" },
  "#": { w: 96, d: "M34 6 L22 94 M78 6 L66 94 M6 34 H96 M0 66 H90" },
  "-": { w: 48, d: "M0 56 H48" },
  "–": { w: 64, d: "M0 56 H64" },
  ".": { w: 0, d: "M0 99.5 L0 100" },
  ",": { w: 6, d: "M6 96 L0 112" },
  ":": { w: 0, d: "M0 44 L0 44.5 M0 99.5 L0 100" },
  "'": { w: 0, d: "M0 0 V24" },
  "’": { w: 0, d: "M0 0 V24" },
  "/": { w: 70, d: "M70 -4 L0 104" },
  "+": { w: 76, d: "M0 50 H76 M38 12 V88" },
  "(": { w: 32, d: "M32 -8 Q-12 50 32 108" },
  ")": { w: 32, d: "M0 -8 Q44 50 0 108" },
  "!": { w: 0, d: "M0 0 V70 M0 99.5 V100" },
  "?": { w: 92, d: "M0 24 C4 8 22 0 46 0 C74 0 92 10 92 28 C92 48 50 50 50 72 M50 99.5 V100" },
  "&": { w: 104, d: "M100 100 L22 30 C10 18 18 0 42 0 C64 0 72 16 60 28 L14 62 C2 72 4 100 42 100 C66 100 84 88 98 66" },
}
const SPACE = 52
const LIGATURES: Record<string, Glyph> = {
  OO: { w: 210, d: "M50 0 H160 A50 50 0 0 1 160 100 H50 A50 50 0 0 1 50 0" },
}

type Placed = { ch: string; x: number; d: string }

// Lays a string out left to right. Unknown characters become a space, so a
// wordmark never throws on an accent or an emoji, it just leaves a gap.
function layoutText(text: string, tracking: number, ligatures: boolean): { items: Placed[]; width: number } {
  const chars = [...text.toUpperCase()]
  const items: Placed[] = []
  let x = 0
  for (let i = 0; i < chars.length; i++) {
    const pair = chars[i] + (chars[i + 1] ?? "")
    if (ligatures && LIGATURES[pair]) {
      items.push({ ch: pair, x, d: LIGATURES[pair].d })
      x += LIGATURES[pair].w + tracking
      i++
      continue
    }
    const g = GLYPHS[chars[i]]
    if (!g) {
      x += SPACE
      continue
    }
    items.push({ ch: chars[i], x, d: g.d })
    x += g.w + tracking
  }
  const width = Math.max(0, items.length ? x - tracking : 0)
  return { items, width }
}

// Each "M" starts its own <path>, so the draw-on dash runs per stroke.
function splitSubpaths(d: string): string[] {
  return d.split(/(?=M)/).map((s) => s.trim()).filter(Boolean)
}
// #endregion type

// #region sign
// A seeded PRNG and a string hash, so generated art is stable per input.
function hashString(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function rng(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r1 = (n: number) => Math.round(n * 10) / 10

// #endregion sign

// #region art
// One palm frond: a curved rib with leaflets fanned along it. Used as the faint
// watermark behind the cover and as the small icon by the greeting.
function frondPath(seed: number, size = 400): string {
  const rnd = rng(seed)
  const s = size / 400
  const P = (t: number) => ({
    x: (1 - t) * (1 - t) * 40 + 2 * (1 - t) * t * 110 + t * t * 370,
    y: (1 - t) * (1 - t) * 390 + 2 * (1 - t) * t * 110 + t * t * 60,
  })
  let d = ""
  for (let t = 0.08; t < 0.97; t += 0.05) {
    const a = P(t)
    const b = P(t + 0.01)
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1
    const tx = (b.x - a.x) / len
    const ty = (b.y - a.y) / len
    const L = (40 + 120 * Math.pow(Math.sin(Math.PI * t), 0.8)) * (0.9 + rnd() * 0.2)
    for (const side of [1, -1]) {
      const nx = -ty * side
      const ny = tx * side
      const qx = a.x + (nx * 0.72 + tx * 0.7) * L
      const qy = a.y + (ny * 0.72 + ty * 0.7) * L
      const wdt = 7 + 5 * Math.sin(Math.PI * t)
      const mx = (a.x + qx) / 2
      const my = (a.y + qy) / 2
      d +=
        "M" + r1(a.x * s) + " " + r1(a.y * s) +
        " Q" + r1((mx + nx * wdt - tx * wdt) * s) + " " + r1((my + ny * wdt - ty * wdt) * s) + " " + r1(qx * s) + " " + r1(qy * s) +
        " Q" + r1((mx - nx * wdt * 0.4 + tx * wdt) * s) + " " + r1((my - ny * wdt * 0.4 + ty * wdt) * s) + " " + r1(a.x * s) + " " + r1(a.y * s) + "Z"
    }
  }
  return d
}

function initialsOf(text: string): string {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("")
}

function pad2(n: number): string {
  return (n < 10 ? "0" : "") + n
}

function markOf(p: { mark?: string; title: string }): string {
  return (p.mark || p.title.split(/\s+/)[0] || "").toUpperCase().slice(0, 6)
}
// #endregion art

const TONE_HEX: Record<FolderTone, string> = { blue: "#3a6cf4", green: "#3cc84a", orange: "#ff6a3d", yellow: "#f3e7a6" }
const TONES: FolderTone[] = ["blue", "green", "orange", "yellow"]

const SECTIONS: { id: FolderSectionId; label: string; page: string }[] = [
  { id: "cover", label: "Cover", page: "Cover page" },
  { id: "contents", label: "Contents", page: "Contents" },
  { id: "about", label: "About", page: "About me" },
  { id: "work", label: "Work", page: "Details page" },
  { id: "process", label: "Process", page: "Process" },
  { id: "words", label: "Words", page: "Evaluation" },
  { id: "contact", label: "Contact", page: "Contact" },
]

const FTP_CSS = `
.ftp-root{--ftp-bg:#eef0f4;--ftp-sheet:#ffffff;--ftp-ink:#1b2234;--ftp-soft:#4a5268;--ftp-muted:#8a91a3;--ftp-faint:#c6cad5;--ftp-line:#e3e6ed;--ftp-ghost:#e6e9f0;--ftp-glass:rgba(255,255,255,.62);--ftp-shadow:0 1px 2px rgba(27,34,52,.05),0 18px 40px -24px rgba(27,34,52,.28);position:relative;isolation:isolate;overflow-x:clip;background:var(--ftp-bg);color:var(--ftp-ink);font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","PingFang SC","Hiragino Sans","Noto Sans CJK SC","Microsoft YaHei",Arial,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.5;transition:background-color .4s ease,color .4s ease}
.ftp-root[data-theme="dark"]{--ftp-bg:#070a14;--ftp-sheet:rgba(14,21,37,.72);--ftp-ink:#f1f5f9;--ftp-soft:#cbd5e1;--ftp-muted:#94a3b8;--ftp-faint:#334155;--ftp-line:rgba(255,255,255,.1);--ftp-ghost:rgba(30,41,59,.55);--ftp-glass:rgba(15,23,42,.75);--ftp-shadow:0 24px 60px -15px rgba(0,0,0,.7),0 0 1px 1px rgba(255,255,255,.08)}
.ftp-root ::selection{background:var(--ftp-blue);color:#fff}
.ftp-root :focus-visible{outline:2px solid var(--ftp-blue);outline-offset:3px;border-radius:8px}
.ftp-root :where(button){font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit}
.ftp-root :where(a){color:inherit;text-decoration:none}
.ftp-root :where(h1,h2,h3,h4,p,ul,ol,figure,blockquote){margin:0;padding:0}
.ftp-root :where(ul,ol){list-style:none}
.ftp-root :where(svg){display:block;max-width:none;flex:none}
.ftp-root :where(img){max-width:none;display:block}
.ftp-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.ftp-wrap{max-width:1240px;margin:0 auto;padding:0 20px;position:relative;z-index:2}

/* Dynamic Cyber Backdrop & Interactive Spotlight */
.ftp-backdrop{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.ftp-spotlight{position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(900px circle at var(--mx,50vw) var(--my,25vh),rgba(59,130,246,.15),transparent 70%);opacity:.95;transition:opacity .4s ease}
.ftp-grid-bg{position:fixed;inset:0;pointer-events:none;z-index:0;background-image:radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(to right,rgba(59,130,246,.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(59,130,246,.03) 1px,transparent 1px);background-size:32px 32px,128px 128px,128px 128px;mask-image:radial-gradient(ellipse 95% 80% at 50% 30%,black 40%,transparent 95%);-webkit-mask-image:radial-gradient(ellipse 95% 80% at 50% 30%,black 40%,transparent 95%);opacity:.85}
.ftp-aurora-wrap{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.ftp-aurora-orb{position:absolute;border-radius:9999px;filter:blur(85px);opacity:.42;mix-blend-mode:screen;will-change:transform;pointer-events:none}
.ftp-aurora-1{width:560px;height:560px;left:-100px;top:40px;background:radial-gradient(circle,#3b82f6 0%,rgba(59,130,246,0) 70%);animation:ftp-float-1 20s ease-in-out infinite alternate}
.ftp-aurora-2{width:620px;height:620px;right:-120px;top:280px;background:radial-gradient(circle,#8b5cf6 0%,rgba(139,92,246,0) 70%);animation:ftp-float-2 24s ease-in-out infinite alternate}
.ftp-aurora-3{width:500px;height:500px;left:28%;top:52%;background:radial-gradient(circle,#10b981 0%,rgba(16,185,129,0) 70%);animation:ftp-float-3 22s ease-in-out infinite alternate}
.ftp-aurora-4{width:540px;height:540px;right:12%;top:78%;background:radial-gradient(circle,#06b6d4 0%,rgba(6,182,212,0) 70%);animation:ftp-float-1 28s ease-in-out infinite alternate-reverse}
@keyframes ftp-float-1{0%{transform:translate(0,0) scale(1)}50%{transform:translate(60px,40px) scale(1.1)}100%{transform:translate(-30px,80px) scale(.95)}}
@keyframes ftp-float-2{0%{transform:translate(0,0) scale(1)}50%{transform:translate(-70px,60px) scale(1.15)}100%{transform:translate(40px,-40px) scale(.9)}}
@keyframes ftp-float-3{0%{transform:translate(0,0) scale(.95)}50%{transform:translate(50px,-50px) scale(1.08)}100%{transform:translate(-60px,30px) scale(1.02)}}

/* Tactical HUD Telemetry Ribbon */
.ftp-hud-bar{display:flex;align-items:center;flex-wrap:wrap;gap:10px 18px;padding:10px 18px;margin:16px 0 22px;border-radius:14px;background:rgba(15,23,42,.65);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 8px 24px -6px rgba(0,0,0,.4);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11.5px;letter-spacing:.04em}
.ftp-hud-item{display:flex;align-items:center;gap:7px}
.ftp-hud-pulse{width:7px;height:7px;border-radius:99px;background:#10b981;box-shadow:0 0 10px #10b981;animation:ftp-hud-blink 1.8s ease-in-out infinite}
@keyframes ftp-hud-blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}
.ftp-hud-label{color:var(--ftp-muted);font-weight:600;font-size:10px;letter-spacing:.06em}
.ftp-hud-val{font-weight:700}
.ftp-hud-green{color:#34d399}
.ftp-hud-blue{color:#60a5fa}
.ftp-hud-cyan{color:#38bdf8}
.ftp-hud-orange{color:#fb923c}
.ftp-hud-sep{width:1px;height:14px;background:rgba(255,255,255,.12)}

/* Folders & Glassmorphic Shapes */
.ftp-folder{position:relative;padding-top:var(--th,30px);--fr:12px;--br:18px}
.ftp-folder[data-tone="blue"],.ftp-tabshape[data-tone="blue"],.ftp-panel[data-tone="blue"]{--c:var(--ftp-blue);--on:#ffffff;--on2:rgba(255,255,255,.75)}
.ftp-folder[data-tone="green"],.ftp-tabshape[data-tone="green"],.ftp-panel[data-tone="green"]{--c:var(--ftp-green);--on:#ffffff;--on2:rgba(255,255,255,.82)}
.ftp-folder[data-tone="orange"],.ftp-tabshape[data-tone="orange"],.ftp-panel[data-tone="orange"]{--c:var(--ftp-orange);--on:#ffffff;--on2:rgba(255,255,255,.82)}
.ftp-folder[data-tone="yellow"],.ftp-tabshape[data-tone="yellow"],.ftp-panel[data-tone="yellow"]{--c:var(--ftp-yellow);--on:#5d5434;--on2:rgba(93,84,52,.7)}
.ftp-root[data-theme="dark"] .ftp-folder[data-tone="yellow"],.ftp-root[data-theme="dark"] .ftp-tabshape[data-tone="yellow"],.ftp-root[data-theme="dark"] .ftp-panel[data-tone="yellow"]{--c:var(--ftp-yellow);--on:#fef08a;--on2:rgba(254,240,138,.8)}
.ftp-folder[data-tone="sheet"],.ftp-tabshape[data-tone="sheet"]{--c:var(--ftp-sheet);--on:var(--ftp-ink);--on2:var(--ftp-muted)}
.ftp-tabshape[data-tone="ghost"]{--c:var(--ftp-ghost);--on:var(--ftp-muted)}

.ftp-tabshape{position:relative;display:inline-flex;align-items:center;gap:8px;height:var(--th,30px);padding:0 16px;border-radius:var(--fr,12px) var(--fr,12px) 0 0;background:var(--c);color:var(--on);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;--fr:12px;transition:all .3s ease}
.ftp-tabshape::before,.ftp-tabshape::after{content:"";position:absolute;bottom:0;width:var(--fr);height:var(--fr);transition:opacity .25s}
.ftp-tabshape::before{right:100%;background:radial-gradient(circle at 0 0,transparent calc(var(--fr) - .5px),var(--c) var(--fr))}
.ftp-tabshape::after{left:100%;background:radial-gradient(circle at 100% 0,transparent calc(var(--fr) - .5px),var(--c) var(--fr))}
.ftp-tabshape[data-flush="left"]::before,.ftp-tabshape[data-flush="right"]::after{display:none}

.ftp-root[data-theme="dark"] .ftp-tabshape{background:linear-gradient(to bottom,color-mix(in srgb,var(--c) 44%,rgba(255,255,255,.15)),color-mix(in srgb,var(--c) 25%,rgba(13,19,36,.85)));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-top:1px solid color-mix(in srgb,var(--c) 65%,rgba(255,255,255,.3));border-left:1px solid color-mix(in srgb,var(--c) 45%,rgba(255,255,255,.18));border-right:1px solid color-mix(in srgb,var(--c) 45%,rgba(255,255,255,.18));box-shadow:inset 0 1px 0 rgba(255,255,255,.3)}
.ftp-root[data-theme="dark"] .ftp-tabshape::before{right:100%;background:radial-gradient(circle at 0 0,transparent calc(var(--fr) - .5px),color-mix(in srgb,var(--c) 30%,rgba(13,19,36,.85)) var(--fr))}
.ftp-root[data-theme="dark"] .ftp-tabshape::after{left:100%;background:radial-gradient(circle at 100% 0,transparent calc(var(--fr) - .5px),color-mix(in srgb,var(--c) 30%,rgba(13,19,36,.85)) var(--fr))}

.ftp-ftab{position:absolute;top:0;left:calc(var(--fr) + var(--tx,0) * (100% - var(--fr) * 2));transform:translateX(calc(var(--tx,0) * -100%))}
.ftp-ftab[data-flush="left"]{left:0;transform:none}
.ftp-ftab[data-flush="right"]{left:auto;right:0;transform:none}

/* Universal Folder Body Glassmorphism */
.ftp-fbody{position:relative;border-radius:var(--br);background:var(--c);color:var(--on);transition:all .35s ease}
.ftp-folder[data-flush="left"]>.ftp-fbody{border-top-left-radius:0}
.ftp-folder[data-flush="right"]>.ftp-fbody{border-top-right-radius:0}

.ftp-root[data-theme="dark"] .ftp-folder>.ftp-fbody{background:linear-gradient(140deg,color-mix(in srgb,var(--c) 28%,rgba(255,255,255,.06)),color-mix(in srgb,var(--c) 14%,rgba(10,15,28,.72)));backdrop-filter:blur(20px) saturate(1.4);-webkit-backdrop-filter:blur(20px) saturate(1.4);border:1px solid color-mix(in srgb,var(--c) 45%,rgba(255,255,255,.16));box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -1px 0 rgba(0,0,0,.35),0 18px 40px -14px rgba(0,0,0,.55)}
.ftp-folder[data-glass="true"]>.ftp-fbody{background:linear-gradient(var(--c) 0,var(--c) 3px,color-mix(in srgb,var(--c) 58%,transparent) 46px,color-mix(in srgb,var(--c) 40%,transparent));backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);box-shadow:inset 0 1px 0 rgba(255,255,255,.35)}

.ftp-tchip{display:inline-flex;align-items:center;height:16px;padding:0 6px;border-radius:99px;border:1.2px solid currentColor;font-size:9.5px;letter-spacing:.04em;opacity:.9}

.ftp-st{display:block;overflow:visible}
.ftp-draw{stroke-dasharray:1 1.6;stroke-dashoffset:1.03;animation:ftp-draw 1.25s cubic-bezier(.65,0,.25,1) forwards;animation-delay:calc(var(--d,0ms) + var(--i,0) * 70ms)}
.ftp-st:hover .ftp-gl{animation:ftp-wave .7s cubic-bezier(.3,1.6,.5,1) both;animation-delay:calc(var(--i,0) * 35ms)}
.ftp-sig{display:block;overflow:visible;pointer-events:none}
.ftp-sig .ftp-draw{animation-duration:2.2s;animation-timing-function:cubic-bezier(.45,0,.2,1)}
@keyframes ftp-draw{to{stroke-dashoffset:0}}
@keyframes ftp-wave{0%{transform:none}40%{transform:translateY(-12px)}100%{transform:none}}

.ftp-mast{position:relative;z-index:2}
.ftp-mast-strip{height:14px;background:var(--ftp-blue)}
.ftp-root[data-theme="dark"] .ftp-mast-strip{background:linear-gradient(90deg,#3b82f6,#8b5cf6,#10b981)}
.ftp-mast-row{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}
.ftp-mast-tab{position:relative;display:flex;align-items:center;gap:6px;padding:14px 34px 20px 22px;background:var(--ftp-blue);color:#fff;border-bottom-right-radius:34px}
.ftp-root[data-theme="dark"] .ftp-mast-tab{background:linear-gradient(135deg,rgba(59,130,246,.95),rgba(37,99,235,.85));backdrop-filter:blur(16px);box-shadow:0 12px 30px -10px rgba(59,130,246,.5),inset 0 1px 0 rgba(255,255,255,.3)}
.ftp-mast-tab::after{content:"";position:absolute;top:0;left:100%;width:34px;height:34px;background:radial-gradient(circle at 100% 100%,transparent 33.5px,var(--ftp-blue) 34px)}
.ftp-root[data-theme="dark"] .ftp-mast-tab::after{background:radial-gradient(circle at 100% 100%,transparent 33.5px,rgba(37,99,235,.85) 34px)}
.ftp-mast-tab .ftp-st{height:clamp(26px,4.2vw,46px);width:auto}
.ftp-reg{align-self:flex-start;margin-top:2px;font-size:13px;font-weight:700}
.ftp-mast-notes{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:6px 14px;padding:24px 24px 0 0;font-size:clamp(14px,1.7vw,20px);color:var(--ftp-blue);letter-spacing:.06em}
.ftp-mast-notes i{width:1.5px;height:16px;background:var(--ftp-blue);opacity:.6}

.ftp-navwrap{position:sticky;top:12px;z-index:40;display:flex;justify-content:center;padding:18px 16px 0;pointer-events:none}
.ftp-nav{pointer-events:auto;display:flex;align-items:center;gap:4px;max-width:100%;padding:6px;border-radius:20px;border:1px solid rgba(255,255,255,.12);background:var(--ftp-glass);backdrop-filter:blur(20px) saturate(1.5);-webkit-backdrop-filter:blur(20px) saturate(1.5);box-shadow:0 16px 38px -10px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.18)}
.ftp-count{display:flex;align-items:baseline;gap:3px;padding:0 10px 0 8px;font-size:12px;font-weight:700;color:var(--ftp-blue);font-variant-numeric:tabular-nums;letter-spacing:.04em}
.ftp-count small{font-size:10px;color:var(--ftp-muted);font-weight:600}
.ftp-links{position:relative;display:flex;gap:2px;overflow-x:auto;scrollbar-width:none}
.ftp-links::-webkit-scrollbar{display:none}
.ftp-ind{position:absolute;left:0;top:0;bottom:0;border-radius:11px;background:var(--ftp-blue);box-shadow:0 0 16px rgba(59,130,246,.5);transition:transform .5s cubic-bezier(.3,1.25,.4,1),width .5s cubic-bezier(.3,1.25,.4,1)}
.ftp-link{position:relative;z-index:1;height:32px;padding:0 12px;border-radius:11px;font-size:12px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--ftp-muted);white-space:nowrap;transition:color .25s}
.ftp-link:hover{color:var(--ftp-ink)}
.ftp-link[aria-current="true"]{color:#fff}
.ftp-icon{width:32px;height:32px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:var(--ftp-soft);transition:background-color .2s,color .2s}
.ftp-icon:hover{background:var(--ftp-ghost);color:var(--ftp-ink)}
.ftp-sun-rays{transform-origin:12px 12px;transition:transform .5s cubic-bezier(.3,1.4,.5,1),opacity .3s}
.ftp-sun-core{transition:r .5s cubic-bezier(.3,1.4,.5,1)}
.ftp-sun-moon{transition:cx .5s cubic-bezier(.3,1.4,.5,1),cy .5s cubic-bezier(.3,1.4,.5,1)}
.ftp-root[data-theme="dark"] .ftp-sun-rays{transform:scale(.4) rotate(45deg);opacity:0}

/* Sheets with Deep Frosted Glass */
.ftp-sheets{display:flex;flex-direction:column;gap:28px;padding:28px 0 0}
.ftp-sheet{position:relative;scroll-margin-top:80px;border-radius:26px;background:var(--ftp-sheet);box-shadow:var(--ftp-shadow);padding:22px clamp(18px,3.4vw,44px) clamp(26px,4vw,48px);overflow:hidden;transition:background-color .4s,border-color .4s,box-shadow .4s;backdrop-filter:blur(26px) saturate(1.4);-webkit-backdrop-filter:blur(26px) saturate(1.4);border:1px solid var(--ftp-line)}
.ftp-root[data-theme="dark"] .ftp-sheet{background:rgba(14,21,37,.7);backdrop-filter:blur(32px) saturate(1.5);-webkit-backdrop-filter:blur(32px) saturate(1.5);border:1px solid rgba(255,255,255,.09);box-shadow:0 24px 64px -16px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.13),inset 0 0 30px rgba(59,130,246,.02)}

.ftp-meta{display:flex;align-items:center;justify-content:space-between;gap:8px 18px;flex-wrap:wrap;font-size:10.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ftp-blue)}
.ftp-meta span[data-on="true"]{color:var(--ftp-ink)}
.ftp-meta-bar{margin:-22px calc(clamp(18px,3.4vw,44px) * -1) 0;padding:12px clamp(18px,3.4vw,44px);background:var(--ftp-green);color:#fff}
.ftp-meta-bar span[data-on="true"]{color:#fff;text-decoration:underline;text-underline-offset:3px}
.ftp-plus{position:absolute;width:13px;height:13px;color:var(--ftp-faint);pointer-events:none}
.ftp-plus::before,.ftp-plus::after{content:"";position:absolute;background:currentColor}
.ftp-plus::before{left:6px;top:0;width:1.4px;height:13px}
.ftp-plus::after{top:6px;left:0;height:1.4px;width:13px}

.ftp-head{position:relative;margin:30px 0 26px}
.ftp-head-tag{position:absolute;left:4px;top:-8px;height:clamp(22px,3vw,34px);width:auto;opacity:.9}
.ftp-head-word{position:relative;height:clamp(40px,7.4vw,92px);width:auto;max-width:100%;margin-top:14px}
.ftp-head-row{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:12px 24px}
.ftp-head-local{font-size:clamp(20px,3.2vw,36px);font-weight:800;color:var(--ftp-blue);letter-spacing:.08em;line-height:1;text-transform:uppercase}
.ftp-head-sig{display:none}
.ftp-kicker{font-size:13.5px;color:var(--ftp-muted);max-width:540px;line-height:1.6}

.ftp-cover{padding-bottom:0}
.ftp-cover-top{position:relative;margin-top:22px}
.ftp-palm{position:absolute;right:-6%;top:-18%;width:min(62%,640px);height:auto;color:var(--ftp-blue);opacity:.07;pointer-events:none;transform-origin:30% 100%;animation:ftp-sway 9s ease-in-out infinite alternate}
@keyframes ftp-sway{from{transform:rotate(-2deg)}to{transform:rotate(3deg)}}
.ftp-cover-tag{position:absolute;left:2px;top:-4px;height:clamp(26px,4.6vw,60px);width:auto}
.ftp-cover-mid{position:relative;display:grid;grid-template-columns:1.2fr 1fr;gap:20px 40px;align-items:end;margin-top:clamp(14px,2vw,24px)}
.ftp-sub{position:relative;font-size:clamp(28px,4vw,56px);font-weight:500;line-height:1.15;letter-spacing:-.01em;color:var(--ftp-muted);white-space:normal;display:flex;flex-direction:column;gap:4px;max-width:100%}
.ftp-sub span,.ftp-sub b{display:block;white-space:normal;overflow-wrap:break-word}
.ftp-sub b{font-weight:700;color:var(--ftp-blue)}
.ftp-sub-sig{display:none}
.ftp-pill{display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 6px 0 18px;border-radius:12px;background:var(--ftp-blue);color:#fff;font-size:clamp(14px,1.6vw,18px);font-weight:600;letter-spacing:.04em;transition:all .3s ease}
.ftp-root[data-theme="dark"] .ftp-pill{background:linear-gradient(135deg,rgba(59,130,246,.85),rgba(37,99,235,.7));backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.2);box-shadow:0 8px 24px -6px rgba(59,130,246,.5),inset 0 1px 0 rgba(255,255,255,.3)}
.ftp-pill-arrow{width:28px;height:28px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.18);transition:transform .35s cubic-bezier(.3,1.5,.5,1)}
.ftp-pill:hover .ftp-pill-arrow{transform:rotate(-45deg)}
.ftp-qlinks{display:flex;flex-wrap:wrap;gap:6px 14px;margin:14px 0 10px}
.ftp-qlink{font-size:13px;color:var(--ftp-blue);letter-spacing:.02em;transition:transform .25s,color .25s}
.ftp-root[data-theme="dark"] .ftp-qlink{color:#60a5fa}
.ftp-qlink:hover{transform:translateY(-2px);color:#93c5fd}
.ftp-qlink::before{content:"("}
.ftp-qlink::after{content:")"}
.ftp-blurb{font-size:12px;color:var(--ftp-muted);line-height:1.6;max-width:420px}

/* Cover Deck Folders */
.ftp-deck{position:relative;height:var(--dh,262px);margin:clamp(22px,3vw,34px) calc(clamp(18px,3.4vw,44px) * -1) 0;overflow:hidden}
.ftp-dfold{position:absolute;left:calc(var(--l) * 1%);width:calc(var(--w) * 1%);top:var(--t);transition:transform .55s cubic-bezier(.3,1.3,.4,1)}
.ftp-dfold>.ftp-fbody{height:320px;padding:18px 22px}
.ftp-dfold:hover,.ftp-dfold:focus-visible{transform:translateY(-18px);z-index:9}
.ftp-dfold:focus-visible{outline:none}
.ftp-dfold:focus-visible>.ftp-fbody{box-shadow:0 0 0 3px var(--ftp-ink)}
.ftp-dfold-btn{display:block;text-align:left}
.ftp-dl{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.ftp-dl-local{font-size:clamp(24px,3.3vw,46px);font-weight:700;letter-spacing:.04em;line-height:1.05;color:var(--on)}
.ftp-dl-n{font-size:clamp(20px,2.4vw,30px);font-weight:300;color:var(--on2);font-variant-numeric:tabular-nums}
.ftp-dl-en{margin-top:8px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--on2)}
.ftp-dl-years{position:absolute;right:22px;top:112px;font-size:clamp(28px,4vw,54px);font-weight:300;letter-spacing:.02em;color:var(--on2)}
.ftp-dfold .ftp-tabshape svg{transition:transform .35s cubic-bezier(.3,1.5,.5,1)}
.ftp-dfold:hover .ftp-tabshape svg{transform:translateX(3px)}

/* Catalog Band Folders */
.ftp-band-list{position:relative;padding-top:6px}
.ftp-band{position:relative;margin-top:-16px;filter:drop-shadow(0 -1px 0 var(--ftp-line)) drop-shadow(0 -8px 14px rgba(27,34,52,.07));transition:transform .35s ease}
.ftp-root[data-theme="dark"] .ftp-band{filter:drop-shadow(0 -1px 0 var(--ftp-line)) drop-shadow(0 -8px 16px rgba(0,0,0,.35))}
.ftp-root[data-theme="dark"] .ftp-band:hover{transform:translateY(-3px);z-index:5}
.ftp-band:first-child{margin-top:0}
.ftp-band>.ftp-fbody{transition:background-color .45s ease,color .45s ease,box-shadow .4s ease,border-color .4s ease}
.ftp-band .ftp-tabshape{transition:background-color .45s ease,color .45s ease}
.ftp-root[data-theme="dark"] .ftp-band[data-open="true"]>.ftp-fbody{border-color:var(--ftp-blue);box-shadow:0 24px 50px -12px rgba(59,130,246,.3),inset 0 1px 0 rgba(255,255,255,.3),inset 3px 0 0 var(--ftp-blue)}
.ftp-band-head{display:flex;width:100%;align-items:center;gap:clamp(14px,2.4vw,30px);padding:14px clamp(14px,2.4vw,28px) 20px;overflow:hidden;height:74px}
.ftp-band[data-open="true"] .ftp-band-head{height:auto;padding-top:22px}
.ftp-band-n{flex:none;width:30px;font-size:15px;font-weight:600;color:var(--on2);font-variant-numeric:tabular-nums}
.ftp-band-t{font-size:clamp(28px,4.8vw,58px);font-weight:800;line-height:1;letter-spacing:.02em;text-transform:uppercase;color:var(--ftp-faint);white-space:nowrap;transition:color .45s,transform .5s cubic-bezier(.3,1.3,.4,1)}
.ftp-band:hover .ftp-band-t{transform:translateX(6px)}
.ftp-band[data-open="true"] .ftp-band-t{color:var(--on);transform:none}
.ftp-band-local{display:block;margin-top:8px;font-size:clamp(20px,2.8vw,34px);font-weight:700;letter-spacing:.08em;color:var(--on)}
.ftp-band-pts{display:grid;grid-template-columns:repeat(2,minmax(0,auto));gap:6px 22px;margin-left:auto;align-self:center;font-size:13px;color:var(--on)}
.ftp-band-pts li{display:flex;align-items:center;gap:8px;white-space:nowrap}
.ftp-band-pts li::before{content:"";width:9px;height:9px;border-radius:99px;border:1.5px solid currentColor;opacity:.85}
.ftp-band-fold{display:grid;grid-template-rows:0fr;transition:grid-template-rows .55s cubic-bezier(.2,.8,.2,1)}
.ftp-band[data-open="true"] .ftp-band-fold{grid-template-rows:1fr}
.ftp-band-fold>div{overflow:hidden;min-height:0}
.ftp-band-go{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:4px clamp(14px,2.4vw,28px) 26px calc(clamp(14px,2.4vw,28px) + 30px + clamp(14px,2.4vw,30px))}
.ftp-band-go p{font-size:13px;color:var(--on2)}
.ftp-go{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 16px;border-radius:99px;background:var(--on);color:var(--c);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:transform .3s cubic-bezier(.3,1.5,.5,1)}
.ftp-go:hover{transform:translateX(4px)}

/* About Page & Photo Card */
.ftp-about{display:grid;grid-template-columns:minmax(240px,.82fr) 1.6fr;gap:clamp(20px,3.6vw,48px);align-items:start}
.ftp-photo{perspective:900px}
.ftp-photo>.ftp-folder{transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .5s cubic-bezier(.3,1.2,.4,1);transform-style:preserve-3d}
.ftp-photo-body{padding:10px}
.ftp-photo-frame{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:5/6;background:#1d2b4f}
.ftp-photo-frame>*{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ftp-photo-glass{position:absolute;left:-4px;right:-4px;bottom:-4px;display:flex;align-items:flex-end;justify-content:space-between;padding:12px 16px 14px;border-radius:14px;background:var(--ftp-glass);backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);border:1px solid rgba(255,255,255,.35);box-shadow:inset 0 1px 0 rgba(255,255,255,.3)}
.ftp-photo-glass .ftp-st{height:26px;width:auto}
.ftp-hi{display:flex;align-items:center;gap:12px;font-size:clamp(26px,3.6vw,44px);font-weight:600;color:var(--ftp-blue);line-height:1.1;letter-spacing:.01em}
.ftp-hi b{font-weight:800}
.ftp-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px 26px;margin-top:26px}
.ftp-badge{display:inline-flex;align-items:center;height:26px;padding:0 12px;border-radius:8px;background:var(--c);color:var(--on);font-size:12.5px;font-weight:700;letter-spacing:.04em;backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25);border:1px solid rgba(255,255,255,.15)}
.ftp-cols ul{margin-top:10px;font-size:12.5px;line-height:1.75;color:var(--ftp-soft)}

/* Work Experience Timeline */
.ftp-tl{margin-top:30px}
.ftp-tl-track{position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:16px}
.ftp-tl-track::before{display:none}
.ftp-tl-item{position:relative;display:flex;flex-direction:column;padding:14px 16px;border-radius:12px;border:1px solid var(--ftp-line);background:rgba(255,255,255,.03);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);transition:all .3s cubic-bezier(.16,1,.3,1);cursor:pointer}
.ftp-tl-item[data-on="true"],.ftp-tl-item:hover{border-color:var(--ftp-blue);background:rgba(59,130,246,.12);transform:translateY(-3px);box-shadow:0 12px 28px -8px rgba(59,130,246,.35),inset 0 1px 0 rgba(255,255,255,.25)}
.ftp-tl-date{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--ftp-blue);margin-bottom:6px;filter:none!important;opacity:1!important}
.ftp-tl-dot{display:none}
.ftp-tl-title{font-size:13.5px;font-weight:700;color:var(--ftp-ink);line-height:1.35}
.ftp-tl-place{font-size:12px;color:var(--ftp-muted);margin-top:4px;line-height:1.4}
.ftp-contacts{display:flex;flex-wrap:wrap;gap:10px 26px;margin-top:28px;padding-top:18px;border-top:1px dashed var(--ftp-line)}
.ftp-contact{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--ftp-soft);transition:color .2s}
.ftp-contact:hover{color:var(--ftp-blue)}
.ftp-contact i{width:20px;height:20px;border-radius:99px;display:flex;align-items:center;justify-content:center;background:var(--c);color:var(--on);font-style:normal;font-size:9px;font-weight:800}

/* Work Grid & Project Cards */
.ftp-filter{position:relative;margin-top:6px}
.ftp-tabbar{display:flex;align-items:flex-end;gap:6px;padding:12px 30px 0;overflow-x:auto;scrollbar-width:none}
.ftp-tabbar::-webkit-scrollbar{display:none}
.ftp-tabbtn{flex:none;transition:transform .35s cubic-bezier(.3,1.4,.5,1),background-color .35s,color .35s}
.ftp-tabbtn[data-on="false"]{transform:translateY(-5px);border-radius:12px}
.ftp-tabbtn[data-on="false"]::before,.ftp-tabbtn[data-on="false"]::after{opacity:0}
.ftp-tabbtn[data-on="false"]:hover{transform:translateY(-8px);color:var(--ftp-ink)}
.ftp-tabbtn .ftp-tchip{opacity:.7}
.ftp-bar{height:8px;border-radius:6px;background:var(--c);box-shadow:0 0 14px color-mix(in srgb,var(--c) 50%,transparent);transition:background-color .4s}
.ftp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:34px 22px;margin-top:30px}
.ftp-card{display:block;width:100%;text-align:left;animation:ftp-in .6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i,0) * 60ms)}
.ftp-card>.ftp-fbody{padding:12px 12px 16px;transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s ease,border-color .4s ease}
.ftp-card .ftp-ftab{transition:transform .4s cubic-bezier(.16,1,.3,1)}
.ftp-root[data-theme="dark"] .ftp-card:hover>.ftp-fbody{transform:translateY(-8px) scale(1.015);border-color:color-mix(in srgb,var(--c) 80%,rgba(255,255,255,.45));box-shadow:0 22px 48px -12px color-mix(in srgb,var(--c) 40%,rgba(0,0,0,.7)),inset 0 1px 0 rgba(255,255,255,.45),0 0 24px color-mix(in srgb,var(--c) 30%,transparent)}
.ftp-card-art{position:relative;border-radius:11px;overflow:hidden;aspect-ratio:16/11;background:rgba(255,255,255,.1)}
.ftp-card-art>*{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.ftp-card:hover .ftp-card-art>*{transform:scale(1.05)}
.ftp-card-cap{display:flex;justify-content:space-between;gap:12px;padding:12px 6px 0}
.ftp-card-t{font-size:15px;font-weight:700;line-height:1.3;color:var(--on)}
.ftp-card-l{margin-top:2px;font-size:12px;color:var(--on2)}
.ftp-card-y{font-size:12px;font-weight:600;color:var(--on2);font-variant-numeric:tabular-nums}
.ftp-empty{padding:40px 0;text-align:center;color:var(--ftp-muted);font-size:14px}

/* Process Methodology Panel */
.ftp-panel{position:relative;border-radius:22px;background:var(--c);color:var(--on);padding:clamp(22px,3.6vw,44px);transition:all .5s ease}
.ftp-root[data-theme="dark"] .ftp-panel{background:linear-gradient(140deg,color-mix(in srgb,var(--c) 26%,rgba(255,255,255,.05)),color-mix(in srgb,var(--c) 12%,rgba(10,15,28,.78)));backdrop-filter:blur(28px) saturate(1.4);-webkit-backdrop-filter:blur(28px) saturate(1.4);border:1px solid color-mix(in srgb,var(--c) 50%,rgba(255,255,255,.2));box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 24px 60px -15px rgba(0,0,0,.6)}
.ftp-step{display:grid;grid-template-columns:1.2fr 1fr;gap:24px 48px;align-items:start;animation:ftp-in .55s cubic-bezier(.2,.8,.2,1) both}
.ftp-step-n{font-size:clamp(56px,10vw,128px);font-weight:200;line-height:.9;letter-spacing:-.02em;color:var(--on2);font-variant-numeric:tabular-nums}
.ftp-step-t{margin-top:10px;font-size:clamp(26px,3.6vw,44px);font-weight:800;text-transform:uppercase;letter-spacing:.02em;line-height:1}
.ftp-step-l{margin-left:10px;font-weight:600;opacity:.75;font-size:.6em}
.ftp-step-b{font-size:15px;line-height:1.7;color:var(--on)}
.ftp-step-o{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.ftp-step-o li{padding:6px 12px;border-radius:99px;border:1.5px solid var(--on2);font-size:12.5px;font-weight:600;background:rgba(255,255,255,.06);backdrop-filter:blur(8px)}
.ftp-step-d{display:inline-block;margin-top:16px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--on2)}
.ftp-step-art{width:100%;height:auto;margin-top:22px;color:var(--on)}
.ftp-dots{display:flex;gap:6px;margin-top:22px}
.ftp-dots span{height:4px;width:18px;border-radius:9px;background:var(--on2);opacity:.45;transition:width .4s,opacity .4s}
.ftp-dots span[data-on="true"]{width:42px;opacity:1}

/* Words / Honors Section */
.ftp-words{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;padding:30px 0 10px}
.ftp-blob{position:absolute;border-radius:999px;filter:blur(30px);pointer-events:none}
.ftp-word{position:relative;transform:rotate(var(--rot));transition:transform .55s cubic-bezier(.3,1.3,.4,1)}
.ftp-word:hover,.ftp-word:focus-within{transform:rotate(0deg) translateY(-10px);z-index:3}
.ftp-word>.ftp-fbody{min-height:230px;padding:22px 22px 20px;display:flex;flex-direction:column;justify-content:space-between;gap:22px}
.ftp-word blockquote{font-size:16px;line-height:1.6;font-weight:500;color:var(--on)}
.ftp-word blockquote::before{content:"\\201C";display:block;height:30px;font-size:54px;line-height:1;font-weight:800;color:var(--on2)}
.ftp-word figcaption{font-size:12.5px;color:var(--on2)}
.ftp-word figcaption b{display:block;font-size:14px;color:var(--on)}

/* Contact Stack */
.ftp-stack{position:relative;margin-top:8px}
.ftp-stack>.ftp-folder{margin-top:-20px}
.ftp-stack>.ftp-folder:first-child{margin-top:0}
.ftp-stack .ftp-fbody{padding:clamp(20px,3vw,36px) clamp(20px,3.4vw,42px)}
.ftp-root[data-theme="dark"] .ftp-stack .ftp-folder>.ftp-fbody{box-shadow:0 20px 45px -12px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.2)}
.ftp-talk{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.ftp-talk .ftp-st{height:clamp(44px,8.4vw,108px);width:auto;max-width:100%}
.ftp-talk p{max-width:320px;font-size:14px;color:var(--on2)}
.ftp-mail{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px 20px;min-width:0;overflow:hidden}
.ftp-mail-a{font-size:clamp(18px,2.4vw,34px);font-weight:700;letter-spacing:.01em;color:var(--on);max-width:100%;word-break:break-word;overflow-wrap:anywhere;background-image:linear-gradient(currentColor,currentColor);background-size:0 3px;background-repeat:no-repeat;background-position:0 100%;transition:background-size .45s cubic-bezier(.2,.8,.2,1)}
.ftp-mail-a:hover{background-size:100% 3px}
.ftp-btns{display:flex;gap:10px;flex-shrink:0}
.ftp-btn{display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 18px;border-radius:12px;background:var(--on);color:var(--c);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;transition:transform .3s cubic-bezier(.3,1.5,.5,1),box-shadow .3s ease}
.ftp-btn[data-ghost="true"]{background:transparent;color:var(--on);box-shadow:inset 0 0 0 1.5px var(--on2)}
.ftp-btn:hover{transform:translateY(-2px);box-shadow:0 8px 18px -4px rgba(0,0,0,.4)}
.ftp-btn:active{transform:scale(.97)}

/* Else / Profile Links Cards */
.ftp-else{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}
.ftp-else a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-radius:14px;background:rgba(255,255,255,.04);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.08);color:var(--ftp-ink);min-width:0;overflow:hidden;transition:all .28s cubic-bezier(.16,1,.3,1)}
.ftp-else a:hover{background:var(--ftp-blue);color:#fff;border-color:rgba(255,255,255,.3);transform:translateY(-2px);box-shadow:0 10px 24px -6px rgba(59,130,246,.4)}
.ftp-else a>span{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:600}
.ftp-else small{display:block;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;opacity:.7;margin-bottom:3px;font-weight:700}
.ftp-else svg{flex-shrink:0;transition:transform .3s cubic-bezier(.3,1.5,.5,1)}
.ftp-else a:hover svg{transform:translate(2px,-2px)}

/* Footer */
.ftp-foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px 24px;padding:34px 4px 40px;color:var(--ftp-blue);font-size:clamp(15px,1.8vw,20px);letter-spacing:.06em;text-transform:uppercase}
.ftp-foot small{display:block;font-size:11px;letter-spacing:.1em;color:var(--ftp-muted)}
.ftp-foot-n{font-size:clamp(22px,2.8vw,34px);font-weight:300;font-variant-numeric:tabular-nums}
.ftp-top{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;color:var(--ftp-ink);text-transform:uppercase}
.ftp-top:hover{color:var(--ftp-blue)}
.ftp-clock{display:inline-flex;align-items:center;gap:8px;font-variant-numeric:tabular-nums;font-size:12px;letter-spacing:.08em;color:var(--ftp-muted)}
.ftp-clock i{width:7px;height:7px;border-radius:9px;background:var(--ftp-faint)}
.ftp-clock i[data-day="true"]{background:var(--ftp-orange)}

/* Modal Dialog with Deep Frosted Glass */
.ftp-overlay{position:fixed;inset:0;z-index:80;overflow-y:auto;display:flex;align-items:flex-start;justify-content:center;padding:6vh 16px 40px;background:rgba(5,8,18,.7);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);animation:ftp-fade .25s ease both}
.ftp-modal{width:100%;max-width:980px;animation:ftp-up .5s cubic-bezier(.2,.9,.25,1.05) both}
.ftp-modal>.ftp-fbody{padding:18px;border-radius:24px;box-shadow:0 40px 100px -20px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.3)}
.ftp-modal-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:6px}
.ftp-modal-art{position:relative;border-radius:14px;overflow:hidden;aspect-ratio:16/11;background:rgba(255,255,255,.1)}
.ftp-modal-art>*{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ftp-modal-info{display:flex;flex-direction:column;gap:14px;padding:12px 14px 6px 22px;color:var(--on)}
.ftp-modal-t{font-size:clamp(22px,2.6vw,30px);font-weight:800;line-height:1.15}
.ftp-modal-l{font-size:15px;color:var(--on2);font-weight:600;letter-spacing:.06em}
.ftp-modal-p{font-size:14px;line-height:1.7}
.ftp-modal-p+.ftp-modal-p{margin-top:-4px}
.ftp-dl2{display:grid;grid-template-columns:auto 1fr;gap:6px 18px;font-size:13px;padding:14px 0;border-top:1px solid var(--on2);border-bottom:1px solid var(--on2)}
.ftp-dl2 dt{color:var(--on2);text-transform:uppercase;letter-spacing:.1em;font-size:11px;padding-top:2px}
.ftp-dl2 dd{margin:0;font-weight:600}
.ftp-modal-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:auto;padding-top:6px}
.ftp-close{position:absolute;right:10px;top:-38px;height:28px;padding:0 12px;border-radius:9px 9px 0 0;display:inline-flex;align-items:center;gap:6px;background:var(--c);color:var(--on);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}

.ftp-toast{position:fixed;left:50%;bottom:24px;z-index:90;display:flex;align-items:center;gap:8px;padding:11px 18px;border-radius:14px;background:var(--ftp-blue);color:#fff;font-size:14px;font-weight:600;box-shadow:0 14px 30px -12px rgba(0,0,0,.45);animation:ftp-toast .4s cubic-bezier(.2,.9,.3,1.2) both}

.ftp-rv{opacity:0;transform:translateY(22px);transition:opacity .8s ease,transform .9s cubic-bezier(.2,.8,.2,1)}
.ftp-rv[data-in="true"]{opacity:1;transform:none}
.ftp-twinkle{animation:ftp-twinkle 3.2s ease-in-out infinite;animation-delay:var(--dl,0s)}
.ftp-shimmer{animation:ftp-shimmer 6s ease-in-out infinite alternate}
@keyframes ftp-twinkle{0%,100%{opacity:.95}50%{opacity:.25}}
@keyframes ftp-shimmer{from{transform:translateX(-10px)}to{transform:translateX(10px)}}
@keyframes ftp-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes ftp-up{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
@keyframes ftp-fade{from{opacity:0}to{opacity:1}}
@keyframes ftp-toast{from{opacity:0;transform:translate(-50%,14px) scale(.96)}to{opacity:1;transform:translate(-50%,0)}}

@media (max-width:900px){
.ftp-about{grid-template-columns:1fr}
.ftp-photo{max-width:360px}
.ftp-cols{grid-template-columns:1fr 1fr}
.ftp-step{grid-template-columns:1fr}
.ftp-words{grid-template-columns:1fr;gap:12px}
.ftp-modal-grid{grid-template-columns:1fr}
.ftp-modal-info{padding:16px 8px 6px}
.ftp-band-pts{display:none}
}
@media (max-width:720px){
.ftp-hud-sep{display:none}
.ftp-hud-bar{gap:8px 14px}
.ftp-mast-notes{display:none}
.ftp-cover-mid{grid-template-columns:1fr}
.ftp-sub{font-size:clamp(22px,6.5vw,36px);line-height:1.15}
.ftp-deck{height:var(--dhm)}
.ftp-dfold{left:3%;width:94%;top:var(--mt)}
.ftp-dfold:hover{transform:translateY(-10px)}
.ftp-dl-years{display:none}
.ftp-cols{grid-template-columns:1fr}
.ftp-tl-track{grid-template-columns:1fr;gap:10px}
.ftp-tl-track::before{display:none}
.ftp-tl-item{display:flex;flex-direction:column;padding:12px 14px}
.ftp-tl-dot{display:none}
.ftp-count{display:none}
.ftp-meta span:nth-child(n+3):not([data-on="true"]){display:none}
.ftp-band-go{padding-left:clamp(14px,2.4vw,28px);flex-direction:column;align-items:flex-start}
.ftp-band-t{font-size:clamp(22px,7vw,40px)}
.ftp-head-sig{left:auto;right:4%}
.ftp-plus{display:none}
.ftp-band[data-open="true"] .ftp-band-t{white-space:normal;overflow-wrap:anywhere}
}
@media (prefers-reduced-motion:reduce){
.ftp-root *,.ftp-root *::before,.ftp-root *::after{animation:none !important;transition-duration:.01ms !important}
.ftp-draw{stroke-dasharray:none;stroke-dashoffset:0}
.ftp-rv{opacity:1;transform:none}
}
`

type Theme = "light" | "dark"
type Vars = React.CSSProperties & Record<`--${string}`, string | number>

const useIsoLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

/* ------------------------------------------------------------------ type */

function StrokeText({
  text,
  weight = 8,
  outline = 0,
  tracking = 26,
  ligatures = true,
  color = "currentColor",
  inner = "var(--ftp-sheet)",
  delay = 0,
  className,
  label,
  decorative,
}: {
  text: string
  weight?: number
  /** Width of the outline line, in glyph units. 0 draws a solid stroke. */
  outline?: number
  tracking?: number
  ligatures?: boolean
  color?: string
  /** Fill colour of the hollow inside an outlined stroke. */
  inner?: string
  delay?: number
  className?: string
  label?: string
  decorative?: boolean
}) {
  const L = React.useMemo(() => layoutText(text, tracking + weight * 0.6, ligatures), [text, tracking, weight, ligatures])
  const p = weight / 2 + 2
  const vbW = r1(L.width + p * 2)
  const vbH = r1(124 + p * 2)
  const layers = outline > 0 ? [{ c: color, w: weight }, { c: inner, w: Math.max(0.5, weight - outline * 2) }] : [{ c: color, w: weight }]
  return (
    <svg
      className={"ftp-st" + (className ? " " + className : "")}
      viewBox={r1(-p) + " " + r1(-12 - p) + " " + vbW + " " + vbH}
      width={vbW}
      height={vbH}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : (label ?? text)}
      aria-hidden={decorative ? true : undefined}
      style={{ "--d": delay + "ms" } as Vars}
    >
      {layers.map((layer, li) => (
        <g key={li} fill="none" stroke={layer.c} strokeWidth={layer.w} strokeLinecap="round" strokeLinejoin="round">
          {L.items.map((g, i) => (
            <g key={i} transform={"translate(" + r1(g.x) + " 0)"}>
              <g className="ftp-gl" style={{ "--i": i } as Vars}>
                {splitSubpaths(g.d).map((sp, j) => (
                  <path key={j} d={sp} pathLength={1} className="ftp-draw" />
                ))}
              </g>
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}


/* ---------------------------------------------------------------- folder */

function Folder({
  tone,
  tab,
  tabAt = 0.1,
  glass,
  as = "div",
  className,
  bodyClass,
  style,
  children,
  ...rest
}: {
  tone: FolderTone | "sheet"
  tab?: React.ReactNode
  /** 0 is flush left, 1 flush right, anything between slides along the top. */
  tabAt?: number
  glass?: boolean
  as?: "div" | "button" | "article" | "li" | "figure"
  className?: string
  bodyClass?: string
  style?: React.CSSProperties
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLElement>, "style" | "className">) {
  const flush = tabAt <= 0 ? "left" : tabAt >= 1 ? "right" : undefined
  const Tag = as as "div"
  return (
    <Tag
      {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      className={"ftp-folder" + (className ? " " + className : "")}
      data-tone={tone}
      data-glass={glass ? "true" : undefined}
      data-flush={flush}
      style={{ ...style, "--tx": Math.min(1, Math.max(0, tabAt)) } as Vars}
    >
      {tab != null && (
        <span className="ftp-tabshape ftp-ftab" data-tone={tone} data-flush={flush}>
          {tab}
        </span>
      )}
      <div className={"ftp-fbody" + (bodyClass ? " " + bodyClass : "")}>{children}</div>
    </Tag>
  )
}

type TabItem = { id: string; label: React.ReactNode; tone: FolderTone; count?: number }

// A row of folder tabs. The selected one drops onto the panel and grows its
// shoulders; the rest float just above it. Arrow keys, Home and End move.
function TabBar({ items, active, onChange, label, idBase }: { items: TabItem[]; active: string; onChange: (id: string) => void; label: string; idBase: string }) {
  const refs = React.useRef([] as (HTMLButtonElement | null)[])
  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = -1
    if (e.key === "ArrowRight") n = (i + 1) % items.length
    else if (e.key === "ArrowLeft") n = (i - 1 + items.length) % items.length
    else if (e.key === "Home") n = 0
    else if (e.key === "End") n = items.length - 1
    if (n < 0) return
    e.preventDefault()
    onChange(items[n].id)
    refs.current[n]?.focus()
  }
  return (
    <div className="ftp-tabbar" role="tablist" aria-label={label}>
      {items.map((it, i) => {
        const on = it.id === active
        return (
          <button
            key={it.id}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="tab"
            id={idBase + "-tab-" + it.id}
            aria-selected={on}
            aria-controls={idBase + "-panel"}
            tabIndex={on ? 0 : -1}
            className="ftp-tabshape ftp-tabbtn"
            data-tone={on ? it.tone : "ghost"}
            data-on={on ? "true" : "false"}
            onClick={() => onChange(it.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {it.label}
            {it.count != null && <span className="ftp-tchip">{pad2(it.count)}</span>}
          </button>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------- art */

function Arrow({ size = 14, dir = "right" }: { size?: number; dir?: "right" | "down" | "up" | "left" | "ne" }) {
  const rot = { right: 0, down: 90, left: 180, up: -90, ne: -45 }[dir]
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ transform: "rotate(" + rot + "deg)" }}>
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PalmIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M15.5 30c.6-6 .9-11 .2-17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 13C12 7 6 7 2.5 10.5 7 9.5 11 10.5 16 13Zm0 0c1-6 6-10 11.5-8.5C22 5 18.5 8 16 13Zm0 0c4.5-3 10-2 13 2.5-4.5-2-8.5-2.5-13-2.5Zm0 0C10.5 11 5 14 4 19c3.5-4 7-5.5 12-6Zm0 0c-1-4.5-4-8.5-8.5-10C10 6 13 9 16 13Z" fill="currentColor" />
    </svg>
  )
}

function Palm({ className }: { className?: string }) {
  const d = React.useMemo(() => frondPath(7), [])
  const d2 = React.useMemo(() => frondPath(19, 300), [])
  return (
    <svg className={className} viewBox="0 0 420 420" width={420} height={420} aria-hidden="true">
      <path d={d} fill="currentColor" />
      <g transform="translate(150 150) rotate(28 150 150)">
        <path d={d2} fill="currentColor" opacity=".7" />
      </g>
      <path d="M40 390 Q110 110 370 60" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

// The illustrated "photo": a harbour skyline at dusk, a ferry, a rocky shore
// and someone looking out over it. Lit windows twinkle; the water shimmers.
function PhotoScene({ name, seed }: { name: string; seed: number }) {
  const id = React.useId().replace(/:/g, "")
  const scene = React.useMemo(() => {
    const rnd = rng(seed)
    const blds: { x: number; w: number; h: number; spire: boolean }[] = []
    let x = -6
    while (x < 306) {
      const w = 14 + rnd() * 26
      const tall = rnd() < 0.18
      blds.push({ x, w, h: tall ? 90 + rnd() * 40 : 26 + rnd() * 52, spire: tall && rnd() < 0.6 })
      x += w + (rnd() < 0.3 ? 2 : 0)
    }
    const wins: { x: number; y: number; on: boolean; dl: number }[] = []
    for (const b of blds) {
      for (let wy = 196 - b.h + 6; wy < 190; wy += 7) {
        for (let wx = b.x + 3; wx < b.x + b.w - 4; wx += 6) {
          if (rnd() < 0.34) wins.push({ x: wx, y: wy, on: rnd() < 0.2, dl: rnd() * 3 })
        }
      }
    }
    const rocks = Array.from({ length: 14 }, () => ({ x: rnd() * 300, y: 300 + rnd() * 56, rx: 4 + rnd() * 12, ry: 2 + rnd() * 5 }))
    return { blds, wins, rocks }
  }, [seed])
  return (
    <svg viewBox="0 0 300 360" width={300} height={360} preserveAspectRatio="xMidYMid slice" role="img" aria-label={"Photo of " + name}>
      <defs>
        <linearGradient id={id + "-sky"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b4a8f" />
          <stop offset=".42" stopColor="#6d8ed2" />
          <stop offset=".72" stopColor="#d9b4c9" />
          <stop offset="1" stopColor="#f5d2b0" />
        </linearGradient>
        <linearGradient id={id + "-sea"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6a7fb4" />
          <stop offset=".5" stopColor="#3a5288" />
          <stop offset="1" stopColor="#1f2f55" />
        </linearGradient>
        <linearGradient id={id + "-coat"} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#24252c" />
          <stop offset=".6" stopColor="#111217" />
          <stop offset="1" stopColor="#060608" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={"url(#" + id + "-sky)"} />
      <circle cx="232" cy="172" r="16" fill="#ffe2c2" opacity=".7" />
      <g fill="#273863">
        {scene.blds.map((b, i) => (
          <g key={i}>
            <rect x={r1(b.x)} y={r1(196 - b.h)} width={r1(b.w)} height={r1(b.h)} />
            {b.spire && <rect x={r1(b.x + b.w / 2 - 1)} y={r1(196 - b.h - 18)} width="2" height="18" />}
          </g>
        ))}
      </g>
      <g>
        {scene.wins.map((w, i) => (
          <rect key={i} x={r1(w.x)} y={r1(w.y)} width="2.4" height="2.8" fill={i % 5 ? "#ffd68a" : "#a8dcff"} className={w.on ? "ftp-twinkle" : undefined} style={w.on ? ({ "--dl": r1(w.dl) + "s" } as Vars) : undefined} opacity=".9" />
        ))}
      </g>
      <rect y="196" width="300" height="104" fill={"url(#" + id + "-sea)"} />
      <g fill="#273863" opacity=".35" transform="translate(0 392) scale(1 -1)">
        {scene.blds.map((b, i) => (
          <rect key={i} x={r1(b.x)} y={r1(196 - b.h * 0.6)} width={r1(b.w)} height={r1(b.h * 0.6)} />
        ))}
      </g>
      <g className="ftp-shimmer" stroke="#ffe0b0" strokeLinecap="round" opacity=".55">
        {[206, 214, 223, 233, 246, 262].map((y, i) => (
          <line key={y} x1={30 + ((i * 47) % 140)} x2={70 + ((i * 47) % 140) + i * 9} y1={y} y2={y} strokeWidth={1.2 + i * 0.2} />
        ))}
      </g>
      <g transform="translate(48 204)">
        <path d="M0 8 H58 L52 14 H6 Z" fill="#e9edf6" />
        <rect x="10" y="2" width="34" height="6" rx="1" fill="#f5f7fb" />
        <rect x="16" y="-3" width="16" height="5" rx="1" fill="#dfe6f3" />
        {[13, 19, 25, 31, 37].map((wx) => (
          <rect key={wx} x={wx} y="4" width="3" height="2" fill="#ffcf7a" className="ftp-twinkle" style={{ "--dl": wx / 20 + "s" } as Vars} />
        ))}
      </g>
      <path d="M0 296 C40 284 70 292 110 286 C160 278 200 290 240 282 C268 277 288 284 300 280 V360 H0Z" fill="#2a2522" />
      <g fill="#3b3430">
        {scene.rocks.map((r, i) => (
          <ellipse key={i} cx={r1(r.x)} cy={r1(r.y)} rx={r1(r.rx)} ry={r1(r.ry)} />
        ))}
      </g>
      <g>
        <path d="M142 360 C138 316 140 262 152 236 C160 218 178 210 196 212 C214 214 226 228 232 254 C238 284 240 326 238 360 Z" fill={"url(#" + id + "-coat)"} />
        <path d="M176 214 C180 224 186 230 194 232 C198 226 200 220 200 213 C192 210 184 210 176 214Z" fill="#0a0a0d" />
        <rect x="181" y="198" width="14" height="18" rx="5" fill="#d9b49a" />
        <ellipse cx="186" cy="184" rx="16" ry="19" fill="#e2bfa3" />
        <path d="M170 182 C166 160 182 152 198 157 C208 161 207 177 204 190 C200 182 196 176 188 172 C181 172 174 176 170 182Z" fill="#131315" />
        <path d="M171 186 C169 190 170 194 173 195" fill="none" stroke="#c99f84" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M156 262 C160 276 168 288 178 292" fill="none" stroke="#2c2d35" strokeWidth="2" strokeLinecap="round" />
        <rect x="172" y="282" width="14" height="22" rx="3" fill="#d6393b" transform="rotate(-12 179 293)" />
      </g>
    </svg>
  )
}

// Generated project covers, five styles keyed by category. Stable per title.
function CoverArt({ kind, seed, mark, colors }: { kind: CoverKind; seed: number; mark: string; colors: Record<FolderTone, string> }) {
  const id = React.useId().replace(/:/g, "")
  const rnd = rng(seed)
  const pick = (): string => colors[TONES[Math.floor(rnd() * TONES.length)]]
  const font = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"
  const common = { viewBox: "0 0 320 220", width: 320, height: 220, preserveAspectRatio: "xMidYMid slice", "aria-hidden": true } as const

  // AI & ML: Neural networks, vector attention graphs, tensor matrices
  if (kind === "render") {
    const accent = pick()
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0b1120" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill={"url(#" + id + "-bg)"} />
        <path d="M0 44 H320 M0 88 H320 M0 132 H320 M0 176 H320 M64 0 V220 M128 0 V220 M192 0 V220 M256 0 V220" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        <g stroke={accent} strokeWidth="1.2" opacity="0.6">
          <line x1="50" y1="70" x2="120" y2="50" />
          <line x1="50" y1="70" x2="120" y2="100" />
          <line x1="50" y1="130" x2="120" y2="100" />
          <line x1="50" y1="130" x2="120" y2="150" />
          <line x1="120" y1="50" x2="190" y2="60" />
          <line x1="120" y1="100" x2="190" y2="110" />
          <line x1="120" y1="150" x2="190" y2="160" />
          <line x1="190" y1="60" x2="260" y2="100" />
          <line x1="190" y1="110" x2="260" y2="100" />
          <line x1="190" y1="160" x2="260" y2="100" />
        </g>
        <g fill="#0f172a" stroke={accent} strokeWidth="2">
          <circle cx="50" cy="70" r="8" fill={accent} />
          <circle cx="50" cy="130" r="8" />
          <circle cx="120" cy="50" r="9" />
          <circle cx="120" cy="100" r="10" fill={colors.green} stroke={colors.green} />
          <circle cx="120" cy="150" r="9" />
          <circle cx="190" cy="60" r="9" />
          <circle cx="190" cy="110" r="10" fill={accent} />
          <circle cx="190" cy="160" r="9" />
          <circle cx="260" cy="100" r="11" fill="#38bdf8" stroke="#38bdf8" />
        </g>
        <circle cx="260" cy="100" r="22" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5" />
        <rect x="18" y="14" width="8" height="8" rx="4" fill="#ef4444" opacity="0.8" />
        <rect x="30" y="14" width="8" height="8" rx="4" fill="#f59e0b" opacity="0.8" />
        <rect x="42" y="14" width="8" height="8" rx="4" fill="#10b981" opacity="0.8" />
        <text x="58" y="22" fontFamily={font} fontSize="10" fontWeight="700" fill="#94a3b8">
          {"[AGENTIC_AI]"}
        </text>
        <rect x="18" y="180" width="130" height="24" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke={accent} strokeWidth="1" />
        <text x="28" y="196" fontFamily={font} fontSize="11" fontWeight="700" letterSpacing="1.5" fill="#f8fafc">
          {mark + " // MODEL"}
        </text>
      </svg>
    )
  }

  // Cloud Telemetry & Observability
  if (kind === "page") {
    const accent = pick()
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={id + "-dash"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill={"url(#" + id + "-dash)"} />
        <rect x="16" y="16" width="288" height="32" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="32" cy="32" r="5" fill="#10b981" />
        <text x="44" y="36" fontFamily={font} fontSize="11" fontWeight="700" fill="#38bdf8">
          {"AWS ECS // 3,450 req/s"}
        </text>
        <text x="290" y="36" textAnchor="end" fontFamily={font} fontSize="10" fontWeight="600" fill="#94a3b8">
          {"p95: 4.2ms"}
        </text>
        <g transform="translate(16 60)">
          <rect width="288" height="96" rx="8" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(255,255,255,0.08)" />
          <line x1="12" y1="30" x2="276" y2="30" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
          <line x1="12" y1="60" x2="276" y2="60" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
          <path d="M 12 75 Q 40 40 70 65 T 120 50 T 170 35 T 220 55 T 276 25" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 12 75 Q 40 40 70 65 T 120 50 T 170 35 T 220 55 T 276 25 L 276 90 L 12 90 Z" fill={accent} opacity="0.15" />
          <circle cx="276" cy="25" r="4" fill="#ffffff" stroke={accent} strokeWidth="2" />
        </g>
        <g transform="translate(16 168)">
          <rect width="90" height="24" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1" />
          <text x="45" y="16" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="700" fill="#34d399">
            {"CACHE 99.4%"}
          </text>
          <rect x="98" y="0" width="94" height="24" rx="6" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1" />
          <text x="145" y="16" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="700" fill="#7dd3fc">
            {"SHARDED DB"}
          </text>
          <text x="288" y="17" textAnchor="end" fontFamily={font} fontSize="14" fontWeight="800" fill="#f8fafc">
            {mark}
          </text>
        </g>
      </svg>
    )
  }

  // Quantitative Algorithms & Mathematical Optimization
  if (kind === "sale") {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={id + "-quant"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#18181b" />
            <stop offset="100%" stopColor="#27272a" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill={"url(#" + id + "-quant)"} />
        <line x1="30" y1="20" x2="30" y2="180" stroke="#52525b" strokeWidth="1.5" />
        <line x1="30" y1="180" x2="300" y2="180" stroke="#52525b" strokeWidth="1.5" />
        <text x="25" y="18" textAnchor="end" fontFamily={font} fontSize="9" fill="#a1a1aa">{"RETURN"}</text>
        <text x="300" y="196" textAnchor="end" fontFamily={font} fontSize="9" fill="#a1a1aa">{"RISK (σ)"}</text>
        <g fill="#71717a" opacity="0.4">
          <circle cx="80" cy="140" r="2.5" />
          <circle cx="110" cy="130" r="3" />
          <circle cx="130" cy="145" r="2.5" />
          <circle cx="150" cy="120" r="3" />
          <circle cx="170" cy="110" r="2" />
          <circle cx="190" cy="95" r="3" />
          <circle cx="210" cy="90" r="2.5" />
          <circle cx="230" cy="80" r="3" />
        </g>
        <path d="M 60 170 C 80 110, 140 55, 280 40" fill="none" stroke={colors.orange} strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="150" x2="260" y2="25" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="165" cy="72" r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
        <rect x="178" y="58" width="112" height="22" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" strokeWidth="0.75" />
        <text x="184" y="73" fontFamily={font} fontSize="9.5" fontWeight="700" fill="#38bdf8">
          {"SHARPE MAX: 1.84"}
        </text>
        <rect x="30" y="188" width="90" height="20" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke={colors.orange} strokeWidth="1" />
        <text x="75" y="202" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="700" fill={colors.orange}>
          {mark}
        </text>
      </svg>
    )
  }

  // Distributed Systems & Infrastructure
  if (kind === "brand") {
    const bg = pick()
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={id + "-dist"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#020617" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill={"url(#" + id + "-dist)"} />
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" fill="none">
          <circle cx="160" cy="110" r="70" />
          <circle cx="160" cy="110" r="40" />
        </g>
        <g stroke={bg} strokeWidth="1.5" opacity="0.6">
          <line x1="160" y1="40" x2="225" y2="85" />
          <line x1="225" y1="85" x2="225" y2="145" />
          <line x1="225" y1="145" x2="160" y2="180" />
          <line x1="160" y1="180" x2="95" y2="145" />
          <line x1="95" y1="145" x2="95" y2="85" />
          <line x1="95" y1="85" x2="160" y2="40" />
          <line x1="160" y1="110" x2="160" y2="40" />
          <line x1="160" y1="110" x2="225" y2="145" />
          <line x1="160" y1="110" x2="95" y2="145" />
        </g>
        <g fill="#020617" stroke={bg} strokeWidth="2">
          <rect x="146" y="28" width="28" height="24" rx="4" />
          <rect x="211" y="73" width="28" height="24" rx="4" fill={bg} />
          <rect x="211" y="133" width="28" height="24" rx="4" />
          <rect x="146" y="168" width="28" height="24" rx="4" />
          <rect x="81" y="133" width="28" height="24" rx="4" fill={bg} />
          <rect x="81" y="73" width="28" height="24" rx="4" />
          <circle cx="160" cy="110" r="14" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
        </g>
        <text x="160" y="114" textAnchor="middle" fontFamily={font} fontSize="9" fontWeight="800" fill="#ffffff">
          {"RAFT"}
        </text>
        <text x="18" y="24" fontFamily={font} fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#38bdf8">
          {"[CLUSTER_SHARDING]"}
        </text>
        <text x="302" y="204" textAnchor="end" fontFamily={font} fontSize="14" fontWeight="800" fill="#f8fafc">
          {mark}
        </text>
      </svg>
    )
  }

  // Developer Terminal & API Microservices (poster)
  return (
    <svg {...common}>
      <defs>
        <linearGradient id={id + "-term"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill={"url(#" + id + "-term)"} />
      <rect x="16" y="16" width="288" height="188" rx="8" fill="#020617" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="32" cy="32" r="4.5" fill="#ef4444" />
      <circle cx="45" cy="32" r="4.5" fill="#f59e0b" />
      <circle cx="58" cy="32" r="4.5" fill="#10b981" />
      <text x="80" y="36" fontFamily={font} fontSize="9" fill="#64748b">{"api.router.ts"}</text>
      <g fontFamily={font} fontSize="10.5">
        <text x="32" y="62" fill="#c084fc">{"export async function "} <tspan fill="#60a5fa">{"handler"}</tspan><tspan fill="#e2e8f0">{"(req) {"}</tspan></text>
        <text x="44" y="82" fill="#94a3b8">{"  const session = await auth(req);"}</text>
        <text x="44" y="102" fill="#94a3b8">{"  const stream = await rag.pipe({"}</text>
        <text x="56" y="122" fill="#34d399">{"    model: 'gemini-embedding',"}</text>
        <text x="56" y="142" fill="#f59e0b">{"    ttft: '<400ms'"}</text>
        <text x="44" y="162" fill="#94a3b8">{"  });"}</text>
        <text x="44" y="182" fill="#38bdf8">{"  return new Response(stream);"}</text>
        <text x="32" y="196" fill="#e2e8f0">{"}"}</text>
      </g>
      <text x="266" y="190" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="700" fill="#60a5fa">
        {mark}
      </text>
    </svg>
  )
}

function StepArt({ index }: { index: number }) {
  // Four tiny diagrams: a magnifier over dots, a ranked list, a grid with a
  // highlighted cell, and a stack of outgoing files.
  return (
    <svg className="ftp-step-art" viewBox="0 0 320 120" width={320} height={120} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {index % 4 === 0 && (
        <g>
          {Array.from({ length: 18 }, (_, i) => (
            <circle key={i} cx={20 + (i % 9) * 22} cy={30 + Math.floor(i / 9) * 40} r={i === 6 ? 6 : 3} fill={i === 6 ? "currentColor" : "none"} />
          ))}
          <circle cx="160" cy="44" r="30" />
          <path d="M182 66 L214 98" strokeWidth="5" />
        </g>
      )}
      {index % 4 === 1 && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <text x="10" y={22 + i * 28} fontSize="14" fontWeight="700" fill="currentColor" stroke="none">
                {pad2(i + 1)}
              </text>
              <rect x="44" y={10 + i * 28} width={230 - i * 46} height="14" rx="7" fill={i === 0 ? "currentColor" : "none"} />
            </g>
          ))}
        </g>
      )}
      {index % 4 === 2 && (
        <g>
          {Array.from({ length: 12 }, (_, i) => (
            <rect key={i} x={10 + (i % 6) * 50} y={10 + Math.floor(i / 6) * 54} width="42" height="46" rx="8" fill={i === 3 || i === 8 ? "currentColor" : "none"} />
          ))}
        </g>
      )}
      {index % 4 === 3 && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={"translate(" + (20 + i * 30) + " " + (40 - i * 12) + ")"}>
              <path d="M0 14 H24 L34 4 H70 V76 H0Z" fill={i === 2 ? "currentColor" : "none"} />
            </g>
          ))}
          <path d="M190 58 H290 M262 34 L292 58 L262 82" strokeWidth="4" />
        </g>
      )}
    </svg>
  )
}

function ThemeIcon({ dark }: { dark: boolean }) {
  const id = React.useId().replace(/:/g, "") + "-moon"
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <mask id={id}>
        <rect width="24" height="24" fill="#fff" />
        <circle className="ftp-sun-moon" cx={dark ? 16 : 30} cy={dark ? 7 : -6} r="6.5" fill="#000" />
      </mask>
      <circle className="ftp-sun-core" cx="12" cy="12" r={dark ? 8 : 4.5} fill="currentColor" mask={"url(#" + id + ")"} />
      <g className="ftp-sun-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 1.5v2.2M12 20.3v2.2M1.5 12h2.2M20.3 12h2.2M4.6 4.6l1.5 1.5M17.9 17.9l1.5 1.5M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------- component */

const DECK_SLOTS = [
  { l: 0, w: 38, t: 8, tab: 0.16 },
  { l: 28, w: 34, t: 0, tab: 0.7 },
  { l: 57, w: 43, t: 14, tab: 0.12 },
  { l: 2, w: 41, t: 70, tab: 0.06 },
  { l: 24, w: 39, t: 92, tab: 0.5 },
  { l: 60, w: 40, t: 100, tab: 0.3 },
]

export default function FolderTabPortfolioTemplate({
  name = "Athul Sunil Kumar",
  localName = "",
  handle = "@athul-dev-sys",
  years = "2024–2026",
  role = "Full Stack Software Engineer",
  disciplines = ["Distributed Systems & Cloud", "Agentic AI & ML", "Full-Stack Platforms"],
  word = "Portfolio",
  tag = "#ATHUL",
  subtitle = ["Systems &", " Intelligence"],
  notes = ["High Throughput", "Low Latency", "Fault Tolerant"],
  blurb = "Full Stack Software Engineer specializing in high-concurrency cloud architectures (AWS ECS, Kafka, Redis, PostgreSQL), resilient microservices, and production Agentic AI/ML systems. Founder of Tutora EdTech SaaS.",
  greeting = "Hello, I'm",
  photo,
  highlights = DEFAULT_HIGHLIGHTS,
  timeline = DEFAULT_TIMELINE,
  categories = DEFAULT_CATEGORIES,
  projects = DEFAULT_PROJECTS,
  chapters = DEFAULT_CHAPTERS,
  steps = DEFAULT_STEPS,
  words = DEFAULT_WORDS,
  email = "athulsunilkumar6@gmail.com",
  contacts = DEFAULT_CONTACTS,
  timeZone = "Asia/Kolkata",
  colors,
  ligatures = true,
  defaultTheme = "system",
  onThemeChange,
  height = "100svh",
  className,
}: FolderTabPortfolioTemplateProps) {
  const uid = React.useId().replace(/:/g, "")
  const rootRef = React.useRef(null as HTMLDivElement | null)
  const sheetRefs = React.useRef({} as Partial<Record<FolderSectionId, HTMLElement | null>>)
  const linkRefs = React.useRef({} as Partial<Record<FolderSectionId, HTMLButtonElement | null>>)
  const listRef = React.useRef(null as HTMLDivElement | null)
  const lastFocus = React.useRef(null as HTMLElement | null)
  const closeRef = React.useRef(null as HTMLButtonElement | null)
  const photoRef = React.useRef(null as HTMLDivElement | null)

  const palette = React.useMemo(() => ({ ...TONE_HEX, ...colors }) as Record<FolderTone, string>, [colors])
  const firstName = name.split(/\s+/)[0] || name

  const [theme, setTheme] = React.useState<Theme>(defaultTheme === "dark" ? "dark" : "light")
  const [current, setCurrent] = React.useState<FolderSectionId>("cover")
  const [chapter, setChapter] = React.useState(0)
  const [filter, setFilter] = React.useState("all")
  const [step, setStep] = React.useState(0)
  const [tlOn, setTlOn] = React.useState(Math.max(0, timeline.length - 1))
  const [openProject, setOpenProject] = React.useState(null as number | null)
  const [toast, setToast] = React.useState(null as { id: number; text: string } | null)
  const [ind, setInd] = React.useState({ x: 0, w: 0 })
  const [clock, setClock] = React.useState(null as { time: string; day: boolean } | null)

  const catById = React.useMemo(() => {
    const m: Record<string, FolderCategory> = {}
    for (const c of categories) m[c.id] = c
    return m
  }, [categories])
  const toneOf = (catId: string): FolderTone => catById[catId]?.tone ?? "blue"
  const kindOf = (catId: string): CoverKind => catById[catId]?.kind ?? "poster"
  const countOf = (catId: string) => projects.filter((p) => p.category === catId).length

  const sections = React.useMemo(
    () =>
      SECTIONS.filter((s) => {
        if (s.id === "contents") return chapters.length > 0
        if (s.id === "work") return projects.length > 0
        if (s.id === "process") return steps.length > 0
        if (s.id === "words") return words.length > 0
        return true
      }),
    [chapters.length, projects.length, steps.length, words.length],
  )
  const pageNo = (id: FolderSectionId) => sections.findIndex((s) => s.id === id) + 1

  const shown = React.useMemo(
    () => projects.map((p, i) => ({ p, i })).filter(({ p }) => filter === "all" || p.category === filter),
    [projects, filter],
  )

  // "system" follows the host: its .dark class first (shadcn), then the OS.
  React.useEffect(() => {
    if (defaultTheme !== "system") return
    const dark =
      document.documentElement.classList.contains("dark") ||
      (typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches)
    setTheme(dark ? "dark" : "light")
  }, [defaultTheme])

  const toggleTheme = React.useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark"
      onThemeChange?.(next)
      return next
    })
  }, [onThemeChange])

  const say = React.useCallback((text: string) => setToast({ id: Date.now(), text }), [])
  React.useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const copyEmail = React.useCallback(() => {
    const done = () => say("Copied " + email)
    const fallback = () => {
      const ta = document.createElement("textarea")
      ta.value = email
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
        done()
      } catch {
        say(email)
      }
      ta.remove()
    }
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(email).then(done, fallback)
    else fallback()
  }, [email, say])

  const goTo = React.useCallback((id: FolderSectionId) => {
    const el = sheetRefs.current[id]
    if (!el) return
    const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
  }, [])

  const openCategory = (catId: string) => {
    setFilter(catId)
    goTo("work")
  }

  // Which sheet is under the middle of the viewport drives the nav and counter.
  React.useEffect(() => {
    if (typeof IntersectionObserver !== "function") return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent((e.target as HTMLElement).dataset.sheet as FolderSectionId)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const s of sections) {
      const el = sheetRefs.current[s.id]
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [sections])

  // Lower sheets rise in once as they arrive. Without an observer they are simply shown.
  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>(".ftp-rv"))
    if (typeof IntersectionObserver !== "function") {
      els.forEach((el) => (el.dataset.in = "true"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).dataset.in = "true"
            io.unobserve(e.target)
          }
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  // The nav's blue pill slides to the current link, which scrolls into view on narrow screens.
  useIsoLayoutEffect(() => {
    const el = linkRefs.current[current]
    if (!el) return
    setInd({ x: el.offsetLeft, w: el.offsetWidth })
    const list = listRef.current
    if (list && list.scrollWidth > list.clientWidth) list.scrollTo({ left: el.offsetLeft - list.clientWidth / 2 + el.offsetWidth / 2, behavior: "smooth" })
  }, [current, sections])

  React.useEffect(() => {
    const tick = () => {
      try {
        const now = new Date()
        const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(now)
        const h = Number(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone }).format(now))
        setClock({ time, day: h >= 7 && h < 19 })
      } catch {
        setClock(null)
      }
    }
    tick()
    const t = setInterval(tick, 30000)
    return () => clearInterval(t)
  }, [timeZone])

  // Details sheet: Esc closes, arrows page through what the filter shows.
  const openAt = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null
    setOpenProject(i)
  }
  const closeProject = React.useCallback(() => {
    setOpenProject(null)
    lastFocus.current?.focus?.()
  }, [])
  const stepProject = React.useCallback(
    (dir: number) => {
      setOpenProject((cur) => {
        if (cur == null || !shown.length) return cur
        const at = shown.findIndex((s) => s.i === cur)
        return shown[(at + dir + shown.length) % shown.length].i
      })
    },
    [shown],
  )
  React.useEffect(() => {
    if (openProject == null) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject()
      else if (e.key === "ArrowRight") stepProject(1)
      else if (e.key === "ArrowLeft") stepProject(-1)
    }
    addEventListener("keydown", onKey)
    return () => removeEventListener("keydown", onKey)
  }, [openProject, closeProject, stepProject])

  const onPhotoMove = (e: React.PointerEvent) => {
    const el = photoRef.current
    if (!el || e.pointerType !== "mouse") return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty("--ry", (px * 10).toFixed(2) + "deg")
    el.style.setProperty("--rx", (-py * 10).toFixed(2) + "deg")
  }
  const onPhotoLeave = () => {
    photoRef.current?.style.setProperty("--ry", "0deg")
    photoRef.current?.style.setProperty("--rx", "0deg")
  }

  const onRootPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = rootRef.current
    if (!el || e.pointerType !== "mouse") return
    el.style.setProperty("--mx", `${e.clientX}px`)
    el.style.setProperty("--my", `${e.clientY}px`)
  }

  const rootStyle = {
    minHeight: height,
    "--ftp-blue": palette.blue,
    "--ftp-green": palette.green,
    "--ftp-orange": palette.orange,
    "--ftp-yellow": palette.yellow,
  } as Vars

  const sheetProps = (id: FolderSectionId) => ({
    id: uid + "-" + id,
    "data-sheet": id,
    ref: (el: HTMLElement | null) => {
      sheetRefs.current[id] = el
    },
    "aria-labelledby": uid + "-" + id + "-h",
  })

  const meta = (id: FolderSectionId, bar?: boolean) => (
    <div className={"ftp-meta" + (bar ? " ftp-meta-bar" : "")} aria-hidden="true">
      <span>{years}</span>
      {disciplines.slice(0, 3).map((d) => (
        <span key={d}>{d}</span>
      ))}
      <span data-on="true">{SECTIONS.find((s) => s.id === id)?.page}</span>
      <span>{pad2(pageNo(id)) + " / " + pad2(sections.length)}</span>
    </div>
  )

  const head = (id: FolderSectionId, tagText: string, wordText: string, opts: { local?: string; kicker?: string; withSig?: boolean } = {}) => (
    <div className="ftp-head">
      <span className="ftp-plus" style={{ left: -18, top: -6 }} />
      <span className="ftp-plus" style={{ right: -18, top: -6 }} />
      <StrokeText text={tagText} className="ftp-head-tag" weight={9} outline={1.6} color="var(--ftp-faint)" decorative />
      <div className="ftp-head-row">
        <h2 id={uid + "-" + id + "-h"} style={{ minWidth: 0, flex: "1 1 auto" }}>
          <StrokeText text={wordText} className="ftp-head-word" weight={10} outline={2.2} color="var(--ftp-blue)" ligatures={ligatures} />
        </h2>
        {opts.local && <span className="ftp-head-local">{opts.local}</span>}
      </div>
      {opts.kicker && <p className="ftp-kicker" style={{ marginTop: 14 }}>{opts.kicker}</p>}
    </div>
  )

  const deck = categories.slice(0, DECK_SLOTS.length)
  const deckOrder = deck.map((c, i) => ({ c, i, slot: DECK_SLOTS[i] })).sort((a, b) => a.slot.t - b.slot.t)
  const project = openProject != null ? projects[openProject] : null
  const filterItems: TabItem[] = [
    { id: "all", label: "All", tone: "blue", count: projects.length },
    ...categories.filter((c) => countOf(c.id) > 0).map((c) => ({ id: c.id, label: c.label, tone: c.tone, count: countOf(c.id) })),
  ]
  const filterTone = filter === "all" ? "blue" : toneOf(filter)
  const quick = categories.slice(0, 3)
  const stepTone = (i: number): FolderTone => TONES[i % TONES.length]

  return (
    <div
      ref={rootRef}
      className={"ftp-root" + (className ? " " + className : "")}
      data-theme={theme}
      style={rootStyle}
      onPointerMove={onRootPointerMove}
    >
      <style>{FTP_CSS}</style>

      {/* Dynamic Cyber Backdrop with Aurora Orbs and Interactive Spotlight */}
      <div className="ftp-backdrop" aria-hidden="true">
        <div className="ftp-spotlight" />
        <div className="ftp-grid-bg" />
        <div className="ftp-aurora-wrap">
          <div className="ftp-aurora-orb ftp-aurora-1" />
          <div className="ftp-aurora-orb ftp-aurora-2" />
          <div className="ftp-aurora-orb ftp-aurora-3" />
          <div className="ftp-aurora-orb ftp-aurora-4" />
        </div>
      </div>

      {/* masthead */}
      <header className="ftp-mast">
        <div className="ftp-mast-strip" />
        <div className="ftp-mast-row">
          <div className="ftp-mast-tab">
            <StrokeText text={word} weight={17} tracking={20} color="#ffffff" ligatures={ligatures} label={word + ", " + name} />
            <span className="ftp-reg" aria-hidden="true">®</span>
          </div>
          <div className="ftp-mast-notes">
            {notes.map((n, i) => (
              <React.Fragment key={n + i}>
                {i > 0 && <i aria-hidden="true" />}
                <span>{n}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* sticky nav */}
      <div className="ftp-navwrap">
        <nav className="ftp-nav" aria-label="Portfolio pages">
          <span className="ftp-count" aria-hidden="true">
            {pad2(pageNo(current))}
            <small>/{pad2(sections.length)}</small>
          </span>
          <div className="ftp-links" ref={listRef}>
            <span className="ftp-ind" style={{ transform: "translateX(" + ind.x + "px)", width: ind.w, opacity: ind.w ? 1 : 0 }} />
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                ref={(el) => {
                  linkRefs.current[s.id] = el
                }}
                className="ftp-link"
                aria-current={current === s.id ? "true" : undefined}
                onClick={() => goTo(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <button type="button" className="ftp-icon" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            <ThemeIcon dark={theme === "dark"} />
          </button>
        </nav>
      </div>

      <main className="ftp-wrap ftp-sheets">
        {/* cover */}
        <section className="ftp-sheet ftp-cover" {...sheetProps("cover")}>
          {meta("cover", true)}

          {/* Tactical HUD Telemetry Ribbon */}
          <div className="ftp-hud-bar" aria-label="System status telemetry">
            <div className="ftp-hud-item">
              <span className="ftp-hud-pulse" />
              <span className="ftp-hud-label">CLUSTER STATUS:</span>
              <span className="ftp-hud-val ftp-hud-green">ONLINE [AWS ECS]</span>
            </div>
            <div className="ftp-hud-sep" />
            <div className="ftp-hud-item">
              <span className="ftp-hud-label">P95 LATENCY:</span>
              <span className="ftp-hud-val ftp-hud-blue">4.2ms @ 3,450 req/s</span>
            </div>
            <div className="ftp-hud-sep" />
            <div className="ftp-hud-item">
              <span className="ftp-hud-label">CACHE HIT:</span>
              <span className="ftp-hud-val ftp-hud-cyan">99.4% [REDIS]</span>
            </div>
            <div className="ftp-hud-sep" />
            <div className="ftp-hud-item">
              <span className="ftp-hud-label">AI INFERENCE:</span>
              <span className="ftp-hud-val ftp-hud-orange">SSE STREAMING (&lt;400ms)</span>
            </div>
          </div>
          <div className="ftp-cover-top">
            <Palm className="ftp-palm" />
            <span className="ftp-plus" style={{ left: -14, top: 8 }} />
            <span className="ftp-plus" style={{ right: -14, top: 8 }} />
            <StrokeText text={tag} className="ftp-cover-tag" weight={8} outline={1.4} color="var(--ftp-muted)" decorative />
            <h1 id={uid + "-cover-h"} style={{ position: "relative" }}>
              <StrokeText text={word} className="ftp-cover-word" weight={9} outline={1.9} tracking={22} color="var(--ftp-blue)" ligatures={ligatures} delay={150} label={word + " — " + name} />
            </h1>
          </div>
          <div className="ftp-cover-mid">
            <div className="ftp-sub">
              {subtitle.map((s, i) => (i % 2 ? <b key={i}>{s}</b> : <span key={i}>{s}</span>))}
            </div>
            <div>
              <button type="button" className="ftp-pill" onClick={() => goTo("about")}>
                {localName ? localName + " · " : ""}
                {role}
                <span className="ftp-pill-arrow">
                  <Arrow dir="down" />
                </span>
              </button>
              <div className="ftp-qlinks">
                {quick.map((c) => (
                  <button key={c.id} type="button" className="ftp-qlink" onClick={() => openCategory(c.id)}>
                    {c.label}
                  </button>
                ))}
              </div>
              <p className="ftp-blurb">{blurb}</p>
            </div>
          </div>
          {deck.length > 0 && (
            <div className="ftp-deck" style={{ "--dhm": 54 * deck.length + 140 + "px" } as Vars}>
              {deckOrder.map(({ c, i, slot }) => (
                <Folder
                  key={c.id}
                  as="button"
                  tone={c.tone}
                  glass
                  tabAt={slot.tab}
                  className="ftp-dfold ftp-dfold-btn"
                  style={{ "--l": slot.l, "--w": slot.w, "--t": slot.t + "px", "--mt": i * 54 + "px" } as Vars}
                  tab={
                    <>
                      {c.label}
                      <span className="ftp-tchip">{pad2(countOf(c.id))}</span>
                      <Arrow size={11} />
                    </>
                  }
                  onClick={() => openCategory(c.id)}
                  aria-label={"Open " + c.label + ", " + countOf(c.id) + " projects"}
                >
                  <span className="ftp-dl">
                    <span className="ftp-dl-local">{c.local || c.label}</span>
                    <span className="ftp-dl-n">{pad2(i + 1)}</span>
                  </span>
                  <span className="ftp-dl-en" style={{ display: "block" }}>
                    {c.label} · {countOf(c.id)} {countOf(c.id) === 1 ? "project" : "projects"}
                  </span>
                  {i === 2 && <span className="ftp-dl-years">{years}</span>}
                </Folder>
              ))}
            </div>
          )}
        </section>

        {/* contents */}
        {chapters.length > 0 && (
          <section className="ftp-sheet ftp-rv" {...sheetProps("contents")}>
            {meta("contents")}
            {head("contents", "(" + pad2(chapters.length) + ")", "Catalogs", { local: "INDEX", kicker: "Table of contents for " + name + "'s " + years + " portfolio. Open a folder to see what is inside." })}
            <div className="ftp-band-list">
              {chapters.map((ch, i) => {
                const open = chapter === i
                const slot = [0.62, 0.08, 0.84, 0.3, 0.7, 0.18][i % 6]
                return (
                  <Folder
                    key={ch.title + i}
                    tone={open ? "blue" : "sheet"}
                    glass
                    tabAt={slot}
                    className="ftp-band"
                    data-open={open ? "true" : "false"}
                    tab={
                      <>
                        {"Program " + (i + 1)}
                        <Arrow size={12} />
                      </>
                    }
                  >
                    <button type="button" className="ftp-band-head" aria-expanded={open} aria-controls={uid + "-ch-" + i} onClick={() => setChapter(open ? -1 : i)}>
                      <span className="ftp-band-n">{pad2(i + 1)}</span>
                      <span style={{ minWidth: 0 }}>
                        <span className="ftp-band-t" style={{ display: "block" }}>{ch.title}</span>
                        {open && ch.local && <span className="ftp-band-local">{ch.local}</span>}
                      </span>
                      {open && ch.points && ch.points.length > 0 && (
                        <ul className="ftp-band-pts">
                          {ch.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </button>
                    <div className="ftp-band-fold" id={uid + "-ch-" + i}>
                      <div>
                        {ch.target && sections.some((s) => s.id === ch.target) && (
                          <div className="ftp-band-go">
                            <p>{"Chapter " + pad2(i + 1) + " · page " + pad2(pageNo(ch.target))}</p>
                            <button type="button" className="ftp-go" tabIndex={open ? 0 : -1} onClick={() => goTo(ch.target as FolderSectionId)}>
                              Open chapter <Arrow size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Folder>
                )
              })}
            </div>
          </section>
        )}

        {/* about */}
        <section className="ftp-sheet ftp-rv" {...sheetProps("about")}>
          {meta("about")}
          {head("about", "#" + firstName, "About me", { local: "PROFILE" })}
          <div className="ftp-about">
            <div className="ftp-photo" ref={photoRef} onPointerMove={onPhotoMove} onPointerLeave={onPhotoLeave}>
              <Folder tone="blue" glass tabAt={0.08} tab={initialsOf(name) + " · " + handle.replace(/^@/, "").split(".")[0]} bodyClass="ftp-photo-body">
                <div className="ftp-photo-frame">
                  {typeof photo === "string" ? (
                    <img src={photo} alt={name} width={300} height={360} style={{ maxWidth: "none" }} />
                  ) : photo != null ? (
                    photo
                  ) : (
                    <PhotoScene name={name} seed={hashString(name)} />
                  )}
                </div>
                <div className="ftp-photo-glass" style={{ color: "var(--ftp-blue)" }}>
                  <PalmIcon size={28} />
                  <StrokeText text={years.split(/[–-]/).pop() || years} weight={9} color="var(--ftp-ink)" decorative />
                </div>
              </Folder>
            </div>
            <div>
              <p className="ftp-hi">
                <span style={{ color: "var(--ftp-blue)" }}>
                  <PalmIcon size={34} />
                </span>
                <span>
                  {greeting} <b>{localName || name}</b>!
                  {localName ? <span style={{ fontWeight: 500, fontSize: ".5em", marginLeft: 12, color: "var(--ftp-muted)" }}>{name}</span> : null}
                </span>
              </p>
              <p className="ftp-kicker" style={{ marginTop: 12, maxWidth: 560 }}>{blurb}</p>
              {highlights.length > 0 && (
                <div className="ftp-cols">
                  {highlights.map((h, i) => (
                    <div key={h.label + i}>
                      <span className="ftp-badge" style={{ background: palette[h.tone ?? (i % 2 ? "blue" : "green")], color: h.tone === "yellow" ? "#5d5434" : "#fff" }}>
                        {h.label}
                      </span>
                      <ul>
                        {h.lines.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {timeline.length > 0 && (
                <div className="ftp-tl">
                  <span className="ftp-badge" style={{ background: palette.blue, color: "#fff" }}>Work experience</span>
                  <ol className="ftp-tl-track" style={{ "--n": timeline.length } as Vars}>
                    {timeline.map((t, i) => (
                      <li key={t.from + i} className="ftp-tl-item" data-on={tlOn === i ? "true" : "false"} onPointerEnter={() => setTlOn(i)} onFocus={() => setTlOn(i)} tabIndex={0}>
                        <span className="ftp-tl-date" style={{ display: "block" }}>
                          {t.from}–{t.to}
                        </span>
                        <span className="ftp-tl-dot" />
                        <span style={{ display: "block" }}>
                          <span className="ftp-tl-title" style={{ display: "block" }}>{t.title}</span>
                          {t.place && <span className="ftp-tl-place">{t.place}</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {contacts.length > 0 && (
                <div className="ftp-contacts">
                  {contacts.map((c, i) => {
                    const tone = TONES[i % 3]
                    const inner = (
                      <>
                        <i style={{ background: palette[tone], color: "#fff" }}>{c.label.slice(0, 1)}</i>
                        {c.value}
                      </>
                    )
                    return c.href ? (
                      <a key={c.label} className="ftp-contact" href={c.href} target="_blank" rel="noreferrer" aria-label={c.label + ": " + c.value}>
                        {inner}
                      </a>
                    ) : (
                      <span key={c.label} className="ftp-contact">
                        {inner}
                      </span>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* work */}
        {projects.length > 0 && (
          <section className="ftp-sheet ftp-rv" {...sheetProps("work")}>
            {meta("work")}
            {head("work", "(" + pad2(projects.length) + ")", "Featured Systems", { local: "PROJECTS", kicker: "Filter system cabinets by domain. Select any folder to inspect architecture diagrams, metrics, and implementation specs." })}
            <div className="ftp-filter">
              <TabBar items={filterItems} active={filter} onChange={setFilter} label="Filter work by category" idBase={uid + "-wf"} />
              <div className="ftp-bar" style={{ "--c": palette[filterTone] } as Vars} />
            </div>
            <div className="ftp-grid" role="tabpanel" id={uid + "-wf-panel"} aria-labelledby={uid + "-wf-tab-" + filter} key={filter}>
              {shown.map(({ p, i }, k) => {
                const tone = toneOf(p.category)
                return (
                  <Folder
                    key={p.title + i}
                    as="button"
                    tone={tone}
                    glass
                    tabAt={(k * 0.37) % 1 > 0.85 ? 0.85 : (k * 0.37) % 1}
                    className="ftp-card"
                    style={{ "--i": k } as Vars}
                    tab={
                      <>
                        {catById[p.category]?.label ?? p.category}
                        <span className="ftp-tchip">{pad2(i + 1)}</span>
                      </>
                    }
                    onClick={() => openAt(i)}
                    aria-haspopup="dialog"
                    aria-label={p.title + ", " + p.year + ". Open details"}
                  >
                    <span className="ftp-card-art" style={{ display: "block" }}>
                      {p.image ? <img src={p.image} alt="" width={320} height={220} style={{ maxWidth: "none" }} /> : <CoverArt kind={kindOf(p.category)} seed={hashString(p.title)} mark={markOf(p)} colors={palette} />}
                    </span>
                    <span className="ftp-card-cap">
                      <span>
                        <span className="ftp-card-t" style={{ display: "block" }}>{p.title}</span>
                        {p.local && <span className="ftp-card-l" style={{ display: "block" }}>{p.local}</span>}
                      </span>
                      <span className="ftp-card-y">{p.year}</span>
                    </span>
                  </Folder>
                )
              })}
              {!shown.length && <p className="ftp-empty">This folder is empty for now.</p>}
            </div>
          </section>
        )}

        {/* process */}
        {steps.length > 0 && (
          <section className="ftp-sheet ftp-rv" {...sheetProps("process")}>
            {meta("process")}
            {head("process", "(" + pad2(steps.length) + ")", "Engineering Methodology", { local: "SYSTEMS LIFE-CYCLE" })}
            <TabBar
              items={steps.map((s, i) => ({ id: String(i), label: pad2(i + 1) + " " + s.title, tone: stepTone(i) }))}
              active={String(Math.min(step, steps.length - 1))}
              onChange={(id) => setStep(Number(id))}
              label="Process steps"
              idBase={uid + "-ps"}
            />
            {(() => {
              const i = Math.min(step, steps.length - 1)
              const s = steps[i]
              return (
                <div className="ftp-panel" data-tone={stepTone(i)} role="tabpanel" id={uid + "-ps-panel"} aria-labelledby={uid + "-ps-tab-" + i}>
                  <div className="ftp-step" key={i}>
                    <div>
                      <div className="ftp-step-n">{pad2(i + 1)}</div>
                      <h3 className="ftp-step-t">
                        {s.title}
                        {s.local && <span className="ftp-step-l">{s.local}</span>}
                      </h3>
                      {s.duration && <span className="ftp-step-d">{s.duration}</span>}
                      <StepArt index={i} />
                    </div>
                    <div>
                      <p className="ftp-step-b">{s.body}</p>
                      {s.outputs && s.outputs.length > 0 && (
                        <ul className="ftp-step-o">
                          {s.outputs.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      )}
                      <div className="ftp-dots" aria-hidden="true">
                        {steps.map((_, j) => (
                          <span key={j} data-on={j === i ? "true" : "false"} />
                        ))}
                      </div>
                      <div className="ftp-btns" style={{ marginTop: 22 }}>
                        <button type="button" className="ftp-btn" data-ghost="true" onClick={() => setStep((i - 1 + steps.length) % steps.length)} aria-label="Previous step">
                          <Arrow dir="left" />
                        </button>
                        <button type="button" className="ftp-btn" onClick={() => setStep((i + 1) % steps.length)}>
                          Next step <Arrow />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </section>
        )}

        {/* words */}
        {words.length > 0 && (
          <section className="ftp-sheet ftp-rv" {...sheetProps("words")}>
            {meta("words")}
            {head("words", "(" + pad2(words.length) + ")", "Honors & Impact", { local: "ACHIEVEMENTS" })}
            <div className="ftp-words">
              <span className="ftp-blob" style={{ left: "8%", top: "18%", width: 220, height: 220, background: palette.blue, opacity: 0.85 }} />
              <span className="ftp-blob" style={{ left: "46%", top: "40%", width: 180, height: 180, background: palette.green, opacity: 0.85 }} />
              <span className="ftp-blob" style={{ right: "6%", top: "8%", width: 150, height: 150, background: palette.orange, opacity: 0.8 }} />
              {words.map((w, i) => (
                <Folder
                  key={w.name + i}
                  as="figure"
                  tone={w.tone ?? TONES[i % 3]}
                  glass
                  tabAt={[0.1, 0.5, 0.86][i % 3]}
                  className="ftp-word"
                  style={{ "--rot": [-2, 1.5, -1][i % 3] + "deg" } as Vars}
                  tab={w.name.split(/\s+/)[0]}
                >
                  <blockquote>{w.quote}</blockquote>
                  <figcaption>
                    <b>{w.name}</b>
                    {w.role}
                  </figcaption>
                </Folder>
              ))}
            </div>
          </section>
        )}

        {/* contact */}
        <section className="ftp-sheet ftp-rv" {...sheetProps("contact")}>
          {meta("contact")}
          {head("contact", "(:)", "Contact & Connect", { local: "COLLABORATION" })}
          <div className="ftp-stack">
            <Folder tone="blue" glass tabAt={0.78} tab={<>Reflections <Arrow size={12} /></>}>
              <div className="ftp-talk">
                <StrokeText text="Let's build :)" weight={15} tracking={22} color="#ffffff" label="Let's build" />
                <p>Open to software engineering roles, high-concurrency architecture challenges, and frontier AI systems. Inquiries, discussions, and coffee chats are always welcome.</p>
              </div>
            </Folder>
            <Folder tone="green" glass tabAt={0.56} tab={<>Direct Mail <Arrow size={12} /></>}>
              <div className="ftp-mail">
                <a className="ftp-mail-a" href={"mailto:" + email}>
                  {email}
                </a>
                <div className="ftp-btns">
                  <button type="button" className="ftp-btn" onClick={copyEmail}>
                    Copy
                  </button>
                  <a className="ftp-btn" data-ghost="true" href={"mailto:" + email}>
                    Write <Arrow dir="ne" />
                  </a>
                </div>
              </div>
            </Folder>
            {contacts.length > 0 && (
              <Folder tone="sheet" glass tabAt={0.3} tab={<>Profiles & Links <Arrow size={12} /></>} style={{ filter: "drop-shadow(0 -6px 14px rgba(27,34,52,.08))" }}>
                <div className="ftp-else">
                  {contacts.map((c) => (
                    <a key={c.label} href={c.href || "#"} target={c.href ? "_blank" : undefined} rel="noreferrer">
                      <span>
                        <small>{c.label}</small>
                        {c.value}
                      </span>
                      <Arrow dir="ne" />
                    </a>
                  ))}
                </div>
              </Folder>
            )}
          </div>
        </section>

        <footer className="ftp-foot">
          <span>
            {disciplines[0] || "Distributed Systems"}
            <small>
              © {years.split(/[–-]/).pop()} {name}
            </small>
          </span>
          <span className="ftp-foot-brand" style={{ fontWeight: 700, letterSpacing: '0.08em', color: 'var(--ftp-blue)' }}>ATHUL SUNIL KUMAR</span>
          {clock && (
            <span className="ftp-clock">
              <i data-day={clock.day ? "true" : "false"} />
              {clock.time} · {timeZone.split("/").pop()?.replace(/_/g, " ")}
            </span>
          )}
          <button type="button" className="ftp-top" onClick={() => goTo("cover")}>
            Back to cover <Arrow dir="up" size={12} />
          </button>
          <span className="ftp-foot-n" aria-hidden="true">{pad2(pageNo(current))}</span>
        </footer>
      </main>

      {/* details sheet */}
      {project && (
        <div className="ftp-overlay" onClick={(e) => e.target === e.currentTarget && closeProject()}>
          <Folder
            tone={toneOf(project.category)}
            glass
            tabAt={0.04}
            className="ftp-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={uid + "-dlg-t"}
            tab={
              <>
                {catById[project.category]?.label ?? project.category}
                <span className="ftp-tchip">{pad2((openProject ?? 0) + 1)}</span>
              </>
            }
          >
            <button type="button" ref={closeRef} className="ftp-close" onClick={closeProject} aria-label="Close details">
              Close ✕
            </button>
            <div className="ftp-modal-grid" key={openProject}>
              <div className="ftp-modal-art">
                {project.image ? <img src={project.image} alt="" width={320} height={220} style={{ maxWidth: "none" }} /> : <CoverArt kind={kindOf(project.category)} seed={hashString(project.title)} mark={markOf(project)} colors={palette} />}
              </div>
              <div className="ftp-modal-info" style={{ animation: "ftp-in .5s cubic-bezier(.2,.8,.2,1) both" }}>
                <div>
                  <h3 className="ftp-modal-t" id={uid + "-dlg-t"}>
                    {project.title}
                  </h3>
                  {project.local && <p className="ftp-modal-l">{project.local}</p>}
                </div>
                <p className="ftp-modal-p">{project.summary}</p>
                {project.body?.map((b, i) => (
                  <p key={i} className="ftp-modal-p">
                    {b}
                  </p>
                ))}
                <dl className="ftp-dl2">
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                  {project.client && (
                    <>
                      <dt>Client</dt>
                      <dd>{project.client}</dd>
                    </>
                  )}
                  {project.role && (
                    <>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </>
                  )}
                  {project.tools && project.tools.length > 0 && (
                    <>
                      <dt>Tools</dt>
                      <dd>{project.tools.join(" · ")}</dd>
                    </>
                  )}
                </dl>
                <div className="ftp-modal-nav">
                  <div className="ftp-btns">
                    <button type="button" className="ftp-btn" data-ghost="true" onClick={() => stepProject(-1)} aria-label="Previous project">
                      <Arrow dir="left" />
                    </button>
                    <button type="button" className="ftp-btn" data-ghost="true" onClick={() => stepProject(1)} aria-label="Next project">
                      <Arrow />
                    </button>
                  </div>
                  {project.href && (
                    <a className="ftp-btn" href={project.href} target="_blank" rel="noreferrer">
                      Visit <Arrow dir="ne" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Folder>
        </div>
      )}

      {toast && (
        <div className="ftp-toast" role="status" key={toast.id}>
          {toast.text}
        </div>
      )}
    </div>
  )
}
