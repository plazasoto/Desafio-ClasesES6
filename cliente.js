//import { Impuesto } from "./impuestos.js";

export class Cliente{
    constructor(nombre, impuesto = {}){
    //constructor(nombre, impuesto = new Impuesto()){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    /** */
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    /** */
    get impuesto(){
        return this._impuesto;
    }

    set impuesto(impuesto){
        this._impuesto = impuesto;
    }

    calcularImpuesto(){
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21 || 0;
    }
}