"use client";

import Link from "next/link";

import { getContactPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const { intro, channels, form } = getContactPageContent();

  return (
    <section aria-labelledby="contact-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="contact-title" className="text-2xl font-semibold sm:text-3xl">
          {intro.title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-2xl text-muted-foreground">{intro.description}</p>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="py-4">
          <CardHeader>
            <CardTitle>Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {channels.map((channel) => (
              <p key={channel.href}>
                <Link href={channel.href} className="text-muted-foreground hover:text-foreground">
                  {channel.label}: {channel.value}
                </Link>
              </p>
            ))}
          </CardContent>
        </Card>
        <Card className="py-4">
          <CardHeader>
            <CardTitle>Send message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {form.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  {field.type === "textarea" ? (
                    <Textarea id={field.id} name={field.name} rows={field.rows ?? 4} />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                    />
                  )}
                </div>
              ))}
              <Button type="submit">{form.submitLabel}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
