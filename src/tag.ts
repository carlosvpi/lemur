import { map } from './map' 
import { TaggedNode } from '../types'

export function tag<N, T> (f: (_0: N, _1: number, _2: TaggedNode<N, T>) => T) {
  return map<N, TaggedNode<N, T>>(
    (node: N, index: number, parent: TaggedNode<N, T>) => ({ node, tag: f(node, index, parent)}),
    ({ node }) => node
  )
}
tag.getTag = function<N, T> (taggedNode: TaggedNode<N, T>): T {
  return taggedNode.tag
}
tag.unwrap = function<N, T> (taggedNode: TaggedNode<N, T>): N {
  return taggedNode.node
}
tag.wrap = function<N, T> (node: N, tag?: T): TaggedNode<N, T> {
  return { node, tag }
}
