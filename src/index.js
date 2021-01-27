// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

const naiveRotate = function (nums, k) {
  const firstPart = nums.slice(0, nums.length - k);
  const lastPart = nums.slice(-k);

  firstPart.reverse();
  lastPart.reverse();

  const swapped = firstPart.concat(lastPart);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = swapped[i];
  }

  nums.reverse();
};

const swap = (from, to, array) => {
  if (from < 0 || to > array.length - 1) return;

  [array[to], array[from]] = [array[from], array[to]];
};

const inPlaceRotate = (nums, k) => {
  // rotate whole array
  nums.reverse();

  // normalize k
  k = k % nums.length;

  // we reversed, so we need to swap first k elements
  // from index 0 to k - 1
  let start = 0;
  let end = k - 1;

  while (start < end) {
    swap(start, end, nums);

    start++;
    end--;
  }

  // now we need to reverse last nums.length - k elements
  // from index k to nums.length - 1
  start = k;
  end = nums.length - 1;

  while (start < end) {
    swap(start, end, nums);

    start++;
    end--;
  }
};

export { inPlaceRotate as rotate };
