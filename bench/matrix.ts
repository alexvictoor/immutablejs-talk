import { Bench } from "tinybench";

const randomInteger = (max: number = Number.MAX_SAFE_INTEGER) =>
  Math.floor(Math.random() * max);

const generateSquareMatrix = (n: number) =>
  Array.from({ length: n }, () =>
    Array.from({ length: n }, () => randomInteger(100))
  );

const main = async () => {
  const bench = new Bench({
    time: 3_000,
    warmupTime: 1000,
  });

  const SIZE = 5_000;
  const data = generateSquareMatrix(SIZE);

  console.log('Bench starting: matrix');

  bench
    .add("De gauche à droite, du haut vers le bas", () => {
      let sum = 0;
      for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
          sum += data[i][j];
        }
      }
    })
    .add("Du haut vers le bas, de gauche à droite", () => {
      let sum = 0;
      for (let j = 0; j < SIZE; j++) {
        for (let i = 0; i < SIZE; i++) {
          sum += data[i][j];
        }
      }
    });

  await bench.run();

  console.table(bench.table());

};
main();
