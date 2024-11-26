export interface Machine {
  name: string;
  icon: string;
  description: string;
  baseRate: number;
  powerUsage: number;
  tier: "basic" | "advanced" | "emotional" | "complex" | "elite";
  unlockCost: number;
}

export interface Resource {
  name: string;
  icon: string;
  description: string;
  category:
    | "raw"
    | "components"
    | "neurotransmitters"
    | "basic-emotions"
    | "medium-emotions"
    | "high-emotions"
    | "complex-emotions"
    | "elite-emotions";
}

export interface Recipe {
  id: string;
  name: string;
  machine: string;
  inputs: Record<string, number>;
  output: Record<string, number>;
  baseTime: number;
  isDefault: boolean;
  category?: "basic" | "medium" | "high" | "complex" | "elite";
}

export type Machines = Record<string, Machine>;
export type Resources = Record<string, Resource>;
export type Recipes = Record<string, Recipe[]>;
