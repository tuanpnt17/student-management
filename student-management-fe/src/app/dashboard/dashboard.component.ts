import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {Route, Router, Routes} from "@angular/router";
import {Student} from "../model/student";
import {CommonService} from "../Services/common.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public studentList: Student[] = [];

  constructor(private route: Router, private common: CommonService) {
  }

  ngOnInit(): void {
    this.common.getAllStudent().subscribe((data) => {
      console.log(data);
      this.studentList = data;
    });
  }


  public addStudent() {
    this.route.navigate(['add']);
  }

  public updateStudent(): void {
    this.route.navigate(['update']);
  }
}
