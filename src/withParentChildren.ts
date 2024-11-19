import { GetChildren, WithParentNode } from '../types'
import { tag } from './tag' 

export function withParentChildren<N>(getChildren: GetChildren<N>) {
  const t = tag<N, WithParentNode<N> | null>((_0: N, _1: number, parent: WithParentNode<N> | null) => parent)
  return t(getChildren)
}

withParentChildren.unwrap = function<N, T> (taggedNode: WithParentNode<N>): N {
  return taggedNode.node
}
withParentChildren.wrap = function<N, T> (node: N): WithParentNode<N> {
  return { node, tag: null }
}
withParentChildren.getParent = function (node) {
  return node.tag?.node ?? null
}
