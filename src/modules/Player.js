export function Player(type) {
  const attack = (a, b, oponent) => {
    if (type === "Human") {
      oponent.receiveAttack(a, b);
    } else {
      handlePcAttack(oponent);
    }
    return newArr;
  };
  const usedPositions = [];
  let newArr = [];
  let currentMutationOption;
  // 4 mutation functions
  const options = [
    (arr) => [arr[0] + 1, arr[1]],
    (arr) => [arr[0] - 1, arr[1]],
    (arr) => [arr[0], arr[1] + 1],
    (arr) => [arr[0], arr[1] - 1],
  ];
  // define random mutation option
  const randomArrMutation = () => {
    const randomNum0To3 = Math.floor(Math.random() * (4 - 0)) + 0;
    currentMutationOption = (arr) => options[randomNum0To3](arr);
  };
  randomArrMutation();

  const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
  const randomArr = () => [random(), random()];
  const checkIfArrayWasUsed = () => {
    return usedPositions.some(
      (i) => JSON.stringify(i) === JSON.stringify(newArr)
    );
  };
  const randomPcAttack = (oponent) => {
    newArr = randomArr();
    if (checkIfArrayWasUsed()) {
      randomPcAttack(oponent);
    } else {
      const attackWasSuccesfull = oponent.receiveAttack(newArr[0], newArr[1]);
      if (attackWasSuccesfull) {
        usedPositions.push({ p: newArr, successful: true });
      } else {
        usedPositions.push({ p: newArr, successful: false });
      }
    }
  };
  const getNewPosition = (oponent) => {
    // -- attack based on previous attack --
    // keep track of current sucessfull attacks
    const currentSuccessfull = [];
    // checks if previous was succesfull
    if (usedPositions.length !== 0) {
      if (usedPositions[usedPositions.length - 1].successful) {
        currentSuccessfull.push(usedPositions[usedPositions.length - 1]);
        newArr = currentMutationOption(newArr);
        // check for for > 9 or < 0 and already called
        // if true try a different option randomlly
        if (
          newArr[0] > 9 ||
          newArr[0] < 0 ||
          newArr[1] > 9 ||
          newArr[1] < 0 ||
          checkIfArrayWasUsed()
        ) {
          randomPcAttack(oponent);
        } else {
          const attackWasSuccesfull = oponent.receiveAttack(
            newArr[0],
            newArr[1]
          );
          if (attackWasSuccesfull) {
            usedPositions.push({ p: newArr, successful: true });
          } else {
            usedPositions.push({ p: newArr, successful: false });
          }
          return;
        }
      } else {
        // continue with the same mutation option until its not sucessfull
        randomArrMutation();
        randomPcAttack(oponent);
      }
    } else {
      randomPcAttack(oponent);
    }
  };
  const handlePcAttack = (oponent) => {
    getNewPosition(oponent);
  };
  return {
    attack,
  };
}
