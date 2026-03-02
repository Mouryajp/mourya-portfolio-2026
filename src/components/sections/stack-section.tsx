import { getAboutPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function StackSection() {
  const { stack } = getAboutPageContent();

  return (
    <section aria-labelledby="stack-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="stack-title" className="text-2xl font-semibold sm:text-3xl">
          {stack.title}
        </h2>
      </Reveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.items.map((item) => (
          <li key={item.id}>
            <Card className="h-full py-4">
              <CardContent className="space-y-3">
                <p className="font-medium">{item.name}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  {item.level ? <Badge variant="outline">{item.level}</Badge> : null}
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
