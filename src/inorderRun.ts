import { GetBinaryChildren } from '../types' 

export function inorderRun<T> (
  getChildren: GetBinaryChildren<T>
): ((_: T) => Generator<T>) {
  return function* _inorderRun(root: T): Generator<T>  {
    const [left, right] = getChildren(root)
    if (left) {
      yield* _inorderRun(left)
    }
    yield root
    if (right) {
      yield* _inorderRun(left)
    }
  }
}
