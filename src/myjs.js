task_arr = []
id_logic = 100

// function to create task
function create_task () {
  task = document.getElementById('new-task').value
  task_arr.push({ id: id_logic++, type: 'unchecked', task: task })
  document.getElementById('new-task').value = ''
  display_unchecked()
  display_checked()
}
// display unchecked function
function display_unchecked () {
  div = document.getElementById('incomplete-tasks')
  div.innerHTML = ''
  task_arr.forEach(element => {
    if (element['type'] == 'unchecked') {
      div.innerHTML += `<li><input type="checkbox" onchange="check_unchek (${element['id']})"><label>${element['task']}</label><input type="text">
      <button class="edit" onclick="update(${element['id']})">Edit</button>
      <button class="delete" onclick="del(${element['id']})">Delete</button>
      </li>`
    }
  })

  display_checked()
}
// display uncheck function
function display_checked () {
  div = document.getElementById('completed-tasks')
  div.innerHTML = ''
  task_arr.forEach(element => {
    if (element['type'] == 'checked') {
      div.innerHTML += `<li><input type="checkbox" onchange="check_unchek (${element['id']})" checked><label>${element['task']}</label>
      <input type="text">
      <button class="edit" onclick="update(${element['id']})">Edit</button>
      <button class="delete" onclick="del(${element['id']})">Delete</button>
      </li>`
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

// function delete
function del (id) {
  console.log(id)

  task_arr.forEach(element => {
    if (id == element['id']) {
      index = task_arr.findIndex(element => {
        if (element['id'] == id) {
          return true
        }
      })
      task_arr.splice(index)
      console.log(index)
    }
  })
  display_unchecked()
  display_checked()
}

// function to edit
function update (id) {
  task_arr.forEach(element => {
    if (element['id'] == id) {
      document.getElementById('new-task').value = element['task']
    }
  })

  console.log(id)
  del(id)
}
