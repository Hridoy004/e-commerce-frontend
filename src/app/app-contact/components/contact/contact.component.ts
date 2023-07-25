import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // @ts-ignore
  contactFormGroup: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,) {

  }

  ngOnInit(): void {
    this._initCheckoutForm();
  }

  private _initCheckoutForm() {
    this.contactFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],

    });
  }

  get contactForm() {
    return this.contactFormGroup.controls;
  }
}
