import { rotate } from "./index.js";

describe("rotate array", () => {
  // it("basic", () => {
  //   const data = [1, 2];
  //   const k = 2;

  //   rotate(data, k);

  //   expect(data).toEqual([1, 2]);
  // });

  // it("basic 2", () => {
  //   const data = [-1];
  //   const k = 2;

  //   rotate(data, k);

  //   expect(data).toEqual([-1]);
  // });

  // it("another basic", () => {
  //   const data = [1, 2, 3, 4, 5, 6, 7];
  //   const k = 3;

  //   rotate(data, k);

  //   expect(data).toEqual([5, 6, 7, 1, 2, 3, 4]);
  // });

  it("another broken 2", () => {
    const data = [1, 2, 3, 4, 5, 6];
    const k = 11;

    rotate(data, k);

    expect(data).toEqual([2, 3, 4, 5, 6, 1]);
  });
});
