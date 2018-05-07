import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MarcadoresService } from './providers/marcadores.service';
import { VerComponent } from './components/ver/ver.component';


@NgModule({
    entryComponents:[
        VerComponent
    ],
    declarations: [
        AppComponent,
        MapaComponent,
        VerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDdbv9LLR2SMpO-7d_FkbVN9XhPRsEnQSg'
        })
    ],
    providers: [MarcadoresService],
    bootstrap: [AppComponent]
})
export class AppModule { }
