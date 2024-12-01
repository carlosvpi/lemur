import { StateMachineNode } from "../types"

export function stateMachineSynthesize<N, E> (getEdges: (n: N) => Map<E, N[]>, pick: (keys: E[], node: StateMachineNode<N, E>) => E) {
  return function (runNode: StateMachineNode<N, E>) {
    const { node: root, input, index} = runNode
    const children = getEdges(root)
    const keys = [...children.keys()]
    const key = pick(keys, runNode)
    return children.get(key)?.map(node => ({ node, input: [...input, key], index: index - 1})) ?? []
  }
}

stateMachineSynthesize.init = function init<N, E> (node: N, length: number): StateMachineNode<N, E> {
  return { node, input: [], index: length }
}

stateMachineSynthesize.isFinish = function isFinish<N, E> (node: StateMachineNode<N, E>) {
  return node.index === 0
}
