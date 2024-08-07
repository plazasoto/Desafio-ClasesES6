export class Impuestos{
    constructor(montoBrutoAnual=0, deducciones=0){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    /**Getters y setters */
    //De montoBrutoAnual
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(montoBrutoAnual){
        this._montoBrutoAnual = montoBrutoAnual;
    }

    //De deducciones
    get deducciones(){
        return this._deducciones;
    }

    set deducciones(deducciones){
        this._deducciones = deducciones;
    }
}