import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { collapse } from '../src/collapse';

describe('collapse', () => {
   const _collapse = collapse(
      (root: number, collective: number) => collective ? root * collective : root,
      (acc: number, item: number) => acc + item,
      0
   )
   test('should collapse the tree', () => {
      expect(_collapse(finiteTree.getChildren)(2)).toEqual(444);
   });
});