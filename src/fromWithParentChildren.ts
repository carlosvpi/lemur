import { TaggedNode } from '../types'
import { tag } from './tag' 
import { withParentChildren } from './withParentChildren'

export function fromWithParentChildren<T> (
  nodes: T[],
  getParent: (_: T) => T = withParentChildren.getParent,
  isEqual: (_0: T, _1: T) => boolean = (a, b) => a === b
) {
  const nodesByParent = new Map()
  const stack = [...nodes]
  while (stack.length) {
    const node = stack.pop()
    const parent = getParent(node)
    if (!nodesByParent.has(parent)) {
      nodesByParent.set(parent, [])
    }
    nodesByParent.set(parent, [node, ...nodesByParent.get(parent)])
    if (stack.every(other => !isEqual(other, parent))) {
      stack.push(parent)
    }
  }
  const _fromWithParentGetChidlren = function (root: T) {
    return nodesByParent.get(root)
  }
  _fromWithParentGetChidlren.nodesByParent = nodesByParent
  return _fromWithParentGetChidlren
}
