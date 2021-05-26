import Cliente from './cliente.js';
import Impuesto from './impuesto.js';
let impuestoUno = new Impuesto(5000, 20);
let clienteUno = new Cliente('oscar', impuestoUno);
console.log(impuestoUno);
console.log(clienteUno);
console.log(clienteUno.calcularImpuesto);