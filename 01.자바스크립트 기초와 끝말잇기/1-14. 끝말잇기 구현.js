var word = '류지영';
while (true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        word = answer;
        alert('딩동댕');
    } else {
        alert('땡');
    }
}

for (var word = '류지영'; true;) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        word = answer;
        alert('딩동댕');
    } else {
        alert('땡');
    }
}