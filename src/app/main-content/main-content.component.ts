import { Component, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { HintMessageSentComponent } from './hint-message-sent/hint-message-sent.component';
import { ApFusionconsultingService } from '../services/ap-fusionconsulting.service';
import { fadeIn } from '../shared/animations';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, ContactComponent, HintMessageSentComponent],
  animations: [fadeIn],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  service = inject(ApFusionconsultingService);
}