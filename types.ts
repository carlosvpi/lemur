export type GetEagerChildren<T> = (_: T) => T[]
export type GetLazyChildren<T> = (_: T) => Generator<T>
export type GetChildren<T> = GetEagerChildren<T> | GetLazyChildren<T>
export type GetBinaryChildren<T> = (_: T) => [T | null, T | null]
export type NestedArray<T> = T | NestedArray<T>[]
export type TaggedNode<N, T> = { node: N, tag: T}
export interface WithParentNode<N> {
  node: N;
  tag: WithParentNode<N> | null;
}
export type RunNode<N, E> = {
  node: N,
  input: E[],
  index: number
}
