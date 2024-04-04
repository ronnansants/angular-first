import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NewComponent, TemplateBindingComponent,TemplateVariablesComponent, ControlFlowComponent, DeferrableViewsComponent
  ],
  template: `
  <div class="container">

  <app-deferrable-views></app-deferrable-views>
  <br>
  <app-control-flow></app-control-flow>

  <hr><br><br>

  <p class="perform">TEMPLATE PAI</p>
  <p class="perform">{{ title }}</p>
  <app-template-binding/>
  <app-template-variables></app-template-variables>

  </div>
  `,
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
