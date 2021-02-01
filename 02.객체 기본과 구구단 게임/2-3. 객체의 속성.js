// 객체
//     함수 function() {}
//     배열
// 숫자
// 문자
// 불린
// null
// undefined

// 객체
var 류지영 = {
    이름: '류지영',
    키: 174,
    몸무게: 72,
}

console.log(류지영);

var 류지영 = {
    이름: '류지영',
    먹다: function 먹다() {
        console.log('냠냠');
    }
}

// 객체 = {
//     속성(프로퍼티): 값,
//     속성(메서드): 함수,
// }

console.log(류지영['이름']);
console.log(류지영['먹다']);

console.log(류지영.이름);
console.log(류지영.먹다);
console.log(류지영.먹다());

류지영.이름
류지영['이름']
'안녕하세요'.length

var 문자객체 = {
    length: 5,
    // 익명함수
    repeat: function (num) {

    }
}

네로.이름
네로['이름']

// 대괄호 안에는 변수를 쓸 수 있지만 점 뒤에는 안됩니다. 차이점!!!
var 값 = '이름'
네로.값
네로[값]