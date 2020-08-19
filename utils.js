// Sort
export const quickSort = (arr = []) => {
  if (arr.length < 2) {
    return arr;
  }
  const chosen = arr.pop();
  const a = [];
  const b = [];
  arr.forEach((x) => {
    if (x <= chosen) {
      a.push(x);
    }
    if (x > chosen) {
      b.push(x);
    }
  });
  const output = [...quickSort(a), chosen, ...quickSort(b)];
  return output;
};

// 1. How to find the missing number in integer array of 1 to 100?
export const findMissingNumber = (arr, n) => {
  const expectTotal = n * ((n + 1) / 2);
  const actualTotal = arr.reduce((a, b) => a + b);
  return expectTotal - actualTotal;
};

// 2. How to find duplicate number on Integer array in Java?
export const findDuplicateNumbers = (arr) => {
  const obj = arr.reduce((acc, a) => {
    acc[a] = (acc[a] || 0) + 1;
    return acc;
  }, {});
  const result = Object.keys(obj)
    .filter((k) => obj[k] > 1)
    .map((k) => parseInt(k));
  return result;
};

export const removeDuplicateNumbers = (arr) => {
  return arr.reduce((acc, a) => {
    if (acc.indexOf(a) === -1) {
      acc.push(a);
    }
    return acc;
  }, []);
};

// 3. How to check if array contains a number in Java?
export const isNumberExists = (arr, x) => {
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const val = arr[mid];
    if (val === x) {
      return true;
    }
    if (val > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

// 4. How to find largest and smallest number in unsorted array?
export const findMinMaxNumbers = (arr) => {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((a) => {
    if (a < min) {
      min = a;
    }
    if (a > max) {
      max = a;
    }
  });
  return [min, max];
};

// 5. How to find all pairs on integer array whose sum is equal to given number?
export const findSumPairs = (arr, n) => {
  const exists = [];
  const result = [];
  arr.forEach((a, idx) => {
    const b = n - a;
    if (arr.includes(b, idx + 1)) {
      const pair = a < b ? [a, b] : [b, a];
      if (!exists.includes(a)) {
        exists.push(a);
        exists.push(b);
        result.push(pair);
      }
    }
  });
  return result;
};

// 6. Find a triplet in an array whose sum is closest to a given number
export const findFitBoxCapacity = (arr, capacity, count = 3) => {
  const result = [];
  arr.sort((a, b) => a - b);
  const initial = count - 2; // get first [count-2] smallest numbers, then find the other 2 numbers
  const n = arr.length;
  for (let i = initial - 1; i < n - 2; i++) {
    const subset = [];
    let j = i;
    while (subset.length < initial) {
      subset.push(arr[j]);
      j--;
    }
    subset.sort((a, b) => a - b);
    const sum = subset.reduce((acc, cur) => acc + cur);
    let start = i + 1;
    let end = n - 1;
    while (start < end) {
      const total = sum + arr[start] + arr[end];
      console.log(total);
      if (total <= capacity) {
        result.push([...subset, arr[start], arr[end]]);
        start++;
      }
      if (total > capacity) {
        end--;
      }
      // if (total === capacity) {
      //   break;
      // }
    }
  }
  // return closest;
  console.log(result);
  return result;
};

export function minimumHours(rows, columns, grid) {
  // WRITE YOUR CODE HERE
  let hours = 0;
  const expectSum = rows * columns;
  let actualSum = sumGrid(grid);
  while (actualSum < expectSum) {
    const curGrid = grid.map((arr) => arr.slice());
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (curGrid[i][j] === 1) {
          if (grid[i][j + 1] === 0) {
            grid[i][j + 1] = 1;
          }
          if (grid[i][j - 1] === 0) {
            grid[i][j - 1] = 1;
          }
          if (grid[i + 1] && grid[i + 1][j] === 0) {
            grid[i + 1][j] = 1;
          }
          if (grid[i - 1] && grid[i - 1][j] === 0) {
            grid[i - 1][j] = 1;
          }
        }
      }
    }
    hours++;
    //console.log(curGrid);
    console.log(grid);
    actualSum = sumGrid(grid);
  }
  return hours;
}
export function sumGrid(grid) {
  return grid
    .reduce((acc, cur) => {
      return [...acc, ...cur];
    }, [])
    .reduce((a, b) => a + b);
}
