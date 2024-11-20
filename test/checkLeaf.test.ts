import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { checkLeaf } from '../src/checkLeaf';

describe('checkLeaf', () => {
   test('should check that an inner node is not a leaf', () => {
      const result = checkLeaf(finiteTree.getChildren)(3)
      expect(result).toEqual(false);
   });
   test('should check that a leaf node is a leaf', () => {
      const result = checkLeaf(finiteTree.getChildren)(9)
      expect(result).toEqual(true);
   });
});