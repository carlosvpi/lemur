import { GetChildren } from '../types' 

export function map<T, U> (f: (_:T) => U, g: (_: U) => T) {
  const mapChildren = function mapChildren(getChildren: GetChildren<T>): GetChildren<U> {
    return function (root: U): U[]  {
      return getChildren(g(root)).map(f)
    }
  }
  mapChildren.wrap = function wrap(root: T): U {
    return f(root)
  }
  mapChildren.unwrap = function unwrap(root: U): T {
    return g(root)
  }
  return mapChildren
}