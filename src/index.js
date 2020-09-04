const bars = document.querySelector('.bars');
const navBar = document.querySelector('#navbar');

const barsMenuOne = document.querySelector('.bars-menu-one');
const menuOne = document.querySelector('#menu-one'); 

const barsMenuTwo = document.querySelector('.bars-menu-two');
const menuTwo = document.querySelector('#menu-two'); 



        bars.addEventListener('click', ()=> {
        navBar.classList.toggle('active');
        bars.classList.toggle('rotate') ;     
})
        barsMenuOne.addEventListener('click', ()=> {
        menuOne.classList.toggle('active-menu-one');
        barsMenuOne.classList.toggle('rotate') ;      
})
        barsMenuTwo.addEventListener('click', ()=> {
        menuTwo.classList.toggle('active-menu-two');
        barsMenuTwo.classList.toggle('rotate');      
})

const navSlide = () => {
        const burger = document.querySelector('.burger');
        
      
        burger.addEventListener('click', ()=>{
         
      
        //burger animation
          burger.classList.toggle('toggle')
        });
      
      }
      
      navSlide()