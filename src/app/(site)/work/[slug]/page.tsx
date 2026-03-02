import { notFound } from "next/navigation";

import { getCaseStudyBySlug, getCaseStudyParams, getWorkPageContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const dynamicParams = false;

export const generateStaticParams = () => getCaseStudyParams();

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const { detailSections } = getWorkPageContent();

  if (!study) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">{study.timeframe}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{study.title}</h1>
        <p className="text-muted-foreground">{study.summary}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <Separator className="my-8" />
      <section aria-labelledby="work-impact">
        <Card className="py-4">
          <CardHeader>
            <CardTitle id="work-impact">{detailSections.impact}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{study.impact}</CardContent>
        </Card>
      </section>
      <section aria-labelledby="work-highlights" className="mt-6">
        <Card className="py-4">
          <CardHeader>
            <CardTitle id="work-highlights">{detailSections.highlights}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {study.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
      <section aria-labelledby="work-metrics" className="mt-6">
        <Card className="py-4">
          <CardHeader>
            <CardTitle id="work-metrics">{detailSections.metrics}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <section aria-labelledby="work-stack" className="mt-6">
        <Card className="py-4">
          <CardHeader>
            <CardTitle id="work-stack">{detailSections.stack}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>
      <section aria-labelledby="work-roles" className="mt-6">
        <Card className="py-4">
          <CardHeader>
            <CardTitle id="work-roles">{detailSections.roles}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {study.roles.map((role) => (
              <Badge key={role} variant="secondary">
                {role}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
