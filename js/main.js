'use strict';

//   <ul id="ul__box">
//         <!-- 関数を使用 -->
//             <li id="box1">
//                 <div id="light1"></div>
//                 <button id="switch1">スイッチ１</button>
//             </li>

//             <!-- 関数を使わない -->
//             <li id="box2">
//                 <div id="light2"></div>
//                 <button id="switch2">スイッチ２</button>
//             </li>
//         </ul>


const box1 = document.getElementById('box1');
const light1 = document.getElementById('light1');
const switch1 = document.getElementById('switch1');

const box2 = document.getElementById('box2');
const light2 = document.getElementById('light2');
const switch2 = document.getElementById('switch2');

const box3 = document.getElementById('box3');
const light3 = document.getElementById('light3');
const switch3 = document.getElementById('switch3');

// 関数を使用
// ボタンを押して、実行すると「真・偽を判断して」処理する
let LightOn1 = true;
function isLightOn1 (){
    if(LightOn1 === true){
        LightOn1 = false;
        light1.style.backgroundColor = 'rgb(46, 45, 45)';
        console.log('1の部屋の電気が付いていたから、消したよ！');
    }else{
        LightOn1 = true;
        light1.style.backgroundColor = 'rgb(255, 255, 142)';
        console.log('1の部屋の電気が消えていたから、つけたよ！');
    }
}

switch1.addEventListener('click',()=> {
        isLightOn1 ();
});


// 関数を使わない
let LightOn2 = true;
switch2.addEventListener('click',()=> {
if(LightOn2 === true){
    LightOn2 = false;
    light2.style.backgroundColor = 'rgb(46, 45, 45)';
    console.log('2の部屋の電気が付いていたから、消したよ！');
}else{
    LightOn2 = true;
    light2.style.backgroundColor = 'rgb(255, 255, 142)';
    console.log('2の部屋の電気が消えていたから、つけたよ！');
}
});


// 代入を一つの行で管理する
let LightOn3 = false;
switch3.addEventListener('click',()=>{
    LightOn3 = !LightOn3;    // クリックする度に、切り替えされる
    if(LightOn3){   // ＞＞trueの処理
        light3.style.backgroundColor = 'rgb(46, 45, 45)';
        console.log('3の部屋の電気が付いていたから、消したよ！');
    }else{         // ＞＞falseの処理
        light3.style.backgroundColor = 'rgb(255, 255, 142)';
        console.log('3の部屋の電気が消えていたから、つけたよ！');
    }
});



