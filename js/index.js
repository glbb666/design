var list = document.getElementsByClassName('swiper-pagination-bullet')
var swiper = document.getElementsByClassName('swiper-slide')
var ani = swiper[5].getElementsByTagName('span');
var cover = swiper[5].getElementsByTagName('h6');
console.log(ani);
for(let i = 1;i<8;i+=2){
    ani[i].onmouseover = function(){
        ani[i].classList.add('heartbeat')
    }
    ani[i].onmouseout = function(){
        ani[i].classList.remove('heartbeat')
    }
}

list[0].classList.add('rotation')