import {describe, expect, test} from '@jest/globals';
import { finiteTree, getFactors } from './util';
import { sortedRun } from '../src/sortedRun';

const sortByFactors = (listA: number[], listB: number[]) => {
  const s = [...listA, ...listB]
  s.sort((a, b) => getFactors(a).length - getFactors(b).length)
  return s
}

describe('sortedRun', () => {
  test('should traverse a tree finding first those children with the fewer factors', () => {
    const result = [...sortedRun(sortByFactors)(finiteTree.getChildren)(1)]
    expect(result).toEqual([1,  2,  3,  5, 11, 13, 14, 15,  6,  7,  4, 12,  8,  9, 10, 16, 17, 18, 19, 20]);
  });
});