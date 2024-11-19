import { GetChildren, GetLazyChildren } from '../types' 

export function breadthRun<T> (
  getChildren: GetChildren<T> | GetLazyChildren<T>
): ((_: T) => Generator<T>) {
  return function* (root: T): Generator<T>  {
    let rest = [root]
    let node
    while (rest.length) {
      [node, ...rest] = rest
      yield node
      rest.push(...getChildren(node))
    }
  }
}
