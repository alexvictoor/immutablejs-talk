const list = ['1', '2', '3', '4', '5'];

const result = 
    Iterator
        .from(list)
        .map(x => parseInt(x, 10))
        .filter(isPrime)
        .take(1)