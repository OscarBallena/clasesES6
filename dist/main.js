"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoUno = new _impuesto["default"](5000, 20);
var clienteUno = new _cliente["default"]('oscar', impuestoUno);
console.log(impuestoUno);
console.log(clienteUno);
console.log(clienteUno.calcularImpuesto);