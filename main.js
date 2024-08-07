import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

let c1 = new Cliente("Mario");
let i1 = new Impuesto();

console.log(c1);
console.log(i1);

console.log(c1.nombre);
c1.nombre = "Super Mario";
console.log(c1.nombre);