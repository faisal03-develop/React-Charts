export default function generateRandomNumbers(
  start: number,
  end: number,
  count: number
): number[] {
  if (start > end) {
    throw new Error("Start must be less than or equal to end");
  }

  if (count <= 0) {
    throw new Error("Count must be greater than 0");
  }

  const result: number[] = [];

  for (let i = 0; i < count; i++) {
    const randomNumber =
      Math.floor(Math.random() * (end - start + 1)) + start;
    result.push(randomNumber);
  }

  return result;
}
