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
      const firstBonusRoll = gameRolls[index + 1];
      const secondBonusRoll = gameRolls[index + 2];
      //need to revisit second role being a spare - the logic in last else
      //condition is causing an issue.
      if (secondBonusRoll === "/") {
        score += scoreMap[roll] + scoreMap["/"];
      } else {
        score +=
          scoreMap[roll] + scoreMap[firstBonusRoll] + scoreMap[secondBonusRoll];
      }
    } else if (roll === "/" && index < gameRolls.length - 1) {
      roll === "/" && index < gameRolls.length - 1;
      const firstBonusRoll = gameRolls[index + 1];
      score += 10 + scoreMap[firstBonusRoll];
    } else {
      //need conditions that exclude scores already added for spare and strike frames
      if (roll !== "X" && roll !== "/" && gameRolls[index + 1] !== "/") {
        //exclude last spare and roll after spare since they've already been added
        index === gameRolls.length - 1 && gameRolls[index - 1] === "/"
          ? (score += 0)
          : (score += scoreMap[roll]); //count numbers and misses
      }
    }
  });

  return score;
};
