var myname = prompt("Введите имя");
var obj = {
    a : '!',
    b : '@',
    c: '#',
    d: '$',
    e : '%',
    f: '^',
    g : '&',
    h : '*',
    i: '(',
    j: ')',
    k: '_',
    l: '+',
    m: '-',
    n: '=',
    o: '№',
    p: '|',
    q: 'ё',
    r: ']',
    s: '}',
    t: '[',
    u: '{',
    v: '?',
    w: '~',
    x: ':',
    y: '<',
    z: '>',
};
console.log (myname);

var key = "#*%^";
var array = myname.split('');
var result1 ='';

array.forEach(function (i) {     /*функция кодировки*/
    obj[i]?result1+=obj[i]:null
})
console.log(result1)           /*закодировали*/

var a = result1.split('');
var result = a.join(key);
console.log (result)        /*закодировали с ключем */

var a1 = result.split(key);
console.log (a1)            /*убрали ключ и расчленили*/

var result2 = '';

a1.forEach(function (i) {      /*функция раскодировки*/
    for (var key in obj) {
        if (obj[key]==i) {
            result2+=key
        } else {
            null
        }
    }
})
console.log (result2);





