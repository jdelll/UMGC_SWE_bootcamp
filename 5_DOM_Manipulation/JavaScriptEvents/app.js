//one way to avoid script running before dom content is loaded is the below solution.  inside the function is all of the javascript for the web app
// document.addEventListener('DOMContentLoaded',function(){})

//another way is to include app.js with script tag at the very end of the head in the html file
//DOMContentLoaded doesn't wait for anything to load on the page (for example rendering an image) only for it to know about the content.
//to wait for everything to load fully:
//addEventListener('load',function(){})


function makeBody(color){
    document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');

btn.onclick = function(){
    makeBody('teal');
}

//main reason to use add event listener is you can add multiple events and multiple types
const violet = document.querySelector('#violet')
violet.addEventListener('click',function(){
         makeBody('violet');
    })

const p = document.querySelector('#p');
p.addEventListener('click', function(e){
    console.log(e.type);
});

p.addEventListener('mousedown', function(e){
    console.log(e.type);
});

p.addEventListener('mouseup', function(e){
    console.log(e.type);
});

//const body = document.querySelector('body');
document.addEventListener('mousemove',function(e){
    let r = 255*e.pageX/window.innerWidth;
    let g = 200;
    let b = 255*e.pageY/window.innerHeight;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});