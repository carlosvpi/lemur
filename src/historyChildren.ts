import { GetChildren } from '../types' 

export function historyChildren<T> (
  getChildren: GetChildren<T>
): GetChildren<T[]> {
  return function (root: T[]): T[][]  {
    return getChildren(root[0]).map(node => [node, ...root])
  }
}
historyChildren.getRoot = function getRoot<T> (root: T) {
  return [root]
}
