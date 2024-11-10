

function randBg(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}
  
function myFunction() {
    document.body.style.background =randBg();
  }