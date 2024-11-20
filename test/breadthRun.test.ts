import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { breadthRun } from '../src/breadthRun';

describe('breadthRun', () => {
   test('should traverse breadth first a tree', () => {
      const result = [...breadthRun(finiteTree.getChildren)(1)]
      expect(result).toEqual([1, 2, 8, 11, 3, 5, 9, 10, 12, 13, 14, 15, 4, 6, 16, 7, 17, 18, 19, 20 ]);
   });
});