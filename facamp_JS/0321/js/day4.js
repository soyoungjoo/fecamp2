// call by value
function toNumber(str){
    return parseInt(str);
}
var num = toNumber('123.45');

// call by reference
function addOne(arr){
    arr.push('끝');
}

var outerArr = ['가','나','다'];
addOne(outerArr);

// 내장객체 - Date()
var date = new Date();
//console.log(date.getYear());
console.log(date.getFullYear());
//date.setFullYear('2000');
//console.log(date);

console.log(date.getMonth()+1);

// 문제1. 오늘부터 100일 후는 몇일?
var date2 = new Date();
console.log(date2.getDate());
date2.setDate(date2.getDate() + 100);
console.log('문제1 : ' + (date2.getMonth() + 1 ) + '/' + date2.getDate());

console.log(date.getTime());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTimezoneOffset());
console.log(Date.now());
console.log(date.getDay());


// 문제2. 2015년 2월 5일 ~ 오늘 , 몇일째?
var startDate = new Date(2015, 1, 5);
var nowDate = new Date();

var 시간차 = nowDate.getTime() - startDate.getTime();
var 몇일째 = Math.ceil(시간차/1000/60/60/24); // Math.ceil 자동올림.
console.log('문제2 : ' + 몇일째);

// 문제3. 첫 번째 인수에 주어진 날짜로 부터 두번째 인수에 주어진 날짜가 며칠째인지 숫자로 반환
function diffDate(start,end){
    var sDate = new Date(start[0],(start[1]-1),start[2]);
    var eDate = new Date(end[0],(end[1]-1),end[2], 1); 
    // 올림할 값을 만들기 위해 1시간 추가 - 3월 2일을 기준값 1일로 계산하기위해 설정함.
    return Math.ceil((eDate.getTime() - sDate.getTime())/1000/60/60/24);
}

console.log('문제3 : '+ diffDate([2014, 3, 2], [2015, 4, 6])+'일째입니다.');

// 문제4. 1초마다 한 번씩 현재 시각을 표시하는 함수 clock()을 작성하라.
// 힌트 : setTimeout
function setTimeText(date){
    document.getElementById('timer').innerHTML = date;
}

function clock(){
    var date = new Date();
    setTimeText('문제4 : ' + date);    
    //setTimeout(clock, 1000);
    setTimeout(arguments.callee, 1000);
}

window.onload = function(){ clock(); };

// 문제5. 날짜를 입력하면 요일을 한국어로 반환하는 함수.
// 힌트 : 배열 또는 문자열 자르기.
function 요일(y, m, d){
    var wdate = new Date(y, (m-1), d);
    var ndate = wdate.getDay();
    
    // 배열
    //var weekday = ['일', '월', '화', '수', '목', '금', '토'];
    //return weekday[ndate];
    
    // 문자열
    //var weekday = '일월화수목금토';    
    //return weekday.substr(ndate, 1);    
    return '일월화수목금토'.substr(ndate, 1)
}
var 무슨요일 = 요일(2015, 3, 13);
console.log('문제5 : 2015년 3월 13일은 ' + 무슨요일 + '요일입니다.');

// 내장 객체 - Math()
// console.log(Math.random());

// 문제6. 주어진 범위의 랜덤한 '정수'를 반환하는 getRandom() 함수를 작성하라
function getRandom(min, max){
     return Math.round(Math.random() * (max - min) + min);
}

var 무작위수 = getRandom(1, 6);
console.log('문제6 : ' + 무작위수);

Math.pow(2, 3) // 2의 세제곱















