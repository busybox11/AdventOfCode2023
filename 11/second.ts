export {};

const testInput = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const input = `...........#..........#...........................#....................#......#........................................................#....
...#........................#..............................#...................................................................#............
......................................#...................................................................#...........#.....................
...............................................#...............#.......................#....................................................
..........................................#...........#.............................................#.......................................
..........#.................................................................#................................#..............................
................................#.................................................................................#......#..................
..................................................................#.........................................................................
............................................................#..................#.......................................................#....
................................................#............................................#...............................#..............
.....#..............#..............................................................#................................#.......................
.........................................#...............................................#.................................................#
..............................#................................#.......#....................................................................
........................................................................................................................#...................
...#......#.......#.................#...................#......................................#.......#.......#........................#...
...........................................#...............................#....................................................#...........
...................................................................................#........................................................
.............#............#........................................#.......................................#......#.........................
................................#............................#...............................#..............................................
........................................#.............#.........................#......#......................................#.............
........................................................................................................#.....#.............................
......#............#...............#..............#.........................................................................................
...........#..................#............#.....................#..................................................#.......................
.......................................................................#..................#................#.......................#........
..#...................................#.....................................#.....#..................#......................................
............................................................................................................................................
............................#........................#.........................................#............................................
.......#......................................................................................................................#.............
......................#.......................................................#.............................................................
.#...........................................................#.....#..................................................#.................#...
..................................#....................................................#....................................................
.................................................................................#..............................#...........................
........#.................................#..........#......................................#............#..................................
..................#........................................................#................................................................
.............................#................#......................#...............................#..........................#......#....
..............#......................#..................................................................................#...................
...............................................................................................................#............................
..#.....................#.......................................#...................................................#.......................
..................................#....................#..........................................#.........................................
....................#.....................#......#.........................................................................#.......#........
............................................................#..........#...................................................................#
....#........................#................................................#...........#...............#......#..........................
............................................................................................................................................
..........#............................#....................................................................................................
...............#...............................#......#.............................................#.................................#.....
......................#..........#.........................#.......#..................................................#.....................
...............................................................................................................#..................#........#
............................................................................................................................................
#..........................#...............................................#.......#......#.................................................
............................................................................................................................................
.......#......................................................#............................................................#........#.......
.............................................#.........#............................................#.....#.................................
...............................#.......#....................................................................................................
.................................................................#..........................#..................#............................
..............#.....#.........................................................#......#.....................................................#
.................................................#.......#.............#....................................................................
..............................................................#............................................#................................
.#.......................#...............#.................................#.........................................................#......
....................................#.....................................................#..............................#..................
.....#...........#..............................................................................#.....#.....................................
.................................................................#.................#........................................................
............................................................................................................................................
.................................................#........................................................#.................................
........#.........................................................................................#...........................#..........#..
...............#........#...........#.....#........................#..............................................#................#........
........................................................................................#...................................................
...................................................................................#.........................#..............................
...#..............#....................................................#............................#.......................................
..............................#............................#................................................................................
........................................#.............................................................................................#.....
..............................................#..................#.............#........................#.................#.................
...................................................#.............................................................#..........................
.........#..................................................................................................................................
.......................#.....................................#.......#.....#..............................................................#.
................................................................................................#.....................#.....................
....#...........................#......................#.............................#.......................................#..............
...........................................................................................................#................................
...........#.......#........#..............................#.....................................................#..........................
............................................#...............................................#...............................................
....................................................................#..............#..................#..............#...............#......
.....................................#........................#.............................................................................
...............................................#............................................................#.................#............#
............................................................................................................................................
....#.......#...........................................................................................................#.........#.........
...................................#................#...........#..............................#............................................
............................................................................................................................................
.......................................................................#...........#......#..........#.......#..............................
..............................................................................#......................................................#......
...........................#.....................#..................................................................#.......................
..#............#............................#................................................#..............................................
...........................................................................................................................................#
........................................#...............#............#..........#......................................#....................
............#................................................#..............................................................................
.......#............................#...............#....................................#............#..........................#..........
......................#....................................................#................................................................
...............................................................................................#.............#.....#........................
..................#....................................#.........#...............#..........................................................
.............#...............#................#........................................#.................................................#..
...................................#....................................................................#...................#...............
.........................................#..........#.................#.....................................................................
................#............................................................#..............................................................
..........#.....................#........................#.....................................................................#............
....#.................................#.............................................................................................#.......
......................#.....#.......................................................................................#.......................
..............................................#.........................................#...................................................
..........................................................................................................#.................................
...................................................................#.........................................................#..............
.........#....................#.........#.........#...........#....................................#......................................#.
............................................................................................................................................
..#........................................................................#...............#.............................#..................
..............#...........#..........................................................#..........................................#...........
...................#.................................#...............................................#......................................
...............................#......................................................................................................#.....
...........................................#.................#........#.......................#.............................................
.....................................#.....................................................................#......#.......#.................
................#...............................#................................#......#..........#......................................#.
........................#...................................................................................................................
..............................#................................................................................................#............
.........................................................#...................#..........................#...................................
....#.......................................................................................................................................
........................................................................#........................#......................#.............#.....
............#...............#.............#.........#............................#........#................#................................
.....................#...............#..............................................................................#.......................
..................................................................#......................................................................#..
............................................................................................................................................
..............#........................................#.....................#.......#......................................................
........................#..............................................#..............................................#........#............
........................................#........................................#..........................................................
.......#........................#...................#.........#..............................................#..............................
..#................#......................................................................#........................................#........
.................................................................................................#.......................#..................
..............................................#.............................................................................................
.....#........#...........................................................................................#.........#........#..............
.................................................................................#..........#..........................................#....
..........................#...................................#.........#..............#.........................................#..........
............................................................................................................................................
....................................................................#.......#...................#...........................................
......................#.............#.............#.....................................................#...................................
........................................................#........................................................#..........................
..#..........#..........................#....................................................................................#.......#......`;

const grid = input.split("\n").map((line) => line.split(""));

function shortest(posStart: number[], posEnd: number[]): number {
  const xDiff = Math.abs(posStart[0] - posEnd[0]);
  const yDiff = Math.abs(posStart[1] - posEnd[1]);
  return xDiff + yDiff;
}

const galaxies: number[][] = [];

for (let i = 0; i < grid[0].length; i++) {
  for (let j = 0; j < grid.length; j++) {
    if (grid[j][i] === "#") {
      galaxies.push([i, j]);
    }
  }
}

grid.reverse().forEach((row, reversedJ) => {
  const allDots = row.every((cell) => cell === ".");

  if (allDots) {
    const j = grid.length - 1 - reversedJ;

    galaxies.forEach((galaxy) => {
      if (galaxy[1] > j) galaxy[1] += 1000000 - 1;
    });
  }
});

grid[0].forEach((_, i) => {
  const allDots = grid.every((row) => row[grid[0].length - 1 - i] === ".");
  if (allDots) {
    galaxies.forEach((galaxy) => {
      if (galaxy[0] > grid[0].length - 1 - i) {
        galaxy[0] += 1000000 - 1;
      }
    });
  }
});

let sum = 0;
for (let i = 0; i < galaxies.length; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    sum += shortest(galaxies[i], galaxies[j]);
  }
}

console.log(sum);
