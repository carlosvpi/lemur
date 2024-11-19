import { GetBinaryChildren } from '../types' 

export function postorderRun<T> (
  getChildren: GetBinaryChildren<T>
): ((_: T) => Generator<T>) {
  return function* _postorderRun(root: T): Generator<T>  {
    const [left, right] = getChildren(root)
    if (left) {
      yield* _postorderRun(left)
    }
    if (right) {
      yield* _postorderRun(left)
    }
    yield root
  }
}
