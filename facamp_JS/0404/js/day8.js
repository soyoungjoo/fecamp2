var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

var regex = new RegExp('[0-9]{4}-[0-9]{4}');

var regex = /\d{2}[01]\d{3}-[1-4]\d{6}/;     //주민번호
var regex = /<\/{0,1}p>/;



var regex = /\d+(-\d+)+/g;
//console.log(str3.replace(regex, '<em>$&</em>'));
// $& : 일치하는 전체부분

var regex2 = /<(\/?)p>/g;
//console.log(str3.replace(regex2, '<$1div>'));
// 태그 변경하기.
// $1 : 괄호로 묶은 첫번째 부분

// DOM 이미지 SRC변경
//document.images[2].setAttribute('src', 'http://placekitten.com/210/78')


//for(var i=0;i<document.images.length;i++)
//{ 
//    var img = document.images[i];
//    if(img.getAttribute('width')!==null && img.getAttribute('height')!==null){
//        img.setAttribute('src', 'http://loremflickr.com/'+ img.getAttribute('width') +'/' + img.getAttribute('height'));
//    }
//}

//var elem = document.querySelector('h2');
//elem.addEventListener("click", function(event){    
//    alert(this.innerHTML);
//});


//var elem = document.querySelector('body');
//elem.addEventListener("click", function(event){    
//    alert('click');
//});
// 
//var elems = document.getElementsByTagName('h2'); 
//// document.querySelectorAll('h2') 로 사용해도 됨.
//
//for(var i=0;i<elems.length;i++)
//{
//    elems[i].addEventListener("click", function(event){    
//        console.log(event);
//        event.stopPropagation();  // body까지 전파되지 않게함.
//        alert(this.innerHTML);
//    });
//}
//console.log(navigator.userAgent.toLowerCase());

// document.forms[0].elements[2] === document.forms[0].elements['password'] 단 name속성이 존재할 때에만 사용가능하다. (document.forms[0].elements.password === document.forms[0].password  elements 생략가능)
// 값을 가져오려고 할때에는 document.forms[0].elements.password.value


// jquery
// 1. 원하는 엘리먼트 선택  jQuery('선택자')
// 2. 원하는 기능 사용
jQuery(document).ready(function(){
    //jQuery('p code').css('color', 'blue');
});
// js인식 시점이 상단일 경우 ready()를 사용하여 문서를 전체 인식하고 실행되도록 한다.

jQuery.noConflict(); // 다른 라이브러리와 $ 변수의 충돌을 일으키지 않는다.

// jQuery 기본 형태
//jQuery(function($){
//    var codeColor = $('p code').css('color');
//    console.log(codeColor);
//    
//    $("#box").on('click', function(event){
//        event.shiftKey; // shiftkey가 눌렸는지 check (ture/false)
//        var width = $(this).width();
//        var height = $(this).height();
//    });
//});


// click 시 10px 증가, shift 시 10px 감소

jQuery(function($){
    
    $("#box").on('click', function(event){
        
        var width = $(this).width();
        var height = $(this).height();
        
        if(event.shiftKey)
        {
            $(this).width(width-10);
            $(this).height(height-10);
        }
        else
        {
            $(this).width(width+10);
            $(this).height(height+10);
        } 
        
    });
});







