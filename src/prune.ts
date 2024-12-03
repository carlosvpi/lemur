import { GetChildren } from '../types' 

export function prune<T, I> (p: (_:T) => boolean) {
  return function (getChildren: GetChildren<T, I>): GetChildren<T, I> {
    return function (root: T, input: I): T[]  {
      return [...getChildren(root, input)].filter(p)
    }
  }
}