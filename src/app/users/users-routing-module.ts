import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importamos la los modulos creados en la carpeta users
import { Index } from './index/index.component';
import { Edit } from './edit/edit.component';
import { create } from './create/create.component';
//rutas para mandar llamar a cada uno de ellos
const routes: Routes = [
  {path: 'users', redirectTo: 'users/index', pathMatch: 'full'},
  {path: 'user/index', component: Index},
  {path: 'user/create', component:create},
  {path: 'user/:idUser/edit', component: Edit}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
