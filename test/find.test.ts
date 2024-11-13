import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { depthRun } from '../src/depthRun';
import { find } from '../src/find';

describe('find', () => {
  test('should find a number greater than 19', () => {
      const result = find((x: number) => x > 19)(depthRun(finiteTree.getChildren)(0))
      expect(result).toEqual(20);
   });
  test('should not find a number greater than 20', () => {
      const result = find<number, string>((x: number) => x > 20, () => 'Not found')(depthRun(finiteTree.getChildren)(0))
      expect(result).toEqual('Not found');
   });
});