import "@testing-library/jest-dom";

class MockIntersectionObserver implements IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = "";
  thresholds: ReadonlyArray<number> = [];

  constructor() {}

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;