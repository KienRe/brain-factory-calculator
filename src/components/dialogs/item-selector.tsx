import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { resources } from "@/data/resources";
import { groupResourcesByCategory } from "@/lib/utils/grouping";
import { formatResourceName } from "@/lib/utils/formatting";

interface ItemSelectorProps {
  type: "input" | "output";
  onClose: () => void;
  onSelect?: (resourceId: string) => void;
}

export function ItemSelector({ type, onClose, onSelect }: ItemSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = Object.entries(resources).filter(
    ([id, resource]) =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formatResourceName(id).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const groupedResources = groupResourcesByCategory(
    Object.fromEntries(filteredResources),
  );

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="w-[900px] h-[80vh] bg-gray-900 rounded-lg border border-gray-800 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-gray-100">
            Select {type} Item
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
        </div>

        {/* Content - Added min-height to maintain size */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 custom-scrollbar">
          <div className="space-y-8 pt-4 min-h-[400px]">
            {Object.entries(groupedResources).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-medium text-gray-200">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelect?.(item.id);
                        onClose();
                      }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors text-left"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-medium text-gray-200">
                          {formatResourceName(item.id)}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
