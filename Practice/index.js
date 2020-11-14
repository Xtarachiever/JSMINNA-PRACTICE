const navSlide=()=>{
    const lists=document.querySelector('.lists');
    const navBar=document.querySelector('.nav');
    const fa_bars=document.querySelector('.fa-bars');
    const fa_times=document.querySelector('.fa-times');
    // const medQuery1 = window.matchMedia("(max-width: 759px)");
    const medQuery2 = window.matchMedia("(min-width: 760px)");
    navBar.addEventListener('click',()=>{
        lists.classList.toggle('listToggle');
    })
    fa_bars.addEventListener('click',()=>{
        fa_times.style.display='block'
        fa_bars.style.display='none'
    })
    fa_times.addEventListener('click',()=>{
        fa_bars.style.display='block'
        fa_times.style.display='none'
    })
    
    if(medQuery2.matches){
        new Glider(document.querySelector('.glider'),{
            slidesToShow:2,
            dots:'.dots',
            arrows:{
                prev:'.glider-prev',
                next:'.glider-next'
            }
        })
    }
    else{
        new Glider(document.querySelector('.glider'),{
            slidesToShow:1,
            dots:'.dots',
            arrows:{
                prev:'.glider-prev',
                next:'.glider-next'
            }
        })
    }
}
navSlide();