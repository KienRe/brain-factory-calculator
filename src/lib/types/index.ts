
export interface Machine {
    name: string;
    icon: string;
    baseRate: number;
    powerUsage: number;
  }
  
  export interface Resource {
    name: string;
    icon: string;
    description: string;
    category: 'raw' | 'compounds' | 'neurotransmitters' | 'emotions';
  }
  
  export interface Recipe {
    id: string;
    name: string;
    machine: string;
    inputs: Record<string, number>;
    output: Record<string, number>;
    baseTime: number;
    isDefault: boolean;
  }
  
  export type Machines = Record<string, Machine>;
  export type Resources = Record<string, Resource>;
  export type Recipes = Record<string, Recipe[]>;