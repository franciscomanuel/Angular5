import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  //@Output() cambioValor: EventEmitter<number> = new EventEmitter();

  // Si dentro de los parentesis del Output pongo un nombre, entonces la variable cambioValor se llama con el nombre
  // de dentro de los parentesis, es decir (actualizaValor).
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log("Leyenda", this.leyenda);
    //console.log("Progreso", this.progreso);
  }

  ngOnInit() {
    //console.log("Leyenda", this.leyenda);
    //console.log("Progreso", this.progreso);
  }

  onChanges(newValue: number) {

    if(newValue >= 100) {
      this.progreso = 100;
    }else if(newValue <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
    } else if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso += valor;
    }
    this.cambioValor.emit(this.progreso);

    //Para establecer el foco en el input usamos la siguiente linea
    this.txtProgress.nativeElement.focus();
  }

}
