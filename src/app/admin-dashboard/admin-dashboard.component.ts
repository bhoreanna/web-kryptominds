import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../shared/user-role/user-role.service';
import { UserMaster } from '../model/user-master';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userMasterList: UserMaster[] = [];
  selectedUserMaster = new UserMaster();

  showUserMasterChild = false;
  constructor(private userRoleService: UserRoleService) { }

  ngOnInit() {
    console.log('api calll=========');

    this.userRoleService.getAllUserMaster().subscribe(res => {
      this.userMasterList = res;
      console.log('AdminDashboardComponent -> ngOnInit ->  this.userMasterList', this.userMasterList);
    });
  }

  public goHome() {
    console.log('You CLICK USER');
  }


  userMasterRow(userMaster: UserMaster) {
    console.log('AdminDashboardComponent -> userMasterRow -> userMaster', userMaster);

    this.showUserMasterChild = true;
    this.selectedUserMaster = userMaster;

  }
}
