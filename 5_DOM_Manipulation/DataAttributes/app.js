// const ul = document.querySelector('#cars');
// ul.addEventListener('click',function(e){
//     console.log(e.target.getAttribute('data-model'))
//     console.log(e.target.dataset)
//     e.target.dataset.sold='true'
// })

const colorsSection = document.querySelector('#colors')
colorsSection.addEventListener('click',function(e){
    document.body.style.backgroundColor = e.target.dataset.hex;
    
})