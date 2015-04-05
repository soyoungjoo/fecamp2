function Square(width, height)
{
    this.width = width;
    this.height = height;
}

Square.prototype.넓이 = function(a, b){
    return this.width * this.height * a * b;
};

//Square.prototype = {
//    넓이 : function() { 
//        return this.width * this.height;
//    },
//    넓이2 : function() { 
//    },
//    넓이3 : function() { 
//    }
//};

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

//console.log(사각형1.넓이());
//console.log(사각형2.넓이());
//
//console.log(사각형1.넓이 === 사각형2.넓이);
// 값이 같은지 확인하는 것이 아니라, 각 사각형1, 사각형2가 넓이 함수를 실행할 때 위치가 같은지 확인하는 것임.

//console.log(사각형1.넓이.apply(사각형2));
//console.log(사각형1.넓이.apply(사각형2) === 사각형2.넓이());
// apply,call : 인수값으로 this 변경됨. 

//console.log(사각형1.넓이.apply(사각형2, [2,3]) === 사각형1.넓이.call(사각형2, 2, 3));

function argarr() {
    console.log(arguments);
    //var arr = Array.prototype.concat.call(arguments);
    //var arr = Array.prototype.concat.apply([], arguments);
    var arr = [].concat.apply([], arguments);
    // var arr = [].concat(1, 2, 3);
    console.log(arr);
}

//argarr(1, 2, 3);


// 문제 : 다음과 같이 동작하는 원(Circle) 데이터를 정의하라.
// var circle1 = new Circle(반지름숫자);
// var circle2 = new Circle(반지름숫자2);
// console.log(circle.넓이()); // 원의 넓이 = 반지름제곱 * Math.PI
// console.log(circle.둘레()); // 원의 둘레 = 2 * 파이 * 반지름
// console.log(circle.지름()); // 원의 둘레 = 2 * 반지름

function Circle(r){
    this.r = r;
}

Circle.prototype = {
    넓이 : function(){
        return this.r * this.r * Math.PI;
    },
    둘레 : function(){
        return 2 * Math.PI * this.r;
    },
    지름 : function(){
        return 2 * this.r;
    }
}

var circle1 = new Circle(5); 
// 인스턴스(instance) : 클래스(Class) 또는 타입(type)을 사용해 구체적인 고유 데이터로 만든 것.
// 이 때, 인스턴스를 만드는 과정에는 new 연산자가 사용되면 이 과정을 인스턴스화(instantiation)라고 한다.
var circle2 = new Circle(3);
//console.log(circle1.넓이());
//console.log(circle1.둘레());
//console.log(circle1.지름());
//console.log(circle2.넓이());
//console.log(circle2.둘레());
//console.log(circle2.지름());

// document.querySelector();  
// 선택자의 명시가 길어질 경우. querySelector가 getElementById 보다 훨씬 접근하기에 용이하다.












