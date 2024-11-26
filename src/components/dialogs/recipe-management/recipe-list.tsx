// src/components/dialogs/recipe-management/recipe-list.tsx
import React from "react";
import { RecipeCard } from "./recipe-card";
import { useRecipes } from "@/contexts/recipe-context";
import { resources } from "@/data/resources";
import { formatResourceName } from "@/lib/utils/formatting";

interface RecipeListProps {
  searchQuery: string;
}

export function RecipeList({ searchQuery }: RecipeListProps) {
  const { recipes } = useRecipes();

  // Filter recipes based on search query
  const filteredRecipes = Object.entries(recipes).filter(
    ([resourceId]) =>
      searchQuery === "" ||
      formatResourceName(resourceId)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      resources[resourceId]?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6 p-4">
      {filteredRecipes.map(([resourceId, recipeList]) => (
        <div key={resourceId}>
          <RecipeCard recipe={recipeList[0]} resourceId={resourceId} />
        </div>
      ))}
    </div>
  );
}
