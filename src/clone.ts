import { map } from './map' 

export function clone<T, I> (cloneNode: (_: T) => T = x => x) {
  return map<T, T, I>(
    (node: T) => cloneNode(node),
    (node: T) => cloneNode(node)
  )
}
