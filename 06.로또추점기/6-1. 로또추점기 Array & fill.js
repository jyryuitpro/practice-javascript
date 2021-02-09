var 후보군 = Array(45); // (45) [empty × 45] : empty는 반복문 불가!
var 필 = 후보군.fill();
// console.log(후보군);
console.log(필);

필.forEach(function (요소, 인덱스) {
    console.log(요소, 인덱스 + 1);
    // 필[인덱스] = 인덱스 + 1;
})