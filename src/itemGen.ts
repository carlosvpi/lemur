export function* itemGen<T> (item: T): Generator<T> {
  yield item
}
