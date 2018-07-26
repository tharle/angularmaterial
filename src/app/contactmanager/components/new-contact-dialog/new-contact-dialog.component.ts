import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {
  private user: User;
  private avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  nameFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    this.user = new User();
  }

  getErrorMessage() {
    return this.nameFormControl.hasError('required') ? 'You must enter a name' : '';
  }
  
  save(){
    this.dialogRef.close(this.user);
  }

  dismiss(){
    this.dialogRef.close(null);
  }

}
