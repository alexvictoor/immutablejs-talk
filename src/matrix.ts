const randomInteger = (max: number) =>
  Math.floor(Math.random() * max);

const generateSquareMatrix = (n: number) =>
  Array.from({ length: n }, () =>
    Array.from({ length: n }, () => randomInteger(10))
  );

const matrix = generateSquareMatrix(5);

console.log(matrix);
