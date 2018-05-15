import { Component } from '@angular/core';
import {SettingsService} from "./services/settings.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
    Nada mas que injectando el servicio en el constructor del app.component, va a disparar el constructor del
    servicio settings.service, donde lanzará la función cargarAjustes para cargar el tema al iniciar o recargar
    la aplicación.
   */
  constructor(public _ajustes: SettingsService){}
}
