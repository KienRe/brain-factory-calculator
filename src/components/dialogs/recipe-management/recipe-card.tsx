// src/components/dialogs/recipe-management/recipe-card.tsx
import React, { useState } from 'react';
import { Edit, Trash2, Check, X } from 'lucide-react';
import type { Recipe } from '@/lib/types';
import { useRecipes } from '@/contexts/recipe-context';
import { Dialog } from '@/components/ui/dialog';
import { resources } from '@/data/resources';
import { formatResourceName } from '@/lib/utils/formatting';

interface RecipeCardProps {
  recipe: Recipe;
  resourceId: string;
}

type RecipeSection = 'inputs' | 'output';

export function RecipeCard({ recipe, resourceId }: RecipeCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { updateRecipe, deleteRecipe } = useRecipes();

  const handleSave = () => {
    updateRecipe(resourceId, recipe.id, editedRecipe);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteRecipe(resourceId, recipe.id);
    setShowDeleteDialog(false);
  };

  const handleInputChange = (key: string, value: string | number) => {
    if (key.startsWith('inputs.') || key.startsWith('output.')) {
      const [sectionKey, resource] = key.split('.');
      const section = sectionKey as RecipeSection;
      
      setEditedRecipe(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [resource]: Number(value)
        }
      }));
    } else {
      setEditedRecipe(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  return (
    <div className="border border-gray-700/50 rounded-lg p-6 bg-gray-800/50 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          {recipe.isDefault && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded">
              DEFAULT
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button 
            className="p-2 rounded hover:bg-gray-700/50 transition-colors"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Ingredients
          </h4>
          <div className="space-y-3 pt-2">
            {Object.entries(recipe.inputs).map(([input, amount]) => (
              <div key={input} className="flex items-center gap-2">
                <span className="text-gray-300 font-medium">
                  {amount}x
                </span>
                {resources[input]?.icon && (
                  <span className="text-lg">{resources[input].icon}</span>
                )}
                <span className="text-gray-400">
                  {formatResourceName(input)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Produced in
          </h4>
          <div className="space-y-3 pt-2">
            <div className="text-gray-400">
              {formatResourceName(recipe.machine)}
            </div>
            <div className="text-gray-400">
              {recipe.baseTime}s
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Products
          </h4>
          <div className="space-y-3 pt-2">
            {Object.entries(recipe.output).map(([output, amount]) => (
              <div key={output} className="flex items-center gap-2">
                <span className="text-gray-300 font-medium">
                  {amount}x
                </span>
                {resources[output]?.icon && (
                  <span className="text-lg">{resources[output].icon}</span>
                )}
                <span className="text-gray-400">
                  {formatResourceName(output)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}