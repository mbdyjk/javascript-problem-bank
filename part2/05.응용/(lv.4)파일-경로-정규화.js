/**
 * [(lv.4)파일-경로-정규화.js]
 *
 * - normalizePath 함수를 작성하세요.
 * - 이 함수는 파일 경로에서 '.'와 '..'를 처리하여 경로를 정규화합니다.
 * - '/' 문자로 구분된 경로 요소를 배열로 만든 뒤,
 *   '.'이면 무시, '..'이면 이전 요소 제거를 통해 처리하세요.
 * - 시작과 끝의 '/' 처리를 주의하되, 중간의 연속된 '/'는 하나로 합쳐야 합니다.
 * - 예: "/a/b/../c" => "/a/c", "./a//b/./c/" => "a/b/c/", "/a/../../b" => "/b"
 *
 * @param {string} path
 * @returns {string}
 */

function normalizePath(path) {
  const startWithSlash = path.startsWith("/");
  const endWithSlash = path.endsWith("/");
  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    // 1) ''일 경우 => 무시
    // 2) '.'일 경우 => 무시
    // 3) '..'일 경우 => 이전 요소가 존재할 때 이전 요소 제거
    // 4) 일반 문자일 경우 => 그대로 유지
    if (part === "" || part === ".") continue;
    if (part === "..") {
      if (stack.length > 0 && stack[stack.length - 1] !== "..") {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  let normalizedPath = stack.join("/");

  if (startWithSlash) normalizedPath = "/" + normalizedPath;
  if (endWithSlash && normalizedPath !== "/") normalizedPath += "/";

  return normalizedPath;
}

// export 를 수정하지 마세요.
export { normalizePath };
