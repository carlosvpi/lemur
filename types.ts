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
export type StateMachineNode<N, E> = {
  node: N,
  input: E[],
  index: number
}
export type StateMachineEdge<N, E> = Map<E | null, N[]>
export type StackMachineNode<N, E, S> = {
  node: N,
  input: E[],
  index: number,
  stack: S[]
}
export type StackMachineEdge<N, E, S> = Map<E | null, Map<S | null, { node: N, push: S[] }[]>[]>