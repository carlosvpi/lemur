import { GetChildren } from '../types' 

export function pathChildren<T> (
  getChildren: GetChildren<T>
): GetChildren<T[]> {
  return function (root: T[]): T[][]  {
    return getChildren(root[0]).map(node => [node, ...root])
  }
}
pathChildren.wrap = function wrap<T> (root: T): T[] {
  return [root]
}
pathChildren.unwrap = function unwrap<T> ([root]: T[]): T {
  return root
}
