import {describe, expect, test} from '@jest/globals';
import { finiteTree, getFactors } from './util';
import { depthRun } from '../src/depthRun';
import { novelChildren } from '../src/novelChildren';

describe('novelChildren', () => {
  describe('#()', () => {
    test('should give children layer for the root', () => {
      expect([...depthRun(novelChildren(finiteTree.getChildren))(0)]).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });
    test('should give children layer for an inner node', () => {
      expect([...depthRun(novelChildren(getFactors))(69300)]).toEqual([69300,2,3,5,7,11]);
    });
  });
});