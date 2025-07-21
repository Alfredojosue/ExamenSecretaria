import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//configuramos el modulo usuario, mandando llamar las funcione
import { UsersRoutingModule } from './users-routing-module';
import { Index } from './index/index.component';
import { create } from './create/create.component';
import { Edit } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        Index,
        create,
        Edit
    ],
    declarations:[],
    exports:[
      CommonModule,
      FormsModule ,
      ReactiveFormsModule
    ]
})
export class UsersModule { }
