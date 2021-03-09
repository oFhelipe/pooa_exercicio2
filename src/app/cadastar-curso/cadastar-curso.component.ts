import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastar-curso',
  templateUrl: './cadastar-curso.component.html',
  styleUrls: ['./cadastar-curso.component.css']
})
export class CadastarCursoComponent {
  @Output() onClickCadastrarCurso = new EventEmitter();

  adicionarCurso(nome, carga_horaria) {
    const curso = {
     nome, carga_horaria
    }
    this.onClickCadastrarCurso.emit(curso);
 }

}
