import {Major} from "./major";

export class Student {


  private _id: string;
  private _name: string;
  private _gender: string;
  private _email: string;
  private _phone: string;
  private _major: Major;

  constructor(id: string, name: string, gender: string, email:string, phone:string, major:Major) {
    this._id = id;
    this._name = name;
    this._gender = gender
    this._email = email;
    this._phone = phone;
    this._major = major;
  }
  get major(): Major {
    return this._major;
  }

  set major(value: Major) {
    this._major = value;
  }
  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


}
