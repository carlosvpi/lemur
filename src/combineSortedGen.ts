export function combineSortedGen<T> (getWeight: (_: T) => number) {
  return function* (listA: Generator<T>, listB: Generator<T>) {
    let a = listA.next()
    let b = listB.next()
    while (!a.done && !b.done) {
      if (getWeight(a.value) <= getWeight(b.value)) {
        yield a.value
        a = listA.next()
      } else {
        yield b.value
        b = listB.next()
      }
    }
    yield* listA
    yield* listB
  }
}