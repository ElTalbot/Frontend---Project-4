import { IUser } from "./user";

export interface IPost {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user: any;
  user_id: string;
  username: string;
}
