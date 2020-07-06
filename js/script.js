// 'use strict'

// колода карт
let cards = [
    {name: 'six_heart',
    grade: 1},

    {name: 'six_bubi',
    grade: 1},

    {name: 'six_winnie',
    grade: 1},

    {name: 'six_cross',
    grade: 1},

    
    {name: 'seven_heart',
    grade: 2},

    {name: 'seven_bubi',
    grade: 2},

    {name: 'seven_winnie',
    grade: 2},

    {name: 'seven_cross',
    grade: 2},

        
    {name: 'eight_heart',
    grade: 3},

    {name: 'eight_bubi',
    grade: 3},

    {name: 'eight_winnie',
    grade: 3},

    {name: 'eight_cross',
    grade: 3},
      

    {name: 'nine_heart',
    grade: 4},
    
    {name: 'nine_bubi',
    grade: 4},

    {name: 'nine_winnie',
    grade: 4},

    {name: 'nine_cross',
    grade: 4},

    
    {name: 'ten_heart',
    grade: 5},

    {name: 'ten_bubi',
    grade: 5},

    {name: 'ten_winnie',
    grade: 5},

    {name: 'ten_cross',
    grade: 5},
    
    

    {name: 'jack_heart',
    grade: 6},

    {name: 'jack_bubi',
    grade: 6},

    {name: 'jack_winnie',
    grade: 6},

    {name: 'jack_cross',
    grade: 6},

        
    {name: 'queen_heart',
    grade: 7},

    {name: 'queen_bubi',
    grade: 7},

    {name: 'queen_winnie',
    grade: 7},

    {name: 'queen_cross',
    grade: 7},
        
        
    {name: 'king_heart',
    grade: 8},

    {name: 'king_bubi',
    grade: 8},

    {name: 'king_winnie',
    grade: 8},

    {name: 'king_cross',
    grade: 8},
            
       
    {name: 'ace_heart',
    grade: 9},

    {name: 'ace_bubi',
    grade: 9},

    {name: 'ace_winnie',
    grade: 9},

    {name: 'ace_cross',
    grade: 9},    
 
];

let deck;  //для визуальной части колода рубашкой вверх

// игроки
let player1 = [];
let player2 = [];

let player1_cards;
let player2_cards;  //для визуальной части 

// стол
let table = [];

let tableCard1 = document.querySelector('.player1_table');
let tableCard2 = document.querySelector('.player2_table');;  //для визуальной части 

//поле для игры
let body = document.querySelector('body');

//итог игры
let total;


//кнопки
let btnGiveOut = document.querySelector('.give_out');
let btnMove = document.querySelector('.move');
let btnPick = document.querySelector('.pick');
let btnGive = document.querySelector('.give');


//табло с кол-вом карт у игрока
let tablo1 = document.querySelector('.info_p1');
let tablo2 = document.querySelector('.info_p2');
tablo1.textContent = player1.length;
tablo2.textContent = player2.length;


window.onload = function() {
    deck = document.createElement('div');
    body.appendChild(deck);
    deck.classList.add('deck');
}




btnGiveOut.addEventListener('click', giveOut);
btnMove.addEventListener('click', makeAmove);
btnPick.addEventListener('click', pickPlayer2);
btnGive.addEventListener('click', pickPlayer1);



function giveOut (){
    while (cards.length !=0){
        for (i = 0; i < 18; i++) {
            player1.push(cards[Math.floor(Math.random()*cards.length)]);// раздача карт для 1го игрока
            for (j = 0; j < player1.length; j++){
                for ( let i = 0; i < cards.length; i++) {
                    if (player1[j] == cards[i]){
                        cards.splice(i,1);
                    }
                }
            } 
        }

        player1_cards = document.createElement ('div');
        body.appendChild(player1_cards);
        player1_cards.classList.add('player1_cards');
        tablo1.textContent = player1.length;

        for (i = 0; i < 18; i++) {
            player2.push(cards[Math.floor(Math.random()*cards.length)]);// раздача карт для 2го игрока
            for (j = 0; j < player2.length; j++){
                for ( let i = 0; i < cards.length; i++) {
                    if (player2[j] == cards[i]){
                        cards.splice(i,1);
                    }
                }
            } 
        }

        player2_cards = document.createElement ('div');
        body.appendChild(player2_cards);
        player2_cards.classList.add('player2_cards');
        tablo2.textContent = player2.length;
        
        if (cards.length == 0) {
            body.removeChild(deck);
        }
    }
}



// игра

// ход
function makeAmove () {
    table.unshift(player1[0]);
    player1.shift();
    table.unshift(player2[0]);
    player2.shift();
    

    tablo1.textContent = player1.length;
    tablo2.textContent = player2.length;

    switch (table[0].name){
        case "six_heart":
            tableCard1.classList.add ('six_heart')
            break;
        case 'six_bubi':
            tableCard1.classList.add ('six_bubi')
            break;
        case 'six_winnie':
            tableCard1.classList.add ('six_winnie')
            break;
        case 'six_cross':
            tableCard1.classList.add ('six_cross')
            break;
        case 'seven_heart':
            tableCard1.classList.add ('seven_heart')
            break;
        case 'seven_bubi':
            tableCard1.classList.add ('seven_bubi')
            break;
        case 'seven_winnie':
            tableCard1.classList.add ('seven_winnie')
            break;
        case 'seven_cross':
            tableCard1.classList.add ('seven_cross')
            break;
        case 'eight_heart':
            tableCard1.classList.add ('eight_heart')
            break;
        case 'eight_bubi':
            tableCard1.classList.add ('eight_bubi')
            break;
        case 'eight_winnie':
            tableCard1.classList.add ('eight_winnie')
            break;
        case 'eight_cross':
            tableCard1.classList.add ('eight_cross')
            break;
        case 'nine_heart':
            tableCard1.classList.add ('nine_heart')
            break;
        case "nine_bubi":
            tableCard1.classList.add ('nine_bubi')
            break;
        case 'nine_winnie':
            tableCard1.classList.add ('nine_winnie')
            break;
        case 'nine_cross':
            tableCard1.classList.add ('nine_cross')
            break;
        case 'ten_heart':
            tableCard1.classList.add ('ten_heart')
            break;
        case 'ten_bubi':
            tableCard1.classList.add ('ten_bubi')
            break;
        case 'ten_winnie':
            tableCard1.classList.add ('ten_winnie')
            break;
        case 'ten_cross':
            tableCard1.classList.add ('ten_cross')
            break;
        case 'jack_heart':
            tableCard1.classList.add ('jack_heart')
            break;
        case 'jack_bubi':
            tableCard1.classList.add ('jack_bubi')
            break;
        case 'jack_winnie':
            tableCard1.classList.add ('jack_winnie')
            break;
        case 'jack_cross':
            tableCard1.classList.add ('jack_cross')
            break;
        case 'queen_heart':
            tableCard1.classList.add ('queen_heart')
            break;
        case 'queen_bubi':
            tableCard1.classList.add ('queen_bubi')
            break;
        case 'queen_winnie':
            tableCard1.classList.add ('queen_winnie')
            break;
        case 'queen_cross':
            tableCard1.classList.add ('queen_cross')
            break;
        case 'king_heart':
            tableCard1.classList.add ('king_heart')
            break;
        case 'king_bubi':
            tableCard1.classList.add ('king_bubi')
            break;
        case 'king_winnie':
            tableCard1.classList.add ('king_winnie')
            break;
        case 'king_cross':
            tableCard1.classList.add ('king_cross')
            break;
        case 'ace_heart':
            tableCard1.classList.add ('ace_heart')
            break;
        case 'ace_bubi':
            tableCard1.classList.add ('ace_bubi')
            break;
        case 'ace_winnie':
            tableCard1.classList.add ('ace_winnie')
            break;
        case 'ace_cross':
            tableCard1.classList.add ('ace_cross')
            break;
    }
   

    switch (table[1].name){
        case "six_heart":
            tableCard2.classList.add ('six_heart')
            break;
        case 'six_bubi':
            tableCard2.classList.add ('six_bubi')
            break;
        case 'six_winnie':
            tableCard2.classList.add ('six_winnie')
            break;
        case 'six_cross':
            tableCard2.classList.add ('six_cross')
            break;
        case 'seven_heart':
            tableCard2.classList.add ('seven_heart')
            break;
        case 'seven_bubi':
            tableCard2.classList.add ('seven_bubi')
            break;
        case 'seven_winnie':
            tableCard2.classList.add ('seven_winnie')
            break;
        case 'seven_cross':
            tableCard2.classList.add ('seven_cross')
            break;
        case 'eight_heart':
            tableCard2.classList.add ('eight_heart')
            break;
        case 'eight_bubi':
            tableCard2.classList.add ('eight_bubi')
            break;
        case 'eight_winnie':
            tableCard2.classList.add ('eight_winnie')
            break;
        case 'eight_cross':
            tableCard2.classList.add ('eight_cross')
            break;
        case 'nine_heart':
            tableCard2.classList.add ('nine_heart')
            break;
        case "nine_bubi":
            tableCard2.classList.add ('nine_bubi')
            break;
        case 'nine_winnie':
            tableCard2.classList.add ('nine_winnie')
            break;
        case 'nine_cross':
            tableCard2.classList.add ('nine_cross')
            break;
        case 'ten_heart':
            tableCard2.classList.add ('ten_heart')
            break;
        case 'ten_bubi':
            tableCard2.classList.add ('ten_bubi')
            break;
        case 'ten_winnie':
            tableCard2.classList.add ('ten_winnie')
            break;
        case 'ten_cross':
            tableCard2.classList.add ('ten_cross')
            break;
        case 'jack_heart':
            tableCard2.classList.add ('jack_heart')
            break;
        case 'jack_bubi':
            tableCard2.classList.add ('jack_bubi')
            break;
        case 'jack_winnie':
            tableCard2.classList.add ('jack_winnie')
            break;
        case 'jack_cross':
            tableCard2.classList.add ('jack_cross')
            break;
        case 'queen_heart':
            tableCard2.classList.add ('queen_heart')
            break;
        case 'queen_bubi':
            tableCard2.classList.add ('queen_bubi')
            break;
        case 'queen_winnie':
            tableCard2.classList.add ('queen_winnie')
            break;
        case 'queen_cross':
            tableCard2.classList.add ('queen_cross')
            break;
        case 'king_heart':
            tableCard2.classList.add ('king_heart')
            break;
        case 'king_bubi':
            tableCard2.classList.add ('king_bubi')
            break;
        case 'king_winnie':
            tableCard2.classList.add ('king_winnie')
            break;
        case 'king_cross':
            tableCard2.classList.add ('king_cross')
            break;
        case 'ace_heart':
            tableCard2.classList.add ('ace_heart')
            break;
        case 'ace_bubi':
            tableCard2.classList.add ('ace_bubi')
            break;
        case 'ace_winnie':
            tableCard2.classList.add ('ace_winnie')
            break;
        case 'ace_cross':
            tableCard2.classList.add ('ace_cross')
            break;
    }
    return table;
}

function pickPlayer1 () {
    while (table.length !=0){    
        player1.push(table[0]);
        tablo1.textContent = player1.length;
        tablo2.textContent = player2.length;
    
        switch (table[0].name){
            case "six_heart":
                tableCard1.classList.remove ('six_heart');
            case 'six_bubi':
                tableCard1.classList.remove ('six_bubi');
            case 'six_winnie':
                tableCard1.classList.remove ('six_winnie');
            case 'six_cross':
                tableCard1.classList.remove ('six_cross');
            case 'seven_heart':
                tableCard1.classList.remove ('seven_heart');
            case 'seven_bubi':
                tableCard1.classList.remove ('seven_bubi');
            case 'seven_winnie':
                tableCard1.classList.remove ('seven_winnie');
            case 'seven_cross':
                tableCard1.classList.remove ('seven_cross');
            case 'eight_heart':
                tableCard1.classList.remove ('eight_heart');
            case 'eight_bubi':
                tableCard1.classList.remove ('eight_bubi');
            case 'eight_winnie':
                tableCard1.classList.remove ('eight_winnie');
            case 'eight_cross':
                tableCard1.classList.remove ('eight_cross');
            case 'nine_heart':
                tableCard1.classList.remove ('nine_heart');
            case "nine_bubi":
                tableCard1.classList.remove ('nine_bubi');
            case 'nine_winnie':
                tableCard1.classList.remove ('nine_winnie');
            case 'nine_cross':
                tableCard1.classList.remove ('nine_cross');
            case 'ten_heart':
                tableCard1.classList.remove ('ten_heart');
            case 'ten_bubi':
                tableCard1.classList.remove ('ten_bubi');
            case 'ten_winnie':
                tableCard1.classList.remove ('ten_winnie');
            case 'ten_cross':
                tableCard1.classList.remove ('ten_cross');
            case 'jack_heart':
                tableCard1.classList.remove ('jack_heart');
            case 'jack_bubi':
                tableCard1.classList.remove ('jack_bubi');
            case 'jack_winnie':
                tableCard1.classList.remove ('jack_winnie');
            case 'jack_cross':
                tableCard1.classList.remove ('jack_cross');
            case 'queen_heart':
                tableCard1.classList.remove ('queen_heart');
            case 'queen_bubi':
                tableCard1.classList.remove ('queen_bubi');
            case 'queen_winnie':
                tableCard1.classList.remove ('queen_winnie');
            case 'queen_cross':
                tableCard1.classList.remove ('queen_cross');
            case 'king_heart':
                tableCard1.classList.remove ('king_heart');
            case 'king_bubi':
                tableCard1.classList.remove ('king_bubi');
            case 'king_winnie':
                tableCard1.classList.remove ('king_winnie');
            case 'king_cross':
                tableCard1.classList.remove ('king_cross');
            case 'ace_heart':
                tableCard1.classList.remove ('ace_heart');
            case 'ace_bubi':
                tableCard1.classList.remove ('ace_bubi');
            case 'ace_winnie':
                tableCard1.classList.remove ('ace_winnie');
            case 'ace_cross':
                tableCard1.classList.remove ('ace_cross');
        }
        table.shift();

        switch (table[0].name){
            case "six_heart":
                tableCard2.classList.remove ('six_heart');
            case 'six_bubi':
                tableCard2.classList.remove ('six_bubi');
            case 'six_winnie':
                tableCard2.classList.remove ('six_winnie');
            case 'six_cross':
                tableCard2.classList.remove ('six_cross');
            case 'seven_heart':
                tableCard2.classList.remove ('seven_heart');
            case 'seven_bubi':
                tableCard2.classList.remove ('seven_bubi');
            case 'seven_winnie':
                tableCard2.classList.remove ('seven_winnie');
            case 'seven_cross':
                tableCard2.classList.remove ('seven_cross');
            case 'eight_heart':
                tableCard2.classList.remove ('eight_heart');
            case 'eight_bubi':
                tableCard2.classList.remove ('eight_bubi');
            case 'eight_winnie':
                tableCard2.classList.remove ('eight_winnie');
            case 'eight_cross':
                tableCard2.classList.remove ('eight_cross');
            case 'nine_heart':
                tableCard2.classList.remove ('nine_heart');
            case "nine_bubi":
                tableCard2.classList.remove ('nine_bubi');
            case 'nine_winnie':
                tableCard2.classList.remove ('nine_winnie');
            case 'nine_cross':
                tableCard2.classList.remove ('nine_cross');
            case 'ten_heart':
                tableCard2.classList.remove ('ten_heart');
            case 'ten_bubi':
                tableCard2.classList.remove ('ten_bubi');
            case 'ten_winnie':
                tableCard2.classList.remove ('ten_winnie');
            case 'ten_cross':
                tableCard2.classList.remove ('ten_cross');
            case 'jack_heart':
                tableCard2.classList.remove ('jack_heart');
            case 'jack_bubi':
                tableCard2.classList.remove ('jack_bubi');
            case 'jack_winnie':
                tableCard2.classList.remove ('jack_winnie');
            case 'jack_cross':
                tableCard2.classList.remove ('jack_cross');
            case 'queen_heart':
                tableCard2.classList.remove ('queen_heart');
            case 'queen_bubi':
                tableCard2.classList.remove ('queen_bubi');
            case 'queen_winnie':
                tableCard2.classList.remove ('queen_winnie');
            case 'queen_cross':
                tableCard2.classList.remove ('queen_cross');
            case 'king_heart':
                tableCard2.classList.remove ('king_heart');
            case 'king_bubi':
                tableCard2.classList.remove ('king_bubi');
            case 'king_winnie':
                tableCard2.classList.remove ('king_winnie');
            case 'king_cross':
                tableCard2.classList.remove ('king_cross');
            case 'ace_heart':
                tableCard2.classList.remove ('ace_heart');
            case 'ace_bubi':
                tableCard2.classList.remove ('ace_bubi');
            case 'ace_winnie':
                tableCard2.classList.remove ('ace_winnie');
            case 'ace_cross':
                tableCard2.classList.remove ('ace_cross');
        }
        
    }
        
        return player1, table;
}

function pickPlayer2 () {
    while (table.length !=0){
        player2.push(table[0]);
        tablo1.textContent = player1.length;
        tablo2.textContent = player2.length;
        switch (table[0].name){
            case "six_heart":
                tableCard1.classList.remove ('six_heart')
                break;
            case 'six_bubi':
                tableCard1.classList.remove ('six_bubi')
                break;
            case 'six_winnie':
                tableCard1.classList.remove ('six_winnie')
                break;
            case 'six_cross':
                tableCard1.classList.remove ('six_cross')
                break;
            case 'seven_heart':
                tableCard1.classList.remove ('seven_heart')
                break;
            case 'seven_bubi':
                tableCard1.classList.remove ('seven_bubi')
                break;
            case 'seven_winnie':
                tableCard1.classList.remove ('seven_winnie')
                break;
            case 'seven_cross':
                tableCard1.classList.remove ('seven_cross')
                break;
            case 'eight_heart':
                tableCard1.classList.remove ('eight_heart')
                break;
            case 'eight_bubi':
                tableCard1.classList.remove ('eight_bubi')
                break;
            case 'eight_winnie':
                tableCard1.classList.remove ('eight_winnie')
                break;
            case 'eight_cross':
                tableCard1.classList.remove ('eight_cross')
                break;
            case 'nine_heart':
                tableCard1.classList.remove ('nine_heart')
                break;
            case "nine_bubi":
                tableCard1.classList.remove ('nine_bubi')
                break;
            case 'nine_winnie':
                tableCard1.classList.remove ('nine_winnie')
                break;
            case 'nine_cross':
                tableCard1.classList.remove ('nine_cross')
                break;
            case 'ten_heart':
                tableCard1.classList.remove ('ten_heart')
                break;
            case 'ten_bubi':
                tableCard1.classList.remove ('ten_bubi')
                break;
            case 'ten_winnie':
                tableCard1.classList.remove ('ten_winnie')
                break;
            case 'ten_cross':
                tableCard1.classList.remove ('ten_cross')
                break;
            case 'jack_heart':
                tableCard1.classList.remove ('jack_heart')
                break;
            case 'jack_bubi':
                tableCard1.classList.remove ('jack_bubi')
                break;
            case 'jack_winnie':
                tableCard1.classList.remove ('jack_winnie')
                break;
            case 'jack_cross':
                tableCard1.classList.remove ('jack_cross')
                break;
            case 'queen_heart':
                tableCard1.classList.remove ('queen_heart')
                break;
            case 'queen_bubi':
                tableCard1.classList.remove ('queen_bubi')
                break;
            case 'queen_winnie':
                tableCard1.classList.remove ('queen_winnie')
                break;
            case 'queen_cross':
                tableCard1.classList.remove ('queen_cross')
                break;
            case 'king_heart':
                tableCard1.classList.remove ('king_heart')
                break;
            case 'king_bubi':
                tableCard1.classList.remove ('king_bubi')
                break;
            case 'king_winnie':
                tableCard1.classList.remove ('king_winnie')
                break;
            case 'king_cross':
                tableCard1.classList.remove ('king_cross')
                break;
            case 'ace_heart':
                tableCard1.classList.remove ('ace_heart')
                break;
            case 'ace_bubi':
                tableCard1.classList.remove ('ace_bubi')
                break;
            case 'ace_winnie':
                tableCard1.classList.remove ('ace_winnie')
                break;
            case 'ace_cross':
                tableCard1.classList.remove ('ace_cross')
                break;
        }
        table.shift();

        switch (table[0].name){
            case "six_heart":
                tableCard2.classList.remove ('six_heart')
                break;
            case 'six_bubi':
                tableCard2.classList.remove ('six_bubi')
                break;
            case 'six_winnie':
                tableCard2.classList.remove ('six_winnie')
                break;
            case 'six_cross':
                tableCard2.classList.remove ('six_cross')
                break;
            case 'seven_heart':
                tableCard2.classList.remove ('seven_heart')
                break;
            case 'seven_bubi':
                tableCard2.classList.remove ('seven_bubi')
                break;
            case 'seven_winnie':
                tableCard2.classList.remove ('seven_winnie')
                break;
            case 'seven_cross':
                tableCard2.classList.remove ('seven_cross')
                break;
            case 'eight_heart':
                tableCard2.classList.remove ('eight_heart')
                break;
            case 'eight_bubi':
                tableCard2.classList.remove ('eight_bubi')
                break;
            case 'eight_winnie':
                tableCard2.classList.remove ('eight_winnie')
                break;
            case 'eight_cross':
                tableCard2.classList.remove ('eight_cross')
                break;
            case 'nine_heart':
                tableCard2.classList.remove ('nine_heart')
                break;
            case "nine_bubi":
                tableCard2.classList.remove ('nine_bubi')
                break;
            case 'nine_winnie':
                tableCard2.classList.remove ('nine_winnie')
                break;
            case 'nine_cross':
                tableCard2.classList.remove ('nine_cross')
                break;
            case 'ten_heart':
                tableCard2.classList.remove ('ten_heart')
                break;
            case 'ten_bubi':
                tableCard2.classList.remove ('ten_bubi')
                break;
            case 'ten_winnie':
                tableCard2.classList.remove ('ten_winnie')
                break;
            case 'ten_cross':
                tableCard2.classList.remove ('ten_cross')
                break;
            case 'jack_heart':
                tableCard2.classList.remove ('jack_heart')
                break;
            case 'jack_bubi':
                tableCard2.classList.remove ('jack_bubi')
                break;
            case 'jack_winnie':
                tableCard2.classList.remove ('jack_winnie')
                break;
            case 'jack_cross':
                tableCard2.classList.remove ('jack_cross')
                break;
            case 'queen_heart':
                tableCard2.classList.remove ('queen_heart')
                break;
            case 'queen_bubi':
                tableCard2.classList.remove ('queen_bubi')
                break;
            case 'queen_winnie':
                tableCard2.classList.remove ('queen_winnie')
                break;
            case 'queen_cross':
                tableCard2.classList.remove ('queen_cross')
                break;
            case 'king_heart':
                tableCard2.classList.remove ('king_heart')
                break;
            case 'king_bubi':
                tableCard2.classList.remove ('king_bubi')
                break;
            case 'king_winnie':
                tableCard2.classList.remove ('king_winnie')
                break;
            case 'king_cross':
                tableCard2.classList.remove ('king_cross')
                break;
            case 'ace_heart':
                tableCard2.classList.remove ('ace_heart')
                break;
            case 'ace_bubi':
                tableCard2.classList.remove ('ace_bubi')
                break;
            case 'ace_winnie':
                tableCard2.classList.remove ('ace_winnie')
                break;
            case 'ace_cross':
                tableCard2.classList.remove ('ace_cross')
                break;
        }
        
    }
        
        return player2, table;
}

while(player1.length !=0 || player2.length !=0) {
    makeAmove();

    if (table[0].grade == 1 && table[1].grade == 9){
        pickPlayer2 ();
    }

    else if (table[0].grade == 9 && table[1].grade == 1){
        pickPlayer1 ();
    }
    
    else if (table[0].grade > table[1].grade){
        pickPlayer2 ();
    }
    else if (table[0].grade < table[1].grade){
        pickPlayer1 ();
    }
    else if(table[0].grade == table[1].grade){
        switch (table[0].name){
            case "six_heart":
                tableCard1.classList.remove ('six_heart')
                break;
            case 'six_bubi':
                tableCard1.classList.remove ('six_bubi')
                break;
            case 'six_winnie':
                tableCard1.classList.remove ('six_winnie')
                break;
            case 'six_cross':
                tableCard1.classList.remove ('six_cross')
                break;
            case 'seven_heart':
                tableCard1.classList.remove ('seven_heart')
                break;
            case 'seven_bubi':
                tableCard1.classList.remove ('seven_bubi')
                break;
            case 'seven_winnie':
                tableCard1.classList.remove ('seven_winnie')
                break;
            case 'seven_cross':
                tableCard1.classList.remove ('seven_cross')
                break;
            case 'eight_heart':
                tableCard1.classList.remove ('eight_heart')
                break;
            case 'eight_bubi':
                tableCard1.classList.remove ('eight_bubi')
                break;
            case 'eight_winnie':
                tableCard1.classList.remove ('eight_winnie')
                break;
            case 'eight_cross':
                tableCard1.classList.remove ('eight_cross')
                break;
            case 'nine_heart':
                tableCard1.classList.remove ('nine_heart')
                break;
            case "nine_bubi":
                tableCard1.classList.remove ('nine_bubi')
                break;
            case 'nine_winnie':
                tableCard1.classList.remove ('nine_winnie')
                break;
            case 'nine_cross':
                tableCard1.classList.remove ('nine_cross')
                break;
            case 'ten_heart':
                tableCard1.classList.remove ('ten_heart')
                break;
            case 'ten_bubi':
                tableCard1.classList.remove ('ten_bubi')
                break;
            case 'ten_winnie':
                tableCard1.classList.remove ('ten_winnie')
                break;
            case 'ten_cross':
                tableCard1.classList.remove ('ten_cross')
                break;
            case 'jack_heart':
                tableCard1.classList.remove ('jack_heart')
                break;
            case 'jack_bubi':
                tableCard1.classList.remove ('jack_bubi')
                break;
            case 'jack_winnie':
                tableCard1.classList.remove ('jack_winnie')
                break;
            case 'jack_cross':
                tableCard1.classList.remove ('jack_cross')
                break;
            case 'queen_heart':
                tableCard1.classList.remove ('queen_heart')
                break;
            case 'queen_bubi':
                tableCard1.classList.remove ('queen_bubi')
                break;
            case 'queen_winnie':
                tableCard1.classList.remove ('queen_winnie')
                break;
            case 'queen_cross':
                tableCard1.classList.remove ('queen_cross')
                break;
            case 'king_heart':
                tableCard1.classList.remove ('king_heart')
                break;
            case 'king_bubi':
                tableCard1.classList.remove ('king_bubi')
                break;
            case 'king_winnie':
                tableCard1.classList.remove ('king_winnie')
                break;
            case 'king_cross':
                tableCard1.classList.remove ('king_cross')
                break;
            case 'ace_heart':
                tableCard1.classList.remove ('ace_heart')
                break;
            case 'ace_bubi':
                tableCard1.classList.remove ('ace_bubi')
                break;
            case 'ace_winnie':
                tableCard1.classList.remove ('ace_winnie')
                break;
            case 'ace_cross':
                tableCard1.classList.remove ('ace_cross')
                break;
        }

        switch (table[1].name){
            case "six_heart":
                tableCard2.classList.remove ('six_heart')
                break;
            case 'six_bubi':
                tableCard2.classList.remove ('six_bubi')
                break;
            case 'six_winnie':
                tableCard2.classList.remove ('six_winnie')
                break;
            case 'six_cross':
                tableCard2.classList.remove ('six_cross')
                break;
            case 'seven_heart':
                tableCard2.classList.remove ('seven_heart')
                break;
            case 'seven_bubi':
                tableCard2.classList.remove ('seven_bubi')
                break;
            case 'seven_winnie':
                tableCard2.classList.remove ('seven_winnie')
                break;
            case 'seven_cross':
                tableCard2.classList.remove ('seven_cross')
                break;
            case 'eight_heart':
                tableCard2.classList.remove ('eight_heart')
                break;
            case 'eight_bubi':
                tableCard2.classList.remove ('eight_bubi')
                break;
            case 'eight_winnie':
                tableCard2.classList.remove ('eight_winnie')
                break;
            case 'eight_cross':
                tableCard2.classList.remove ('eight_cross')
                break;
            case 'nine_heart':
                tableCard2.classList.remove ('nine_heart')
                break;
            case "nine_bubi":
                tableCard2.classList.remove ('nine_bubi')
                break;
            case 'nine_winnie':
                tableCard2.classList.remove ('nine_winnie')
                break;
            case 'nine_cross':
                tableCard2.classList.remove ('nine_cross')
                break;
            case 'ten_heart':
                tableCard2.classList.remove ('ten_heart')
                break;
            case 'ten_bubi':
                tableCard2.classList.remove ('ten_bubi')
                break;
            case 'ten_winnie':
                tableCard2.classList.remove ('ten_winnie')
                break;
            case 'ten_cross':
                tableCard2.classList.remove ('ten_cross')
                break;
            case 'jack_heart':
                tableCard2.classList.remove ('jack_heart')
                break;
            case 'jack_bubi':
                tableCard2.classList.remove ('jack_bubi')
                break;
            case 'jack_winnie':
                tableCard2.classList.remove ('jack_winnie')
                break;
            case 'jack_cross':
                tableCard2.classList.remove ('jack_cross')
                break;
            case 'queen_heart':
                tableCard2.classList.remove ('queen_heart')
                break;
            case 'queen_bubi':
                tableCard2.classList.remove ('queen_bubi')
                break;
            case 'queen_winnie':
                tableCard2.classList.remove ('queen_winnie')
                break;
            case 'queen_cross':
                tableCard2.classList.remove ('queen_cross')
                break;
            case 'king_heart':
                tableCard2.classList.remove ('king_heart')
                break;
            case 'king_bubi':
                tableCard2.classList.remove ('king_bubi')
                break;
            case 'king_winnie':
                tableCard2.classList.remove ('king_winnie')
                break;
            case 'king_cross':
                tableCard2.classList.remove ('king_cross')
                break;
            case 'ace_heart':
                tableCard2.classList.remove ('ace_heart')
                break;
            case 'ace_bubi':
                tableCard2.classList.remove ('ace_bubi')
                break;
            case 'ace_winnie':
                tableCard2.classList.remove ('ace_winnie')
                break;
            case 'ace_cross':
                tableCard2.classList.remove ('ace_cross')
                break;
        }
        makeAmove();
    }
}

if (player1.length == 0 && player2.length == 36){
    total = document.createElement('div');
    body.appendChild(total);
    deck.classList.add('win');
}

else if (player2.length == 0 && player1.length == 36){
    total = document.createElement('div');
    body.appendChild(total);
    deck.classList.add('lose');
}

