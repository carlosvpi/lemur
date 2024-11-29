import {describe, expect, test} from '@jest/globals';
import { finiteTree, first } from './util';
import { pathChildren } from '../src/pathChildren';

describe('pathChildren', () => {
   describe('#map', () => {
      test('should map the function passed to the node of the path', () => {
         expect(pathChildren.map((e:string) => e.toUpperCase())(['hello'])).toEqual('HELLO');
      })
   })
   describe('#wrap', () => {
      test('should format a node as to be a suitable root for pathChildren', () => {
         expect(pathChildren.wrap('element')).toEqual(['element']);
      })
   })
   describe('#unwrap', () => {
      test('should format a node as to be a suitable root for pathChildren', () => {
         expect(pathChildren.unwrap(['element'])).toEqual('element');
      })
   })
   describe('#()', () => {
      test('should give children with their history for the root', () => {
         expect(pathChildren(finiteTree.getChildren)([0])).toEqual([[1, 0]]);
      });
      test('should give children with their history for an inner node', () => {
         expect(pathChildren(finiteTree.getChildren)([1, 0])).toEqual([[2, 1, 0], [8, 1, 0], [11, 1, 0]]);
      });
      test('should give children with their history for another inner node', () => {
         expect(pathChildren(finiteTree.getChildren)([8, 1, 0])).toEqual([[9, 8, 1, 0], [10, 8, 1, 0]]);
      });
      test('should give [] children with their history for a leaf node', () => {
         expect(pathChildren(finiteTree.getChildren)([9, 8, 1, 0])).toEqual([]);
      });
   });
});