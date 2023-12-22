let nameValue = ""
let emailValue =""
let numberValue =""
let locationValue =""
let courseValue  = ""






let nameElement = document.querySelector("#nameInput");
nameElement.addEventListener("input", () => {
   nameValue =event.target.value;
   console.log("input value is :", nameValue)
 
})


// ---------------end of nameInput---------------

let emailElement = document.querySelector("#EmailInput");
emailElement.addEventListener("input", () => {
  emailValue =event.target.value;
  console.log("input value is :", emailValue)
})

// ----------end of emailInput---------------

let numberElement = document.querySelector("#numberInput");
numberElement.addEventListener("input", () => {
   numberValue =event.target.value;
  console.log("input value is :", numberValue)
})



// ---------------------end of numberInput---------------

let locationElement = document.querySelector("#locationInput");
locationElement.addEventListener("input", () => {
    locationValue =event.target.value;
  console.log("input value is :", locationValue)
})

// ----------------end of location Input---------------

let courseElement = document.querySelector("#courseInput");
courseElement.addEventListener("input", () => {
  courseValue =event.target.value;
  console.log("input value is :", courseValue)
})

// ---------------------end of course input---------------

