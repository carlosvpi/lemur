import { StackMachineEdge } from '../types'

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

export const getStateMachineEdges = (node: number) => {
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

export const getStackMachineEdges = (node: string): StackMachineEdge<string, string, string> => {
  /*
  S = Nom Verb Nom
  Nom = Art Adj Noun
  Noun = "Cat" | "Dog"
  Verb = "jumps over" | "plays with"
  Adj = "cute" | \.
  Art = "the" | "a"
  */
  // switch (node) {
  //   case "S":
  //     return new Map([
  //       [null, [new Map([
  //         [null, [{ node: "Nom", push: ["Verb", "Nom"] }]]
  //       ])]]
  //     ])
  //   case "Nom":
  //     return new Map([
  //       [null, [new Map([
  //         [null, [{ node: "Art", push: ["Adj", "Noun"] }]]
  //       ])]]
  //     ])
  //   case "Noun":
  //     return new Map([
  //       ["cat", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]],
  //       ["dog", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]]
  //     ])
  //   case "Verb":
  //     return new Map([
  //       ["jumps-over", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]],
  //       ["plays-with", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]]
  //     ])
  //   case "Adj":
  //     return new Map([
  //       ["cute", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]],
  //       [null, [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]]
  //     ])
  //   case "Art":
  //     return new Map([
  //       ["the", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]],
  //       ["a", [new Map([
  //         [null, [{ node: "End", push: [] }]]
  //       ])]]
  //     ])
  //   case "End":
  //     return new Map([[null, [
  //       new Map([
  //         ["Noun", [{ node: "Noun", push: [] }]],
  //         ["Adj", [{ node: "Adj", push: [] }]],
  //         ["Art", [{ node: "Art", push: [] }]],
  //         ["Nom", [{ node: "Nom", push: [] }]],
  //         ["Verb", [{ node: "Verb", push: [] }]],
  //         ["*", [{ node: "End", push: [] }]],
  //       ])
  //     ]]])
  // }
  return () => []//new Map([]) as StackMachineEdge<string, string, string>
}
