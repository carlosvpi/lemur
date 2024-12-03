import {describe, expect, test} from '@jest/globals';
import { finiteTree } from './util';
import { height } from '../src/height';

describe('height', () => {
  test('should traverse breadth first a tree', () => {
    const result = height(finiteTree.getChildren)(0)
    expect(result).toEqual(9);
  });
});