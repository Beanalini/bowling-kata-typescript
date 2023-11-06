/* 	• A game has 10 frames each frame has two rolls
	• If a player knocks down all pins on the first roll this is a strike and the score is 10 + the next two rolls
	• If a player knocks down all pins on the second roll in a frame this is a spare => score is 10 + the next roll
	• If the 10th frame contains :
		○ A strike up to two bonus rolls => score = 10 + bonus roll 1 + bonus roll 2
		○ Spare  one bonus roll => score = 10 + bonus roll

    test cases:
    X X X X X X X X X X X X
    5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5
    9- 9- 9- 9- 9- 9- 9- 9- 9- 9-
*/
const scoreMap: { [key: string]: number } = {
  "-": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  X: 10,
  "/": 10,
};

export const bowlingScore = (gameFrames: string): number => {
  let score = 0;
  let gameRolls = gameFrames.replace(/\s/g, "").split("");
  gameRolls.forEach((roll, index) => {
    if (roll === "X" && index < gameRolls.length - 2) {
      score +=
        scoreMap[roll] +
        scoreMap[gameRolls[index + 1]] +
        scoreMap[gameRolls[index + 2]];
    }
  });

  return score;
};
