import { Resources } from "@/lib/types";

export const resources: Resources = {
  // Raw Resources
  neuralPulse: {
    name: "Neural Pulse",
    icon: "⚡",
    description: "Raw electrical potential for neural activity",
    category: "raw",
  },
  brainGlucose: {
    name: "Brain Glucose",
    icon: "🟡",
    description: "Basic energy source for brain function",
    category: "raw",
  },
  aminoAcid: {
    name: "Amino Acid",
    icon: "🧬",
    description: "Building blocks for neurotransmitters",
    category: "raw",
  },
  memoryMatter: {
    name: "Memory Matter",
    icon: "💭",
    description: "Raw material for emotional context",
    category: "raw",
  },

  // Basic Components
  basicSignal: {
    name: "Basic Signal",
    icon: "📡",
    description: "Simple neural signal",
    category: "components",
  },
  brainEnergy: {
    name: "Brain Energy",
    icon: "✨",
    description: "Processed neural fuel",
    category: "components",
  },
  neuropeptide: {
    name: "Neuropeptide",
    icon: "🔷",
    description: "Basic protein signal molecule",
    category: "components",
  },

  // Neurotransmitters
  dopamine: {
    name: "Dopamine",
    icon: "😊",
    description: "Pleasure and reward neurotransmitter",
    category: "neurotransmitters",
  },
  serotonin: {
    name: "Serotonin",
    icon: "😌",
    description: "Mood and satisfaction regulator",
    category: "neurotransmitters",
  },
  cortisol: {
    name: "Cortisol",
    icon: "😰",
    description: "Stress hormone",
    category: "neurotransmitters",
  },
  oxytocin: {
    name: "Oxytocin",
    icon: "💝",
    description: "Social bonding hormone",
    category: "neurotransmitters",
  },

  // Basic Emotions (Low Intensity)
  annoyance: {
    name: "Annoyance",
    icon: "😤",
    description: "Mild negative reaction",
    category: "basic-emotions",
  },
  boredom: {
    name: "Boredom",
    icon: "😑",
    description: "Lack of interest",
    category: "basic-emotions",
  },
  apprehension: {
    name: "Apprehension",
    icon: "😟",
    description: "Mild worry or concern",
    category: "basic-emotions",
  },
  distraction: {
    name: "Distraction",
    icon: "🤔",
    description: "Mild attention shift",
    category: "basic-emotions",
  },

  // Medium Emotions
  anger: {
    name: "Anger",
    icon: "😠",
    description: "Strong negative emotion",
    category: "medium-emotions",
  },
  disgust: {
    name: "Disgust",
    icon: "🤢",
    description: "Aversion response",
    category: "medium-emotions",
  },
  fear: {
    name: "Fear",
    icon: "😨",
    description: "Danger response",
    category: "medium-emotions",
  },
  surprise: {
    name: "Surprise",
    icon: "😲",
    description: "Unexpected reaction",
    category: "medium-emotions",
  },

  // High Intensity Emotions
  rage: {
    name: "Rage",
    icon: "🤬",
    description: "Intense anger",
    category: "high-emotions",
  },
  loathing: {
    name: "Loathing",
    icon: "🤮",
    description: "Intense disgust",
    category: "high-emotions",
  },
  terror: {
    name: "Terror",
    icon: "😱",
    description: "Intense fear",
    category: "high-emotions",
  },
  amazement: {
    name: "Amazement",
    icon: "🤯",
    description: "Intense surprise",
    category: "high-emotions",
  },

  // Complex Emotions
  serenity: {
    name: "Serenity",
    icon: "😌",
    description: "Deep calm and peace",
    category: "complex-emotions",
  },
  acceptance: {
    name: "Acceptance",
    icon: "🤗",
    description: "Opening to experience",
    category: "complex-emotions",
  },
  interest: {
    name: "Interest",
    icon: "🧐",
    description: "Engaged attention",
    category: "complex-emotions",
  },
  pensiveness: {
    name: "Pensiveness",
    icon: "🤔",
    description: "Reflective state",
    category: "complex-emotions",
  },

  // Elite Emotions
  ecstasy: {
    name: "Ecstasy",
    icon: "🌟",
    description: "Peak positive experience",
    category: "elite-emotions",
  },
  admiration: {
    name: "Admiration",
    icon: "✨",
    description: "Deep appreciation",
    category: "elite-emotions",
  },
  vigilance: {
    name: "Vigilance",
    icon: "👁️",
    description: "Heightened awareness",
    category: "elite-emotions",
  },
  grief: {
    name: "Grief",
    icon: "💔",
    description: "Deep sadness",
    category: "elite-emotions",
  },
};