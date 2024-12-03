import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { withParentChildren } from '../src/withParentChildren';

describe('withParentChildren', () => {
  describe('#wrap', () => {
    test('should format a node as to be a suitable root for tag', () => {
      expect(withParentChildren.wrap(15)).toEqual({ node: 15, tag: null});
    })
  })
  describe('#unwrap', () => {
    test('should format a node as to be a suitable root for tag', () => {
      expect(withParentChildren.unwrap({ node: 15, tag: null })).toEqual(15);
    })
  })
  describe('#getParent', () => {
    test('should format a node as to be a suitable root for tag', () => {
      expect(withParentChildren.getParent({ node: 15, tag: null })).toEqual(null);
    })
    test('should format a node as to be a suitable root for tag', () => {
      expect(withParentChildren.getParent({ node: 15, tag: { node: 16, tag: null } })).toEqual(16);
    })
  })
  describe('#()', () => {
    test('should give children layer for the root', () => {
      expect(withParentChildren(finiteTree.getChildren)(withParentChildren.wrap(1))).toEqual([{ node: 2, tag: { node: 1, tag: null}}, { node: 8, tag: { node: 1, tag: null}}, { node: 11, tag: { node: 1, tag: null}}]);
    });
    test('should give children layer for an inner node', () => {
        const node = withParentChildren(finiteTree.getChildren)(withParentChildren.wrap(1))[0]
      expect(withParentChildren(finiteTree.getChildren)(node)).toEqual([{ node: 3, tag: { node: 2, tag: { node: 1, tag: null }}}, { node: 5, tag: { node: 2, tag: { node: 1, tag: null }}}]);
    });
    test('should give [] children layer for a leaf node', () => {
      expect(withParentChildren(finiteTree.getChildren)(withParentChildren.wrap(20))).toEqual([]);
    });
  });
});