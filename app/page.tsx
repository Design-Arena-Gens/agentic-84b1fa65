"use client";

import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import { SparklesIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Realtime story synthesis",
    description:
      "Spin up immersive narratives that adapt to audience sentiment, tone, and pacing without breaking flow.",
    icon: "⚡"
  },
  {
    title: "Multimodal storyboard",
    description:
      "Compose scripts, scene directions, and generative visuals together in a unified, collaborative canvas.",
    icon: "🎬"
  },
  {
    title: "Branching logic designer",
    description:
      "Use visual logic to orchestrate branching paths and decision trees that remain consistent to your canon.",
    icon: "🧭"
  }
];

const useCases = [
  {
    name: "Interactive media studios",
    detail: "Prototype episodic series and audience-driven storyworlds in half the time."
  },
  {
    name: "Brand experience teams",
    detail: "Craft shoppable narratives that react to customers and elevate product launches."
  },
  {
    name: "Learning & development",
    detail: "Build adaptive training sims with emotionally responsive characters and environments."
  }
];

const stats = [
  { label: "Production speed", value: "6x", caption: "faster concept-to-pilot" },
  { label: "Audience retention", value: "+41%", caption: "avg improvement in pilots" },
  { label: "Team adoption", value: "93%", caption: "of creatives ship first week" }
];

const timeline = [
  {
    title: "Prompt alignment",
    subtitle: "1. Sketch the story DNA",
    description: "Feed Kling a story bible, mood boards, tone references, and audience persona."
  },
  {
    title: "Collaborative build",
    subtitle: "2. Co-create the experience",
    description: "Simultaneously author scripts, environments, and interactive nodes with your team."
  },
  {
    title: "Live deployment",
    subtitle: "3. Ship to every channel",
    description: "Deploy as web experiences, social reels, live streams, or XR scenes with one click."
  }
];

const faqs = [
  {
    question: "What makes Kling different from other AI video tools?",
    answer:
      "Kling treats story structure as a living system. We fuse language, motion, and logic so teams can iterate on narrative beats, visuals, and interactive pathways simultaneously."
  },
  {
    question: "Can we connect Kling to our existing pipelines?",
    answer:
      "Yes. Kling outputs to popular NLEs, game engines, and marketing automation stacks via API. You can also export raw assets on demand."
  },
  {
    question: "Is Kling safe for enterprise data?",
    answer:
      "We ship with SOC2-ready controls, private model hosting, and granular workspace governance so sensitive IP stays protected."
  }
];

export default function Page() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-overlay opacity-40" aria-hidden />
      <Navigation />

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-kling-500/20 via-slate-900/40 to-slate-950 px-8 py-20 shadow-2xl">
          <div className="absolute right-[-20%] top-[-20%] h-[520px] w-[520px] rounded-full bg-kling-400/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-[-10%] left-[10%] h-72 w-72 rounded-full bg-kling-800/30 blur-3xl" aria-hidden />
          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/70">
                <SparklesIcon className="h-4 w-4" /> AI-native narrative studio
              </span>
              <h1 className="text-5xl font-semibold text-white sm:text-6xl">
                Stories that respond to your audience in real time.
              </h1>
              <p className="text-lg text-white/70">
                Kling helps creative teams spin up cinematic, interactive experiences powered by multimodal AI. Blend scripts, scenes, and logic into a single adaptive canvas — then publish to any channel.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#early-access" className="justify-center">
                  Get early access
                </Button>
                <Button href="#demo" variant="secondary" className="justify-center">
                  <PlayCircleIcon className="h-5 w-5" /> Watch product demo
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 text-sm text-white/70">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-semibold text-white">{stat.value}</span>
                    <span>{stat.label}</span>
                    <span className="text-xs text-white/50">{stat.caption}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className="glass relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 p-6 text-sm text-white/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
                <span>Live simulation</span>
                <span>V4</span>
              </div>
              <div className="mt-6 space-y-5">
                <div data-highlight className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/80">
                    <strong>Kai:</strong> "Show me how this world changes if the tide never recedes."
                  </p>
                </div>
                <div className="rounded-2xl border border-kling-500/30 bg-kling-500/10 p-4 shadow-glow">
                  <p className="text-sm text-kling-100">
                    <strong>Kling:</strong> The shoreline becomes a forest of bioluminescent kelp, humming with luminous spores. Characters navigate floating walkways that pulse to the rhythm of an ancient song.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/80">
                    <strong>Kai:</strong> "Branch to the rogue diver POV." <span className="text-kling-200">(auto-animating)</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
                <span>3 pathways - 27 generated props</span>
                <span>Syncing to Unreal</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="product" className="mt-24 grid gap-10 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="section-gradient rounded-3xl p-8">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-5 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
          <motion.div
            className="section-gradient rounded-3xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white">Generator timeline</h3>
            <p className="mt-3 text-sm text-white/70">
              Kling orchestrates story beats through collaborative rituals. Each stage keeps your creative intent intact while the AI handles heavy lifting.
            </p>
            <div className="mt-6 space-y-5">
              {timeline.map((step) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-kling-200">{step.subtitle}</p>
                  <p className="mt-2 text-lg font-medium text-white">{step.title}</p>
                  <p className="mt-2 text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="use-cases" className="mt-24 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.name} className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-white">{useCase.name}</h4>
              <p className="text-sm text-white/70">{useCase.detail}</p>
            </div>
          ))}
        </section>

        <section id="technology" className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-slate-950/60 p-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-kling-200">Under the hood</span>
            <h2 className="text-3xl font-semibold text-white">A stack built to choreograph multimodal intelligence.</h2>
            <p className="text-white/70">
              Kling blends proprietary diffusion models, real-time speech synthesis, and agentic orchestration. Synchronize renders, audio cues, and branching logic through our Graph timeline engine.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-white">Storygraph core</h3>
              <p className="mt-2 text-sm text-white/70">
                Structured knowledge graph keeps canon, tone, and continuity aligned across every branch.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-white">Scene renderer</h3>
              <p className="mt-2 text-sm text-white/70">
                Blend 3D, motion, and stylized diffusion through adaptive render pipelines with live preview.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-white">Agent mesh</h3>
              <p className="mt-2 text-sm text-white/70">
                Domain specialists collaborate asynchronously to preserve story integrity and pacing.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-white">Open surface APIs</h3>
              <p className="mt-2 text-sm text-white/70">
                Webhooks and SDKs keep Kling slots connected with your creative cloud and game engines.
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className="mt-24 grid gap-10 md:grid-cols-[1.25fr_1fr]">
          <div className="section-gradient relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(36,127,255,0.2),transparent_60%)]" aria-hidden />
            <div className="relative z-10 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-kling-200">Live narrative canvas</p>
              <h2 className="text-3xl font-semibold text-white">Storyboard in motion.</h2>
              <p className="text-sm text-white/70">
                Mix narration, character arcs, and interactive triggers in real time. Collaborators can pin feedback, remix prompts, and generate alternate branches instantly.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li>- Adaptive scene cards with synchronized audio cues</li>
                <li>- Branch versioning with instant diff previews</li>
                <li>- One-click exports to Unreal, Unity, and WebGL</li>
              </ul>
            </div>
          </div>
          <div className="section-gradient rounded-3xl p-8">
            <h3 className="text-lg font-medium text-white">Project snapshot</h3>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <span>Emotion sync</span>
                <span className="text-kling-200">Real-time</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <span>Render queue</span>
                <span className="text-kling-200">Ready</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <span>Distribution</span>
                <span className="text-kling-200">Web / Live / XR</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="text-xs uppercase tracking-[0.3em] text-kling-200">Plans</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">Flexible for studios of every size.</h2>
            <p className="mt-4 text-sm text-white/70">
              Pilot Kling with a small team or scale across your entire story department. Usage-based pricing keeps costs predictable.
            </p>
          </div>
          <div className="section-gradient rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white">Creator</h3>
            <p className="mt-2 text-sm text-white/60">For indie teams building prototypes.</p>
            <p className="mt-6 text-3xl font-semibold text-white">$149<span className="text-base font-normal text-white/60">/month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>- Unlimited storyboards</li>
              <li>- 120 render minutes</li>
              <li>- Community support</li>
            </ul>
            <div className="mt-8">
              <Button variant="secondary" href="#early-access" className="w-full justify-center">
                Start trial
              </Button>
            </div>
          </div>
          <div className="section-gradient rounded-3xl border border-kling-500/40 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Studio</h3>
            <p className="mt-2 text-sm text-white/60">For agencies and production teams.</p>
            <p className="mt-6 text-3xl font-semibold text-white">$649<span className="text-base font-normal text-white/60">/month</span></p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>- Shared story bible</li>
              <li>- 720 render minutes</li>
              <li>- Priority support</li>
              <li>- Private model hosting</li>
            </ul>
            <div className="mt-8">
              <Button href="#early-access" className="w-full justify-center">
                Talk to sales
              </Button>
            </div>
          </div>
        </section>

        <section id="early-access" className="mt-24 grid gap-10 rounded-3xl border border-white/10 bg-slate-950/80 p-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-kling-200">Early access</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">Reserve your Kling workspace.</h2>
            <p className="mt-4 text-sm text-white/70">
              We onboard a limited number of teams each month to make sure every launch gets tailored support. Secure a spot and we will reach out with program details within 48 hours.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>- White-glove onboarding with narrative designers</li>
              <li>- Migration support for legacy story bibles</li>
              <li>- Access to beta features and research drops</li>
            </ul>
          </div>
          <form className="grid gap-4">
            <input
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Work email"
              required
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Studio / Company"
            />
            <textarea
              className="min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="What are you building?"
            />
            <Button className="justify-center">
              Submit request
            </Button>
          </form>
        </section>

        <section className="mt-24 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="text-sm text-white/70">{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Kling Labs. Crafted for adaptive storytellers.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
