const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when i click the toggle tag, toggle open on the main tag
// and if it's open, change to close etc
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")
  
  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = '<img src="close.svg"> Close'
  } else {
    toggleTag.innerHTML = '<img src="menu.svg"> Menu'
  }
  
})

