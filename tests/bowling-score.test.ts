import { bowlingScore } from "../src/bowling-score";

describe("bowlingScore()", () => {
  // test("returns a value", () => {
  //   const gameFrames = "X";
  //   expect(bowlingScore(gameFrames)).toEqual(0);
  // });
  test("frame of strikes", () => {
    const gameFrames = "X X X X X X X X X X X X";
    expect(bowlingScore(gameFrames)).toEqual(300);
  });

  // test("", () => {
  //   expect().toEqual();
  // });

  // test("", () => {

  //   expect(bowlingScore()).toEqual(2);
  // });
});
