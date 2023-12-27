let nameValue = "";
let emailValue = "";
let numberValue = "";
let locationValue = "";
let courseValue = "";

let nameElement = document.querySelector("#nameInput");
nameElement.addEventListener("input", () => {
  nameValue = event.target.value;
});

// ---------------end of nameInput---------------

let emailElement = document.querySelector("#EmailInput");
emailElement.addEventListener("input", () => {
  emailValue = event.target.value;
});

// ----------end of emailInput---------------

let numberElement = document.querySelector("#numberInput");
numberElement.addEventListener("input", () => {
  numberValue = event.target.value;
});

// ---------------------end of numberInput---------------

let locationElement = document.querySelector("#locationInput");
locationElement.addEventListener("input", () => {
  locationValue = event.target.value;
});

// ----------------end of location Input---------------

let courseElement = document.querySelector("#courseInput");
courseElement.addEventListener("input", () => {
  courseValue = event.target.value;
});

// ---------------------end of course input---------------

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {
    name: nameValue,
    email: emailValue,
    phone: numberValue,
    location: locationValue,
    course: courseValue,
  };
  

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  };

  fetch("https://drab-rose-whale-fez.cyclic.app/mail", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log("POST request successful:", data);
      alert("we have recorded your response!");
      form.reset();
      document.querySelector("#changeMe").innerHTML = `  <div class="col-md-6 mb-2 mt-3 main-thank-you-of-landing-page">
      <h3>Thank you For Inquiring 
        <br>
        <br>
        Our Counsellors will contact you within 24hrs to 48hrs</h3>
    </div>`
      
    })
    .catch((error) => {
      console.error("Error during POST request:", error);
      alert("some error occurred Try again sometime")
      // Handle errors that occurred during the request
    });
});
