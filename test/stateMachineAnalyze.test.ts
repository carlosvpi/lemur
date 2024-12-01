import {describe, expect, test} from '@jest/globals';
import { getStateMachineEdges } from './util';
import { stateMachineAnalyze } from '../src/stateMachineAnalyze';
import { depthRun } from '../src/depthRun';
import { pathChildren } from '../src/pathChildren';
import { find } from '../src/find';

describe('stateMachineAnalyze', () => {
   test('should traverse breadth first a tree', () => {
      const input = [1,0,1,0]
      const getChildren = pathChildren(stateMachineAnalyze(getStateMachineEdges))
      const run = depthRun(getChildren)(pathChildren.wrap(stateMachineAnalyze.init(0,input)))
      const result = find(pathChildren.map(stateMachineAnalyze.isFinish<number, number>))(run)
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