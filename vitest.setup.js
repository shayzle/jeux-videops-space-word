// this is something we called mocking (functions)


// lines 2-3 from "script.js"
Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 });
Object.defineProperty(window, 'innerHeight', { writable: true, value: 600 });


// lines 50 from "script.js"
window.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 16));
window.cancelAnimationFrame = vi.fn();
