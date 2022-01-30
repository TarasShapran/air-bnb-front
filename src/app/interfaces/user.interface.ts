export interface IUser{
  id:string;
  email:string;
  is_active:boolean;
  is_staff:boolean;
  is_superuser:boolean;
  createdAt:Date;
  updatedAt:Date;
}
