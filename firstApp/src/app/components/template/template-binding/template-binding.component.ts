import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Ronnan Santos';
  public age = 23;
  public city = "Campo Florido";
  public title = "TEMPLATE BINDING";
  public btnShow = false;
  public srcValue = '../../../../assets/imgs/relax-logo.png'
}
