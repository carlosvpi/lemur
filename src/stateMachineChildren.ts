import { StateMachineEdge } from "../types"

export function stateMachineChildren<N, E> (getEdges: StateMachineEdge<N, E>) {
  return function (root: N, input: E): N[] {
    return getEdges(root, input)
  }
}
stateMachineChildren.isFinish = function<N, E> (_: N, input: E | undefined) {
  return input === undefined
}
