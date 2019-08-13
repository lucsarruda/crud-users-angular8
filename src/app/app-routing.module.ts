import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';
import { UserNovoComponent } from './user-novo/user-novo.component';
import { UserEditarComponent } from './user-editar/user-editar.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Lista de Usuários' }
  },
  {
    path: 'user-detalhe/:id',
    component: UserDetalheComponent,
    data: { title: 'Detalhe do Usuário' }
  },
  {
    path: 'user-novo',
    component: UserNovoComponent,
    data: { title: 'Adicionar Usuário' }
  },
  {
    path: 'user-editar/:id',
    component: UserEditarComponent,
    data: { title: 'Editar o Usuário' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
