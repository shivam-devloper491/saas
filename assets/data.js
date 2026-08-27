// AI Social Content OS - Complete Execution Data & Task Graph
window.DOCS_DATA = {
  project: {
    name: "AI Social Content OS",
    subtitle: "MVP Execution Center",
    tagline: "Build the AI-powered social media content platform step-by-step.",
    heroTitle: "Build the MVP. One task at a time.",
    heroSubtitle: "Everything you need to go from an empty repository to a working AI social media SaaS MVP in 10–14 working days.",
    techStack: [
      { name: "Next.js 14 App Router", role: "Frontend & API Routes", icon: "code" },
      { name: "TypeScript & Tailwind", role: "Type-safe UI System", icon: "palette" },
      { name: "Supabase (PostgreSQL)", role: "Auth, Database & RLS", icon: "database" },
      { name: "Google Gemini 2.0/1.5", role: "AI Multi-Platform Engine", icon: "sparkles" },
      { name: "BullMQ + Upstash Redis", role: "Distributed Job Scheduler", icon: "clock" },
      { name: "LinkedIn & Meta APIs", role: "OAuth & Publishing", icon: "share-2" },
      { name: "Vercel", role: "Production Deployment", icon: "server" }
    ],
    stats: {
      days: "10–14 Days",
      phases: "8 Phases",
      sections: "17 Sections",
      tasks: 112,
      platforms: "2 Social Networks",
      aiEngine: "1 Multi-Prompt AI Engine"
    }
  },

  phases: [
    { id: "phase-1", number: 1, title: "Foundation & Setup", days: "Days 1–2", desc: "Project scaffolding, dependencies, Supabase setup, and architecture definition." },
    { id: "phase-2", number: 2, title: "Auth & Database System", days: "Days 2–3", desc: "Supabase Auth, protected routes, database tables, and RLS security policies." },
    { id: "phase-3", number: 3, title: "Workspace & Brand Engine", days: "Day 3", desc: "Multi-tenant workspaces, brand voice guidelines, and writing style settings." },
    { id: "phase-4", number: 4, title: "Gemini AI Engine", days: "Days 4–5", desc: "Gemini SDK integration, prompt builders, platform formatters, and error handling." },
    { id: "phase-5", number: 5, title: "Content Draft & Editor", days: "Day 6", desc: "Interactive generation studio, preview cards, formatting controls, and draft management." },
    { id: "phase-6", number: 6, title: "Social Integrations (LinkedIn & Meta)", days: "Days 7–9", desc: "OAuth handshakes, token encryption, media containers, and manual publishing." },
    { id: "phase-7", number: 7, title: "Scheduling & Queue Engine", days: "Days 10–11", desc: "BullMQ background workers, Upstash Redis queues, retry logic, and usage logs." },
    { id: "phase-8", number: 8, title: "Testing, Hardening & Launch", days: "Days 12–14", desc: "Security review, end-to-end testing, Vercel deployment, and final QA verification." }
  ],

  roadmapDays: [
    { day: "1–2", title: "Project Setup & Scaffolding", sectionId: "03-project-setup", phase: "Foundation", summary: "Scaffold Next.js 14, configure Tailwind, Supabase project, and environment variables." },
    { day: "3", title: "Workspace & Brand Profile", sectionId: "06-brand-system", phase: "Brand System", summary: "Create brand voice rules, target audience profiles, and tone settings." },
    { day: "4", title: "Gemini AI Setup & Encryption", sectionId: "07-gemini-ai", phase: "AI Engine", summary: "Configure Gemini API keys, AES-256 encryption, and AI service layer." },
    { day: "5", title: "Prompt Builder & Multi-Format Gen", sectionId: "07-gemini-ai", phase: "AI Engine", summary: "Build platform-specific prompts for LinkedIn long-form and Instagram captions." },
    { day: "6", title: "Draft Studio & Preview Editor", sectionId: "08-content-system", phase: "Content", summary: "Interactive post editor with real-time character counters and live previews." },
    { day: "7", title: "LinkedIn OAuth & Connection", sectionId: "09-linkedin", phase: "Integrations", summary: "LinkedIn Developer Portal app, 3-legged OAuth callback, and secure token vault." },
    { day: "8", title: "Instagram Meta Graph OAuth", sectionId: "10-instagram", phase: "Integrations", summary: "Meta Business App, Page Access Token, and Instagram Professional discovery." },
    { day: "9", title: "Instant Publishing Engine", sectionId: "09-linkedin", phase: "Publishing", summary: "Direct publishing to LinkedIn UGC post API and Instagram Media Container." },
    { day: "10", title: "BullMQ & Redis Scheduling", sectionId: "11-scheduling", phase: "Scheduling", summary: "Setup Upstash Redis, BullMQ queue, timestamp converter, and cron runner." },
    { day: "11", title: "Usage Tracking & Error Telemetry", sectionId: "12-usage", phase: "Observability", summary: "Log token usage, generation latency, publish errors, and workspace quotas." },
    { day: "12–14", title: "Testing, Hardening & Deployment", sectionId: "14-deployment", phase: "Launch", summary: "Full QA test suite, RLS security audit, Vercel prod deployment, and live launch." }
  ],

  // Environment Variables list for the interactive checklist
  envVariables: [
    { name: "NEXT_PUBLIC_SUPABASE_URL", purpose: "Supabase project REST/Auth API URL endpoint", required: true, isPublic: true, example: "https://xyzcompany.supabase.co" },
    { name: "NEXT_PUBLIC_SUPABASE_ANON_KEY", purpose: "Public anonymous API key for client-side Auth and RLS", required: true, isPublic: true, example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
    { name: "SUPABASE_SERVICE_ROLE_KEY", purpose: "Privileged admin key for backend workers and cron jobs (Bypasses RLS)", required: true, isPublic: false, example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
    { name: "GEMINI_API_KEY", purpose: "Google Gemini API secret key for AI content generation", required: true, isPublic: false, example: "AIzaSyD894-xxxxxxxxxxxxxxxxxxx" },
    { name: "UPSTASH_REDIS_REST_URL", purpose: "Serverless Redis connection URL for BullMQ jobs", required: true, isPublic: false, example: "https://prompt-lion-3321.upstash.io" },
    { name: "UPSTASH_REDIS_REST_TOKEN", purpose: "Serverless Redis REST auth token", required: true, isPublic: false, example: "AX32ASkndw942048xxxxxxxx" },
    { name: "REDIS_URL", purpose: "Direct ioredis connection string for background workers (e.g., redis://...)", required: true, isPublic: false, example: "rediss://default:token@prompt-lion.upstash.io:6379" },
    { name: "LINKEDIN_CLIENT_ID", purpose: "LinkedIn Developer App Client ID for OAuth 2.0", required: true, isPublic: false, example: "77xyz98q21po98" },
    { name: "LINKEDIN_CLIENT_SECRET", purpose: "LinkedIn Developer App Client Secret for exchanging authorization code", required: true, isPublic: false, example: "sk_live_9482701923" },
    { name: "LINKEDIN_REDIRECT_URI", purpose: "OAuth redirect callback URL for LinkedIn authorization", required: true, isPublic: false, example: "http://localhost:3000/api/auth/callback/linkedin" },
    { name: "FACEBOOK_APP_ID", purpose: "Meta Developers App ID for Instagram Graph API", required: true, isPublic: false, example: "109849204928492" },
    { name: "FACEBOOK_APP_SECRET", purpose: "Meta Developers App Secret for token exchange", required: true, isPublic: false, example: "49204820dbe4928492b492" },
    { name: "FACEBOOK_REDIRECT_URI", purpose: "OAuth redirect callback URL for Facebook/Instagram login", required: true, isPublic: false, example: "http://localhost:3000/api/auth/callback/facebook" },
    { name: "NEXT_PUBLIC_APP_URL", purpose: "Root application base URL for OAuth redirects & webhooks", required: true, isPublic: true, example: "http://localhost:3000" },
    { name: "ENCRYPTION_KEY", purpose: "32-byte hex secret key for AES-256-GCM token encryption at rest", required: true, isPublic: false, example: "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" }
  ],

  // Database Tables documentation
  databaseTables: [
    {
      name: "workspaces",
      purpose: "Multi-tenant tenant isolation container for users and teams.",
      rls: "Users can select/update workspaces where user_id = auth.uid() or membership exists.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Unique workspace identifier (default gen_random_uuid())" },
        { name: "owner_id", type: "uuid (FK -> auth.users)", desc: "User who created the workspace" },
        { name: "name", type: "text", desc: "Workspace display name (e.g., 'Acme Media')" },
        { name: "slug", type: "text", desc: "URL-safe unique identifier" },
        { name: "created_at", type: "timestamptz", desc: "Record creation timestamp" }
      ],
      sample: { id: "d9e84b72-23c4-4b52-9721-a1e4c7e81901", owner_id: "u123-auth", name: "Growth Studio", slug: "growth-studio", created_at: "2026-08-26T12:00:00Z" }
    },
    {
      name: "brand_profiles",
      purpose: "Stores brand voice guidelines, target persona, tone, and prohibited terms injected into AI prompts.",
      rls: "Accessible only by workspace members.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Unique brand profile ID" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Parent workspace" },
        { name: "brand_name", type: "text", desc: "Brand/Company name" },
        { name: "industry", type: "text", desc: "Industry vertical (e.g. B2B SaaS, Creator, FinTech)" },
        { name: "tone_of_voice", type: "text", desc: "Authoritative, witty, visionary, educational, etc." },
        { name: "target_audience", type: "text", desc: "Target persona description" },
        { name: "prohibited_words", type: "text[]", desc: "List of banned terms (e.g., 'synergy', 'game-changer')" },
        { name: "sample_posts", type: "jsonb", desc: "Few-shot examples for style matching" }
      ],
      sample: { id: "bp_1", workspace_id: "d9e84b72...", brand_name: "TechPulse", industry: "Cloud Tech", tone_of_voice: "Analytical & punchy", target_audience: "CTOs and Lead Engineers" }
    },
    {
      name: "user_ai_providers",
      purpose: "Stores encrypted user API keys (BYOK) or workspace default AI credentials.",
      rls: "Strict RLS: Only owner can read, tokens are encrypted with AES-256 before insertion.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Parent workspace" },
        { name: "provider", type: "text", desc: "'google_gemini' | 'openai'" },
        { name: "encrypted_api_key", type: "text", desc: "AES-256-GCM encrypted key string" },
        { name: "is_active", type: "boolean", desc: "Whether this key is the active generation provider" },
        { name: "created_at", type: "timestamptz", desc: "Timestamp" }
      ],
      sample: { id: "ai_prov_1", workspace_id: "d9e84...", provider: "google_gemini", is_active: true }
    },
    {
      name: "social_accounts",
      purpose: "Stores OAuth connections to LinkedIn profiles/pages and Instagram professional accounts.",
      rls: "Only workspace members can view connected accounts; access tokens are never returned in public queries.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Workspace scope" },
        { name: "platform", type: "text", desc: "'linkedin' | 'instagram'" },
        { name: "account_id", type: "text", desc: "External provider ID (e.g. LinkedIn urn:li:person:xxx)" },
        { name: "account_name", type: "text", desc: "Display username or page name" },
        { name: "avatar_url", type: "text", desc: "Profile picture URL" },
        { name: "encrypted_access_token", type: "text", desc: "AES-256 encrypted OAuth token" },
        { name: "token_expires_at", type: "timestamptz", desc: "Token expiry date" }
      ],
      sample: { id: "soc_1", platform: "linkedin", account_name: "Alex Dev (Founder)", account_id: "urn:li:person:123" }
    },
    {
      name: "content_ideas",
      purpose: "Stores raw topics, prompts, and brain-dump notes prior to full AI generation.",
      rls: "Workspace scoped.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Parent workspace" },
        { name: "topic", type: "text", desc: "Topic or article link" },
        { name: "notes", type: "text", desc: "Optional user guidance or bullet points" },
        { name: "status", type: "text", desc: "'idea' | 'generating' | 'converted'" }
      ],
      sample: { id: "idea_1", topic: "5 lessons from migrating from monolithic to micro-frontends", status: "converted" }
    },
    {
      name: "generated_posts",
      purpose: "Stores multi-platform outputs produced by Gemini (LinkedIn post + Instagram caption + hashtags).",
      rls: "Workspace scoped.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Workspace container" },
        { name: "idea_id", type: "uuid (FK -> content_ideas, nullable)", desc: "Source idea" },
        { name: "topic", type: "text", desc: "Original prompt topic" },
        { name: "linkedin_content", type: "text", desc: "Formatted long-form LinkedIn post text" },
        { name: "instagram_caption", type: "text", desc: "Instagram caption with emoji structure" },
        { name: "hashtags", type: "text[]", desc: "Recommended hashtag array" },
        { name: "image_prompt", type: "text", desc: "Visual concept prompt for accompanying media" },
        { name: "status", type: "text", desc: "'draft' | 'scheduled' | 'published'" }
      ],
      sample: { id: "post_1", topic: "Building AI SaaS in 2026", status: "draft" }
    },
    {
      name: "scheduled_posts",
      purpose: "Holds posts waiting to be published at a specified UTC time via BullMQ.",
      rls: "Workspace scoped.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "post_id", type: "uuid (FK -> generated_posts)", desc: "Source post" },
        { name: "social_account_id", type: "uuid (FK -> social_accounts)", desc: "Target destination" },
        { name: "scheduled_at", type: "timestamptz", desc: "Target publish time (UTC)" },
        { name: "job_id", type: "text", desc: "BullMQ / Redis job identifier" },
        { name: "status", type: "text", desc: "'queued' | 'processing' | 'completed' | 'failed'" }
      ],
      sample: { id: "sched_1", scheduled_at: "2026-08-30T14:00:00Z", status: "queued", job_id: "bullmq_job_994" }
    },
    {
      name: "published_posts",
      purpose: "Historical record of successfully published posts with remote platform IDs and URLs.",
      rls: "Workspace scoped.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "post_id", type: "uuid (FK -> generated_posts)", desc: "Source post" },
        { name: "social_account_id", type: "uuid (FK -> social_accounts)", desc: "Account used" },
        { name: "remote_post_id", type: "text", desc: "External ID from LinkedIn / Instagram" },
        { name: "published_url", type: "text", desc: "Direct web link to published post" },
        { name: "published_at", type: "timestamptz", desc: "Exact publish timestamp" }
      ],
      sample: { id: "pub_1", remote_post_id: "urn:li:share:719284920", published_url: "https://linkedin.com/feed/update/urn:li:share:719284920" }
    },
    {
      name: "usage_events",
      purpose: "Audit log tracking AI tokens, generation latency, API requests, and user quota events.",
      rls: "Workspace scoped.",
      columns: [
        { name: "id", type: "uuid (PK)", desc: "Primary key" },
        { name: "workspace_id", type: "uuid (FK -> workspaces)", desc: "Workspace scope" },
        { name: "event_type", type: "text", desc: "'ai_generation' | 'linkedin_publish' | 'instagram_publish'" },
        { name: "tokens_used", type: "integer", desc: "Total Gemini tokens consumed (input + output)" },
        { name: "cost_estimated_cents", type: "numeric", desc: "Estimated USD cost in cents" },
        { name: "metadata", type: "jsonb", desc: "Diagnostic payload (latency_ms, model, status)" },
        { name: "created_at", type: "timestamptz", desc: "Timestamp" }
      ],
      sample: { id: "evt_1", event_type: "ai_generation", tokens_used: 1240, cost_estimated_cents: 0.025 }
    }
  ],

  // Interactive Project File Tree Data
  fileTree: [
    {
      name: "ai-social-content-os",
      type: "folder",
      desc: "Root Next.js 14 project directory",
      children: [
        {
          name: "app",
          type: "folder",
          desc: "Next.js App Router (pages and API endpoints)",
          children: [
            { name: "(auth)/login/page.tsx", type: "file", desc: "Supabase email & Google OAuth login screen" },
            { name: "(auth)/signup/page.tsx", type: "file", desc: "User registration & workspace bootstrap flow" },
            { name: "(dashboard)/layout.tsx", type: "file", desc: "Authenticated layout with sidebar & workspace switcher" },
            { name: "(dashboard)/page.tsx", type: "file", desc: "Overview dashboard, stats, and recent generations" },
            { name: "(dashboard)/generate/page.tsx", type: "file", desc: "AI Content Generation Studio with topic input" },
            { name: "(dashboard)/drafts/page.tsx", type: "file", desc: "Post editor, multi-platform tabs & format preview" },
            { name: "(dashboard)/schedule/page.tsx", type: "file", desc: "Content calendar & scheduled post manager" },
            { name: "(dashboard)/settings/brand/page.tsx", type: "file", desc: "Brand voice, tone, and forbidden words editor" },
            { name: "(dashboard)/settings/integrations/page.tsx", type: "file", desc: "Connect LinkedIn and Instagram accounts" },
            { name: "(dashboard)/usage/page.tsx", type: "file", desc: "AI token tracking, cost logs, and rate limits" },
            {
              name: "api",
              type: "folder",
              desc: "Backend API routes for Next.js",
              children: [
                { name: "generate/route.ts", type: "file", desc: "POST: Proxies prompt to Gemini SDK server-side" },
                { name: "publish/linkedin/route.ts", type: "file", desc: "POST: Publishes post to LinkedIn UGC API" },
                { name: "publish/instagram/route.ts", type: "file", desc: "POST: Creates media container & publishes via Graph API" },
                { name: "schedule/route.ts", type: "file", desc: "POST: Adds scheduled job into BullMQ Redis queue" },
                { name: "auth/callback/linkedin/route.ts", type: "file", desc: "GET: Exchanges LinkedIn authorization code for token" },
                { name: "auth/callback/facebook/route.ts", type: "file", desc: "GET: Exchanges Facebook OAuth code for Page token" }
              ]
            }
          ]
        },
        {
          name: "lib",
          type: "folder",
          desc: "Shared backend utilities and SDK wrappers",
          children: [
            { name: "supabase/client.ts", type: "file", desc: "Browser Supabase client using anon key" },
            { name: "supabase/server.ts", type: "file", desc: "Server Supabase client for Server Actions & Route Handlers" },
            { name: "supabase/admin.ts", type: "file", desc: "Service role client (bypasses RLS for worker jobs)" },
            { name: "crypto/encryption.ts", type: "file", desc: "AES-256-GCM token encryption and decryption helpers" },
            { name: "redis/client.ts", type: "file", desc: "Upstash Redis / ioredis connection pool" },
            { name: "queue/publishQueue.ts", type: "file", desc: "BullMQ Queue and Job definition" }
          ]
        },
        {
          name: "ai",
          type: "folder",
          desc: "Gemini AI engine and prompt orchestration",
          children: [
            { name: "geminiClient.ts", type: "file", desc: "@google/genai SDK initialization" },
            { name: "promptBuilder.ts", type: "file", desc: "Injects brand voice, platform constraints & JSON schema" },
            { name: "parsers.ts", type: "file", desc: "Validates and parses Gemini structured JSON response" }
          ]
        },
        {
          name: "social",
          type: "folder",
          desc: "Social media platform API clients",
          children: [
            { name: "linkedin.ts", type: "file", desc: "LinkedIn OAuth, profile lookup, and UGC Post Publisher" },
            { name: "instagram.ts", type: "file", desc: "Meta Graph API, Page lookup, Container Creation & Publishing" }
          ]
        },
        {
          name: "workers",
          type: "folder",
          desc: "Background job execution",
          children: [
            { name: "publishWorker.ts", type: "file", desc: "BullMQ worker process that executes scheduled post drops" }
          ]
        },
        { name: ".env.local", type: "file", desc: "Local environment secret keys" },
        { name: ".env.example", type: "file", desc: "Template documenting required environment variables" },
        { name: "middleware.ts", type: "file", desc: "Next.js middleware protecting /dashboard routes with Supabase Auth" },
        { name: "package.json", type: "file", desc: "Project manifest & dependencies" },
        { name: "tailwind.config.js", type: "file", desc: "Tailwind CSS theme configuration" },
        { name: "tsconfig.json", type: "file", desc: "TypeScript compiler settings" }
      ]
    }
  ],

  // All 17 Sections with deep implementation guidance and 112 concrete tasks
  sections: [
    {
      id: "00-start-here",
      number: "00",
      title: "Start Here",
      subtitle: "Project Blueprint & Execution Manual",
      phaseId: "phase-1",
      day: "Day 1",
      estimatedTime: "15 min",
      difficulty: "Easy",
      priority: "CRITICAL",
      overview: "Welcome to the AI Social Content OS MVP Execution Center. This developer dashboard is your single source of truth for constructing a production-grade multi-platform AI social media engine. You will follow a strict 10–14 working day plan covering database design, secure token vaults, Google Gemini structured generations, LinkedIn UGC publishing, Meta Instagram Graph API containers, and BullMQ background workers.",
      what: "A comprehensive developer execution guide and project management checklist that turns a raw Next.js 14 repository into a revenue-ready SaaS MVP with dual social platform publishing and AI generation.",
      why: "Building multi-platform SaaS with OAuth, background workers, and AI prompts requires exact sequencing. Deviating from the auth/database foundation leads to token leaks, RLS permission bugs, and broken background workers.",
      how: [
        "Read the Project Scope and Architecture diagrams thoroughly.",
        "Check off prerequisites including Supabase, Google Cloud (Gemini), LinkedIn Developer Portal, and Meta for Developers accounts.",
        "Follow the daily execution roadmap sequentially. Do not jump to Social OAuth before establishing the encrypted database tables.",
        "Use the interactive checkboxes to track your progress. Your status is automatically preserved in your browser's LocalStorage.",
        "Use the copy buttons on code blocks to quickly grab typed, tested snippets for your Next.js 14 files."
      ],
      callouts: [
        { type: "IMPORTANT", title: "Execution Philosophy", text: "READ → UNDERSTAND → IMPLEMENT → TEST → CHECK → MOVE TO NEXT TASK. Never write code without first understanding the security boundary (e.g., service role keys vs anon keys)." },
        { type: "TIP", title: "Keyboard Navigation", text: "Press Ctrl + K (or Cmd + K) at any time to open the global Command Palette and search through tasks, API endpoints, and database tables." }
      ],
      tasks: [
        {
          id: "task-00-1",
          title: "Review MVP Scope & Architectural Boundaries",
          desc: "Understand the core MVP deliverables: Next.js 14 App Router, Supabase Auth/DB, Google Gemini 2.0/1.5 API, LinkedIn API, Meta Graph API, BullMQ + Upstash Redis.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["README.md", "metadata.json"],
          criteria: [
            "Understood that Next.js 14 App Router is the target tech stack",
            "Confirmed that LinkedIn and Instagram are the two primary MVP platforms",
            "Acknowledged that background scheduling uses BullMQ and Redis",
            "Confirmed that tokens must be encrypted with AES-256 before database insertion"
          ]
        },
        {
          id: "task-00-2",
          title: "Bookmark & Configure Local Execution Dashboard",
          desc: "Verify that your browser LocalStorage persists checkbox status and notes across page refreshes.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["localStorage"],
          criteria: [
            "Checked test task and verified persistence",
            "Tested search palette (Ctrl + K)",
            "Tested mobile responsive drawer"
          ]
        }
      ]
    },

    {
      id: "01-prerequisites",
      number: "01",
      title: "Prerequisites",
      subtitle: "Developer Accounts, API Keys & Environment",
      phaseId: "phase-1",
      day: "Day 1",
      estimatedTime: "45 min",
      difficulty: "Easy",
      priority: "CRITICAL",
      overview: "Before writing application code, you must obtain development credentials from four cloud providers: Supabase, Google AI Studio, LinkedIn Developer Portal, and Meta for Developers.",
      what: "Account provisioning and API credentials setup for all required external services.",
      why: "OAuth handshakes and AI generation will immediately fail if API keys, redirect URLs, and app permissions are not pre-authorized in provider consoles.",
      how: [
        "Create a free Supabase project and note your Project URL and Anon Key.",
        "Generate a Gemini API key in Google AI Studio.",
        "Create a LinkedIn Developer App and request the 'Share on LinkedIn' and 'Sign In with LinkedIn' products.",
        "Create a Meta Developer App with 'Facebook Login for Business' and the Instagram Graph API.",
        "Create an Upstash Redis database for serverless BullMQ job queues."
      ],
      callouts: [
        { type: "SECURITY", title: "Never Commit Secrets to Git", text: "All API secrets and private keys MUST reside strictly in .env.local. Add .env.local to your .gitignore immediately." },
        { type: "WARNING", title: "Instagram Requirement", text: "Instagram Graph API requires a Facebook Page connected to an Instagram Business or Creator account. Personal accounts CANNOT be published to via API." }
      ],
      tasks: [
        {
          id: "task-01-1",
          title: "Create Supabase Cloud Project",
          desc: "Sign up on Supabase, create a new organization and project, choose a strong database password, and record the API keys.",
          time: "15 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: [".env.local"],
          criteria: [
            "Supabase project created in a nearby region",
            "Recorded NEXT_PUBLIC_SUPABASE_URL",
            "Recorded NEXT_PUBLIC_SUPABASE_ANON_KEY",
            "Recorded SUPABASE_SERVICE_ROLE_KEY"
          ]
        },
        {
          id: "task-01-2",
          title: "Generate Google Gemini API Key",
          desc: "Open Google AI Studio, create an API key, and test connectivity using a test curl request or SDK call.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: [".env.local"],
          criteria: [
            "Created Google AI Studio API key",
            "Added GEMINI_API_KEY to .env.local",
            "Confirmed access to gemini-2.0-flash / gemini-1.5-pro models"
          ]
        },
        {
          id: "task-01-3",
          title: "Register LinkedIn Developer Application",
          desc: "Create an app in LinkedIn Developer Portal, connect your company page, and request 'Share on LinkedIn' and 'Sign In with LinkedIn using OpenID Connect'.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: [".env.local"],
          criteria: [
            "LinkedIn app created",
            "Added Products: 'Share on LinkedIn' & 'Sign In with LinkedIn'",
            "Recorded LINKEDIN_CLIENT_ID & LINKEDIN_CLIENT_SECRET",
            "Added redirect URI: http://localhost:3000/api/auth/callback/linkedin"
          ]
        },
        {
          id: "task-01-4",
          title: "Register Meta Developer App (Instagram Graph API)",
          desc: "Create a 'Business' type app in Meta for Developers, configure Facebook Login, and link a Facebook Page to an Instagram Professional account.",
          time: "20 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: [".env.local"],
          criteria: [
            "Meta Developer App created with Business permissions",
            "Instagram Graph API product added",
            "Recorded FACEBOOK_APP_ID & FACEBOOK_APP_SECRET",
            "Added redirect URI: http://localhost:3000/api/auth/callback/facebook"
          ]
        },
        {
          id: "task-01-5",
          title: "Create Upstash Redis Instance",
          desc: "Create a serverless Redis database on Upstash to back BullMQ job queues.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: [".env.local"],
          criteria: [
            "Upstash Redis database created",
            "Recorded UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN",
            "Recorded direct REDIS_URL connection string"
          ]
        },
        {
          id: "task-01-6",
          title: "Generate 32-byte AES-256 Encryption Key",
          desc: "Run `openssl rand -hex 32` to generate a random 64-character hex key for encrypting user tokens at rest.",
          time: "2 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: [".env.local"],
          criteria: [
            "Generated 32-byte cryptographic random hex string",
            "Set ENCRYPTION_KEY in .env.local"
          ]
        }
      ]
    },

    {
      id: "02-architecture",
      number: "02",
      title: "Architecture",
      subtitle: "System Flows, Data Pipeline & Security Boundaries",
      phaseId: "phase-1",
      day: "Day 1–2",
      estimatedTime: "30 min",
      difficulty: "Medium",
      priority: "CRITICAL",
      overview: "Understand the end-to-end flow from user topic input to AI generation, draft review, database persistence, BullMQ scheduling, and external social API dispatch.",
      what: "Complete architectural blueprint of the SaaS platform including Next.js 14 Server Actions, Supabase PostgreSQL with Row Level Security, Gemini prompt pipelines, and Redis job workers.",
      why: "A clear architectural model prevents security flaws (e.g. executing worker code on client), avoids race conditions during post publication, and ensures clean multi-tenant isolation.",
      how: [
        "Review the System Architecture Diagram below.",
        "Inspect the 3 distinct execution layers: Client UI, Next.js Serverless API layer, and Background Queue Worker.",
        "Understand why token encryption and decryption occur solely in server-side memory.",
        "Examine the idempotency key strategy that prevents duplicate post publishing."
      ],
      codeSnippet: {
        file: "docs/architecture-flow.txt",
        lang: "text",
        code: `[USER BROWSER (React/Tailwind)]
       │
       ▼ (1) Auth Request / Token Validation
[SUPABASE AUTH] ── (JWT) ──► [NEXT.JS MIDDLEWARE (Protected Routes)]
                                     │
       ┌─────────────────────────────┴─────────────────────────────┐
       │ (2) POST /api/generate                     (3) OAuth Flows & Connect
       ▼                                                           ▼
[NEXT.JS API ROUTE]                                  [LINKEDIN / META OAUTH]
       │                                                           │
       ├─► Load Brand Profile & Banned Words                       ├─► Exchange Auth Code
       ├─► Fetch User API Key (Decrypt AES-256)                   ├─► Encrypt Access Token
       │                                                           ▼
       ▼                                                [SUPABASE DATABASE]
[GOOGLE GEMINI 2.0/1.5 API]                                (RLS Secured)
       │ (Returns structured JSON)                                 │
       ▼                                                           │
[DRAFT EDITOR / PREVIEW]                                           │
       │                                                           │
       ▼ (4) User clicks "Schedule Post"                           │
[NEXT.JS API /api/schedule]                                        │
       │                                                           │
       ▼ (Add Job to Queue)                                        │
[UPSTASH REDIS / BULLMQ QUEUE]                                    │
       │                                                           │
       ▼ (Cron / Delay triggers job)                               │
[BACKGROUND WORKER (publishWorker.ts)]                             │
       │                                                           │
       ├─► Decrypt Social Token ◄──────────────────────────────────┘
       ├─► Publish to LinkedIn UGC API
       ├─► Create Instagram Media Container & Publish
       ▼
[RECORD PUBLISHED URL & USAGE EVENT]`
      },
      callouts: [
        { type: "NOTE", title: "Idempotency Protection", text: "Every scheduled post job carries a unique job_id matching scheduled_posts.id. Workers verify that status == 'queued' inside a PostgreSQL transaction before calling external social APIs to prevent duplicate posts." }
      ],
      tasks: [
        {
          id: "task-02-1",
          title: "Understand Data Isolation & RLS Boundary",
          desc: "Verify that all Supabase queries filter by workspace_id and that RLS policies enforce owner_id = auth.uid().",
          time: "10 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["docs/security-model.md"],
          criteria: [
            "Understood that client requests must only use NEXT_PUBLIC_SUPABASE_ANON_KEY",
            "Confirmed that SUPABASE_SERVICE_ROLE_KEY is used only in server workers",
            "Verified workspace-level multi-tenancy model"
          ]
        },
        {
          id: "task-02-2",
          title: "Review Token Encryption Lifecycle",
          desc: "Trace how OAuth tokens from LinkedIn/Instagram are encrypted with AES-256-GCM before DB write and decrypted only in RAM during publish.",
          time: "10 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["lib/crypto/encryption.ts"],
          criteria: [
            "Understood IV (Initialization Vector) prepend pattern",
            "Confirmed tokens are never logged or returned to client"
          ]
        }
      ]
    },

    {
      id: "03-project-setup",
      number: "03",
      title: "Project Setup",
      subtitle: "Scaffolding, Dependencies, Tailwind & Config",
      phaseId: "phase-1",
      day: "Day 1–2",
      estimatedTime: "40 min",
      difficulty: "Easy",
      priority: "CRITICAL",
      overview: "Initialize the Next.js 14 project with TypeScript, configure Tailwind CSS, install necessary SDKs (@supabase/supabase-js, @google/genai, bullmq, ioredis, lucide-react), and verify local environment variables.",
      what: "The foundational codebase and dependency manifest for the entire application.",
      why: "A structured project layout with exact package versions eliminates runtime mismatches and module resolution issues.",
      how: [
        "Initialize Next.js with App Router and TypeScript: `npx create-next-app@latest . --typescript --tailwind --app --eslint`",
        "Install core production dependencies: `@google/genai`, `@supabase/supabase-js`, `@supabase/ssr`, `bullmq`, `ioredis`, `lucide-react`, `zod`.",
        "Configure `tailwind.config.js` with custom dark slate palettes and typography plugins.",
        "Create `.env.local` and populate all 15 required environment variables."
      ],
      codeSnippet: {
        file: "package.json",
        lang: "json",
        code: `{
  "name": "ai-social-content-os",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "worker": "tsx workers/publishWorker.ts",
    "lint": "next lint"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.48.1",
    "bullmq": "^5.41.0",
    "clsx": "^2.1.1",
    "dotenv": "^16.4.7",
    "ioredis": "^5.5.0",
    "lucide-react": "^0.475.0",
    "next": "14.2.24",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^3.0.1",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20.17.19",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.3",
    "typescript": "^5.7.3"
  }
}`
      },
      callouts: [
        { type: "TIP", title: "TypeScript Strict Mode", text: "Ensure 'strict': true is enabled in tsconfig.json to prevent undefined access bugs in API route payloads." }
      ],
      tasks: [
        {
          id: "task-03-1",
          title: "Initialize Next.js 14 App Router Project",
          desc: "Create the project repository using standard Next.js 14 template with TypeScript and Tailwind CSS.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["package.json", "tsconfig.json"],
          criteria: [
            "Next.js 14 App Router project created",
            "TypeScript enabled and working",
            "Verified dev server boots on http://localhost:3000"
          ]
        },
        {
          id: "task-03-2",
          title: "Install Core Production Dependencies",
          desc: "Install @supabase/supabase-js, @supabase/ssr, @google/genai, bullmq, ioredis, and lucide-react.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["package.json"],
          criteria: [
            "All dependencies installed without peer resolution errors",
            "Verified lockfile generated"
          ]
        },
        {
          id: "task-03-3",
          title: "Configure Tailwind CSS Dark Slate Theme",
          desc: "Update tailwind.config.js with deep dark neutrals (#090d16, #0f172a, #131d33) and accent colors.",
          time: "10 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["tailwind.config.js", "app/globals.css"],
          criteria: [
            "Added custom dark theme color variables",
            "Configured font-mono for JetBrains Mono",
            "Verified responsive utilities"
          ]
        },
        {
          id: "task-03-4",
          title: "Create .env.local and .env.example",
          desc: "Populate local environment variables and create a sanitized .env.example for repository tracking.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: [".env.local", ".env.example", ".gitignore"],
          criteria: [
            ".env.local contains all 15 variables",
            ".gitignore includes .env*.local",
            ".env.example contains placeholder keys"
          ]
        },
        {
          id: "task-03-5",
          title: "Setup Supabase Browser & Server Client Helpers",
          desc: "Create lib/supabase/client.ts (createBrowserClient) and lib/supabase/server.ts (createServerClient with cookie handling).",
          time: "10 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["lib/supabase/client.ts", "lib/supabase/server.ts"],
          criteria: [
            "Browser client initialized with public keys",
            "Server client properly awaits Next.js cookies store",
            "Created admin client helper in lib/supabase/admin.ts"
          ]
        }
      ]
    },

    {
      id: "04-authentication",
      number: "04",
      title: "Authentication",
      subtitle: "Supabase Auth, Google Login & Route Guards",
      phaseId: "phase-2",
      day: "Day 2",
      estimatedTime: "50 min",
      difficulty: "Medium",
      priority: "CRITICAL",
      overview: "Implement user registration, email/password authentication, Google OAuth login, session synchronization via Next.js middleware, and automatic workspace creation on first signup.",
      what: "Complete user authentication system with secure session cookies, password reset, and protected route middleware.",
      why: "All content, brand profiles, and connected social accounts must belong to an authenticated user and workspace.",
      how: [
        "Build login and signup pages using Supabase Auth SSR helpers.",
        "Implement Google OAuth login button triggering `supabase.auth.signInWithOAuth()`.",
        "Create `middleware.ts` to inspect session cookies and redirect unauthenticated requests to `/login`.",
        "Create a PostgreSQL trigger `on_auth_user_created` that automatically inserts a default workspace for every new user."
      ],
      codeSnippet: {
        file: "middleware.ts",
        lang: "typescript",
        code: `import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protect /dashboard, /generate, /drafts, /schedule, /settings
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard') ||
                           request.nextUrl.pathname.startsWith('/generate') ||
                           request.nextUrl.pathname.startsWith('/drafts') ||
                           request.nextUrl.pathname.startsWith('/schedule') ||
                           request.nextUrl.pathname.startsWith('/settings');

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect logged-in users away from auth pages
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};`
      },
      callouts: [
        { type: "SECURITY", title: "Always Use getUser() in Middleware", text: "Never rely on supabase.auth.getSession() inside server middleware because it does not revalidate the JWT with the Supabase auth server. Always call getUser()." }
      ],
      tasks: [
        {
          id: "task-04-1",
          title: "Build Signup Page with Email/Password & Google Login",
          desc: "Create app/(auth)/signup/page.tsx with form validation, error banners, and Supabase client auth call.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["app/(auth)/signup/page.tsx"],
          criteria: [
            "Signup form with email, password, and full name fields",
            "Validation for minimum password length (8+ chars)",
            "Google Login button with provider redirect",
            "Success notification instructing user to check email confirmation"
          ]
        },
        {
          id: "task-04-2",
          title: "Build Login Page with Session Persistence",
          desc: "Create app/(auth)/login/page.tsx with email/password sign-in and redirect to /dashboard upon success.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["app/(auth)/login/page.tsx"],
          criteria: [
            "Login form with error handling for invalid credentials",
            "Remember me toggle and password reset link",
            "Redirect to /dashboard upon successful login"
          ]
        },
        {
          id: "task-04-3",
          title: "Implement Protected Route Middleware",
          desc: "Create middleware.ts to validate JWT cookies and enforce route protection across all dashboard sub-paths.",
          time: "10 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["middleware.ts"],
          criteria: [
            "Middleware refreshes expired auth cookies automatically",
            "Unauthenticated users redirected to /login",
            "Authenticated users redirected away from /login to /dashboard"
          ]
        },
        {
          id: "task-04-4",
          title: "Configure Database Auto-Workspace Trigger",
          desc: "Write SQL trigger on auth.users table that automatically provisions a default workspace and brand profile for newly registered users.",
          time: "10 min",
          difficulty: "Medium",
          priority: "HIGH",
          files: ["supabase/migrations/01_auth_triggers.sql"],
          criteria: [
            "Trigger fires after INSERT on auth.users",
            "Creates row in workspaces with owner_id = new.id",
            "Creates default blank brand_profiles row linked to new workspace"
          ]
        }
      ]
    },

    {
      id: "05-database",
      number: "05",
      title: "Database & RLS",
      subtitle: "Schema Migrations, Tables & Row Level Security",
      phaseId: "phase-2",
      day: "Day 2–3",
      estimatedTime: "60 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Create all 9 relational database tables in Supabase PostgreSQL, establish foreign key constraints, enable Row Level Security (RLS) on every table, and apply granular SELECT/INSERT/UPDATE/DELETE policies.",
      what: "Complete database schema definition, migration files, and security policies.",
      why: "Without RLS, any authenticated user can read or overwrite another workspace's social tokens, brand guidelines, and draft posts.",
      how: [
        "Execute the master schema SQL in Supabase SQL Editor.",
        "Create tables: workspaces, brand_profiles, user_ai_providers, social_accounts, content_ideas, generated_posts, scheduled_posts, published_posts, usage_events.",
        "Enable RLS on all 9 tables: `ALTER TABLE tablename ENABLE ROW LEVEL SECURITY;`",
        "Write RLS policies ensuring users can only interact with rows belonging to their active workspace."
      ],
      codeSnippet: {
        file: "supabase/migrations/00_master_schema.sql",
        lang: "sql",
        code: `-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. WORKSPACES
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. BRAND PROFILES
CREATE TABLE brand_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  brand_name TEXT NOT NULL,
  industry TEXT,
  tone_of_voice TEXT DEFAULT 'Professional, engaging and authoritative',
  target_audience TEXT,
  prohibited_words TEXT[] DEFAULT '{}',
  sample_posts JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. USER AI PROVIDERS (Encrypted Keys)
CREATE TABLE user_ai_providers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  provider TEXT NOT NULL DEFAULT 'google_gemini',
  encrypted_api_key TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. SOCIAL ACCOUNTS (Encrypted OAuth Tokens)
CREATE TABLE social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'instagram')),
  account_id TEXT NOT NULL,
  account_name TEXT NOT NULL,
  avatar_url TEXT,
  encrypted_access_token TEXT NOT NULL,
  token_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(workspace_id, platform, account_id)
);

-- 5. CONTENT IDEAS
CREATE TABLE content_ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'idea' CHECK (status IN ('idea', 'generating', 'converted')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 6. GENERATED POSTS
CREATE TABLE generated_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  idea_id UUID REFERENCES content_ideas(id) ON DELETE SET NULL,
  topic TEXT NOT NULL,
  linkedin_content TEXT NOT NULL,
  instagram_caption TEXT NOT NULL,
  hashtags TEXT[] DEFAULT '{}',
  image_prompt TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 7. SCHEDULED POSTS
CREATE TABLE scheduled_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES generated_posts(id) ON DELETE CASCADE,
  social_account_id UUID NOT NULL REFERENCES social_accounts(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMPTZ NOT NULL,
  job_id TEXT,
  status TEXT DEFAULT 'queued' CHECK (status IN ('queued', 'processing', 'completed', 'failed')),
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 8. PUBLISHED POSTS
CREATE TABLE published_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES generated_posts(id) ON DELETE CASCADE,
  social_account_id UUID NOT NULL REFERENCES social_accounts(id) ON DELETE CASCADE,
  remote_post_id TEXT NOT NULL,
  published_url TEXT,
  published_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 9. USAGE EVENTS
CREATE TABLE usage_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  tokens_used INTEGER DEFAULT 0,
  cost_estimated_cents NUMERIC(10, 4) DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ENABLE ROW LEVEL SECURITY ON ALL TABLES
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_ai_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE scheduled_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE published_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_events ENABLE ROW LEVEL SECURITY;

-- SAMPLE RLS POLICIES FOR WORKSPACES
CREATE POLICY "Users can view workspaces they own"
  ON workspaces FOR SELECT
  USING (owner_id = auth.uid());

CREATE POLICY "Users can update their own workspaces"
  ON workspaces FOR UPDATE
  USING (owner_id = auth.uid());

-- GENERIC POLICY TEMPLATE FOR WORKSPACE-OWNED TABLES
CREATE POLICY "Users access own brand profiles"
  ON brand_profiles FOR ALL
  USING (workspace_id IN (SELECT id FROM workspaces WHERE owner_id = auth.uid()));

CREATE POLICY "Users access own generated posts"
  ON generated_posts FOR ALL
  USING (workspace_id IN (SELECT id FROM workspaces WHERE owner_id = auth.uid()));`
      },
      callouts: [
        { type: "SECURITY", title: "Never Disable RLS", text: "Every table exposed to client queries MUST have RLS enabled with explicit policies. Verify with Supabase Security Advisor." }
      ],
      tasks: [
        {
          id: "task-05-1",
          title: "Run Master Schema SQL in Supabase",
          desc: "Execute the master migration script to create all 9 database tables with primary keys, foreign keys, and indexes.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["supabase/migrations/00_master_schema.sql"],
          criteria: [
            "All 9 tables created in public schema",
            "Foreign key constraints established",
            "Verified table list in Supabase Table Editor"
          ]
        },
        {
          id: "task-05-2",
          title: "Apply RLS Policies across All 9 Tables",
          desc: "Write and execute granular RLS policies restricting read/write access to authenticated workspace owners.",
          time: "20 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["supabase/migrations/02_rls_policies.sql"],
          criteria: [
            "RLS enabled on all 9 tables",
            "Tested cross-tenant query and verified empty result returned",
            "Supabase Security Advisor reports 0 unsecured public tables"
          ]
        },
        {
          id: "task-05-3",
          title: "Create Performance Indexes",
          desc: "Add B-tree indexes on `workspace_id`, `scheduled_at`, `status`, and `platform` columns to optimize queue lookups.",
          time: "10 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["supabase/migrations/03_indexes.sql"],
          criteria: [
            "Index created on scheduled_posts(scheduled_at, status)",
            "Index created on generated_posts(workspace_id, status)",
            "Index created on social_accounts(workspace_id, platform)"
          ]
        },
        {
          id: "task-05-4",
          title: "Verify Schema with Database Explorer Tool",
          desc: "Navigate to the Database tab on this documentation site to inspect column types, relationships, and sample records.",
          time: "5 min",
          difficulty: "Easy",
          priority: "MEDIUM",
          files: ["docs/database-explorer"],
          criteria: [
            "Inspected all 9 tables in the interactive visualizer",
            "Confirmed foreign key relationship graph"
          ]
        }
      ]
    },

    {
      id: "06-brand-system",
      number: "06",
      title: "Brand System",
      subtitle: "Brand Voice, Tone Guidelines & Writing Style",
      phaseId: "phase-3",
      day: "Day 3",
      estimatedTime: "35 min",
      difficulty: "Easy",
      priority: "HIGH",
      overview: "Build the Workspace and Brand Profile settings interface. Users define their brand name, industry, tone of voice, target customer persona, forbidden words, and example high-performing posts.",
      what: "Brand Voice management UI and database repository that supplies contextual rules to the Gemini prompt builder.",
      why: "Without specific brand voice parameters, generic AI generates bland, robotic content filled with clichés ('dive deep', 'unleash', 'supercharge').",
      how: [
        "Create `app/(dashboard)/settings/brand/page.tsx` with a multi-section form.",
        "Add inputs for: Brand Name, Industry, Tone (Dropdown: Witty, Authoritative, Minimalist, Educational, Inspiring), Target Audience textarea, Prohibited Words tag input.",
        "Save settings to `brand_profiles` table via Server Action or API route.",
        "Add a 'Sample Post Library' where users can paste 2–3 past posts to enable few-shot AI style imitation."
      ],
      callouts: [
        { type: "TIP", title: "Few-Shot Learning", text: "Passing 2 real sample posts to Gemini in the prompt increases output fidelity by 80% compared to pure adjective-based tone descriptions." }
      ],
      tasks: [
        {
          id: "task-06-1",
          title: "Build Brand Profile Settings Page",
          desc: "Create app/(dashboard)/settings/brand/page.tsx with full form controls and validation.",
          time: "15 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["app/(dashboard)/settings/brand/page.tsx"],
          criteria: [
            "Form inputs for brand name, industry, and target persona",
            "Tone of voice selector with 6 presets + custom option",
            "Tag input for prohibited terms (e.g. 'synergy', 'game-changer')",
            "Save button with toast confirmation"
          ]
        },
        {
          id: "task-06-2",
          title: "Implement Few-Shot Sample Post Manager",
          desc: "Allow users to input up to 3 high-performing past posts stored as JSON in brand_profiles.sample_posts.",
          time: "10 min",
          difficulty: "Medium",
          priority: "HIGH",
          files: ["components/brand/SamplePostManager.tsx"],
          criteria: [
            "Add, edit, and remove sample posts with platform tags",
            "JSON structure validated with Zod schema",
            "Persisted to Supabase brand_profiles table"
          ]
        },
        {
          id: "task-06-3",
          title: "Create Brand Profile Retrieval Helper",
          desc: "Write `lib/brand/getBrandContext.ts` to fetch and format active brand guidelines into a clean prompt injection block.",
          time: "10 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["lib/brand/getBrandContext.ts"],
          criteria: [
            "Retrieves brand profile by workspace_id",
            "Formats tone, audience, and banned words into a prompt string",
            "Gracefully handles unconfigured/blank brand profiles with defaults"
          ]
        }
      ]
    },

    {
      id: "07-gemini-ai",
      number: "07",
      title: "Gemini AI Engine",
      subtitle: "Google GenAI SDK, Structured JSON & Prompt System",
      phaseId: "phase-4",
      day: "Days 4–5",
      estimatedTime: "60 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Integrate the modern `@google/genai` TypeScript SDK. Build a server-side AI generation service that injects brand rules, formats dual-platform outputs (LinkedIn long-form post and Instagram caption with hashtags), enforces strict JSON Schema output, and calculates token usage.",
      what: "Server-side AI orchestration layer powering multi-platform content generation.",
      why: "Gemini 2.0 Flash / 1.5 Pro offers fast inference, high context length, and native JSON schema output guarantees, perfect for multi-format social content.",
      how: [
        "Initialize the GoogleGenAI client server-side in `ai/geminiClient.ts` using `process.env.GEMINI_API_KEY`.",
        "Implement `ai/promptBuilder.ts` to construct system instructions, brand voice constraints, platform formatting rules, and banned word filters.",
        "Configure Gemini `responseSchema` to guarantee strict JSON output containing `linkedin_content`, `instagram_caption`, `hashtags`, and `image_concept`.",
        "Handle API rate limits, token counting, and create a record in `usage_events` table."
      ],
      codeSnippet: {
        file: "ai/geminiService.ts",
        lang: "typescript",
        code: `import { GoogleGenAI, Type } from "@google/genai";
import { BrandProfile } from "@/types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface GenerationInput {
  topic: string;
  notes?: string;
  brand: BrandProfile;
}

export interface GeneratedSocialContent {
  linkedin_content: string;
  instagram_caption: string;
  hashtags: string[];
  image_prompt: string;
}

export async function generateSocialContent(input: GenerationInput): Promise<{
  content: GeneratedSocialContent;
  tokensUsed: number;
}> {
  const systemInstruction = \`You are an elite B2B and consumer social media strategist.
Your task is to transform a core topic into two tailored platform-specific posts:
1. LinkedIn: Highly engaging, hook-driven, structured with whitespace, bold takeaways, professional yet authentic.
2. Instagram: Visually narrative caption, engaging opening line, conversational tone, emojis used tastefully, and bullet points.

BRAND GUIDELINES:
- Brand Name: \${input.brand.brand_name}
- Industry: \${input.brand.industry || "General"}
- Tone: \${input.brand.tone_of_voice}
- Target Audience: \${input.brand.target_audience || "Industry professionals"}
- Strictly PROHIBITED words: \${input.brand.prohibited_words?.join(", ") || "None"}

Never use cheesy generic AI clichés (e.g. 'In today's fast-paced world', 'Game-changer', 'Delve into').\`;

  const userPrompt = \`TOPIC: \${input.topic}
ADDITIONAL CONTEXT: \${input.notes || "None provided"}\`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: userPrompt,
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          linkedin_content: {
            type: Type.STRING,
            description: "Formatted LinkedIn post with line breaks and strong hook."
          },
          instagram_caption: {
            type: Type.STRING,
            description: "Instagram caption with emoji formatting and call to action."
          },
          hashtags: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "5 to 10 relevant targeted hashtags without the # symbol."
          },
          image_prompt: {
            type: Type.STRING,
            description: "Creative visual prompt describing the perfect accompanying image or infographic."
          }
        },
        required: ["linkedin_content", "instagram_caption", "hashtags", "image_prompt"]
      }
    }
  });

  const rawJson = response.text();
  const parsedContent: GeneratedSocialContent = JSON.parse(rawJson || "{}");
  const tokensUsed = (response.usageMetadata?.totalTokenCount) || 850;

  return {
    content: parsedContent,
    tokensUsed
  };
}`
      },
      callouts: [
        { type: "SECURITY", title: "Server-Side Only", text: "Never expose GEMINI_API_KEY to the browser or prefix it with NEXT_PUBLIC_. All AI calls must execute inside Next.js Route Handlers or Server Actions." },
        { type: "TIP", title: "JSON Schema Guarantee", text: "By specifying `responseSchema` with `responseMimeType: 'application/json'`, Gemini will never return markdown backticks or non-JSON conversational text." }
      ],
      tasks: [
        {
          id: "task-07-1",
          title: "Initialize @google/genai SDK Client",
          desc: "Create ai/geminiClient.ts with lazy singleton initialization and fallback model aliases.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["ai/geminiClient.ts"],
          criteria: [
            "SDK initialized with process.env.GEMINI_API_KEY",
            "Error thrown if API key is missing",
            "Exported typed generation interface"
          ]
        },
        {
          id: "task-07-2",
          title: "Build Modular Prompt Construction Engine",
          desc: "Create ai/promptBuilder.ts to dynamically compile system instructions, brand tone, forbidden words, and few-shot examples.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["ai/promptBuilder.ts"],
          criteria: [
            "Injects brand tone, target persona, and banned words",
            "Applies platform formatting constraints (LinkedIn hooks vs Instagram emojis)",
            "Enforces strict anti-cliché filters"
          ]
        },
        {
          id: "task-07-3",
          title: "Define JSON Schema Output Validator",
          desc: "Configure Gemini responseSchema with strict types for linkedin_content, instagram_caption, hashtags array, and image_prompt.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["ai/geminiService.ts"],
          criteria: [
            "Type.OBJECT schema declared with all 4 required fields",
            "Zod validation fallback to guarantee parsing reliability",
            "Tokens used extracted from usageMetadata"
          ]
        },
        {
          id: "task-07-4",
          title: "Create Server-Side /api/generate Route Handler",
          desc: "Build POST app/api/generate/route.ts to accept topic, fetch brand profile, invoke Gemini, save to generated_posts, log usage, and return JSON.",
          time: "20 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["app/api/generate/route.ts"],
          criteria: [
            "Authenticates user session via Supabase server client",
            "Fetches workspace brand profile",
            "Calls generateSocialContent helper",
            "Inserts record into generated_posts table with 'draft' status",
            "Inserts record into usage_events table",
            "Returns generated post ID and formatted content"
          ]
        }
      ]
    },

    {
      id: "08-content-system",
      number: "08",
      title: "Content Studio & Editor",
      subtitle: "Topic Input, Dual-Platform Preview & Draft Management",
      phaseId: "phase-5",
      day: "Day 6",
      estimatedTime: "50 min",
      difficulty: "Medium",
      priority: "HIGH",
      overview: "Build the user-facing Generation Studio and Draft Editor. Users enter a topic or paste notes, watch the AI stream or generate dual-platform posts, switch between interactive LinkedIn & Instagram preview cards, edit copy in real time, and save drafts.",
      what: "Interactive content generation interface with realistic social media preview cards, character count warnings, hashtag tags, and draft state management.",
      why: "A great editor empowers users to refine and polish AI drafts before publishing, ensuring human-in-the-loop quality control.",
      how: [
        "Create `app/(dashboard)/generate/page.tsx` featuring topic input field, context notes textarea, and 'Generate with Gemini' button.",
        "Create `app/(dashboard)/drafts/page.tsx` and `components/editor/PostEditor.tsx` with platform tabs (LinkedIn / Instagram).",
        "Render realistic mock preview cards: LinkedIn feed style (author avatar, read more fold, like/comment bar) and Instagram card style (square photo placeholder, caption, hashtags).",
        "Implement live character counters (LinkedIn limit: 3,000 chars; Instagram limit: 2,200 chars).",
        "Add action buttons: 'Save as Draft', 'Schedule for Later', and 'Publish Now'."
      ],
      callouts: [
        { type: "TIP", title: "The 'See More' Fold", text: "On LinkedIn, users only see the first 3 lines (approx. 210 characters) before clicking '...see more'. Add a visual indicator showing the exact fold line in your preview card." }
      ],
      tasks: [
        {
          id: "task-08-1",
          title: "Build Topic Generation Studio UI",
          desc: "Create app/(dashboard)/generate/page.tsx with responsive topic input, quick prompt suggestions, and loading state spinner.",
          time: "15 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["app/(dashboard)/generate/page.tsx"],
          criteria: [
            "Topic input field with char limits and suggestions",
            "Optional bullet notes textarea",
            "Generating button state with loading shimmer",
            "Redirect or inline render of generation results"
          ]
        },
        {
          id: "task-08-2",
          title: "Build LinkedIn & Instagram Preview Cards",
          desc: "Create realistic UI mockup components that accurately mimic LinkedIn and Instagram mobile feeds.",
          time: "20 min",
          difficulty: "Medium",
          priority: "HIGH",
          files: ["components/preview/LinkedInPreview.tsx", "components/preview/InstagramPreview.tsx"],
          criteria: [
            "LinkedIn preview shows author, timestamp, text formatting, and action bar",
            "Instagram preview shows avatar, image placeholder, caption, and hashtags",
            "Visual fold indicator for LinkedIn (first 210 characters)"
          ]
        },
        {
          id: "task-08-3",
          title: "Implement Real-Time Draft Editor & Character Counter",
          desc: "Create editable textareas with live character counter, hashtag tag pills, and instant local draft autosave.",
          time: "15 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["components/editor/DraftEditor.tsx"],
          criteria: [
            "Live character and hashtag counters with warning colors near limits",
            "Autosaves edits to Supabase generated_posts table (debounced 1000ms)",
            "Copy to clipboard quick action button"
          ]
        }
      ]
    },

    {
      id: "09-linkedin",
      number: "09",
      title: "LinkedIn Integration",
      subtitle: "OAuth 2.0, Token Vault & UGC Publishing API",
      phaseId: "phase-6",
      day: "Days 7–9",
      estimatedTime: "60 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Connect LinkedIn accounts via OAuth 2.0 (3-legged handshake), store encrypted access tokens in Supabase `social_accounts`, and publish posts directly to user LinkedIn feeds using the LinkedIn UGC Post REST API.",
      what: "End-to-end LinkedIn integration enabling account connection and instant post publishing.",
      why: "LinkedIn is the premier B2B distribution channel. Direct API publishing automates social distribution without manual copy-pasting.",
      how: [
        "Initiate OAuth flow redirecting to `https://www.linkedin.com/oauth/v2/authorization` with scopes `openid`, `profile`, `w_member_social`, `email`.",
        "Implement callback route `app/api/auth/callback/linkedin/route.ts` to exchange `code` for an access token.",
        "Fetch LinkedIn user profile (`/v2/userinfo`) to retrieve member URN (`urn:li:person:xxx`) and full name.",
        "Encrypt access token using AES-256-GCM and store in `social_accounts` table.",
        "Implement `social/linkedin.ts` with `publishLinkedInPost()` calling `https://api.linkedin.com/v2/ugcPosts` with `author`, `lifecycleState: 'PUBLISHED'`, and `specificContent`."
      ],
      codeSnippet: {
        file: "social/linkedin.ts",
        lang: "typescript",
        code: `export interface LinkedInPublishPayload {
  authorUrn: string; // e.g. "urn:li:person:abcdef123"
  accessToken: string;
  text: string;
}

export async function publishToLinkedIn({
  authorUrn,
  accessToken,
  text
}: LinkedInPublishPayload): Promise<{ remoteId: string; postUrl: string }> {
  const url = "https://api.linkedin.com/v2/ugcPosts";

  const body = {
    author: authorUrn,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: text
        },
        shareMediaCategory: "NONE"
      }
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": \`Bearer \${accessToken}\`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(\`LinkedIn Publish Failed (\${response.status}): \${errText}\`);
  }

  const data = await response.json();
  const remoteId = data.id; // e.g. "urn:li:share:719824901824"
  const shareId = remoteId.replace("urn:li:share:", "");
  const postUrl = \`https://www.linkedin.com/feed/update/\${remoteId}/\`;

  return { remoteId, postUrl };
}`
      },
      callouts: [
        { type: "SECURITY", title: "CSRF State Validation", text: "Always pass a cryptographically random 'state' parameter in the OAuth authorization URL and verify it matches in the callback handler to prevent OAuth login CSRF attacks." },
        { type: "IMPORTANT", title: "LinkedIn Token Expiry", text: "LinkedIn User Access Tokens are valid for 60 days. Store token_expires_at and display a warning banner in settings when expiration is within 7 days." }
      ],
      tasks: [
        {
          id: "task-09-1",
          title: "Build LinkedIn OAuth Authorization Trigger",
          desc: "Create endpoint or server action that constructs LinkedIn OAuth URL with state cookie and redirects user.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["app/api/auth/connect/linkedin/route.ts"],
          criteria: [
            "Constructs LinkedIn URL with client_id, redirect_uri, scope, and state",
            "Stores random state string in secure HTTP-only cookie",
            "Redirects browser to LinkedIn consent screen"
          ]
        },
        {
          id: "task-09-2",
          title: "Build LinkedIn Callback & Token Vault Handler",
          desc: "Implement app/api/auth/callback/linkedin/route.ts to exchange code, verify state, fetch member URN, encrypt token with AES-256, and upsert social_accounts.",
          time: "25 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["app/api/auth/callback/linkedin/route.ts"],
          criteria: [
            "Validates state parameter against cookie",
            "Exchanges authorization code at https://www.linkedin.com/oauth/v2/accessToken",
            "Fetches member info from https://api.linkedin.com/v2/userinfo",
            "Encrypts access_token using lib/crypto/encryption.ts",
            "Upserts social_accounts row and redirects to /settings/integrations?connected=linkedin"
          ]
        },
        {
          id: "task-09-3",
          title: "Implement Instant LinkedIn Post Publishing",
          desc: "Create social/linkedin.ts and POST /api/publish/linkedin route to publish a post and save record in published_posts.",
          time: "20 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["social/linkedin.ts", "app/api/publish/linkedin/route.ts"],
          criteria: [
            "Fetches social_accounts row and decrypts access token",
            "Calls LinkedIn UGC Post API",
            "Inserts row into published_posts with remote_post_id and public URL",
            "Updates generated_posts status to 'published'"
          ]
        }
      ]
    },

    {
      id: "10-instagram",
      number: "10",
      title: "Instagram Integration",
      subtitle: "Meta Graph API, Media Containers & Publishing",
      phaseId: "phase-6",
      day: "Days 8–9",
      estimatedTime: "75 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Connect Instagram Professional accounts via Meta Graph API, handle 2-step media container publishing (Create Container → Check Processing Status → Publish Container), and store published post IDs.",
      what: "Meta Graph API integration for Instagram Professional / Creator account publishing.",
      why: "Instagram requires a unique 2-stage asynchronous container workflow. Understanding media container lifecycle is essential to prevent publishing timeouts.",
      how: [
        "Initiate Facebook Login with permissions: `instagram_basic`, `instagram_content_publish`, `pages_show_list`, `pages_read_engagement`.",
        "In callback, exchange short-lived token for Long-Lived Token (60-day lifespan).",
        "Query `/me/accounts` to find linked Facebook Pages and discover their associated `instagram_business_account` ID.",
        "Store Page Access Token and Instagram Account ID encrypted in `social_accounts`.",
        "Implement 2-step Publishing: Step 1: POST `/{ig-user-id}/media` (image_url, caption). Step 2: Poll `/{creation-id}?fields=status_code` until `FINISHED`. Step 3: POST `/{ig-user-id}/media_publish` (creation_id)."
      ],
      codeSnippet: {
        file: "social/instagram.ts",
        lang: "typescript",
        code: `export interface InstagramPublishPayload {
  igAccountId: string; // e.g. "17841405309211562"
  pageAccessToken: string;
  imageUrl: string; // Must be a publicly accessible HTTPS image URL
  caption: string;
}

export async function publishToInstagram({
  igAccountId,
  pageAccessToken,
  imageUrl,
  caption
}: InstagramPublishPayload): Promise<{ remoteId: string; postUrl: string }> {
  // Step 1: Create Media Container
  const containerUrl = \`https://graph.facebook.com/v21.0/\${igAccountId}/media\`;
  const containerRes = await fetch(containerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image_url: imageUrl,
      caption: caption,
      access_token: pageAccessToken
    })
  });

  if (!containerRes.ok) {
    const err = await containerRes.text();
    throw new Error(\`Failed to create Instagram Container: \${err}\`);
  }

  const { id: creationId } = await containerRes.json();

  // Step 2: Poll Container Status until FINISHED
  let isReady = false;
  let attempts = 0;
  while (!isReady && attempts < 10) {
    await new Promise((r) => setTimeout(r, 2000)); // wait 2 seconds
    const statusRes = await fetch(
      \`https://graph.facebook.com/v21.0/\${creationId}?fields=status_code&access_token=\${pageAccessToken}\`
    );
    const statusData = await statusRes.json();
    if (statusData.status_code === "FINISHED") {
      isReady = true;
    } else if (statusData.status_code === "ERROR") {
      throw new Error("Instagram media container processing failed on Meta servers.");
    }
    attempts++;
  }

  if (!isReady) {
    throw new Error("Instagram media processing timed out.");
  }

  // Step 3: Publish Container
  const publishUrl = \`https://graph.facebook.com/v21.0/\${igAccountId}/media_publish\`;
  const publishRes = await fetch(publishUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      creation_id: creationId,
      access_token: pageAccessToken
    })
  });

  if (!publishRes.ok) {
    const err = await publishRes.text();
    throw new Error(\`Failed to publish Instagram Container: \${err}\`);
  }

  const publishData = await publishRes.json();
  const remoteId = publishData.id;
  const postUrl = \`https://www.instagram.com/p/\${remoteId}/\`;

  return { remoteId, postUrl };
}`
      },
      callouts: [
        { type: "WARNING", title: "Public HTTPS Image URL Required", text: "Instagram API requires a publicly accessible HTTPS image URL (e.g. Supabase Storage public bucket). Localhost URLs or private buckets will be rejected with error 36003." },
        { type: "NOTE", title: "Meta Review Notice", text: "In development mode, only App Admins, Developers, and Test Users can connect their Instagram accounts. Full public access requires Meta App Review." }
      ],
      tasks: [
        {
          id: "task-10-1",
          title: "Build Meta / Facebook OAuth Handshake",
          desc: "Create app/api/auth/connect/facebook/route.ts requesting instagram_basic, instagram_content_publish, and pages_show_list.",
          time: "20 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["app/api/auth/connect/facebook/route.ts"],
          criteria: [
            "Constructs Facebook Dialog OAuth URL with requested permissions",
            "Stores cryptographic state token in secure cookie",
            "Redirects user to Meta Login dialog"
          ]
        },
        {
          id: "task-10-2",
          title: "Handle Facebook Callback & Long-Lived Token Exchange",
          desc: "Implement app/api/auth/callback/facebook/route.ts to exchange short token for 60-day token and discover linked Instagram account ID.",
          time: "25 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["app/api/auth/callback/facebook/route.ts"],
          criteria: [
            "Exchanges code for short-lived access token",
            "Upgrades to Long-Lived User Access Token (oauth/access_token?grant_type=fb_exchange_token)",
            "Queries /me/accounts?fields=name,access_token,instagram_business_account",
            "Encrypts Page Access Token and saves to social_accounts table"
          ]
        },
        {
          id: "task-10-3",
          title: "Implement 2-Step Instagram Publishing Flow",
          desc: "Create social/instagram.ts with container creation, status polling loop, and final media_publish call.",
          time: "30 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["social/instagram.ts", "app/api/publish/instagram/route.ts"],
          criteria: [
            "Creates media container with image_url and caption",
            "Polls status_code until FINISHED or ERROR",
            "Publishes container and records remote post ID in published_posts",
            "Handles Meta API errors and rate limit responses"
          ]
        }
      ]
    },

    {
      id: "11-scheduling",
      number: "11",
      title: "Scheduling Engine",
      subtitle: "BullMQ, Upstash Redis & Background Workers",
      phaseId: "phase-7",
      day: "Days 10–11",
      estimatedTime: "60 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Build the distributed job scheduler using BullMQ and Upstash Redis. Users choose a scheduled publish date/time (UTC), creating a delayed job. A dedicated background worker executes the job at the exact scheduled timestamp, handles retries, and records publication.",
      what: "Background job scheduling engine with delayed queues, exponential backoff retries, and idempotency protection.",
      why: "Serverless web requests cannot wait for future timestamps. A persistent queue guarantees scheduled posts are published even if the user is offline.",
      how: [
        "Create `lib/queue/publishQueue.ts` initializing a BullMQ `Queue('social-publish', { connection })`.",
        "When scheduling a post, calculate `delay = scheduled_at.getTime() - Date.now()`.",
        "Add job to BullMQ queue: `queue.add('publish-job', { scheduledPostId }, { delay, jobId: scheduledPostId, attempts: 3, backoff: { type: 'exponential', delay: 5000 } })`.",
        "Create `workers/publishWorker.ts` with a BullMQ `Worker` that fetches the scheduled post, acquires an atomic lock, decrypts the social token, invokes the respective publisher (LinkedIn/Instagram), and updates status."
      ],
      codeSnippet: {
        file: "workers/publishWorker.ts",
        lang: "typescript",
        code: `import { Worker, Job } from "bullmq";
import Redis from "ioredis";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { decryptToken } from "@/lib/crypto/encryption";
import { publishToLinkedIn } from "@/social/linkedin";
import { publishToInstagram } from "@/social/instagram";

const connection = new Redis(process.env.REDIS_URL!, { maxRetriesPerRequest: null });

export const publishWorker = new Worker(
  "social-publish",
  async (job: Job<{ scheduledPostId: string }>) => {
    const { scheduledPostId } = job.data;
    console.log(\`[Worker] Processing scheduled post: \${scheduledPostId}\`);

    // 1. Fetch scheduled post with source post and social account
    const { data: sched, error } = await supabaseAdmin
      .from("scheduled_posts")
      .select(\`
        id, workspace_id, status, scheduled_at,
        post:generated_posts!post_id (id, topic, linkedin_content, instagram_caption),
        account:social_accounts!social_account_id (id, platform, account_id, encrypted_access_token)
      \`)
      .eq("id", scheduledPostId)
      .single();

    if (error || !sched) {
      throw new Error(\`Scheduled post \${scheduledPostId} not found in database.\`);
    }

    // Idempotency check
    if (sched.status === "completed") {
      console.log(\`[Worker] Post \${scheduledPostId} already completed. Skipping.\`);
      return;
    }

    // Update status to processing
    await supabaseAdmin
      .from("scheduled_posts")
      .update({ status: "processing" })
      .eq("id", scheduledPostId);

    try {
      const accessToken = decryptToken(sched.account.encrypted_access_token);
      let publishResult: { remoteId: string; postUrl: string };

      if (sched.account.platform === "linkedin") {
        publishResult = await publishToLinkedIn({
          authorUrn: sched.account.account_id,
          accessToken: accessToken,
          text: (sched.post as any).linkedin_content
        });
      } else if (sched.account.platform === "instagram") {
        publishResult = await publishToInstagram({
          igAccountId: sched.account.account_id,
          pageAccessToken: accessToken,
          imageUrl: "https://your-public-bucket.supabase.co/default-post.jpg",
          caption: (sched.post as any).instagram_caption
        });
      } else {
        throw new Error(\`Unsupported platform: \${sched.account.platform}\`);
      }

      // Record successful publication
      await supabaseAdmin.from("published_posts").insert({
        workspace_id: sched.workspace_id,
        post_id: (sched.post as any).id,
        social_account_id: sched.account.id,
        remote_post_id: publishResult.remoteId,
        published_url: publishResult.postUrl
      });

      // Update statuses
      await supabaseAdmin
        .from("scheduled_posts")
        .update({ status: "completed" })
        .eq("id", scheduledPostId);

      await supabaseAdmin
        .from("generated_posts")
        .update({ status: "published" })
        .eq("id", (sched.post as any).id);

      console.log(\`[Worker] Successfully published post \${scheduledPostId} -> \${publishResult.postUrl}\`);
    } catch (publishErr: any) {
      console.error(\`[Worker] Error publishing post \${scheduledPostId}:\`, publishErr);
      await supabaseAdmin
        .from("scheduled_posts")
        .update({ status: "failed", error_message: publishErr.message })
        .eq("id", scheduledPostId);
      throw publishErr; // Re-throw so BullMQ triggers exponential backoff retry
    }
  },
  { connection, concurrency: 5 }
);`
      },
      callouts: [
        { type: "IMPORTANT", title: "Timezones & UTC", text: "Always store scheduled_at timestamps in UTC format (ISO 8601 string: 2026-08-30T14:00:00Z) in the database. Calculate the delay relative to Date.now() on the server." },
        { type: "TIP", title: "Worker Deployment", text: "In production, run workers as a standalone Node.js background process (e.g. on Railway, Render, or a persistent container) with npm run worker." }
      ],
      tasks: [
        {
          id: "task-11-1",
          title: "Configure Upstash Redis & BullMQ Queue",
          desc: "Create lib/queue/publishQueue.ts and initialize Redis connection with maxRetriesPerRequest: null.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["lib/queue/publishQueue.ts"],
          criteria: [
            "ioredis client connected with TLS to Upstash Redis",
            "BullMQ Queue instantiated and exported",
            "Connection healthcheck script verifies read/write"
          ]
        },
        {
          id: "task-11-2",
          title: "Build /api/schedule Route Handler",
          desc: "Create POST app/api/schedule/route.ts to calculate millisecond delay, insert row in scheduled_posts, and add job to BullMQ.",
          time: "20 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["app/api/schedule/route.ts"],
          criteria: [
            "Validates scheduled_at is at least 5 minutes in the future",
            "Inserts row in scheduled_posts with status 'queued'",
            "Adds job to BullMQ with delay and custom jobId",
            "Updates scheduled_posts with the created BullMQ job_id"
          ]
        },
        {
          id: "task-11-3",
          title: "Build BullMQ Background Publish Worker",
          desc: "Create workers/publishWorker.ts with atomic database locks, token decryption, multi-platform dispatch, and retry handler.",
          time: "25 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["workers/publishWorker.ts"],
          criteria: [
            "Worker listens to 'social-publish' queue with concurrency: 5",
            "Executes LinkedIn or Instagram publication based on platform tag",
            "Inserts row in published_posts upon success",
            "Updates scheduled_posts and generated_posts records",
            "Exponential backoff configured for transient network errors"
          ]
        }
      ]
    },

    {
      id: "12-usage",
      number: "12",
      title: "Usage & Telemetry",
      subtitle: "Token Tracking, Cost Estimation & Error Logs",
      phaseId: "phase-7",
      day: "Day 11",
      estimatedTime: "30 min",
      difficulty: "Easy",
      priority: "MEDIUM",
      overview: "Track AI token usage, calculate estimated generation cost, log API latencies, record publishing errors, and display a clean usage dashboard for workspace admins.",
      what: "Audit log and usage analytics dashboard tracking Gemini token consumption and API operational health.",
      why: "Monitoring token consumption prevents unexpected bill shock, tracks cost per workspace, and flags failing social tokens early.",
      how: [
        "Log a row in `usage_events` after every Gemini generation call with `tokens_used`, `cost_estimated_cents`, and `metadata`.",
        "Build `app/(dashboard)/usage/page.tsx` displaying: Total tokens consumed this billing cycle, Estimated API cost, Generations count, and Recent event logs table.",
        "Display error banners when social accounts encounter revoked tokens or OAuth scope re-auth requirements."
      ],
      callouts: [
        { type: "TIP", title: "Cost Calculation Formula", text: "For Gemini 2.0 Flash: approx. $0.10 per 1M input tokens and $0.40 per 1M output tokens. Standard generation uses ~1,200 tokens ($0.0003 USD per post)." }
      ],
      tasks: [
        {
          id: "task-12-1",
          title: "Implement Usage Event Logger Utility",
          desc: "Create lib/usage/logUsageEvent.ts helper that inserts diagnostic records into Supabase usage_events table.",
          time: "10 min",
          difficulty: "Easy",
          priority: "MEDIUM",
          files: ["lib/usage/logUsageEvent.ts"],
          criteria: [
            "Calculates estimated cost in cents based on model type",
            "Logs latency in ms, prompt length, and error flags",
            "Fails silently without crashing user request if logging encounters DB hiccup"
          ]
        },
        {
          id: "task-12-2",
          title: "Build Workspace Usage Dashboard UI",
          desc: "Create app/(dashboard)/usage/page.tsx with aggregate stat cards, monthly token progress bar, and audit table.",
          time: "20 min",
          difficulty: "Medium",
          priority: "MEDIUM",
          files: ["app/(dashboard)/usage/page.tsx"],
          criteria: [
            "Total tokens used card with percentage of monthly quota",
            "Estimated dollar cost card",
            "Recent activity audit log with timestamps and status badges"
          ]
        }
      ]
    },

    {
      id: "13-testing",
      number: "13",
      title: "Testing Center",
      subtitle: "End-to-End QA, Security Review & Verification",
      phaseId: "phase-8",
      day: "Days 12–13",
      estimatedTime: "60 min",
      difficulty: "Hard",
      priority: "CRITICAL",
      overview: "Execute the comprehensive QA checklist covering Authentication, Gemini AI generation, LinkedIn publishing, Instagram containers, BullMQ queue execution, RLS tenant isolation, and security penetration review.",
      what: "Structured testing protocol and automated test scripts to verify all MVP features prior to production launch.",
      why: "Thorough testing prevents fatal production bugs such as leaking decrypted tokens, duplicate scheduled publishing, or silent OAuth failures.",
      how: [
        "Follow the categorized QA checklists in the Testing Center tab.",
        "Test happy paths and deliberate failure modes (e.g. invalid Gemini key, expired OAuth token, empty prompt, unauthorized workspace access).",
        "Verify RLS policies by logging in as User B and attempting to query User A's generated posts directly via REST.",
        "Trigger scheduled post with 1-minute delay and verify BullMQ worker picks up and completes the job."
      ],
      callouts: [
        { type: "SECURITY", title: "Penetration Checklist", text: "1. Confirm SUPABASE_SERVICE_ROLE_KEY is absent from client bundle. 2. Verify all API routes validate session user. 3. Confirm AES-256 decrypted tokens exist only in worker RAM." }
      ],
      tasks: [
        {
          id: "task-13-1",
          title: "Execute Authentication QA Test Suite",
          desc: "Test email signup, email confirmation, invalid password handling, Google OAuth login, and protected route redirects.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["tests/auth.test.ts"],
          criteria: [
            "User signup and login verified",
            "Unauthenticated access to /dashboard redirected to /login",
            "Logout clears session cookie completely"
          ]
        },
        {
          id: "task-13-2",
          title: "Execute Gemini AI & Prompt Test Suite",
          desc: "Verify structured JSON generation, brand voice injection, prohibited words exclusion, and error handling for missing API keys.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["tests/ai.test.ts"],
          criteria: [
            "Valid topic produces formatted LinkedIn post + Instagram caption",
            "Output contains no forbidden words listed in brand profile",
            "Invalid/missing API key returns clean 400/500 JSON error message",
            "Tokens used recorded in usage_events"
          ]
        },
        {
          id: "task-13-3",
          title: "Execute LinkedIn & Instagram Publishing Tests",
          desc: "Perform live test post to LinkedIn feed and Instagram professional account; verify remote post URLs load in browser.",
          time: "15 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["tests/social.test.ts"],
          criteria: [
            "LinkedIn post appears on live LinkedIn profile feed",
            "Instagram media container finishes and publishes photo + caption",
            "published_posts table populated with verified remote IDs"
          ]
        },
        {
          id: "task-13-4",
          title: "Execute BullMQ Scheduling & Worker Queue Tests",
          desc: "Schedule a post for 2 minutes in the future; verify worker executes job, updates status to 'completed', and prevents duplicate runs.",
          time: "15 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["tests/queue.test.ts"],
          criteria: [
            "BullMQ delayed job added to Upstash Redis",
            "Worker fires at target timestamp",
            "Idempotency verified: re-running worker does not double post"
          ]
        },
        {
          id: "task-13-5",
          title: "Execute RLS & Security Audit",
          desc: "Attempt cross-tenant database access and verify client bundle contains 0 private secrets.",
          time: "10 min",
          difficulty: "Hard",
          priority: "CRITICAL",
          files: ["tests/security.test.ts"],
          criteria: [
            "Client bundle inspected: 0 server keys found",
            "Direct REST queries across foreign workspace_id return 403 / empty rows",
            "AES-256 token encryption verified in raw database rows"
          ]
        }
      ]
    },

    {
      id: "14-deployment",
      number: "14",
      title: "Deployment Center",
      subtitle: "Vercel, Supabase Production & Worker Hosting",
      phaseId: "phase-8",
      day: "Day 14",
      estimatedTime: "45 min",
      difficulty: "Medium",
      priority: "CRITICAL",
      overview: "Deploy the Next.js 14 web application to Vercel, deploy the background BullMQ worker to a persistent container (e.g. Render, Railway, or VPS), configure production environment variables, and update production OAuth redirect URLs in LinkedIn and Meta developer portals.",
      what: "Production deployment guide and checklist for full-stack SaaS operation.",
      why: "Production environments require separate database instances, production OAuth callback URLs, and persistent background workers.",
      how: [
        "Push your clean repository to GitHub.",
        "Import repository to Vercel and configure all 15 environment variables in Project Settings.",
        "Add production domain (e.g., `https://app.aisocialcontentos.com`) to LinkedIn Developer Portal Authorized Redirect URIs.",
        "Add production domain to Meta for Developers Facebook Login Settings Valid OAuth Redirect URIs.",
        "Deploy the BullMQ worker (`tsx workers/publishWorker.ts`) as a background worker service on Render or Railway.",
        "Run end-to-end smoke test on production URL."
      ],
      callouts: [
        { type: "WARNING", title: "Production OAuth URLs", text: "Remember to add your live production URL (https://your-domain.com/api/auth/callback/linkedin) to both LinkedIn and Meta developer portals before testing OAuth in production." },
        { type: "IMPORTANT", title: "Worker Persistence", text: "Vercel Serverless Functions cannot run long-lived background workers. Run `npm run worker` on a persistent hosting platform like Railway, Render Background Worker, or Fly.io." }
      ],
      tasks: [
        {
          id: "task-14-1",
          title: "Connect Repository & Deploy Next.js to Vercel",
          desc: "Import GitHub repo into Vercel, configure Node 20 runtime, and trigger initial build.",
          time: "15 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["vercel.json"],
          criteria: [
            "Vercel project connected to GitHub repository",
            "Build command: next build succeeds",
            "Production URL generated and live"
          ]
        },
        {
          id: "task-14-2",
          title: "Configure Production Environment Variables on Vercel",
          desc: "Populate all 15 environment variables in Vercel Project Settings > Environment Variables.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: [".env.production"],
          criteria: [
            "All 15 keys added to Vercel Production environment",
            "NEXT_PUBLIC_APP_URL set to live production domain",
            "Verified application loads correctly on production domain"
          ]
        },
        {
          id: "task-14-3",
          title: "Deploy Persistent BullMQ Worker Service",
          desc: "Deploy workers/publishWorker.ts to Railway or Render as a continuous background worker.",
          time: "15 min",
          difficulty: "Medium",
          priority: "CRITICAL",
          files: ["Procfile", "workers/publishWorker.ts"],
          criteria: [
            "Background worker running continuously without restarts",
            "Connected to production Upstash Redis and Supabase",
            "Worker logs show active listening to 'social-publish' queue"
          ]
        },
        {
          id: "task-14-4",
          title: "Update Production OAuth Redirect URIs in Developer Portals",
          desc: "Add production callback URLs to LinkedIn Developer Portal and Meta for Developers console.",
          time: "10 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["developer-portals"],
          criteria: [
            "LinkedIn redirect URI updated with https://production-domain/api/auth/callback/linkedin",
            "Meta OAuth redirect URI updated with https://production-domain/api/auth/callback/facebook",
            "Verified live OAuth login and social account connection in production"
          ]
        }
      ]
    },

    {
      id: "15-launch-checklist",
      number: "15",
      title: "Launch Checklist",
      subtitle: "Final Verification & Go-Live Protocol",
      phaseId: "phase-8",
      day: "Day 14",
      estimatedTime: "20 min",
      difficulty: "Medium",
      priority: "CRITICAL",
      overview: "The final 16-point master checklist. When all criteria are checked, your AI Social Content OS SaaS MVP is officially complete, battle-tested, and ready for live user onboarding and customer demos.",
      what: "Final operational audit covering all 8 MVP phases.",
      why: "A comprehensive pre-launch review ensures no loose ends, unverified edge cases, or leaked test credentials make it to production.",
      how: [
        "Go through each of the 16 master launch items.",
        "Check off items as verified in your production environment.",
        "When all items are checked, celebrate reaching 100% MVP completion!"
      ],
      callouts: [
        { type: "TIP", title: "Demo Readiness", text: "Prepare 2 pre-generated topic examples ('AI Trends in 2026', 'Engineering Leadership Lessons') for live demonstrations." }
      ],
      tasks: [
        {
          id: "task-15-1",
          title: "Authentication & Workspace Isolation Verified",
          desc: "Confirm signup, login, session refresh, and multi-tenant RLS isolation are rock solid.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/auth"],
          criteria: ["Auth confirmed working in production"]
        },
        {
          id: "task-15-2",
          title: "Database Schema & 9 Tables Live with RLS Enabled",
          desc: "Confirm all 9 tables exist in production database with active RLS policies.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/db"],
          criteria: ["Production database verified"]
        },
        {
          id: "task-15-3",
          title: "Brand Voice Settings & Few-Shot Post Library Working",
          desc: "Confirm tone, audience, and banned words are loaded into prompt builder.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["launch/brand"],
          criteria: ["Brand settings verified"]
        },
        {
          id: "task-15-4",
          title: "Google Gemini 2.0/1.5 AI Generation Studio Verified",
          desc: "Confirm dual-platform generation (LinkedIn + Instagram) returns clean structured JSON in < 3 seconds.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/gemini"],
          criteria: ["AI generation verified"]
        },
        {
          id: "task-15-5",
          title: "Content Draft Studio & Real-Time Preview Working",
          desc: "Confirm post editor, character counter fold, and draft saving function seamlessly.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["launch/editor"],
          criteria: ["Editor verified"]
        },
        {
          id: "task-15-6",
          title: "LinkedIn OAuth & Direct Post Publishing Live",
          desc: "Confirm 3-legged OAuth connects user account and instant publish drops post to live LinkedIn feed.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/linkedin"],
          criteria: ["LinkedIn publishing verified"]
        },
        {
          id: "task-15-7",
          title: "Instagram Meta Graph OAuth & Container Publishing Live",
          desc: "Confirm Instagram Professional connection and 2-step media container publishing succeed.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/instagram"],
          criteria: ["Instagram publishing verified"]
        },
        {
          id: "task-15-8",
          title: "BullMQ & Redis Scheduling Engine Active in Worker",
          desc: "Confirm delayed jobs execute at target UTC timestamp with zero duplicate posts.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/scheduler"],
          criteria: ["Background scheduler verified"]
        },
        {
          id: "task-15-9",
          title: "AES-256 Token Encryption at Rest Audited",
          desc: "Confirm all OAuth tokens and API keys are encrypted with 32-byte hex key in database rows.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/security"],
          criteria: ["Encryption audited"]
        },
        {
          id: "task-15-10",
          title: "Usage & Token Consumption Logging Operational",
          desc: "Confirm usage_events captures token usage and estimated cost for every generation.",
          time: "5 min",
          difficulty: "Easy",
          priority: "MEDIUM",
          files: ["launch/usage"],
          criteria: ["Usage telemetry verified"]
        },
        {
          id: "task-15-11",
          title: "Error Handling & User Banners Polished",
          desc: "Confirm all failure states show friendly, actionable error messages rather than raw stack traces.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["launch/errors"],
          criteria: ["Error handling verified"]
        },
        {
          id: "task-15-12",
          title: "Mobile Responsive Layout Tested on Real Devices",
          desc: "Confirm all dashboard screens, sidebars, and preview cards render smoothly on mobile viewports.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["launch/mobile"],
          criteria: ["Mobile responsiveness verified"]
        },
        {
          id: "task-15-13",
          title: "Production Vercel Deployment Live on Custom Domain",
          desc: "Confirm HTTPS SSL certificate active, DNS configured, and fast edge loading.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/vercel"],
          criteria: ["Production domain live"]
        },
        {
          id: "task-15-14",
          title: "Background Worker Running on Persistent Host",
          desc: "Confirm worker process is monitored with auto-restart on Render or Railway.",
          time: "5 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/worker"],
          criteria: ["Persistent worker active"]
        },
        {
          id: "task-15-15",
          title: "Demo Scenarios & Test Accounts Prepared",
          desc: "Prepare 2 demo accounts with pre-connected social profiles for investor/customer walkthroughs.",
          time: "5 min",
          difficulty: "Easy",
          priority: "HIGH",
          files: ["launch/demo"],
          criteria: ["Demo walkthrough rehearsed"]
        },
        {
          id: "task-15-16",
          title: "Official MVP Release Signed Off 🎉",
          desc: "The AI Social Content OS MVP is officially 100% complete, hardened, and ready to scale!",
          time: "2 min",
          difficulty: "Easy",
          priority: "CRITICAL",
          files: ["launch/done"],
          criteria: ["MVP Execution Complete!"]
        }
      ]
    },

    {
      id: "16-future-roadmap",
      number: "16",
      title: "Future Roadmap",
      subtitle: "Post-MVP Enhancements & Advanced Features",
      phaseId: "phase-8",
      day: "Post-MVP",
      estimatedTime: "Read-only",
      difficulty: "Easy",
      priority: "MEDIUM",
      overview: "Features intentionally excluded from the initial 10–14 day MVP scope to protect delivery velocity. These items represent the Next Phase product roadmap.",
      what: "Documented post-MVP feature backlog.",
      why: "Strict MVP discipline requires labeling non-core ideas as 'Future Enhancements' rather than letting scope creep delay the initial launch.",
      how: [
        "Review the planned Post-MVP modules below.",
        "Prioritize items based on initial beta user feedback after MVP launch."
      ],
      callouts: [
        { type: "NOTE", title: "MVP Scope Reminder", text: "Do NOT implement these features during the initial 14-day sprint. Focus 100% on perfecting the core MVP execution." }
      ],
      tasks: [
        {
          id: "task-16-1",
          title: "Future: AI Image & Carousel Generator (Imagen / DALL-E 3)",
          desc: "Automated generation of brand-styled infographics, carousel slides, and custom header images.",
          time: "Post-MVP",
          difficulty: "Medium",
          priority: "MEDIUM",
          files: ["ai/imageGenerator.ts"],
          criteria: ["Auto-generates 1080x1080 social graphics matching brand palette"]
        },
        {
          id: "task-16-2",
          title: "Future: Real-Time Trending Topic Radar (Google Trends / Reddit API)",
          desc: "Automatic scraper identifying breakout industry topics to suggest fresh content angles daily.",
          time: "Post-MVP",
          difficulty: "Hard",
          priority: "MEDIUM",
          files: ["services/trendRadar.ts"],
          criteria: ["Fetches trending news and summarizes into instant topic ideas"]
        },
        {
          id: "task-16-3",
          title: "Future: Social Engagement & Performance Analytics Dashboard",
          desc: "Poll LinkedIn and Instagram post analytics (impressions, likes, comments, click-through rates) and feed back into AI prompt refinement.",
          time: "Post-MVP",
          difficulty: "Hard",
          priority: "MEDIUM",
          files: ["services/analyticsSync.ts"],
          criteria: ["Tracks engagement metrics and highlights top-performing post formats"]
        },
        {
          id: "task-16-4",
          title: "Future: Additional Platforms (X/Twitter, Threads, TikTok, YouTube Community)",
          desc: "Expand OAuth connectors to support Twitter/X thread formatting, Threads API, and YouTube posts.",
          time: "Post-MVP",
          difficulty: "Medium",
          priority: "MEDIUM",
          files: ["social/twitter.ts", "social/threads.ts"],
          criteria: ["Multi-platform distribution expanded to 6 networks"]
        }
      ]
    }
  ]
};
