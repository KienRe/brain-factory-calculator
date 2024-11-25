import { Machines } from '@/lib/types';

export const machines: Machines = {
  synthesizer: {
    name: 'Neural Synthesizer',
    icon: '🔬',
    baseRate: 1,
    powerUsage: 5
  },
  processor: {
    name: 'Signal Processor',
    icon: '🔄',
    baseRate: 2,
    powerUsage: 10
  },
  transmitter: {
    name: 'Neurotransmitter Factory',
    icon: '🏭',
    baseRate: 0.5,
    powerUsage: 15
  }
};