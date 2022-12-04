let ul = document.querySelector("ul")
let screen = document.querySelector(".screen")
let allDelete  = document.querySelector("#allDelete")
let deleteItem = document.querySelector("#delete")
for (let i = 0; i < ul.children.length; i++) {
    if (ul.children[i].innerHTML == "=") {
      ul.children[i].addEventListener("click", calculate);
    } 
    else {
      ul.children[i].addEventListener("click", (e) => {
        screen.innerHTML += e.target.innerHTML
      });
    }
  }

  function calculate(i) {
     if(ul.children[i] == "%"){
      ul.children[i] = "*0.01"
          }
    screen.innerHTML = eval(screen.innerHTML)
  }
  
  allDelete.addEventListener("click", () => {
    screen.innerHTML = "";
  });
  
 deleteItem.addEventListener("click",()=>{
  let newArray = screen.innerHTML.split("");
  newArray.pop()
  newArray.pop()
  screen.innerHTML = newArray.join("");
 })

  
 

