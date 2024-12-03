export function* stackGen<T> (combine: (acc: T[], item: T) => T[], initialNodes: T[]) {
  let _stack = [...initialNodes]
  let node
  while (_stack.length) {
    [node, ..._stack] = _stack
    yield node
    _stack = combine(_stack, node)
  }
}