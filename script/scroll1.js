const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
console.log(btn, bg)
btn.forEach((t, i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})
//btn1 -> bg1 ~ btn3 -> b => for문 활용 스크롤 이동

/* btn[0].addEventListener('click',()=>{
    window.scrollTo(0,0)
    //window.scrollBy(0, 200)
}) */
//btn[1] 클릭 시 bg[1] 이동
/* btn[1].addEventListener('click',()=>{
    //특정 객체 위치로 이동 시 먼저 체크해야하는 값!
    //객체의 위치 속성 offsetTop
    console.log(bg[1].offsetTop)
    window.scrollTo(0, bg[1].offsetTop)
}) */
/* btn[2].addEventListener('click',()=>{
    console.log(bg[2].offsetTop)//1048
    window.scrollTo(0, bg[2].offsetTop)
}) */