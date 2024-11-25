import { Resources } from '@/lib/types';

export const resources: Resources = {
  // Raw resources
  baseElectrical: {
    name: 'Neural Pulse',
    icon: '⚡',
    description: 'Raw electrical potential',
    category: 'raw'
  },
  baseGlucose: {
    name: 'Glucose',
    icon: '🟡',
    description: 'Basic cellular energy',
    category: 'raw'
  },
  baseOxygen: {
    name: 'Oxygen',
    icon: '💨',
    description: 'Basic cellular oxygen',
    category: 'raw'
  },
  baseMinerals: {
    name: 'Neural Minerals',
    icon: '💎',
    description: 'Basic ionic compounds',
    category: 'raw'
  },

  // Compounds
  synapticFluid: {
    name: 'Synaptic Fluid',
    icon: '💧',
    description: 'Basic neurotransmitter medium',
    category: 'compounds'
  },
  neuralEnergy: {
    name: 'Neural Energy',
    icon: '✨',
    description: 'Processed cellular energy',
    category: 'compounds'
  },

  // Neurotransmitters
  dopamine: {
    name: 'Dopamine',
    icon: '🔵',
    description: 'Pleasure and reward',
    category: 'neurotransmitters'
  },
  serotonin: {
    name: 'Serotonin',
    icon: '🟣',
    description: 'Mood and satisfaction',
    category: 'neurotransmitters'
  },

  // Emotions
  pleasureSignal: {
    name: 'Pleasure Signal',
    icon: '😊',
    description: 'Basic positive feeling',
    category: 'emotions'
  }
};