/**
 * [(lv.3)비동기-데이터-병합하기.js]
 *
 * 1) asyncDataMerger 함수는 여러 개의 비동기 함수를 인자로 받습니다.
 * 2) 각 비동기 함수는 배열 형태의 데이터를 반환합니다(예: [{ id, ... }, ...]).
 * 3) 모든 비동기 함수를 병렬로 실행하여, 결과 배열들을 'id' 기준으로 병합하세요.
 * 4) 중복된 'id'를 가진 객체들은 속성을 덮어쓰되, 나중에 도착한 비동기의 데이터가 우선입니다.
 * 5) 최종 배열은 'id' 오름차순으로 정렬하여 반환하세요.
 *
 * - 예)
 *   함수 A가 [ { id:1, name:'Alice'}, { id:2, age:20 } ]
 *   함수 B가 [ { id:1, age:25 }, { id:3, gender:'F'} ]
 *   => 최종 병합 결과: [
 *         { id:1, name:'Alice', age:25 },
 *         { id:2, age:20 },
 *         { id:3, gender:'F'}
 *      ]
 * - 단, 최종 배열의 순서는 'id' 오름차순으로 정렬합니다.
 *
 * @param  {Function[]} asyncFunctions
 * @returns {Promise<Array>}
 */

// TODO: asyncDataMerger 함수를 작성하세요.
async function asyncDataMerger(...asyncFunctions) {
  const result = await Promise.all(asyncFunctions.map((fn) => fn()));
  // 결과 배열을 단일 배열로 만드는 flat 메서드 사용
  const mergedData = result.flat();

  // key: id, value: 객체 형태로 새로운 객체를 만든다.
  const overwrittenData = mergedData.reduce((acc, data) => {
    // acc[data.id] = data;
    acc[data.id] = { ...acc[data.id], ...data }; // 이렇게 해야 기존 객체를 유지하며 새로운 객체를 덮어쓸 수 있다.
    return acc;
  }, {});

  return Object.values(overwrittenData).sort((a, b) => a.id - b.id);
}

// export를 수정하지 마세요.
export { asyncDataMerger };
