/*

  스프레드 사용법을 학습한다.

  ES 5에서는
  arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array  메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

  ES2015 에서는
  rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

  Spread 연산자는 ... 이다.
    이터러블(iterable) 객체를 "개별" 요소로 분리
    이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
    iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/
//스프레드 연산자는 복제 객체&배열
//새로운 배열이나 새로운 객체를 만들때 사용(복제)
const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]);
console.log(...cities);

const newcities = [...cities];
console.log(...newcities);

const east = [];
const west = [];

const countries1 = east.concat(west);
console.log(east);
console.log(countries1);

const countries2 = [...east, ...west];
console.log(countries2);

const lakes = ['경포호', '화진포', '송지호', '청초호'];
const [first, ...rest] = lakes;

console.log(first);
console.log(rest);

let [city1, ...cityrest] = [...east, ...west];

console.log(cityrest);

const car1 = {
  type: 't1',
  color: 's1',
  model: 2019,
};
const car2 = {
  type: 't2',
  color: 's2',
  model: 2019,
};
const { type } = car1;
console.log(type); // t1
debugger;

//자주쓰는거
const func = function ({ type }) {
  console.log(type); //t2
  debugger;
};
func({ ...car1, ...car2 });

const morning = {
  breakfast: '미역국',
  lunch: '삼치구이',
};

const dinner = '스테이크';

const meals = { ...morning, dinner };
console.log(meals);

function childComponent(...props) {
  console.log(props);
}

const message = 'passed from Parent Component';
childComponent(...message);
