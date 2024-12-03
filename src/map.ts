import { GetChildren } from '../types' 

export function map<T, U, I> (f: (_0: T, _1: number, _2: U | null) => U, g: (_: U) => T) {
  const mapChildren = function mapChildren(getChildren: GetChildren<T, I>): GetChildren<U, I> {
    return function (root: U, input: I): U[]  {
      return [...getChildren(g(root), input)].map((child, index) => f(child, index, root))
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