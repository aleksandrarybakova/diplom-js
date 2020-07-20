"use strict";

// колода карт
let cards = [
    {
        name: 'six_heart',
        grade: 1
    },

    {
        name: 'six_bubi',
        grade: 1
    },

    {
        name: 'six_winnie',
        grade: 1
    },

    {
        name: 'six_cross',
        grade: 1
    },


    {
        name: 'seven_heart',
        grade: 2
    },

    {
        name: 'seven_bubi',
        grade: 2
    },

    {
        name: 'seven_winnie',
        grade: 2
    },

    {
        name: 'seven_cross',
        grade: 2
    },


    {
        name: 'eight_heart',
        grade: 3
    },

    {
        name: 'eight_bubi',
        grade: 3
    },

    {
        name: 'eight_winnie',
        grade: 3
    },

    {
        name: 'eight_cross',
        grade: 3
    },


    {
        name: 'nine_heart',
        grade: 4
    },

    {
        name: 'nine_bubi',
        grade: 4
    },

    {
        name: 'nine_winnie',
        grade: 4
    },

    {
        name: 'nine_cross',
        grade: 4
    },


    {
        name: 'ten_heart',
        grade: 5
    },

    {
        name: 'ten_bubi',
        grade: 5
    },

    {
        name: 'ten_winnie',
        grade: 5
    },

    {
        name: 'ten_cross',
        grade: 5
    },



    {
        name: 'jack_heart',
        grade: 6
    },

    {
        name: 'jack_bubi',
        grade: 6
    },

    {
        name: 'jack_winnie',
        grade: 6
    },

    {
        name: 'jack_cross',
        grade: 6
    },


    {
        name: 'queen_heart',
        grade: 7
    },

    {
        name: 'queen_bubi',
        grade: 7
    },

    {
        name: 'queen_winnie',
        grade: 7
    },

    {
        name: 'queen_cross',
        grade: 7
    },


    {
        name: 'king_heart',
        grade: 8
    },

    {
        name: 'king_bubi',
        grade: 8
    },

    {
        name: 'king_winnie',
        grade: 8
    },

    {
        name: 'king_cross',
        grade: 8
    },


    {
        name: 'ace_heart',
        grade: 9
    },

    {
        name: 'ace_bubi',
        grade: 9
    },

    {
        name: 'ace_winnie',
        grade: 9
    },

    {
        name: 'ace_cross',
        grade: 9
    },

];

let deck;
let deck2;
let deck3;  //для визуальной части колода рубашкой вверх

// игроки
let player1 = [];
let player2 = [];

let player1_cards;
let player2_cards;  //для визуальной части карты игроков рубашками вверх

// стол
let table = [];

//для визуальной части карты игроков на столе мастью вверх
let tableCard1 = document.querySelector('.player1_table');
let tableCard2 = document.querySelector('.player2_table');

//поле для игры
const body = document.querySelector('body');

//итог игры
let total;
let finalBtn;

//кнопки
const btnGiveOut = document.querySelector('.give_out');
const btnMove = document.querySelector('.move');
const btnPick = document.querySelector('.pick');

//табло с кол-вом карт у игрока
const tablo1 = document.querySelector('.info_p1');
const tablo2 = document.querySelector('.info_p2');
tablo1.textContent = player1.length;
tablo2.textContent = player2.length;

//переменные для анимации раздачи и хода
let deckGiveAnim;
let moveAnim;

//появление колоды при загрузке
window.onload = function () {
    deck = document.createElement('div');
    body.appendChild(deck);
    deck.classList.add('deck');
    deck2 = document.createElement('div');
    body.appendChild(deck2);
    deck2.classList.add('deck2');
    deck3 = document.createElement('div');
    body.appendChild(deck3);
    deck3.classList.add('deck3');
}

//события при клике на кнопки
btnGiveOut.addEventListener('click', giveOut);
function btnPickPlayer2() {
    btnPick.addEventListener('click', pickPlayer2);
    return btnPick;
}

function btnBlockPlayer2() {
    btnPick.removeEventListener('click', pickPlayer2);
    return btnPick;
}


//раздача карт
function giveOut() {

    let deckGiveAnim = anime.timeline({     //анимация раздачи
        easing: 'easeInOutExpo',
        loop: 18,
        duration: 500
    });
    deckGiveAnim.add({
        targets: '.deck',
        translateX: 765,
        translateY: -200,
        rotate: '2turn',
    })

        .add({
            targets: '.deck2',
            translateX: 765,
            translateY: 190,
            rotate: '2turn'
        });
    setTimeout(player1_cardsAdd, 500);
    setTimeout(player2_cardsAdd, 1000);
    setTimeout(giveCards, 18000);

}

function giveCards() {

    while (cards.length != 0) {
        for (let i = 0; i < 18; i++) {
            player1.push(cards[Math.floor(Math.random() * cards.length)]);// раздача карт для 1го игрока
            for (let j = 0; j < player1.length; j++) {
                for (let i = 0; i < cards.length; i++) {
                    if (player1[j] == cards[i]) {
                        cards.splice(i, 1);
                    }
                }
            }
        }

        tablo1.textContent = player1.length;

        for (let i = 0; i < 18; i++) {
            player2.push(cards[Math.floor(Math.random() * cards.length)]);// раздача карт для 2го игрока
            for (let j = 0; j < player2.length; j++) {
                for (let i = 0; i < cards.length; i++) {
                    if (player2[j] == cards[i]) {
                        cards.splice(i, 1);
                    }
                }
            }
        }

        tablo2.textContent = player2.length;
    
        if (cards.length == 0) {
            body.removeChild(deck);
            body.removeChild(deck2);
            body.removeChild(deck3);
        }
    }
    btnMove.addEventListener('click', makeAmove);
    return player1, player2;
}


//добавление визуального элемента карт рубашкой игрокам
function player1_cardsAdd() {
    player1_cards = document.createElement('div');
    body.appendChild(player1_cards);
    player1_cards.classList.add('player1_cards');
}

function player2_cardsAdd() {
    player2_cards = document.createElement('div');
    body.appendChild(player2_cards);
    player2_cards.classList.add('player2_cards');
}


// игра

// ход
function makeAmove() {
    btnPickPlayer2();
    table.unshift(player2[0]);
    player2.shift();
    table.unshift(player1[0]);
    player1.shift();

    tablo1.textContent = player1.length;
    tablo2.textContent = player2.length;

    selectSuit(table[0].name, tableCard1);
    selectSuit(table[1].name, tableCard2);    

    let moveAnim = anime.timeline({
        easing: 'easeInOutExpo',
        loop: 1,
        duration: 500,
        direction: 'reverse'
    });
    moveAnim.add({
        targets: '.player2_table',
        translateX: 292,
        translateY: 115,
        rotate: '1turn'
    })

    .add({
        targets: '.player1_table',
        translateX: 492,
        translateY: -103,
        rotate: '1turn'
    });


    if (tableCard1.classList.length > 2 || tableCard2.classList.length > 2) {    //на столе видны только верхние изображения карт
        while (tableCard1.classList.length > 2) {
            tableCard1.classList.remove(tableCard1.classList.item(1))
        };

        while (tableCard2.classList.length > 2) {
            tableCard2.classList.remove(tableCard2.classList.item(1))
        };
    }
    if (table[0].grade == 1 && table[1].grade == 9) {    //сравнение карт
        btnBlockPlayer2();
        setTimeout(pickPlayer1, 3000);
    }
    else if (table[0].grade == 9 && table[1].grade == 1) {

    }
    else if (table[0].grade == table[1].grade) {
        btnBlockPlayer2();
    }
    else if (table[0].grade > table[1].grade) {
        btnBlockPlayer2();
        setTimeout(pickPlayer1, 3000);
    };

    return table;
}

function selectSuit(cardName, tableCard){
    switch (cardName) {
        case "six_heart":
            tableCard.classList.add('six_heart')
            break;
        case 'six_bubi':
            tableCard.classList.add('six_bubi')
            break;
        case 'six_winnie':
            tableCard.classList.add('six_winnie')
            break;
        case 'six_cross':
            tableCard.classList.add('six_cross')
            break;
        case 'seven_heart':
            tableCard.classList.add('seven_heart')
            break;
        case 'seven_bubi':
            tableCard.classList.add('seven_bubi')
            break;
        case 'seven_winnie':
            tableCard.classList.add('seven_winnie')
            break;
        case 'seven_cross':
            tableCard.classList.add('seven_cross')
            break;
        case 'eight_heart':
            tableCard.classList.add('eight_heart')
            break;
        case 'eight_bubi':
            tableCard.classList.add('eight_bubi')
            break;
        case 'eight_winnie':
            tableCard.classList.add('eight_winnie')
            break;
        case 'eight_cross':
            tableCard.classList.add('eight_cross')
            break;
        case 'nine_heart':
            tableCard.classList.add('nine_heart')
            break;
        case "nine_bubi":
            tableCard.classList.add('nine_bubi')
            break;
        case 'nine_winnie':
            tableCard.classList.add('nine_winnie')
            break;
        case 'nine_cross':
            tableCard.classList.add('nine_cross')
            break;
        case 'ten_heart':
            tableCard.classList.add('ten_heart')
            break;
        case 'ten_bubi':
            tableCard.classList.add('ten_bubi')
            break;
        case 'ten_winnie':
            tableCard.classList.add('ten_winnie')
            break;
        case 'ten_cross':
            tableCard.classList.add('ten_cross')
            break;
        case 'jack_heart':
            tableCard.classList.add('jack_heart')
            break;
        case 'jack_bubi':
            tableCard.classList.add('jack_bubi')
            break;
        case 'jack_winnie':
            tableCard.classList.add('jack_winnie')
            break;
        case 'jack_cross':
            tableCard.classList.add('jack_cross')
            break;
        case 'queen_heart':
            tableCard.classList.add('queen_heart')
            break;
        case 'queen_bubi':
            tableCard.classList.add('queen_bubi')
            break;
        case 'queen_winnie':
            tableCard.classList.add('queen_winnie')
            break;
        case 'queen_cross':
            tableCard.classList.add('queen_cross')
            break;
        case 'king_heart':
            tableCard.classList.add('king_heart')
            break;
        case 'king_bubi':
            tableCard.classList.add('king_bubi')
            break;
        case 'king_winnie':
            tableCard.classList.add('king_winnie')
            break;
        case 'king_cross':
            tableCard.classList.add('king_cross')
            break;
        case 'ace_heart':
            tableCard.classList.add('ace_heart')
            break;
        case 'ace_bubi':
            tableCard.classList.add('ace_bubi')
            break;
        case 'ace_winnie':
            tableCard.classList.add('ace_winnie')
            break;
        case 'ace_cross':
            tableCard.classList.add('ace_cross')
            break;
    }
    return;
}

function pickPlayer1() {                //1й игрок забирает карты со стола
    while (table.length != 0) {
        player1.push(table[0]);
        tablo1.textContent = player1.length;
        tablo2.textContent = player2.length;
        table.shift();
        tableCard1.classList.remove(tableCard1.classList.item(1));
        tableCard2.classList.remove(tableCard2.classList.item(1));
    }

    if (player1.length == 36) {
        final();
    }
    return player1;
}

function pickPlayer2() {              //2й игрок забирает карты со стола
    while (table.length != 0) {
        player2.push(table[0]);
        tablo1.textContent = player1.length;
        tablo2.textContent = player2.length;
        table.shift();
        tableCard1.classList.remove(tableCard1.classList.item(1));
        tableCard2.classList.remove(tableCard2.classList.item(1));
    }

    if (player2.length == 36) {
        final();
    }
    return player2, table;
}


//финальная надпись итог игры
function final() {
    if (player1.length == 0 && player2.length == 36) {
        total = document.createElement('div');
        body.appendChild(total);
        total.classList.add('win');
    }

    else if (player2.length == 0 && player1.length == 36) {
        total = document.createElement('div');
        body.appendChild(total);
        total.classList.add('lose');
    }

    finalBtn = document.createElement('button');
    finalBtn.textContent = 'начать заново';
    total.appendChild(finalBtn);
    finalBtn.addEventListener('click', reboot);

    return total;
}

function reboot() {
    location.reload();
}


