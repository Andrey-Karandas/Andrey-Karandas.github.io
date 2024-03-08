const stringEmpty = ''

function createTask() {
  let input = document.querySelector('.input')
  if (input.value !== stringEmpty) {
    document.querySelector('.list').insertAdjacentHTML(
      'beforeend',
      `<li class="task">
        <div class="text">${input.value}</div>
        <div>
          <img src="img/1.png" class="done">
          <img src="img/2.png" class="delete">
        </div>
      </li>`
    )
  } else alert('Введите задачу')
  input.value = stringEmpty
}

const setCounter = (nameButton) =>
  document
    .querySelectorAll(nameButton)
    .forEach((button, index) => button.setAttribute('datavalue', index))

const getIndex = (button) => parseInt(button.getAttribute('datavalue'))

document.querySelector('.add').addEventListener('click', createTask)
document.addEventListener('click', (event) => {
  const buttonDone = event.target.closest('.done')
  const buttonDelete = event.target.closest('.delete')
  const tasks = document.querySelectorAll('.task')
  if (buttonDone) {
    setCounter('.done')
    const index = getIndex(buttonDone)
    tasks[index].querySelector('.text').classList.toggle('completed')
  } else if (buttonDelete) {
    setCounter('.delete')
    const index = getIndex(buttonDelete)
    tasks[index].remove()
  }
})
