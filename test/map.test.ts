import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { map } from '../src/map';

describe('map', () => {
   const _map = map((x: number) => 100 * x, (x: number) => x / 100)
   describe('#wrap', () => {
      test('should format a node as to be a suitable root for map', () => {
         expect(_map.wrap(5)).toEqual(500);
      })
   })
   describe('#unwrap', () => {
      test('should format a node as to be a suitable root for map', () => {
         expect(_map.unwrap(500)).toEqual(5);
      })
   })
   describe('#()', () => {
      test('should give children layer for the root', () => {
         expect(_map(finiteTree.getChildren)(_map.wrap(1))).toEqual([200, 800, 1100]);
      });
      test('should give children layer for an inner node', () => {
         expect(_map(finiteTree.getChildren)(_map.wrap(2))).toEqual([300, 500]);
      });
      test('should give [] children layer for a leaf node', () => {
         expect(_map(finiteTree.getChildren)(_map.wrap(20))).toEqual([]);
      });
   });
});