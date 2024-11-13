import {describe, expect, test} from '@jest/globals';
import { finiteTree, getFactors } from './util';
import { prune } from '../src/prune';

describe('map', () => {
   test('should give children layer for the root', () => {
      expect(prune((x: number) => getFactors(x).length === 1)(finiteTree.getChildren)(1)).toEqual([2, 11]);
   });
   test('should give children layer for an inner node', () => {
      expect(prune((x: number) => getFactors(x).length === 1)(finiteTree.getChildren)(2)).toEqual([3, 5]);
   });
   test('should give [] children layer for a leaf node', () => {
      expect(prune((x: number) => getFactors(x).length === 1)(finiteTree.getChildren)(20)).toEqual([]);
   });
});
