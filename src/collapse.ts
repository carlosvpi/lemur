import { GetChildren } from '../types' 

export function collapse<T> (down: (_0: T, _1: T) => T, combine: (_0: T, _1: T, _2: number) => T, base: T) {
  return function(getChildren: GetChildren<T, undefined>): (_: T) => T {
    const _collapse = function (root: T): T  {
      return down(root, [...getChildren(root)].map(_collapse).reduce(combine, base))
    }
    return _collapse
  }
}
