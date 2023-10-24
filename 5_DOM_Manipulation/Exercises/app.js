//Write the code necessary to do the following:
//
//1. Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

//2. Select the section with an id of container using querySelector.

const container = document.querySelector('#container');


//3. Select all of the list items with a class of “second”.

const lists = document.getElementsByClassName('second');
//const lists = document.querySelectorAll('.second')

//4. Select a list item with a class of third, but only the list item inside of the ol tag.

const third = document.querySelector('ol').getElementsByClassName('third');

//5. Give the section with an id of container the text “Hello!”.

const section = document.getElementById('container');
section.innerText = 'Hello!';

//6. Add the class main to the div with a class of footer.

const footer = document.getElementsByClassName('footer');
footer.classList.add('main');

//footer.className += 'main';

//7. Remove the class main on the div with a class of footer.

footer.classList.toggle('main');

//footer.classList.remove('main');

//8. Create a new li element.

const li = document.createElement('li');

//9. Give the li the text “four”.

li.textContent = 'four';

//li.innerText = 'four';

//10. Append the li to the ul element.

const ul = document.querySelector('ul');
ul.append(li);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

const lis = document.querySelector('ol').querySelectorAll('li');

for(let li of lis){
    li.classList.toggle('green');
    //li.style.backgroundColor = 'green';
}
