import { GetChildren } from '../types' 

export function checkLeaf<T, I> (getChildren: GetChildren<T, I>) {
  return function (node: T, input?: I) {
    return [...getChildren(node, input)].length === 0
  }
}
