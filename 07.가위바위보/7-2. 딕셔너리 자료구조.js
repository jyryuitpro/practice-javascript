var 컴퓨터의선택 = '0';
var 가위바위보 = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

setInterval(function () {
    if (컴퓨터의선택 == 가위바위보.바위) {
        컴퓨터의선택 = 가위바위보.가위;
    } else if (컴퓨터의선택 == 가위바위보.가위) {
        컴퓨터의선택 = 가위바위보.보;
    } else {
        컴퓨터의선택 = 0;
    }
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 컴퓨터의선택 + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var 나의선택 = this.textContent;
        console.log(나의선택, 컴퓨터의선택);
    });
});
