import { Bench } from "tinybench";

const SIZE = 100_000;

const randomInteger = (max = SIZE) => Math.floor(Math.random() * max);

const main = async () => {
  let source: number[];
  let clone: number[];

  const bench = new Bench({
    time: 3_000,
    warmupTime: 1000,
  });

  const setup = () => {
    source = []; //new Array(SIZE);
    source[randomInteger()] = 123;
  }

  console.log("Bench starting: clone array");

  bench
    .add("Avec une boucle", () => {
      setup();
      clone = [];
      for (const element of source) {
        clone.push(element);
      }
    })
    .add("Avec un spread", () => {
      setup();
      clone = [...source];
    })
    .add("Avec un slice", () => {
      setup();
      clone = source.slice();
    })
    .add("Avec Array.from", () => {
      setup();
      clone = Array.from(source);
    })
    .add("Avec structuredClone", () => {
      setup();
      clone = structuredClone(source);
    })
    .add("Avec Object.assign", () => {
      setup();
      clone = [];
      Object.assign(clone, source);
    });

  await bench.run();

  console.table(bench.table());
};
main();

type Node<T> = {
  value: T,
  next?: Node<T>
}

const data: Node<number> = {value: 42, next: { value: 123}}

