import { describe, it, expect } from 'vitest';
import { getRandomInt, rectIntersect, circleIntersect, timeToString, generateString, } from '../tasks.js';


describe('getRandomInt', () => {
  it('getRandomInt(-42, 42) < 43 returns true', () => {
    expect(getRandomInt(-42, 42) < 43).toBe(true);
  });

  it('getRandomInt(42, 42) returns 42', () => {
    expect(getRandomInt(42, 42)).toBe(42);
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


describe('circleIntersect', () => {
  it('circleIntersect(3,2,1,6,1,1.5) returns false', () => {
    expect(circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false);
  });

  it('circleIntersect(3,2,1,3,-2,4) returns true', () => {
    expect(circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true);
  });
});


describe('timeToString', () => {
  it('timeToString("toto") returns "NaN:NaN:NaN"', () => {
    expect(timeToString('toto')).toBe('NaN:NaN:NaN');
  });

  it('timeToString(0) returns "00:00:00"', () => {
    expect(timeToString(0)).toBe('00:00:00');
  });
});


describe('generateString', () => {
  it('generateString returns correct length', () => {
    expect(generateString(5)).toHaveLength(5);
  });

  it('generateString only contains lowercase letters', () => {
    expect(generateString(20)).toMatch(/^[a-z]+$/);
  });
});