import {describe, expect, test} from '@jest/globals';
import { feedbackGen } from '../src/feedbackGen';

describe('feedbackGen', () => {
  test('should feedback a generator', () => {
    function* gen () {
      let i = 1
      let v = yield i++
      while (v>0 && v<1000) {
        v = yield v * 10 + i++
      }
    }
    const result = feedbackGen(gen(), gen())
    expect([...result]).toEqual([1, 12, 1223]);
  });
});