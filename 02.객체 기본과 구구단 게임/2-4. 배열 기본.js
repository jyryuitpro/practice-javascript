var 배열 = [
    '사과',
    '오렌지',
    '포도',
    '딸기',
]

console.log(배열[0]);
console.log(배열[1]);
console.log(배열[2]);
console.log(배열[3]);
console.log(배열[4]);
console.log(배열[-1]);
console.log(배열.length);

console.log('안녕하세요'[3]);
console.log('안녕하세요'.length);

console.log(배열);

var 배열같은객체 = {
    0: '코끼리',
    1: '고양이',
    2: '강아지',
    3: '치킨',
    length: 4,
}

console.log(배열같은객체);

console.log(Array.isArray(배열));
console.log(Array.isArray(배열같은객체));

var 안녕 = '안녕하세요'
안녕[3];
안녕.length;

console.log(Array);
console.log(Number('5'));
console.log(String(5));
console.log(Boolean('true'));