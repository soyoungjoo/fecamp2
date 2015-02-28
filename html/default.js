jQuery(function($){
	$(".gnb>button").on("click", function(){
		//$(".gnb>ul").slideToggle(300);
		$(this).next().slideToggle(300);		
		// this = click된 element, 즉 여기선 button.
		//$(this).next("ul").slideToggle(300); ul을 생략해도 되는 이유는 ul이 선택될것을 알기에 생략가능하다.
	});
});