import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { breadthRun } from '../src/breadthRun';

describe('breadthRun', () => {
  test('should traverse breadth first a tree', () => {
      const result = [...breadthRun(finiteTree.getChildren)(1)]
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]);
   });
});