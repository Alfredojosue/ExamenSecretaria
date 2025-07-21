import { Component } from '@angular/core';
//importamos el servicio
import { Users } from '../users.service';
import { User } from '../user';
@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
//se crea la variable persona para exportar el servicio previamente creado
userss: User[] = [];
//constructor
constructor(public Users: Users){}

ngOnInit(): void {
  this.Users.getAll().subscribe((data: User[])=>{
    this.userss = data;
    console.log(this.userss);
  })
}

deleteUser(id:number){
  this.Users.delete(id).subscribe(res => {
       this.userss = this.userss.filter(item => item.id !== id);
       console.log('Persona elimina correctamente');
  })
}
}
