
export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get getnombre(){
        return this._nombre;
    }
    set setnombre(nombre){
        this._nombre = nombre;
    }
    get getImpuesto(){
        return this._impuesto;
    }
    set setImpuesto(impuesto){
        this._impuesto = impuesto;
    }
    get calcularImpuesto(){
        let calculo = (this._impuesto.getmonto_bruto_anual-this._impuesto.getdeducciones)*.21;
        return calculo;
    }
}