"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import { getNavItems, getSiteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const items = getNavItems();
  const siteConfig = getSiteConfig();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={siteConfig.title}
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
          {/* <Button variant="ghost" size="sm" onClick={openChat}>
            <MessageCircle className="size-3.5" />
            Chat
          </Button> */}
          <Button
            asChild
            size="sm"
            className="ml-3 bg-primary text-primary-foreground hover:bg-primary/80"
          >
            <Link href={siteConfig.resumeUrl}>
              <Download className="size-3.5" />
              Resume
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav className="glass-strong px-6 py-4">
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      setMobileOpen(false);
                      openChat();
                    }}
                  >
                    <MessageCircle className="size-4" />
                    Chat
                  </Button>
                </li> */}
                <li className="pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
                  >
                    <Link href={siteConfig.resumeUrl}>
                      <Download className="size-3.5" />
                      Resume
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
