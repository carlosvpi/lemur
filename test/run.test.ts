import {describe, expect, test} from '@jest/globals';
import { finiteTree, getFactors } from './util';
import { run } from '../src/run';

const sortByFactors = (listA: number[], listB: number[]) => {
   const s = [...listA, ...listB]
   s.sort((a, b) => getFactors(a).length - getFactors(b).length)
   return s
}

describe('run', () => {
  test('should traverse a tree finding first those children with the fewer factors', () => {
      const result = [...run(sortByFactors, finiteTree.getChildren)(1)]
      expect(result).toEqual([1,  2,  3,  5, 11, 13, 14, 15,  6,  7,  4, 12,  8,  9, 10, 16, 17, 18, 19, 20]);
   });
});