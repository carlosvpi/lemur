import { GetChildren } from '../types' 

export function sortedRun<T, I> (combine: (_0: T[], _1: T[]) => T[]) {
  return function (getChildren: GetChildren<T, I>): ((_: T) => Generator<T>) {
    return function* (root: T): Generator<T>  {
      let rest = [root]
      let node: T
      while (rest.length) {
        [node, ...rest] = rest
        const input = yield node
        rest = combine([...getChildren(node, input)], rest)
      }
    }
  }
}
