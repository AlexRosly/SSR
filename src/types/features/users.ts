export type User = {
  _id: string | number;
  name: string;
};
export type Users = User[];
export type UsersResponse = { data: Users };
export type OneUserResponse = { data: User };

export type MaybeUser = User | undefined;
