const items = document.querySelectorAll('button');

for (var i = 0; i < items.length; i = i + 1) {
    // イベント付与するタイミング
    console.log(i);

    // イベントの付与：要素にイベントを紐づけてるだけ
    items[i].addEventListener('click',
        // ↓ イベント実行：ここは僕らがクリックする時（＝JSファイルを読み込み終わった後）に実行される。
        function (event) {
            console.log(event.target);
        }
    );
}
