import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { tag } from '../src/tag';

describe('tag', () => {
   describe('#getTag', () => {
      test('should format a node as to be a suitable root for tag', () => {
         expect(tag.getTag({ node: 'node', tag: 'tag' })).toEqual('tag');
      })
   })
   describe('#wrap', () => {
      test('should format a node as to be a suitable root for tag', () => {
         expect(tag.wrap(15)).toEqual({ node: 15, tag: undefined });
      })
      test('should format a node as to be a suitable root for tag', () => {
         expect(tag.wrap(15, 'tag')).toEqual({ node: 15, tag: 'tag' });
      })
   })
   describe('#unwrap', () => {
      test('should format a node as to be a suitable root for tag', () => {
         expect(tag.unwrap({ node: 15, tag: 5 })).toEqual(15);
      })
   })
   describe('tag()', () => {
      const _tag = tag((x: number) => x % 10)
      describe('#wrap', () => {
         test('should format a node as to be a suitable root for tag', () => {
            expect(_tag.wrap(15)).toEqual({ node: 15, tag: 5});
         })
      })
      describe('#unwrap', () => {
         test('should format a node as to be a suitable root for tag', () => {
            expect(_tag.unwrap({ node: 15, tag: 5 })).toEqual(15);
         })
      })
      describe('#()', () => {
         test('should give children layer for the root', () => {
            expect(_tag(finiteTree.getChildren)(_tag.wrap(1))).toEqual([{ node: 2, tag: 2 }, { node: 8, tag: 8 }, { node: 11, tag: 1 }]);
         });
         test('should give children layer for an inner node', () => {
            expect(_tag(finiteTree.getChildren)(_tag.wrap(2))).toEqual([{ node: 3, tag: 3 }, { node: 5, tag: 5 }]);
         });
         test('should give [] children layer for a leaf node', () => {
            expect(_tag(finiteTree.getChildren)(_tag.wrap(20))).toEqual([]);
         });
      });
   });
});