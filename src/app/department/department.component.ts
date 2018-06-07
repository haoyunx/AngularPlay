import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Department } from '../models/department';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department;
  departmentId: string;

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.departmentId = params.get('id');
        this.departmentService.getDepartmentById(this.departmentId).subscribe(
          d => {
            this.department = d;
          }
        );
      }
    )
  }

}
