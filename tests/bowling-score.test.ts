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
  test("Game includes misses", () => {
    //Arrange
    const gameFrame = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
    //Act and assert
    expect(bowlingScore(gameFrame)).toEqual(90);
  });
  test("mixed frames - no bonus rolls", () => {
    //Arrange
    const gameFrame = "32 54 35 42 61 21 -3 4- 25";
    //Act and assert
    expect(bowlingScore(gameFrame)).toEqual(52);
  });

  test("mixed frames - no bonus rolls", () => {
    //Arrange
    const gameFrame = "32 54 35 42 61 21 -3 4- 25";
    //Act and assert
    expect(bowlingScore(gameFrame)).toEqual(52);
  });
});
