export function first<T> (n: number = 1) {
  return (g: Generator<T>) => {
    const result: T[] = []
    while (n > 0) {
      const { value } = g.next()
      result.push(value)
      n--
    }
    return result
  }
}

export const finiteTree = {
  getChildren: (x: number) => {
    return [
      [1],
      [2, 8, 11],
      [3, 4],
      [5],
      [],
      [6],
      [7],
      [],
      [9, 10],
      [],
      [],
      [12, 13, 14, 15],
      [],
      [],
      [],
      [16],
      [17],
      [18],
      [19],
      [20],
    ][x] ?? []
  }
}