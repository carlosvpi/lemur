export function skipGen<T> (p: (_0: T, _1: number) => boolean) {
  return function* (generator: Generator<T>): Generator<T> {
    let i = 0
    let node = generator.next()
    while (!node.done && p(node.value, i++)) {
      node = generator.next()
    }
    yield* generator
  }
}
