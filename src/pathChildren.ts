import { GetChildren } from '../types' 

export type PathNode<T> = T[]

export function pathChildren<T, I> (
  getChildren: GetChildren<T, I>
): GetChildren<T[], I> {
  return function (root: T[], input: I): T[][]  {
    return [...getChildren(root[0], input)].map(node => [node, ...root])
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
