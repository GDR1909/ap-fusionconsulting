import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApFusionconsultingService {
  hintIsShown = false;

  constructor() { }

  showHint() {
    this.hintIsShown = true;

    setTimeout(() => {
      this.hintIsShown = false;
    }, 4000);
  }
}