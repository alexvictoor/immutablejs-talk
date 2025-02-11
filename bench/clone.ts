import { Bench } from "tinybench";

const SIZE = 100_000;

const randomInteger = (max = SIZE) =>
  Math.floor(Math.random() * max);

const main = async () => {
  const bench = new Bench({
    time: 3_000,
    warmupTime: 1000,
  });

  console.log('Bench starting: clone array');

  let source: number[] = [];
  let destination: number[] = [];

  bench
    .add("Avec une boucle", () => {
      source = [];
      source[randomInteger()] = 123;
      const destination: number[] = [];
      for (const element of source) {
        destination.push(element);
      }
    })
    .add("Avec un spread", () => {
      source = [];
      source[randomInteger()] = 123;
      destination = [...source];
    })
    .add("Avec un slice", () => {
      source = [];
      source[randomInteger()] = 123;
      destination = source.slice();
    })
    .add("Avec Array.from", () => {
      source = [];
      source[randomInteger()] = 123;
      destination = Array.from(source);
    })
    .add("Avec structuredClone", () => {
      source = [];
      source[randomInteger()] = 123;
      destination = structuredClone(source);
    });

  await bench.run();

  console.table(bench.table());

};
main();
