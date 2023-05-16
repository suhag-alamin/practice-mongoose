import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (data: IUser): Promise<IUser> => {
  const user = await new User(data);
  await user.save();
  return user;
};

/* {
    id: "20",
    name: {
      firstName: "Suhag",
      lastName: "Al Amin",
    },
    email: "sm@gmail.com",
    password: "1234",
    gender: "female",
  } */

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};
