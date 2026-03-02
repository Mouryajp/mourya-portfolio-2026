"use client";

import Link from "next/link";

import { getContactPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
  const { intro, channels, form } = getContactPageContent();

  return (
    <section aria-labelledby="contact-title">
      <Reveal>
        <h2 id="contact-title">{intro.title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p>{intro.description}</p>
      </Reveal>
      <ul>
        {channels.map((channel) => (
          <li key={channel.href}>
            <Link href={channel.href}>
              {channel.label}: {channel.value}
            </Link>
          </li>
        ))}
      </ul>
      <form>
        {form.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea id={field.id} name={field.name} rows={field.rows ?? 4} />
            ) : (
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
              />
            )}
          </div>
        ))}
        <button type="submit">{form.submitLabel}</button>
      </form>
    </section>
  );
}
