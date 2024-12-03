import { StackChild, StackMachineEdge } from "../types"

export function stackMachineChildren<N, E, S> (getEdges: StackMachineEdge<N, E, S>) {
  return function getChildren ({ root, stack }: { root: N, stack: S[] }, input: E): StackChild<N, S>[] {
    return getEdges(root, input, stack[0])
      .map(({ node, stack: childStack }: StackChild<N, S>) => ({
        node,
        stack: [...childStack, ...stack]
      } as StackChild<N, S>))
  }
}
stackMachineChildren.isFinish = function<N, E> (_: N, input: E | undefined) {
  return input === undefined
}
