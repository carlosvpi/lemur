import { GetChildren } from '../types' 

export function prune<T> (p: (_:T) => boolean) {
  return function (getChildren: GetChildren<T>): GetChildren<T> {
    return function (root: T): T[]  {
      return [...getChildren(root)].filter(p)
    }
  }
}