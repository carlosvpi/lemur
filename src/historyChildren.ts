import { GetChildren } from '../types' 

export function historyChildren<T> (
  getChildren: GetChildren<T>,
  _root: T | undefined
): T[][] | GetChildren<T[]> {
  const f = function (root: T[]): T[][]  {
    return getChildren(root[0]).map(node => [node, ...root])
  }
  f.getRoot = (root: T): T[] => [root]
  if (_root !== undefined) return f([_root])
  return f
}
