var 바디 = document.body;

var 단어 = document.createElement('div');
단어.textContent = '류지영';
document.body.append(단어);

var 입력창 = document.createElement('input');
document.body.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
document.body.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function () { // 콜백함수, 익명함수
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
    } else {
        결과창.textContent = '땡';
    }
});

// var word = '류지영';
// while (true) {
//     var answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         word = answer;
//         alert('딩동댕');
//     } else {
//         alert('땡');
//     }
// }