import { RunNode } from "../types"

export function synthesize<N, E> (getEdges: (n: N) => Map<E, N[]>, pick: (keys: E[], node: RunNode<N, E>) => E) {
  return function (runNode: RunNode<N, E>) {
    const { node: root, input, index} = runNode
    const children = getEdges(root)
    const keys = [...children.keys()]
    const key = pick(keys, runNode)
    return children.get(key)?.map(node => ({ node, input: [...input, key], index: index - 1})) ?? []
  }
}

synthesize.init = function init<N, E> (node: N, length: number): RunNode<N, E> {
  return { node, input: [], index: length }
}

synthesize.isFinish = function isFinish<N, E> (node: RunNode<N, E>) {
  return node.index === 0
}
