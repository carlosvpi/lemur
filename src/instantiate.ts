import { GetChildren, NestedArray } from '../types' 

export function instantiate<T, I> (
  getChildren: GetChildren<T, I>
) {
  return function _instantiate (root: T): NestedArray<T>[] {
    return [root, ...[...getChildren(root)].map(_instantiate)]
  }
}
