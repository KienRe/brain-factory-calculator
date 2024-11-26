// src/components/dialogs/recipe-management/recipe-list.tsx
import React from 'react';
import { Plus } from 'lucide-react';
import { RecipeCard } from './recipe-card';
import { useRecipes } from '@/contexts/recipe-context';
import { nanoid } from 'nanoid';
import type { Recipe } from '@/lib/types';
import { resources } from '@/data/resources';
import { formatResourceName } from '@/lib/utils/formatting';

interface RecipeListProps {
  searchQuery: string;
}

interface NewRecipeFormData {
  name: string;
  machine: string;
  baseTime: number;
  inputs: Record<string, number>;
  output: Record<string, number>;
  category: Recipe['category'];
}

export function RecipeList({ searchQuery }: RecipeListProps) {
  const { recipes, addRecipe } = useRecipes();
  const [showNewRecipeDialog, setShowNewRecipeDialog] = React.useState(false);
  const [selectedResourceId, setSelectedResourceId] = React.useState<string | null>(null);
  const [newRecipeData, setNewRecipeData] = React.useState<NewRecipeFormData>({
    name: '',
    machine: '',
    baseTime: 1,
    inputs: {},
    output: {},
    category: 'basic'
  });

  // Filter recipes based on search query
  const filteredRecipes = Object.entries(recipes).filter(([resourceId, _]) => 
    searchQuery === "" || 
    formatResourceName(resourceId).toLowerCase().includes(searchQuery.toLowerCase()) ||
    resources[resourceId]?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRecipe = (resourceId: string) => {
    setSelectedResourceId(resourceId);
    setShowNewRecipeDialog(true);
  };

  const handleCreateRecipe = () => {
    if (!selectedResourceId) return;

    const newRecipe: Recipe = {
      ...newRecipeData,
      id: nanoid(),
      isDefault: false
    };

    addRecipe(selectedResourceId, newRecipe);
    setShowNewRecipeDialog(false);
    setNewRecipeData({
      name: '',
      machine: '',
      baseTime: 1,
      inputs: {},
      output: {},
      category: 'basic'
    });
  };

  return (
    <div className="px-4 py-4 space-y-6">
      {filteredRecipes.map(([resourceId, resourceRecipes]) => (
        <div key={resourceId}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-gray-200 flex items-center gap-2">
              {resources[resourceId]?.icon && (
                <span className="text-xl">{resources[resourceId].icon}</span>
              )}
              {formatResourceName(resourceId)}
            </h3>
            <button 
              className="p-2 rounded hover:bg-gray-800 transition-colors"
              onClick={() => handleAddRecipe(resourceId)}
            >
              <Plus className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <div className="space-y-3">
            {resourceRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe}
                resourceId={resourceId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}