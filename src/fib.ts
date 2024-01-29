/**
 * Returns the n-th Fibonacci number
 * @param n a non-negative integer, indicating which Fibonacci number to return
 * @returns 0 if n = 0, 1 if n = 1, and the sum of the previous two Fibonacci
 *    numbers otherwise
 */


export const fib = (n: number): number => {
  if (n < 0) {
    throw new Error('n must be non-negative');
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const revFib = fastFib(n);
    return revFib.curFib;
  }
};


/** Type that stores not just one Fibonacci number but the previous one also. */
export type FibPair = { curFib: number, prevFib: number };

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns a FibPair containing fib(n) (and also fib(n-1))
 */
export const fastFib = (n: number): FibPair => {
  if (n <= 0) {
    return { curFib: 0, prevFib: 0 };
  } else if (n === 1) {
    return { curFib: 1, prevFib: 0 };
  } else {
    const tempRec = fastFib(n - 1);
    return { curFib: tempRec.curFib + tempRec.prevFib, prevFib: tempRec.curFib };
  }

};


/** Type for storing (fib(n-1), fib(n)) for some n. */
export type FibPair2 = [number, number];

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns the pair containing fib(n)
 */
export const fastFib2 = (n: number): FibPair2 => {
  if (n < 1) {
    throw new Error('n must be a non-zero positive number');
  } else if (n === 1) {
    return [0, 1];
  } else {
    const [previous, current] = fastFib2(n - 1);
    return [current, current + previous];
  }

};


/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param m a non-negative integer
 * @returns the smallest Fibonacci number greater than or equal to m
 */
export const nextFib = (m: number): number => {
  if (m < 0) {
    throw new Error('m must be non-negative');
  } else if (m === 0) {
    return 0;
  } else {
    return nextFibHelper(0, 1, m);
  }
};

/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param prevFib the Fibonacci number before curFib
 * @param curFib the current Fibonacci number (working up to m)
 * @param m the lower bound on the Fibonacci number
 * @returns the smallest Fibonacci number greater than or equal to m
 */
const nextFibHelper = (prevFib: number, curFib: number, m: number): number => {

  if (curFib >= m) {
    return curFib;
  } else {
    return nextFibHelper(curFib, prevFib + curFib, m);
  }

};

