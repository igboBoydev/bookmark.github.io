const harmburger = document.querySelector('.image1');
const closeIcon = document.querySelector('.image2');
const img = document.querySelectorAll('.img');
const img1 = document.querySelectorAll('.img1');
const nav = document.querySelector('nav');
const p = document.querySelectorAll('.par');
const div = document.querySelector('.nav-links');
const aLinks = document.querySelector('.nav-links').children;
harmburger.addEventListener('click', function(){
    harmburger.classList.add('display1');
    harmburger.classList.remove('active')
    closeIcon.classList.add('active');
    closeIcon.classList.remove('display1');
    div.classList.add('showLinks');
    div.classList.remove('display1');
    nav.classList.add('navBackground')
    if(div){
        for(let i = 0; i < aLinks.length; i++){
            aLinks[i].classList.add('a');
        }
    }else{
        for(let i = 0; i < aLinks.length; i++){
            aLinks[i].classList.remove('a');
        } 
    }
})

closeIcon.addEventListener('click', function(){
    harmburger.classList.remove('display1');
    harmburger.classList.add('active');
    closeIcon.classList.add('display1');
    closeIcon.classList.remove('active');
    div.classList.remove('showLinks');
    div.classList.add('display1');
    nav.classList.remove('navBackground');
})



for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', () => {
        img[i].classList.add('display1')
        for(let j = 0; j < img1.length; j++){
            img1[i].classList.remove('display1')
        }
        for(let k = 0; k < p.length; k++){
            p[i].classList.remove('display1')
            p[i].classList.add('align')
        }
    })
}

for(let i = 0; i < img1.length; i++){
    img1[i].addEventListener('click', () => {
        img1[i].classList.add('display1')
        for(let j = 0; j < img.length; j++){
            img[i].classList.remove('display1')
        }
        for(let k = 0; k < p.length; k++){
            p[i].classList.add('display1')
            p[i].classList.remove('align')
        }
    })
}

