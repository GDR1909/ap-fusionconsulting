import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApFusionconsultingService {
  hintIsShown: boolean = false;

  constructor() { }

  showHint() {
    this.hintIsShown = true;

    setTimeout(() => {
      this.hintIsShown = false;
    }, 4000);
  }
}