import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /**
   * newUser é o nome da variável definida como do tipo User, que contém nome, email e senha.
   * Quando o usuário preencher os campos no HTML esse objeto é automaticamente preenchido
   * ele é o agente principal do fluxo.
   */
  newUser : User = new User();
 
  constructor(private auth : AuthService, private route : Router) { }


  /**
   * Método que faz duas ações condicionais. 1- no condicional if, chama o método validateInfo e verifica
   * se os campos foram preenchidos. 2 - também no condicional if, chama o método do service isValid enviando
   * o usuário ( newUser ) para verificar se ele existe no sistema.
   */
  login(){
      if(this.validateInfo() && this.auth.isValid(this.newUser)){
        this.route.navigate(['home'])
      }else{
        window.alert('Usuário ou senha incorretos')
      }
    }

  /**
   * Método que faz a validação dos campos se realmente foram digitados, esse método tem retorno boolean
   * ou seja poderá retornar true ou false de acordo com a verificação
   */
  validateInfo() : boolean{
    if(this.newUser.email === '' || this.newUser.password === ''){
      return false
    }else{
      return true
    }

  }

}
