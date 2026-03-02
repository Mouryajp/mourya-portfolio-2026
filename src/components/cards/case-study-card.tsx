import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="h-full">
      <CardHeader className="gap-3">
        <p className="text-xs text-muted-foreground">{study.timeframe}</p>
        <CardTitle>{study.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>{study.summary}</p>
        <p className="text-foreground">{study.impact}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href={`/work/${study.slug}`}>
            View case study <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
