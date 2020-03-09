import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserRoleService } from '../user-role/user-role.service';
import { ModuleMaster } from 'src/app/model/module-master';
import { RoleMaster } from 'src/app/model/role-master';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private userRoleService: UserRoleService, private router: Router, ) {

    console.log('--------------- In AuthGuardService Service: ------------');
  }





  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('-------------------------- canActivate------------------------------------');

    if (this.userRoleService.isUserLogin) {
      return true;

    } else {
      return false;
    }

  }

}
