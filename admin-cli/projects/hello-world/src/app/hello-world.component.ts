import { Component, Input } from '@angular/core';

@Component({
  selector: 'gnx-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  @Input() title: string;
  @Input() description: string;
}
