const list = ['1', '2', '3', '4', '5'];

const isPrime = () => true;

const result = 
    Iterator
        .from(list)
        .map(x => parseInt(x, 10))
        .filter(isPrime)
        .take(1)