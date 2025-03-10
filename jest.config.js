const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Мокаем стили
    "^@/(.*)$": "<rootDir>/$1", // Теперь правильно указывает на корень
  },
};

module.exports = createJestConfig(customJestConfig);