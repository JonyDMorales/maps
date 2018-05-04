import { Component, OnInit } from '@angular/core';
import { MarcadoresService } from '../../providers/marcadores.service';
import { MarcadorPublico } from '../../class/marcador.publico.class';
import { MarcadorPrivado } from '../../class/marcador.privado.class';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styles: []
})
export class MapaComponent implements OnInit {
    
    public publicos :MarcadorPublico[] = [];
    public privados :MarcadorPrivado[] = [];

    latitud :number = 24.0787522/*19.4283854*/;
    longitud :number = -103.5518159;

    constructor(public _marcadores :MarcadoresService) { 
        this.getPublicos();
        this.getPrivados();
    }
    
    ngOnInit() {
    }

    public getPublicos(){
        this._marcadores.consultaPublicos().subscribe(publicos => {
            console.log(publicos);
        });
    }

    public getPrivados(){
        this._marcadores.consultaPrivados().subscribe(privados => {
            console.log(privados);
        });
    }

}
