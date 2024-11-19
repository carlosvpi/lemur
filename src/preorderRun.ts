import { GetBinaryChildren } from '../types' 

export function preorderRun<T> (
  getChildren: GetBinaryChildren<T>
): ((_: T) => Generator<T>) {
  return function* _preorderRun(root: T): Generator<T>  {
    const [left, right] = getChildren(root)
    yield root
    if (left) {
      yield* _preorderRun(left)
    }
    if (right) {
      yield* _preorderRun(left)
    }
  }
}
