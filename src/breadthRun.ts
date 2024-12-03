import { GetChildren } from '../types' 

export function breadthRun<T, I> (
  getChildren: GetChildren<T, I>
): ((_: T) => Generator<T, void, I>) {
  return function* (root: T): Generator<T>  {
    let rest = [root]
    let node: T
    while (rest.length) {
      [node, ...rest] = rest
      const input = yield node
      rest.push(...getChildren(node, input))
    }
  }
}
