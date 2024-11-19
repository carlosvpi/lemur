import { GetLazyChildren } from '../types' 
import { itemGen } from './itemGen'

export function sortedLazyRun<T> (combine: (_0: Generator<T>, _1: Generator<T>) => Generator<T>) {
  return function (getChildren: GetLazyChildren<T>): ((_: T) => Generator<T>) {
    return function* (root: T): Generator<T>  {
      let rest = itemGen(root)
      let done = false
      while (!done) {
        const iteratorResult = rest.next()
        done = iteratorResult.done
        yield iteratorResult.value
        rest = combine(getChildren(iteratorResult.value), rest)
      }
    }
  }
}
