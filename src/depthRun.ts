import { GetChildren } from '../types' 

export function depthRun<T> (
  getChildren: GetChildren<T>,
  _root: T | undefined
): Generator<T> | ((_: T) => Generator<T>) {
  const f = function* (root: T): Generator<T>  {
    let rest = [root]
    let node
    while (rest.length) {
      [node, ...rest] = rest
      yield node
      rest.push(...getChildren(node))
    }
  }
  if (_root !== undefined) return f(_root)
  return f
}
