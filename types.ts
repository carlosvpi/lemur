export type GetChildren<T> = (_: T) => T[]
export type GetLazyChildren<T> = (_: T) => Generator<T>
export type GetBinaryChildren<T> = (_: T) => [T | null, T | null]
export type NestedArray<T> = T | NestedArray<T>[]
export type TaggedNode<N, T> = { node: N, tag: T}
export interface WithParentNode<N> {
  node: N;
  tag: WithParentNode<N> | null;
}
