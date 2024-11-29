import {describe, expect, test} from '@jest/globals';
import { getEdges } from './util';
import { synthesize } from '../src/synthesize';
import { depthRun } from '../src/depthRun';
import { pathChildren } from '../src/pathChildren';
import { find } from '../src/find';

describe('synthesize', () => {
   test('should traverse breadth first a tree', () => {
      const getChildren = pathChildren(synthesize(getEdges, (keys: number[]) => keys[keys.length - 1]))
      const run = depthRun(getChildren)(pathChildren.wrap(synthesize.init(0, 4)))
      const result = find(pathChildren.map(synthesize.isFinish<number, number>))(run)
      expect(result).toEqual([
        {
          "index": 0,
          "input": [
            1,
            1,
            1,
            1
          ],
          "node": 0
        },
        {
          "index": 1,
          "input": [
            1,
            1,
            1
          ],
          "node": 2
        },
        {
          "index": 2,
          "input": [
            1,
            1
          ],
          "node": 3
        },
        {
          "index": 3,
          "input": [
            1
          ],
          "node": 1
        },
        {
          "index": 4,
          "input": [],
          "node": 0
        }
      ]);
   });
});