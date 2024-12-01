import { StackMachineEdge, StackMachineNode } from "../types"

export function stackMachineAnalyze<N, E, S> (getEdges: (n: N) => StackMachineEdge<N, E, S>, inputWildcard?: E, stackWildcard?: S, stackInputWildcard?: S) {
  return function ({ node: root, input, index, stack }: StackMachineNode<N, E, S>) {
    if (index > input.length) return []
    const edges = getEdges(root)
    const inputChildren = edges.has(input[index]) ? edges.get(input[index]) : []
    const wildcardChildren = inputWildcard !== undefined && edges.has(inputWildcard) ? edges.get(inputWildcard) : []
    const nullChildren = edges.has(null) ? edges.get(null) : []
    const stateChildren = [...inputChildren, ...wildcardChildren, ...nullChildren]
    return stateChildren.reduce((acc, stateChild) => {
      const replaceWildcards = (s: S) => s === stackWildcard ? stack[0] : s === stackInputWildcard ? input[index] : s
      const [stackItem, ...restOfStack] = stack.length > 0 ? stack : [null]
      const stackChildren = stack.length > 0 && stateChild.has(stackItem) ? stateChild.get(stackItem) : []
      const stackNodes = stackChildren.map(({ node, push }: {node:N, push:S[]}) => ({ node, input, index: index + 1, stack: [...push.map(replaceWildcards), ...restOfStack]}))
      const wilcardStackChildren = stackWildcard !== undefined && stateChild.has(stackWildcard) ? stateChild.get(stackWildcard) : []
      const wilcardStackNodes = wilcardStackChildren.map(({ node, push }: {node:N, push:S[]}) => ({ node, input, index: index + 1, stack: [...push.map(replaceWildcards), ...stack]}))
      const nullStackChildren = stateChild.has(null) ? stateChild.get(null) : []
      const nullStackNodes = nullStackChildren.map(({ node, push }: {node:N, push:S[]}) => ({ node, input, index: index, stack: [...push.map(replaceWildcards), ...stack]}))
      return [...acc, ...stackNodes, ...wilcardStackNodes, ...nullStackNodes]
    }, []) ?? []
  }
}

stackMachineAnalyze.init = function init<N, E, S> (node: N, input: E[]): StackMachineNode<N, E, S> {
  return { node, input, index: 0, stack: [] }
}

stackMachineAnalyze.isFinish = function isFinish<N, E, S> (node: StackMachineNode<N, E, S>) {
  return node.index === node.input.length && node.stack.length === 0
}
