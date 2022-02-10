import { EmailModel } from './email.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: any;

  constructor(private builder: FormBuilder,
    private contactService: ContactService) { }

  ngOnInit() {
    this.formData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(formData: {fullname: string, email: string, comment: string}) {

    const email: EmailModel = {
      fullname: formData.fullname,
      email: formData.email,
      comment: formData.comment
    }
    this.contactService.postMessage(email);
  }
}