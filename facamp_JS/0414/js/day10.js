jQuery(function($){
    $('#box').on('click',function(event){
       alert('CLICK'); 
    });
    
    $(document).on('keydown',function(event){
        if(event.which === 13){
            $('#box').trigger('click');   
        }
    });

    $('li').on('click',function(event){
       // $(this).clone().insertAfter(this);
    });
    //li의 경우 복사되어 만들어진 li를 누르면 복제기능이 먹지 않는다.
    //그 방법은 ul에 걸어서 li에 발생하는 것을 받아오겠다..라고 작성해야함
    //그 방법은
    $('ul').on('click','li',function(event){
        //$(this).clone().insertAfter(this); 
    });
//버튼 보이고, 안보이고 하기    
    $('#hide').on('click',function(event){
//        $('#box').hide(300);
//        $('#box').fadeIn(300);
        $('#box').delay(1000).slideUp(300);
    });
    $('#show').on('click',function(event){
//        $('#box').show(300); 
//        $('#box').fadeOut(300); 
        $('#box').slideDown(300); 
    });
    $('#toggle').on('click',function(event){
//        $('#box').toggle(300); 
//        $('#box').fadeToggle(300); 
        $('#box').slideToggle(300); 
    });
    //애니메이션 함수는 2개 이상이 연달아 있을 경우, 쌓여서, 먼저껄 실행하고, 그 후에 다음껄 실행한다.
    $(document).on('keydown',function(event){
//        var startX = $('#box').left;
//        var startY = $('#box').top;
       //event.preventDefault();
        var move = 40;
        var windowW = $(window).width()-50-move;
        var h2H = $('h2:first').offset().top-50-move;
        
        var left = $('#box').offset.left;
        var top = $('#box').offset.left;
        
        console.log(h2H);
        switch(event.which){
            case 37:
                if($('#box').offset().left <= move){
                    $('#box').stop().animate({'left': '0px'},300);
                }else{
                    $('#box').stop().animate({'left': '-='+move+'px'},300);   
                }
                break;
            case 39:
                if($('#box').offset().left >= windowW){
                    $('#box').stop().animate({'left':windowW+move},300);
                }else{
                    $('#box').stop().animate({'left':'+='+move+'px'},300);
                }
                break;         
            case 38:
                if($('#box').offset().top <= 15){
                    $('#box').stop().animate({'top':'0px'},300);
                }else{
                    $('#box').stop().animate({'top':'-='+move+'px'},300);
                }
                break;
            case 40:
                if($('#box').offset().top >= h2H){
                    $('#box').stop().animate({'top':h2H+move},300);
                }else{
                    $('#box').stop().animate({'top':'+='+move+'px'},300);
                }
                break;
        }
        
    });
    $('h2').on('click',function(event){
        $(this).addClass('blue');
    });
    
    $('.top').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({'scrollTop': 0},200);
    });
    
    //모든 <a>태그를 선택한 후 <i class="fa fa-external-link"></i>태그를
    //선택한 <a>태그의 마지막 자식 요소로 추가하라.
    
    $('a[href^="http:"]').append('<i class="fa fa-external-link"></i>').attr('target',"_blank");
    
//탭은 모두 모두 li 태그
//li에는 a태그가 있다. 가르키는 탭이 있다.
    
    $('#tab .tabs').on('click', 'li a', function(event){
        var $this = $(this);
        event.preventDefault();
        $this
            .parent('li')
                .siblings()
                    .removeClass('active')
                .end()
                    .addClass('active');
        
        var panel = $this.attr('href');
        $(panel)
                .addClass('active')
                .siblings()
                    .removeClass('active');
    });
    
 
});