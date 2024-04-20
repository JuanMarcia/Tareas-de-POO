document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if(localStorage.getItem('tasks')) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function(task) {
            addTaskToList(task);
        });
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        addTaskToList(taskText);
        taskInput.value = '';
    }
}

function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        removeTask(taskText);
    });
    taskList.appendChild(li);
}

function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
