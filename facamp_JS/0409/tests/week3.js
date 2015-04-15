QUnit.module('3주차');
QUnit.test('답1 확인', function(assert){
	assert.equal(typeof 홀짝, 'function', '홀짝() 함수를 선언해야 합니다.');
	for (var i=0, len, arr, arr2, expected; i < 10; i++) {
		len = rand(3, 8);
		arr = [];
		expected = [];
		for(var j=0; j < len; j++) {
			arr.push(rand(0, 100));
			expected.push(arr[j] % 2 ? '홀수':'짝수');
		}
		arr2 = arr.concat();
		홀짝(arr);
		assert.deepEqual(arr, expected, '['+arr2.join(',')+']은 ['+expected.join(',')+']가 되어야 합니다.');
	}
});
QUnit.test('답2 확인', function(assert){
	assert.equal(typeof 정렬, 'function', '정렬() 함수를 선언해야 합니다.');
	for (var i=0, num; i < 10; i++) {
		num = 정렬(rand(1, 100), rand(1, 100));
		assert.ok(Array.isArray(num), '정렬() 함수는 배열을 반환해야 합니다.');
		assert.ok(num[0]<=num[1], '정렬() 함수에서 반환한 배열의 첫 번째 원소는 두 번째 원소보다 크지 않아야 합니다. 현재값: ['+num.join(',')+']');
	}
});
QUnit.test('답3 확인', function(assert){
	assert.equal(typeof 삼삼, 'function', '삼삼() 함수를 선언해야 합니다.');
	for (var i=0, result, a, b, m; i < 10; i++) {
		result = 삼삼(a=rand(1, 100), b=rand(1, 100));
		assert.ok(Array.isArray(result), '삼삼()은 배열을 반환해야 합니다.');
		assert.deepEqual(result, m=th(a,b,[]), '전달된 인수: ('+a+','+b+'), 기대값:['+m.join(',')+'], 실제로 반환된 값:['+result.join(',')+']');
	}
	function th(a,b,r) {
		var t=a;if(a>b){a=b;b=t}
		for (var i=a+1; i < b; i++) {
			if (i % 3 === 0) r.push(i);
			if (i === a * 2) break;
		}
		return r;
	}
});
QUnit.test('답4 확인', function(assert){
	assert.equal(typeof Array.prototype.sum, 'function', '배열에 sum()이라는 메소드가 있어야 합니다.');
	assert.equal([1, 4, 6].sum(), 11);
	assert.equal([1, 4, 6, 'a'].sum(), 11);
	assert.equal([1, 4, 6, 8, 'a'].sum(), 19);
	assert.equal([1, 4, 6, 8, 'a', 20].sum(), 39);
	assert.equal([1, 4, 6, 8, 'a', 20, -1].sum(), 38);
});
QUnit.test('답5 확인', function(assert){
	assert.equal(typeof Date.prototype.formatStr, 'function', '날짜 객체에 formatStr()이라는 메소드가 있어야 합니다.');
	assert.equal(new Date(2015, 2, 13, 5, 6, 8).formatStr(), '2015년 3월 13일 오전 5시 6분 8초');
	assert.equal(new Date(2015, 2, 13, 15, 6, 8).formatStr(), '2015년 3월 13일 오후 3시 6분 8초');
	assert.equal(new Date(2015, 2, 13, 15, 0, 0).formatStr(), '2015년 3월 13일 오후 3시 0분 0초');
	assert.equal(new Date(2015, 0, 1, 0, 6, 8).formatStr(), '2015년 1월 1일 오전 0시 6분 8초');
	assert.equal(new Date(2015, 2, 13, 12, 59, 59).formatStr(), '2015년 3월 13일 오후 12시 59분 59초');
	assert.equal(new Date(2005, 11, 31, 15, 0, 0).formatStr(), '2005년 12월 31일 오후 3시 0분 0초');
});

function rand(min, max) {
	return Math.round(Math.random() * (max-min)) + min;
}
