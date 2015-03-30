// call by value
function toNumber(str) {
	var str;
	str = outerStr;
	str = '111';
	return parseInt(str);
}
var outerStr = '123.45';
var num = toNumber(outerStr);

// call by reference
function addOne(arr) {
	var arr;
	arr = outerArr;
	arr.push('끝');
}
var outerArr = ['가', '나', '다'];
addOne(outerArr);

// Date : 날짜를 다루는 객체.
var date = new Date();
//console.log(date.getYear()); - 기억에서 지우세요.
console.log(date.getFullYear());
// console.log(date);
// date.setFullYear(2014);
// console.log(date);
// 문제: 오늘로부터 100일 뒤는 몇월 며칠인가?
date.setDate(date.getDate() + 100);
console.log(date);

// 2015년 2월 5일부터 오늘은 며칠 째인가?
var startDate = new Date(2015, 1, 5);
var nowDate = new Date();
var 시간차 = nowDate.getTime() - startDate.getTime();
var 며칠째 = Math.ceil(시간차/1000/60/60/24);

// 문제: 첫 번째 인수에 주어진 날짜로부터 두 번째 인수에 주어진 날짜가
// 며칠째인지 숫자로 반환하는 함수 diffDate를 작성하라.
function diffDate(firstArr, secondArr) {
	var firstDate = new Date(firstArr[0], firstArr[1]-1, firstArr[2]);
	var secondDate = new Date(secondArr[0], secondArr[1]-1, secondArr[2], 1); // 올림할 값을 만들기 위해 1시간 추가

	var diffTime = secondDate.getTime() - firstDate.getTime();
	return Math.ceil(diffTime/1000/60/60/24);
}

// 2014년 3월 2일로부터 며칠째가 2015년 4월 6일인가?
console.log(diffDate([2014, 3, 2], [2015, 4, 6])+'일째입니다.');

function setTimeText(date) {
	document.getElementById('timer').innerHTML = date;
}

// 문제: 1초마다 한 번씩 현재 시각을 표시하는 함수 clock()을 작성하라.
// 힌트 : setTimeout
function clock() {
	var date = new Date();
	setTimeText(date);
	setTimeout(arguments.callee, 1000);
}
window.onload = function(){ clock(); };

// 이 코드는
var now = Date.now();
// 다음 코드와 같다.
var date = new Date();
var now = date.getTime();

// 문제: 날짜를 입력하면 요일을 "한국어로" 반환하는 함수 요일()을 작성하라.
// 힌트: 배열 또는 문자열 자르기
function 요일(연, 월, 일) {
	var date = new Date(연, 월-1, 일);
	var day = date.getDay();
	//var dayNames = ['일','월','화','수','목','금','토'];

	return '일월화수목금토'.substr(day,1);
}
var 무슨요일 = 요일(2015, 3, 13);
console.log('2015년 3월 13일은 ' + 무슨요일 + '요일입니다.');

// 수학 관련 계산 객체
var rand = Math.random();
// 문제: 주어진 범위의 랜덤한 "정수"를 반환하는 getRandom() 함수를 작성하라.
function getRandom(min, max) {
	var rand = Math.random();
	rand = rand * (max - min) + min;
	return Math.round(rand);
}
var 무작위수 = getRandom(1, 6);
console.log(무작위수);

//
Math.pow(2, 3); // 2의 세제곱
Math.pow(16, 2); // 16의 제곱

// 산술 연산자
// 사칙연산+나머지 : + - * / %
// ++
var num = 10;

//var num2 = num++;
// 이 코드는 다음과 같다.
//var num2 = num;
//num = num + 1;

var num2 = ++num;

console.log(num++);
// 이 코드는 다음과 같다.
console.log(num);
num = num + 1;

console.log(++num);
// 이 코드는 다음과 같다.
num = num + 1;
console.log(num);


console.log(num);

// 할당 연산자
// =
var num = 1;
num = num + 5;















