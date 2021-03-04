var 이미지좌표 = '0';
var 가위바위보 = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

function 컴퓨터의선택(이미지좌표) {
    // 반복문
    return Object.entries(가위바위보).find(function (v) {
        console.log(v);
        return v[1] == 이미지좌표;
    })[0];
}

// 객체를 배열로 바꿔준다.(이차원 배열)
// console.log(Object.entries(가위바위보));
// 배열.find는 반복문이지만 원하는 것을 찾으면(return이 true) 멈춥니다.
// findIndex도 사용 가능
// var 찾기 = Object.entries(가위바위보).findIndex(function (v) {
//     console.log(v);
//     return v[0] == '보';
// });
// console.log(찾기);

var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(function () {
        if (이미지좌표 == 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 == 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 0;
        }
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
    }, 100);
}

인터벌메이커();

var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1
};

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(인터벌);
        setTimeout(function () {
            인터벌메이커();
        }, 1000);
        var 나의선택 = this.textContent;
        // console.log(나의선택, 컴퓨터의선택(이미지좌표));
        // 변수를 사용해서 중복되는 것을 제거할 수 있습니다.
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
        var 점수차 = 나의점수 - 컴퓨터점수;
        if (점수차 == 0) {
            console.log('비겼습니다.');
        } else if ([-1, 2].includes(점수차)) {
            // 배열.inclueds로 || 관계를 줄일 수 있습니다.
            // 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] == 1 || 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] == 2
            console.log('이겼습니다.');
        } else {
            console.log('졌습니다.');
        }
        // if (나의선택 == '가위') {
        //     if (컴퓨터의선택(이미지좌표) == '가위') {
        //         console.log('비겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '바위') {
        //         console.log('졌습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '보') {
        //         console.log('이겼습니다.');
        //     }
        // } else if (나의선택 == '바위') {
        //     if (컴퓨터의선택(이미지좌표) == '가위') {
        //         console.log('이겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '바위') {
        //         console.log('비겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '보') {
        //         console.log('졌습니다.');
        //     }
        // } else if (나의선택 == '바위') {
        //     if (컴퓨터의선택(이미지좌표) == '가위') {
        //         console.log('이겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '바위') {
        //         console.log('비겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) == '보') {
        //         console.log('졌습니다.');
        //     }
        // }
    });
});
