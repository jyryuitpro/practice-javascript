var 가로 = 4;
var 세로 = 3;

function 카드세팅(가로, 세로) {
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
                c.classList.toggle('flipped');
            })
        })(card);
        document.body.appendChild(card);
    }
}

카드세팅(가로, 세로);