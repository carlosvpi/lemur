# Documentation

## breadthRun

```typescript
function breadthRun<T> (getChildren: GetChildren<T>): ((_: T) => Generator<T>)
```

`breadthRun(getChildren)(root)` returns a generator that yields a breadth run of a tree described by `getChildren` starting from the `root` node.

## depthRun

```typescript
function depthRun<T> (getChildren: GetChildren<T>): ((_: T) => Generator<T>)
```

`depthRun(getChildren)(root)` returns a generator that yields a depth run of a tree described by `getChildren` starting from the `root` node.

## run

```typescript
function run<T> (
  combine: (_0: T[], _1: T[]) => T[],,
  getChildren: GetChildren<T>
): ((_: T) => Generator<T>)
```

`run(combine, getChildren)(root)` returns a generator that yields a specific run of a tree described by `getChildren` starting from the `root` node. The run is guided by the `combine` method, sugh that

`combine(children, stack)` merges `children` and `stack` (both arrays of tree nodes), in such a way that the first elements are the next to be explored by `run(combine, getChildren)`, and the later ones the last ones.

## historyChildren

```typescript
function historyChildren<T> (getChildren: GetChildren<T>): GetChildren<T[]>
```

`historyChildren(getChildren)` describes a tree isomorphic to the one described by `getChildren`, where each node contains the path (in the original tree) from the root to that node.

### historyChildren.getRoot

```typescript
function historyChildren.getRoot<T> (root: T): T[]
```

`historyChildren.getRoot(node)` produces a node in the category described by historyChildren: a path, in this case, of only one element, `node` assumed to be a root.
