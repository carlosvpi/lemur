# Documentation

## Categories

A tree of nodes of type `T` is described by a `getChildren: T => T[]` function. This signature (`(_: T) => T[]`) is called `GetChildren<T>`.

A function of the type `GetChildren<T> => T => Generator<T>` is called a `run`. All `run` methods have the suffix "`Run`" in their names (eg. `breadthRun`). A `run` linearises a tree, providing its node one by one and on demand, following a variety of strategies (depth-first, breadth-first or sorted).

A function of the type `GetChildren<T> => GetChildren<U>` is a `tree functor`. All tree functors have the suffix "`Children`" in their names (eg. `pathChildren`). Tree functors transform trees from one category to another (eg. if `tree` is a tree of numbers, `pathChildren(tree)` is the tree of paths on `tree`).

Sometimes we apply a `tree functor` to operate with it, but then we want to obtain and find a particular node, but then we want the corresponding original node. This is why `tree functor` functions that transform the nodes of the tree themselves offer methods `wrap: T => U` and `unwrap: U => T`. In particular, one must call `treefunctor.wrap(originalRoot)` when passing a root to the transformed tree.

A function without suffix "`Children`" or "`Run`" is neither a `run` nor a `tree functor`.

## Functions

### breadthRun

```typescript
function breadthRun<T> (
  getChildren: GetChildren<T>
): ((_: T) => Generator<T>)
```

`breadthRun(getChildren)(root)` returns a generator that yields a breadth run of a tree described by `getChildren` starting from the `root` node.

### collapse

```typescript
export function collapse<T> (
  down: (_0: T, _1: T) => T,
  combine: (_0: T, _1: T, _2: number) => T,
  base: T
): (_: GetChildren<T>) => (_: T) => T
```

`collapse(down, combine, base)(getChildren)(root)` reduces the tree described by `getChildren` with root `root` y combining, all children of a given node with `combine` and `base` (it uses `reduce(combine, base)` under the hood), and applying `down` to combine the node with its combined children.

### depthRun

```typescript
function depthRun<T> (getChildren: GetChildren<T>): ((_: T) => Generator<T>)
```

`depthRun(getChildren)(root)` returns a generator that yields a depth run of a tree described by `getChildren` starting from the `root` node.

### find

```typescript
function find<T,U=T> (
  p: (_0: T, _1: number) => boolean,
  notFound: null | U | (() => U) = null
): (_: Generator<T>) => null | T | U
```

`find(predicate, notFound)(generator)` searches the tree (in the form of a `generator` produced buy a `run`). If it finds a node that passes the `predicate` test, it returns it. Otherwise it returns `notFound` (or its output if it is a function).

### height

```typescript
function height<T> (
  getChildren: GetChildren<T>
): ((_: T) => number)
```

`height(getChildren)(root)` provides the height of the tree described by `getChildren` from `root`. The minimum height is 1 (the root itself).

### layerChildren

```typescript
function layerChildren<T> (getChildren: GetChildren<T>): GetChildren<T[]>
```

`layerChildren(getChildren)` describes a tree where each node represents a layer in the original tree (hence, each node has no more than one child).


#### layerChildren.wrap

```typescript
function layerChildren.wrap<T> (root: T): T[]
```

`layerChildren.wrap(node)` produces a node in the category described by layerChildren: a layer with only one element, the `node` itself.

#### layerChildren.unwrap

```typescript
function layerChildren.unwrap<T> (root: T): T[]
```

`layerChildren.unwrap(node)` produces a node in the category of the original tree. It discards all elements in `node` but the first.

### map

```typescript
function map<T, U> (f: (_:T) => U, g: (_: U) => T): (_: GetChildren<T>) => GetChildren<U>
```

`map(f, g)` describes a `tree functor` that produces a tree isomorphic to the original tree, where each node has been applied the function `f`.

#### map().wrap

`map<T, U>(f, g).wrap: T => U` applies `f` to a node in the category of the original tree.

#### map().wrap

`map<T, U>(f, g).unwrap: T => U` applies `g` to a node in the category of the transformed tree.

### novelChildren

```typescript
function novelChildren<T> (
  getChildren: GetChildren<T>,
  equals: (_0: T, _1: T) => boolean = (a, b) => a === b
): GetChildren<T>
```

`novelChildren(getChildren, equals)` returns a `GetChildren` that memoizes the children that it encounters.

`novelChildren(getChildren, equals)(node)` returns only those children of `node` that have not been visited yet (and it also excludes `node` itself).

### pathChildren

```typescript
function pathChildren<T> (getChildren: GetChildren<T>): GetChildren<T[]>
```

`pathChildren(getChildren)` describes a tree isomorphic to the one described by `getChildren`, where each node contains the path (in the original tree) from the root to that node.

#### pathChildren.wrap

```typescript
function pathChildren.wrap<T> (root: T): T[]
```

`pathChildren.wrap(node)` produces a node in the category described by pathChildren: a path, in this case, of only one element, `node` assumed to be a root.

#### pathChildren.unwrap

```typescript
function pathChildren.unwrap<T> (root: T): T[]
```

`pathChildren.unwrap(node)` produces a node in the category of the original tree: the first element (representing the last item in the path) of `node`.

### prune

```typescript
function prune<T> (p: (_:T) => boolean): (_: GetChildren<T>) => GetChildren<T>
```

`prune(predicate)` produces a `tree functor` containing the same nodes and structure of the original one except every subtree whose root doesn't pass the `predicate` test.

### sortedRun

```typescript
function sortedRun<T> (
  combine: (_0: T[], _1: T[]) => T[],,
  getChildren: GetChildren<T>
): ((_: T) => Generator<T>)
```

`sortedRun(combine, getChildren)(root)` returns a generator that yields a specific sortedRun of a tree described by `getChildren` starting from the `root` node. The sortedRun is guided by the `combine` function, sugh that

`combine(children, stack)` merges `children` and `stack` (both arrays of tree nodes), in such a way that the first elements are the next to be explored by `sortedRun(combine, getChildren)`, and the later ones the last ones.
