import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloWorldComponent]
})
export class HelloWorldModule {
  constructor(private injector: Injector) {}

	ngDoBootstrap(): void {
		const name = 'gnx-hello-world';
		const element = createCustomElement(HelloWorldComponent, { injector: this.injector });
		customElements.define(name, element);
	}
}
