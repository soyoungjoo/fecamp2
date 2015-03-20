// 문자열 표현하는 법
console.log('문자열\'문자열\'문자열');
console.log('문자 n : 문\n자, r: 문\r자, t : 문\t자');
// \n : 줄바꿈 (newline)
// \r : 캐리지 리턴 (carrige return)
// \t : 탭 (tab)
// * 이스케이프 문자열 찾아보기.

// 숫자를 표현하는 법
console.log(.6);  // 0.6 의 0 생략가능.
console.log(012); // 8진법 표현 (앞에 0)
console.log(0x12); // 16진법 표현 (앞에 0x)
/*
 * parseInt 두 번째 인수에는 사용할 진법을 명시적으로 표현한다.
 */
console.log(parseInt('012', 8));  //parseInt('문자열', [진법수]) 
console.log(parseInt(012));   // 10, 정수형으로 입력했기에 10으로 출력됨.
console.log(parseInt('012')); // 12

console.log(parseInt('c5f', 16));
//c x 5f = 13(5 x 16) =  (13x5)(13x16) = 3167 [10진수]

// 숫자를 다른 진법으로 변환할 때는 toString 메소드를 사용한다.
// (숫자).toString(진법)
console.log((35).toString(16));  // 10진수 35를 16진수로 변환.
console.log(35.0.toString(16));  // 명시적으로 소숫점 자리를 추가하면 (괄호사용)문제해결.
console.log(35..toString(16));   // 0은 생략가능.

// 배열
console.log('[배열]');

var abc = ['a', 'b', 'c'];
console.log(abc[2]);  // 배열 이름 뒤에 여는 대괄호, 인덱스 번호, 닫는 대괄호를 입력하면 배열의 원소에 접근할 수 있습니다.
console.log(abc[3]);  // 없는 인덱스 번호를 출력하면 undefined 
// 배열에 값을 추가 할 때
abc[3] = 'd';
console.log(abc[3]);

abc[5] = 'e';
console.log(abc[4]); // 중간 인덱스를 건너뛰고 저장하면 중간 인덱스에는 undefined가 저장됨.
console.log(abc[5]); 

// 객체
console.log('[객체]');
var obj = {
    name : '홍길동', 
    age : 1    
};


var eyes = false;
var person = {
    name : '주소영',
    email : 'jsybm123@nate.com\n\r',
    phone : '010-0000-0000',
    adress : '서울시\t강북구',
    '키' : 173,
    '색맹여부' : eyes
};
console.log(person);

// 객체 프로퍼티의 접근법 1 - 각괄호 표기법
console.log(person['name']);

// 객체 프로퍼티의 접근법 2 - 점 문법
console.log(person.name);   
// 단, 프로퍼티의 이름이 변수 이름 규칙을 따르고 있는 경우에만 가능.

// 함수
console.log('[함수]');
// 함수를 만드는 방법1 - 선언식
/* [작성법]
 * function 함수이름(인수){
 *      동작할 코드;    
 * }
 * [사용법]
 * 함수이름(); 
 */
function 라면요리(라면종류, 맛강도, 물양){
    console.log(라면종류 + '입니다. \n'+ 맛강도 + '이며,'+ 물양 + '정도로 끓여주세요.');
}
라면요리('신라면', '매운맛' ,'100ml' );

function hello(name){
    console.log('안녕하세요, ' + name + '님');
}
hello('홍길동');

function 더하기(num1, num2){
    return num1 + num2;
}
console.log(더하기(3, 5));

function 제곱(num){
    return num * num;
}
var num = 제곱(5);
console.log(num);

// 자바스크립트에서는 함수도 하나의 값이다.
var 제곱다시 = 제곱;
제곱다시(5);

// 함수를 만드는 방법2 - 표현식
var fn = function (n){
    return n * n;
};
console.log(fn(4));
var fnum = (function (n){
    return n * n;
})(5);
console.log(fnum);

// 변수의 스코프(scope) = 유효범위
var 변수 = 1;
function 함수(){ // 호이스팅(hoisting)
    안쪽함수();
    
    console.log('a:'+ 변수);
    
    var 변수 = 1;
    변수 = 변수 + 1;
    console.log('b:'+ 변수);
    
    function 안쪽함수(){
        console.log('안쪽함수');
    }
    
}
함수();
console.log(변수);
함수();

// 메소드는 함수를 값으로 가진 프로퍼티 
var car = {
    color : 'silver',
    start : function(){
        console.log('부릉');
    }
};
car.start();

// 문자열의 프로퍼티와 메소드
var str = '동해물과 백두산이 마르고 닳도록 백두산아';
console.log(str.length);  // 17
var idx = str.indexOf('마르고');
console.log(str.indexOf('없음')); // 값이 없으면 -1
console.log(str.lastIndexOf('백두산'));

// 문자열 자르기 - substr(시작위치[, 길이])
var 새문자열 = str.substr(0, 7);
console.log(새문자열);
console.log(str.substr(5, 4));

// 문자열 자르기 = substring(시작위치[, 끝위치])
var 백두산 = str.substring(5, 8);
console.log(백두산);


// 숫자의 메소드
var num = 1234.567;
// 소수점 아래 자리수를 맞추는 toFixed. 넘는 자리는 반올림, 모자라는 자리는 0으로 채움.
num.toFixed(3);
console.log(num.toFixed(2));

// 배열의 메소드
var abc = ['a', 'b', 'c'];
// 배열에 원소를 추가하는 방법1
abc[abc.length] = 'd';
// 베열에 원소를 추가하는 방법2
abc.push('e','f');
console.log(abc);
console.log(abc.length);
console.log(abc.join());

// 배열에 포함된 원소 갯수를 알아내서 반환하는 함수 arraySize()
// var 배열의크기 = arraySize(배열);

var abcd = arraySize(['aa', 'bb', 'cc', 'dd']);

function arraySize(array){
    return array.length;
}

console.log(abcd);

// 배열 첫 번쨰 원소의 값 arrayFirst()

var first = arrayFirst(['aa', 'bb', 'cc']);

function arrayFirst(arr){
    return arr[0];
}

console.log(first);

// 배열의 마지막 원소의 값 arrayLast()
var last = arrayLast(['aa', 'bb', 'cc']);

function arrayLast(arr){
    return arr[arr.length - 1];
}

console.log(last);



