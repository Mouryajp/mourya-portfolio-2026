import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{project.name}</CardTitle>
          <Badge variant="outline">{project.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.links.map((link) => (
          <Button key={link.href} asChild size="sm" variant="outline">
            <Link href={link.href}>
              {link.label} <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
