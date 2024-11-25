import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        jsx: 'react'
      }
    ]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.js$'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.tsx',
    '<rootDir>/src/**/*.test.tsx'
  ],
}

export default config