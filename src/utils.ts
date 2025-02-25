export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

// export function createArrayNumbers(number: number) {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     result.push(i);
//   }
//   return result;
// }
