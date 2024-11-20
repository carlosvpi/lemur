import { map } from './map' 

export function clone<T> (cloneNode: (_: T) => T = x => x) {
  return map<T, T>(
    (node: T) => cloneNode(node),
    (node: T) => cloneNode(node)
  )
}
