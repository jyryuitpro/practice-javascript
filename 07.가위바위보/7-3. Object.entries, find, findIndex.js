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

setInterval(function () {
    if (이미지좌표 == 가위바위보.바위) {
        이미지좌표 = 가위바위보.가위;
    } else if (이미지좌표 == 가위바위보.가위) {
        이미지좌표 = 가위바위보.보;
    } else {
        이미지좌표 = 0;
    }
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var 나의선택 = this.textContent;
        console.log(나의선택, 컴퓨터의선택(이미지좌표));
    });
});
