task_arr = []
id_logic = 100

// function to create task
function create_task () {
  task = document.getElementById('new-task').value
  task_arr.push({ id: id_logic++, type: 'unchecked', task: task })
  display_unchecked()
}
// display unchecked function
function display_unchecked () {
  div = document.getElementById('incomplete-tasks')
  div.innerHTML = ''
  task_arr.forEach(element => {
    if (element['type'] == 'unchecked') {
      div.innerHTML += `<li><input type="checkbox"><label>${element['task']}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>`
    }
  })
}
