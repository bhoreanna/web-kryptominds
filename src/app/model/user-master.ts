import { RoleMaster } from './role-master';
import { ProfessionalDetail } from './professional-detail';
import { Personal } from './personal';
import { Address } from './address';

export class UserMaster {
	public userUid: number;
	public userId: string;
	public userName: string;
	public createdBy: string;
	public modifiedBy: string;
	public createdDate: Date;
	public modifyDate: Date;
	public userStatus: string;
	public password: string;
	public email: string;
	public roleMaster: RoleMaster;
	public professionalDetail: ProfessionalDetail;
	public personal: Personal;
	public address: Address;

}
