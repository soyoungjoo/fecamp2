// 문제: 1초마다 한번씩 반복하여 현재시간을 표시가는 clock()함수를 작성하라.
// 단, 시간은 반드시 두 자리로 표시해야 한다. 예를 들어 9시 50분 9초라면 09:50:09로 표시한다.
// 사용예: clock()
// 힌트: 시간은 document.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.

function clock(){
    var str = '';
    var nowdate = new Date();
    var hours = nowdate.getHours(), minutes = nowdate.getMinutes(), seconds = nowdate.getSeconds();
    
    if(hours < 10) hours = '0'+hours;    
    if(minutes < 10) minutes = '0'+minutes;    
    if(seconds < 10) seconds = '0'+seconds;
    
    str = hours + ':' + minutes + ':' + seconds;   
    
    document.title = str;   
    setTimeout(arguments.callee, 1000);    
}
clock();

// 문제: 인수로 전달한 숫자의 단을 콘솔에 출력하는 구구단() 함수를 작성하라.
// 출력 결과 
// 3 * 1 = 3

function 구구단(num){
    
    for(var i=1; i<10; i++)
    {
        console.log(num + " X " + i + " = " + (num*i));
    }
}
//구구단(3);  // 3단 출력

// 문제 : 2단부터 9단까지 테이블에 출력하는 함수
/*
    <table border=1>
        <tr>
            <td>2단</td>
            <td>3단</td>
        </tr>
        <tr>
            <td>2*1=2</td>
            <td>3*1=3</td>
        </tr>
    </table>
*/
function 구구단전부(){
    var html = '<table border="1" width="600" height="400" style="text-align:center;">';  
    
    html += '<tr>';
    for(var d=2; d<10; d++)
    {        
        if(d === 3)
        {   
            continue;
        }
        html += '<td>'+d+'단</td>';      
    }
    html += '</tr>';
    
    for(var i=1; i<10; i++)
    {        
        html += '<tr>';
        for(var j=2; j<10; j++)
        {
            if(j === 3)
            {      
                continue;
            }
            html += '<td>' + j + ' x ' + i + ' = ' + (j*i) + '</td>';         
        }
        html += '</tr>';
        
    }
      
    html += '</table>';
    
    return html;
    
}

//function 구구단전부(){
//    var html = '<table border="1" width="600" height="400" style="text-align:center;">';  
//    
//    for(var i=0; i<10; i++)
//    {        
//        html += '<tr>';
//        for(var j=2; j<10; j++)
//        {
//        
//            if(i===0)
//            {
//                if(j%2===1)
//                {
//                    html += '<td style="background:#88d;">'+j+'단</td>';
//                }
//                else
//                {
//                    html += '<td>'+j+'단</td>';
//                }  
//            }
//            else
//            {
//                if(j%2===1)
//                {
//                    html += '<td style="background:#88d;">' + j + ' x ' + i + ' = ' + (j*i) + '</td>';
//                }
//                else
//                {
//                    html += '<td>' + j + ' x ' + i + ' = ' + (j*i) + '</td>';
//                }  
//            }
//                     
//        }
//        html += '</tr>';
//        
//    }
//      
//    html += '</table>';
//    
//    return html;
//    
//}

window.onload = function() {
    document.getElementById('box').innerHTML = 구구단전부();
}


// 문제: 전달된 인수 중 숫자만 모두 더한 값을 반환하는 함수 sum() 을 작성하라
// 사용예: console.log(sum(1, 5, '+', 8));  // 14출력

function sum(){
    var total = 0;
    
    for(var i = 0; i<arguments.length; i++)
    {
        if(typeof arguments[i] === "number")
        {
            total += arguments[i]
        }        
    }   
    return total;
}

console.log(sum(1, 5, '+', 8));
console.log(sum(1, 5, '+', 8, 10, 20, 40));

// 문제 : 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함구 push()를 작성하라.
function push(){
    for (var i=1; i<arguments.length; i++)
    {
        arguments[0].push(arguments[i]);      
    }   
}

var arr = ['a','b'];
push(arr, 1, 2, 3);
console.log(arr); // 출력결과  : ['a','b',1, 2, 3]
push(arr, 1, 2, 3, 4);
console.log(arr); // 출력결과  : ['a','b',1, 2, 3, 1, 2, 3, 4]


// break 문 : 반복무이 break 문을 만나면 즉시 반복을 멈춘다.

// continue 문 : 반복문이 continue 문을 만나면 지나감.


// 내장 타입의 기능을 확장할 떄는 생성자.prototype.메소드이름 = function(){}; 형태를 사용한다.

// 현존하는 API중에 문자열을 숫자로 변환하는 API는 없다. 지금 한번 만들어보자.
String.prototype.toNumber = function(){
    return parseInt(this);
};
// 사용예 : "123".toNumber(); / "abc".toNumber();
console.log("123".toNumber());
console.log("abc".toNumber());

// 문제: 배열에서 가장 큰 숫자를 반환하는 prototype 메소드 max()를 정의하라.
Array.prototype.max = function(){
    var max = 0;
    for(var i = 0; i<this.length; i++)
    {           
        if(typeof this[i] === "number")
        {
            if(max < this[i]){
                max = this[i];
            }
        }           
    }   
    return max;
};

console.log([1,3,5].max()); // 5
console.log([1,3,'+', -2].max()); // 5

//문제: 날짜 객체에서 가리키는 시각이 오전인지 오후인지 문자열로 반환하는
// prototype 메소드 ampm()을 작성하라
Date.prototype.ampm = function(){  
    
    if(this.getHours()<12)
    {
        return '오전';
    }
    else
    {
        return '오후';
    }    
};


var date = new Date();
console.log(date.ampm()); //오후
var date = new Date(2015, 4, 12, 9);
console.log(date.ampm()); //오전


















