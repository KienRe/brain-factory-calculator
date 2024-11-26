"use client";

import React, { useState } from "react";
import { Plus, Book } from "lucide-react";
import { ItemSelector } from "@/components/dialogs/item-selector";
import { RecipeManager } from "@/components/dialogs/recipe-management/recipe-manager";

type DialogType = "input" | "output" | "recipes" | null;

export function Sidebar() {
  const [dialogType, setDialogType] = useState<DialogType>(null);

  return (
    <div className="w-96 bg-gray-800 text-white">
      <div className="p-4">
        {/* Outputs section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Outputs</h2>
            <button
              onClick={() => setDialogType("output")}
              className="p-1 hover:bg-gray-700 rounded"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Inputs section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Inputs</h2>
            <button
              onClick={() => setDialogType("input")}
              className="p-1 hover:bg-gray-700 rounded"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Options section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Options</h2>
          <button
            onClick={() => setDialogType("recipes")}
            className="flex items-center gap-2 p-2 w-full bg-gray-700 hover:bg-gray-600 rounded"
          >
            <Book className="h-5 w-5" />
            <span>Manage Recipes</span>
          </button>
        </div>
      </div>

      {/* Update dialog rendering */}
      {dialogType === "recipes" ? (
        <RecipeManager onClose={() => setDialogType(null)} />
      ) : (
        dialogType && (
          <ItemSelector
            type={dialogType}
            onClose={() => setDialogType(null)}
            onSelect={(resourceId) => {
              console.log(`Selected ${resourceId}`); // Replace with actual selection handling
              setDialogType(null);
            }}
          />
        )
      )}
    </div>
  );
}
