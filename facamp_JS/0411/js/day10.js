jQuery(function($){
    
    // show, hide, toggle 
    $('#show').on('click', function(event){
        //$('#box').show(300);   
        //$('#box').fadeIn(300); 
        $('#box').slideDown(300);
    });
    $('#hide').on('click', function(event){
        //$('#box').hide(300); 
        //$('#box').fadeOut(300); 
        $('#box').delay(1000).slideUp(300);  
    });
    $('#toggle').on('click', function(event){
        //$('#box').toggle(300);      
        //$('#box').fadeToggle(300);  
        $('#box').delay(1000).slideToggle(300); 
    });
    
    $(document).on("keydown", function(event){         
        event.preventDefault();
        var $box = $("#box").stop(); // 동작이 쌓이지 않도록 처음에 중지
        
        var $boxO = $box.offset();
        var $boxL = $boxO.left, $boxT = $boxO.top;
        var $h2F = $('h2:first').offset();
        if(event.shiftKey)
        {
            switch (event.which) {
                case 38:
                    $box.animate({
                        opacity: 0.5
                    }, 50);  
                    break;
                case 40:
                    $box.animate({
                        opacity: 1
                    }, 50);  
                    break;
            }              
        }
        else
        {
            switch (event.which) {
                case 37:                    
                    if($boxL-20 < 0)
                    {
                        $boxL = 0;
                    }
                    else
                    {
                        $boxL -=20;
                    }
                    $box.animate({
                        /*opacity: 0.25,*/
                        left: $boxL
                      }, 50);
                    break;
                case 38:
                    if($boxT-20 < 0)
                    {
                        $boxT = 0;
                    }
                    else
                    {
                        $boxT -=20;
                    }
                    
                    $box.animate({
                        top:$boxT
                    }, 50); 
                    break;
                case 39:
                    
                    // 박스left위치 + 박스넓이 < 화면넓이 : left 20씩.
                    // 아니면 박스left위치 = 화면넓이 - 박스넓이
                    if(($boxL + $box.width() + 20) < $(window).width())
                    {
                        $boxL +=20;
                    }
                    else
                    {
                        $boxL = $(window).width() - $box.width();
                    }
                    
                    $box.animate({
                        left:$boxL
                    }, 50);
                    break;
                case 40:
                    if(($boxT + $box.height() + 20) < $h2F.top)
                    {
                        $boxT +=20;
                    }
                    else
                    {
                        $boxT = $h2F.top - $box.height();
                    }
                    
                    $box.animate({
                        top:$boxT
                    }, 50);
                    break;                
            } 
        }              
             
    });
    
    $(document).on("keyup", function(event){
        $("#box").stop();
    });  
    
});
