var 가로 = 4;
var 세로 = 3;
var 색깔후보 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔 = [];
var 클릭플래그 = true;

// Math.random() : 0 이상 1 미만의 부동소숫점 의사 난수
for (var i = 0; 색깔후보.length > 0; i += 1) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
}
console.log(색깔);

function 카드세팅(가로, 세로) {
    클릭플래그 = false;
    for (var i = 0; i < 가로 * 세로; i += 1) {
        var card = document.createElement('div');
        // card.classList.add('card');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = 색깔[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        // 클로저 문제 발생
        // 클릭 이벤트 (비동기)
        // card.addEventListener('click', function () {
        //     card.classList.toggle('flipped');
        // });
        // 해결방법 : 즉시실행 함수
        (function (c) {
            card.addEventListener('click', function () {
                if (클릭플래그) {
                    c.classList.toggle('flipped');
                }
            });
        })(card);
        document.body.appendChild(card);
    }

    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function () {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });

    setTimeout(function () {
        document.querySelectorAll('.card').forEach(function (card, index) {
            card.classList.remove('flipped');
        });
        클릭플래그 = true;
    }, 5000);
}

카드세팅(가로, 세로);