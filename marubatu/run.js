// 手番を決める　A　OR　B

// ①　ボタンが埋まっているならドロー、埋まっていないなら↓

// Aがボタンを押す

// 押されたボタンが〇になる

// 勝敗判定をする

// 勝敗がついていなければBの手番

// Bがボタンを押す

// 押されたボタンが×になる

// 勝敗判定

// 勝敗がついていなければ　①　にもどる

// 勝敗が決まっていたらメッセージウィンドウ表示
console.log(document.getElementById('item1'))
console.log(document.getElementById('item1'))

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');

let teban = false

let marubatu = ['','','','','','','','','']

item1.addEventListener('click', function(){
    console.log(1)
    if(teban) {
        item1.textContent = '〇'
        marubatu[0] = '〇'

    } else {
        item1.textContent = '×'
        marubatu[0] ='×'
    }
    console.log(marubatu)
    item1.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item2.addEventListener('click', function(){
    console.log(2)
    if(teban) {
        item2.textContent = '〇'
        marubatu[1] = '〇'
    } else {
        item2.textContent = '×'
        marubatu[1] = '×'
    }
    console.log(marubatu)
    item2.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item3.addEventListener('click', function(){
    console.log(3)
    if(teban) {
        item3.textContent = '〇'
        marubatu[2] = '〇'
    } else {
        item3.textContent = '×'
        marubatu[2] = '×'
    }
    console.log(marubatu)
    item3.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item4.addEventListener('click', function(){
    console.log(4)
    if(teban) {
        item4.textContent = '〇'
        marubatu[3] = '〇'
    } else {
        item4.textContent = '×'
        marubatu[3] = '×'
    }
    console.log(marubatu)
    item4.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item5.addEventListener('click', function(){
    console.log(5)
    if(teban) {
        item5.textContent = '〇'
        marubatu[4] = '〇'
    } else {
        item5.textContent = '×'
        marubatu[4] = '×'
    }
    console.log(marubatu)
    item5.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item6.addEventListener('click', function(){
    console.log(6)
    if(teban) {
        item6.textContent = '〇'
        marubatu[5] = '〇'
    } else {
        item6.textContent = '×'
        marubatu[5] = '×'
    }
    console.log(marubatu)
    item6.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item7.addEventListener('click', function(){
    console.log(7)
    if(teban) {
        item7.textContent = '〇'
        marubatu[6] = '〇'
    } else {
        item7.textContent = '×'
        marubatu[6] = '×'
    }
    console.log(marubatu)
    item7.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item8.addEventListener('click', function(){
    console.log(8)
    if(teban) {
        item8.textContent = '〇'
        marubatu[7] = '〇'
    } else {
        item8.textContent = '×'
        marubatu[7] = '×'
    }
    console.log(marubatu)
    item8.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});
item9.addEventListener('click', function(){
    console.log(9)
    if(teban) {
        item9.textContent = '〇'
        mrubatu[8] = '〇'
    } else {
        item9.textContent = '×'
        marubatu[8] = '×'
    }
    console.log(marubatu)
    item9.disabled = true
    if(teban) {
        teban = false
    } else {
        teban =true
    }
});

