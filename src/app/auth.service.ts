import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Tarefa } from './models/tarefa';

@Injectable()
export class AuthService {
  /**
   * Lista de Usuários do sistema
   * Essa lista Array tipo User, contém um usuário.
   */
  private users : Array<User> = [
    {nome : 'breno', email : 'adm@breno', password : '123'},
    {nome : 'adm', email : 'adm@123', password : '123'}
  ]
  /**
   * Lista de Tarefas do sistema
   * Essa lista Array tipo Tarefa, contém uma tarefa.
   */
  private tarefas : Array<Tarefa> = [
    {nome : 'Unifacisa Week', data: '20/10/2018'}
  ]

  constructor() { }
  /**
   * Método para verificar se o usuário recebido contém na lista definida acima ( users )
   * usando escopo simples
   * @param user
   */
  isValid(user : User){
    let result : boolean = false 
    this.users.forEach(element=>{
      if(element.email === user.email && element.password === user.password){
        result = true
      }
    })
    return result
  }

  isValido(tarefa : Tarefa) {
    let resultado : boolean = false
    this.tarefas.forEach(elemento=>{
      if(elemento.nome === tarefa.nome && elemento.data === tarefa.data){
        resultado = true
      }
    })
    return resultado
  }

}