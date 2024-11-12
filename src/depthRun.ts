import { GetChildren } from '../types' 

export function depthRun<T> (
  getChildren: GetChildren<T>
): ((_: T) => Generator<T>) {
  return function* (root: T): Generator<T>  {
    let rest = [root]
    let node
    while (rest.length) {
      [node, ...rest] = rest
      yield node
      rest = [...getChildren(node), ...rest]
    }
  }
}
