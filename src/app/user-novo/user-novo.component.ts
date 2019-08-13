import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-novo',
  templateUrl: './user-novo.component.html',
  styleUrls: ['./user-novo.component.scss']
})
export class UserNovoComponent implements OnInit {

  userForm: FormGroup;
  isLoadingResults = false;
  hide = true;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
        'id' : [null, Validators.required],
        'nome_user' : [null, [Validators.required, Validators.minLength(4)]],
        'email_user' : [null,  [Validators.required, Validators.email ]],
        'password_user' : [null, [Validators.required, Validators.minLength(2)]],
        'idade_user' : [],
      });
 }

 addUser(form: NgForm) {
  this.isLoadingResults = true;
  this.api.addUser(form)
    .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/user-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}

}
