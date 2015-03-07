jQuery(function($){
	//모바일 GNB 토글 버튼
	var $gnbBtn = $(".gnb>button");
	
	$gnbBtn.on("click", function(){
		//$(".gnb>ul").toggle();
		//$(".gnb>ul").slideToggle(300);
		$(this).next().slideToggle(300);		
		// this = click된 element, 즉 여기선 button.
		//$(this).next("ul").slideToggle(300); ul을 생략해도 되는 이유는 ul이 선택될것을 알기에 생략가능하다.
		
		if($gnbBtn.text() === "메뉴 열기"){ 
			//$(".gnb>ul").is(":hidden") 으로 조건문을 사용해도 가능함.
			//여기서 :hidden 은 현재 display:none 상태인지 확인함			
			
			$gnbBtn.text("메뉴 닫기");
		}
		else
		{			
			$gnbBtn.text("메뉴 열기");
		}
	});

	// 태블릿 + 데스크톱 GNB 메뉴 

	$(".gnb>ul>li>a").on("mouseover focus", function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		// $(this).parent("li").addClass(); 와 동일함.		
		// siblings 형제 노드 전부를 선택함. 
		// $(this).parent().addClass("active").siblings("li"); 와 동일함. 
	});

});