'use script';

const openCanvas = document.querySelectorAll(".canvasOpen")
const closeCanvas = document.querySelector(".canvasClose")
const offCanvas = document.querySelector(".offcanvas")
const overlay = document.querySelector(".overlay")

for (let i = 0; i < openCanvas.length; i++) {
    openCanvas[i].addEventListener('click', () => {
        offCanvas.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
    
}


const colapseCanvas = () => {
    offCanvas.classList.add('hidden')
    overlay.classList.add('hidden');
}

closeCanvas.addEventListener('click', colapseCanvas);
overlay.addEventListener('click', colapseCanvas);


document.addEventListener('keydown', function(event){
if(event.key == 'Escape'){
    if (!offCanvas.classList.contains('hidden')) {
        colapseCanvas();
    }
   
};
})
       
    //     if (!offCanvas.classList.contains('hidden')) {
    //     colapseCanvas();
    // }
    
