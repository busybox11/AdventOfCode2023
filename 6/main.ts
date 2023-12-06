export {};

const input = `
Time:        58     99     64     69
Distance:   478   2232   1019   1071
`;

const lines = input.trim().split("\n");

const time = lines[0].split(/\s+/).map(Number).slice(1);
const distance = lines[1].split(/\s+/).map(Number).slice(1);

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

for (const [index, speed] of time.entries()) {
  const distanceTarget = distance[index];

  const distancesPossible = processRace(speed, distanceTarget);

  total = distancesPossible.length * (total == 0 ? 1 : total);
}

console.log(total);
