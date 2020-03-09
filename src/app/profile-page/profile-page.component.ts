import { Component, OnInit } from '@angular/core';
import { UserRoleService, AUTHENTICATED_USER } from '../shared/user-role/user-role.service';
import { UserMaster } from '../model/user-master';
import { Address } from '../model/address';
import { Personal } from '../model/personal';
import { ProfessionalDetail } from '../model/professional-detail';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  userMaster = new UserMaster();

  constructor(private userRoleService: UserRoleService) {
    this.userMaster.professionalDetail = new ProfessionalDetail();
    this.userMaster.personal = new Personal();
    this.userMaster.address = new Address();

  }

  ngOnInit() {
    const userId = sessionStorage.getItem('auth');
    console.log('ProfilePageComponent -> ngOnInit -> userId', userId);

    if (userId) {
      this.userRoleService.searchUserMasterByUserId(userId).subscribe(res => {
        console.log(' -> ngOnInit -> res', res);
        this.userMaster = res;

        if (this.userMaster.address === null) {
          this.userMaster.address = new Address();
          this.userMaster.address.userUid = this.userMaster.userUid;

        }

        if (this.userMaster.personal === null) {
          this.userMaster.personal = new Personal();
          this.userMaster.personal.userUid = this.userMaster.userUid;
        }

        if (this.userMaster.professionalDetail === null) {
          this.userMaster.professionalDetail = new ProfessionalDetail();
          this.userMaster.professionalDetail.userUid = this.userMaster.userUid;
        }
      });
    }

  }

  onSubmit() {
    console.log('this.userMaster', this.userMaster);
    this.userRoleService.saveUserMster(this.userMaster).subscribe(res => {
      console.log('ProfilePageComponent -> onSubmit -> res', res);

    });
  }

}
