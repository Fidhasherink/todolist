document.getElementById('todoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const todoList = document.getElementById('todoList');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title && description) {
    
      const li = document.createElement('li');
      li.innerHTML = `
          <div>
              <span class="task-title">${title}</span><br>
              <span class="task-desc">${description}</span>
          </div>
          <div>
              <button class="action-btn edit-btn">Edit</button>
              <button class="action-btn remove-btn">Remove</button>
          </div>
      `;

  
      const editBtn = li.querySelector('.edit-btn');
      editBtn.addEventListener('click', function() {
          const newTitle = prompt('Edit title:', title);
          const newDescription = prompt('Edit description:', description);

          if (newTitle && newDescription) {
              li.querySelector('.task-title').textContent = newTitle;
              li.querySelector('.task-desc').textContent = newDescription;
          }
      });

      
      const removeBtn = li.querySelector('.remove-btn');
      removeBtn.addEventListener('click', function() {
          li.remove();
      });

      
      todoList.appendChild(li);

      
      titleInput.value = '';
      descriptionInput.value = '';
  } else {
      alert('Please enter both a title and a description!');
  }
});