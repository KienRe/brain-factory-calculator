import { Recipes } from '@/lib/types';

export const defaultRecipes: Recipes = {
  synapticFluid: [
    {
      id: 'basic-synaptic',
      name: 'Basic Synaptic Fluid',
      machine: 'synthesizer',
      inputs: {
        baseElectrical: 2,
        baseMinerals: 1
      },
      output: {
        synapticFluid: 1
      },
      baseTime: 4,
      isDefault: true
    },
    {
      id: 'efficient-synaptic',
      name: 'Efficient Synaptic Fluid',
      machine: 'synthesizer',
      inputs: {
        baseElectrical: 1,
        baseMinerals: 2,
        baseOxygen: 1
      },
      output: {
        synapticFluid: 2
      },
      baseTime: 6,
      isDefault: false
    }
  ],
  dopamine: [
    {
      id: 'basic-dopamine',
      name: 'Basic Dopamine',
      machine: 'transmitter',
      inputs: {
        synapticFluid: 2,
        neuralEnergy: 1
      },
      output: {
        dopamine: 1
      },
      baseTime: 6,
      isDefault: true
    }
  ],
  pleasureSignal: [
    {
      id: 'basic-pleasure',
      name: 'Basic Pleasure Signal',
      machine: 'processor',
      inputs: {
        dopamine: 2,
        neuralEnergy: 1
      },
      output: {
        pleasureSignal: 1
      },
      baseTime: 8,
      isDefault: true
    }
  ]
};