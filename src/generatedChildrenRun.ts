import { GetLazyChildren } from '../types' 

export function generatedChildrenRun<T, I> (
  getChildren: GetLazyChildren<T, I>
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
