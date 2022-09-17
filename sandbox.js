todoSearch = document.querySelector('.search')
todoList = document.querySelector('.todos');
todoAdd = document.querySelector('.add');


//Generate todos
generateTodo = (value)=>{
    newTodo = `
        <li class="list-group-item text-light d-flex justify-content-between align-items-center">
            <span>${value}</span>
            <i class="fas fa-trash-alt"></i>
        </li>`;
        
        todoList.innerHTML += newTodo;
        
    }

todoAdd.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log(e.target.newTodo.value.trim());

    if(e.target.newTodo.value.trim()){
        generateTodo(e.target.newTodo.value.trim());
    };

    e.target.reset();

});


//Remove todos
todoList.addEventListener('click', (e)=>{
    if(e.target.classList.contains("fa-trash-alt")){
        e.target.parentElement.remove();
    };
})

//Search todos

filterTodos = (term) => {
    Array.from(todoList.children)
    .filter((item) =>{
        return !item.innerText.toLowerCase().includes(term.toLowerCase());
    }).forEach((item)=>{
        item.classList.add('filtered');
    });

    Array.from(todoList.children)
    .filter((item) =>{
        return item.innerText.toLowerCase().includes(term.toLowerCase());
    }).forEach((item)=>{
        item.classList.remove('filtered');
    });
}

// filterTodos = (searchedTerm)=>{
//     filteredTodos = Array.from(todoList.children)
//     .filter((todoItem)=>{return !todoItem.textContent.contains(searchedTerm);})
//     .forEach(filteredTodoItem => {filteredTodoItem.classList.add('filtered')});

//     console.log(filteredTodos);
// }

todoSearch.addEventListener('keyup', (e)=>{
    filterTodos(e.target.value);
    console.log(e.target.value);

    console.log(todoList.children)
})

todoSearch.addEventListener('submit', (e)=>{
    e.preventDefault();
})