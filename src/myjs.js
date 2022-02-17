task_arr = []
id_logic = 100

// function to create task
function create_task () {
  task = document.getElementById('new-task').value
  task_arr.push({ id: id_logic++, type: 'unchecked', task: task })
  display_unchecked()
  display_checked()
}
// display unchecked function
function display_unchecked () {
  div = document.getElementById('incomplete-tasks')
  div.innerHTML = ''
  task_arr.forEach(element => {
    if (element['type'] == 'unchecked') {
      div.innerHTML += `<li><input type="checkbox" onchange="check_unchek (${element['id']})"><label>${element['task']}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>`
    }
  })
}
// display uncheck function
function display_checked () {
  div = document.getElementById('completed-tasks')
  task_arr.forEach(element => {
    if (element['type'] == 'checked') {
      div.innerHTML += `<li><input type="checkbox" onchange="check_unchek (${element['id']})" checked><label>${element['task']}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>`
    }
  })
}

// change status
function check_unchek (id) {
  console.log(id)
  task_arr.forEach(element => {
    if (id == element['id']) {
      if (element['type'] == 'unchecked') {
        element['type'] = 'checked'
      } else {
        element['type'] = 'unchecked'
      }
    }
  })
  display_unchecked()
  display_checked()
}
