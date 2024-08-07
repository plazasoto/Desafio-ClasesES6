import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";

console.log("--------------------------------PROBANDO--------------------------------");

console.log("\n---Creando cliente 1 con nombre e impuesto---");
let i1 = new Impuesto(100, 10);
let c1 = new Cliente("Mario", i1);
console.log(`--Objeto Impuesto:`);
console.log(i1);
console.log(`--Objeto Cliente:`);
console.log(c1);
console.log(`get nombre() : ${c1.nombre}`);
console.log(`calcularImpuesto() : ${c1.calcularImpuesto()}`);
console.log(`--Cambio de nombre con setter:`);
c1.nombre = "Luigi";
console.log(`get nombre() : ${c1.nombre}`);
console.log(`--Cambio de impuesto y recalculando:`);
c1.impuesto = new Impuesto(200, 50);
console.log(`calcularImpuesto() : ${c1.calcularImpuesto()}`);

console.log("\n---Creando cliente 2 con nombre y sin impuesto---");
let c2 = new Cliente("Carla");
console.log(`--Objeto Cliente:`);
console.log(c2);
console.log(`get nombre() : ${c2.nombre}`);
console.log(`calcularImpuesto() : ${c2.calcularImpuesto()}`);

console.log("\n---Creando cliente 3 sin nombre ni impuesto---");
let c3 = new Cliente();
console.log(`--Objeto Cliente:`);
console.log(c3);
console.log(`get nombre() : ${c3.nombre}`);
console.log(`--Agregando de nombre con setter:`);
c3.nombre = "Pedro";
console.log(`get nombre() : ${c3.nombre}`);

console.log(`--Agregando impuesto:`);
c3.impuesto = new Impuesto(66, 6);
console.log(`--Objeto Impuesto:`);
console.log(c3.impuesto);
console.log(`calcularImpuesto() : ${c3.calcularImpuesto()}`);

