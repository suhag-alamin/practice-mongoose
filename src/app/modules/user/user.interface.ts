export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  role?: "student";
  email: string;
  password: string;
  dob?: string;
  gender: "male" | "female";
}
