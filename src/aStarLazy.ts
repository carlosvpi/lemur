import { GetLazyChildren } from "../types"
import { find } from "./find"
import { sortedLazyRun } from "./sortedLazyRun"
import { combineSortedGen } from "./combineSortedGen"

export function aStarLazy<T, I> (p: (_: T) => boolean, getWeight: (_: T) => number) {
  const combine = combineSortedGen(getWeight)
  return function(getChildren: GetLazyChildren<T, I>){
    return function (root: T) {
      return find(p)(sortedLazyRun<T, I>(combine)(getChildren)(root))
    }
  }
}