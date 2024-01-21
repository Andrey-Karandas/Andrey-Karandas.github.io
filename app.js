const select = document.querySelector('.select')
document.querySelector('.btn').addEventListener('click', () => {
  const date = new Date().toLocaleDateString()
  const url = `https://api.telegram.org/bot6333643693:AAFxgvOteH9N2-WkapNWvWXlx5c3EK0ZLLs/sendMessage?chat_id=756864009&text=${select.value} навбрав воду ${date}`
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, true)
  xhttp.send()
})
