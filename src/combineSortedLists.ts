export function combineSortedLists<T> (getWeight: (_: T) => number) {
  return function (listA: T[], listB: T[]) {
    const result = []
    let a = 0, b = 0
    while (a < listA.length && b < listB.length) {
      if (getWeight(listA[a]) <= getWeight(listB[b])) {
        result.push(listA[a++])
      } else {
        result.push(listB[b++])
      }
    }
    result.push(...listA.slice(a))
    result.push(...listA.slice(b))
    return result
  }
}