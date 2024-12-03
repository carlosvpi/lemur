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

function* f(): Generator<number, void, string> {
  const x = yield 1
  console.log(yield 2)
}

export function stateMachineRun<N, E> (getEdges: (n: N) => StateMachineEdge<N, E>) {
  return function* (root: N): Generator<N, void, E>  {
    let rest = [root]
    let node
    while (rest.length) {
      [node, ...rest] = rest
      const input = yield node
      const neightbors = getEdges(node).get(input) ?? []
      rest.push(...neightbors)
    }
  }
}
