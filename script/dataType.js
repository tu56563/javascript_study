let a = 1;
let b = "1";
let c;
d = null;
//데이터타입을 확인하는 연산자(메서드)
console.log(a)
console.log(typeof(a), typeof(b), typeof(c))
console.log(typeof(d))
console.log(typeof a, typeof b)
//2개 이상의 데이터를 묶은 최종 데이터 타입
console.log(typeof a+b)
console.log(typeof(a+b)) //숫자+문자=문자
console.log(typeof (a+10)) //숫자+숫자=숫자
console.log("----------------------")
//데이터 형변환
let type1 = 10;
console.log(`type1의 값은 ${type1}, 데이터타입은 ${typeof type1} 이다.`)
let type1_replace = String(type1)
console.log(`type1_replace 값은 ${type1_replace}, 데이터타입은 ${typeof type1_replace}`)
let type2 = "20"
console.log(`type2 : ${type2+24}`)
console.log(`type2 : ${Number(type2)+24}`)
let type2_replace = Number(type2)
console.log(`type2 : ${type2_replace+24}`)
console.log('---------------------------')
//window.prompt() 객체.메서드()
//객체.메서드().메서드() X
//메서드().객체.메서드() X
//메서드(객체.메서드())
/* let user_age = Number(window.prompt("당신의 나이는?"))
console.log(`당신의 나이는 ${Number(user_age)}살 입니다`)
console.log(`2025년의 나이는 ${Number(user_age+1)}살 입니다`)
console.log(typeof user_age) */
/* let dan99 = window.prompt("구구단 몇단이 궁금해요?")
console.log(`${dan99}x1=${dan99*1}`)
console.log(`${dan99}x2=${dan99*2}`)
console.log(`${dan99}x3=${dan99*3}`)
console.log(`${dan99}x4=${dan99*4}`)
console.log(`${dan99}x5=${dan99*5}`)
console.log(`${dan99}x6=${dan99*6}`)
console.log(`${dan99}x7=${dan99*7}`)
console.log(`${dan99}x8=${dan99*8}`)
console.log(`${dan99}x9=${dan99*9}`) */
const yoil1 = "월";
const yoil2 = "화";
console.log(yoil1, yoil2)
const yoil = new Array("월","화","수","목","금","토","일",)
console.log(yoil)
console.log(yoil[4]) //금
console.log(yoil.length)