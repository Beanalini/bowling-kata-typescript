import { bowlingScore } from "../src/bowling-score";

describe("bowlingScore()", () => {
  // test("returns a value", () => {
  //   const gameFrames = "X";
  //   expect(bowlingScore(gameFrames)).toEqual(0);
  // });
  test("game of strikes", () => {
    const gameFrames = "X X X X X X X X X X X X";
    expect(bowlingScore(gameFrames)).toEqual(300);
  });
  test("Game includes 10 frames of spare", () => {
    //Arrange
    const gameFrame = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
    //Act and assert
    expect(bowlingScore(gameFrame)).toEqual(150);
  });
  // test("returns score for game of strikes and spare bonus ", () => {
  //   const gameFrames = "X X X X X X X X X X 5/";
  //   expect(bowlingScore(gameFrames)).toEqual(290);
  // });

  // test("", () => {

  //   expect(bowlingScore()).toEqual(2);
  // });
});
