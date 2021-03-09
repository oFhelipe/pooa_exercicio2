import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  cursos = [
    {
      nome: "POOA",
      carga_horaria:100
    },
    {
      nome: "Redes",
      carga_horaria:150
    }
  ]

  addCurso(curso) {
    this.cursos.push(curso);
  }
}
