var 스크린 = document.querySelector('#screen');

var 상태 = {

};

// var 시작시간 = new Date();
// console.time('시간');
// var 시작시간 = performance.now();

스크린.addEventListener('click', function () {
    // var 끝시간 = new Date();
    // console.log((끝시간 - 시작시간) / 1000);
    // console.timeEnd('시간');
    // var 끝시간 = performance.now();
    // console.log((끝시간 - 시작시간) / 1000);
    var 시작시간;
    if (스크린.classList.contains('waiting')) { // 대기 상태
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';
        setTimeout(function () {
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);
    } else if (스크린.classList.contains('ready')) { // 준비 상태
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭하세요!';
    } else if (스크린.classList.contains('now')) { // 시작 상태
        var 끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms');
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요.';
    }
});