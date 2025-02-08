const logo_right=document.querySelector(`.logo_right`)
const menu=document.querySelector(`.menu`)
const menu_logo=document.querySelector(`.menu_logo`)
menu.addEventListener(`click`,()=>{
    if( logo_right.classList.contains(`new_block`)){
        logo_right.classList.remove(`new_block`)
 
        menu_logo.src=`./img/header/menu.svg`
    }
    else{
        menu_logo.src=`./img/header/x.png`
        logo_right.classList.add(`new_block`)
    }
})