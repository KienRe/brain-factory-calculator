// src/components/dialogs/recipe-management/recipe-manager.tsx
import React from "react";
import { X, Search } from "lucide-react";
import { RecipeList } from "./recipe-list";

interface RecipeManagerProps {
  onClose: () => void;
}

export function RecipeManager({ onClose }: RecipeManagerProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="w-[900px] h-[80vh] bg-gray-900 rounded-lg border border-gray-800 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-gray-100">
            Recipe Management
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Search - Now outside of scroll container */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
        </div>

        {/* Content area with scrollbar */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <RecipeList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
