import { GetChildren, GetLazyChildren } from '../types' 

export function layerChildren<T> (
  getChildren: GetChildren<T> | GetLazyChildren<T>
): GetChildren<T[]> {
  return function (root: T[]): T[][]  {
    const children = root.reduce((acc, node) => [...acc, ...getChildren(node)], [])
    if (children.length === 0) return []
    return [children]
  }
}
layerChildren.wrap = function wrap<T> (root: T): T[] {
  return [root]
}
layerChildren.unwrap = function unwrap<T> ([root]: T[]): T {
  return root
}
