
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  
  taskContent.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteButton);

  
  taskList.appendChild(taskItem);

  
  taskInput.value = '';
}
