import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
authors:any[]=[]
  constructor(private usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.getAllAuthor().subscribe((data:any)=>{
      console.log(data)
      this.authors=data
    })
  }

}
