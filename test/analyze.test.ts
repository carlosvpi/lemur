import {describe, expect, test} from '@jest/globals';
import { getEdges } from './util';
import { analyze } from '../src/analyze';
import { depthRun } from '../src/depthRun';
import { pathChildren } from '../src/pathChildren';
import { find } from '../src/find';

describe('analyze', () => {
   test('should traverse breadth first a tree', () => {
      const input = [1,0,1,0]
      const getChildren = pathChildren(analyze(getEdges))
      const run = depthRun(getChildren)(pathChildren.wrap(analyze.init(0,input)))
      const result = find(pathChildren.map(analyze.isFinish<number, number>))(run)
      expect(result).toEqual([
         {
           "node": 0,
           input,
           "index": 4
         },
         {
           "node": 0,
           input,
           "index": 3
         },
         {
           "node": 2,
           input,
           "index": 2
         },
         {
           "node": 1,
           input,
           "index": 1
         },
         {
           "node": 0,
           input,
           "index": 0
         }
       ]);
   });
});