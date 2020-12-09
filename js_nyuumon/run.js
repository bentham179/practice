// 要素の取得を変数にまとめる

// イベント付与はaddEventListenerにする

// 要素の取得をquerySelector / querySelectorAll にする



/*document.getElementById('form').onsubmit = function() {
    var search = document.getElementById('form').word.value;
    document.getElementById('output').textContent = search
+ 'の検索中...';
    return false;
};*/

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();


var output = year + '/' + (month + 1) + '/' + date + '/' + hour + '/' + min;
document.querySelector('.time').textContent = output;

var addZero = function(num,digit) {
    var numString = String(num);
    while(numString.length < digit) {
        numString = '0' + numString;
    }
    return numString;
};

//console.log(addZero(1,2));

var songs = ['a','b','c'];
//var list = document.querySelector('.list');

for(var i = 0; i < songs.length; i = i++) {
    var paragraph = document.createElement('p');
    paragraph.textContent =addZero(i + 1,2) + '.' + songs[i];
    document.getElementById('list').appendChild(paragraph);
};


