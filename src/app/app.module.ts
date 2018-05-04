import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MarcadoresService } from './providers/marcadores.service';


@NgModule({
    declarations: [
        AppComponent,
        MapaComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDdbv9LLR2SMpO-7d_FkbVN9XhPRsEnQSg'
        })
    ],
    providers: [MarcadoresService],
    bootstrap: [AppComponent]
})
export class AppModule { }
