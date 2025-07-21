import { Component, OnInit } from '@angular/core';
//importamos las rutas de los componentes que vamos a utilizar
import { Users } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl:'./edit.html',
  styleUrl:'./edit.css'
})
export class Edit implements OnInit {
  id: number;
  user: User;
  form: FormGroup;

  constructor(
    public userService: Users,
    private route: ActivatedRoute,
    private router: Router
  )
{}
  ngOnInit(): void {
      this.id = this.route.snapshot.params['idUser']
      this.userService.find(this.id).subscribe((data:User)=>{
        this.user = data;
      });
   //validamos nuevamente
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
    this.userService.update(this.id, this.form.value).subscribe(res =>{
      console.log('usuario ingresado');
      this.router.navigateByUrl('user/index');
    })
  }
}
