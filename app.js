const darkBtn = document.querySelector('.fa-moon');
const body = document.querySelector('body');
const menuBar = document.querySelector('.menu-bar');
const ul = document.querySelector('ul');

// console.log(body);


function darkmode(){
    if(darkBtn.classList.contains('fa-moon')){
        darkBtn.className ="fa-solid fa-sun";
        body.style.backgroundColor ='black'
        Array.from(body.children).forEach(item =>{
            item.style.color ='white'
        })

               


    }
    else{
         darkBtn.className ="fa-solid fa-moon";
        body.style.backgroundColor ="#0f172a"
    }
}

darkBtn.addEventListener('click',e=>{
    darkmode();

})


function togglemenuBar(){

   if(menuBar.classList.contains('menu-bar')){
       menuBar.className ="fa-solid fa-xmark";
       ul.style.display = 'flex'

       
   }
   else{
    
     
    menuBar.className ="fa-solid fa-bars menu-bar"
    ul.style.display ='none'
   }


}

menuBar.addEventListener('click', (e)=>{

    togglemenuBar();

})







