import { GetChildren } from '../types' 

export function run<T> (
  combine: (_0: T[], _1: T[]) => T[],
  getChildren: GetChildren<T>
): ((_: T) => Generator<T>) {
  return function* (root: T): Generator<T>  {
    let rest = [root]
    let node
    while (rest.length) {
      [node, ...rest] = rest
      yield node
      rest = combine(getChildren(node), rest)
    }
  }
}
