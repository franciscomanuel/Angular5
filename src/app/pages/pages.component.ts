import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Para cargar el archivo "assets/js/custom.js" y poder manejar la funcionalidad del shidebar
    init_plugins();
  }

}
