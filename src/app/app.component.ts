import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ap-fusionconsulting';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngOnInit() {
  //   AOS.init({
  //     duration: 1500,
  //     easing: 'ease-in-out',
  //     once: true,
  //   });
  // }

  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     import('aos').then((AOS) => {
  //       AOS.init({
  //         duration: 1500,
  //         easing: 'ease-in-out',
  //         once: true,
  //       });
  //     });
  //   }
  // }

  ngOnInit() {
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        AOS.init({
          duration: 1500,
          easing: 'ease-in-out',
          once: true,
        });
      }
    };
  }
}