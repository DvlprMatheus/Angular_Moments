import { Component } from '@angular/core';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;

  email: string = 'faq@moments.com';
}
