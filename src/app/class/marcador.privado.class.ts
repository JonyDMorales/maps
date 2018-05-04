export class MarcadorPrivado {
    public latitud :number;
    public longitud :number;
    public foto :any;
    public tipo :string;

    constructor(lat, lng, foto, tipo){
        this.latitud = lat;
        this.longitud = lng;
        this.foto = foto;
        this.tipo = tipo;
    }
}