import { GetChildren } from '../types' 

export function depthRun<T> (getChildren: GetChildren<T>, _root: T): Generator<T> | ((_: T) => Generator<T>) {
  const f = function* (root: T): Generator<T>  {
    yield root
    for (let child of getChildren(root)) {
      yield* f(child)
    }
  }
  if (_root !== undefined) return f(_root)
  return f
}
