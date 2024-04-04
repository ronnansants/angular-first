import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  public headerTitle = "Deferrable Views"
}
