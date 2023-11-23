import {style} from "@angular/animations";
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {Major} from "../model/major";
import {Student} from "../model/student";
import {CommonService} from "../Services/common.service";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  public studentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    majorId: new FormControl('')
  })

  constructor(private common: CommonService) {
  }

  public majors: Major[] = [];

  ngOnInit(): void {
    this.common.getAllMajor().subscribe(data => {
      this.majors = data;
    })
  }


  public onSubmit() {
    // let student: Student = {
    //   id: "",
    //   name: "",
    //   gender: "",
    //   email: "",
    //   phone: "",
    //   major: {
    //     majorId: 0,
    //     majorName: "",
    //     majorHotline: ""
    //   }
    // };

    // let id: string = this.studentForm.controls['id'].value;
    // let name: string = this.studentForm.controls['name'].value;
    // let gender: string = this.studentForm.controls['gender'].value;
    // let phone: string = this.studentForm.controls['phone'].value;
    // let mail: string = this.studentForm.controls['mail'].value;
    // let majorID: number = this.studentForm.controls['majorId'].value;
    // let major = this.majors.find(major => major.majorId === majorID);
    //
    // let student: Student = new Student(id, name, gender, mail, phone, major as Major);

    // console.log(student);

    const student: any = {};

    for (const controlsKey in this.studentForm.controls) {
      if (controlsKey == "majorId") {
        let majorId = this.studentForm.controls[controlsKey].value;
        let major = this.majors.find(major => major.majorId == majorId);
        if (major) {
          student['major'] = major;
        }
      } else if (controlsKey) {
        student[controlsKey] = this.studentForm.controls[controlsKey].value;
      }
    }

    this.common.addStudent(student as Student).subscribe(data => {
      console.log(data);
    })
  }
}
