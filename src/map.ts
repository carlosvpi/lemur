import { GetChildren } from '../types' 

export function map<T, U> (f: (_0: T, _1: number, _2: U | null) => U, g: (_: U) => T) {
  const mapChildren = function mapChildren(getChildren: GetChildren<T>): GetChildren<U> {
    return function (root: U): U[]  {
      return [...getChildren(g(root))].map((child, index) => f(child, index, root))
    }
  }
  mapChildren.wrap = function wrap(root: T): U {
    return f(root, 0, null)
  }
  mapChildren.unwrap = function unwrap(root: U): T {
    return g(root)
  }
  return mapChildren
}