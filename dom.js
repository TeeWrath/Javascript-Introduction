// Selecting element by ID
var heading = document.getElementById("heading");
// Changing HTML content
heading.innerHTML = "I control this"
// Changing Style
heading.style.color = "green"

// Selecting element by classname
var par = document.getElementsByClassName("paragraph");
console.log(par)

// not this
par.innerHTML = "hey"
// this
par[0].innerHTML = "hey"

// selecting by tag name
img = document.getElementsByTagName("img");
console.log(img)
// changing attributes
img[0].src = ""

// adding element
var li = document.createElement("li");
li.innerHTML = "Episode 2"
const ul = document.getElementsByTagName("ul")
console.log(ul)
ul[0].appendChild(li)

// remove element
ul[0].remove();


// Events in javascript
const btn = document.getElementsByTagName("button")[0];
const h = document.getElementById("hidden")
btn.addEventListener("click",()=>{
    h.style.visibility = "visible"
})