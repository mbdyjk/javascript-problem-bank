/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  // TODO
  // 1. 키워드별 검색 횟수 객체 형태로 저장
  const searchNumByKeywordObj = keywords.reduce((obj, keyword) => {
    obj[keyword] = (obj[keyword] ?? 0) + 1;
    return obj;
  }, {});
  // 2. 횟수 내림차순으로 정렬, topKeywordsCache에 저장
  // 객체 내에서 value 기준 정렬은 배열로 변환하여 1번 index 요소 기준 정렬을 한다.
  // 배열의 첫번째 요소를 구조분해 할당하여 map 메서드 실행
  const sortedArr = Object.entries(searchNumByKeywordObj)
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword);

  topKeywordsCache = sortedArr.slice(0, 10);
}

function getTopKeywords() {
  // TODO
  return topKeywordsCache;
}

// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
