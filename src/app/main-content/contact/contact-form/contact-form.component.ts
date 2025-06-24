import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  /** HTTP client for sending requests. */
  http = inject(HttpClient);

  /** Data object representing the contact form. */
  contactData = {
    name: '',
    email: '',
    // message: '',
    privacyPolicy: false
  }

  /** Indicates if a mail test is currently being performed. */
  mailTest = false;

  /** Configuration for the HTTP POST request. */
  post = {
    endPoint: 'https://apdrtest.de/sendMail.php',  // 'https://deineDomain.de/sendMail.php'
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  // /**
  //  * Creates an instance of ContactFormComponent.
  //  *
  //  * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
  //  * @param {TranslateService} translate - The service used for language translation.
  //  */
  // constructor() { }


  /**
   * Updates the privacy policy acceptance status based on the checkbox state.
   *
   * @param {any} event - The event object representing the checkbox state change.
   */
  privacyPolicyAccepted(event: any) {
    const isChecked = event.target.checked;
    this.contactData.privacyPolicy = isChecked;
  }

  
  /**
   * Handles form submission.
   *
   * @param {NgForm} ngForm - The NgForm object representing the form.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // this.portfolioService.showSentMessagePopUp(); //GANZ WICHTIG. DIESE ZEILE ABÄNDERN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // optionial code can be added here
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Perform mail test-specific actions
      ngForm.resetForm();
    }
  }
}