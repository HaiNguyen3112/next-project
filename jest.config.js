/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom', // Sử dụng môi trường DOM
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Thêm setup file
  testMatch: ['**/*.test.(ts|tsx)'], // Chỉ định các file test
};

module.exports = config;
