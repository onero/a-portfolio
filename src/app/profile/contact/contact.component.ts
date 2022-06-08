import { EmailModel } from './email.model';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: any;

  constructor(private builder: UntypedFormBuilder,
    private contactService: ContactService) { }

  ngOnInit() {
    this.formData = this.builder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(25)]]
    });
  }

  public async onSubmit(formData: { fullname: string, email: string, comment: string }) {

    const email: EmailModel = {
      fullname: formData.fullname,
      email: formData.email,
      comment: formData.comment
    }
    this.contactService.postMessage(email);

    this.formData.reset();
  }
}