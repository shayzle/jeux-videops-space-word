
import { describe, it, expect } from 'vitest';
import { getRandomInt, rectIntersect, circleIntersect, timeToString, generateString } from '../tasks.js';


describe("timeToString additional", () => {
  it("timeToString(60000) returns '01:00:00'", () => {
    expect(timeToString(60000)).toBe("01:00:00");
  });
});


describe("circleIntersect additional", () => {
  it("two circles at same position intersect", () => {
    expect(circleIntersect(0, 0, 5, 0, 0, 5)).toBe(true);
  });
});

describe("circleIntersect do not intersect", () => {
  it("circles far apart do not intersect", () => {
    expect(circleIntersect(0, 0, 1, 100, 100, 1)).toBe(false);
  });
});
 

describe("generateString additional 1", () => {
  it("generateString with length 1 returns one character", () => {
    expect(generateString(1)).toHaveLength(1);
  });
});

describe("generateString additional 7", () => {
  it("generateString with length 7 returns 7 characters", () => {
    expect(generateString(7)).toHaveLength(7);
  });
});