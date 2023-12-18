const buttons = document.querySelectorAll(".clicks");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
//    switch (e.target.id) {
//       case "grey":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "pink":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "blue":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "green":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "yellow":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "violet":
//         body.style.backgroundColor = e.target.id;
//         break;
//     }

    //alternate of switch and if in one line
    body.style.backgroundColor = e.target.id;

  });
});
