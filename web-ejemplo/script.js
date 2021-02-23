const list = [];
const anotherList = list.concat([123, 234]);

const persona = {
  name: "Miguel",
  twiter: "@alonso",
  age: 19,
  isDeveloper: true,
  links: ["https://www.alonso.com", "https://midu.live"],
};

//funcion expresión
const sumar = (operando1, operando2) => {
  console.log(operando1);
  console.log(operando2);
  return operando1 + operando2;
};
console.log(sumar(4, 5));

//funcion declararativa

function restar(a, b) {
  return a - b;
}

// const field = "twiter";
// console.log(persona[field]);
// console.log(persona.links[0]);
