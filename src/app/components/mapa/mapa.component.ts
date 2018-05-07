import { Component, OnInit } from '@angular/core';
import { MarcadoresService } from '../../providers/marcadores.service';
import { MarcadorPublico } from '../../class/marcador.publico.class';
import { MarcadorPrivado } from '../../class/marcador.privado.class';
//import { MatDialog, MatDialogRef } from '@angular/material';
import { VerComponent } from '../ver/ver.component';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styles: []
})
export class MapaComponent implements OnInit {
    
    public publicos :MarcadorPublico[] = [];
    public privados :MarcadorPrivado[] = [];
    public sos: MarcadorPrivado[] = [];
    public opcion: string = '';

    latitud :number = 24.0787522;
    longitud :number = -103.5518159;

    constructor(public _marcadores :MarcadoresService, /*public dialog: MatDialog*/) {
        this.getPublicos();
        this.getPrivados();
        this.opcion = localStorage.getItem('opcion');

    }
    
    /*public openDialog(): void {
        let dialogRef = this.dialog.open(VerComponent, {
          width: '250px',
          data: "fdsdfsdf"
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }*/

    
    ngOnInit() {
    }

    public getPublicos(){
        this._marcadores.consultaPublicos().subscribe((publicos :MarcadorPublico []) => {
            this.publicos = publicos;
            console.log(this.publicos);
        });
    }

    public getPrivados(){
        this._marcadores.consultaPrivados().subscribe((privados :MarcadorPrivado []) => {
            for(let privado of privados){
                if(privado.tipo == 'sos'){
                    this.sos.push(privado);
                }else {
                    this.privados.push(privado);
                }
            }
            console.log(this.sos);
            console.log(this.privados);
        });
    }

    public setOpcion( opcion ){
        localStorage.setItem('opcion', opcion);
    }

    public reload(){
        window.location.reload();
    }

    public logout(){
        //this._authService.logout();
    }

    public verImagen(marcador){
        console.log(marcador);
    }

}
