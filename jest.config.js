export const roots = ["<rootDir>/src", "<rootDir>/tests"];
export const collectCoverageFrom = [
  "<rootDir>/src/**/*.{ts,tsx}",
  "!<rootDir>/src/main/**/*",
  "!<rootDir>/src/**/index.ts",
  "!**/*.d.ts",
];
export const coverageDirectory = "coverage";
export const setupFilesAfterEnv = ["<rootDir>/src/main/config/jest-setup.ts"];
export const testPathIgnorePatterns = [
  "<rootDir>/node_modules/",
  "<rootDir>/tests/e2e/cypress",
];
export const testEnvironment = "jsdom";
export const transform = {
  ".+\\.(ts|tsx)$": "ts-jest",
};
export const moduleNameMapper = {
  "@/tests/(.*)": "<rootDir>/tests/$1",
  "@/(.*)": "<rootDir>/src/$1",
  "\\.scss$": "identity-obj-proxy",
};
