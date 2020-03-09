import { Component, OnInit } from '@angular/core';
import { RoleMaster } from '../model/role-master';
import { UserMaster } from '../model/user-master';
import { UserRoleService } from '../shared/user-role/user-role.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
  roleMasterList: RoleMaster[] = [];
  userMaster = new UserMaster();
  hideShowAddFlag = true;
  hideShowUpdateFlag = false;
  userMasterSearchObj = new UserMaster();

  constructor(private userRoleService: UserRoleService) { }

  ngOnInit() {

    this.loadData();

  }

  public loadData() {
    this.userRoleService.getRoleMasterList().subscribe(res => {
      this.roleMasterList = res;
      console.log('this.roleMasterList: ', this.roleMasterList);
    });
  }

  public onSubmit(f: Form) {

    console.log('userMaster: ', this.userMaster);
    this.userRoleService.saveUserMster(this.userMaster).subscribe(res => {
      console.log('res: ', res);

      this.userMaster = new UserMaster();
    });
    this.userMaster = new UserMaster();
  }


  addForm() {
    this.loadData();
    this.hideShowAddFlag = true;
    this.hideShowUpdateFlag = false;
    console.log('Adding data');
    this.userMasterSearchObj = new UserMaster();

  }


  public searchUserMaster() {
    console.log('serach user by userId: ', this.userMasterSearchObj.userId);
    if (this.userMasterSearchObj.userId) {
      this.userRoleService.searchUserMasterByUserId(this.userMasterSearchObj.userId).subscribe(
        res => {
          console.log('User Master Return : ', res);
          this.loadData();

          this.userMasterSearchObj = res;
        }
      )

        ;

    }
  }
  updateForm() {

    console.log('Updating data');

    this.hideShowAddFlag = false;
    this.hideShowUpdateFlag = true;
    // this.userMasterSearchObj = new UserMaster();
  }

  public updateUserMaster() {
    console.log('Update UserMaster', this.userMasterSearchObj);

    this.userRoleService.saveUserMster(this.userMasterSearchObj).subscribe(res => {
      console.log('res: ', res);
    });
  }

}
