import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-editar',
  templateUrl: './user-editar.component.html',
  styleUrls: ['./user-editar.component.scss']
})


export class UserEditarComponent implements OnInit {
  
  userForm: FormGroup;
  id: String = '';
  nome_user: String = '';
  idade_user: number = null;
  isLoadingResults = false;
  hide = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
    this.userForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'nome_user' : [null, Validators.required],
      'email_user' : [null, [Validators.required, Validators.email ]],
      'password_user' : [null, Validators.required],
      'idade_user' : [null, Validators.required],
    });
 }

  getUser(id) {
    this.api.getUser(id).subscribe(data => {
      this.id = data.id;
      this.userForm.setValue({
        id: data.id,
        nome_user: data.nome_user,
        email_user: data.email_user,
        password_user: data.password_user,
        idade_user: data.idade_user,
      });
    });
  }

  updateUser(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateUser(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/user-detalhe/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}