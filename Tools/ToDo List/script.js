let input = document.querySelector('input');
let button = document.querySelector('button');
let listContainer = document.querySelector('.list-container');
let ul = document.querySelector('ul');

function AddList(){
    if (input.value === ""){
        alert('Input field should not be empty');
    }
    else{
        let todo = document.createElement('li');
        todo.innerText = input.value;
        ul.appendChild(todo);
        input.value = "";
        let span = document.createElement('SPAN');
        span.innerText = 'x'
        ul.appendChild(span);
    }
}

button.addEventListener('click',AddList);

listContainer.addEventListener('click', (e)=>{
if (e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
});
