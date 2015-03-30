// 함수에 인수를 전달하지 못할때, 다음과 같이 작성한다. 
// (보통은 0으로 기본값을 설정하고 사용한다. 0을 제외하고 다른 숫자를 사용한다면 []의 부분을 추가하여 사용하기도 한다.)
//function 곱하기(a,b){
//    b = b || 0;
//    [ if (typeof b === 'undefined'){
//      b = 2;
//    }]
//    return a*b;
//}
//
//곱하기(2);
//1. b의 값이 없으면 undefined로 인식
//2. undefined와 숫자2를 비교. 여기선 b의 값이 0이 된다.

// 문제1 : 생일을 입력하면 만 나이를 구하는 age() 함수를 작성하라.
// 사용예: age(1976, 3, 22);
function age(y, m, d){    
    var nowdate = new Date();
    var birthday = new Date(y, m-1, d);
    var age = nowdate.getFullYear()-y;
    
    if (m-1 > nowdate.getMonth() || m-1 === nowdate.getMonth() && d <= nowdate.getDate())
    {
        age += 1;
    }
    
    return age;
}
console.log(age(1976, 3, 22));

// 문제2 : 생일을 입력하면 만 나이에 따라 '어린이', '청소년', 청년', '장년이상'으로 반환하는 함수
// 연령대()를 작성하라.
// 사용예 : 연령대(1976, 3, 22)
// 조건 : 10살미만 / 10~18살 / `19~40 / 41~ 
function 연령대(y, m, d){
    
    var 연령 = age(y, m-1, d), str;
    if (연령 < 10){
        str = '어린이';
    }
    else if (연령 < 19){
        str = '청소년';
    }
    else if (연령  < 40){
        str = '청년';
    }
    else {
        str = '장년이상';
    }
    
    return str;
    
}

console.log(연령대(1998, 3, 22));