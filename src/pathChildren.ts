import { GetChildren } from '../types' 

export type PathNode<T> = T[]

export function pathChildren<T> (
  getChildren: GetChildren<T>
): GetChildren<T[]> {
  return function (root: T[]): T[][]  {
    return [...getChildren(root[0])].map(node => [node, ...root])
  }
}
pathChildren.wrap = function wrap<T> (root: T): T[] {
  return [root]
}
pathChildren.unwrap = function unwrap<T> ([root]: T[]): T {
  return root
}
pathChildren.map = function map<T, U> (f: (node: T) => U) {
  return (node: T[]) => f(pathChildren.unwrap(node))
}
