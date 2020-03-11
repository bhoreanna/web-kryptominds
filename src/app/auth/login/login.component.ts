import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/model/user-master';
import { UserRoleService } from 'src/app/shared/user-role/user-role.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RoleMaster } from 'src/app/model/role-master';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showUserLoginOrRegister = true;
  userMaster = new UserMaster();
  signupUserMaster = new UserMaster();

  roleMasterList: RoleMaster[] = [];

  constructor(private router: Router, private userRoleService: UserRoleService
  ) { }


  ngOnInit() {

    this.loadData();

  }

  public loadData() {
    this.userRoleService.getWithoutSignUpRoleMasterList().subscribe(res => {
      this.roleMasterList = res;
      console.log('this.roleMasterList: ', this.roleMasterList);
    });
  }


  onLoginSignUp() {
    this.showUserLoginOrRegister = !this.showUserLoginOrRegister;
  }

  onSignUpSubmit() {
    console.log(' onSignUpSubmit -> this.signupUserMaster', this.signupUserMaster);

    this.userRoleService.saveSignupUserMaster(this.signupUserMaster).subscribe(res => {
      console.log('res: ', res);

      if (res) {
        console.log('new user created successfully');

        //  this.router.navigate(['/']);
        this.showUserLoginOrRegister = true;
        this.signupUserMaster = new UserMaster();
      } else {
        console.log('something wrong new user creation');

      }

    });
    this.signupUserMaster = new UserMaster();

  }
  onSubmit() {
    console.log('User Data: ', this.userMaster);

    this.userRoleService.login(this.userMaster).subscribe(res => {

      console.log('LOgin Sucess: ', res);
      if (res) {

        if (res.roleId === 'admin') {
          this.router.navigate(['/home/admin-dashboard']);

        } else {
          this.router.navigate(['/home/profile-page']);

        }
        //  this.router.navigate(['/home']);

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
