import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'hifi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hifi';
  items: FirebaseListObservable<any[]>;
  _regForm: FormGroup;
  constructor(private db: AngularFireDatabase,
              private _fb: FormBuilder,
              private _fireAuth: AngularFireAuth) {
    this._regForm = _fb.group({
      'uname': ['', Validators.required],
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', Validators.required],
      'mobile': ['', Validators.required],
      'pcode': ['', Validators.required]
    })
  }

  submitForm(_formData: any): void{
    //console.log(_formData);
    this._fireAuth.auth.createUserWithEmailAndPassword(_formData.email, _formData.pcode).catch( (error:any) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error => ', errorCode, errorMessage);
      alert(errorMessage);
      // ...
    }).then((data) => {
      //Resolved
      //console.log('Resolved => ',data);
      this.db.list('/users').subscribe(data => {
        data.forEach((ele, index) => {
          console.log(ele, index);
        });
      })
    }, (data) => {
      //Rejected
      //console.log('Rejected => ', data);
    });
    //console.log(this.db.list('/users'));
  }
}
