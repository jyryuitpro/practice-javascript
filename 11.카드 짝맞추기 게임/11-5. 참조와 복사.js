var 가로 = 4;
var 세로 = 3;
// 참조와 복사
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
// 색깔들.slice() : 배열의 참조관계를 끊는 방법
// var 색깔후보 = 색깔들.slice();
var 색깔후보 = JSON.parse(JSON.stringify(색깔들));
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간;

function 셔플() {
    // Math.random() : 0 이상 1 미만의 부동소숫점 의사 난수
    for (var i = 0; 색깔후보.length > 0; i += 1) {
        색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
    }
}

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
                if (클릭플래그 && !완성카드.includes(c)) {
                    c.classList.toggle('flipped');
                    클릭카드.push(c);
                    console.log(클릭카드);
                    if (클릭카드.length === 2) {
                        if (클릭카드[0].querySelector('.card-back').style.backgroundColor === 클릭카드[1].querySelector('.card-back').style.backgroundColor) {
                            완성카드.push(클릭카드[0]);
                            완성카드.push(클릭카드[1]);
                            클릭카드 = [];
                            if (완성카드.length === 12) {
                                var 끝시간 = new Date();
                                alert('축하합니다! 성공!' + (끝시간 - 시작시간) / 1000 + '초 걸렸습니다.');
                                document.querySelector('#wrapper').innerHTML = '';
                                // 색깔후보 = 색깔들.slice();
                                색깔후보 = JSON.parse(JSON.stringify(색깔들));
                                색깔 = [];
                                완성카드 = [];
                                시작시간 = null;
                                셔플();
                                카드세팅(가로, 세로);
                            }
                        } else { // 두 카드의 색깔이 다르면
                            클릭플래그 = false;
                            // 비동기
                            setTimeout(function () {
                                클릭카드[0].classList.remove('flipped');
                                클릭카드[1].classList.remove('flipped');
                                클릭플래그 = true;
                                클릭카드 = [];
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
        document.querySelector('#wrapper').appendChild(card);
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
        시작시간 = new Date();
    }, 5000);
}

셔플();
카드세팅(가로, 세로);