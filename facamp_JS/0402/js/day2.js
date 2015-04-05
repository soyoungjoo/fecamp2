// 문자열을 표현하는 법
'문자열'
"문자열"
"string"
"문'자열"
'문\'자열' // 작은 따옴표를 이스케이프(escape)한 문자열.
console.log('문\\자열');
// 다른 이스케이프 문자로는 \n, \r, \t 등이 있다. 콘솔에 입력해 확인해봅시다.
// \n : 줄바꿈(newline)
// \r : 캐리지 리턴(carriage return)
// \t : 탭(tab)

// 숫자를 표현하는 법
100
100.5
100.6789
0.6
.6 // 정수부가 0일 때는 생략 가능하다.
012 // 8진법 표현. 숫자 제일 앞에 0을 둔다.
0x12 // 16진법 표현. 숫자 앞에 0x를 둔다.
/*
 * 오래된 브라우저에서 문제가 발생하는 것을 막기 위해
 * parseInt 두 번째 인수에는 사용할 진법을 명시적으로 표시한다.
 */
parseInt('012', 10);
// 두 번째 인수를 사용하면 16진수를 10진법으로 변환할 수 있다.
// 문제: 16진수 c5f는 10진수로 얼마일까?
parseInt('c5f',16);

// 숫자를 다른 진법으로 변환할 때는 toString 메소드를 사용한다.
(35).toString(16); // 10진수 35를 16진법으로 변환하면?
35.0.toString(16); // 명시적으로 소숫점 자리를 추가하면 문제 해결.
35..toString(16); // 소숫점자리 0은 생략 가능

// 배열
var fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // 배열 이름 뒤에 여는 대괄호, 인덱스 번호, 닫는 대괄호를 입력하면 배열의 원소에 접근할 수 있다.

// 문제: 배열 fruits를 사용해 콘솔에 Cherry를 출력해봅시다.
console.log(fruits[2]);

// 없는 인덱스 번호를 출력하면 undefined가 나온다.
console.log(fruits[3]);

// 배열에 값을 추가할 때는 변수에 할당하듯 저장하면 된다.
fruits[3] = 'Mango';
console.log(fruits[3]);

// 중간 인덱스를 건너뛰고 저장하면 중간 인덱스에는 undefined가 저장된다.
fruits[5] = 'Tomato';
console.log(fruits[4]); // undefined

// 객체
var 내주소 = '인천';
var obj = {
	name : '김태곤',
	'a ge' : 36,
	'개발자?' : true,
	주소 : '내주소'
};

// 문제: 자신을 기술하는 person 객체를 작성해보자.
//console.log(person);

// 객체 프로퍼티의 접근법1 - 각괄호 표기법
obj['a ge'];

// 객체 프로퍼티의 접근법2 - 점 문법
// 단, 프로퍼티의 이름이 변수 이름 규칙을 따르고 있는 경우에만 가능.
obj.age;

// 함수
// 함수를 만드는 방법1 - 선언식
function 라면요리(라면종류, 물의양) {
	// 여기에 동작할 코드
	console.log(라면종류 + ' 라면을 끓입니다.');
	console.log('보글보글');
	console.log('후루루짭짭 후루룩짭짭');
	console.log('맛좋은 라면');
}
//라면요리('신라면', 400);
//라면요리('너구리', 500);

// 함수를 실행할 때 전달받는 값을 가리켜 인수(argument)라고 한다.
// 인수는 몇 개든 선언할 수 있다.

// 문제: 실행할 때 이름을 전달하면 "안녕하세요, 김태곤님"과 같이 콘솔에 출력하는 함수 hello를 선언하라.
function hello(name) {
	console.log('안녕하세요, ' + name + '님');
}
hello('김태곤');
hello('신승엽');

// return 키워드를 사용하면 함수 안의 값을 밖으로 반환(또는 리턴)한다.
function 더하기(num1, num2) {
	return (num1 + num2);
}
var num = 더하기(3, 5); // 8
console.log(num);

// 문제: 전달한 숫자를 제곱한 값을 반환하는 함수 제곱()을 작성하라.
function 제곱(n) {
	return n * n;
}
var num = 제곱(5);

// 자바스크립트에서는 함수도 하나의 값이다.
var 제곱다시 = 제곱;
제곱다시(5);

// 함수를 만드는 방법2 - 표현식
var fn = function (n) {
	return n * n;
};
fn(5);
var num = (function(n){
	return n * n;
})(5);

// 변수의 스코프(scope) = 유효범위
//var 변수 = 10;
// 호이스팅(hoisting)
function 함수() {
	var 변수 = 1;
	변수 = 변수 + 1;

	console.log(변수);

	function 안쪽함수() {
		console.log('안쪽');
	}

	안쪽함수();
}

// 메소드는 함수를 값으로 가진 프로퍼티
var car = {
	color : 'silver',
	start : function() {
		console.log('부릉');
	}
};
car.start();

// 문자열의 프로퍼티와 메소드
var str = '동해물과 백두산이 마르고 닳도록 백두산아';
// 몇 글자?
console.log(str.length);
// 특정 문자열을 포함하고 있나?
var idx = str.indexOf('없다');
// 특정 문자열의 시작 위치를 "뒤에서부터" 찾음
str.lastIndexOf('백두산');
console.log(idx);
// 문자열 자르기 - substr(시작위치, 길이);
var 새문자열 = str.substr(0, 7);
// 문제: str에서 "백두산이"만 잘라내는 코드를 작성하라.
var 백두산이 = str.substr(5, 4);
// 문자열 자르기 - substring(시작위치, 끝위치)
var 백두산 = str.substring(5, 8);

// 숫자의 메소드
var num = 1234.555;
// 소수점 아래 자리수를 맞추는 toFixed. 넘는 자리는 반올림. 모자라는 자리는 0으로 채움.
num.toFixed(2);

// 배열의 메소드
var fruits = ['Apple', 'Banana', 'Cherry'];
fruits.length; // fruits 배열의 원소 개수
// 배열 마지막에 원소를 추가하는 방법1
fruits[fruits.length] = 'Mango';
// 배열 마지막에 원소를 추가하는 방법2
fruits.push('Mango');

fruits.join(' + ');

// 문제: 배열에 포함된 원소 갯수를 알아내서 반환하는 함수 arraySize()

var 배열의크기 = arraySize(['a','b','c']); // 3

function arraySize(배열) {
	return 배열.length;
}

// 문제: 배열 첫 번째 원소의 값을 반환하는 arrayFirst() 함수를 작성하라.
var 첫번째원소 = arrayFirst(['a','b','c']); // 'a'

function arrayFirst(배열) {
	return 배열[0];
}

// 문제: 배열 마지막 원소의 값을 반환하는 arrayLast() 함수를 작성하라.
var 마지막원소 = arrayLast(['a','b','c']); // 'c'
var 마지막원소 = arrayLast(['a','b']); // 'b'
var 마지막원소 = arrayLast(['a']); // 'a'

function arrayLast(배열) {
	return 배열[배열.length - 1];
}









