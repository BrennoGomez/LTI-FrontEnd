import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  newTarefa : Tarefa = new Tarefa();

  constructor(private auth : AuthService, private route : Router) { }

  ngOnInit() {
  }

  adicionarTarefa(){
    if(this.validateInfo() && !this.auth.isValido(this.newTarefa)){
      this.route.navigate(['home'])
      window.alert('Tarefa adicionada com sucesso')
    }else{
      window.alert('Tarefa não adicionada')
    }
  }

  editarTarefa(){

  }

  apagarTarefa(){

  }

  validateInfo() : boolean{
    if(this.newTarefa.nome === '' || this.newTarefa.data === ''){
      return false
    }else{
      return true
    }
  }
}
