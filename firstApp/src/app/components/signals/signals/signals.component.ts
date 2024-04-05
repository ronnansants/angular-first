import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Ronnan');
  public lastName = signal('Santos');
  public age = signal(23);
  public fullName = computed(()=>{
    return this.firstName() + ' '+this.lastName()+' ('+this.age()+')';
  })

  public array = signal([1]);

  constructor(){
  }

  public updateAge(){
    return this.age.set(Math.random() * 50 | 0);
  }

  public updateArray(){
    /*
    this.array().update((oldValue: Array<number>)=>{
      console.log(oldValue);
      return oldValue;
    })
    */
  }
}
