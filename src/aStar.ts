import { GetChildren } from "../types"
import { find } from "./find"
import { sortedRun } from "./sortedRun"
import { combineSortedLists } from './combineSortedLists'

export function aStar<T> (p: (_: T) => boolean, getWeight: (_: T) => number) {
  const combine = combineSortedLists(getWeight)
  return function(getChildren: GetChildren<T>){
    return function (root: T) {
      return find(p)(sortedRun<T>(combine)(getChildren)(root))
    }
  }
}