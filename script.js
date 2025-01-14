let textInput = document.getElementById('task');
let addbtn = document.getElementById('add');
let tasklist = document.getElementById('tasklist');

function addTask() {
  const taskText = textInput.value.trim(); // Get input value and trim whitespace
  if (taskText.length === 0) {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const taskListItem = document.createElement('li');
  taskListItem.textContent = taskText;

  // Create a delete button
  const dltbtn = document.createElement('button');
  dltbtn.textContent = 'X';
  dltbtn.classList.add('remove');
  dltbtn.onclick = () => {
    taskListItem.remove(); // Remove the task item when delete button is clicked
  };

  // Append delete button to the list item and add to task list
  taskListItem.appendChild(dltbtn);
  tasklist.appendChild(taskListItem);

  // Clear the input field
  textInput.value = '';
}

// Add event listener for the Add button
addbtn.addEventListener('click', addTask);

// Add functionality to press Enter to add a task
textInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
