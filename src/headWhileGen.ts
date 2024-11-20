export function headWhileGen<T> (p: (_0: T, _1: number) => boolean) {
  return function* (generator: Generator<T>): Generator<T> {
    let i = 0
    for (let item of generator) {
      if (!p(item, i++)) return
      yield item
    }
  }
}