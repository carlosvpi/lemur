import { GetChildren, GetLazyChildren } from '../types' 

export function layerChildren<T, I> (
  getChildren: GetChildren<T, I>
): GetChildren<T[], I> {
  return function (root: T[], input: I): T[][]  {
    const children = root.reduce((acc, node) => [...acc, ...getChildren(node, input)], [])
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
