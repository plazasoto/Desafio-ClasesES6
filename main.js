import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

console.log("--------------------------------PROBANDO--------------------------------");

let c1 = new Cliente("Mario");
let i1 = new Impuesto();

console.log(c1);
console.log(i1);

console.log(c1.nombre);
c1.nombre = "Super Mario";
console.log(c1.nombre);

let c2 = new Cliente();
console.log(c2);
console.log(c2.nombre);

console.log(c1.calcularImpuesto());
c1.impuesto = new Impuesto(200, 10);
console.log(c1);
console.log(c1.nombre);
console.log(c1.impuesto);
console.log(c1.calcularImpuesto());