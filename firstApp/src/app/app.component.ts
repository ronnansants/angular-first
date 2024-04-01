import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `

  <p class="perform">TEMPLATE PAI</p>
  <p class="perform">{{ title }}</p>
  <app-template-binding/> `,
  styles: `.perform{
    color: #00668c;
    background-color: #cccbc8;
  }
  `,
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css', */
})
export class AppComponent {
  title = 'Father Component';
}
