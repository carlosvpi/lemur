import {describe, expect, test} from '@jest/globals';
import { sortedRun } from '../src/sortedRun';
import { find } from '../src/find';
import { novelChildren } from '../src/novelChildren';
import { pathChildren } from '../src/pathChildren';

describe('maze', () => {
  test('should collapse the tree', () => {
    const distance = (a, b) => Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2)
    const equals = (a, b) => a.x === b.x && a.y === b.y
    const exit = { x: 0, y: 0 }
    const mazeNeighbours = ({x,y}:{x:number,y:number}) => {
      return [{x:x-1,y}, {x:x+1,y}, {x,y:y-1}, {x,y:y+1}].filter(child => {
        return !equals(child, {x: 4, y: -1}) &&
          !equals(child, {x: 4, y: 0}) &&
          !equals(child, {x: 4, y: 1}) &&
          !equals(child, {x: 4, y: 2}) &&
          !equals(child, {x: 4, y: 3}) &&
          !equals(child, {x: 4, y: 4}) &&
          !equals(child, {x: 4, y: 5}) &&
          !equals(child, {x: 4, y: 6}) &&
          !equals(child, {x: 4, y: 7}) &&
          !equals(child, {x: 4, y: 8}) &&
          !equals(child, {x: 4, y: 9}) &&
          !equals(child, {x: 4, y: 10}) &&
          !equals(child, {x: 4, y: 11})
      })
    }
    const combine = (children, stack) => [...children, ...stack].sort((a, b) => distance(pathChildren.unwrap(a), exit) - distance(pathChildren.unwrap(b), exit))
    const traverse = sortedRun(combine)(pathChildren(novelChildren(mazeNeighbours, equals)))
    const root = (pathChildren.wrap({x:10,y:10}))
    const generator = traverse(root)
    const solution = (c)=>equals(pathChildren.unwrap(c),exit)
    expect(find(solution)(generator)).toEqual([
      { x: 0, y: 0 },   { x: 0, y: -1 },
      { x: 1, y: -1 },  { x: 1, y: -2 },
      { x: 2, y: -2 },  { x: 3, y: -2 },
      { x: 4, y: -2 },  { x: 5, y: -2 },
      { x: 5, y: -1 },  { x: 5, y: 0 },
      { x: 5, y: 1 },   { x: 5, y: 2 },
      { x: 5, y: 3 },   { x: 5, y: 4 },
      { x: 5, y: 5 },   { x: 5, y: 6 },
      { x: 6, y: 6 },   { x: 6, y: 7 },
      { x: 7, y: 7 },   { x: 7, y: 8 },
      { x: 8, y: 8 },   { x: 8, y: 9 },
      { x: 9, y: 9 },   { x: 9, y: 10 },
      { x: 10, y: 10 }
      ])
  });
});