import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getNavItems, getSocialLinks } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const navItems = getNavItems();
  const socialLinks = getSocialLinks();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="text-lg font-semibold text-foreground">
              {siteConfig.name}
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:text-foreground hover:border-primary/30"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="mt-8" />
        <div className="pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${siteConfig.name}. Crafted with Next.js, Tailwind CSS, and Framer Motion.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
