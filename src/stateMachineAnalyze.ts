import { StateMachineEdge, StateMachineNode } from "../types"

export function stateMachineAnalyze<N, E> (getEdges: (n: N) => StateMachineEdge<N, E>) {
  return function ({ node: root, input, index}: StateMachineNode<N, E>) {
    const edges = getEdges(root)
    const inputChildren = edges.has(input[index]) ? edges.get(input[index]) : []
    const inputNodes = inputChildren.map((node: N)=> ({ node, input, index: index + 1}))
    const nullChildren = edges.has(null) ? edges.get(null) : []
    const nullNodes = nullChildren.map((node: N)=> ({ node, input, index }))
    return [...inputNodes, ...nullNodes]
  }
}

stateMachineAnalyze.init = function init<N, E> (node: N, input: E[]): StateMachineNode<N, E> {
  return { node, input, index: 0 }
}

stateMachineAnalyze.isFinish = function isFinish<N, E> (node: StateMachineNode<N, E>) {
  return node.index === node.input.length
}
