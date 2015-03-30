QUnit.module('1주차');
QUnit.test('답1 확인', function(assert){
	var p = Math['pow'];
	assert.equal(typeof 세제곱, 'function', '세제곱() 함수를 선언해야 합니다.');
	for(var i=1; i < 100; i+=7) {
		assert.equal(세제곱(i), Math['pow'](i,3), '잘못된 결과입니다. 올바른 결과는 아래의 Expected 항목처럼 나와야 합니다.');
	}
});
QUnit.test('답2 확인', function(assert){
	assert.equal(typeof 답2, 'function', '답2() 함수를 선언해야 합니다.');
	var arrays = [
		[1, 2],
		['가', '나', '다'],
		'12345678901234567890'.split(''),
		[]
	];
	for (var i=0,len; i < arrays.length; i++) {
		len = arrays[i].length;
		답2(arrays[i]);
		assert.equal(arrays[i].length, len+1, '배열의 크기는 1만큼 증가해야 한다.');
		assert.equal(arrays[i].pop(), '번호 끝', '배열 마지막 원소는 "배열 끝" 문자열이어야 한다.');
	}
});
QUnit.test('답3 확인', function(assert){
	assert.equal(typeof 답3, 'function', '답3() 함수를 선언해야 합니다.');
	for (var i=3; i < 100; i += 17) {
		for (var j=2; j < 20; j += 3) {
			var answer = i % j;
			assert.equal(답3(i, j), answer, '('+i+','+j+')를 전달할 때 함수의 반환값은 '+answer+'이어야 합니다.');
		}
	}
});
QUnit.test('답4 확인', function(assert){
	assert.equal(typeof 답4, 'function', '답4() 함수를 선언해야 합니다.');
	['문자열', 1234.5, true, undefined].forEach(function(v){
		var s = typeof v;
		assert.equal(답4(v), s, v+'의 타입은 '+s+'입니다.');
	});
});
QUnit.test('답5 확인', function(assert){
	assert.equal(typeof 답5, 'function', '답5() 함수를 선언해야 합니다.');

	var arrays = [
		['가', '나'],
		['하나', '둘', '셋', '넷']
	];

	var log = console.log, result;
	console.log = function(str) {
		result = str+'';
		log.apply(console, arguments);
	};
	arrays.forEach(function(arr){
		var answer = arr.join('\n');
		답5(arr);
		assert.equal(result, answer, '출력된 결과가 올바르지 않습니다.');
	});
	console.log = log;
});
