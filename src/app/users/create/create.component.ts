import { Component, OnInit } from '@angular/core';
//importamos tres cosas, como el servicio, la redireccion , y validacon de formulario
//(utilizacion de paquetesde angular)
import { Users } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.css'
})
export class create  implements OnInit{
  form: FormGroup;

  constructor(
    public Users: Users,
    private router: Router
  ){}

  ngOnInit(): void {
 //validacion con expresiones regulares para los campos ingresados del fomulario
  this.form = new FormGroup({
    nombre:  new FormControl ('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    curp: new FormControl ("", [Validators.required, Validators.pattern('/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/')]),
    edad: new FormControl("", [Validators.required, Validators.pattern('/^[1-9][0-9]?$|^100$/')]),
    fechaRegistro: new FormControl("", [Validators.required, Validators.pattern('^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$')]),
    email: new FormControl  ("", [Validators.required, Validators.email])
    });
  }
  //validamos que los campos esten validados
  get f(){
    return this.form.controls;
  }
  //boton para enviar a la base de datos
  submit(){
    console.log(this.form.value);
    this.Users.create(this.form.value).subscribe(res =>{
      console.log('usuario ingresado');
      this.router.navigateByUrl('user/index');
    })
  }
}

