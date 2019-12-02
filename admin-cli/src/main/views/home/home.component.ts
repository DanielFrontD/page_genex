import { Component, OnDestroy, OnInit } from '@angular/core';
import { addElementToRef, addScriptTag } from 'src/shared/helpers/webComponents.helper';
import { TemplatesService } from 'src/providers/templates/templates.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gnx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _templateSubscriber: Subscription;

  constructor(private _templatesServices: TemplatesService) { }

  ngOnInit(): void {
    this.addComponent();
  }

  ngOnDestroy(): void {
    if (this._templateSubscriber) { this._templateSubscriber.unsubscribe() }
  }

  addComponent(): void {
    addElementToRef({
      html: `
        <gnx-hello-world
          title="Titulo de hello world"
          description="Esta es una descripcion del componente \'Hello world\'">
        <gnx-hello-world/>`,
      position: 'beforeend',
      parent: 'page-view'
    });

    addScriptTag(['hello-world']);
  }
  addNewComponent(): void {
    let number = document.querySelectorAll('#page-view > gnx-hello-world').length;
    this.addComponent();
  }
  createTemplate(): void {
    const htmlTmpl = document.querySelectorAll('#page-view > *');
    htmlTmpl.forEach(elem => {
      while (elem.hasChildNodes()) {
        elem.removeChild(elem.lastChild);
      }
    })
    var content = document.querySelector('#page-view').innerHTML;
    var scripts = '';

    document.querySelectorAll('.web_component').forEach(elem => {
      scripts += elem.outerHTML;
    })

    this._templateSubscriber = this._templatesServices.saveTemplate({
      name: 'template_1',
      title: 'Pagina de prueba',
      content,
      scripts
    })
    .subscribe(data => console.log(data))
  }
}
