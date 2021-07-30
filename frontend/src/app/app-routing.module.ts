import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListadoPostsComponent } from './pages/listado-posts/listado-posts.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path:'',component:ListadoComponent},
  {path:'listado',component:ListadoComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'posts', component:ListadoPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
