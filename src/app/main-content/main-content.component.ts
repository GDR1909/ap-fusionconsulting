import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FormularComponent } from './formular/formular.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, FormularComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
