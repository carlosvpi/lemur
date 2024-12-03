import { GetChildren } from "../types"
import { pushSorted } from './pushSorted'

export function dijkstra<T, I> (getChildren: GetChildren<T, I>, getWeight: (_0: T, _1: T) => number) {
  const distance = new Map<T, number>([])
  const parent = new Map<T, T>([])
  const visited = new Set<T>([])
  const push = pushSorted<{node: T, distance: number}>(({ distance }) => distance)
  return function (root: T) { 
    let stack = [{ node: root, distance: 0 }]
    let element: {node: T, distance: number}
    distance.set(root, 0)
    while (stack.length > 0) {
      [element, ...stack] = stack
      const node = element.node
      visited.add(node)
      for (let child of getChildren(node)) {
        if (visited.has(child)) continue
        if (!distance.has(child)) {
          distance.set(child, Infinity)
        }
        const weight = getWeight(node, child)
        const d = distance.get(node) + weight
        if (distance.get(child) <= d) continue
        distance.set(child, d)
        parent.set(child, node)
        stack = push({ node: child, distance: d }, stack)
      }
    }
    return {
      distance,
      parent
    }
  }
}