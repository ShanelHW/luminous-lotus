const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');

function PageTransitions(){
    //button click activate
    for(let i = 0; i < sectBtns.length; i++){
        sectBtn[i].addEventlistener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
}

PageTransitions();