//「var宣言、変数piyoを定義します。値は数字100です。」をJSにしてみる。
var piyo = 100;


//「var宣言、変数ponyoを定義します。値は文字列Hello Worldです。」をJSにしてみる。
var ponyo = 'Hello World';


//「var宣言、関数taskを定義します。処理内容はコンソールに「100」を表示する、です。」をJSにしてみる。
var task = function(suuzi) {
    // console.log(suuzi);
}


//「関数taskを実行します。」をJSにしてみる。
task(5);


//number型、string型の値合計2つ以上の値を持つArrayオブジェクト（配列）を書く
var arr = [1,2,'おはよう','こんにちは'];
// console.log(arr);

//2重以上の入れ子のObjectオブジェクト（連想配列）を書く
var ben = {
    name: 'yuya',
    age: 25
};

// console.log(ben);

//hoge.piyo.hoge.piyo.hoge に 1000 という値を持つObjectオブジェクト（連想配列）を書く
var hoge = {
    piyo: {
        hoge: {
            piyo:{
                hoge:1000
            }
        }
    }
}

var addCalc = function(a, b) {
    return a + b;
}

var ben = {
    task: task,
    lp: addCalc(100, 200)
}



// 値渡し
var foo = 100;
var baz = foo;
foo = 500;


// 参照渡し
var foo = {
    name: 'foo',
    age: 20
}
var baz = foo;
foo.age = 25;


//「window」オブジェクトから「alert」を実行する（アラートダイアログが出現したらOK）
// window,alert('alert');


//h1要素を取得する
var h1 = document.querySelector('h1');

console.log(h1.textContent);


//h1要素のコンテンツを「Hello world」にする
h1.textContent = 'Hello world'


//h1要素を削除する
h1.remove();


//for文で、20回の「0」をコンソールに表示する
for (var i = 0; i < 20; i=i+1) {
    console.log(0);
}


//for文とif文を組み合わせて、10回の「0」と10回の「1」をコンソールに表示する


for (var i = 0; i <20; i=i+1) {
    if(i<10) {
        console.log(0);
    } else {
        console.log(1);
    }
}


//CSSを無効にする
var css = document.querySelector('link');
css.remove();


//全ての要素の数を調べる
var HTML = document.querySelectorAll('*');
console.log(HTML.length);


//ページ内のすべてのa要素のリンク先をコンソールに出力する（フルパス）
var aLink = document.querySelectorAll('a');
for (var i =0; i <aLink.length; i=i+1) {
    const ayouso = aLink[i];

    console.log(ayouso.href);
}


//ページ内の文字数を取得する
var bodyA = document.querySelectorAll('body > *');
var arrBody = 0;

for (var i = 0; i <bodyA.length; i=i+1) {
    console.log(bodyA[i].textContent.length);
    arrBody = arrBody + bodyA[i].textContent.length;
}

console.log(arrBody);


//ページ内のリンクを無効化する（とべなくする）
var ALink = document.querySelectorAll('a');

for (var i =0; i <ALink.length; i=i+1) {
    ALink[i].removeAttribute('href');
}



//ページ内の画像を削除する
var images = document.querySelectorAll('img');

for (var i =0; i <images.length; i=i+1) {
    images[i].removeAttribute('src');
}


//20までカウントするfor文で、数字が5になった時にループを終了する。
for (var i = 0; i <= 20; i = i + 1) {
    if(i<=5) {
        // console.log(i);
    }
}

for (var i = 0; i <= 20; i = i + 1) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}


var P = document.querySelector('p');