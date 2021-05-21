// Selectores
let formulario = document.getElementById("form");
let inputNamber = document.getElementById("number");
let btn = document.querySelector("#btn");
let invitedList = document.querySelector("#invitado");
let invitedName = document.querySelector("#invitado__name");

// arrays de los invitados y la cantidad
let invitados = [];
let number = { number: 0 };

// funcion para validar el formulario
function validation(formData) {
  try {
    if (formData.get("username") === null || formData.get("username") === "") {
      throw Error;
    } else {
      invitados.push(formData.get("username"));
    }
  } catch {
    alert("debes colocar un nombre");
  }
}
// formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  formData = new FormData(formulario);
  validation(formData);
  // establecerLimite(number);
  // number.splice(number[number.length - 1], 1);
  // myFunction(invitados, number);
  // formulario.reset();
});

function establecerLimite() {
  let numbernew = inputNamber.value;
  return (number = numbernew);
}
// function myFunction(invitados, number) {
//   try {
//     if (invitados.length <= number[number.length - 1]) {
//       createInvited();
//     } else {
//       throw new Error();
//     }
//   } catch {
//     console.log("error");
//     alert("Exediste el numero de invitados establecido");
//   }
// }

// function createInvited(validationForm) {
//   if (validationForm() === true) {
//     var li = document.createElement("LI");
//     var p = document.createElement("P");
//     var button = document.createElement("BUTTON");
//     var nameInvitado = document.createTextNode(invitados[invitados.length - 1]);
//     var textdelete = document.createTextNode("X");
//     button.appendChild(textdelete);
//     button.classList.add("delete");
//     p.appendChild(nameInvitado);
//     li.appendChild(p).appendChild(button);
//     document
//       .getElementById("prueba")
//       .appendChild(li)
//       .classList.add("capitalize");
//     button.addEventListener("click", (event) =>
//       console.log(event.target.parentNode.parentNode.remove())
//     );
//   } else {
//     console.log("error");
//   }
// }

// node.setAttribute("Id", 1);
// if (
//   invitados[invitados.length - 1] === null ||
//   invitados[invitados.length - 1] === ""
// ) {
//   invitados.splice(invitados[invitados.length - 1], 1);
//   invitados.splice(number[number.length - 2], 1);
//   alert("Es necesario poner el nombre");
//   return;
// }
