import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from "primeng/api";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ContactInterface } from "../../../app-contact/interfaces/contact.interface";
import { ContactService } from "../../../app-contact/services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: ContactInterface[] = [];

  constructor(
    private contactService: ContactService,
    private confirmationService: ConfirmationService,
    private matSnackbar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this._getContact();
  }

  deleteContact(contactId: string) {
    this.contactService.DeleteContact(contactId).subscribe((response: any) => {
      if (response.Success) {
        this.matSnackbar.open('Message deleted successfully', undefined, {
          duration: 3000
        });
        this._getContact();
      }
    })
  }

  private _getContact() {
    this.contactService.GetContact().subscribe((response: any) => {
      this.contacts = response;
    });
  }
}
