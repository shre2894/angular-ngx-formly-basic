import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Contact } from './models/contact.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup;
  contactModel: Contact;
  contactFields: FormlyFieldConfig[];

  constructor() {
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields();
  }

  submitForm(contact: Contact) {
    console.log(contact)
  }
}
