import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: ['']
  })
  constructor(private fb: FormBuilder, private usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }
agregar(){
  this.usuariosService.createAuthor(this.profileForm.value).
  subscribe(data=>console.log(data))
}
}
