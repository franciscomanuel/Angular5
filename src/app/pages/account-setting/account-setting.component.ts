import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarTema(tema: string, link: any) {

    this.aplicarCheck(link);

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for(let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
