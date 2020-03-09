import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRoleService } from '../shared/user-role/user-role.service';
import { ModuleMaster } from '../model/module-master';
import { RoleMaster } from '../model/role-master';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css']
})
export class RoleMasterComponent implements OnInit {
  roleMasterList: RoleMaster[] = [];
  statusList = ['ACTIVE', 'INACTIVE'];
  constructor(
    private userRoleService: UserRoleService
  ) { }

  ngOnInit() {

    console.log('in NG ONINIT');
    this.userRoleService.getRoleMasterList().subscribe(res => {
      this.roleMasterList = res;
      console.log(' this.roleMasterList', this.roleMasterList);

    });
  }


  addNewRoleMaster() {
    console.log('RoleMasterComponent -> addNewRoleMaster -> addNewRoleMaster');



    this.roleMasterList.push(new RoleMaster());
    console.log('this.roleMasterList: ', this.roleMasterList.length);

  }

  saveAllRoleMaster() {
    console.log('this.roleMasterList: ', this.roleMasterList);


    this.userRoleService.saveAllRoleMasterList(this.roleMasterList).subscribe(res => {
      console.log('RoleMasterComponent -> addNewRoleMaster -> res', res);

    });

  }



}
