import {describe, expect, test} from '@jest/globals';
import { feedGen } from '../src/feedGen';

describe('feedGen', () => {
  test('should traverse breadth first a tree', () => {
    function* feed () {
      let i = 10
      while (i) yield i--
    }
    function* gen () {
      let i = 0
      let v = yield i++
      while (v) v = yield v * 100 + i++
    }
    const result = feedGen(gen(), feed())
    expect([...result]).toEqual([0, 1001, 902, 803, 704, 605, 506, 407, 308, 209, 110]);
  });
});