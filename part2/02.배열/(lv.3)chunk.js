/**
 * [(lv.3)chunk.js]
 *
 * chunkArray 함수를 작성하세요.
 * - 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환합니다.
 * - 마지막 덩어리는 나머지 원소만 포함됩니다.
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */

function chunkArray(arr, size) {
  const matrix = [];
  //   for (let i = 0; i < arr.length; i += size) {
  //     let lastIndex = i + size - 1;
  //     if (lastIndex >= arr.length) {
  //       lastIndex = arr.length - 1;
  //       matrix.push(arr.slice(i, lastIndex));
  //     } else {
  //       matrix.push(arr.slice(i, i + size));
  //     }
  //   }
  for (let i = 0; i < arr.length; i += size) {
    matrix.push(arr.slice(i, i + size));
  }
  return matrix;
}

// export 를 수정하지 마세요.
export { chunkArray };
