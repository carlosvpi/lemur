import { StackChild, StackMachineEdge } from "../types"

export function stackMachineChildren<N, E, S> (getEdges: (n: N) => StackMachineEdge<N, E, S>) {
  function getChildren ({ root, stack }: { root: N, stack: S[] }, input: E): StackChild<N, S>[] {
    return getEdges(root)
      .get(input)
      .reduce((acc: StackChild<N, S>[], map: Map<S, StackChild<N, S>[]>) => [
        ...acc,
        ...map.get(stack[0]).map(({ node, stack: childStack }: StackChild<N, S>) => ({
          node,
          stack: [...childStack, ...stack]
        } as StackChild<N, S>))
      ], [])
  }
  getChildren.isFinish = function(_: N, input: E | undefined) {
    return input === undefined
  }
  return getChildren
}
