import { getAboutPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function StackSection() {
  const { stack } = getAboutPageContent();

  return (
    <section aria-labelledby="stack-title">
      <Reveal>
        <h2 id="stack-title">{stack.title}</h2>
      </Reveal>
      <ul>
        {stack.items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <span>{item.category}</span>
            {item.level ? <span>{item.level}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
