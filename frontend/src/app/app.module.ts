import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './shared/aside/aside.component';
import { ListadoPostsComponent } from './pages/listado-posts/listado-posts.component';
import { FormularioPostsComponent } from './pages/formulario-posts/formulario-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    ListadoPostsComponent,
    FormularioPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
