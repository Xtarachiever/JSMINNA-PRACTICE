const navSlide=()=>{
    const burger = document.getElementById('btn');
    const list=document.querySelector('.list');
    const toggle = document.getElementById('cancel');
    
    burger.addEventListener('click',()=>{
        list.classList.toggle('please');
    },false)

    toggle.addEventListener('click',()=>{
        list.classList.toggle('please');
    },false)
}
navSlide();


    // burger.addEventListener('click', () => {
    //     if(list.style.display === "block"){
    //         list.style.display = "none"
    //     }else{
    //         list.style.display = "block"
    //     }
    // })
    // const toggle = document.getElementById('cancel');
    
    // toggle.addEventListener('click', () => {
    //     if(list.style.display === "block"){
    //         list.style.display = "none"
    //     }else{
    //         list.style.display = "block"
    //     }
    // })
// function classToggle() {
//     const burger = document.getElementById('btn');
//     const lists=document.getElementById('move');  
//     lists.forEach(list => list.classList.toggle('please'));
//   }
  
// document.querySelector(burger).addEventListener('click', classToggle);