import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { LogStateService } from '../log-state.service';
import { LoginCheckService } from '../login-check.service';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {

    public userName: string = "Danillo";
    public isLogged: boolean;
    public userType: number = 2;
    public users: User[];

    constructor(
      private log: LogStateService,
      private loginService: LoginCheckService

      ) { }

      ngOnInit() {
        this.changeState()
      }

      public logout(): void{
        this.isLogged = false
      }

      changeState(){
        this.log.atualState.subscribe(state => this.isLogged = state)
      }

      isloggedCheck(){
        if(this.loginService.getUserSession !== undefined){
          this.log.changeStateLogin(true)
        }
      }





    }
