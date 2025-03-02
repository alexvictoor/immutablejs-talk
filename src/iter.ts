interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface Iterator<T> {
  next(): IteratorResult<T>;
}

type IteratorResult<T> =
  | { done: true }
  | {
      done: false;
      value: T;
    };
