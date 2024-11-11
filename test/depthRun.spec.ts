import { assert } from 'chai';
import { finiteTree } from './util';
import { depthRun } from '../src/depthRun';

describe('depthRun', () => {
  it('should traverse depth first a tree when ', () => {
      const result = [...depthRun(finiteTree.getChildren)(1)]
      assert.deepEqual(result, [1]);
   });
});