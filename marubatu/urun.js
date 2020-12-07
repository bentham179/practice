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

const items = document.querySelectorAll('button');
console.log(items);

let teban = false;
let marubatu = ['', '', '', '', '', '', '', '', ''];

for (let i = 0; i < items.length; i = i + 1) {
    const item = items[i];

    item.addEventListener('click', function(){
        console.log(i);
        if(teban) {
            item.textContent = '〇';
            marubatu[i] = '〇';

        } else {
            item.textContent = '×';
            marubatu[i] = '×';
        }

        console.log(marubatu);
        item.disabled = true;

        if(teban) {
            teban = false;
        } else {
            teban = true;
        }
    });
}
