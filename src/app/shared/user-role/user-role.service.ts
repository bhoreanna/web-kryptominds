import { Injectable } from '@angular/core';
import { RoleMaster } from 'src/app/model/role-master';
import { HttpClient } from '@angular/common/http';
import { UserMaster } from 'src/app/model/user-master';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthGuardService } from '../guards/auth-guard.service';
import { SERVER_IP_PORT } from 'src/app/app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'auth';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  USER_Name: string = "";
  ROLE_ID: string = "";
  private baseUrl = 'http://localhost:9992';

  constructor(private _http: HttpClient, private router: Router) {


  }




  login(user: UserMaster) {

    console.log('********** UserAuthService *******************');


    const username = user.userName;
    const password = user.password;

    // console.log('User name: ', username);
    // console.log('password: ', password);


    return this._http.post<any>(

      SERVER_IP_PORT + '/authenticate', {
      username,
      password
    }).pipe(
      map(
        data => {
          // console.log('return data : ', data);
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          // console.log('ROLE_ID: ' ,data.role );
          sessionStorage.setItem('ROLE_ID', data.roleId);
          return data;
        }
      )
    );
    // console.log("Execute Hello World Bean Service")
  }



  public userMasterLogOut() {

    sessionStorage.setItem(AUTHENTICATED_USER, "");
    sessionStorage.setItem("ROLE_ID", "");
    sessionStorage.setItem(TOKEN, "");
    //this.authGuardService.flushAuthGurdData();
    this.router.navigate(['/']);

  }


  public isUserLogin() {
    this.USER_Name = sessionStorage.getItem("AUTHENTICATED_USER");
    if (this.USER_Name) {
      console.log('IS LOGIN TRUE IN SERVICE');
      return true;
    }
    console.log('IS LOGIN FALSE IN SERVICE');

    return false;
  }



  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }




  public saveRoleMster(roleMaster: RoleMaster) {
    return this._http.post(SERVER_IP_PORT + '/roleMaster/roleMasters', roleMaster);

  }

  // public updateModuleMster(moduleMaster:ModuleMaster){

  // }

  // public deleteModuleMster(moduleUid:number){

  // }



  public getRoleMasterList() {

    return this._http.get<RoleMaster[]>(SERVER_IP_PORT + '/security/roleMasters');

  }


  public getModuleListByRoleId(roleId: string) {
    return this._http.get<RoleMaster>(SERVER_IP_PORT + '/security/roleMasters/' + roleId);

  }


  public getAllUserMaster() {
    return this._http.get<UserMaster[]>(SERVER_IP_PORT + '/security/userMasters');

  }


  public saveAllRoleMasterList(roleMasterList: RoleMaster[]) {
    return this._http.post(SERVER_IP_PORT + '/security/roleMasters', roleMasterList);

  }


  public saveUserMster(userMaster: UserMaster) {
    return this._http.post(SERVER_IP_PORT + '/security/saveUserMaster', userMaster);

  }




  public loginUserMster(userMaster: UserMaster) {
    return this._http.post<UserMaster>(SERVER_IP_PORT + '/security/userMasters', userMaster);

  }


  searchUserMasterByUserId(userId: string) {
    return this._http.get<UserMaster>(SERVER_IP_PORT + '/security/userMasterByUserId/' + userId);

  }


}
