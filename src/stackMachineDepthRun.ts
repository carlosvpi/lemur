import { StackMachineEdge } from "../types"

export function stackMachineDepthRun<N, E, S> (getEdges: (n: N) => StackMachineEdge<N, E, S>) {
  return function* (root: N, stack: S[] = []): Generator<N, void, E> {
    let node: N = root
    let input: E
    do {
      input = yield node
      if (!stack.length) return
      const { node: childNode, stack: childStack } = getEdges(node)
        .get(input)[0]
        .get(stack[0])[0]
      node = childNode
      stack = [...childStack, ...stack]
    } while (node !== undefined && input !== undefined)
  }
}
