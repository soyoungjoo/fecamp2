QUnit.module('4주차');
QUnit.test('답1 확인', function(assert){
	assert.equal(typeof isZipCode, 'function', 'isZipCode() 함수를 선언해야 합니다.');
	var cases = {
		'300-500' : true,
		'300-50' : false,
		'022-111' : false,
		'1234-567' : false,
		'123-456' : true
	};

	for (var zip in cases) {
		assert.equal(isZipCode(zip), cases[zip], 'isZipCode("'+zip+'")의 결과는 '+cases[zip]+'이어야 합니다.');
	}
});

QUnit.test('답2 확인', function(assert){
	assert.equal(typeof 성공, 'function', '성공() 함수를 선언해야 합니다.');
	var inputs = ['qunit-filter-input','search-search','name'];
	for (var i=0; i < inputs.length; i++) {
		성공(inputs[i]);
		assert.equal(document.getElementById(inputs[i]).value, '성공!', '#'+inputs[i]+' 입력폼의 값은 "성공!"이어야 합니다.');
	}
});

QUnit.test('답3 확인', function(assert){
	var $box = jQuery('#box'), n, e, left;

	for (var i=0; i < 10; i++) {
		n = Math.floor(Math.random() * 10);
		if ( n % 2 ) {
			e = jQuery.Event( 'click', { altKey: true } );
		} else {
			e = jQuery.Event( 'click' );
		}

		left = parseInt($box.css('left')) || -1;
		$box.trigger(e);
		if ( n % 2 ) {
			assert.equal(parseInt($box.css('left')), left-10, 'Alt 키를 누르고 클릭하면 왼쪽으로 10px 움직여야 합니다.');
		} else {
			assert.equal(parseInt($box.css('left')), left+10, 'Alt 키를 누르지 않고 클릭하면 오른쪽으로 10px 움직여야 합니다.');
		}
	}
});
