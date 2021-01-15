const form = document.getElementById('form');
const input = document.getElementById('input');
const todolist = document.getElementById('todolist');
const todos = document.getElementsByClassName('todos');
const lsTodos = localStorage.getItem('todos');

//check localStorage
function checkTodo(){
    if(lsTodos !== ''){
        todolist.innerHTML = lsTodos;
           
    }else{
       console.log('NoDats')
    }
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value !== ''){
        updateTodo()
    }
});

function updateTodo(){
    if(input.value !== ''){
        todolist.innerHTML +=`<li class='todos'>
        ${input.value}<i class="fas fa-trash"></i></li>`;
    }
    input.value ="";

    //localStorage
    localStorage.setItem('todos',todolist.innerHTML)

    addLable()      
};


function addLable(){
    document.querySelectorAll('.todos').forEach((item)=>{
        item.addEventListener('click',()=>{
                item.classList.toggle('done');
        })
    })
};

function removeTodo(){
    todolist.addEventListener('click',(e)=>{
        if(e.target.className == 'fas fa-trash'){
            // console.log(e.composedPath()[1])
            // e.path可在 CHROME使用 火狐不行  所以改用composedPath()即可
            e.composedPath()[1].outerHTML =""
        }
        localStorage.setItem('todos',todolist.innerHTML)
    })
};
checkTodo();
removeTodo();