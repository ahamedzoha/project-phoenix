import nextJest from 'next/jest.js'

// Provides the Next.js compiler transform, env loading, and CSS/asset mocks.
const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Mirror the tsconfig path aliases (@/* and ~/*)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/public/$1',
  },
}

export default createJestConfig(config)
