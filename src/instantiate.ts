import { GetChildren, NestedArray } from '../types' 

export function instantiate<T> (
  getChildren: GetChildren<T>
) {
  return function _instantiate (root: T): NestedArray<T>[] {
    return [root, ...[...getChildren(root)].map(_instantiate)]
  }
}
