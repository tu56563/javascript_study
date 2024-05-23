// 1. 서브(변수) 숨기기
// 2. 메인메뉴 마우스 올리면
// 3. 마우스 올린 메뉴의 관련 서브 메뉴 보이기
const sub = document.querySelectorAll('.sub')
console.log(sub)
//? {display:none;}
//<tag style="display:none;"></tag>
//객체.속성.속성 = 값
sub[0].style.display = 'none'; //서브(변수) 숨기기
sub[1].style.display = 'none';
sub[2].style.display = 'none';
sub[3].style.display = 'none';
const menu = document.querySelectorAll('.gnb > li')
console.log(menu)
// header .gnb > li:nth-child(2)
menu[0].addEventListener('mouseover',function(){
    sub[0].style.display = 'block'
})
//menu에서 마우스 나갔을 때 서브 숨기기
menu[0].addEventListener('mouseout',function(){
    sub[0].style.display = 'none';
})
menu[1].addEventListener('mouseover',function(){
    sub[1].style.display = 'block';
})
menu[1].addEventListener('mouseout',function(){
    sub[1].style.display = 'none';
})
menu[2].addEventListener('mouseover',function(){
    sub[2].style.display = 'block';
})
menu[2].addEventListener('mouseout',function(){
    sub[2].style.display = 'none';
})
menu[3].addEventListener('mouseover',function(){
    sub[3].style.display = 'block';
})
menu[3].addEventListener('mouseout',function(){
    sub[3].style.display = 'none';
})

