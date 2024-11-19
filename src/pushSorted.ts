export function pushSorted<T> (getWeight: (_: T) => number) {
  return function (item: T, list: T[]) {
    const result = []
    const w = getWeight(item)
    let i = 0
    while (i < list.length && getWeight(list[i]) < w) {
      result.push(list[i++])
    }
    result.push(item, ...list.slice(i))
    return result
  }
}