export function first<T> (n: number = 1) {
  return (g: Generator<T>) => {
    const result: T[] = []
    while (n !== 0) {
      const { value, done } = g.next()
      result.push(value)
      n--
      if (done) return result
    }
    return result
  }
}

export const finiteTree = {
  getChildren: (x: number) => {
    return [
      [1],
      [2, 8, 11],
      [3, 5],
      [4],
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

export const getFactors = (n: number): number[] => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return [i, ...getFactors(n/i)]
    }
  }
  return [n]
}

export const getEdges = (node: number) => {
  switch (node) {
    case 0:
      return new Map([
        [0, [0]],
        [1, [1]]
      ])
    case 1:
      return new Map([
        [0, [2]],
        [1, [3]]
      ])
    case 2:
      return new Map([
        [0, [4]],
        [1, [0]]
      ])
    case 3:
      return new Map([
        [0, [1]],
        [1, [2]]
      ])
    case 4:
      return new Map([
        [0, [3]],
        [1, [4]]
      ])
  }
  return new Map([]) as Map<number, number[]>
}