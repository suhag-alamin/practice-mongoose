import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  role?: "student" | "admin";
  email: string;
  password: string;
  dob?: string;
  gender: "male" | "female";
}

// instance method
export interface IUserMethods {
  fullName(): string;
}

// static method
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
