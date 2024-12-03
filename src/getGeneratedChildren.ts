import { GetEagerChildren } from '../types' 

export function getGeneratedChildren<T, I> (
  generate: (_: T) => Generator<T>
): GetEagerChildren<T, I> {
  return function (node: T): T[]  {
    return [...generate(node)]
  }
}
