import { GetChildren } from '../types' 

export function height<T> (
  getChildren: GetChildren<T>
): ((_: T) => number) {
  const f = function (root: T): number  {
    return 1 + [...getChildren(root)].map(f).reduce((acc, h) => Math.max(acc, h) , 0)
  }
  return f
}
