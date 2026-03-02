"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, Send } from "lucide-react";

import { chatPrompts } from "@/data/site";

export function AiAssistantSection() {
  return (
    <section aria-labelledby="ai-assistant-title" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm font-medium tracking-wider text-primary uppercase">
                AI Copilot
              </span>
            </div>
            <h2
              id="ai-assistant-title"
              className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance"
            >
              Ask me about Mourya
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md text-pretty">
              An AI-powered assistant trained on my portfolio, experience, and expertise. Ask
              anything about my work, tech stack, or collaboration style.
            </p>
          </motion.div>

          {/* Right chat preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-3/10 blur-xl" />
              <div className="glass-strong relative rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10">
                    <Bot className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Portfolio Copilot</p>
                    <p className="text-xs text-muted-foreground">Powered by AI</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-chart-2 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center size-7 shrink-0 rounded-full bg-primary/10">
                      <Sparkles className="size-3.5 text-primary" />
                    </div>
                    <div className="glass rounded-xl rounded-tl-none px-4 py-3">
                      <p className="text-sm text-foreground">
                        {
                          "Hi! I'm Mourya's portfolio assistant. I can tell you about his AI projects, tech stack, or work experience. What would you like to know?"
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prompt chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {chatPrompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      type="button"
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                  <span className="text-sm text-muted-foreground flex-1">Ask about Mourya...</span>
                  <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10">
                    <Send className="size-3.5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
