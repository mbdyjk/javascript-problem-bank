/**
 * [(lv.3)Debounce 함수 구현.js]
 *
 * 1) debounce(func, delay) 함수는 특정 동작이 반복해서 호출될 때, 마지막으로 호출된 후 delay(ms) 시간이 지난 시점에만 실제 함수를 실행하도록 합니다.
 * 2) 재호출이 delay 이내에 일어나면 이전 타이머를 취소하고 새로 타이머를 설정합니다.
 *
 * @param {function} func
 * @param {number} delay
 * @returns {function} 디바운스가 적용된 새 함수
 */

// TODO: debounce 함수를 작성하세요.
// 클로저 함수는 내부 함수를 정의하여 리턴하는 형태를 가진다.
// 클로저를 통해 내부 함수에서 외부 함수의 변수에 접근할 수 있다.
// 함수가 선언될 때의 환경을 기억해 외부 함수가 종료된 후에도
// 그 함수의 변수를 참조할 수 있고 캡슐화로 데이터 은닉이 가능
function debounce(func, delay) {
  let timer;

  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// export 를 수정하지 마세요.
export { debounce };
