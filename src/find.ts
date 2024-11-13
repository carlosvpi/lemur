export function find<T,U=T> (p: (_0: T, _1: number) => boolean, notFound: null | U | (() => U) = null): (_: Generator<T>) => null | T | U {
  return function (generator: Generator<T>): T | U {
    let i = 0
    for (let node of generator) {
      if (p(node, i++)) return node
    }
    return notFound instanceof Function ? notFound() : notFound
  }
}
