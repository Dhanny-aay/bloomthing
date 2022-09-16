window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


const menuicon = document.getElementsByClassName('hmbgr')[0];
menuicon.addEventListener('click', drop);
var overlay = document.getElementsByClassName('nav-menu')[0];

function drop(){
    menuicon.style.display='none';
    overlay.classList.add('open');
    
    // if(overlay.style.display='none'){
    //     overlay.style.display='block';
    // }
   
}

const closeicon = document.getElementsByClassName('hmbgr1')[0];
closeicon.addEventListener('click', close);
// document.body.addEventListener('click', close);

function close(){
    // overlay.style.display="none";
    menuicon.style.display='block';
    overlay.classList.remove('open');
}
