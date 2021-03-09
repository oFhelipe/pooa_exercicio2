import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CadastarCursoComponent } from './cadastar-curso/cadastar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ListaCursosComponent,
    CadastarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
