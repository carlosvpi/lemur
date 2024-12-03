import { StackChild, StackMachineEdge } from "../types"

export function stackMachinePath<N, E, S> (getEdges: StackMachineEdge<N, E, S>, pickPath: (_: StackChild<N, S>[]) => StackChild<N, S>) {
  return function* (root: N, stack: S[] = []): Generator<N, void, E> {
    let node: N = root
    let input: E
    do {
      input = yield node
      if (!stack.length) return
      const { node: childNode, stack: childStack } = pickPath(getEdges(node, input, stack[0]))
      node = childNode
      stack = [...childStack, ...stack]
    } while (node !== undefined && input !== undefined)
  }
}
