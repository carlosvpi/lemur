import { StateMachineEdge } from "../types"

export function stateMachineChildren<N, E> (getEdges: (n: N) => StateMachineEdge<N, E>) {
  function getChildren (root: N, input: E): N[] {
    return getEdges(root).get(input)
  }
  getChildren.isFinish = function(_: N, input: E | undefined) {
    return input === undefined
  }
}
