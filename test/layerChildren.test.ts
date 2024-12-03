import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { layerChildren } from '../src/layerChildren';

describe('layerChildren', () => {
  describe('#wrap', () => {
    test('should format a node as to be a suitable root for layerChildren', () => {
      expect(layerChildren.wrap('element')).toEqual(['element']);
    })
  })
  describe('#unwrap', () => {
    test('should format a node as to be a suitable root for layerChildren', () => {
      expect(layerChildren.unwrap(['element'])).toEqual('element');
    })
  })
  describe('#()', () => {
    test('should give children layer for the root', () => {
      expect(layerChildren(finiteTree.getChildren)([0])).toEqual([[1]]);
    });
    test('should give children layer for an inner node', () => {
      expect(layerChildren(finiteTree.getChildren)([2, 8, 11])).toEqual([[3, 5, 9, 10, 12, 13, 14, 15]]);
    });
    test('should give [] children layer for a leaf node', () => {
      expect(layerChildren(finiteTree.getChildren)([20])).toEqual([]);
    });
  });
});