export class Cliente{
    //Si no se le entrega un objeto Impuestos, la propiedad será inicializada con un objeto vacío (ya que Cliente puede tener asociado 0 o 1 Impuestos).
    constructor(nombre, impuesto = {}){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    /**Getters y setters */
    //De nombre
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    //De impuesto
    get impuesto(){
        return this._impuesto;
    }

    set impuesto(impuesto){
        this._impuesto = impuesto;
    }
    
    /**Calculo de impuesto de acuerdo a la fórmula requerida.*/
    //Retorna 0 si el cliente no tiene impuesto asociado.
    calcularImpuesto(){
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21 || 0;
    }
}