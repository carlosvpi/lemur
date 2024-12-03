import { GetChildren } from "../types"
import { find } from "./find"
import { sortedRun } from "./sortedRun"
import { combineSortedLists } from './combineSortedLists'

export function aStar<T, I> (p: (_: T) => boolean, getWeight: (_: T) => number) {
  const combine = combineSortedLists(getWeight)
  return function(getChildren: GetChildren<T, I>){
    return function (root: T) {
      return find(p)(sortedRun<T, I>(combine)(getChildren)(root))
    }
  }
}