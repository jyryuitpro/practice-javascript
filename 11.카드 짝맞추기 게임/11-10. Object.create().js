var card = {
    name: '제로초',
    att: 5,
    hp: 10,
    type: '카드',
    attack: function () {
        console.log('공격!!!');
    },
    defend: function () {
        console.log('방어!!!');
    },
}

function 카드공장(name, att, hp) {
    return {
        name: name,
        att: att,
        hp: hp,
        type: '카드',
        attack: function () {

        },
        defend: function () {

        },
    }
}

var prototype = {
    type: '카드',
    attack: function () {

    },
    defend: function () {

    },
}

var card = {
    name: '류지영',
    att: 10,
    hp: 10,
}

card.__proto__ = prototype;

// __proto__ : 생략가능
card.__proto__.type;
card.type;