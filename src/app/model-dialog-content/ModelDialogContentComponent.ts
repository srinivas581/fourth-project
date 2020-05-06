import { Component, OnInit } from '@angular/core';
import { ModelDialogComponent } from '../model-dialog/model-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-dialog-content',
  templateUrl: './model-dialog-content.component.html',
  styleUrls: ['./model-dialog-content.component.css']
})
export class ModelDialogContentComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  submissionForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      doorNo: new FormControl(''),
      nagar: new FormControl(''),
      city: new FormControl(''),
      postalcode: new FormControl(''),
      street: new FormControl(''),
      area: new FormControl(''),
      state: new FormControl('')
    })
  });
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModelDialogComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  loadApi() {
    this.submissionForm.setValue({
      name: 'Adithya',
      email: 'nvrsai06@gmial.com',
      password: 'qwerty',
      confirmPassword: 'qwerty',
      address: {
        doorNo: '56',
        nagar: 'vivekananda',
        city: 'Tirupathi',
        postalcode: '517505',
        street: 'First Street',
        area: 'Staff Quartes',
        state: 'Andhra Pradesh'
      }
    }); void
    console.log(this.submissionForm.value);
  }
  
}