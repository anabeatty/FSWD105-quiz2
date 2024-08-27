// Functions for name, date and email

function functionChangeMyName() {
  let isValid = false;
  let name = "";

  while (!isValid) {
    name = prompt("Enter your full name:");

    if (name && name.trim().length > 0) {
      isValid = true;
    } else {
      alert("Invalid input. Please enter a valid name.");
    }
  }
  document.getElementById("idUserName").textContent = name;

  return name;
}

function functionReplaceEmail() {
  let isValid = false;
  let email = "";

  while (!isValid) {
    email = prompt("Enter your email");

    if (email && email.trim().length > 0 && email.includes("@")) {
      isValid = true;
    } else {
      alert("Invalid input. Please enter a valid email.");
    }
  }
  document.getElementById("idEmail").textContent = email;

  return email;
}

function functionReplaceDate() {
  const currentDateElement = document.getElementById("idReplaceDate");
  const currentDate = new Date().toLocaleDateString();
  document.getElementById("idReplaceDate").textContent = currentDate;
}

//  Replace placeholder with protocol's port
function replaceProtocols() {
  const HTTPprot = "80";
  document.getElementById("idHTTP").textContent = HTTPprot;

  const HTTPSprot = "443";
  document.getElementById("idHTTPS").textContent = HTTPSprot;

  const SSHprot = "22";
  document.getElementById("idSSH").textContent = SSHprot;

  const DNSprot = "853";
  document.getElementById("idDNS").textContent = DNSprot;
}
///////// EVERYTHING until here is attached to same "Change my name" button!!!

////// DYNAMIC LIST OF ITEMS
// Create the list based on user input
function functionHowManyItems() {
  let valid = false;
  let number;

  while (!valid) {
    let input = prompt("Please enter a number:");

    // Convert input to a number and validate
    number = Number(input);

    if (!isNaN(number) && number >= 1 && number <= 10) {
      valid = true;
      createList(number);
    } else {
      alert("Invalid input. Please enter a valid number between 1 and 10.");
    }
  }

  return number;
}

// Create a list with a given number of items
function createList(number) {
  let unorderedList = document.createElement("ul"); // Corrected to "ul"

  for (let i = 1; i <= number; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
    unorderedList.appendChild(li);
  }

  document.body.appendChild(unorderedList);
}
