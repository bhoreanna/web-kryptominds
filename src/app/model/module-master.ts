import { ScreenMaster } from './screen-master';

export class ModuleMaster {

    public  moduleUid:number ;
	
	public  moduleId:string  ;
	public  moduleName:string ;
	public  createdBy:string   ;
	public  modifiedBy:string    ;
	public  createdDate:Date ;
	public  modifyDate:Date  ;
	public  moduleStatus:string  ; 
	public  select? =false;
	
	public  screenMasterList: ScreenMaster []=[];
	

}
