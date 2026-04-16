
Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 });
Object.defineProperty(window, 'innerHeight', { writable: true, value: 600 });

window.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 16));
window.cancelAnimationFrame = vi.fn();
