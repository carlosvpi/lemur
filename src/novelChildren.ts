import { GetChildren } from '../types' 

export function novelChildren<T> (
  getChildren: GetChildren<T>,
  equals: (_0: T, _1: T) => boolean = (a, b) => a === b
): GetChildren<T> {
  const visited =  []
  return function (root: T): T[]  {
    if (visited.every(node => !equals(node, root))) {
      visited.push(root)
    }
    return getChildren(root).filter(child => {
      if (visited.some(node => equals(node, child))){
        return false
      }
      visited.push(child)
      return true
    })
  }
}
