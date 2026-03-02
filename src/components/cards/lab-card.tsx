import type { LabExperiment } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LabCard({ lab }: { lab: LabExperiment }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{lab.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <div>
          <p className="text-xs uppercase tracking-wide text-foreground">Goal</p>
          <p>{lab.goal}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-foreground">Outcome</p>
          <p>{lab.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {lab.methods.map((method) => (
            <Badge key={method} variant="outline">
              {method}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {lab.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
