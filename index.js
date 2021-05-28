// Selectores
const formEl = document.getElementById("form");
const maxInvitedEl = document.getElementById("number");
const errorNumber = document.querySelector(".errornumber");
const errorAmount = document.querySelector(".erroramount");

// arrays de los invitados y la cantidad
const invitados = [];
let maxInvited = 0;

// formEl
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  // if (isValidateName(formData)) {
  //   if (canCreateInvited()) {
  //     invitados.push(formData.get("username"));
  //     formEl.reset();
  //     createInvited();
  //   } else {
  //     alert("Exediste el numero de invitados establecido");
  //   }
  // } else {
  //   alert("debes colocar un nombre");
  // }

  if (!isValidateName(formData)) {
    errorAmount.innerHTML = "Debes colocar un nombre";
    return;
  }

  if (!canCreateInvited()) {
    errorNumber.innerHTML = "Exediste el numero de invitados establecido";
    return;
  }

  invitados.push(formData.get("username"));
  formEl.reset();
  createInvited();
});

maxInvitedEl.addEventListener("input", () => {
  maxInvited = event.target.value || 0;
});

// funcion para validar el formEl
function isValidateName(formData) {
  if (formData.get("username") === null || formData.get("username") === "") {
    return false;
  } else {
    return true;
  }
}

function canCreateInvited() {
  if (invitados.length < maxInvited) {
    return true;
  } else {
    return false;
  }
}

function createInvited() {
  const li = document.createElement("LI");
  const p = document.createElement("P");
  const button = document.createElement("BUTTON");
  const nameInvitado = document.createTextNode(invitados[invitados.length - 1]);
  const textdelete = document.createTextNode("X");

  button.appendChild(textdelete);
  button.classList.add("delete");
  p.appendChild(nameInvitado);
  li.appendChild(p).appendChild(button);
  document.getElementById("prueba").appendChild(li).classList.add("capitalize");

  button.addEventListener("click", (event) =>
    event.target.parentNode.parentNode.remove()
  );
}
