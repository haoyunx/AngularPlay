import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private apiService: ApiService) { }

  getAllDepartments(): Observable<Department[]> {
    return this.apiService.getAll('department');
  }

  getDepartmentById(id: string): Observable<Department> {
    return this.apiService.getOne('department', id);
  }
}
