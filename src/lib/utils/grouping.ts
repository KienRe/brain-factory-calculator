import { Resources } from "@/lib/types";

export function groupResourcesByCategory(resources: Resources) {
  const categories = {
    raw: "Raw Resources",
    components: "Basic Components",
    neurotransmitters: "Neurotransmitters",
    "basic-emotions": "Basic Emotions",
    "medium-emotions": "Medium Emotions",
    "high-emotions": "High Emotions",
    "complex-emotions": "Complex Emotions",
    "elite-emotions": "Elite Emotions",
  };

  return Object.entries(resources).reduce(
    (acc, [id, resource]) => {
      const categoryName = categories[resource.category] || resource.category;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push({ id, ...resource });
      return acc;
    },
    {} as Record<string, Array<{ id: string } & Resources[string]>>,
  );
}
