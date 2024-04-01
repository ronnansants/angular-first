import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [ NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('h2') public contentP!: ElementRef
  @ViewChild('name') public inputName!: ElementRef

  ngAfterViewInit(): void {
    console.log(this.contentP.nativeElement.innerHTML);
    console.log(this.inputName.nativeElement.value)
  }

}
