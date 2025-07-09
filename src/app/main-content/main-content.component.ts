import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { HintMessageSentComponent } from './hint-message-sent/hint-message-sent.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, ContactComponent, HintMessageSentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
