import { Recipe, Machine } from '@/lib/types';

export function calculateMachineCount(
  recipe: Recipe,
  machine: Machine,
  targetOutput: number
): number {
  const outputAmount = Object.values(recipe.output)[0];
  return Math.ceil(targetOutput / (outputAmount * machine.baseRate));
}

export function calculatePowerUsage(
  recipe: Recipe,
  machine: Machine,
  machineCount: number
): number {
  return machine.powerUsage * machineCount;
}

export function calculateRequiredInputs(
  recipe: Recipe,
  targetOutput: number
): Record<string, number> {
  const outputAmount = Object.values(recipe.output)[0];
  const inputs: Record<string, number> = {};
  
  Object.entries(recipe.inputs).forEach(([input, amount]) => {
    inputs[input] = (amount * targetOutput) / outputAmount;
  });
  
  return inputs;
}