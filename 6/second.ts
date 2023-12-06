export {};

const input = `
Time:        58     99     64     69
Distance:   478   2232   1019   1071
`;

const lines = input
  .replaceAll("Time:", "")
  .replaceAll("Distance:", "")
  .replaceAll(" ", "")
  .trim()
  .split("\n");

const time = parseInt(lines[0]);
const distance = parseInt(lines[1]);

function processRace(time: number, distanceTarget: number) {
  let beatingSeconds = [];

  for (let i = 1; i < time; i++) {
    const timeLeft = time - i;

    const distanceTraveled = i * timeLeft;

    if (distanceTraveled > distanceTarget) {
      beatingSeconds.push(i);
    }
  }

  return beatingSeconds;
}

let total = 0;

const distanceTarget = distance;

const distancesPossible = processRace(time, distanceTarget);

total = distancesPossible.length * (total == 0 ? 1 : total);

console.log(total);
