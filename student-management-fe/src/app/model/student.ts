import {Major} from "./major";

export interface Student {
  id: string,
  name: string,
  gender: string,
  email: string,
  phone: string,
  major: Major
}
