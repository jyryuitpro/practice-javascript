var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');

function 결과체크() {
    // 세칸 다 채워졌나?
    var 다참 = false;
    // 가로줄 검사
    if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
        다참 = true;
    }
    // 세로줄 검사
    if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
        다참 = true;
    }
    // 대각선 검사
    // if (몇줄 - 몇칸 === 0) { // 대각선 검사 필요한 경우
    //     if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
    //         다참 = true;
    //     }
    // }
    if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
        다참 = true;
    }

    // if (Math.abs(몇줄 - 몇칸) === 2) { // 대각선 검사 필요한 경우
    //     if (칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴) {
    //         다참 = true;
    //     }
    // }
    if (칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴) {
        다참 = true;
    }

    return 다참;
}
var 비동기콜백 = function (이벤트) {
    console.log(이벤트.target); // 칸
    console.log(이벤트.target.parentNode); // 줄
    console.log(이벤트.target.parentNode.parentNode); // 테이블

    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸].textContent !== '') { // 칸이 이미 채워져 있는가?
        console.log('빈 칸아닙니다.');
    } else { // 빈 칸이면
        console.log('빈 칸입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        var 다참 = 결과체크();
        // 다 찼으면
        if (다참) {
            결과.textContent = 턴 + '님이 승리!';
            // 초기화
            턴 = 'X';
            칸들.forEach(function (줄) {
                줄.forEach(function (칸) {
                    칸.textContent = '';
                });
            });
        } else {
            if (턴 === 'X') {
                턴 = 'O';
            }
            setTimeout(function () {
                console.log('컴퓨터의 턴입니다.');
                // 빈 칸 중 하나를 고른다.
                var 후보칸 = [];
                칸들.forEach(function (줄) {
                    줄.forEach(function (칸) {
                        후보칸.push(칸);
                    });
                });
                후보칸 = 후보칸.filter(function (칸) {
                    return !칸.textContent;
                });
                var 선택칸 = 후보칸[Math.floor(Math.random() * 후보칸.length)];
                선택칸.textContent = 'O';
                // 컴퓨터가 승리했는지 체크
                var 다참 = 결과체크();
                // 다 찼으면
                if (다참) {
                    결과.textContent = 턴 + '님이 승리!';
                    // 초기화
                    턴 = 'X';
                    칸들.forEach(function (줄) {
                        줄.forEach(function (칸) {
                            칸.textContent = '';
                        });
                    });
                }
                // 턴을 나한테 넘긴다.
                턴 = 'X';
            }, 1000);
        }
    }
};

for (var i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j <= 3; j++) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log('줄들', 줄들, '칸들', 칸들);