'use strict';
let obj = {};
obj.singer = '周杰伦';
Object.defineProperty(obj, 'music', {
    configurable: true,     // 可以配置对象，删除属性
    // writable: true,         // 可以修改对象
    enumerable: true,        // 可以枚举
    // value: '七里香',
    // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
    get: function () {     // 获取obj.music的时候就会调用get方法
        return '发如雪';
    },
    set: function (val) {      // obj.music = '听妈妈的话'
        console.log(val);   // '听妈妈的话'
    }
});

console.log(obj);   // {singer: '周杰伦', music: '七里香'}

delete obj.music;   // 如果想对obj里的属性进行删除，configurable要设为true
console.log(obj);   // 此时为  {singer: '周杰伦'}

obj.music = '听妈妈的话';   // 如果想对obj的属性进行修改，writable要设为true
console.log(obj);   // {singer: '周杰伦', music: "听妈妈的话"}

for (let key in obj) {
    // 默认情况下通过defineProperty定义的属性是不能被枚举(遍历)的
    // 需要设置enumerable为true才可以
    // 不然你是拿不到music这个属性的，你只能拿到singer
    console.log(key);   // singer, music
}