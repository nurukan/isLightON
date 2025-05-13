'use strict';
{


const light1 = document.getElementById('light1');
const switch1 = document.getElementById('switch1');

const light2 = document.getElementById('light2');
const switch2 = document.getElementById('switch2');

const light3 = document.getElementById('light3');
const switch3 = document.getElementById('switch3');

const light4 = document.getElementById('light4');
const switch4 = document.getElementById('switch4');

const light5 = document.getElementById('light5');
const switch5 = document.getElementById('switch5');

const light6 = document.getElementById('light6');
const switch6 = document.getElementById('switch6');


// 関数宣言
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


// 関数宣言、実行関数を一行に簡略して記述 
// 引数
let LightOn4 = true;
function isLightOn4 (){
    if(LightOn4 === true){
        LightOn4 = false;
        light4.style.backgroundColor = 'rgb(46, 45, 45)';
        console.log('4の部屋の電気が付いていたから、消したよ！');
    }else{
        LightOn4 = true;
        light4.style.backgroundColor = 'rgb(255, 255, 142)';
        console.log('4の部屋の電気が消えていたから、つけたよ！');
    }
}
switch4.addEventListener('click', isLightOn4);


// 関数宣言
// 引数（複数）
let LightOn5 = { value: true };
function toggleLight(roomLightElement, isLightOn, roomName) {
    if (isLightOn.value) {
        isLightOn.value = false;
        roomLightElement.style.backgroundColor = 'rgb(46, 45, 45)';
        console.log(`${roomName}の電気が付いていたから、消したよ！`);
    } else {
        isLightOn.value = true;
        roomLightElement.style.backgroundColor = 'rgb(255, 255, 142)';
        console.log(`${roomName}の電気が消えていたから、つけたよ！`);
    }
}
switch5.addEventListener('click', () => {
    toggleLight(light5, LightOn5, '5の部屋');
});


// 関数宣言     
// 引数（複数）
let LightOn6 = { value: true };  
switch6.addEventListener('click', () => {
    function toggleLight6(roomLightElement,isLightOn,roomName){

        if(isLightOn.value){
            isLightOn.value = false;
            roomLightElement.style.backgroundColor = 'rgb(46, 45, 45)';
            console.log(`${roomName}の電気が付いていたから、消したよ！`);
        }else{
            isLightOn.value = true;
            roomLightElement.style.backgroundColor = 'rgb(255, 255, 142)';
            console.log(`${roomName}の電気が消えていたから、つけたよ！`);
        }
    }
    toggleLight(light6, LightOn6, '６の部屋');
});




}