/**
 * [(lv.2)객체와-loop.js]
 *
 * countProperties 함수를 작성하세요:
 * - 파라미터 obj
 * - for...in 루프를 사용하여 obj 객체의 소유 키 개수를 반환하세요.
 *
 * @param {object} obj
 * @returns {number}
 */
function countProperties(obj) {
  // TODO
  let cnt = 0;
  if(typeof obj === 'object' && obj !== null){
    for(let prop in obj){
      cnt++;
    }
    return cnt;
  }
}

export { countProperties };
