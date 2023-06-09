"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
  k: 분해 할당 = 쪼개서 변수에 대입한다
  */

var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); //20, 30, 40

var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; //points === [20, 30, 40];
console.log(x2, y2, z2);
var x3 = points[0],
  z3 = points[1]; //points === [20, 30, 40];
console.log(x3, z3); //20, 40

var x4 = points[0],
  y4 = points[3];
console.log(x4, y4); //20, undefined

var car = {
  type: 't',
  color: 's',
  year: '2023'
};

//객체의 프로퍼티를 개별 변수로 만들기
var type1 = car.type;
var color1 = car.color;
var year1 = car.year;
console.log(type1, color1, year1);

//객체의 프로퍼티를 분해할당 이용해 변수로 만들기: vue, react에서 주로 사용되는 방식
//const { type:type, color:color, year:year } = car;
var type = car.type,
  color = car.color,
  year = car.year,
  gear = car.gear;
console.log(type, color, year, gear); // t, s, 2023, ?