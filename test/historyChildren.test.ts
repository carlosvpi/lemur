import {describe, expect, test} from '@jest/globals';
import { finiteTree, first } from './util';
import { historyChildren } from '../src/historyChildren';

describe('historyChildren', () => {
   describe('#getRoot', () => {
      test('should format a node as to be a suitable root for historyChildren', () => {
         expect(historyChildren.getRoot('element')).toEqual(['element']);
      })
   })
   describe('#()', () => {
      test('should give children with their history for the root', () => {
         expect(historyChildren(finiteTree.getChildren)([0])).toEqual([[1, 0]]);
      });
      test('should give children with their history for an inner node', () => {
         expect(historyChildren(finiteTree.getChildren)([1, 0])).toEqual([[2, 1, 0], [8, 1, 0], [11, 1, 0]]);
      });
      test('should give children with their history for another inner node', () => {
         expect(historyChildren(finiteTree.getChildren)([8, 1, 0])).toEqual([[9, 8, 1, 0], [10, 8, 1, 0]]);
      });
      test('should give [] children with their history for a leaf node', () => {
         expect(historyChildren(finiteTree.getChildren)([9, 8, 1, 0])).toEqual([]);
      });
   });
});