jQuery(function($){
    // 이벤트 함수 사용
    $("#box").on("mousedown", function(event){
        $(this)/*.text(event.which)*/.css("background-color", "green");
        //event.which 동작된 키보드나 마우스의 위치를 숫자로 알 수 있다.
    });
    
    $('a').on("click", function(event){
        event.preventDefault();
        // console.log('a');
        // event.preventDefault() : 기본동작 제어. 
        // a태그의 경우 링크로 도달불능. form에선 submit 제어.
    });
    // 마우스 관련 이벤트 : click, mousedown, mouseup, mousemove
    // 키보드 관련 이벤트 : click, keypress, keydown, keyup
    // 웹접근성에 용이한 click이벤트를 주로 사용하는 것이 좋다.
    // 그 외 이벤트 : focus, blur, change, scroll


    $(document).on("keydown.move", function(event){        
        var $box = $("#box");
//        var position = $box.position();            
//        if(event.which === 37){
//            $box.css("left", position.left - 5);
//        }else if(event.which === 38){
//            $box.css("top", position.top - 5);
//        }else if(event.which === 39){
//            $box.css("left", position.left + 5);
//        }else if(event.which === 40){
//            $box.css("top", position.top + 5);
//        }
        
        
        switch (event.which) {
            case 27: // ESC
                $(document).off('keydown.move');
                // 이벤트를 제거할 때에 같은 이벤트동작이 여러번 다른곳에 쓰이고 있다면, (이벤트.이름) 형식으로 구분을 지어 사용할 수 있다.
                // 여러 이벤트를 한번에 사용하려면 공백을 주어 사용하면 된다.
                // 사용예 : $(document).on("keydown.move click mouseover", function(event){
                break;
            case 37:
                $box.css("left", "-=5px");
                break;
            case 38:
                $box.css("top", "-=5px");
                break;
            case 39:
                $box.css("left", "+=5px");
                break;
            case 40:
                $box.css("top", "+=5px");
                break;                
        }     
        
    });
    
    // 드래그앤드롭 구현
    // 1. #box에서 마우스 버튼을 누를 때
    //    - 초기 위치값을 가지고 온다.
    //    - 현재 css left, top 값을 저장해둔다.
    //    - document 에 mousemove 이벤트를 건다.
    // 2. 버튼을 누른 채 마우스가 움직이면
    //     - 현재 위치값에서 초기 위치값을 빼면 차이를 알 수 있다.
    //     - 1에서 구한 css left, top 값에 차이만큼을 더한다.
    // 3. 마우스 버튼을 떼면
    //     - document에 걸었던 mousemove, mouseup 이벤트를 지운다.
    
    $('.dragndrop').on('mousedown', function(event){
       event.preventDefault(); // 텍스트 선택이 되지 않도록 기본 동작 제거 
        
        // 초기 커서의 위치
        var startX = event.pageX, startY = event.pageY;
        
        // 현재 #box의 css left, top 값
        var $this = $(this);
        var startLeft = parseInt($this.css('left'));
        var startTop = parseInt($this.css('top'));
        
        if(isNaN(startLeft)) startLeft = 0;
        if(isNaN(startTop)) startTop = 0;
        
        //
        var position = $this.css('position');
        if(position != 'absolute' && position !='relative' && position !='fixed')
        {
            $this.css('position', 'relative');
        }
        
        $(document).on('mousemove.dragndrop', function(event){
            // 현재 커서의 위치
            var nowX = event.pageX, nowY = event.pageY;  
            $this.css("left", startLeft + (nowX-startX)).css("top", startTop + (nowY-startY));            
        });
        
        $(document).on('mouseup.dragndrop', function(event){
            // 마우스 버튼을 땔 때 시프트키가 눌려있으면 처음 위치로 되돌린다.
            if(event.shiftKey)
            {
               $this.css("left", startLeft).css("top", startTop);     
            }
            $(document).off('.dragndrop');            
            // $(document).off('mousemove.dragndrop mouseup.dragndrop'); 동일함.   
            
        });
    });   
    
    $('#box span').on('mousedown', function(event){
        
        event.stopPropagation(); 
        // 선택자로 #box span을 사용하였기에 위의 #box를 선택자로 삼은 이벤트도 함께 동작하므로 stopPropagation()를 사용해서 이벤트 사용을 제어해야한다.
        event.preventDefault(); // 텍스트 선택이 되지 않도록 기본 동작 제거 
        
        // 초기 커서의 위치
        var startX = event.pageX, startY = event.pageY;
        
        var $box = $('#box');        
        // 초기 넓이, 높이
        var sWidth = parseInt($box.css('width'));
        var sHeight = parseInt($box.css('height'));
        
        $(document).on('mousemove.size', function(event){
            // 현재 커서의 위치
            var nowX = event.pageX, nowY = event.pageY;  
            $box
                .css("width", sWidth + (nowX-startX))
                .css("height", sHeight + (nowY-startY));
        });
        
        $(document).on('mouseup.size', function(event){
            $(document).off('.size');            
        });
    });

});

