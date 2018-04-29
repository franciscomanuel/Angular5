import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;
  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {

    if ( this.progreso > 100 ) {
      this.progreso = 100;
    } else if ( this.progreso < 0 ) {
      this.progreso = 0;
    } else {
      this.progreso += valor;
    }
  }

}
