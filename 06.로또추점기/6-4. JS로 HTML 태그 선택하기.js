var 후보군 = Array(45)
    .fill()
    .map(function (요소, 인덱스) {
        return 인덱스 + 1;
    });

console.log(후보군);

var 셔플 = [];

while (후보군.length > 0) {
    // Math.random() : 0 이상 1 미만
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}

console.log(셔플);

var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플
    .slice(0, 6)
    .sort(function (p, c) {
        return p - c;
    });

console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);

var 결과창 = document.getElementById('결과창');

// 클로저(closure)에 관련된 문제
for (var i = 0; i < 당첨숫자들.length; i++) {
    setTimeout(function 비동기콜백함수() {
        var 공 = document.createElement('div');
        공.textContent = 당첨숫자들[i];
        결과창.appendChild(공);
    }, 1000);
}
var 보너스칸 = document.getElementsByClassName('보너스')[0];
var 보너스공 = document.createElement('div');
보너스공.textContent = 보너스;
보너스칸.appendChild(보너스공);