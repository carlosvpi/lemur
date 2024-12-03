import { GetChildren } from '../types' 

export function depthRun<T, I> (
  getChildren: GetChildren<T, I>
): ((_: T) => Generator<T>) {
  return function* (root: T): Generator<T>  {
    let rest = [root]
    let node: T
    while (rest.length) {
      [node, ...rest] = rest
      const input = yield node
      rest = [...getChildren(node, input), ...rest]
    }
  }
}
