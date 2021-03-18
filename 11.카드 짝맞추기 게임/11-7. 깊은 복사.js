var obj = {a: 1, b: 2, c: 3};

var obj2 = {};

object.keys(obj).forEach(function (key) {
    obj2[key] = obj[key];
});

obj === obj2

// 얕은복사 --> 참조
// 깊은복사 --> 복사

obj = { a:1, b: { c: 1 } }

obj2 = JSON.parse(JSON.stringify(obj));

