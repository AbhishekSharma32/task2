module.exports = {
    // Jest configurations...
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Assuming you're using TypeScript
      '^.+\\.jsx?$': 'babel-jest', // Assuming you're using Babel for JS files
    },
    moduleNameMapper: {
      '^axios$': '<rootDir>/node_modules/axios', // Map axios imports to the actual axios package
    },
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    coveragePathIgnorePatterns: ['/node_modules/', '/build/'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    displayName: 'project1',
    extraGlobals: ['window'],
  };
  