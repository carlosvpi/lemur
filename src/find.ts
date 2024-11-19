export function find<T> (
  p: (_0: T, _1: number) => boolean,
): (_: Generator<T>) => null | T {
  return function (generator: Generator<T>): T | null {
    let i = 0
    for (let node of generator) {
      if (p(node, i++)) return node
    }
    return null
  }
}
