import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor( private router: Router, public title: Title, public meta: Meta) {

      this.getDataRow()
        .subscribe( data => {
          this.label = data.titulo;
          this.title.setTitle(this.label);

          let metaTag: MetaDefinition = {
            name: 'description',
            content: this.label
          };

          this.meta.updateTag(metaTag);

        });
  }

  getDataRow() {
    return this.router.events
      .filter( evento => evento instanceof ActivationEnd)
      .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
      .map( (evento: ActivationEnd) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
