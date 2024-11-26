"use client";

import React, { createContext, useContext, useState } from "react";
import { recipes as initialRecipes } from "@/data/recipes";
import type { Recipe, Recipes } from "@/lib/types";

interface RecipeContextType {
  recipes: Recipes;
  updateRecipe: (
    resourceId: string,
    recipeId: string,
    updatedRecipe: Recipe,
  ) => void;
  deleteRecipe: (resourceId: string, recipeId: string) => void;
  addRecipe: (resourceId: string, newRecipe: Recipe) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<Recipes>(initialRecipes);

  const updateRecipe = (
    resourceId: string,
    recipeId: string,
    updatedRecipe: Recipe,
  ) => {
    setRecipes((prev) => ({
      ...prev,
      [resourceId]: prev[resourceId].map((recipe) =>
        recipe.id === recipeId ? updatedRecipe : recipe,
      ),
    }));
  };

  const deleteRecipe = (resourceId: string, recipeId: string) => {
    setRecipes((prev) => ({
      ...prev,
      [resourceId]: prev[resourceId].filter((recipe) => recipe.id !== recipeId),
    }));
  };

  const addRecipe = (resourceId: string, newRecipe: Recipe) => {
    setRecipes((prev) => ({
      ...prev,
      [resourceId]: [...(prev[resourceId] || []), newRecipe],
    }));
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, updateRecipe, deleteRecipe, addRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }
  return context;
};
