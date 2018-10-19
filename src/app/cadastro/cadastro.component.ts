import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  newUser : User = new User()
  
  constructor(private auth : AuthService, private route : Router) { }

  createUser(){
    if(this.validateInfo() && !this.auth.isValid(this.newUser)){
      this.route.navigate(['home'])
      window.alert('Cadastro realizado com sucesso!')
    }else{
      window.alert('Usuário já existente, por favor, tente novamente')
    }
  }

  validateInfo() : boolean{
    if(this.newUser.nome === '' || this.newUser.email === '' || this.newUser.password === ''){
      return false
    }else{
      return true
    }

  }

  ngOnInit() {
  }

}
