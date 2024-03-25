import './style.css'

const textarea = document.querySelector("textarea")!

window.localStorage.data && (textarea.value = window.localStorage.data)

textarea.addEventListener("input", () => {
  window.localStorage.data = textarea.value
})