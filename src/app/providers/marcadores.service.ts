import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MarcadorPublico } from '../class/marcador.publico.class';
import { MarcadorPrivado } from '../class/marcador.privado.class';

@Injectable()
export class MarcadoresService {

    public publicos :MarcadorPublico[] = [];
    public privados :MarcadorPrivado[] = [];
    public host :string = 'https://s3.amazonaws.com/repofisca-nvirginia/';

    public url = 'http://dashboardfinal.us-east-1.elasticbeanstalk.com';
    //public url = 'http://localhost:9000';

    constructor(private _http: HttpClient) { }
    
    public consultaPublicos() {
        let uri = this.url + '/mexa';
        return this._http.post(uri, { 'usuario': 'publico' }).map( (publicos :Array<any>) => {
            if(!publicos){
                console.log('No se encontraron publicos');
                return;
            }
            for(let publico of publicos){
                if(publico['foto']){
                    let nuevo = new MarcadorPublico(publico['ubicacion']['coordinates'][1], publico['ubicacion']['coordinates'][0], this.host + publico['foto'] );
                    this.publicos.push(nuevo);
                }else if(publico['video']){
                    let nuevo = new MarcadorPublico(publico['ubicacion']['coordinates'][1], publico['ubicacion']['coordinates'][0], this.host + publico['video'] );
                    this.publicos.push(nuevo);
                }
            }
        return this.publicos; });
    }

    public consultaPrivados() {
        let uri = this.url + '/mexa';
        return this._http.post(uri, { 'usuario': 'privado' }).map( (privados :Array<any>) => {
            if(!privados){
                console.log('No se encontraron privados');
                return;
            }
            for(let privado of privados){
                if(privado['foto']){
                    let nuevo = new MarcadorPrivado(privado['ubicacion']['coordinates'][1], privado['ubicacion']['coordinates'][0], this.host + privado['foto'], privado['tipo'] );
                    this.privados.push(nuevo);
                }else if(privado['video']){
                    let nuevo = new MarcadorPrivado(privado['ubicacion']['coordinates'][1], privado['ubicacion']['coordinates'][0], this.host + privado['video'], privado['tipo'] );
                    this.privados.push(nuevo);
                }
            }
        return this.privados; });
    }

}
