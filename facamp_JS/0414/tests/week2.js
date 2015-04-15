if (typeof countDown === 'function') {
	window.onload = function(){ countDown(2015, 3, 28, 9); };
}

function log(text) {
	var timer = document.getElementById('timer');
	if (!timer) return;

	timer.textContent = text;
}

function rand(min, max) {
	return Math.round(Math.random() * (max-min)) + min;
}

QUnit.module('2주차');
QUnit.test('답1 확인', function(assert){
	assert.equal(typeof tick, 'function', 'tick() 함수를 선언해야 합니다.');
});
QUnit.test('답2 확인', function(assert){
	assert.equal(typeof circleArea, 'function', 'circleArea() 함수를 선언해야 합니다.');
	for(var i=1,a; i < 100; i += 4) {
		a = i*i*Math.PI;
		assert.equal(circleArea(i), a, 'circleArea('+i+')의 결과는 '+a+'여야 합니다.');
	}
});
QUnit.test('답3 확인', function(assert){
	assert.equal(typeof randomFloat, 'function', 'randomFloat() 함수를 선언해야 합니다.');

	var floatAppeared = false;

	for(var i=0,a,b,min,max,r; i < 100; i++) {
		a = rand(0, 100);
		b = rand(0, 100);
		min = Math.min(a, b);
		max = Math.max(a, b);
		if (i % 17 === 0) max = min = i;
		if (min === max) max++;
		r = randomFloat(min, max);
		assert.ok(isFloat(r,1) && min <= r && r <= max, 'randomFloat('+min+', '+max+')의 값은 '+min+'과 '+max+' 사이의 소숫점 첫째자리 실수여야 합니다. 현재값 : ' + r);
	}

	function isFloat(n,a) {
		if (typeof n !== 'number') return false;
		return (Math.floor(n*Math.pow(10,a))/Math.pow(10,a) === n);
	}
});
QUnit.test('답4 확인', function(assert){
	assert.equal(typeof formatDate, 'function', 'formatDate() 함수를 선언해야 합니다.');

	var min = 0, max = new Date(2016, 12, 31).getTime(), theDate, y, m, d, w, formatStr;

	for (var i=0; i < 100; i++) {
		theDate = new Date(rand(min, max));
		y = theDate.getFullYear();
		m = theDate.getMonth() + 1;
		d = theDate.getDate();
		w = '일월화수목금토'.substr(theDate.getDay(), 1);

		formatStr = y + '년 ' + m + '월 ' +  d + '일 ' + w + '요일';
		assert.equal(formatDate(theDate), formatStr, 'formatStr에서 반환하는 값은  "'+formatStr+'"이어야 합니다.');
	}
});
QUnit.test('답5 확인', function(assert){
	assert.equal(typeof lifeTime, 'function', 'lifeTime() 함수를 선언해야 합니다.');

	var min = 0, max = new Date(2015, 3, 21).getTime(), theDate, y, m, d, days;

	for (var i=0; i < 100; i++) {
		theDate = new Date(Math.floor(rand(min, max)/1000)*1000);
		theDate = new Date(theDate.getFullYear(), theDate.getMonth(), theDate.getDate());
		y = theDate.getFullYear();
		m = theDate.getMonth() + 1;
		d = theDate.getDate();
		today = new Date();
		days = Math.ceil((today - theDate) / 1000 / 3600 / 24);
		assert.equal(lifeTime(y, m, d), days, y+'년 '+m+'월 '+d+'일로부터 오늘은 '+days+'일째입니다.');
	}
});
QUnit.test('답6 확인', function(assert){
	assert.equal(typeof countDown, 'function', 'countDown() 함수를 선언해야 합니다.');
});
