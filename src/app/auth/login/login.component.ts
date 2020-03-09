import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/model/user-master';
import { UserRoleService } from 'src/app/shared/user-role/user-role.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showUserLoginOrRegister = true;
  userMaster = new UserMaster();
  signupUserMaster = new UserMaster();

  constructor(private router: Router, private userRoleService: UserRoleService
  ) { }

  ngOnInit() {


  }



  onLoginSignUp() {
    this.showUserLoginOrRegister = !this.showUserLoginOrRegister;
  }

  onSignUpSubmit() {
    console.log(' onSignUpSubmit -> this.signupUserMaster', this.signupUserMaster);
  }
  onSubmit() {
    console.log('User Data: ', this.userMaster);

    this.userRoleService.login(this.userMaster).subscribe(res => {

      console.log('LOgin Sucess: ', res);
      if (res) {
        this.router.navigate(['/home']);

      } else {
        console.log('====Flusiing Data in Login when user Not match====');
        this.router.navigate(['/']);
      }


    }, (error) => {
      console.log(error);
    }
    );







    // this.userRoleService.loginUserMster(this.userMaster).subscribe(res => {

    //   console.log('LOgin Sucess: ', res);
    //   sessionStorage.setItem("USER_ID",res.userId);
    //   sessionStorage.setItem("ROLE_ID",res.roleMaster.roleId);

    //   this.router.navigate(['/home']);


    // });
  }

}
