"use strict";

/*

    ES2015의 const 와 let 에 대해서 알아본다.

    var
    1. 읽기 쓰기 변수 선언
    2. 함수 스코프 사용
    3. 변수 호이스팅 있음
    변수 중복 선언 가능
    변수 이름 충돌 가능


    let
    1. 읽기 쓰기 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가


    const
    1. 읽기 전용 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가
*/
console.log(aa);
var msg = 'global scope';
if (true) {
  var _msg = 'block scope';
}
function outer() {
  var msg = 'function scope';
  if (true) {
    var _msg2 = 'block scope';
  }
}
var aa = 'hosting';