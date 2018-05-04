export class MarcadorPublico {
    public latitud :number;
    public longitud :number;
    public foto :any;

    constructor(lat, lng, foto){
        this.latitud = lat;
        this.longitud = lng;
        this.foto = foto;
    }
}