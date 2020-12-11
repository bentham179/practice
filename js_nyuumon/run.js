// 要素の取得を変数にまとめる

// イベント付与はaddEventListenerにする

// 要素の取得をquerySelector / querySelectorAll にする

//formの使い方がよくわかっていない

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

//var ampmに直接if文を入れたい
var ampm = '';
if (hour < 12) {
    ampm = 'a.m.';
}else {
    ampm ='p.m.';
};

var output = year + '/' + (month + 1) + '/' + date + ' ' + (hour % 12) + ':' + min + ampm;
document.querySelector('.time').textContent = output;




var addZero = function(num,digit) {
    var numString = String(num);
    while(numString.length < digit) {
        numString = '0' + numString;
    }
    return numString;
};

//console.log(addZero(1,2));

var songs = [
    'song1',
    'song2',
    'song3',
    'song4',
    'song5',
    'song6',
    'song7',
    'song8',
    'song9',
    'song10',
    'song11',
    'song12'
];
var list = document.querySelector('.list');

//i++は「i=i+1」と同じ意味（？）　「i=i++」は間違い（？）
for(var i = 0; i < songs.length; i++) {
    var paragraph = document.createElement('p');
    paragraph.textContent =addZero(i + 1,2) + '.' + songs[i];
    list.appendChild(paragraph);
};

var point = function(num,digit) {
    var time = Math.pow(10,digit);
    return Math.floor(num * time) / time;
}

var countdown = function(due) {
    var now = new Date();

    var rest = due.getTime() - now.getTime();
    var sec = Math.floor(rest / 1000 % 60);
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    var days = Math.floor(rest / 1000 / 60 / 60 / 24);
    var count = [days, hours, min, sec];

    return count;
}

var goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

//console.log(countdown(goal));


var sale = document.querySelector('#timer');
var refresh = function() {
    setTimeout(recalc,1000);
}

var recalc = function(){
    
    var counter = countdown(goal);
    var time = counter[1] + '時間' + counter[2] + '分'　+ counter[3] + '秒';
    sale.textContent = time;
    refresh();
}

recalc();

