import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Ronnan Santos';
  public age = 23;
  public city = "Campo Florido";
  public title = "TEMPLATE BINDING";
  public btnShow = false;
  public countClick:number = 0;
  public srcValue = '../../../../assets/imgs/relax-logo.png'

  public sumClick(): void{
    this.countClick++;
  }

  public showClick(): number{
    console.log('clicado, '+ this.countClick)

    return this.countClick;
  }

}
