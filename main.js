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