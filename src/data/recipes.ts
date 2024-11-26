import { Recipes } from "@/lib/types";

export const recipes: Recipes = {
  // Tier 1: Basic Components
  basicSignal: [
    {
      id: "basic-signal",
      name: "Basic Signal",
      machine: "signalConstructor",
      inputs: {
        neuralPulse: 2,
      },
      output: {
        basicSignal: 1,
      },
      baseTime: 4,
      isDefault: true,
      category: "basic",
    },
  ],

  brainEnergy: [
    {
      id: "brain-energy",
      name: "Brain Energy",
      machine: "energyProcessor",
      inputs: {
        brainGlucose: 2,
      },
      output: {
        brainEnergy: 1,
      },
      baseTime: 4,
      isDefault: true,
      category: "basic",
    },
  ],

  neuropeptide: [
    {
      id: "neuropeptide",
      name: "Neuropeptide",
      machine: "proteinSynthesizer",
      inputs: {
        aminoAcid: 2,
        brainEnergy: 1,
      },
      output: {
        neuropeptide: 1,
      },
      baseTime: 6,
      isDefault: true,
      category: "basic",
    },
  ],

  // Tier 2: Neurotransmitters
  dopamine: [
    {
      id: "dopamine",
      name: "Dopamine",
      machine: "transmitterLab",
      inputs: {
        basicSignal: 1,
        neuropeptide: 2,
        brainEnergy: 1,
      },
      output: {
        dopamine: 1,
      },
      baseTime: 8,
      isDefault: true,
      category: "basic",
    },
  ],

  serotonin: [
    {
      id: "serotonin",
      name: "Serotonin",
      machine: "transmitterLab",
      inputs: {
        basicSignal: 1,
        neuropeptide: 1,
        brainEnergy: 2,
      },
      output: {
        serotonin: 1,
      },
      baseTime: 8,
      isDefault: true,
      category: "basic",
    },
  ],

  cortisol: [
    {
      id: "cortisol",
      name: "Cortisol",
      machine: "transmitterLab",
      inputs: {
        basicSignal: 1,
        brainEnergy: 2,
      },
      output: {
        cortisol: 1,
      },
      baseTime: 8,
      isDefault: true,
      category: "basic",
    },
  ],

  oxytocin: [
    {
      id: "oxytocin",
      name: "Oxytocin",
      machine: "transmitterLab",
      inputs: {
        dopamine: 1,
        serotonin: 1,
      },
      output: {
        oxytocin: 1,
      },
      baseTime: 10,
      isDefault: true,
      category: "basic",
    },
  ],

  // Tier 3: Basic Emotions (Low Intensity)
  annoyance: [
    {
      id: "annoyance",
      name: "Annoyance",
      machine: "basicEmotionMixer",
      inputs: {
        dopamine: 1,
        brainEnergy: 1,
      },
      output: {
        annoyance: 1,
      },
      baseTime: 10,
      isDefault: true,
      category: "basic",
    },
  ],

  boredom: [
    {
      id: "boredom",
      name: "Boredom",
      machine: "basicEmotionMixer",
      inputs: {
        serotonin: 1,
        brainEnergy: 1,
      },
      output: {
        boredom: 1,
      },
      baseTime: 10,
      isDefault: true,
      category: "basic",
    },
  ],

  apprehension: [
    {
      id: "apprehension",
      name: "Apprehension",
      machine: "basicEmotionMixer",
      inputs: {
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        apprehension: 1,
      },
      baseTime: 10,
      isDefault: true,
      category: "basic",
    },
  ],

  distraction: [
    {
      id: "distraction",
      name: "Distraction",
      machine: "basicEmotionMixer",
      inputs: {
        basicSignal: 1,
        brainEnergy: 1,
      },
      output: {
        distraction: 1,
      },
      baseTime: 10,
      isDefault: true,
      category: "basic",
    },
  ],

  // Tier 4: Medium Intensity Emotions
  anger: [
    {
      id: "anger",
      name: "Anger",
      machine: "standardEmotionLab",
      inputs: {
        annoyance: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        anger: 1,
      },
      baseTime: 12,
      isDefault: true,
      category: "medium",
    },
  ],

  disgust: [
    {
      id: "disgust",
      name: "Disgust",
      machine: "standardEmotionLab",
      inputs: {
        boredom: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        disgust: 1,
      },
      baseTime: 12,
      isDefault: true,
      category: "medium",
    },
  ],

  fear: [
    {
      id: "fear",
      name: "Fear",
      machine: "standardEmotionLab",
      inputs: {
        apprehension: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        fear: 1,
      },
      baseTime: 12,
      isDefault: true,
      category: "medium",
    },
  ],

  surprise: [
    {
      id: "surprise",
      name: "Surprise",
      machine: "standardEmotionLab",
      inputs: {
        distraction: 1,
        dopamine: 1,
        brainEnergy: 1,
      },
      output: {
        surprise: 1,
      },
      baseTime: 12,
      isDefault: true,
      category: "medium",
    },
  ],

  // Tier 5: High Intensity Emotions
  rage: [
    {
      id: "rage",
      name: "Rage",
      machine: "advancedEmotionLab",
      inputs: {
        anger: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        rage: 1,
      },
      baseTime: 15,
      isDefault: true,
      category: "high",
    },
  ],

  loathing: [
    {
      id: "loathing",
      name: "Loathing",
      machine: "advancedEmotionLab",
      inputs: {
        disgust: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        loathing: 1,
      },
      baseTime: 15,
      isDefault: true,
      category: "high",
    },
  ],

  terror: [
    {
      id: "terror",
      name: "Terror",
      machine: "advancedEmotionLab",
      inputs: {
        fear: 1,
        cortisol: 1,
        brainEnergy: 1,
      },
      output: {
        terror: 1,
      },
      baseTime: 15,
      isDefault: true,
      category: "high",
    },
  ],

  amazement: [
    {
      id: "amazement",
      name: "Amazement",
      machine: "advancedEmotionLab",
      inputs: {
        surprise: 1,
        dopamine: 1,
        brainEnergy: 1,
      },
      output: {
        amazement: 1,
      },
      baseTime: 15,
      isDefault: true,
      category: "high",
    },
  ],

  // Tier 6: Complex Emotions
  serenity: [
    {
      id: "serenity",
      name: "Serenity",
      machine: "complexSynthesizer",
      inputs: {
        dopamine: 1,
        oxytocin: 1,
        brainEnergy: 1,
      },
      output: {
        serenity: 1,
      },
      baseTime: 20,
      isDefault: true,
      category: "complex",
    },
  ],

  acceptance: [
    {
      id: "acceptance",
      name: "Acceptance",
      machine: "complexSynthesizer",
      inputs: {
        serotonin: 1,
        oxytocin: 1,
        brainEnergy: 1,
      },
      output: {
        acceptance: 1,
      },
      baseTime: 20,
      isDefault: true,
      category: "complex",
    },
  ],

  interest: [
    {
      id: "interest",
      name: "Interest",
      machine: "complexSynthesizer",
      inputs: {
        dopamine: 1,
        basicSignal: 1,
        brainEnergy: 1,
      },
      output: {
        interest: 1,
      },
      baseTime: 20,
      isDefault: true,
      category: "complex",
    },
  ],

  pensiveness: [
    {
      id: "pensiveness",
      name: "Pensiveness",
      machine: "complexSynthesizer",
      inputs: {
        serotonin: 1,
        memoryMatter: 1,
        brainEnergy: 1,
      },
      output: {
        pensiveness: 1,
      },
      baseTime: 20,
      isDefault: true,
      category: "complex",
    },
  ],

  // Tier 7: Elite Emotions
  ecstasy: [
    {
      id: "ecstasy",
      name: "Ecstasy",
      machine: "eliteSynthesizer",
      inputs: {
        serenity: 1,
        dopamine: 1,
        oxytocin: 1,
        brainEnergy: 1,
      },
      output: {
        ecstasy: 1,
      },
      baseTime: 30,
      isDefault: true,
      category: "elite",
    },
  ],

  admiration: [
    {
      id: "admiration",
      name: "Admiration",
      machine: "eliteSynthesizer",
      inputs: {
        acceptance: 1,
        oxytocin: 1,
        dopamine: 1,
        brainEnergy: 1,
      },
      output: {
        admiration: 1,
      },
      baseTime: 30,
      isDefault: true,
      category: "elite",
    },
  ],

  vigilance: [
    {
      id: "vigilance",
      name: "Vigilance",
      machine: "eliteSynthesizer",
      inputs: {
        interest: 1,
        cortisol: 1,
        basicSignal: 1,
        brainEnergy: 1,
      },
      output: {
        vigilance: 1,
      },
      baseTime: 30,
      isDefault: true,
      category: "elite",
    },
  ],

  grief: [
    {
      id: "grief",
      name: "Grief",
      machine: "eliteSynthesizer",
      inputs: {
        pensiveness: 1,
        cortisol: 1,
        memoryMatter: 1,
        brainEnergy: 1,
      },
      output: {
        grief: 1,
      },
      baseTime: 30,
      isDefault: true,
      category: "elite",
    },
  ],
};
