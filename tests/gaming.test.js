
import { describe, it, expect } from 'vitest';
import { getRandomInt, rectIntersect, circleIntersect, timeToString, generateString, } from '../tasks.js';



// PDF Functions (All)

describe("getRandomInt", () => {
  it("getRandomInt(-42, 42) < 43 returns true", () => {
    expect(getRandomInt(-42, 42) < 43).toBe(true);
  });

  it("getRandomInt(42, 42) returns 42", () => {
    expect(getRandomInt(42, 42)).toBe(42);
  });
});


describe("rectIntersect", () => {
  it("rectIntersect(1,1,2,1,4,1,1,2) returns false", () => {
    expect(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false);
  });

  it("rectIntersect(1,1,5,2,4,1,1,2) returns true", () => {
    expect(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
  });
});


describe("circleIntersect", () => {
  it("circleIntersect(3,2,1,6,1,1.5) returns false", () => {
    expect(circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false);
  });

  it("circleIntersect(3,2,1,3,-2,4) returns true", () => {
    expect(circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true);
  });
});


describe("timeToString", () => {
  it("timeToString(123456789) returns '17:36:78'", () => {
    expect(timeToString(123456789)).toBe("17:36:78");
  });

  it("timeToString('toto') returns 'NaN:NaN:NaN'", () => {
    expect(timeToString("toto")).toBe("NaN:NaN:NaN");
  });
});



// Game Functions -> personal

describe("getRandomInt", () => {
  it("getRandomInt(30, 33) < 43 returns true", () => {
    expect(getRandomInt(30, 33) < 43).toBe(true);
  });

  it("getRandomInt(20, 20) returns 20", () => {
    expect(getRandomInt(20, 20)).toBe(20);
  });
});
