import { RunNode } from "../types"

export function analyze<N, E> (getEdges: (n: N) => Map<E | null, N[]>) {
  return function ({ node: root, input, index}: RunNode<N, E>) {
    const children = getEdges(root)
    const key = children.has(input[index]) ? input[index] : null
    return children.get(key)?.map(node => ({ node, input, index: index + 1})) ?? []
  }
}

analyze.init = function init<N, E> (node: N, input: E[]): RunNode<N, E> {
  return { node, input, index: 0 }
}

analyze.isFinish = function isFinish<N, E> (node: RunNode<N, E>) {
  return node.index === node.input.length
}
