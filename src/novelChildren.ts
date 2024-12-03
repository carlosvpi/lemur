import { GetChildren } from '../types' 

export function novelChildren<T, I> (
  getChildren: GetChildren<T, I>,
  equals: (_0: T, _1: T) => boolean = (a, b) => a === b
): GetChildren<T, I> {
  const visited =  []
  return function (root: T, input: I): T[]  {
    if (visited.every(node => !equals(node, root))) {
      visited.push(root)
    }
    return [...getChildren(root, input)].filter(child => {
      if (visited.some(node => equals(node, child))){
        return false
      }
      visited.push(child)
      return true
    })
  }
}
