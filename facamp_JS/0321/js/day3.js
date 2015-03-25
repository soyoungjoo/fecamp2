// 배열 확인 방법
// Array.isArray([]);

var str = "문자열";
var str2 = str;
str = "문자열 수정";

// 원시타입은 값 자체를 변수에 저장하며, 복합타입은 값이 아닌 값과의 연결고리(=포인터)가 변수에 저장된다.
var arr = ['A', 'B','C'];
var arr2 = arr;
arr.push('D');
console.log(arr2);
arr2 = null;
console.log(arr);

function 함수(){
    arguments[0];
}


// 이름이 있는 함수
function fn1(){
    console.log(arguments.callee);
}
fn1();

var 변수 = 1;
function 함수2(a, b){ 
    var 변수 = 2;
    console.log(window.변수);
}
함수2();

var obj = {
    name : '홍길동',
    sayName : function(){
        console.log(this.name);
        // 
    }  
};
var shin = {
    name : '신길동'
    //sayName : obj.sayName
};
shin.sayName = obj.sayName;

obj.sayName();
shin.sayName();


// 문제
function fn(){
    return this.width * this.height;
}

var rect1 = {
    width : 30,
    height : 10,
    getArea : fn
};

console.log(rect1.getArea()); //300

var rect2 = {
    width : 20,
    height : 10,
    getArea : fn
};

console.log(rect2.getArea()); // 200


// 익명(anonymous) 함수 - 지역변수의 속성을 사용하기에 용이하여 많이 사용된다.
(function(str){
    console.log(str);
})('aaa');


//setTimeout(function(){ topWordLoading(1); }, 100);

// 콜백(callback) 함수 = 특정한 상황이 되었을 때 실행하기 위해 전달하는 함수
// 용도에 의해 구분되는 것이므로 평범하게 만들어진 함수도 콜백 함수가 될 수 있다.
setTimeout(function(){
    console.log('5초 지남');
}, 5000);

function 오초뒤(){
    console.log('5초 지남');
}
setTimeout(오초뒤, 5000);
// "전역 함수라면" 함수 이름을 문자열로 전달할 수도 있다. (권장안함)
setTimeout('오초뒤', 5000);

var timeoutID = setTimeout(function(){
    console.log('5초 지남.');
}, 5000);
clearTimeout(timeoutID);


