import { GetChildren } from '../types' 

export function getGeneratedChildren<T> (
  generate: (_: T) => Generator<T>
): GetChildren<T> {
  return function (node: T): T[]  {
    return [...generate(node)]
  }
}
