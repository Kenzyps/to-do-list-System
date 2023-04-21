inputTaskName = document.querySelector("#taskName");
inputBtn = document.querySelector("#addTask");
tasksList = document.querySelector("#ulTasks");
tasks = JSON.parse(localStorage.getItem("tasks")) || [];
removeTask = document.querySelector("#removeBtn");

inputBtn.addEventListener("click", addTask);

function addTask()
{
    const taskName = inputTaskName.value.trim();
    if(taskName == '')
    {  
        alert('Por favor, insira uma tarefa na sua lista');
        return;
    }

    const taskExists = tasks.some(task => task.name === taskName);
    if(taskExists)
    {
        alert('Essa tarefa ja foi anexada.');
        return;
    }
    else
    {   
        tasks.push
        ({
            name: taskName
        });
        localStorage.setItem("tasks", JSON.stringify(tasks))
        inputTaskName.value = '';
        insertTasks();
    }
}

function insertTasks()
{
    tasksList.innerHTML = '';
    tasks.forEach((task, index)   => {
        const li = document.createElement('li');
        li.textContent = task.name + ' ';
        const button = document.createElement('button');
        button.textContent = 'Remover';
        li.appendChild(button);
        tasksList.appendChild(li);
        button.addEventListener("click", ()=>{
            removeTaskManager(index);
        });
    });
}

function removeTaskManager(index)
{
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    insertTasks();
    //alert(index);
}
