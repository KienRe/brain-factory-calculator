import React from 'react';
import { X, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { resources } from '@/data/resources';

interface ItemSelectorProps {
  type: 'input' | 'output' | 'recipes';
  onClose: () => void;
}

export function ItemSelector({ type, onClose }: ItemSelectorProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-[800px] max-h-[80vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>
              {type === 'recipes' 
                ? 'Recipe Management' 
                : `Select ${type} Item`}
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-8 pr-4 py-2 border rounded"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(resources).map(([id, resource]) => (
              <button
                key={id}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded text-left"
              >
                <span className="text-2xl">{resource.icon}</span>
                <div>
                  <div className="font-medium">{resource.name}</div>
                  <div className="text-sm text-gray-500">
                    {resource.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}