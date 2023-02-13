import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkyValidators } from '@skyux/validation';
import { Contact } from 'src/app/models/contact-data.model';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  public firstName: UntypedFormControl;
  public lastName: UntypedFormControl;
  public email: UntypedFormControl;
  public dob: UntypedFormControl;
  public address: UntypedFormControl;
  public contactNo: UntypedFormControl;
  public frmContact: UntypedFormGroup;

  constructor(
    private router: Router
  ) {
    this.firstName = new UntypedFormControl('', Validators.required);
    this.lastName = new UntypedFormControl('', Validators.required);
    this.email = new UntypedFormControl('', [
      Validators.required,
      SkyValidators.email,
    ]);
    this.dob = new UntypedFormControl('', Validators.required);
    this.address = new UntypedFormControl('');
    this.contactNo = new UntypedFormControl('');
    this.frmContact = new UntypedFormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      contactNo: this.contactNo,
      email: this.email,
      dob: this.dob,
      address: this.address
    });
  }

  ngOnInit(): void {

  }

  saveContact() {

    if (this.frmContact.valid) {
      let contactData = this.frmContact.value as Contact;
      console.log(contactData);
      alert('Contact saved!!');

      this.router.navigate(['contacts']);

    } else {
      this.frmContact.markAllAsTouched();
    }
  }

}
