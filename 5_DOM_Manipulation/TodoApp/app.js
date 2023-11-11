const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

//populate todo list either with new default or from localStorage
if(localStorage.getItem('todoList') == null || JSON.parse(localStorage.getItem('todoList')) == '\n        \n    ' || JSON.parse(localStorage.getItem('todoList') == '""')) {
    const newTodo = createTodo('Make a todo list');
    list.appendChild(newTodo);
}
else{
    list.innerHTML=JSON.parse(localStorage.getItem('todoList'));
}

//function that takes input string and creates todo list element
function createTodo(todoText){
    const newTodo = document.createElement('li');
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.setAttribute('id','complete');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('id','remove');
    newTodo.innerText = todoText;
    newTodo.appendChild(completeButton);
    newTodo.appendChild(removeButton);
    return newTodo;
}


function updateTodoList(){
    const todoList = document.querySelector('#todo-list').innerHTML;
    localStorage.setItem('todoList',JSON.stringify(todoList))
}

//click on complete button to cross off; remove button to delete; todo item to make it more urgent
list.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.getAttribute('id')=='complete'){
        e.target.parentElement.classList.toggle('complete');
        updateTodoList();
    }
    else if(e.target.getAttribute('id')=='remove'){
        e.target.parentElement.remove();
        updateTodoList();
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.add('urgent');
        const star = document.createElement('span');
        star.innerHTML = '&star;';
        e.target.prepend(star);
        updateTodoList();
    }
})

//right click on todo item to make it less urgent
list.addEventListener('contextmenu',function(e){
    e.preventDefault();
    if(e.target.tagName === 'LI' && e.target.querySelector('span')!=null){
        e.target.querySelector('span').remove();
        updateTodoList();
        if(e.target.querySelector('span')==null){
            e.target.classList.toggle('urgent');
            updateTodoList();
        }
    }
})

//submit new todo list item to add it to list
form.addEventListener('submit',function(e){
    e.preventDefault();
    const newTodo = createTodo(input.value);
    input.value='';
    list.appendChild(newTodo);
    updateTodoList();
})
