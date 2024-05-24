//num1, num2 사용자가 숫자 값을 입력하고
//결과버튼을 클릭했을 때
//#result 결과 위치에 "정답은 00 입니다!" 출력
const btn = document.querySelector('button')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const result = document.querySelector('#result')
console.log(num1.value)//초기값
btn.addEventListener('click',function(){
    console.log(num1.value)
    console.log(num2.value)
    let total = Number(num1.value) + Number(num2.value)
    console.log(total)
    result.value = `정답은 ${total.toLocaleString('ko-kr')} 입니다!`
})