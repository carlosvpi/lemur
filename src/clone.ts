import { map } from './map' 

export function clone<N, T> (f: (_: T) => T = x => x) {
  return map<T, T>(
    (node: T) => f(node),
    (node: T) => f(node)
  )
}
