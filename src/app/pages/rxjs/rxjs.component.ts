import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // Con el retry, estamos diciendole que cuando encuentre un error intente lanzar de nuevo el observable.
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs ', numero),
      error => console.log('Error en el observador', error),
      () => console.log('El observador terminó')
      )

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador+=1;

        let salida = {
          valor: contador
        }

        observer.next(salida);

        /*if(contador === 3) {
          // No nos vale el clearInterval, porque aunque se dejan de mostrar los mensajes, el observable sigue ejecutandose.
          clearInterval(intervalo);
          observer.complete();
        }*/
        /*if(contador === 2) {
          observer.error('Auxilio');
        }*/
      }, 500);
    }).retry(2)
      .map( (resp: any) => {
      return resp.valor;
    }).filter( (valor, index) => {
      if(valor%2 === 1) {
        // Impar
        return true;
      } else {
        // Par
        return false;
      }
    });

  }

}
