// const form = document.querySelector('#monkeyform')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log("You submitted the form.")
// })

// let i = 0
// document.addEventListener('keydown', function(e){
//     i++
//     console.log(i)
//     console.log(e.key)
// })

// const removeButtons = document.querySelectorAll('li button')
// for(let btn of removeButtons){
//     btn.addEventListener('click',function(e)
//     {
//         console.log("YOU CLICKED REMOVE")
//         const friendToRemove = e.target
//         friendToRemove.parentElement.remove()
//     })
// }

// const form = document.querySelector('#add-friend')
// const input = document.querySelector('#first-name')
// const friendList = document.querySelector('#friend-list')

// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const newFriend = document.createElement('li')
//     const removeButton = document.createElement('button')
//     removeButton.innerText = 'Unfriend'
//     removeButton.addEventListener('click',function(e){
//         e.target.parentElement.remove()
//     })
//     newFriend.innerText = input.value
//     input.value=''
//     newFriend.appendChild(removeButton)
//     friendList.appendChild(newFriend)
// })

//new buttons do not have event listeners.  code in segment above runs when script first loads and doesnt know about the new buttons
//two ways to solve:
//1) add eventlistener when button is created
//this isnt efficient because you will have an event listener for every single button instead of just one event listener for all
//2) add eventlistener to parent not individual element
//"event delegation"

const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click',function(e){
    if(e.target.tagName==='BUTTON'){
        e.target.parentElement.remove();
    }

    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('best-friend');
        const heart = document.createElement('span');
        heart.innerHTML = '&hearts;';
        e.target.prepend(heart);
    }
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newFriend = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Unfriend';
 
    newFriend.innerText = input.value;
    input.value='';
    newFriend.appendChild(removeButton);
    friendList.appendChild(newFriend);
})