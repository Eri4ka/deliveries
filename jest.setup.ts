import '@testing-library/jest-dom'

global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as IntersectionObserver