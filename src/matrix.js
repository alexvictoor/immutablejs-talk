const randomInteger = (max) =>
  Math.floor(Math.random() * max);

const generateSquareMatrix = (n) =>
  Array.from({ length: n }, () =>
    Array.from({ length: n }, () => randomInteger(10))
  );

const matrix = generateSquareMatrix(5);

%DebugPrint(matrix);
