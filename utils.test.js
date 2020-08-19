/* eslint-env jest*/

import * as utils from './utils';

describe('utils', () => {
  beforeEach(() => {});

  afterEach(() => {});

  // it(utils.quickSort.name, () => {
  //   expect(utils.quickSort([8, 5, 6, 9, 3, 1, 4, 2, 7, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // });

  // it(utils.findMissingNumber.name, () => {
  //   expect(utils.findMissingNumber([1, 2, 3, 5], 5)).toEqual(4);
  //   expect(utils.findMissingNumber([1, 2, 3, 4, 6], 6)).toEqual(5);
  //   expect(utils.findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10)).toEqual(8);
  // });

  // it(utils.findDuplicateNumbers.name, () => {
  //   expect(utils.findDuplicateNumbers([1, 1, 2, 2, 3, 4, 5])).toEqual([1, 2]);
  //   expect(utils.findDuplicateNumbers([1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
  //   expect(utils.findDuplicateNumbers([1, 2, 3, 4, 5, 6, 7])).toEqual([]);
  //   expect(utils.findDuplicateNumbers([1, 2, 1, 1, 1, 1, 1])).toEqual([1]);
  // });

  // it(utils.removeDuplicateNumbers.name, () => {
  //   expect(utils.removeDuplicateNumbers([1, 1, 2, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  //   expect(utils.removeDuplicateNumbers([1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
  //   expect(utils.removeDuplicateNumbers([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  //   expect(utils.removeDuplicateNumbers([1, 2, 1, 1, 1, 1, 1])).toEqual([1, 2]);
  // });

  // it(utils.isNumberExists.name, () => {
  //   expect(utils.isNumberExists([1, 3, 5, 2, 4], 5)).toEqual(true);
  //   expect(utils.isNumberExists([5, 4, 3, 2, 1], 6)).toEqual(false);
  //   expect(utils.isNumberExists([1, 3, 5, 2, 4, 6], 6)).toEqual(true);
  //   expect(utils.isNumberExists([6, 5, 4, 3, 2, 1], 7)).toEqual(false);
  // });

  // it(utils.findMinMaxNumbers.name, () => {
  //   expect(utils.findMinMaxNumbers([-20, 34, 21, -87, 92])).toEqual([-87, 92]);
  //   expect(utils.findMinMaxNumbers([10, -2])).toEqual([-2, 10]);
  //   expect(utils.findMinMaxNumbers([1, -1, 0])).toEqual([-1, 1]);
  // });

  // it(utils.findSumPairs.name, () => {
  //   expect(utils.findSumPairs([2, 4, 3, 5, 7, 8, 9], 7)).toEqual([
  //     [2, 5],
  //     [3, 4]
  //   ]);
  //   expect(utils.findSumPairs([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7)).toEqual([
  //     [2, 5],
  //     [3, 4],
  //     [-2, 9]
  //   ]);
  //   expect(utils.findSumPairs([1, -1, 0], 3)).toEqual([]);
  //   expect(utils.findSumPairs([1, -1, 0], 0)).toEqual([[-1, 1]]);
  //   expect(utils.findSumPairs([1, -1, 0, 0], 0)).toEqual([
  //     [-1, 1],
  //     [0, 0]
  //   ]);
  //   expect(utils.findSumPairs([12, 3, 5, 1, 4, 6, 9, 10, 15, -8, -1, -4, -6, -3, 5, 7], 8)).toEqual([
  //     [-4, 12],
  //     [3, 5],
  //     [1, 7],
  //     [-1, 9]
  //   ]);
  // });

  // it(utils.findFitBoxCapacity.name, () => {
  //   // expect(utils.findSumTriplets([2, 4, 3, 5, 7, 8, 9], 10)).toEqual([[2, 3, 5]]);
  //   // expect(utils.findSumTriplets([2, 4, 3, 5, 7, 8, 9], 12)).toEqual([
  //   //   [2, 3, 7],
  //   //   [3, 4, 5]
  //   // ]);

  //   // expect(utils.findSumTriplets([2, 4, 3, 5, 7, 8, 9], 16, 4)).toEqual([[2, 3, 4, 7]]);
  //   // expect(utils.findSumTriplets([2, 4, 3, 5, 7, 8, 9], 20, 4)).toEqual([
  //   //   [2, 3, 7, 8],
  //   //   [3, 4, 5, 8]
  //   // ]);

  //   expect(utils.findFitBoxCapacity([2, 4, 3, 5, 7, 8, 9], 20, 4)).toEqual([]);
  // });

  // it(utils.minimumHours.name, () => {
  //   expect(utils.minimumHours(5,5,[
  //     [1,0,0,0,0],
  //     [0,1,0,0,0],
  //     [0,0,1,0,0],
  //     [0,0,0,1,0],
  //     [0,0,0,0,1]
  //   ])).toEqual(4);
  //   expect(utils.minimumHours(5,6,[
  //     [0,0,1,0,0,0],
  //     [0,0,0,0,0,0],
  //     [0,0,0,0,0,1],
  //     [0,0,0,0,0,0],
  //     [0,1,0,0,0,0]
  //   ])).toEqual(3);
  // });
});
