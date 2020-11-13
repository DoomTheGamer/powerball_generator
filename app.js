const luckyNums = [];

const powerball = Math.floor(Math.random() * (27 - 1) + 1)

while (luckyNums.length < 5) {
  let whiteBall = Math.floor(Math.random() * (70 - 1) + 1)
  if (luckyNums.indexOf(whiteBall) === -1) {
    luckyNums.push(whiteBall)
  }
}
luckyNums.push('Powerball ' + powerball);
luckyNums.join(',')

console.log(`Here are today's lucky Powerball numbers: ${luckyNums}`);