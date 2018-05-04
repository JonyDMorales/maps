import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MarcadorPublico } from '../class/marcador.publico.class';
import { MarcadorPrivado } from '../class/marcador.privado.class';

@Injectable()
export class MarcadoresService {

    public publicos :MarcadorPublico[] = [];
    public privados :MarcadorPrivado[] = [];

    //public url = 'http://dashboardfinal.us-east-1.elasticbeanstalk.com';
    public url = 'http://localhost:9000';

    constructor(private _http: HttpClient) { }
    
    public consultaPublicos() {
        let uri = this.url + '/mexa';
        return this._http.post(uri, { 'usuario': 'publico' }).map( (publicos :Array<any>) => {
            if(!publicos){
                return;
            }
            for(let publico of publicos){
                if(publico['fotos']){
                    let nuevo = new MarcadorPublico(publico['ubicacion']['coordinates'][0], publico['ubicacion']['coordinates'][0], publico['fotos'] );
                    this.publicos.push(nuevo);
                }else if(publico['video']){
                    let nuevo = new MarcadorPublico(publico['ubicacion']['coordinates'][0], publico['ubicacion']['coordinates'][0], publico['video'] );
                    this.publicos.push(nuevo);
                }
            }
            //localStorage.setItem('publicos', JSON.stringify(this.publicos));
            return this.publicos; });
    }

    public consultaPrivados() {
        let uri = this.url + '/mexa';
        return this._http.post(uri, { 'usuario': 'privado' }).map( (privados :Array<any>) => {
            if(!privados){
                return;
            }
            for(let privado of privados){
                if(privado['fotos']){
                    let nuevo = new MarcadorPrivado(privado['ubicacion']['coordinates'][0], privado['ubicacion']['coordinates'][0], privado['fotos'], privado['tipo'] );
                    this.publicos.push(nuevo);
                }else if(privado['video']){
                    let nuevo = new MarcadorPrivado(privado['ubicacion']['coordinates'][0], privado['ubicacion']['coordinates'][0], privado['video'], privado['tipo'] );
                    this.publicos.push(nuevo);
                }
            }
            //localStorage.setItem('publicos', JSON.stringify(this.publicos));
            return this.privados; });
    }
}
