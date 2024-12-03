import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { depthRun } from '../src/depthRun';
// import { feedbackGen } from '../src/feedbackGen';
// import { headGen } from '../src/headGen';

describe('depthRun', () => {
  test('should traverse depth first a tree', () => {
    const result = [...depthRun(finiteTree.getChildren)(1)]
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]);
   });
  // test('should traverse depth first a tree', () => {
  //   function* feed (v: number) {
  //     while (true) {
  //       v = yield Math.max(Math.min(1, 1 - (v % 2)), 0)
  //     }
  //   }
  //   function getChildren(root, input) {
  //     return [(root * 2 + (input ?? 0)) % 5]
  //   }
  //   const result = [...headGen(10)(feedbackGen(depthRun(getChildren)(1), feed(1)))]
  //   expect(result).toEqual([1, 2, 0, 1, 2, 0, 1, 2, 0]);
  // });
});