import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { depthRun } from '../src/depthRun';

describe('depthRun', () => {
  test('should traverse depth first a tree', () => {
      const result = [...depthRun(finiteTree.getChildren)(1)]
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]);
   });
});