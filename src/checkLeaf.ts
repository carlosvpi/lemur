import { GetChildren } from '../types' 

export function checkLeaf<T> (getChildren: GetChildren<T>) {
  return function _ (node: T) {
    return [...getChildren(node)].length === 0
  }
}
