// 브라우저
window
// 페이지(탭)
window.document

var newWindow = window.open();

alert();
window.alert();

var 이름 = '류지영';
window.이름;

function 함수(반복횟수) {
    console.log('*'.repeat(반복횟수));
}

함수(5);
함수(10);

function 기억하세요() {
    var 몸무게 = 78;
}

기억하세요();
// 함수안에 변수는 window에 등록되지 않는다.
window.몸무게;