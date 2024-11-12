import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { depthRun } from '../src/depthRun';

describe('depthRun', () => {
  test('should traverse depth first a tree', () => {
      const result = [...depthRun(finiteTree.getChildren)(1)]
      expect(result).toEqual([1, 2, 8, 11, 3, 5, 9, 10, 12, 13, 14, 15, 4, 6, 16, 7, 17, 18, 19, 20 ]);
   });
});