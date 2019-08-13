import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  User } from "src/model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isLoadingResults = true;

  displayedColumns: string[] = [ "id", "nome_user", "email_user", "idade_user" , "acao"];
  dataSource: User[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getUsers()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
