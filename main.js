const addButton= document.getElementById('add-btn')
const input= document.getElementById('add-task')

input.addEventListener("keyup",(inputValue)=>{
    const value= inputValue.currentTarget.value;
    if(value===""){
        addButton.disabled= true;
    }
    else{
        addButton.disabled= false;
    }
})

//add task
const tasks = [];
const newTask=document.getElementById('task-added')
function addTask() {
    const taskString = tasks.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskString;
    taskList.appendChild(newTask);
    tasks.push(taskString);
  }
  
  addButton.addEventListener("click", addTask);