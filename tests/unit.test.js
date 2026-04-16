
import { describe, it, expect } from 'vitest';
import { getRandomInt, rectIntersect, circleIntersect, timeToString, generateString } from '../tasks.js';


describe('timeToString additional', () => {
  it('timeToString(60000) returns "01:00:00"', () => {
    expect(timeToString(60000)).toBe('01:00:00');
  });
});

describe('rectIntersect', () => {
  it('rectIntersect(1,1,2,1,4,1,1,2) returns false', () => {
    expect(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false);
  });

  it('rectIntersect(1,1,5,2,4,1,1,2) returns true', () => {
    expect(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
  });
});

describe('circleIntersect additional', () => {
  it('two circles at same position intersect', () => {
    expect(circleIntersect(0, 0, 5, 0, 0, 5)).toBe(true);
  });

  it('circles far apart do not intersect', () => {
    expect(circleIntersect(0, 0, 1, 100, 100, 1)).toBe(false);
  });
});